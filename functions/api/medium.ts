const MEDIUM_FEED_URL = "https://medium.com/feed/@elachabko";

type MediumPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  image: string | null;
  categories: string[];
  readTime: string;
};

const stripCdata = (value: string) =>
  value
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .trim();

const decodeEntities = (value: string) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code) =>
      String.fromCodePoint(Number(code))
    )
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCodePoint(parseInt(code, 16))
    );

const getTag = (xml: string, tag: string) => {
  const escapedTag = tag.replace(":", "\\:");
  const match = xml.match(
    new RegExp(`<${escapedTag}[^>]*>([\\s\\S]*?)<\\/${escapedTag}>`, "i")
  );

  if (!match) return "";

  return decodeEntities(stripCdata(match[1]));
};

const getAllTags = (xml: string, tag: string) => {
  const escapedTag = tag.replace(":", "\\:");
  const regex = new RegExp(
    `<${escapedTag}[^>]*>([\\s\\S]*?)<\\/${escapedTag}>`,
    "gi"
  );

  return [...xml.matchAll(regex)]
    .map((match) => decodeEntities(stripCdata(match[1])))
    .filter(Boolean);
};

const stripHtml = (html: string) =>
  decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  );

const createExcerpt = (content: string, maxLength = 220) => {
  const text = stripHtml(content);

  if (text.length <= maxLength) {
    return text;
  }

  const shortened = text.slice(0, maxLength);
  const lastSpace = shortened.lastIndexOf(" ");

  return `${shortened.slice(0, lastSpace > 0 ? lastSpace : maxLength)}…`;
};

const getFirstImage = (content: string) => {
  const images = [...content.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)]
    .map((match) => decodeEntities(match[1]))
    .filter(
      (src) =>
        !src.includes("/_/stat") &&
        !src.includes("medium.com/m/global")
    );

  return images[0] || null;
};

const cleanMediumUrl = (link: string) => {
  try {
    const url = new URL(link);

    // Usuwamy parametry techniczne RSS/Medium.
    url.search = "";

    return url.toString();
  } catch {
    return link;
  }
};

const calculateReadTime = (content: string) => {
  const text = stripHtml(content);

  if (!text) {
    return "1 min";
  }

  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min`;
};

const createId = (link: string) => {
  const match = link.match(/-([a-f0-9]{8,})/i);

  return match?.[1] || link;
};

const parseMediumFeed = (xml: string): MediumPost[] => {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];

  return items
    .map((match) => {
      const item = match[1];

      const title = getTag(item, "title");
      const rawLink = getTag(item, "link");
      const published = getTag(item, "pubDate");
      const content = getTag(item, "content:encoded");

      if (!title || !rawLink) {
        return null;
      }

      const link = cleanMediumUrl(rawLink);

      const parsedDate = published
        ? new Date(published)
        : null;

      return {
        id: createId(link),
        title,
        excerpt: createExcerpt(content),
        date:
          parsedDate && !Number.isNaN(parsedDate.getTime())
            ? parsedDate.toISOString()
            : "",
        link,
        image: getFirstImage(content),
        categories: getAllTags(item, "category"),
        readTime: calculateReadTime(content),
      };
    })
    .filter((post): post is MediumPost => Boolean(post));
};

export async function onRequestGet() {
  try {
    const response = await fetch(MEDIUM_FEED_URL, {
      headers: {
        Accept:
          "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
        "User-Agent": "Digitilio-Knowledge-Base/1.0",
      },
    });

    if (!response.ok) {
      console.error(
        "Medium RSS error:",
        response.status,
        response.statusText
      );

      return Response.json(
        {
          ok: false,
          error: "Nie udało się pobrać publikacji z Medium.",
        },
        {
          status: 502,
        }
      );
    }

    const xml = await response.text();
    const posts = parseMediumFeed(xml);

    return Response.json(
      {
        ok: true,
        posts,
      },
      {
        headers: {
          "Cache-Control": "public, max-age=900",
        },
      }
    );
  } catch (error) {
    console.error("Medium integration error:", error);

    return Response.json(
      {
        ok: false,
        error: "Błąd integracji z Medium.",
      },
      {
        status: 500,
      }
    );
  }
}
