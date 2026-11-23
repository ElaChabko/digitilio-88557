import { caseStudies, featuredCaseStudies } from "@/content/caseStudies";
import { SYSTEMS_PATH, areaById, systemExamples } from "@/content/systems";

/**
 * Realizacje: jedno miejsce na dowody z obu filarów.
 * - Marketing: case studies (src/content/caseStudies)
 * - Systemy dla firm: przykłady (src/content/systems/examples)
 * Strona /realizacje, strona główna i strony filarów pobierają je stąd.
 */
export type Pillar = "marketing" | "systems";

export const REALIZATIONS_PATH = "/realizacje";

export const PILLARS: Record<Pillar, { label: string; href: string }> = {
  marketing: { label: "Marketing", href: "/marketing" },
  systems: { label: "Systemy dla firm", href: SYSTEMS_PATH },
};

export type Realization = {
  pillar: Pillar;
  href: string;
  /** Krótki tytuł na karcie */
  title: string;
  /** Pełny tytuł na liście Realizacji */
  longTitle: string;
  meta: string;
  excerpt: string;
  stat?: string;
  statLabel?: string;
  headline?: string;
  results: { value: string; label: string }[];
  cta: string;
  draft?: boolean;
};

const firstSentence = (text: string) => text.match(/^[^.!?]+[.!?]/)?.[0].trim() ?? text;

export const caseStudyPath = (slug: string) => `${REALIZATIONS_PATH}/${slug}`;

const fromCaseStudy = (c: (typeof caseStudies)[number]): Realization => ({
  pillar: "marketing",
  href: caseStudyPath(c.slug),
  title: c.card.title,
  longTitle: c.title,
  meta: c.card.meta,
  excerpt: firstSentence(c.lead),
  stat: c.card.stat,
  statLabel: c.card.statLabel,
  headline: c.card.headline,
  results: c.results.slice(0, 3).map((r) => ({ value: r.value, label: r.label })),
  cta: "Zobacz case study",
});

const fromExample = (e: (typeof systemExamples)[number]): Realization => ({
  pillar: "systems",
  href: `${SYSTEMS_PATH}/${e.slug}`,
  // Na karcie: duża nazwa (headline) i efekt pod spodem
  title: e.effect,
  longTitle: e.name,
  meta: [areaById(e.area).name, e.industry].filter(Boolean).join(" · "),
  excerpt: e.effect,
  headline: e.name,
  results: [],
  cta: "Zobacz przykład",
  draft: e.draft,
});

/** Wszystkie realizacje: najpierw marketing, potem systemy */
export const realizations: Realization[] = [
  ...caseStudies.map(fromCaseStudy),
  ...systemExamples.map(fromExample),
];

/** Wybrane na stronę główną: case studies z listy wyróżnionych + pierwszy przykład systemu */
export const featuredRealizations = (): Realization[] => [
  ...featuredCaseStudies().slice(0, 2).map(fromCaseStudy),
  ...systemExamples.slice(0, 1).map(fromExample),
];

export const realizationsFor = (pillar: Pillar) => realizations.filter((r) => r.pillar === pillar);
