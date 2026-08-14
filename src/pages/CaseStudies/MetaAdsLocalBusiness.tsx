import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ContactFormDialog } from "@/components/ContactFormDialog";

export default function MetaAdsLocalBusiness() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Meta Ads dla lokalnego biznesu | Case study Digitilio"
        description="Jak w okresie współpracy profil Facebooka urósł z 443 do 1830 obserwujących, a dane z kampanii Meta Ads wpływały na kolejne decyzje budżetowe."
        canonical="https://digitilio.pl/wspolprace/meta-ads-lokalny-biznes"
      />

      <Navigation />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#17131f] pb-20 pt-36 text-white sm:pb-24 sm:pt-40 lg:pb-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            aria-hidden="true"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          <motion.div
            className="pointer-events-none absolute -left-48 top-0 h-[560px] w-[560px] rounded-full bg-primary/25 blur-[150px]"
            animate={{
              x: [0, 35, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          />

          <div className="container relative z-10 mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to="/wspolprace"
                  className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Współprace / Meta Ads
                </Link>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 max-w-5xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
              >
                Od 443 do 1830 obserwujących na Facebooku. Jak rozwijaliśmy Meta
                Ads lokalnego gabinetu podologicznego
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.15,
                }}
                className="mt-8 max-w-4xl text-lg font-light leading-relaxed text-white/70 sm:text-xl"
              >
                Meta Ads miały nie tylko zwiększać widoczność gabinetu, ale przede
                wszystkim pomóc ustalić, które działania rzeczywiście warto
                rozwijać na lokalnym rynku. W ciągu kilku miesięcy testowaliśmy
                różne etapy lejka, porównywaliśmy kanały kontaktu, rozwijaliśmy
                społeczność i zmienialiśmy alokację budżetu na podstawie wyników.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.25,
                }}
                className="mt-12 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">
                    Branża
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    lokalne usługi specjalistyczne / podologia
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">
                    Zakres
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    strategia Meta Ads, kampanie Facebook i Instagram,
                    optymalizacja, analiza wyników, rekomendacje komunikacyjne
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">
                    Okres
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    grudzień 2025 - lipiec 2026
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NAJWAŻNIEJSZE WYNIKI */}
        <section className="border-b border-border bg-background py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10 text-sm font-medium text-primary"
              >
                Najważniejsze wyniki
              </motion.p>

              <div className="grid border-y border-border md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    value: "443 → 1830",
                    label: "obserwujących na Facebooku",
                    description:
                      "Ponad czterokrotny wzrost społeczności w okresie współpracy.",
                  },
                  {
                    value: "0,14 zł",
                    label: "za odwiedziny strony na Facebooku",
                    description:
                      "Koszt osiągnięty w lipcowej kampanii przy lokalnym targetowaniu.",
                  },
                  {
                    value: "2335",
                    label: "odwiedzin profili z reklam w jednym miesiącu",
                    description:
                      "Przy budżecie reklamowym wynoszącym 499,94 zł w lipcu.",
                  },
                  {
                    value: "1 mln",
                    label: "wyświetleń treści w lipcu",
                    description:
                      "Wynik, który pokazał potencjał contentu, ale również stał się ważnym sygnałem do dalszej optymalizacji jakości odbiorców.",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.value}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    className={[
                      "py-8 md:p-8 lg:min-h-[270px] lg:p-8",
                      index !== 3 ? "lg:border-r lg:border-border" : "",
                    ].join(" ")}
                  >
                    <p className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                      {stat.value}
                    </p>

                    <p className="mt-4 font-medium leading-snug text-foreground">
                      {stat.label}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <p className="mt-10 max-w-4xl text-lg leading-relaxed text-muted-foreground">
                Na koniec pierwszego miesiąca działań profil na Facebooku miał
                443 obserwujących, natomiast w lipcu społeczność liczyła już
                1830 osób. Instagram w tym samym okresie rozwinął się z 99 do
                1207 obserwujących.
              </p>
            </div>
          </div>
        </section>

        {/* PUNKT WYJŚCIA */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                className="lg:sticky lg:top-32 lg:self-start"
              >
                <p className="mb-4 text-sm font-medium text-primary">
                  Punkt wyjścia
                </p>

                <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  Lokalny biznes nie potrzebuje zasięgu za wszelką cenę
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-6 text-lg leading-relaxed text-muted-foreground"
              >
                <p>
                  Gabinet działa na określonym rynku lokalnym, dlatego sama
                  liczba wyświetleń nie mogła być głównym kryterium oceny
                  kampanii. Reklama miała docierać do potencjalnych Klientów,
                  budować rozpoznawalność specjalistki i stopniowo prowadzić
                  odbiorców w stronę kontaktu lub rezerwacji wizyty.
                </p>

                <p>
                  Działania rozpoczęliśmy w połowie grudnia od budżetu 500 zł.
                  Zamiast od razu kierować całość środków na zapisy, pierwszym
                  celem było zbudowanie widoczności oraz grupy osób, które miały
                  już kontakt z marką i mogły później zostać wykorzystane w
                  remarketingu.
                </p>

                <p>
                  W ciągu niepełnego miesiąca kampanie dotarły do 57 383 osób,
                  wygenerowały 752 kliknięcia linku i 537 interakcji. Kampanie
                  sprzedażowe zostały uruchomione dopiero na końcowym etapie i
                  skierowane do osób, które wcześniej weszły w kontakt z
                  treściami lub profilami gabinetu.
                </p>

                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                  <div>
                    <p className="text-2xl font-bold text-foreground sm:text-3xl">
                      57 383
                    </p>
                    <p className="mt-2 text-sm">osób</p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-foreground sm:text-3xl">
                      752
                    </p>
                    <p className="mt-2 text-sm">kliknięcia linku</p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-foreground sm:text-3xl">
                      537
                    </p>
                    <p className="mt-2 text-sm">interakcji</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* DECYZJA 1 */}
        <section className="border-y border-border bg-secondary/20 py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-7xl font-bold tracking-tight text-primary/15 sm:text-8xl">
                    01
                  </p>

                  <h2 className="mt-5 max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                    Decyzja 1: najpierw budujemy zainteresowanie, później prosimy
                    o zapis
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6 text-lg leading-relaxed text-muted-foreground"
                >
                  <p>
                    W kolejnych miesiącach struktura kampanii została rozwinięta
                    o osobne działania skierowane do nowych odbiorców, osób
                    zaangażowanych oraz odbiorców o najwyższej intencji.
                  </p>

                  <p>
                    Obok kampanii rozwijających profile pojawiły się reklamy
                    kierujące do Booksy oraz do bezpośredniego kontaktu przez
                    Messenger i WhatsApp.
                  </p>

                  <p>
                    W lutym reklamy wygenerowały{" "}
                    <strong className="font-semibold text-foreground">
                      1166 kliknięć prowadzących do kontaktu lub systemu
                      rezerwacji
                    </strong>
                    . Koszt przejścia do Booksy wynosił około 0,72 zł, natomiast
                    koszt kliknięcia prowadzącego do Messengera lub WhatsAppa
                    utrzymywał się na poziomie około 0,39-0,44 zł.
                  </p>

                  <p>
                    Z punktu widzenia panelu reklamowego były to bardzo efektywne
                    wyniki.
                  </p>

                  <p className="pt-3 text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
                    Nie wystarczyło jednak spojrzeć na CPC.
                  </p>

                  <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                    {[
                      "Widoczność",
                      "Zaangażowanie",
                      "Remarketing",
                      "Booksy / Messenger / WhatsApp",
                    ].map((step, index, array) => (
                      <div
                        key={step}
                        className="flex items-center gap-3 sm:flex-1"
                      >
                        <div className="flex-1 rounded-full border border-border bg-background px-4 py-3 text-center text-sm font-medium text-foreground">
                          {step}
                        </div>

                        {index !== array.length - 1 && (
                          <ArrowRight className="hidden h-4 w-4 flex-shrink-0 text-muted-foreground sm:block" />
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* DECYZJA 2 */}
        <section className="relative overflow-hidden bg-[#17131f] py-20 text-white sm:py-24 lg:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          <div className="container relative z-10 mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-7xl font-bold text-white/10 sm:text-8xl"
              >
                02
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
              >
                Decyzja 2: nie skalujemy wyniku tylko dlatego, że jest tani
              </motion.h2>

              <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6 text-lg leading-relaxed text-white/65"
                >
                  <p>
                    Analiza kolejnego etapu ścieżki pokazała dysproporcję między
                    liczbą wejść w kontakt z marką a faktycznymi rezerwacjami.
                    Tani ruch nie przekładał się proporcjonalnie na wypełnienie
                    grafiku.
                  </p>

                  <p>
                    Oznaczało to, że zwiększenie budżetu mogłoby wygenerować
                    jeszcze więcej tanich kliknięć, ale nie rozwiązałoby
                    właściwego problemu.
                  </p>

                  <p>
                    Zamiast automatycznie skalować kampanie, zaczęliśmy pracować
                    nad skróceniem ścieżki od reklamy do rozmowy. Zmienione
                    zostały między innymi komunikaty oraz automatyczne odpowiedzi
                    pojawiające się po rozpoczęciu kontaktu. Jednocześnie większą
                    rolę otrzymał remarketing do osób, które znały już gabinet.
                  </p>

                  <p>
                    W kolejnych planach rozdzielaliśmy również zadania
                    poszczególnych kampanii, zamiast oczekiwać, że jedna reklama
                    jednocześnie zbuduje zasięg, społeczność i wygeneruje zapis.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="border-l border-white/10 pl-0 lg:pl-10"
                >
                  <p className="text-sm text-white/45">
                    Wyniki z etapu kontaktu
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <p className="text-4xl font-bold">1166</p>
                      <p className="mt-2 text-sm text-white/55">
                        kliknięć prowadzących do kontaktu lub systemu rezerwacji
                      </p>
                    </div>

                    <div>
                      <p className="text-4xl font-bold">0,72 zł</p>
                      <p className="mt-2 text-sm text-white/55">
                        koszt przejścia do Booksy
                      </p>
                    </div>

                    <div>
                      <p className="text-4xl font-bold">0,39-0,44 zł</p>
                      <p className="mt-2 text-sm text-white/55">
                        Messenger / WhatsApp
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* DECYZJA 3 */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-7xl font-bold text-primary/15 sm:text-8xl"
              >
                03
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              >
                Decyzja 3: zmieniamy cel, kiedy dane pokazują, że warto
              </motion.h2>

              <div className="mt-10 max-w-4xl space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  W dalszej części współpracy większy nacisk został przeniesiony
                  z ciągłego generowania kliknięć na rozwój własnej społeczności
                  gabinetu.
                </p>

                <p>
                  Zmiana nie oznaczała rezygnacji z performance'u. Przeciwnie -
                  pozwoliła precyzyjniej oceniać, ile kosztuje sprowadzenie
                  właściwego odbiorcy na profil i który kanał robi to
                  efektywniej.
                </p>

                <p>
                  W czerwcu, przy budżecie wynoszącym około 500 zł, reklamy
                  wygenerowały{" "}
                  <strong className="font-semibold text-foreground">
                    1793 odwiedziny profili
                  </strong>
                  : 764 na Facebooku i 1029 na Instagramie. Koszt wynosił
                  odpowiednio około 0,22 zł i 0,32 zł za odwiedziny.
                </p>

                <p>Miesiąc później przeprowadziliśmy kolejne porównanie.</p>
              </div>

              {/* FACEBOOK VS INSTAGRAM */}
              <div className="mt-12 grid overflow-hidden rounded-3xl border border-border md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 sm:p-10 md:border-r md:border-border"
                >
                  <p className="text-sm font-medium text-primary">Facebook</p>

                  <p className="mt-6 text-5xl font-bold tracking-tight">
                    1826
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    odwiedzin strony
                  </p>

                  <p className="mt-8 text-3xl font-bold">0,14 zł</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    za odwiedziny
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="border-t border-border p-8 sm:p-10 md:border-t-0"
                >
                  <p className="text-sm font-medium text-primary">Instagram</p>

                  <p className="mt-6 text-5xl font-bold tracking-tight">509</p>
                  <p className="mt-2 text-muted-foreground">
                    odwiedzin profilu
                  </p>

                  <p className="mt-8 text-3xl font-bold">0,49 zł</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    za odwiedziny
                  </p>
                </motion.div>
              </div>

              <div className="mt-10 max-w-4xl space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Przy niemal identycznym wydatku na Facebook i Instagram:
                </p>

                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    Facebook wygenerował{" "}
                    <strong className="font-semibold text-foreground">
                      1826 odwiedzin strony po 0,14 zł
                    </strong>
                    ,
                  </li>
                  <li className="list-disc">
                    Instagram wygenerował{" "}
                    <strong className="font-semibold text-foreground">
                      509 odwiedzin profilu po 0,49 zł
                    </strong>
                    ,
                  </li>
                  <li className="list-disc">
                    łącznie kampanie dostarczyły{" "}
                    <strong className="font-semibold text-foreground">
                      2335 odwiedzin profili i stron przy wydatku 499,94 zł
                    </strong>
                    .
                  </li>
                </ul>

                <p>
                  Facebook odpowiadał więc za około 78% wyników reklamowych, mimo
                  zbliżonego poziomu wydatków na obu platformach.
                </p>

                <p className="pt-4 text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
                  Nie było powodu, żeby w kolejnym miesiącu nadal dzielić budżet
                  po równo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REZULTAT */}
        <section className="border-y border-border bg-secondary/20 py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <p className="mb-4 text-sm font-medium text-primary">
                Rezultat
              </p>

              <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Rezultat: większa społeczność i coraz lepsza wiedza o tym, gdzie
                inwestować budżet
              </h2>

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl border border-border bg-background p-8 sm:p-10">
                  <p className="text-sm text-muted-foreground">Facebook</p>

                  <div className="mt-6 flex items-center gap-4">
                    <span className="text-4xl font-bold sm:text-5xl">443</span>
                    <ArrowRight className="h-6 w-6 text-primary" />
                    <span className="text-4xl font-bold sm:text-5xl">1830</span>
                  </div>

                  <p className="mt-5 text-sm text-muted-foreground">
                    grudzień 2025 → lipiec 2026
                  </p>
                </div>

                <div className="rounded-3xl border border-border bg-background p-8 sm:p-10">
                  <p className="text-sm text-muted-foreground">Instagram</p>

                  <div className="mt-6 flex items-center gap-4">
                    <span className="text-4xl font-bold sm:text-5xl">99</span>
                    <ArrowRight className="h-6 w-6 text-primary" />
                    <span className="text-4xl font-bold sm:text-5xl">1207</span>
                  </div>

                  <p className="mt-5 text-sm text-muted-foreground">
                    grudzień 2025 → lipiec 2026
                  </p>
                </div>
              </div>

              <div className="mt-12 max-w-4xl space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  W grudniu profil na Facebooku liczył 443 obserwujących. Pod
                  koniec lipca było ich 1830, co oznacza ponad czterokrotne
                  zwiększenie bazy w okresie współpracy. Co istotne dla
                  lokalnego biznesu, Facebook zachował również właściwą
                  strukturę odbiorców. W lipcu 97,9% społeczności pochodziło z
                  Polski, a Zgorzelec był najczęściej reprezentowanym miastem i
                  odpowiadał za 11,6% odbiorców.
                </p>

                <p>
                  Instagram rozwijał się jeszcze szybciej liczbowo. Baza wzrosła
                  z 99 obserwujących w grudniu do 1207 w lipcu. Jednocześnie
                  właśnie tutaj dane pokazały, dlaczego same tempo wzrostu i
                  zasięg nie wystarczają do oceny wyniku.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 1 MLN */}
        <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24 lg:py-28">
          <div className="container relative z-10 mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <p className="text-sm font-medium text-white/55">
                1 mln wyświetleń. Dobry wynik, którego nie chcieliśmy
                bezrefleksyjnie skalować
              </p>

              <div className="mt-8 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-7xl font-bold tracking-tight sm:text-8xl md:text-9xl">
                    1 mln
                  </p>

                  <p className="mt-4 text-lg text-white/65">
                    wyświetleń treści na Instagramie w lipcu
                  </p>

                  <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10">
                    <div>
                      <p className="text-3xl font-bold">595 926</p>
                      <p className="mt-2 text-sm text-white/55">zasięg</p>
                    </div>

                    <div>
                      <p className="text-3xl font-bold">6718</p>
                      <p className="mt-2 text-sm text-white/55">interakcji</p>
                    </div>

                    <div>
                      <p className="text-3xl font-bold">4558</p>
                      <p className="mt-2 text-sm text-white/55">
                        wizyt profilu
                      </p>
                    </div>

                    <div>
                      <p className="text-3xl font-bold">597</p>
                      <p className="mt-2 text-sm text-white/55">
                        rozpoczętych obserwowań
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6 text-lg leading-relaxed text-white/70"
                >
                  <p>
                    W lipcu treści powiązane z profilem na Instagramie osiągnęły{" "}
                    <strong className="font-semibold text-white">
                      1 mln wyświetleń, zasięg 595 926 osób oraz 6718 interakcji
                    </strong>
                    . Liczba wizyt profilu wzrosła do 4558, a liczba rozpoczętych
                    obserwowań do 597.
                  </p>

                  <p>
                    Na pierwszy rzut oka właśnie ten wynik mógłby zostać uznany
                    za największy sukces projektu.
                  </p>

                  <p>
                    Dla lokalnego gabinetu potrzebna była jednak jeszcze jedna
                    warstwa analizy.
                  </p>

                  <p>
                    Znaczna część miesięcznego wyniku pochodziła z jednego
                    mocnego skoku na początku lipca. Jednocześnie tylko 44,3%
                    odbiorców Instagrama pochodziło z Polski, a Zgorzelec
                    odpowiadał za 2,5% społeczności. W tym samym czasie liczba
                    kliknięć linku spadła o 46,1%.
                  </p>

                  <p className="border-t border-white/15 pt-8 text-2xl font-semibold leading-snug text-white sm:text-3xl">
                    Milion wyświetleń był więc dowodem potencjału treści, ale nie
                    argumentem za dalszym skalowaniem zasięgu bez zmian.
                  </p>

                  <p>
                    Dla biznesu lokalnego wartościowszym kierunkiem stało się
                    zwiększanie udziału odbiorców z regionu oraz ocena jakości
                    ruchu obok samej liczby wyświetleń.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CO ZROBILIŚMY DALEJ */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Co zrobiliśmy dalej?
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Wyniki lipca wskazały dwa różne zadania dla obu kanałów.
              </p>

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-border p-8 sm:p-10"
                >
                  <p className="text-sm font-medium text-primary">Facebook</p>

                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    Na Facebooku warto było wykorzystać bardzo niski koszt
                    dotarcia do strony i mocną lokalność odbiorców, jednocześnie
                    poprawiając przejście od wizyty do obserwowania profilu.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 }}
                  className="rounded-3xl border border-border p-8 sm:p-10"
                >
                  <p className="text-sm font-medium text-primary">Instagram</p>

                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    Na Instagramie priorytetem stała się jakość i lokalność
                    rosnącej społeczności, a nie dalsze zwiększanie zasięgu za
                    wszelką cenę.
                  </p>
                </motion.div>
              </div>

              <p className="mt-10 max-w-4xl text-lg leading-relaxed text-muted-foreground">
                Kolejne decyzje budżetowe zostały więc oparte nie na tym, która
                platforma wygenerowała większą liczbę wyświetleń, ale na
                połączeniu kosztu wyniku, struktury odbiorców i roli kanału w
                całej ścieżce.
              </p>
            </div>
          </div>
        </section>

        {/* RZECZYWISTY WYNIK */}
        <section className="border-y border-border bg-secondary/20 py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <p className="mb-4 text-sm font-medium text-primary">
                Podsumowanie
              </p>

              <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Co było rzeczywistym wynikiem projektu?
              </h2>

              <p className="mt-8 max-w-4xl text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
                Nie jedna viralowa publikacja i nie jeden rekordowy miesiąc.
              </p>

              <p className="mt-8 max-w-4xl text-lg leading-relaxed text-muted-foreground">
                Wartość projektu powstała dzięki połączeniu performance'u z
                ciągłą oceną danych:
              </p>

              <div className="mt-12 grid gap-3 md:grid-cols-4">
                {[
                  "budowanie widoczności",
                  "rozwój grup remarketingowych",
                  "test kontaktu i zapisów",
                  "identyfikacja luki konwersyjnej",
                  "zmiana celu",
                  "rozwój społeczności",
                  "porównanie efektywności kanałów",
                  "kolejna korekta budżetu",
                ].map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="relative rounded-2xl border border-border bg-background p-5"
                  >
                    <p className="text-xs font-medium text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 max-w-4xl">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  W efekcie w okresie współpracy:
                </p>

                <ul className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>
                      społeczność Facebooka wzrosła z 443 do 1830 obserwujących,
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>
                      społeczność Instagrama wzrosła z 99 do 1207 obserwujących,
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>
                      kampanie generowały ruch na poziomie nawet 0,14 zł za
                      odwiedziny strony,
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>
                      w lipcu 500 zł budżetu przyniosło 2335 płatnych wizyt
                      profili i stron,
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>
                      treści osiągnęły skalę 1 mln wyświetleń w miesiącu,
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>
                      a decyzje dotyczące dalszych działań wynikały nie tylko z
                      kosztów i zasięgów, ale również z jakości pozyskiwanych
                      odbiorców.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TRANSPARENTNOŚĆ */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-5xl rounded-3xl border border-primary/15 bg-primary/[0.05] p-8 sm:p-10 md:p-12"
            >
              <p className="text-sm font-medium text-primary">
                Transparentność danych
              </p>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Nie przypisujemy tym działaniom konkretnej liczby nowych
                Klientów ani wzrostu przychodów, ponieważ dostępne dane nie
                pozwalają rzetelnie połączyć wszystkich rezerwacji z konkretnymi
                kampaniami.
              </p>

              <p className="mt-6 text-lg font-medium leading-relaxed text-foreground">
                Możemy natomiast dokładnie pokazać, co wygenerowały reklamy, jak
                rozwijały się profile oraz w jaki sposób dane wpływały na kolejne
                decyzje marketingowe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FINAŁ */}
        <section className="relative overflow-hidden bg-[#17131f] py-20 text-white sm:py-24 lg:py-28">
          <motion.div
            className="pointer-events-none absolute -bottom-52 right-0 h-[520px] w-[520px] rounded-full bg-primary/25 blur-[150px]"
            animate={{
              x: [0, -25, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          />

          <div className="container relative z-10 mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
              >
                I właśnie na tym powinien opierać się dobry performance: nie
                tylko na dowożeniu wyniku w panelu, ale również na wiedzy,{" "}
                <span className="text-white/55">
                  który wynik warto dalej rozwijać.
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-12 border-t border-white/10 pt-10"
              >
                <p className="text-lg text-white/65">
                  Masz podobny problem w swoim marketingu?
                </p>

                <Button
                  type="button"
                  size="lg"
                  onClick={() => setIsContactOpen(true)}
                  className="group mt-6 h-auto rounded-full bg-white px-7 py-5 text-base text-[#17131f] transition-all duration-300 hover:bg-white/90 sm:px-8 sm:text-lg"
                >
                  Porozmawiajmy o Twojej sytuacji

                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ContactFormDialog
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
