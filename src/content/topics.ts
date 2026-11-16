/**
 * Tematy zapytań: pigułki w hero i wybór w formularzu kontaktowym.
 * Identyfikator trafia do maila, więc od razu widać, czego dotyczy zapytanie.
 */
export type TopicId = "social" | "ads" | "web" | "strategy";

export const TOPICS: { id: TopicId; pl: string; en: string }[] = [
  { id: "social", pl: "Social media i content", en: "Social media & content" },
  { id: "ads", pl: "Kampanie Meta Ads", en: "Meta Ads campaigns" },
  { id: "web", pl: "Strona internetowa", en: "Website" },
  { id: "strategy", pl: "Strategia i porządek w marketingu", en: "Strategy & marketing clarity" },
];

export const topicLabel = (id: string | null | undefined, lang: "pl" | "en") =>
  TOPICS.find((t) => t.id === id)?.[lang] ?? "";
