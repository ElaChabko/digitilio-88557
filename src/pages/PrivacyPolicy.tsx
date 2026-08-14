import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Polityka prywatności | Digitilio"
        description="Polityka prywatności serwisu Digitilio.pl oraz informacje dotyczące przetwarzania danych osobowych."
        canonical="https://digitilio.pl/polityka-prywatnosci"
      />

      <Navigation />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#17131f] pb-16 pt-36 text-white sm:pb-20 sm:pt-40">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            aria-hidden="true"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          <div
            className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-primary/20 blur-[140px]"
            aria-hidden="true"
          />

          <div className="container relative z-10 mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Wróć na stronę główną
              </Link>

              <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Polityka prywatności
              </h1>

              <p className="mt-6 text-sm text-white/55 sm:text-base">
                Data ostatniej aktualizacji: 14 sierpnia 2026 r.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <article className="mx-auto max-w-4xl">
              {/* 1 */}
              <section className="border-b border-border pb-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  1. Postanowienia ogólne
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Niniejsza Polityka prywatności określa zasady przetwarzania
                    danych osobowych osób korzystających ze strony internetowej{" "}
                    <strong>digitilio.pl</strong> (dalej: „Serwis”).
                  </p>

                  <p>
                    Administratorem danych osobowych jest{" "}
                    <strong>Elżbieta Chabko</strong>, prowadząca działalność
                    gospodarczą pod nazwą „Digitilio”, z siedzibą w Polsce,
                    NIP: 6871986208.
                  </p>

                  <p>
                    W sprawach dotyczących przetwarzania danych osobowych można
                    skontaktować się z Administratorem pod adresem:{" "}
                    <a
                      href="mailto:elachabko@digitilio.pl"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      elachabko@digitilio.pl
                    </a>
                    .
                  </p>

                  <p>
                    Dane osobowe są przetwarzane zgodnie z obowiązującymi
                    przepisami dotyczącymi ochrony danych osobowych, w
                    szczególności z Rozporządzeniem Parlamentu Europejskiego i
                    Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO) oraz,
                    w zakresie komunikacji elektronicznej i marketingu
                    bezpośredniego, z ustawą z dnia 12 lipca 2024 r. Prawo
                    komunikacji elektronicznej.
                  </p>
                </div>
              </section>

              {/* 2 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  2. Zakres, cele i podstawy przetwarzania danych
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Administrator może przetwarzać dane przekazane bezpośrednio
                    przez użytkownika, w szczególności imię, adres e-mail, nazwę
                    firmy oraz treść wiadomości, a także dane techniczne
                    związane z korzystaniem z Serwisu.
                  </p>

                  <p>Dane osobowe mogą być przetwarzane w następujących celach:</p>

                  <ul className="space-y-4 pl-6">
                    <li className="list-disc">
                      <strong>obsługa zapytań i korespondencji</strong> –
                      w celu odpowiedzi na wiadomość przesłaną przez formularz
                      kontaktowy lub e-mail, na podstawie prawnie uzasadnionego
                      interesu Administratora polegającego na prowadzeniu
                      komunikacji z osobami zainteresowanymi działalnością
                      Digitilio (art. 6 ust. 1 lit. f RODO),
                    </li>

                    <li className="list-disc">
                      <strong>
                        podjęcie działań przed zawarciem umowy oraz realizacja
                        usług
                      </strong>{" "}
                      – jeżeli zapytanie dotyczy nawiązania współpracy lub
                      realizacji umowy, na podstawie art. 6 ust. 1 lit. b RODO,
                    </li>

                    <li className="list-disc">
                      <strong>marketing e-mailowy</strong> – wyłącznie w
                      przypadku dobrowolnego zaznaczenia odpowiedniej zgody w
                      formularzu, w celu przesyłania informacji, materiałów i
                      ofert marketingowych dotyczących usług Digitilio i
                      marketingu, na podstawie zgody użytkownika (art. 6 ust. 1
                      lit. a RODO) oraz zgodnie z przepisami Prawa komunikacji
                      elektronicznej,
                    </li>

                    <li className="list-disc">
                      <strong>analityka i rozwój Serwisu</strong> – w zakresie
                      wymagającym zgody użytkownika dane są przetwarzane na jej
                      podstawie (art. 6 ust. 1 lit. a RODO), zgodnie z
                      ustawieniami cookies wybranymi przez użytkownika,
                    </li>

                    <li className="list-disc">
                      <strong>
                        zapewnienie bezpieczeństwa i prawidłowego działania
                        Serwisu
                      </strong>{" "}
                      – na podstawie prawnie uzasadnionego interesu
                      Administratora polegającego na utrzymaniu bezpieczeństwa,
                      stabilności i ochronie Serwisu (art. 6 ust. 1 lit. f
                      RODO),
                    </li>

                    <li className="list-disc">
                      <strong>
                        ustalenie, dochodzenie lub obrona przed roszczeniami
                      </strong>{" "}
                      – jeśli będzie to konieczne, na podstawie prawnie
                      uzasadnionego interesu Administratora (art. 6 ust. 1 lit.
                      f RODO).
                    </li>
                  </ul>

                  <p>
                    Podanie danych w formularzu kontaktowym jest dobrowolne,
                    jednak podanie adresu e-mail oraz treści wiadomości jest
                    niezbędne do przesłania zapytania i uzyskania odpowiedzi.
                    Podanie imienia i nazwy firmy jest opcjonalne.
                  </p>

                  <p>
                    Wyrażenie zgody na marketing e-mailowy jest całkowicie
                    dobrowolne i nie jest warunkiem wysłania formularza,
                    otrzymania odpowiedzi ani skorzystania z usług Digitilio.
                  </p>
                </div>
              </section>

              {/* 3 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  3. Marketing e-mailowy
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Jeżeli użytkownik dobrowolnie zaznaczy zgodę marketingową w
                    formularzu kontaktowym, jego adres e-mail może zostać
                    zapisany na liście odbiorców komunikacji marketingowej
                    Digitilio.
                  </p>

                  <p>
                    Zgoda obejmuje przesyłanie na podany adres e-mail informacji,
                    materiałów i ofert marketingowych dotyczących usług
                    Digitilio oraz marketingu.
                  </p>

                  <p>
                    Zgodę można wycofać w dowolnym momencie, kontaktując się z
                    Administratorem pod adresem{" "}
                    <a
                      href="mailto:elachabko@digitilio.pl"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      elachabko@digitilio.pl
                    </a>
                    . Wycofanie zgody nie wpływa na zgodność z prawem
                    przetwarzania dokonanego przed jej wycofaniem.
                  </p>

                  <p>
                    Brak zgody marketingowej nie wpływa na możliwość korzystania
                    z formularza kontaktowego ani na odpowiedź na przesłane
                    zapytanie.
                  </p>
                </div>
              </section>

              {/* 4 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  4. Odbiorcy danych i dostawcy usług
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Dane osobowe mogą być powierzane podmiotom wspierającym
                    Administratora w prowadzeniu Serwisu oraz realizacji
                    komunikacji, wyłącznie w zakresie niezbędnym do świadczenia
                    ich usług.
                  </p>

                  <p>Do takich podmiotów należą w szczególności:</p>

                  <ul className="space-y-4 pl-6">
                    <li className="list-disc">
                      <strong>Cloudflare, Inc.</strong> – dostawca infrastruktury
                      technicznej, hostingu, usług sieciowych i bezpieczeństwa
                      Serwisu,
                    </li>

                    <li className="list-disc">
                      <strong>Plus Five Five, Inc. (Resend)</strong> – dostawca
                      infrastruktury do wysyłki wiadomości e-mail z formularza
                      oraz obsługi kontaktów i komunikacji marketingowej,
                    </li>

                    <li className="list-disc">
                      <strong>Google</strong> – dostawca narzędzi analitycznych,
                      w szczególności Google Analytics i Google Tag Manager,
                      wykorzystywanych zgodnie z ustawieniami zgód użytkownika,
                    </li>

                    <li className="list-disc">
                      dostawcy usług IT, księgowych lub innych usług
                      wspierających działalność Administratora, jeżeli dostęp do
                      danych jest niezbędny do realizacji tych usług.
                    </li>
                  </ul>

                  <p>
                    Podmioty przetwarzające dane na zlecenie Administratora
                    działają na podstawie odpowiednich warunków umownych lub
                    innych przewidzianych prawem podstaw przetwarzania.
                  </p>
                </div>
              </section>

              {/* 5 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  5. Przekazywanie danych poza Europejski Obszar Gospodarczy
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    W związku z korzystaniem z usług dostawców technologicznych
                    dane mogą być przetwarzane również poza Europejskim
                    Obszarem Gospodarczym, w szczególności w Stanach
                    Zjednoczonych.
                  </p>

                  <p>
                    Resend przechowuje dane klientów w Stanach Zjednoczonych i
                    przewiduje w swoich warunkach ochrony danych stosowanie
                    standardowych klauzul umownych zatwierdzonych przez Komisję
                    Europejską dla transferów wymagających takich zabezpieczeń.
                  </p>

                  <p>
                    Cloudflare stosuje przewidziane prawem mechanizmy transferu
                    danych, w tym EU-U.S. Data Privacy Framework oraz
                    standardowe klauzule umowne, zależnie od podstawy danego
                    transferu.
                  </p>

                  <p>
                    Google również może przetwarzać dane na serwerach
                    znajdujących się poza krajem użytkownika i stosuje
                    odpowiednie mechanizmy transferowe, w tym decyzje o
                    odpowiednim stopniu ochrony, EU-U.S. Data Privacy Framework
                    oraz standardowe klauzule umowne, gdy są wymagane.
                  </p>
                </div>
              </section>

              {/* 6 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  6. Okres przechowywania danych
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Dane związane z zapytaniami i korespondencją są
                    przechowywane przez okres potrzebny do obsługi sprawy i
                    prowadzenia związanej z nią komunikacji, a następnie przez
                    okres niezbędny do ustalenia, dochodzenia lub obrony przed
                    ewentualnymi roszczeniami, jeżeli jest to uzasadnione.
                  </p>

                  <p>
                    Dane przetwarzane na potrzeby realizacji umowy są
                    przechowywane przez okres jej realizacji, a następnie przez
                    okres wymagany przepisami prawa lub niezbędny do ochrony
                    przed roszczeniami.
                  </p>

                  <p>
                    Dane wykorzystywane do marketingu e-mailowego są
                    przetwarzane do momentu wycofania zgody. Informacje
                    niezbędne do wykazania faktu udzielenia lub wycofania zgody
                    mogą być przechowywane dłużej, jeżeli jest to konieczne do
                    wykazania zgodności działań Administratora z prawem.
                  </p>

                  <p>
                    Dane analityczne są przechowywane zgodnie z ustawieniami
                    wykorzystywanych narzędzi oraz zakresem zgody udzielonej
                    przez użytkownika.
                  </p>
                </div>
              </section>

              {/* 7 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  7. Prawa użytkowników
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    W zależności od podstawy i okoliczności przetwarzania
                    użytkownikowi mogą przysługiwać następujące prawa:
                  </p>

                  <ul className="space-y-3 pl-6">
                    <li className="list-disc">
                      prawo dostępu do danych oraz uzyskania ich kopii,
                    </li>

                    <li className="list-disc">
                      prawo sprostowania lub uzupełnienia danych,
                    </li>

                    <li className="list-disc">
                      prawo żądania usunięcia danych,
                    </li>

                    <li className="list-disc">
                      prawo żądania ograniczenia przetwarzania,
                    </li>

                    <li className="list-disc">
                      prawo do przenoszenia danych, jeśli spełnione są warunki
                      przewidziane w RODO,
                    </li>

                    <li className="list-disc">
                      prawo wniesienia sprzeciwu wobec przetwarzania opartego
                      na prawnie uzasadnionym interesie Administratora,
                    </li>

                    <li className="list-disc">
                      prawo wycofania zgody w dowolnym momencie, jeśli dane są
                      przetwarzane na jej podstawie,
                    </li>

                    <li className="list-disc">
                      prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych
                      Osobowych, jeżeli użytkownik uzna, że jego dane są
                      przetwarzane niezgodnie z prawem.
                    </li>
                  </ul>

                  <p>
                    W celu realizacji swoich praw można skontaktować się z
                    Administratorem pod adresem:{" "}
                    <a
                      href="mailto:elachabko@digitilio.pl"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      elachabko@digitilio.pl
                    </a>
                    .
                  </p>
                </div>
              </section>

              {/* 8 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  8. Pliki cookies i narzędzia analityczne
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Serwis wykorzystuje pliki cookies oraz podobne technologie.
                    Cookies niezbędne mogą być wykorzystywane w zakresie
                    koniecznym do prawidłowego działania Serwisu oraz
                    zapamiętania ustawień użytkownika.
                  </p>

                  <p>
                    Cookies i technologie analityczne lub marketingowe są
                    wykorzystywane zgodnie z wyborem dokonanym przez użytkownika
                    w ustawieniach cookies.
                  </p>

                  <p>
                    Administrator korzysta z Google Analytics w celu analizy
                    sposobu korzystania z Serwisu. W zależności od konfiguracji
                    oraz udzielonych zgód mogą być przetwarzane m.in. dane
                    techniczne dotyczące urządzenia, przeglądarki, sposobu
                    korzystania z Serwisu oraz odwiedzanych podstron.
                  </p>

                  <p>
                    Użytkownik może w dowolnym momencie ponownie otworzyć{" "}
                    <strong>Ustawienia cookies</strong> dostępne w stopce Serwisu
                    i zmienić wcześniej podjętą decyzję.
                  </p>

                  <p>
                    Szczegółowe informacje dotyczące wykorzystywanych plików
                    cookies znajdują się w{" "}
                    <Link
                      to="/polityka-cookies"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Polityce plików cookies
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* 9 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  9. Bezpieczeństwo danych
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Administrator stosuje odpowiednie środki techniczne i
                    organizacyjne mające na celu ochronę danych osobowych przed
                    nieuprawnionym dostępem, utratą, zmianą lub zniszczeniem.
                  </p>

                  <p>Stosowane środki obejmują w szczególności:</p>

                  <ul className="space-y-3 pl-6">
                    <li className="list-disc">
                      szyfrowanie połączenia za pomocą protokołu HTTPS,
                    </li>

                    <li className="list-disc">
                      ograniczenie dostępu do danych do osób i podmiotów, które
                      potrzebują go do realizacji określonych zadań,
                    </li>

                    <li className="list-disc">
                      korzystanie z dostawców usług stosujących środki ochrony
                      danych i bezpieczeństwa,
                    </li>

                    <li className="list-disc">
                      stosowanie zabezpieczeń technicznych właściwych dla
                      wykorzystywanej infrastruktury.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 10 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  10. Zmiany w Polityce prywatności
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Polityka prywatności może być aktualizowana w szczególności
                    w przypadku zmian w sposobie działania Serwisu,
                    wykorzystywanych narzędziach, procesach przetwarzania danych
                    lub obowiązujących przepisach prawa.
                  </p>

                  <p>
                    Aktualna wersja Polityki prywatności jest zawsze dostępna
                    pod adresem digitilio.pl/polityka-prywatnosci.
                  </p>
                </div>
              </section>

              {/* 11 */}
              <section className="pt-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  11. Kontakt
                </h2>

                <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/[0.05] p-6 sm:p-8">
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    W sprawach związanych z ochroną danych osobowych lub
                    realizacją praw wynikających z RODO można skontaktować się z
                    Administratorem pod adresem:{" "}
                    <a
                      href="mailto:elachabko@digitilio.pl"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      elachabko@digitilio.pl
                    </a>
                    .
                  </p>
                </div>
              </section>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
