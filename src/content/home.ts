/**
 * Treści strony głównej (PL) i angielskiej (/en).
 * Te same sekcje i animacje, różny tekst.
 * Teksty PL pochodzą z dotychczasowej strony; nowe sformułowania
 * oznaczone komentarzem „NOWE”.
 */

export type ServiceIcon = "diagnosis" | "strategy" | "implementation" | "support";
export type StepIcon = "search" | "priority" | "plan" | "rocket";

export type WorkItem =
  | {
      type: "case";
      href: string;
      stat: string;
      statLabel: string;
      title: string;
      meta: string;
    }
  | { type: "placeholder"; title: string; meta: string }
  | { type: "text"; title: string; meta: string; text: string };

export type HomeCopy = {
  lang: "pl" | "en";
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    lead: string;
    cta: string;
    note: string;
    scroll: string;
  };
  problem: { pill: string; lines: string[]; lead: string };
  unify: {
    title: [string, string];
    caption: string;
    cards: {
      post: string;
      ads: string;
      adsStatus: string;
      report: string;
      newsletter: string;
      newsletterStatus: string;
      website: string;
      content: string;
      ai: string;
      aiText: string;
      reel: string;
    };
    plan: { title: string; items: string[] };
  };
  services: {
    pill: string;
    title: string;
    lead: string;
    items: { icon: ServiceIcon; title: string; description: string }[];
    note: string;
  };
  process: {
    pill: string;
    title: string;
    steps: { icon: StepIcon; word: string; description: string }[];
    closing: string;
  };
  work: {
    pill: string;
    title: string;
    lead: string;
    allLabel?: string;
    allHref?: string;
    items: WorkItem[];
    placeholderTag: string;
  };
  logos: { label: string; placeholder: string };
  about: {
    pill: string;
    title: string;
    paragraphs: string[];
    stats: { value: string; label: string; hint: string }[];
    quote: string;
    cta: string;
    testimonials?: {
      tag: string;
      items: { text: string; author: string; role: string; placeholder?: boolean }[];
    };
  };
  forWhom: {
    pill: string;
    title: string;
    lead: string;
    items: { eyebrow: string; title: string; description: string }[];
    statement?: { title: string; text: string };
  };
  benefits: {
    pill: string;
    title: string;
    items: { title: string; description: string }[];
    closing: string;
  };
  contact: {
    pill: string;
    title: string;
    lead: string;
    cta: string;
    note: string;
  };
};

