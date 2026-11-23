import type { Area, AreaId, SystemExample } from "./types";
import { pvEvCalculator } from "./examples/kalkulator-pv-ev";
import { tcoProtectiveWear } from "./examples/tco-odziez-ochronna";

export type { Area, AreaId, SystemExample } from "./types";

/** Adres strony głównej sekcji */
export const SYSTEMS_PATH = "/systemy-dla-firm";

/**
 * Przykłady w galerii (kolejność = kolejność kart).
 * Nowy przykład: plik w examples/ + dopisanie tutaj.
 */
export const systemExamples: SystemExample[] = [pvEvCalculator, tcoProtectiveWear];

export const getSystemExample = (slug: string) => systemExamples.find((e) => e.slug === slug);

/**
 * 5 obszarów usług. Nazwy i listy usług z briefu; zdania korzyści robocze (Ela, do 2.12).
 * Aplikacje mobilne tylko na liście usług, nie na pierwszym planie.
 */
export const AREAS: Area[] = [
  {
    id: "build",
    anchor: "budowa-od-zera",
    name: "Budowa od zera",
    benefit: "Narzędzie zrobione pod to, jak pracuje Twoja firma, a nie odwrotnie.",
    services: [
      "Aplikacje webowe na miarę: panele klienta, systemy rezerwacji, portale B2B",
      "Aplikacje z AI połączone z setkami usług",
      "Narzędzia wewnętrzne zamiast Excela: CRM, ewidencje, magazyn",
      "Prototyp lub MVP w krótkim czasie, żeby sprawdzić pomysł przed dużą inwestycją",
      "Gry przeglądarkowe i 3D: gry promocyjne, konfiguratory produktów, wizualizacje",
      "Integracje i automatyzacje: łączenie systemów, płatności, automatyczne raporty",
      "Aplikacje mobilne na iOS i Androida z jednego kodu",
    ],
  },
  {
    id: "ai",
    anchor: "ai-dla-firm",
    name: "AI dla firm",
    benefit: "AI tam, gdzie realnie oszczędza czas, a nie tam, gdzie dobrze wygląda w prezentacji.",
    services: [
      "Chatboty i asystenci na danych firmy: dokumenty, oferta, FAQ",
      "Automatyzacja procesów z AI: faktury, maile, formularze, klasyfikacja zgłoszeń",
      "Konsultacja, gdzie AI realnie oszczędzi czas",
    ],
  },
  {
    id: "modernize",
    anchor: "modernizacja",
    name: "Modernizacja",
    benefit: "Strona i system, które znów działają szybko, bezpiecznie i na telefonie.",
    services: [
      "Odświeżenie lub przebudowa przestarzałej strony: wygląd, wersja mobilna, szybkość, SEO techniczne",
      "Migracja ze starego systemu lub WordPressa",
      "Przejęcie i naprawa porzuconego projektu po innym wykonawcy",
    ],
  },
  {
    id: "review",
    anchor: "przeglady-i-doradztwo",
    name: "Przeglądy i doradztwo",
    benefit: "Wiesz, co naprawić i ile to kosztuje, zanim wydasz pieniądze.",
    services: [
      "Przegląd bezpieczeństwa strony lub aplikacji z raportem i rekomendacjami",
      "Audyt techniczny i wydajnościowy: kod, hosting, koszty chmury",
      "Doradztwo przed zakupem oprogramowania lub wyborem wykonawcy",
    ],
  },
  {
    id: "care",
    anchor: "stala-wspolpraca",
    name: "Stała współpraca",
    benefit: "Ktoś dba o Twój system na co dzień, więc nie zostajesz z nim sam.",
    services: [
      "Utrzymanie, hosting i monitoring w abonamencie",
      "Dalszy rozwój produktu w modelu miesięcznym",
    ],
  },
];

export const areaById = (id: AreaId) => AREAS.find((a) => a.id === id)!;

