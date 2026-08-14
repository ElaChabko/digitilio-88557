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
                  1. Postanowienia ogólne
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Niniejsza Polityka prywatności określa zasady przetwarzania
                    danych osobowych użytkowników korzystających ze strony
                    internetowej <strong>digitilio.pl</strong> (dalej:
                    „Serwis”).
                  </p>

                  <p>
                    Administratorem danych osobowych jest{" "}
                    <strong>Elżbieta Chabko</strong>, prowadząca działalność
                    gospodarczą pod nazwą „Digitilio”, z siedzibą w Polsce,
                    NIP: 6871986208.
                  </p>

                  <p>
                    Administrator dba o bezpieczeństwo danych osobowych i
                    przetwarza je zgodnie z obowiązującymi przepisami prawa, w
                    tym z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
                    2016/679 z dnia 27 kwietnia 2016 r. (RODO), ustawą z dnia
                    10 maja 2018 r. o ochronie danych osobowych oraz ustawą z
                    dnia 18 lipca 2002 r. o świadczeniu usług drogą
                    elektroniczną. Korzystanie z Serwisu oznacza akceptację
                    zasad opisanych w niniejszej Polityce prywatności.
                  </p>
                </div>
              </section>

              {/* 2 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  2. Zakres i cele przetwarzania danych
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Administrator przetwarza dane osobowe użytkowników w związku
                    z korzystaniem z Serwisu, w szczególności w celu
                    umożliwienia kontaktu, realizacji usług, wysyłki
                    newslettera, analizy ruchu na stronie oraz zapewnienia
                    prawidłowego działania Serwisu.
                  </p>

                  <p>Dane osobowe mogą być przetwarzane w następujących celach:</p>

                  <ul className="space-y-3 pl-6">
                    <li className="list-disc">
                      udzielenia odpowiedzi na zapytania przesłane za
                      pośrednictwem formularza kontaktowego lub e-maila – na
                      podstawie prawnie uzasadnionego interesu Administratora
                      polegającego na prowadzeniu korespondencji i utrzymaniu
                      relacji z użytkownikami (art. 6 ust. 1 lit. f RODO),
                    </li>

                    <li className="list-disc">
                      realizacji usług oferowanych przez Administratora – na
                      podstawie przepisów prawa i umowy (art. 6 ust. 1 lit. b
                      RODO),
                    </li>

                    <li className="list-disc">
                      wysyłki newslettera i komunikacji marketingowej – na
                      podstawie zgody użytkownika (art. 6 ust. 1 lit. a RODO),
                    </li>

                    <li className="list-disc">
                      prowadzenia statystyk i analiz ruchu w Serwisie oraz
                      ulepszania funkcjonalności strony – na podstawie prawnie
                      uzasadnionego interesu Administratora (art. 6 ust. 1 lit.
                      f RODO).
                    </li>
                  </ul>

                  <p>
                    Podanie danych jest dobrowolne, lecz może być niezbędne do
                    realizacji określonych działań, takich jak wysyłka
                    wiadomości, otrzymywanie newslettera lub przygotowanie
                    oferty. Dane są przechowywane przez okres niezbędny do
                    realizacji danego celu, a po jego zakończeniu – przez czas
                    wymagany przepisami prawa lub do momentu cofnięcia zgody
                    przez użytkownika.
                  </p>
                </div>
              </section>

              {/* 3 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  3. Odbiorcy danych
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Dane osobowe mogą być przekazywane zaufanym podmiotom
                    współpracującym z Administratorem, takim jak dostawcy usług
                    hostingowych, IT, analitycznych, księgowych czy mailingowych.
                    Podmioty te przetwarzają dane na podstawie umów powierzenia i
                    zgodnie z obowiązującym prawem.
                  </p>

                  <p>
                    Administrator nie przekazuje danych osobowych do państw
                    spoza Europejskiego Obszaru Gospodarczego (EOG), chyba że
                    stosowane są odpowiednie zabezpieczenia, w tym standardowe
                    klauzule umowne zatwierdzone przez Komisję Europejską.
                  </p>
                </div>
              </section>

              {/* 4 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  4. Prawa użytkowników
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>Użytkownik ma prawo do:</p>

                  <ul className="space-y-3 pl-6">
                    <li className="list-disc">
                      dostępu do swoich danych osobowych oraz uzyskania ich
                      kopii,
                    </li>
                    <li className="list-disc">
                      sprostowania lub uzupełnienia danych,
                    </li>
                    <li className="list-disc">
                      żądania usunięcia danych („prawo do bycia zapomnianym”),
                    </li>
                    <li className="list-disc">
                      ograniczenia przetwarzania danych,
                    </li>
                    <li className="list-disc">
                      przenoszenia danych do innego administratora,
                    </li>
                    <li className="list-disc">
                      wniesienia sprzeciwu wobec przetwarzania danych,
                    </li>
                    <li className="list-disc">
                      cofnięcia zgody na przetwarzanie danych w dowolnym
                      momencie, jeśli przetwarzanie odbywa się na podstawie
                      zgody,
                    </li>
                    <li className="list-disc">
                      wniesienia skargi do Prezesa Urzędu Ochrony Danych
                      Osobowych, jeśli uzna, że przetwarzanie narusza przepisy
                      prawa.
                    </li>
                  </ul>

                  <p>
                    W celu realizacji swoich praw użytkownik może skontaktować
                    się z Administratorem, wysyłając wiadomość na adres:{" "}
                    <a
                      href="mailto:elachabko@digitilio.pl"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      elachabko@digitilio.pl
                    </a>
                  </p>
                </div>
              </section>

              {/* 5 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  5. Pliki cookies i narzędzia analityczne
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Serwis wykorzystuje pliki cookies (tzw. „ciasteczka”), które
                    są niewielkimi plikami tekstowymi zapisywanymi w urządzeniu
                    użytkownika. Służą one do prawidłowego działania strony,
                    analizowania ruchu oraz dostosowywania treści do preferencji
                    użytkownika.
                  </p>

                  <p>
                    Administrator korzysta z narzędzi analitycznych, takich jak
                    Google Analytics, w celu zbierania anonimowych informacji o
                    sposobie korzystania z Serwisu. Dane te mogą obejmować adres
                    IP, typ przeglądarki, czas wizyty oraz odwiedzane podstrony.
                    Użycie tych narzędzi odbywa się na podstawie prawnie
                    uzasadnionego interesu Administratora, a w przypadku
                    stosowania cookies analitycznych lub marketingowych – po
                    wyrażeniu zgody przez użytkownika.
                  </p>

                  <p>
                    Użytkownik może w każdej chwili zmienić ustawienia dotyczące
                    cookies w swojej przeglądarce internetowej, w tym całkowicie
                    je zablokować lub usunąć. Ograniczenie stosowania plików
                    cookies może jednak wpłynąć na niektóre funkcjonalności
                    Serwisu.
                  </p>
                </div>
              </section>

              {/* 6 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  6. Bezpieczeństwo danych
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Administrator stosuje odpowiednie środki techniczne i
                    organizacyjne mające na celu ochronę przetwarzanych danych
                    osobowych przed nieuprawnionym dostępem, utratą lub
                    zniszczeniem.
                  </p>

                  <p>W szczególności stosowane są:</p>

                  <ul className="space-y-3 pl-6">
                    <li className="list-disc">
                      szyfrowanie połączenia za pomocą protokołu SSL (https),
                    </li>
                    <li className="list-disc">regularne kopie zapasowe,</li>
                    <li className="list-disc">
                      ograniczony dostęp do danych tylko dla upoważnionych osób,
                    </li>
                    <li className="list-disc">
                      współpraca wyłącznie z zaufanymi dostawcami usług.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 7 */}
              <section className="border-b border-border py-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  7. Zmiany w polityce prywatności
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Polityka prywatności może być aktualizowana w celu
                    dostosowania jej do zmian w przepisach prawa, technologii
                    lub funkcjonowania Serwisu.
                  </p>

                  <p>
                    O wszelkich istotnych zmianach użytkownicy zostaną
                    poinformowani poprzez komunikat opublikowany na stronie
                    digitilio.pl.
                  </p>

                  <p>
                    Aktualna wersja polityki jest zawsze dostępna pod adresem
                    digitilio.pl/polityka-prywatnosci.
                  </p>
                </div>
              </section>

              {/* 8 */}
              <section className="pt-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  8. Kontakt
                </h2>

                <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/[0.05] p-6 sm:p-8">
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    W sprawach związanych z ochroną danych osobowych można
                    skontaktować się z Administratorem:{" "}
                    <a
                      href="mailto:elachabko@digitilio.pl"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      elachabko@digitilio.pl
                    </a>
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
