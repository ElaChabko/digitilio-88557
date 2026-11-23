/**
 * Tematy zapytań: pigułki w hero i wybór w formularzu kontaktowym.
 * Nazwa tematu trafia do tytułu maila, więc od razu widać, czego dotyczy zapytanie.
 */
export type TopicId =
  // Marketing
  | "social"
  | "ads"
  | "strategy"
  // Systemy dla firm (ogólnie, na stronie głównej)
  | "web"
  | "automation"
  // Systemy dla firm: 5 obszarów z briefu + „nie wiem”
  | "build"
  | "ai"
  | "modernize"
  | "review"
  | "care"
  | "unknown";

export const TOPIC_LABELS: Record<TopicId, { pl: string; en: string }> = {
  social: { pl: "Social media i content", en: "Social media & content" },
  ads: { pl: "Kampanie Meta Ads", en: "Meta Ads campaigns" },
  strategy: { pl: "Strategia marketingu", en: "Marketing strategy" },
  web: { pl: "Strona lub aplikacja", en: "Website or app" },
  automation: { pl: "Automatyzacja i AI", en: "Automation & AI" },
  build: { pl: "Budowa od zera", en: "Custom build" },
  ai: { pl: "AI dla firm", en: "AI for business" },
  modernize: { pl: "Modernizacja", en: "Modernisation" },
  review: { pl: "Przegląd i doradztwo", en: "Review & advice" },
  care: { pl: "Stała współpraca", en: "Ongoing care" },
  unknown: { pl: "Nie wiem jeszcze", en: "Not sure yet" },
};

/** Zestawy tematów w zależności od miejsca formularza */
export const TOPIC_SETS = {
  /** Strona główna i formularz ogólny: oba filary Digitilio */
  general: ["social", "ads", "strategy", "web", "automation"],
  /** Strona Systemy dla firm: 5 obszarów + „nie wiem” */
  systems: ["build", "ai", "modernize", "review", "care", "unknown"],
} satisfies Record<string, TopicId[]>;

export type TopicSet = keyof typeof TOPIC_SETS;

/** Pigułki w hero strony głównej */
export const HERO_TOPICS: TopicId[] = TOPIC_SETS.general;

/** Zgodność wstecz: lista tematów ogólnych */
export const TOPICS = TOPIC_SETS.general.map((id) => ({ id, ...TOPIC_LABELS[id] }));

export const topicLabel = (id: string | null | undefined, lang: "pl" | "en") =>
  id && id in TOPIC_LABELS ? TOPIC_LABELS[id as TopicId][lang] : "";
