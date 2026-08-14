export type CaseStudyStat = {
  value: string;
  label: string;
  description?: string;
};

export type CaseStudyFlowStep = {
  label: string;
};

export type CaseStudyComparisonItem = {
  name: string;
  primaryValue: string;
  primaryLabel: string;
  secondaryValue?: string;
  secondaryLabel?: string;
};

export type CaseStudyGrowthItem = {
  name: string;
  from: string;
  to: string;
  period: string;
};

export type CaseStudyChannel = {
  name: string;
  description: string;
};

export type CaseStudySection =
  | {
      type: "text";
      eyebrow?: string;
      title: string;
      paragraphs: string[];
      stats?: CaseStudyStat[];
    }
  | {
      type: "decision";
      number: string;
      title: string;
      theme?: "light" | "dark";
      paragraphs: string[];
      stats?: CaseStudyStat[];
      statement?: string;
      flow?: CaseStudyFlowStep[];
    }
  | {
      type: "comparison";
      number?: string;
      eyebrow?: string;
      title: string;
      intro: string[];
      items: CaseStudyComparisonItem[];
      paragraphs: string[];
      statement?: string;
    }
  | {
      type: "growth";
      eyebrow?: string;
      title: string;
      items: CaseStudyGrowthItem[];
      paragraphs: string[];
    }
  | {
      type: "spotlight";
      eyebrow: string;
      value: string;
      label: string;
      stats: CaseStudyStat[];
      paragraphs: string[];
      statement?: string;
    }
  | {
      type: "channels";
      title: string;
      intro?: string;
      channels: CaseStudyChannel[];
      conclusion?: string;
    }
  | {
      type: "summary";
      eyebrow?: string;
      title: string;
      opening?: string;
      intro?: string;
      flow: CaseStudyFlowStep[];
      results: string[];
    }
  | {
      type: "note";
      eyebrow?: string;
      paragraphs: string[];
    }
  | {
      type: "final";
      statement: string;
      ctaText?: string;
      ctaButton?: string;
    };

export type CaseStudy = {
  id: number;
  slug: string;

  title: string;
  lead: string;

  industry: string;
  scope: string;
  period: string;

  seoTitle: string;
  seoDescription: string;

  results: CaseStudyStat[];

  sections: CaseStudySection[];
};
