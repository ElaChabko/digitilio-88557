import { metaAdsLocalBusiness } from "./meta-ads-lokalny-biznes";
import { practiceDecisions } from "./decyzje-z-praktyki";
import { processOrder } from "./porzadek-w-procesach";

export const caseStudies = [
  metaAdsLocalBusiness,
  practiceDecisions,
  processOrder,
];

export const getCaseStudyBySlug = (slug: string) => {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
};
