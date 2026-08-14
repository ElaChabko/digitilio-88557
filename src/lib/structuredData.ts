export const digitilioSiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://digitilio.pl/#website",
      url: "https://digitilio.pl/",
      name: "Digitilio",
      publisher: {
        "@id": "https://digitilio.pl/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://digitilio.pl/#organization",
      name: "Digitilio",
      url: "https://digitilio.pl/",
      email: "elachabko@digitilio.pl",
      description:
        "Doradztwo i strategia marketingowa dla firm, które chcą uporządkować marketing, ustalić priorytety i podejmować lepsze decyzje.",
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
