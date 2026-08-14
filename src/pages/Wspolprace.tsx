import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Wspolprace() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Współprace i case studies | Digitilio"
        description="Wybrane projekty Digitilio pokazujące, jak strategia, dane i decyzje przekładają się na konkretne działania marketingowe."
        canonical="https://digitilio.pl/wspolprace"
      />

      <Navigation />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#17131f] pb-20 pt-36 text-white sm:pb-24 sm:pt-40 lg:pb-28">
          {/* Subtelny grid */}
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

          {/* Subtelne światło */}
          <div
            className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]"
            aria-hidden="true"
          />

          <div className="container relative z-10 mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 text-sm font-medium text-white/55 sm:text-base"
              >
                Współprace
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
              >
                Wybrane współprace i case studies
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-white/65 sm:text-xl"
              >
                Pokazuję nie tylko efekty działań, ale również decyzje, które do
                nich prowadziły - co analizowaliśmy, co zmienialiśmy i dlaczego.
              </motion.p>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10 text-sm font-medium text-primary"
              >
                Case studies
              </motion.p>

              {/* CASE 01 */}
              <a
                href="/wspolprace/meta-ads-lokalny-biznes"
                className="group block"
              >
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative overflow-hidden border-y border-border py-10 sm:py-12 lg:py-14"
                >
                  <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-16">
                    {/* OPIS */}
                    <div>
                      <p className="mb-4 text-sm font-medium text-muted-foreground">
                        Meta Ads · lokalne usługi specjalistyczne
                      </p>

                      <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                        Od 443 do 1830 obserwujących na Facebooku. Jak
                        rozwijaliśmy Meta Ads lokalnego gabinetu podologicznego
                      </h2>

                      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                        Meta Ads miały nie tylko zwiększać widoczność gabinetu,
                        ale przede wszystkim pomóc ustalić, które działania
                        rzeczywiście warto rozwijać na lokalnym rynku.
                      </p>

                      <div className="mt-8 flex items-center gap-2 font-medium text-primary">
                        <span>Zobacz case study</span>

                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>

                    {/* WYNIKI */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                      <div>
                        <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                          443 → 1830
                        </p>

                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          obserwujących na Facebooku
                        </p>
                      </div>

                      <div>
                        <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                          0,14 zł
                        </p>

                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          za odwiedziny strony
                        </p>
                      </div>

                      <div>
                        <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                          2335
                        </p>

                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          odwiedzin profili i stron w lipcu
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
