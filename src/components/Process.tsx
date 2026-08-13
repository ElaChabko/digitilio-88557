import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Diagnozuję sytuację",
    description:
      "Analizuję cele, dotychczasowe działania, komunikację, kanały, dane i dostępne zasoby. Szukam nie tylko tego, co nie działa, ale również miejsc, w których firma niepotrzebnie traci czas lub uwagę.",
  },
  {
    number: "02",
    title: "Ustalamy priorytety",
    description:
      "Nie każda dobra możliwość jest właściwym kierunkiem na teraz. Określamy, czym warto zająć się w pierwszej kolejności, co może poczekać i z jakich działań najlepiej zrezygnować.",
  },
  {
    number: "03",
    title: "Przekładamy decyzje na plan",
    description:
      "Rekomendacje zamieniamy na konkretne działania, odpowiedzialności, kanały i sposób mierzenia efektów. Plan musi uwzględniać realny budżet, czas i możliwości zespołu.",
  },
  {
    number: "04",
    title: "Wdrażamy i wyciągamy wnioski",
    description:
      "Jeśli zakres współpracy tego wymaga, wspieram również realizację. Później wracamy do danych, oceniamy efekty i korygujemy kierunek zamiast trzymać się założeń, które przestały działać.",
  },
];

export const Process = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      {/* Delikatne tło */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[440px] w-[440px] rounded-full bg-primary/[0.06] blur-[120px]"
        aria-hidden="true"
      />

      <div
        ref={ref}
        className="container relative z-10 mx-auto px-4 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          {/* Intro */}
          <motion.div
            className="mb-14 grid grid-cols-1 gap-8 lg:mb-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
            initial={{ opacity: 0, y: 24 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 24 }
            }
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div>
              <p className="mb-4 text-sm font-medium tracking-wide text-primary sm:text-base">
                Jak pracuję?
              </p>

              <h2 className="max-w-xl text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Najpierw trzeba dobrze zrozumieć problem.
              </h2>
            </div>

            <div className="lg:pt-8">
              <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
                Nie zaczynam od kanału, formatu ani listy działań. Najpierw chcę
                zrozumieć, co dzieje się w marketingu firmy, gdzie rzeczywiście
                leży problem i jakie decyzje mają dziś największe znaczenie.
              </p>
            </div>
          </motion.div>

          {/* Process line */}
          <div className="relative">
            {/* Linia na desktopie */}
            <div
              className="absolute left-0 right-0 top-[22px] hidden h-px bg-border lg:block"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 gap-0 lg:grid-cols-4">
              {steps.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 24 }
                  }
                  transition={{
                    duration: 0.55,
                    delay: 0.12 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={[
                    "group relative border-b border-border py-8 lg:border-b-0 lg:py-0",
                    index !== steps.length - 1
                      ? "lg:pr-8 xl:pr-10"
                      : "",
                    index !== 0
                      ? "lg:pl-8 xl:pl-10"
                      : "",
                  ].join(" ")}
                >
                  {/* Punkt procesu */}
                  <div className="relative z-10 mb-7 flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background text-sm font-semibold text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      {step.number}
                    </div>

                    {/* Linia mobilna */}
                    <div
                      className="h-px flex-1 bg-border lg:hidden"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="max-w-xs text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {step.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Pointa */}
          <motion.div
            className="mt-14 max-w-4xl border-t border-border pt-8 lg:mt-20"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.55,
            }}
          >
            <p className="text-lg font-medium leading-relaxed text-foreground sm:text-xl">
              Strategia nie kończy się na prezentacji. Powinna ułatwiać
              podejmowanie kolejnych decyzji i dawać się wykorzystać w
              codziennej pracy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
