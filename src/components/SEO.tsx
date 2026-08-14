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
    document.title = title;

    let descriptionTag = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.name = "description";
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.content = description;

    let canonicalTag = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.rel = "canonical";
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.href = canonical;
  }, [title, description, canonical]);

  return null;
};
