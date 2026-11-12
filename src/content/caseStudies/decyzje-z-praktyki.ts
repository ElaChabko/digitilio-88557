import type { CaseStudy } from "./types";

export const practiceDecisions: CaseStudy = {
  id: 2,

  slug: "decyzje-z-praktyki",

  title: "Decyzje z mojej praktyki",

  lead:
    "Wyniki kampanii zależą od budżetu, branży i oferty klienta. To, jak specjalista myśli, widać dopiero w decyzjach, które podejmuje, gdy coś nie idzie zgodnie z planem. Zebrałam tu kilka takich sytuacji z mojej pracy.",

  industry: "e-commerce / B2B",

  scope:
    "Meta Ads, treści organiczne, analiza danych, rekomendacje strategiczne",

  period: "2026",

  seoTitle: "Decyzje z mojej praktyki | Digitilio",

  seoDescription:
    "Pięć sytuacji z kampanii Meta Ads i komunikacji w social media: co się działo, jaką decyzję podjęłam i dlaczego.",

  results: [],

  sections: [
    {
      type: "decision",
      number: "01",
      title:
        "Poprawiłam wyniki kampanii, ale mimo wszystko potem zarekomendowałam pauzę",
      theme: "light",
      paragraphs: [
        "Sytuacja. Sklep internetowy testował kampanię sprzedażową w Meta Ads. Po zmianach w reklamach wyniki poprawiały się z tygodnia na tydzień, ale wciąż były za niskie, żeby kampania na siebie zarabiała. Zbliżał się listopad, najdroższy miesiąc w reklamach.",

        "Decyzja. Policzyłam, przy jakim wyniku kampania zaczyna się opłacać, i pokazałam klientowi, że przy obecnej ofercie w najbliższych tygodniach do tego progu nie dojdzie. Zarekomendowałam pauzę razem z gotowym planem powrotu: kiedy wrócić, z jakimi reklamami i po czym ocenić, czy kontynuować.",

        "Dlaczego. Produkt był tani, a darmowa dostawa zaczynała się od dużo wyższej kwoty, więc pojedynczy zakup nie pokrywał kosztu reklamy. Kontynuowanie w listopadzie oznaczałoby płacenie więcej za ten sam wynik. Marka sprzedawała też w innych kanałach, więc pauza nie zatrzymywała sprzedaży, tylko ograniczała koszty tam, gdzie się nie zwracały.",
      ],
    },

    {
      type: "decision",
      number: "02",
      title: "Zanim zmieniłam reklamy, sprawdziłam pomiar",
      theme: "dark",
      paragraphs: [
        "Sytuacja. Po dobrym miesiącu wyniki kampanii sprzedażowej spadły w ciągu tygodnia. Naturalnym odruchem byłaby szybka wymiana grafik.",

        "Decyzja. Najpierw sprawdziłam piksel, API konwersji, deduplikację zdarzeń i to, czy wartości zamówień trafiają do systemu prawidłowo.",

        "Dlaczego. Jeśli problem leży w danych, nowe kreacje niczego nie naprawią, a dodatkowo zaburzą ocenę tego, co działa. Pomiar okazał się poprawny, więc wiedziałam, że szukać trzeba w kreacjach, i zmiany przyniosły poprawę już w kolejnym tygodniu.",
      ],
    },

    {
      type: "decision",
      number: "03",
      title:
        "Nowa reklama musiała mówić coś innego, a nie tylko inaczej wyglądać",
      theme: "light",
      paragraphs: [
        "Sytuacja. Zwycięska grafika po dwóch miesiącach traciła skuteczność, a jej nowe wersje system prawie nie wyświetlał.",

        "Decyzja. Zamiast kolejnych wariantów tej samej grafiki przygotowałam kreacje z innym komunikatem: karuzelę, która pomagała wybrać produkt, i reklamę zachęcającą do zakupu dwóch sztuk.",

        "Dlaczego. Meta coraz częściej traktuje podobne reklamy prawie jak jedną. Test ma sens dopiero wtedy, gdy nowa kreacja daje odbiorcy inny powód do zakupu. Reklama z dwiema sztukami miała najniższy koszt zakupu w całej kampanii. To wynik z krótkiego okresu, więc traktuję go jako kierunek do dalszych testów.",
      ],
    },

    {
      type: "decision",
      number: "04",
      title: "Zaproponowałam nie więcej postów, ale inny format",
      theme: "dark",
      paragraphs: [
        "Sytuacja. Organiczne posty marki miały niewielkie zasięgi, a niemal całe dotarcie profilu pochodziło z kampanii płatnej. Najprostszą odpowiedzią byłoby publikowanie częściej.",

        "Decyzja. Zaproponowałam tę samą liczbę publikacji, ale z jedną karuzelą edukacyjną w miesiącu, zbudowaną wokół konkretnego problemu odbiorcy. Zaproponowałam też podział ról: reklama odpowiada za sprzedaż, a profil organiczny za edukację i wiarygodność.",

        "Dlaczego. Najlepiej działały posty, które zaczynały się od codziennego problemu, a nie od produktu. Więcej postów w tym samym stylu oznaczałoby więcej pracy bez większego efektu. Osoby, które po reklamie zaglądają na profil, powinny znaleźć tam argumenty, a nie kopię reklam.",
      ],
    },

    {
      type: "decision",
      number: "05",
      title: "Zamiast publikować kolejne posty, poprosiłam o dane",
      theme: "light",
      paragraphs: [
        "Sytuacja. Firma technologiczna B2B publikowała regularnie, ale treści powstawały z gotowej bazy tematów i nie było jasne, które z nich przekładają się na zainteresowanie ofertą.",

        "Decyzja. Przeanalizowałam dotychczasowe publikacje i poprosiłam o dostęp do danych z Google Analytics i Search Console. Na tej podstawie zmieniłam plan treści tak, żeby każdy post miał określoną funkcję.",

        "Dlaczego. Regularne publikowanie nie jest celem samym w sobie. Bez danych nie da się powiedzieć, które tematy przyciągają właściwych odbiorców, a które tylko zapełniają kalendarz.",
      ],
    },

    {
      type: "final",
      statement:
        "Dobra decyzja nie zawsze oznacza więcej budżetu albo więcej publikacji. Czasem oznacza sprawdzenie danych, zmianę komunikatu albo pauzę.",

      ctaText: "Masz podobny problem w swoim marketingu?",

      ctaButton: "Porozmawiajmy o Twojej sytuacji",
    },
  ],
};
