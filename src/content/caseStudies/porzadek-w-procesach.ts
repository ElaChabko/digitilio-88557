import type { CaseStudy } from "./types";

export const processOrder: CaseStudy = {
  id: 3,

  slug: "porzadek-w-procesach-marketingu",

  title:
    "Porządek w marketingu w czasie rotacji zespołu. Jak ustawiłam proces od zadania do publikacji",

  lead:
    "Kiedy w zespole ciągle zmieniają się ludzie, najwięcej czasu traci się nie na samej pracy, ale na niejasnych zadaniach, dopytywaniu i czekaniu. Uporządkowałam to tak, żeby projekty mogły ruszać i domykać się niezależnie od tego, kto akurat był w zespole.",

  industry: "projekt anonimowy / branża nieujawniona",

  scope:
    "procesy marketingowe, zadania dla grafików, landing page, e-mail marketing, posty organiczne, kampanie reklamowe",

  period: "projekt zakończony",

  seoTitle: "Procesy w zespole marketingu | Case study Digitilio",

  seoDescription:
    "Jak w czasie rotacji w zespole ustawiłam proces pracy: od dobrze rozpisanego zadania, przez jasne zasady startu i blokerów, po e-mail marketing oparty na aktywnych kontaktach.",

  results: [],

  sections: [
    {
      type: "text",
      eyebrow: "Punkt wyjścia",
      title: "Zespół się zmieniał, a razem z ludźmi znikała wiedza",
      paragraphs: [
        "W zespole była duża rotacja. Ludzie odchodzili i przychodzili, a razem z nimi znikała wiedza o tym, co jest w toku, kto za co odpowiada i na co czeka dany projekt.",

        "Marketing obejmował kilka kanałów jednocześnie: landing page, e-mail marketing, posty organiczne i kampanie reklamowe. Bez wspólnego sposobu pracy każde zadanie wymagało dopytywania, a o tym, czy coś może ruszyć, decydował przypadek.",
      ],
    },

    {
      type: "decision",
      number: "01",
      title: "Decyzja 1: zadanie musi dać się wykonać bez dopytywania",
      theme: "light",
      paragraphs: [
        "Sytuacja. Zadania dla grafików były opisywane różnie, zależnie od tego, kto je zlecał. Przy ciągłej rotacji nikt nie miał pełnego kontekstu, więc brakujące informacje wychodziły dopiero w trakcie pracy.",

        "Decyzja. Ustaliłam, jak powinno wyglądać dobrze rozpisane zadanie, tak żeby grafik dostawał w jednym miejscu wszystko, czego potrzebuje do pracy.",

        "Dlaczego. W zespole, w którym zmieniają się ludzie, wiedza nie może zostawać w czyjejś głowie. Musi być zapisana w zadaniu.",
      ],
      statement: "Dobrze rozpisane zadanie oszczędza więcej czasu niż szybka realizacja.",
    },

    {
      type: "decision",
      number: "02",
      title: "Decyzja 2: jasna zasada, kiedy zadanie rusza, a kiedy stoi",
      theme: "dark",
      paragraphs: [
        "Sytuacja. Bez wspólnych zasad trudno było stwierdzić, czy zadanie może już ruszyć, czy na coś czeka. Prace zaczynały się na niepełnych materiałach albo stały, choć nikt nie wiedział dlaczego.",

        "Decyzja. Ustaliłam flow pracy: zadanie startuje dopiero wtedy, gdy ma wszystko, czego potrzebuje. Jeśli pojawia się bloker, zadanie się zatrzymuje i od razu widać, na co czeka.",

        "Dlaczego. Praca na niepełnych materiałach kończy się poprawkami, a zadanie, które stoi bez informacji o powodzie, blokuje kolejne.",
      ],
      statement:
        "Bloker zgłoszony na starcie kosztuje mniej niż poprawka na końcu.",
      flow: [
        { label: "rozpisane zadanie" },
        { label: "start" },
        { label: "bloker = stop" },
        { label: "realizacja" },
      ],
    },

    {
      type: "decision",
      number: "03",
      title:
        "Decyzja 3: w e-mail marketingu liczy się to, kto czyta, a nie wielkość bazy",
      theme: "light",
      paragraphs: [
        "Sytuacja. E-mail marketing był tam zupełnie nowym obszarem. Analizując wyniki wysyłek, zauważyłam, że duża część bazy w ogóle nie reaguje: zero otwarć i zero kliknięć.",

        "Decyzja. Zarekomendowałam wyczyszczenie bazy i ograniczenie wysyłek do aktywnych kontaktów, zamiast zwiększania liczby maili.",

        "Dlaczego. Wysyłki do osób, które nie czytają wiadomości, obniżają wiarygodność nadawcy, zwiększają ryzyko trafiania do spamu i zaniżają skuteczność całej kampanii. Później potwierdziłam to na kursie e-mail marketingu w HubSpot Academy.",
      ],
      statement: "Spamowanie to nie strategia.",
    },

    {
      type: "channels",
      title: "Jakie obszary obejmował ten porządek?",
      intro:
        "Te same zasady pracy obowiązywały we wszystkich kanałach, którymi się zajmowałam:",
      channels: [
        {
          name: "Landing page",
          description:
            "Zadania rozpisane tak, żeby grafik i osoba wdrażająca stronę wiedzieli, co, dla kogo i na kiedy przygotowują.",
        },
        {
          name: "E-mail marketing",
          description:
            "Nowy obszar, w którym oprócz procesu liczyła się jakość bazy, a nie liczba wysłanych wiadomości.",
        },
        {
          name: "Posty organiczne",
          description:
            "Regularna praca nad treściami bez zatrzymywania się na każdym brakującym materiale.",
        },
        {
          name: "Kampanie reklamowe",
          description:
            "Kreacje zlecane według tych samych zasad, dzięki czemu kampanie nie czekały na dopytywanie.",
        },
      ],
      conclusion:
        "Dzięki jednemu sposobowi pracy dla wszystkich kanałów nowa osoba w zespole mogła szybciej wejść w temat, bo zasady nie zależały od tego, kto je wcześniej ustalał.",
    },

    {
      type: "note",
      eyebrow: "Dlaczego bez liczb",
      paragraphs: [
        "W tym projekcie moim zadaniem było przede wszystkim uporządkowanie sposobu pracy, a nie jedna kampania z mierzalnym wynikiem. Dlatego zamiast liczb opisuję, co ustawiłam i dlaczego.",
      ],
    },

    {
      type: "final",
      statement:
        "Dobry proces nie jest biurokracją. To sposób na to, żeby praca szła dalej, nawet gdy zmieniają się ludzie.",

      ctaText: "Masz chaos w marketingu i nie wiesz, od czego zacząć?",

      ctaButton: "Porozmawiajmy o Twojej sytuacji",
    },
  ],
};
