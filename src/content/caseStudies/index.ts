import { metaAdsLocalBusiness } from "./meta-ads-lokalny-biznes";
import { practiceDecisions } from "./decyzje-z-praktyki";

export const caseStudies = [
  metaAdsLocalBusiness,
  practiceDecisions,
];

export const getCaseStudyBySlug = (slug: string) => {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
};
