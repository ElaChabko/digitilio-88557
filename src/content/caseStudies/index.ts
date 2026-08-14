import { metaAdsLocalBusiness } from "./meta-ads-lokalny-biznes";

export const caseStudies = [
  metaAdsLocalBusiness,
];

export const getCaseStudyBySlug = (slug: string) => {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
};