export const homePl: HomeCopy = {
  lang: "pl",
  hero: {
    eyebrow: "Strategia marketingowa i doradztwo",
    line1: "Mniej przypadkowych działań.",
    line2: "Więcej dobrych decyzji marketingowych.",
    lead: "Pomagam firmom uporządkować marketing, wybrać priorytety i przełożyć strategię na działania, które da się optymalnie wdrożyć.",
    cta: "Porozmawiajmy o Twojej marce",
    note: "Bez zobowiązań • 15 min rozmowy",
    scroll: "Przewiń",
  },
  problem: {
    pill: "Znasz ten scenariusz?",
    lines: [
      "Działania są rozproszone.",
      "Pomysłów jest więcej niż zasobów.",
      "Dane są, ale brakuje wniosków.",
      "AI dokłada kolejne możliwości.",
    ],
    lead: "W wielu firmach problemem nie jest brak działań. Publikacje powstają, kampanie są uruchamiane i pojawiają się kolejne pomysły, ale z czasem coraz trudniej zdecydować, które z nich naprawdę warto kontynuować.",
  },
  unify: {
    // NOWE: hasło sekcji z kartami zbierającymi się w jeden plan
    title: ["Jeden", "kierunek"],
    caption: "zamiast kolejnych niezależnych działań.",
    cards: {
      post: "Post na LinkedIn",
      ads: "Kampania Meta Ads",
      adsStatus: "Aktywna",
      report: "Raport GA4",
      newsletter: "Newsletter",
      newsletterStatus: "Wysłano",
      website: "Strona www",
      content: "Plan contentu",
      ai: "Nowe narzędzie AI",
      aiText: "Czy to rozwiąże nasz problem?",
      reel: "Rolka na Instagramie",
    },
    plan: {
      title: "Plan marketingowy",
      items: ["Priorytety", "Rola kanałów", "Sposób mierzenia efektów"],
    },
  },
  services: {
    pill: "Jak mogę pomóc",
    title: "Od diagnozy problemu po wsparcie we wdrożeniu.",
    lead: "Zakres współpracy dobieramy do sytuacji firmy, a nie do gotowego pakietu usług.",
    items: [
      {
        icon: "diagnosis",
        title: "Diagnoza marketingu",
        description:
          "Gdy działań jest dużo, ale trudno ocenić, które naprawdę warto rozwijać. Analizuję komunikację, kanały i dane, a następnie porządkuję problemy oraz priorytety.",
      },
      {
        icon: "strategy",
        title: "Strategia marketingowa i komunikacji",
        description:
          "Gdy potrzebujesz jednego kierunku zamiast kolejnych niezależnych działań. Porządkujemy pozycjonowanie, komunikację, rolę kanałów, cele i sposób wdrożenia.",
      },
      {
        icon: "implementation",
        title: "Wsparcie we wdrożeniu",
        description:
          "Gdy kierunek jest już ustalony, ale potrzebujesz pomocy w realizacji. Zakres może obejmować social media, content, kampanie, analitykę lub wykorzystanie AI.",
      },
      {
        icon: "support",
        title: "Stałe wsparcie marketingowe",
        description:
          "Gdy potrzebujesz regularnego spojrzenia na wyniki, priorytety i bieżące decyzje bez zatrudniania senior marketing managera na pełny etat.",
      },
    ],
    note: "Nie wiesz, który zakres będzie właściwy? Zaczynamy od sytuacji i problemu, a nie od wyboru usługi.",
  },
  process: {
    pill: "Jak pracuję",
    title: "Najpierw trzeba dobrze zrozumieć problem.",
    steps: [
      {
        icon: "search",
        word: "Diagnoza",
        description:
          "Analizuję cele, dotychczasowe działania, komunikację, kanały, dane i dostępne zasoby.",
      },
      {
        icon: "priority",
        word: "Priorytety",
        description:
          "Określamy, czym warto zająć się w pierwszej kolejności, co może poczekać i z czego zrezygnować.",
      },
      {
        icon: "plan",
        word: "Plan",
        description:
          "Rekomendacje zamieniamy na konkretne działania, kanały i sposób mierzenia efektów.",
      },
      {
        icon: "rocket",
        word: "Wdrożenie",
        description:
          "Wspieram realizację, wracamy do danych i korygujemy kierunek, gdy założenia przestają działać.",
      },
    ],
    closing:
      "Strategia nie kończy się na prezentacji. Powinna ułatwiać podejmowanie kolejnych decyzji i dawać się wykorzystać w codziennej pracy.",
  },
  work: {
    pill: "Wybrane realizacje",
    // NOWE
    title: "Projekty, które przyniosły efekty.",
    lead: "Przewiń, żeby zobaczyć kolejne projekty.",
    allLabel: "Wszystkie współprace",
    allHref: "/wspolprace",
    placeholderTag: "Zdjęcie realizacji",
    items: [
      {
        type: "case",
        href: "/wspolprace/meta-ads-lokalny-biznes",
        stat: "443 → 1830",
        statLabel: "obserwujących na Facebooku",
        title: "Meta Ads dla lokalnego gabinetu specjalistycznego",
        meta: "Usługi lokalne · Meta Ads",
      },
      { type: "placeholder", title: "Strategia contentu i LinkedIn", meta: "Technologia B2B / SaaS" },
      { type: "placeholder", title: "Komunikacja i social media", meta: "Marka produktowa" },
      { type: "placeholder", title: "Meta Ads i analityka", meta: "E-commerce" },
    ],
  },
  logos: { label: "Współpracowałam z markami", placeholder: "Logo klienta" },
  about: {
    pill: "O mnie",
    title: "Marketing znam z kilku stron stołu.",
    paragraphs: [
      "Nazywam się Ela Chabko. Łączę strategiczne spojrzenie z doświadczeniem w codziennym wdrażaniu marketingu, dzięki czemu rekomendacje oceniam nie tylko przez pryzmat tego, jak brzmią na prezentacji, ale również tego, czy firma rzeczywiście będzie w stanie je wykorzystać.",
      "Pracuję przy strategii, komunikacji, social mediach, content marketingu, kampaniach i analityce. Korzystam również z AI i automatyzacji, ale tylko tam, gdzie pomagają usprawnić proces, poprawić jakość pracy albo podejmować decyzje na lepszej podstawie.",
    ],
    stats: [
      { value: "20+", label: "marek", hint: "projekty B2B i B2C" },
      { value: "25+", label: "szkoleń", hint: "online i stacjonarnie" },
      { value: "8+", label: "lat doświadczenia", hint: "marketing i komunikacja" },
    ],
    quote:
      "Strategia powinna pomagać podejmować decyzje, a nie tylko dobrze wyglądać w prezentacji.",
    cta: "Porozmawiajmy o Twoim marketingu",
    testimonials: {
      tag: "Opinia klienta",
      items: [
        {
          // Cytat z referencji opublikowanych na stronie Współprace
          text: "Ela potrafi dobrze łączyć strategiczne spojrzenie na komunikację z jej sprawną realizacją.",
          author: "Joanna Tymowicz",
          role: "Wiceprezeska Zarządu Ideo Force",
        },
        {
          text: "Tu pojawi się krótki cytat z listu referencyjnego lub opinii klienta, najlepiej z konkretnym efektem współpracy.",
          author: "Imię i nazwisko",
          role: "Stanowisko, firma",
          placeholder: true,
        },
      ],
    },
  },
  forWhom: {
    pill: "Dla kogo?",
    title: "Nie musisz zaczynać marketingu od zera, żeby potrzebować nowego kierunku.",
    lead: "Najczęściej pracuję z właścicielami i osobami odpowiedzialnymi za marketing w firmach, w których działania już trwają, ale coraz trudniej ocenić, co powinno być kolejnym krokiem.",
    items: [
      {
        eyebrow: "Porządkowanie",
        title: "Marketing działa po kawałku",
        description:
          "Social media, kampanie, strona i content są prowadzone, ale brakuje jednego kierunku i jasnej hierarchii priorytetów.",
      },
      {
        eyebrow: "Zmiana",
        title: "Firma jest przed ważnym ruchem",
        description:
          "Nowa strona, zmiana komunikacji, kolejny kanał albo przebudowa sposobu pozyskiwania Klientów wymagają szerszej decyzji niż wybór kolejnego narzędzia.",
      },
      {
        eyebrow: "Perspektywa",
        title: "Brakuje senioralnego spojrzenia",
        description:
          "Zespół działa, ale potrzebuje kogoś, kto połączy dane, kontekst biznesowy i wykonanie, a następnie pomoże ocenić, co rzeczywiście ma sens.",
      },
      {
        eyebrow: "Decyzje",
        title: "Potrzebujesz partnera do myślenia",
        description:
          "Nie kolejnej osoby do realizowania listy zadań, ale kogoś, z kim można zweryfikować kierunek, priorytety i kolejne decyzje marketingowe.",
      },
    ],
    statement: {
      title: "Nie szukasz „więcej marketingu”. Potrzebujesz wiedzieć, co zrobić dalej.",
      text: "Zakres współpracy wynika z sytuacji firmy, jej celów i realnych możliwości, a nie z gotowego pakietu działań.",
    },
  },
  benefits: {
    pill: "Po współpracy",
    title: "Po współpracy wiesz, co robić dalej.",
    items: [
      {
        title: "Klarowność.",
        description:
          "Wiesz, gdzie naprawdę leży problem i które działania mają największe znaczenie.",
      },
      {
        title: "Priorytety.",
        description:
          "Masz jasność, czym zająć się teraz, co może poczekać i z czego świadomie zrezygnować.",
      },
      {
        title: "Plan do wdrożenia.",
        description:
          "Rekomendacje uwzględniają realny budżet, czas i możliwości zespołu.",
      },
      {
        title: "Lepsze decyzje.",
        description:
          "Kolejne działania oceniasz na podstawie celu, danych i kontekstu biznesowego.",
      },
    ],
    closing:
      "Dobry marketing nie polega na robieniu wszystkiego. Część wartości polega właśnie na tym, żeby wiedzieć, czego nie robić.",
  },
  contact: {
    pill: "Następny krok",
    title: "Nie wiesz, co powinno być kolejnym krokiem w marketingu?",
    lead: "Nie musisz mieć gotowego briefu ani listy działań. Na krótkiej rozmowie przyjrzymy się sytuacji i sprawdzimy, gdzie mogę realnie pomóc.",
    cta: "Porozmawiajmy o Twoim marketingu",
    note: "15 min • bez zobowiązań",
  },
};

