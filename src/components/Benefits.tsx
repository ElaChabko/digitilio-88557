import { motion } from "framer-motion";

const benefits = [
  {
    title: "Klarowność",
    description:
      "Wiesz, gdzie naprawdę leży problem i które działania mają największe znaczenie dla dalszego marketingu.",
  },
  {
    title: "Priorytety",
    description:
      "Masz jasność, czym warto zająć się teraz, co może poczekać i z czego lepiej świadomie zrezygnować.",
  },
  {
    title: "Plan do wdrożenia",
    description:
      "Rekomendacje uwzględniają realny budżet, czas i możliwości zespołu, zamiast kończyć się na prezentacji pełnej dobrych pomysłów.",
  },
  {
    title: "Lepsze decyzje",
    description:
      "Kolejne działania oceniasz na podstawie celu, danych i kontekstu biznesowego, a nie wyłącznie intuicji albo aktualnego trendu.",
  },
];

export const Benefits = () => {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-[#17131f] py-20 sm:py-24 lg:py-28"
    >
      {/* Subtelne światło */}
      <motion.div
        className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]"
        animate={{
          x: [0, 35, 0],
          y: [0, 25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="pointer-events-none absolute -bottom-48 right-0 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[140px]"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

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

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">

          {/* Intro */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="mb-4 text-sm font-medium tracking-wide text-primary-foreground/55 sm:text-base">
                Co zyskujesz?
              </p>

              <h2 className="max-w-xl text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
                Po współpracy wiesz, co robić dalej.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.65,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:pt-8"
            >
              <p className="max-w-2xl text-lg font-light leading-relaxed text-white/65 sm:text-xl">
                Efektem współpracy nie ma być dłuższa lista działań.
                Potrzebujesz wiedzieć, co jest priorytetem, dlaczego właśnie to
                i jak przełożyć decyzje na codzienną pracę marketingu.
              </p>
            </motion.div>
          </div>

          {/* Korzyści */}
          <div className="mt-16 border-t border-white/10 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <motion.article
                  key={benefit.title}
                  initial={{
                    opacity: 0,
                    y: 36,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={[
                    "group relative border-b border-white/10 px-0 py-9 md:px-8 md:py-10 lg:min-h-[300px] lg:border-b-0 lg:px-8 lg:py-12",
                    index === 0 ? "md:pl-0 lg:pl-0" : "",
                    index !== benefits.length - 1
                      ? "lg:border-r lg:border-white/10"
                      : "",
                  ].join(" ")}
                >
                  {/* Mały akcent */}
                  <motion.div
                    className="mb-8 h-[3px] w-10 rounded-full bg-primary"
                    whileHover={{ width: 72 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                    {benefit.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-base leading-relaxed text-white/60 sm:text-lg">
                    {benefit.description}
                  </p>

                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 25%, hsl(var(--primary) / 0.10), transparent 60%)",
                    }}
                    aria-hidden="true"
                  />
                </motion.article>
              ))}
            </div>
          </div>

          {/* Pointa */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.65,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-12 border-t border-white/10 pt-9 lg:mt-16 lg:pt-10"
          >
            <p className="max-w-4xl text-xl font-medium leading-snug tracking-tight text-white sm:text-2xl">
              Dobry marketing nie polega na robieniu wszystkiego. Część wartości
              polega właśnie na tym, żeby wiedzieć, czego nie robić.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
