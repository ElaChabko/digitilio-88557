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
        description="Polityka plików cookies serwisu Digitilio.pl oraz informacje dotyczące plików cookies, Consent Mode i narzędzi analitycznych."
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
                  1. Informacje ogólne
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Niniejsza Polityka plików cookies określa zasady
                    wykorzystywania plików cookies oraz podobnych technologii
                    w związku z korzystaniem ze strony internetowej{" "}
                    <strong>digitilio.pl</strong> (dalej: „Serwis”).
                  </p>

                  <p>
                    Operatorem Serwisu i administratorem danych jest{" "}
                    <strong>Elżbieta Chabko</strong>, prowadząca działalność
                    gospodarczą pod nazwą Digitilio, z siedzibą w Polsce,
                    NIP: 6871986208.
                  </p>

                  <p>
                    W sprawach związanych z prywatnością oraz wykorzystywaniem
                    plików cookies można skontaktować się z Administratorem pod
                    adresem:{" "}
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

              {/* 2 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  2. Czym są pliki cookies i podobne technologie
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Pliki cookies to niewielkie informacje zapisywane na
                    urządzeniu użytkownika podczas korzystania ze strony
                    internetowej. Mogą służyć m.in. do zapewnienia działania
                    Serwisu, zapamiętywania ustawień oraz prowadzenia pomiarów
                    i analiz.
                  </p>

                  <p>
                    Serwis może również wykorzystywać inne mechanizmy
                    przechowywania informacji w przeglądarce. W szczególności
                    wybór użytkownika dotyczący zgód na analitykę i marketing
                    jest zapisywany lokalnie w pamięci przeglądarki
                    (localStorage), aby Serwis mógł zapamiętać podjętą decyzję.
                  </p>

                  <p>
                    Pliki cookies i podobne technologie mogą wiązać się z
                    przetwarzaniem informacji technicznych dotyczących
                    urządzenia, przeglądarki, sposobu korzystania z Serwisu lub
                    połączenia sieciowego.
                  </p>
                </div>
              </section>

              {/* 3 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  3. Kategorie wykorzystywanych technologii
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    W Serwisie wykorzystywane lub obsługiwane są następujące
                    kategorie technologii:
                  </p>

                  <ul className="space-y-4 pl-6">
                    <li className="list-disc">
                      <strong>Niezbędne</strong> – technologie potrzebne do
                      prawidłowego działania Serwisu oraz zapamiętania ustawień
                      prywatności użytkownika. Nie można ich wyłączyć w
                      ustawieniach zgód Serwisu, jeżeli są konieczne do
                      realizacji tych funkcji.
                    </li>

                    <li className="list-disc">
                      <strong>Analityczne</strong> – służą do pomiaru i analizy
                      sposobu korzystania z Serwisu, np. liczby odwiedzin,
                      odwiedzanych podstron i podstawowych informacji o sposobie
                      korzystania ze strony.
                    </li>

                    <li className="list-disc">
                      <strong>Marketingowe</strong> – mogą być wykorzystywane w
                      związku z narzędziami reklamowymi, pomiarem skuteczności
                      działań marketingowych lub personalizacją reklam, jeżeli
                      takie narzędzia są aktywne w Serwisie.
                    </li>
                  </ul>

                  <p>
                    Technologie analityczne i marketingowe są obsługiwane
                    zgodnie z decyzją użytkownika podjętą w panelu ustawień
                    cookies.
                  </p>
                </div>
              </section>

              {/* 4 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  4. Google Analytics, Google Tag Manager i Consent Mode
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Serwis korzysta z Google Tag Manager oraz Google Analytics
                    w celu zarządzania tagami i analizy sposobu korzystania ze
                    strony.
                  </p>

                  <p>
                    Ustawienia usług Google są powiązane z Google Consent Mode.
                    Przy pierwszej wizycie domyślne wartości dla zgód
                    analitycznych i reklamowych są ustawiane jako{" "}
                    <strong>denied</strong>, a następnie aktualizowane zgodnie z
                    wyborem użytkownika.
                  </p>

                  <p>
                    Serwis przekazuje do Consent Mode ustawienia dotyczące m.in.
                    parametrów:
                    <strong> analytics_storage</strong>,{" "}
                    <strong>ad_storage</strong>,{" "}
                    <strong>ad_user_data</strong> oraz{" "}
                    <strong>ad_personalization</strong>.
                  </p>

                  <p>
                    Jeżeli użytkownik nie wyrazi zgody na analitykę, Google
                    Analytics nie powinien ustawiać, odczytywać ani wykorzystywać
                    plików cookies Analytics. W konfiguracji Consent Mode mogą
                    jednak być wysyłane do Google sygnały pomiarowe bez
                    wykorzystywania cookies, zgodnie z zasadami działania tego
                    mechanizmu.
                  </p>

                  <p>
                    Informacje o zasadach prywatności Google są dostępne na
                    stronie:{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      policies.google.com/privacy
                    </a>
                    .
                  </p>
                </div>
              </section>

              {/* 5 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  5. Cloudflare
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Serwis korzysta z infrastruktury Cloudflare, w tym
                    Cloudflare Pages. Cloudflare wspiera hosting, dostarczanie
                    treści, bezpieczeństwo i dostępność Serwisu.
                  </p>

                  <p>
                    W związku ze świadczeniem tych usług Cloudflare może
                    przetwarzać dane techniczne związane z ruchem do Serwisu,
                    takie jak adres IP, informacje o routingu ruchu,
                    konfiguracji systemu oraz inne dane techniczne niezbędne do
                    świadczenia usług infrastrukturalnych i bezpieczeństwa.
                  </p>

                  <p>
                    Szczegółowe informacje dotyczące przetwarzania danych przez
                    Cloudflare znajdują się w polityce prywatności tego
                    dostawcy.
                  </p>
                </div>
              </section>

              {/* 6 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  6. Zarządzanie zgodami
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Przy pierwszej wizycie w Serwisie użytkownik otrzymuje
                    możliwość zdecydowania, czy wyraża zgodę na wykorzystywanie
                    technologii analitycznych i marketingowych.
                  </p>

                  <p>
                    Użytkownik może:
                  </p>

                  <ul className="space-y-3 pl-6">
                    <li className="list-disc">
                      zaakceptować wszystkie dodatkowe kategorie,
                    </li>

                    <li className="list-disc">
                      odrzucić wszystkie dodatkowe kategorie,
                    </li>

                    <li className="list-disc">
                      samodzielnie wybrać poszczególne kategorie.
                    </li>
                  </ul>

                  <p>
                    Udzielona zgoda może zostać zmieniona lub wycofana w
                    dowolnym momencie. W tym celu należy skorzystać z przycisku{" "}
                    <strong>„Ustawienia cookies”</strong> dostępnego w stopce
                    Serwisu.
                  </p>

                  <p>
                    Zmiana lub wycofanie zgody nie wpływa na zgodność z prawem
                    działań wykonanych przed jej zmianą.
                  </p>
                </div>
              </section>

              {/* 7 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  7. Ustawienia przeglądarki
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Niezależnie od ustawień dostępnych w Serwisie użytkownik
                    może również zarządzać plikami cookies bezpośrednio w swojej
                    przeglądarce internetowej.
                  </p>

                  <p>W zależności od przeglądarki można m.in.:</p>

                  <ul className="space-y-3 pl-6">
                    <li className="list-disc">
                      blokować zapisywanie wybranych lub wszystkich plików
                      cookies,
                    </li>

                    <li className="list-disc">
                      usuwać zapisane wcześniej pliki cookies,
                    </li>

                    <li className="list-disc">
                      ustawić powiadomienia dotyczące zapisywania cookies.
                    </li>
                  </ul>

                  <p>
                    Ograniczenie lub usunięcie niektórych technologii może
                    wpłynąć na sposób działania wybranych funkcji Serwisu.
                  </p>
                </div>
              </section>

              {/* 8 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  8. Okres przechowywania
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Okres przechowywania informacji zależy od rodzaju
                    wykorzystywanej technologii oraz celu jej zastosowania.
                  </p>

                  <p>
                    Niektóre pliki cookies mogą mieć charakter sesyjny i być
                    usuwane po zakończeniu sesji przeglądarki, natomiast inne
                    mogą pozostawać zapisane przez określony czas lub do
                    momentu ich ręcznego usunięcia.
                  </p>

                  <p>
                    Informacja o wyborze użytkownika dotyczącym kategorii
                    cookies jest zapisywana w pamięci lokalnej przeglądarki w
                    celu zapamiętania ustawień zgody.
                  </p>

                  <p>
                    W przypadku zmiany wersji mechanizmu zgód Serwis może
                    ponownie poprosić użytkownika o dokonanie wyboru.
                  </p>
                </div>
              </section>

              {/* 9 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  9. Dane osobowe
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Szczegółowe informacje dotyczące przetwarzania danych
                    osobowych, odbiorców danych, podstaw prawnych, transferów
                    danych oraz praw użytkowników znajdują się w{" "}
                    <Link
                      to="/polityka-prywatnosci"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Polityce prywatności
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* 10 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  10. Zmiany w Polityce plików cookies
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Administrator może aktualizować niniejszą Politykę w
                    przypadku zmian w sposobie działania Serwisu,
                    wykorzystywanych narzędziach, konfiguracji mechanizmu zgód
                    lub obowiązujących przepisach.
                  </p>

                  <p>
                    Aktualna wersja Polityki plików cookies jest zawsze dostępna
                    pod adresem{" "}
                    <Link
                      to="/polityka-cookies"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      digitilio.pl/polityka-cookies
                    </Link>
                    .
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
                    W sprawach dotyczących niniejszej Polityki plików cookies
                    można skontaktować się z Administratorem pod adresem:{" "}
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
