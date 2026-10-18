import { createContext, useContext, useEffect } from "react";

export const SITE_URL = "https://digitilio.pl";

// Grafika do podglądów linków (1200×630) – trzymana w repozytorium: public/og/
export const DEFAULT_OG_IMAGE = "/og/digitilio-og.png";

export type HeadAlternate = {
  hreflang: string;
  href: string;
};

export type HeadData = {
  title?: string;
  lang?: string;
  alternates?: HeadAlternate[];
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
  /** Język strony, np. "en" – domyślnie "pl" */
  lang?: string;
  /** Wersje językowe tej samej strony (hreflang) */
  alternates?: HeadAlternate[];
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
  lang = "pl",
  alternates,
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
      lang,
      alternates,
    });
  }

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;

    document
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((tag) => tag.remove());

    alternates?.forEach(({ hreflang, href }) => {
      const tag = document.createElement("link");
      tag.rel = "alternate";
      tag.hreflang = hreflang;
      tag.href = href;
      document.head.appendChild(tag);
    });

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
  }, [title, description, canonical, image, ogType, noindex, lang, alternates]);

  return null;
};

/** Wersje językowe strony głównej – używane na / i /en */
export const HOME_ALTERNATES: HeadAlternate[] = [
  { hreflang: "pl", href: `${SITE_URL}/` },
  { hreflang: "en", href: `${SITE_URL}/en` },
  { hreflang: "x-default", href: `${SITE_URL}/` },
];