export const homeEn: HomeCopy = {
  lang: "en",
  hero: {
    eyebrow: "Marketing strategy & consulting",
    line1: "Fewer random tactics.",
    line2: "Better marketing decisions.",
    lead: "I help B2B and B2C companies bring order to their marketing, set priorities and turn strategy into work their team can actually implement.",
    cta: "Tell me about your project",
    note: "Based in Poland (CET) · I work in English, mostly asynchronously",
    scroll: "Scroll",
  },
  problem: {
    pill: "Sound familiar?",
    lines: [
      "Activities are scattered.",
      "There are more ideas than resources.",
      "There is data, but no conclusions.",
      "AI keeps adding new options.",
    ],
    lead: "In many companies the problem is not a lack of activity. Posts get published, campaigns get launched and new ideas keep coming, but over time it gets harder to decide which of them are really worth continuing.",
  },
  unify: {
    title: ["One", "direction"],
    caption: "instead of disconnected activities.",
    cards: {
      post: "LinkedIn post",
      ads: "Meta Ads campaign",
      adsStatus: "Active",
      report: "GA4 report",
      newsletter: "Newsletter",
      newsletterStatus: "Sent",
      website: "Website",
      content: "Content plan",
      ai: "New AI tool",
      aiText: "Will this solve our problem?",
      reel: "Instagram reel",
    },
    plan: {
      title: "Marketing plan",
      items: ["Priorities", "Role of each channel", "How to measure results"],
    },
  },
  services: {
    pill: "How I can help",
    title: "From diagnosing the problem to supporting implementation.",
    lead: "The scope is matched to your situation, not to a ready-made package.",
    items: [
      {
        icon: "diagnosis",
        title: "Marketing audit",
        description:
          "For when there is a lot going on in marketing, but it is hard to tell what is worth developing. I review your communication, channels and data, then sort out the problems and priorities.",
      },
      {
        icon: "strategy",
        title: "Marketing & communication strategy",
        description:
          "For when you need one direction instead of disconnected activities. Positioning, messaging, the role of each channel, goals and an implementation plan your team can follow.",
      },
      {
        icon: "implementation",
        title: "Implementation support",
        description:
          "For when the direction is set and you need hands-on help: LinkedIn and B2B content, Meta Ads, GA4 and marketing analytics, or practical use of AI in marketing workflows.",
      },
      {
        icon: "support",
        title: "Fractional marketing support",
        description:
          "Ongoing, part-time senior marketing input: regular review of results, priorities and day-to-day decisions, without hiring a full-time marketing manager.",
      },
    ],
    note: "Need a website or a web app as well? I work with a trusted development team, so strategy, content and build can come from one place.",
  },
  process: {
    pill: "How we would work together",
    title: "Remote, written and structured.",
    steps: [
      {
        icon: "search",
        word: "Brief",
        description:
          "Use the form below or email me. A few sentences about your company and what you would like to change is enough.",
      },
      {
        icon: "priority",
        word: "Proposal",
        description:
          "I reply with questions or a proposal, usually within two business days. If it is not a good fit, I will tell you directly.",
      },
      {
        icon: "plan",
        word: "Async",
        description:
          "Shared documents, written summaries and email. Calls when they genuinely help, so the time-zone difference is not a blocker.",
      },
      {
        icon: "rocket",
        word: "Scope",
        description:
          "Every collaboration has a defined scope, deliverables and a simple way of measuring progress.",
      },
    ],
    closing:
      "A strategy should help you make decisions, not just look good in a slide deck.",
  },
  work: {
    pill: "Selected experience",
    title: "Different industries, the same approach.",
    lead: "A few examples of projects I am working on.",
    placeholderTag: "Project image",
    items: [
      {
        type: "text",
        title: "Logistics software (B2B SaaS)",
        meta: "Content strategy · LinkedIn",
        text: "Content strategy and LinkedIn communication for load-planning software, moving from ad-hoc posts to content with a clear business role, based on analytics data.",
      },
      {
        type: "text",
        title: "AI & software development",
        meta: "Positioning · Website messaging",
        text: "Positioning, service structure and website messaging, including communication aimed at the US market.",
      },
      {
        type: "text",
        title: "E-commerce, medical devices",
        meta: "Meta Ads · Analytics",
        text: "Meta Ads management and reporting: ROAS, CPA, attribution and GA4 analysis to decide where the budget should go.",
      },
    ],
  },
  logos: { label: "Brands I have worked with", placeholder: "Client logo" },
  about: {
    pill: "About me",
    title: "I have seen marketing from several sides of the table.",
    paragraphs: [
      "I’m Ela Chabko, the founder of Digitilio, a one-person marketing consultancy based in Poland. I combine strategic thinking with years of day-to-day marketing execution, so I judge recommendations not by how they look in a presentation, but by whether your team can actually use them.",
      "I work across strategy, communication, social media, content, paid campaigns and analytics, for both B2B and consumer brands. I also teach marketing in postgraduate programs and run trainings for companies.",
    ],
    stats: [
      { value: "20+", label: "brands", hint: "B2B and B2C projects" },
      { value: "25+", label: "trainings", hint: "online and in person" },
      { value: "8+", label: "years", hint: "marketing and communication" },
    ],
    quote:
      "A strategy should help you make decisions, not just look good in a slide deck.",
    cta: "Tell me about your project",
  },
  forWhom: {
    pill: "Who I work with",
    title: "Companies with real expertise and scattered marketing.",
    lead: "Founders and teams whose marketing is already running, but who want an outside, senior view on what to focus on.",
    items: [
      {
        eyebrow: "B2B",
        title: "B2B technology & SaaS",
        description:
          "Products that are hard to explain in one sentence and need communication that builds trust with technical buyers.",
      },
      {
        eyebrow: "Industry",
        title: "Industrial & engineering companies",
        description:
          "Firms with strong expertise and real projects, but little time to turn them into consistent communication.",
      },
      {
        eyebrow: "B2C",
        title: "Consumer brands & e-commerce",
        description:
          "Online stores and service brands that run ads and social media, but want clearer data and better-spent budgets.",
      },
      {
        eyebrow: "Teams",
        title: "Teams without a senior marketer",
        description:
          "Founders and small teams who do marketing “on the side” and want an outside view on what to focus on.",
      },
    ],
  },
  benefits: {
    pill: "After working together",
    title: "You know what to do next.",
    items: [
      { title: "Clarity.", description: "You know where the real problem is and which activities matter most." },
      { title: "Priorities.", description: "What to do now, what can wait and what to drop on purpose." },
      { title: "A plan you can implement.", description: "Recommendations that fit your real budget, time and team." },
      { title: "Better decisions.", description: "Next steps judged by goals, data and business context." },
    ],
    closing:
      "Good marketing is not about doing everything. Part of the value is knowing what not to do.",
  },
  contact: {
    pill: "Contact",
    title: "Tell me where your marketing is stuck.",
    lead: "Write a few sentences about your company and what you need. I will get back to you by email, usually within two business days.",
    cta: "Send a message",
    note: "elachabko@digitilio.pl",
  },
};
