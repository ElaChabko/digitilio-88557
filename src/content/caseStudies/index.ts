import { metaAdsLocalBusiness } from "./meta-ads-lokalny-biznes";
import { practiceDecisions } from "./decyzje-z-praktyki";
import { processOrder } from "./porzadek-w-procesach";

export const caseStudies = [
  metaAdsLocalBusiness,
  practiceDecisions,
  processOrder,
];

/**
 * Case studies pokazywane na stronie głównej w sekcji „Wybrane realizacje”.
 * Żeby zmienić wybór, wpisz tu inne slugi (kolejność = kolejność kart).
 */
export const FEATURED_CASE_STUDIES = [
  "meta-ads-lokalny-biznes",
  "decyzje-z-praktyki",
  "porzadek-w-procesach-marketingu",
];

export const featuredCaseStudies = () =>
  FEATURED_CASE_STUDIES.map((slug) => caseStudies.find((c) => c.slug === slug)).filter(
    (c): c is (typeof caseStudies)[number] => Boolean(c),
  );

export const getCaseStudyBySlug = (slug: string) => {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
};
