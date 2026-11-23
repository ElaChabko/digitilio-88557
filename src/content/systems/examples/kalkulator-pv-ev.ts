import type { SystemExample } from "../types";

/**
 * Kalkulator PV + EV – działa na własnej domenie (bez paska demo, w stopce
 * „Zbudowane przez Digitilio × Neuraspark”). Zrzuty i tekst ok. 6.12.
 * Tekst roboczy: do uzupełnienia przez Elę (tekst) i Marka (zrzuty, adres).
 */
export const pvEvCalculator: SystemExample = {
  slug: "kalkulator-fotowoltaiki-i-ladowania-auta",
  name: "Kalkulator fotowoltaiki i ładowania auta",
  area: "build",
  industry: "Energia / fotowoltaika",
  effect: "Pokazuje, ile da się zaoszczędzić, ładując auto prądem z własnej instalacji.",
  proof: "demo",
  // demoUrl: "https://…",  ← adres kalkulatora (własna domena)
  draft: true,

  seoTitle: "Kalkulator fotowoltaiki i ładowania auta | Systemy dla firm Digitilio",
  seoDescription:
    "Przykład kalkulatora: ile można zaoszczędzić, łącząc fotowoltaikę z ładowaniem samochodu elektrycznego.",

  problem: [
    "[Do uzupełnienia] 2–3 zdania o tym, z czym mierzyła się firma albo jaki problem rozwiązuje kalkulator.",
  ],
  solution: [
    "[Do uzupełnienia] Co robi kalkulator i kto z niego korzysta.",
  ],
  benefits: [
    "[Do uzupełnienia] Efekt 1",
    "[Do uzupełnienia] Efekt 2",
    "[Do uzupełnienia] Efekt 3",
  ],
};