/** Teksty strony /systemy-dla-firm (robocze z briefu; ostateczne brzmienie: Ela, do 2.12) */
export const systemsCopy = {
  seoTitle: "Systemy dla firm: aplikacje, automatyzacje i AI | Digitilio",
  seoDescription:
    "Projektujemy i wdrażamy aplikacje, automatyzacje i systemy na miarę dla małych i średnich firm, a potem dbamy o nie po wdrożeniu. Zobacz działające przykłady.",

  hero: {
    pill: "Systemy dla firm",
    title: "Technologia, która pracuje na Twój biznes.",
    lead: "Projektujemy i wdrażamy aplikacje, automatyzacje i systemy na miarę, a potem dbamy, żeby działały bezpiecznie i bez przerw.",
    highlight:
      "Marketing i technologia w jednym miejscu. Nie musisz tłumaczyć agencji, co robi programista, ani odwrotnie.",
    primary: "Zobacz przykłady",
    secondary: "Opisz, czego potrzebujesz",
    videoTag: "Pętla wideo z demami (5–10 s)",
  },

  problems: {
    pill: "W czym pomagamy",
    title: "Brzmi znajomo?",
    items: [
      { text: "Mamy przestarzałą stronę albo WordPressa, którego nikt nie aktualizuje.", area: "modernize" },
      { text: "Pracujemy w Excelu i mailach, wszystko się gubi.", area: "build" },
      { text: "Chcemy użyć AI, ale nie wiemy gdzie.", area: "ai" },
      { text: "Poprzedni wykonawca zostawił projekt w połowie.", area: "modernize" },
      { text: "Chcemy sprawdzić pomysł, zanim wydamy na niego duże pieniądze.", area: "build" },
    ] as { text: string; area: AreaId }[],
  },

  areas: {
    pill: "5 obszarów",
    title: "Co budujemy i czym się opiekujemy",
    more: "Zapytaj o ten obszar",
  },

  examples: {
    pill: "Przykłady",
    title: "Zobacz, jak to działa",
    lead: "Każdy przykład można otworzyć i przetestować albo przeczytać, jak powstał.",
    open: "Otwórz demo",
    soon: "Demo wkrótce",
    describe: "Zobacz opis",
    how: "Jak to działa",
    proof: { demo: "Demo do przetestowania", wdrozenie: "Wdrożenie" },
  },

  process: {
    pill: "Jak pracujemy",
    title: "Od rozmowy do systemu, który działa",
    steps: [
      { word: "Rozmowa", description: "Rozmawiamy o problemie i przeglądamy to, co już macie." },
      { word: "Prototyp", description: "W krótkim czasie pokazujemy działającą wersję do sprawdzenia." },
      { word: "Wdrożenie", description: "Uruchamiamy system, a jeśli trzeba, także marketing, który go wspiera." },
      { word: "Opieka", description: "Utrzymujemy, zabezpieczamy i rozwijamy system po wdrożeniu." },
    ],
  },

  why: {
    pill: "Dlaczego Digitilio",
    title: "Jeden partner od marketingu i technologii",
    items: [
      {
        title: "Jeden opiekun projektu",
        text: "Strategia, budowa i kampania są spójne od początku, bo prowadzi je jedna osoba, a nie trzy firmy.",
      },
      {
        title: "Opieka po wdrożeniu",
        text: "Bezpieczeństwo, utrzymanie i rozwój są w abonamencie. Nie zostawiamy Cię z projektem.",
      },
      {
        title: "Doświadczenie",
        text: "Zespół technologiczny z 15-letnim doświadczeniem w IT i 10 lat w marketingu B2B.",
      },
    ],
  },

  entry: {
    pill: "Nie wiesz, od czego zacząć?",
    title: "Przegląd strony lub aplikacji",
    text: "Sprawdzamy, jak działa Twoja strona albo system: bezpieczeństwo, szybkość, wersję mobilną i koszty. Dostajesz raport z rekomendacjami, co poprawić najpierw.",
    price: "Cena: do ustalenia",
    cta: "Zamów przegląd",
  },

  faq: {
    pill: "FAQ",
    title: "Najczęstsze pytania",
    items: [
      { q: "Ile trwa przygotowanie systemu?", a: "" },
      { q: "Ile to kosztuje?", a: "" },
      { q: "Czy przejmiecie mój obecny system?", a: "" },
      { q: "Kto jest właścicielem kodu?", a: "" },
      { q: "Co z danymi i RODO?", a: "" },
      { q: "Co się dzieje po wdrożeniu?", a: "" },
    ],
    missing: "Odpowiedź do uzupełnienia",
  },

  contact: {
    pill: "Kontakt",
    title: "Opisz, czego potrzebujesz",
    lead: "Napisz, co dziś nie działa albo co chcecie usprawnić. Odpowiadamy w ciągu 1 dnia roboczego i proponujemy pierwszy krok.",
  },

  example: {
    back: "Wszystkie przykłady",
    problem: "Problem",
    solution: "Rozwiązanie",
    benefits: "Co z tego ma firma",
    how: "Jak to zrobiliśmy",
    tech: "Technologia",
    cta: "Chcę coś takiego dla mojej firmy",
    draftTag: "Przykład roboczy – treść do uzupełnienia",
    mediaTag: "Zrzuty ekranu lub nagranie 20–40 s",
  },

  /** Pasek na stronie głównej */
  band: {
    pill: "Systemy dla firm",
    title: "Marketing i technologia w jednym miejscu",
    text: "Poza marketingiem projektujemy i wdrażamy aplikacje, automatyzacje i systemy na miarę, a potem dbamy, żeby działały bez przerw.",
    areas: ["build", "ai", "modernize"] as AreaId[],
    cta: "Zobacz, co budujemy",
  },
};
