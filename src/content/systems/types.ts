import type { TopicId } from "@/content/topics";

/** 5 obszarów usług „Systemy dla firm” (identyfikatory = tematy w formularzu) */
export type AreaId = Extract<TopicId, "build" | "ai" | "modernize" | "review" | "care">;

export type Area = {
  id: AreaId;
  /** Kotwica na stronie, np. /systemy-dla-firm#ai-dla-firm */
  anchor: string;
  name: string;
  /** 1 zdanie korzyści */
  benefit: string;
  services: string[];
};

/**
 * Przykład realizacji: jedna karta w galerii + podstrona /systemy-dla-firm/[slug].
 * Żeby dodać przykład: skopiuj plik z examples/, zmień treści i dopisz go w examples/index.ts.
 */
export type SystemExample = {
  slug: string;
  /** Nazwa, maks. 6 słów */
  name: string;
  area: AreaId;
  /** Branża (opcjonalnie) */
  industry?: string;
  /** Jedno zdanie efektu, maks. 15 słów, z perspektywy klienta */
  effect: string;
  /** „demo” = można przetestować; „wdrozenie” = realny projekt bez publicznego dema */
  proof: "demo" | "wdrozenie";
  /** Adres dema (otwiera się w nowej karcie). Bez adresu przycisk pokazuje „Demo wkrótce”. */
  demoUrl?: string;
  /** Zrzut ekranu lub GIF w proporcji 16:10 (np. /systemy/tco.webp). Bez niego – placeholder. */
  image?: string;
  imageAlt?: string;
  /** Treść robocza – na karcie i podstronie widać oznaczenie (nie publikować na produkcji) */
  draft?: boolean;

  seoTitle: string;
  seoDescription: string;

  /** 2–3 zdania: z czym mierzyła się firma */
  problem: string[];
  /** Co robi system i kto z niego korzysta */
  solution: string[];
  /** 3 zrzuty ekranu albo nagranie 20–40 s */
  media?: { src: string; alt: string; type?: "image" | "video" }[];
  /** Co z tego ma firma – 3 punkty */
  benefits: string[];
  /** Dla osób technicznych (zwinięte) */
  tech?: string[];
  /** Np. „Demo na fikcyjnej marce. Dane przykładowe.” */
  disclaimer?: string;
};
