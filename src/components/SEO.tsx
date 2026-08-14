import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  canonical: string;
};

export const SEO = ({
  title,
  description,
  canonical,
}: SEOProps) => {
  useEffect(() => {
    // TITLE
    document.title = title;

    // META DESCRIPTION
    let descriptionTag = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.name = "description";
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.content = description;

    // CANONICAL
    let canonicalTag = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.rel = "canonical";
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.href = canonical;

    // OG TITLE
    let ogTitle = document.querySelector(
      'meta[property="og:title"]'
    ) as HTMLMetaElement | null;

    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }

    ogTitle.content = title;

    // OG DESCRIPTION
    let ogDescription = document.querySelector(
      'meta[property="og:description"]'
    ) as HTMLMetaElement | null;

    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }

    ogDescription.content = description;

    // OG URL
    let ogUrl = document.querySelector(
      'meta[property="og:url"]'
    ) as HTMLMetaElement | null;

    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }

    ogUrl.content = canonical;

    // TWITTER TITLE
    let twitterTitle = document.querySelector(
      'meta[name="twitter:title"]'
    ) as HTMLMetaElement | null;

    if (!twitterTitle) {
      twitterTitle = document.createElement("meta");
      twitterTitle.name = "twitter:title";
      document.head.appendChild(twitterTitle);
    }

    twitterTitle.content = title;

    // TWITTER DESCRIPTION
    let twitterDescription = document.querySelector(
      'meta[name="twitter:description"]'
    ) as HTMLMetaElement | null;

    if (!twitterDescription) {
      twitterDescription = document.createElement("meta");
      twitterDescription.name = "twitter:description";
      document.head.appendChild(twitterDescription);
    }

    twitterDescription.content = description;
  }, [title, description, canonical]);

  return null;
};
