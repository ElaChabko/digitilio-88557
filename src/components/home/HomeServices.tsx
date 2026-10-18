import { motion } from "framer-motion";
import { ArrowUpRight, Compass, LifeBuoy, Rocket, ScanSearch } from "lucide-react";
import { EASE, Eyebrow, FadeIn, RevealText } from "./primitives";

const services = [
  {
    icon: ScanSearch,
    title: "Diagnoza marketingu",
    description:
      "Gdy działań jest dużo, ale trudno ocenić, które naprawdę warto rozwijać. Analizuję komunikację, kanały i dane, a następnie porządkuję problemy oraz priorytety.",
  },
  {
    icon: Compass,
    title: "Strategia marketingowa i komunikacji",
    description:
      "Gdy potrzebujesz jednego kierunku zamiast kolejnych niezależnych działań. Porządkujemy pozycjonowanie, komunikację, rolę kanałów, cele i sposób wdrożenia.",
  },
  {
    icon: Rocket,
    title: "Wsparcie we wdrożeniu",
    description:
      "Gdy kierunek jest już ustalony, ale potrzebujesz pomocy w realizacji. Zakres może obejmować social media, content, kampanie, analitykę lub wykorzystanie AI.",
  },
  {
    icon: LifeBuoy,
    title: "Stałe wsparcie marketingowe",
    description:
      "Gdy potrzebujesz regularnego spojrzenia na wyniki, priorytety i bieżące decyzje bez zatrudniania senior marketing managera na pełny etat.",
  },
];

export const HomeServices = () => (
  <section id="services" className="bg-background pb-24 sm:pb-28 lg:pb-36">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="mx-auto max-w-7xl border-t border-foreground/15 pt-20 sm:pt-24 lg:pt-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Eyebrow>Jak mogę pomóc</Eyebrow>
            <RevealText
              text="Od diagnozy problemu po wsparcie we wdrożeniu."
              className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl"
            />
          </div>
          <FadeIn>
            <p className="max-w-sm text-lg leading-relaxed text-muted-foreground">
              Zakres współpracy dobieramy do sytuacji firmy, a nie do gotowego
              pakietu usług.
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: (index % 2) * 0.12, ease: EASE }}
                className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-paper p-8 transition-colors duration-500 hover:border-primary hover:bg-primary sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-semibold tabular-nums text-foreground/35 transition-colors duration-500 group-hover:text-white/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-auto pt-12 text-2xl font-bold leading-tight tracking-tight text-foreground transition-colors duration-500 group-hover:text-white sm:text-[1.75rem]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/80">
                  {service.description}
                </p>

                <ArrowUpRight
                  className="absolute bottom-8 right-8 h-6 w-6 translate-y-2 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-10 sm:right-10"
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}
        </div>

        <FadeIn className="mt-10">
          <p className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <span className="mt-2.5 h-2 w-2 shrink-0 bg-primary" aria-hidden="true" />
            Nie wiesz, który zakres będzie właściwy? Zaczynamy od sytuacji i
            problemu, a nie od wyboru usługi.
          </p>
        </FadeIn>
      </div>
    </div>
  </section>
);
