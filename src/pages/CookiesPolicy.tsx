import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Polityka plików cookies | Digitilio"
        description="Polityka plików cookies serwisu Digitilio.pl oraz informacje dotyczące wykorzystywania plików cookies i narzędzi analitycznych."
        canonical="https://digitilio.pl/polityka-cookies"
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
                Polityka plików cookies
              </h1>

              <p className="mt-6 text-sm text-white/55 sm:text-base">
                Data ostatniej aktualizacji: 11 listopada 2025 r.
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
                  1. Informacje ogólne
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Niniejsza Polityka plików cookies określa zasady
                    przechowywania i uzyskiwania dostępu do informacji na
                    urządzeniach użytkowników korzystających ze strony
                    internetowej <strong>digitilio.pl</strong> (dalej:
                    „Serwis”).
                  </p>

                  <p>
                    Operatorem Serwisu i administratorem danych jest{" "}
                    <strong>Elżbieta Chabko</strong>, prowadząca działalność
                    gospodarczą pod nazwą Digitilio, z siedzibą w Polsce, adres
                    e-mail:{" "}
                    <a
                      href="mailto:kontakt@digitilio.pl"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      kontakt@digitilio.pl
                    </a>
                    .
                  </p>
                </div>
              </section>

              {/* 2 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  2. Czym są pliki cookies
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Pliki cookies (tzw. „ciasteczka”) to niewielkie pliki
                    tekstowe zapisywane na urządzeniu końcowym użytkownika
                    (np. komputerze, smartfonie, tablecie) podczas korzystania
                    z Serwisu. Cookies pozwalają na rozpoznanie urządzenia
                    użytkownika i odpowiednie wyświetlenie strony internetowej,
                    a także umożliwiają korzystanie z jej funkcjonalności.
                  </p>

                  <p>
                    Cookies nie służą identyfikacji użytkownika i nie
                    umożliwiają ustalenia jego tożsamości. Dane zbierane za
                    pomocą cookies nie są łączone z danymi osobowymi
                    użytkowników.
                  </p>
                </div>
              </section>

              {/* 3 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  3. Rodzaje wykorzystywanych plików cookies
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    W Serwisie mogą być stosowane następujące rodzaje plików
                    cookies:
                  </p>

                  <ul className="space-y-4 pl-6">
                    <li className="list-disc">
                      <strong>a) Cookies niezbędne</strong> – pliki, które
                      umożliwiają prawidłowe funkcjonowanie Serwisu, logowanie,
                      wyświetlanie treści oraz utrzymanie sesji użytkownika. Bez
                      ich użycia strona może działać niepoprawnie.
                    </li>

                    <li className="list-disc">
                      <strong>b) Cookies funkcjonalne</strong> – ułatwiają
                      korzystanie z Serwisu, zapamiętując preferencje
                      użytkownika (np. język, układ strony, zgody).
                    </li>

                    <li className="list-disc">
                      <strong>c) Cookies analityczne (statystyczne)</strong> –
                      pomagają zrozumieć, w jaki sposób użytkownicy korzystają
                      ze strony, umożliwiając ulepszanie jej struktury i treści.
                      W tym celu Serwis może korzystać z narzędzi analitycznych,
                      takich jak Google Analytics.
                    </li>

                    <li className="list-disc">
                      <strong>d) Cookies marketingowe</strong> – mogą być
                      wykorzystywane do wyświetlania użytkownikom
                      spersonalizowanych treści reklamowych, jeśli takie funkcje
                      zostaną w przyszłości włączone w Serwisie.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 4 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  4. Narzędzia zewnętrzne
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Serwis może korzystać z zewnętrznych usług analitycznych lub
                    marketingowych, które również stosują pliki cookies, w
                    szczególności:
                  </p>

                  <ul className="space-y-4 pl-6">
                    <li className="list-disc">
                      <strong>Google Analytics</strong> (dostarczany przez Google
                      Ireland Ltd.) – do analizy sposobu korzystania z Serwisu.
                      Informacje o prywatności Google dostępne są pod adresem:{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary underline-offset-4 hover:underline"
                      >
                        https://policies.google.com/privacy
                      </a>
                    </li>

                    <li className="list-disc">
                      <strong>Netlify i GitHub Pages</strong> – jako dostawcy
                      infrastruktury hostingowej, mogą przetwarzać dane
                      techniczne niezbędne do zapewnienia prawidłowego działania
                      strony.
                    </li>
                  </ul>

                  <p>
                    Użytkownik może zapoznać się z zasadami ochrony prywatności
                    tych podmiotów, odwiedzając ich oficjalne strony.
                  </p>
                </div>
              </section>

              {/* 5 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  5. Zgoda na korzystanie z plików cookies
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Podczas pierwszej wizyty w Serwisie użytkownik ma możliwość
                    wyrażenia zgody na stosowanie plików cookies poprzez
                    odpowiedni baner lub komunikat. Użytkownik może w każdej
                    chwili zmienić swoje preferencje, cofając zgodę lub
                    modyfikując ustawienia cookies w przeglądarce internetowej.
                  </p>

                  <p>
                    Brak zgody na stosowanie niektórych rodzajów cookies
                    (np. analitycznych lub marketingowych) może ograniczyć
                    funkcjonalność Serwisu, ale nie uniemożliwia jego
                    przeglądania.
                  </p>
                </div>
              </section>

              {/* 6 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  6. Zarządzanie plikami cookies
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Większość przeglądarek internetowych domyślnie akceptuje
                    pliki cookies. Użytkownik może jednak samodzielnie zmienić
                    ustawienia dotyczące cookies w dowolnym momencie, w tym:
                  </p>

                  <ul className="space-y-3 pl-6">
                    <li className="list-disc">
                      zablokować automatyczną obsługę plików cookies,
                    </li>

                    <li className="list-disc">
                      usuwać już zapisane pliki,
                    </li>

                    <li className="list-disc">
                      ustawić powiadomienie o każdorazowym zapisaniu pliku
                      cookie.
                    </li>
                  </ul>

                  <p>
                    Sposób zmiany ustawień różni się w zależności od
                    przeglądarki. Poniżej znajdują się linki do instrukcji dla
                    najpopularniejszych z nich:
                  </p>

                  <ul className="space-y-3 pl-6">
                    <li className="list-disc">Google Chrome</li>
                    <li className="list-disc">Mozilla Firefox</li>
                    <li className="list-disc">Microsoft Edge</li>
                    <li className="list-disc">Safari</li>
                  </ul>
                </div>
              </section>

              {/* 7 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  7. Okres przechowywania plików cookies
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Niektóre pliki cookies są usuwane po zakończeniu sesji
                    przeglądarki (tzw. cookies sesyjne), inne przechowywane są
                    na urządzeniu użytkownika przez określony czas lub do
                    momentu ich usunięcia (tzw. cookies trwałe). Okres
                    przechowywania zależy od celu ich użycia oraz ustawień
                    przeglądarki użytkownika.
                  </p>
                </div>
              </section>

              {/* 8 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  8. Zmiany w Polityce cookies
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Administrator może wprowadzać zmiany w niniejszej Polityce,
                    aby dostosować ją do zmian w przepisach prawa, technologii
                    lub sposobu działania Serwisu.
                  </p>

                  <p>
                    Aktualna wersja Polityki cookies jest zawsze dostępna pod
                    adresem{" "}
                    <a
                      href="https://digitilio.pl/polityka-cookies"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      digitilio.pl/polityka-cookies
                    </a>
                    .
                  </p>
                </div>
              </section>

              {/* 9 */}
              <section className="pt-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  9. Kontakt
                </h2>

                <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/[0.05] p-6 sm:p-8">
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    W sprawach dotyczących niniejszej Polityki cookies można
                    skontaktować się z Administratorem za pośrednictwem poczty
                    elektronicznej:{" "}
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
