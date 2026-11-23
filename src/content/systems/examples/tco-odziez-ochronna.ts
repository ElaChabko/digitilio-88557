import type { SystemExample } from "../types";

/**
 * Kalkulator TCO odzieży ochronnej – demo na fikcyjnej marce (planowane ok. 20.12).
 * Tekst roboczy na bazie briefu: do uzupełnienia przez Elę i Marka.
 */
export const tcoProtectiveWear: SystemExample = {
  slug: "kalkulator-kosztu-odziezy-ochronnej",
  name: "Kalkulator kosztu odzieży ochronnej",
  area: "build",
  industry: "Odzież ochronna",
  effect: "Pokazuje kupcowi realny koszt 3 lat, nie tylko cenę zakupu.",
  proof: "demo",
  // demoUrl: "https://demo.digitilio.pl/tco",
  draft: true,

  seoTitle: "Kalkulator kosztu odzieży ochronnej | Systemy dla firm Digitilio",
  seoDescription:
    "Przykład narzędzia sprzedażowego: kalkulator, który pokazuje kupcowi całkowity koszt odzieży ochronnej w czasie, a nie tylko cenę zakupu.",

  problem: [
    "Kupcy porównują odzież ochronną głównie po cenie zakupu. Droższy, ale trwalszy produkt przegrywa, choć w ciągu kilku lat wychodzi taniej.",
    "Handlowcy liczyli to ręcznie w arkuszach, osobno dla każdego klienta.",
  ],
  solution: [
    "Kalkulator na stronie, w którym kupiec wpisuje liczbę pracowników, częstotliwość prania i wymian, a narzędzie liczy koszt w perspektywie 3 lat.",
    "Wynik można wysłać mailem jako zestawienie, a firma dostaje kontakt ze zgodą.",
  ],
  benefits: [
    "Rozmowa o wartości produktu zamiast o samej cenie",
    "Kontakty od kupców ze zgodą na dalszy kontakt",
    "Koniec z ręcznym liczeniem w arkuszach",
  ],
  tech: ["Aplikacja webowa na telefon i komputer", "Wysyłka wyniku mailem", "Formularz zgodny z RODO"],
  disclaimer: "Demo na fikcyjnej marce. Dane przykładowe.",
};
