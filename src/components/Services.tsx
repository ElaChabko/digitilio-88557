import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Diagnoza marketingu",
    description:
      "Gdy działań jest dużo, ale trudno ocenić, które naprawdę warto rozwijać. Analizuję komunikację, kanały i dane, a następnie porządkuję problemy oraz priorytety.",
  },
  {
    number: "02",
    title: "Strategia marketingowa i komunikacji",
    description:
      "Gdy potrzebujesz jednego kierunku zamiast kolejnych niezależnych działań. Porządkujemy pozycjonowanie, komunikację, rolę kanałów, cele i sposób wdrożenia.",
  },
  {
    number: "03",
    title: "Wsparcie we wdrożeniu",
    description:
      "Gdy kierunek jest już ustalony, ale potrzebujesz pomocy w realizacji. Zakres może obejmować social media, content, kampanie, analitykę lub wykorzystanie AI.",
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
      delayChildren: 0.15,
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
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
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
      className="relative overflow-hidden bg-primary py-20 sm:py-24 lg:py-28"
    >
      {/* Delikatne światło w tle */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-48 -right-40 h-[520px] w-[520px] rounded-full bg-background/10 blur-[120px]"
        aria-hidden="true"
      />

      {/* Subtelny grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div
        ref={ref}
        className="container relative z-10 mx-auto px-4 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          {/* Nagłówek */}
          <motion.div
            className="mb-12 max-w-3xl sm:mb-14 lg:mb-16"
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
            <p className="mb-5 text-sm font-medium tracking-wide text-primary-foreground/60 sm:text-base">
              Jak mogę pomóc?
            </p>

            <h2 className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
              Od diagnozy problemu po wsparcie we wdrożeniu.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-primary-foreground/70 sm:text-xl">
              Zakres współpracy dobieramy do sytuacji firmy, a nie do gotowego
              pakietu usług.
            </p>
          </motion.div>

          {/* Karty */}
          <motion.div
            className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {services.map((service) => (
              <motion.article
                key={service.number}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-primary-foreground/10 bg-background/[0.06] p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-background/[0.1] sm:p-8 lg:min-h-[300px] lg:p-10"
              >
                {/* Duży numer w tle */}
                <span
                  className="pointer-events-none absolute -right-2 -top-8 select-none text-[8rem] font-bold leading-none tracking-tighter text-primary-foreground/[0.04] sm:text-[10rem]"
                  aria-hidden="true"
                >
                  {service.number}
                </span>

                <div className="relative z-10 flex h-full flex-col">
                  <span className="mb-10 text-sm font-medium text-primary-foreground/50 sm:text-base">
                    {service.number}
                  </span>

                  <h3 className="max-w-md text-2xl font-semibold leading-tight tracking-tight text-primary-foreground transition-colors duration-300 group-hover:text-white sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
                    {service.description}
                  </p>

                  {/* Delikatny akcent na dole */}
                  <div className="mt-auto pt-8">
                    <div className="h-px w-12 bg-primary-foreground/30 transition-all duration-500 group-hover:w-24 group-hover:bg-primary-foreground/60" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Domknięcie */}
          <motion.div
            className="mt-10 flex max-w-3xl items-start gap-4 sm:mt-12"
            initial={{ opacity: 0, y: 16 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 16 }
            }
            transition={{
              duration: 0.5,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-foreground/50" />

            <p className="text-base leading-relaxed text-primary-foreground/65 sm:text-lg">
              Nie wiesz, który zakres będzie właściwy? Zaczynamy od sytuacji i
              problemu, a nie od wyboru usługi.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
