import { homePl } from "@/content/home";
import { AREAS, SYSTEMS_PATH } from "@/content/systems";
import type { HeroDoor } from "@/components/home/Hero";

/**
 * Strona główna jako rozdroże: klient rozpoznaje swój problem
 * i wybiera jeden z dwóch filarów (albo oba).
 */
export const hub = {
  seoTitle: "Marketing i systemy dla firm | Digitilio",
  seoDescription:
    "Marketing, który przyprowadza klientów, i systemy, które zdejmują z firmy ręczną pracę: social media, Meta Ads, strategia, aplikacje, automatyzacje i AI w jednym miejscu.",

  doors: [
    {
      tone: "marketing",
      eyebrow: "Marketing",
      title: "Więcej zapytań od klientów",
      chips: ["Social media", "Meta Ads", "Strategia"],
      href: "/marketing",
    },
    {
      tone: "systems",
      eyebrow: "Systemy dla firm",
      title: "Mniej ręcznej pracy w firmie",
      chips: ["Aplikacje", "Automatyzacje i AI", "Modernizacja stron"],
      href: SYSTEMS_PATH,
    },
  ] as HeroDoor[],
  doorsHelp: "Nie wiesz, od czego zacząć? Napisz",

  /** Scena wyróżnika: dlaczego dwa filary w jednym miejscu */
  partner: {
    pill: "Dlaczego jedno miejsce",
    text: "Agencja nie rozumie programisty. Programista nie rozumie marketingu. W Digitilio strategia, kampanie i systemy powstają w jednym planie.",
    facts: [
      { value: "20+", label: "marek B2B i B2C w portfolio" },
      { value: "15 lat", label: "doświadczenia zespołu w IT" },
      { value: "1", label: "plan dla marketingu i technologii" },
    ],
  },

  /** Dwa filary w skrócie */
  pillars: {
    pill: "Co robimy",
    title: "Marketing i systemy. Osobno albo razem.",
    marketing: {
      eyebrow: "Marketing",
      title: "Klienci, którzy Cię znajdują",
      text: "Porządkuję marketing i prowadzę go tak, żeby social media, kampanie i treści pracowały na zapytania.",
      items: homePl.services.items.map((s) => s.title),
      cta: "Poznaj marketing",
      href: "/marketing",
    },
    systems: {
      eyebrow: "Systemy dla firm",
      title: "Firma, która pracuje mniej ręcznie",
      text: "Projektujemy i wdrażamy aplikacje, automatyzacje i systemy na miarę, a potem dbamy, żeby działały bez przerw.",
      items: AREAS.map((a) => a.name),
      cta: "Poznaj systemy dla firm",
      href: SYSTEMS_PATH,
    },
  },

  contact: {
    pill: "Następny krok",
    title: "Nie wiesz, od czego zacząć?",
    lead: "Nie musisz mieć gotowego briefu. Napisz, co dziś nie działa: brakuje zapytań, praca grzęźnie w Excelu i mailach, albo jedno i drugie. Odpowiem w ciągu 1 dnia roboczego i zaproponuję pierwszy krok.",
    cta: "Opisz, czego potrzebujesz",
    note: "Bez zobowiązań • odpowiedź w 1 dzień roboczy",
  },

  work: {
    pill: "Realizacje",
    title: "Efekty z marketingu i systemy, które działają.",
    allLabel: "Wszystkie realizacje",
  },
};
