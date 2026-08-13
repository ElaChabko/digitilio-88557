import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Diagnoza marketingu",
    description:
      "Gdy działań jest dużo, ale trudno ocenić, które z nich rzeczywiście warto rozwijać. Analizuję komunikację, kanały, dane i dotychczasowe działania, a następnie porządkuję problemy i priorytety.",
  },
  {
    number: "02",
    title: "Strategia marketingowa i komunikacji",
    description:
      "Gdy potrzebujesz jednego kierunku zamiast kolejnych niezależnych pomysłów. Porządkujemy pozycjonowanie, komunikację, rolę kanałów, cele i sposób wdrożenia.",
  },
  {
    number: "03",
    title: "Wsparcie we wdrożeniu",
    description:
      "Gdy kierunek jest już ustalony, ale potrzebujesz pomocy w jego realizacji. Zakres może obejmować social media, content, kampanie, analitykę lub wykorzystanie AI, jeśli wynikają ze strategii.",
  },
  {
    number: "04",
    title: "Stałe wsparcie marketingowe",
    description:
      "Gdy potrzebujesz regularnego spojrzenia na wyniki, priorytety i bieżące decyzje bez zatrudniania senior marketing managera na pełny etat.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-secondary/5 py-16 sm:py-20 lg:py-24"
    >
      {/* Delikatny akcent tła */}
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div
        ref={ref}
        className="container relative z-10 mx-auto px-4 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">

          {/* Nagłówek sekcji */}
          <motion.div
            className="mb-10 max-w-3xl sm:mb-12 lg:mb-14"
            initial={{ opacity: 0, y: 24 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 24 }
            }
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-4 text-sm font-medium tracking-wide text-primary sm:text-base">
              Jak mogę pomóc?
            </p>

            <h2 className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Zakres współpracy wynika z problemu, który trzeba rozwiązać.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
              Nie zaczynam od wyboru kanału ani listy działań. Najpierw
              ustalamy, czego naprawdę potrzebuje marketing firmy, a dopiero
              później dobieramy właściwy zakres wsparcia.
            </p>
          </motion.div>

          {/* Moduły */}
          <motion.div
            className="grid grid-cols-1 border-t border-border/70 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.article
                key={service.number}
                variants={itemVariants}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  "group relative border-b border-border/70 py-8 sm:py-10",
                  index % 2 === 0
                    ? "md:border-r md:pr-10 lg:pr-14"
                    : "md:pl-10 lg:pl-14",
                ].join(" ")}
              >
                <div className="flex gap-5 sm:gap-6">
                  <span className="shrink-0 pt-1 text-sm font-medium text-primary sm:text-base">
                    {service.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold leading-tight tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Domknięcie */}
          <motion.div
            className="mt-10 border-l-2 border-primary/40 pl-5 sm:mt-12 sm:pl-6"
            initial={{ opacity: 0, y: 16 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 16 }
            }
            transition={{
              duration: 0.5,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Nie wiesz, który zakres jest właściwy? Zaczynamy od sytuacji i
              problemu, a nie od wyboru usługi.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
