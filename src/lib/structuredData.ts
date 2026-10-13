const SITE = "https://digitilio.pl";

export const ORGANIZATION_ID = `${SITE}/#organization`;
export const PERSON_ID = `${SITE}/#ela-chabko`;
const LINKEDIN = "https://www.linkedin.com/in/ela-chabko/";

export const digitilioSiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: "Digitilio",
      inLanguage: "pl-PL",
      publisher: {
        "@id": ORGANIZATION_ID,
      },
    },
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Digitilio",
      url: `${SITE}/`,
      email: "elachabko@digitilio.pl",
      logo: `${SITE}/favicon.png`,
      image: `${SITE}/og/digitilio-og.png`,
      description:
        "Doradztwo i strategia marketingowa dla firm, które chcą uporządkować marketing, ustalić priorytety i podejmować lepsze decyzje.",
      areaServed: "PL",
      founder: {
        "@id": PERSON_ID,
      },
      sameAs: [LINKEDIN],
      knowsAbout: [
        "strategia marketingowa",
        "komunikacja B2B",
        "social media",
        "LinkedIn",
        "Meta Ads",
        "analityka marketingowa",
        "AI w marketingu",
      ],
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Ela Chabko",
      url: `${SITE}/#about`,
      jobTitle: "Założycielka Digitilio, doradczyni marketingowa",
      worksFor: {
        "@id": ORGANIZATION_ID,
      },
      sameAs: [LINKEDIN],
    },
  ],
};

type BreadcrumbItem = {
  name: string;
  url: string;
};

export const createBreadcrumbSchema = (
  items: BreadcrumbItem[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

type CollectionItem = {
  name: string;
  url: string;
};

/** Strona-lista (baza wiedzy, współprace) z listą materiałów. */
export const createCollectionSchema = ({
  name,
  description,
  url,
  items,
}: {
  name: string;
  description: string;
  url: string;
  items: CollectionItem[];
}) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${url}#page`,
  name,
  description,
  url,
  inLanguage: "pl-PL",
  isPartOf: {
    "@id": `${SITE}/#website`,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  },
});
