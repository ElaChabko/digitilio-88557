import { createContext, useContext, useEffect } from "react";

export const SITE_URL = "https://digitilio.pl";

export const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/p2Dx27ZKwue6aOhv0OknoGRMQGk2/social-images/social-1759738184174-Zdj%20w%20tle%20FB%20(820%20x%20312%20px).png";

export type HeadData = {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
};

/**
 * Podczas prerenderingu (build) SEO zapisuje dane do tego obiektu,
 * a skrypt prerender wstawia je do <head> statycznego HTML.
 * W przeglądarce kontekst jest pusty i działa useEffect poniżej.
 */
export const HeadContext = createContext<HeadData | null>(null);

type SEOProps = {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
};

const toAbsoluteUrl = (url: string) => {
  if (url.startsWith("http")) return url;
  return `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
};

const setMeta = (
  attr: "name" | "property",
  key: string,
  content: string
) => {
  let tag = document.querySelector(
    `meta[${attr}="${key}"]`
  ) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }

  tag.content = content;
};

export const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  noindex = false,
}: SEOProps) => {
  const serverHead = useContext(HeadContext);

  const image = toAbsoluteUrl(ogImage || DEFAULT_OG_IMAGE);

  if (serverHead) {
    Object.assign(serverHead, {
      title,
      description,
      canonical,
      ogImage: image,
      ogType,
      noindex,
    });
  }

  useEffect(() => {
    document.title = title;

    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
      setMeta("name", "twitter:description", description);
    }

    setMeta("property", "og:title", title);
    setMeta("name", "twitter:title", title);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:image", image);
    setMeta("name", "robots", noindex ? "noindex" : "index, follow");

    if (canonical) {
      let canonicalTag = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null;

      if (!canonicalTag) {
        canonicalTag = document.createElement("link");
        canonicalTag.rel = "canonical";
        document.head.appendChild(canonicalTag);
      }

      canonicalTag.href = canonical;
      setMeta("property", "og:url", canonical);
    }
  }, [title, description, canonical, image, ogType, noindex]);

  return null;
};
