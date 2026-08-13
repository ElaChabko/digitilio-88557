import { motion } from "framer-motion";

const situations = [
  {
    eyebrow: "Porządkowanie",
    title: "Marketing działa po kawałku",
    description:
      "Social media, kampanie, strona i content są prowadzone, ale brakuje jednego kierunku i jasnej hierarchii priorytetów.",
    className: "md:col-span-2",
    initial: { opacity: 0, x: -40, y: 20 },
  },
  {
    eyebrow: "Zmiana",
    title: "Firma jest przed ważnym ruchem",
    description:
      "Nowa strona, zmiana komunikacji, kolejny kanał albo przebudowa sposobu pozyskiwania Klientów wymagają szerszej decyzji niż wybór kolejnego narzędzia.",
    className: "md:col-span-1",
    initial: { opacity: 0, x: 40, y: 20 },
  },
  {
    eyebrow: "Perspektywa",
    title: "Brakuje senioralnego spojrzenia",
    description:
      "Zespół działa, ale potrzebuje kogoś, kto połączy dane, kontekst biznesowy i wykonanie, a następnie pomoże ocenić, co rzeczywiście ma sens.",
    className: "md:col-span-1",
    initial: { opacity: 0, x: -40, y: 20 },
  },
  {
    eyebrow: "Decyzje",
    title: "Potrzebujesz partnera do myślenia",
    description:
      "Nie kolejnej osoby do realizowania listy zadań, ale kogoś, z kim można zweryfikować kierunek, priorytety i kolejne decyzje marketingowe.",
    className: "md:col-span-2",
    initial: { opacity: 0, x: 40, y: 20 },
  },
];

export const ForWhom = () => {
  return (
    <section
      id="for-whom"
      className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      {/* Tło */}
      <motion.div
        className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-primary/[0.07] blur-[120px]"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="pointer-events-none absolute -bottom-48 right-0 h-[520px] w-[520px] rounded-full bg-accent/[0.07] blur-[120px]"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mb-12 max-w-4xl text-center sm:mb-16 lg:mb-20"
          >
            <p className="mb-4 text-sm font-medium tracking-wide text-primary sm:text-base">
              Dla kogo?
            </p>

            <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Nie musisz zaczynać marketingu od zera, żeby potrzebować nowego
              kierunku.
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
              Najczęściej pracuję z właścicielami i osobami odpowiedzialnymi za
              marketing w firmach, w których działania już trwają, ale coraz
              trudniej ocenić, co powinno być kolejnym krokiem.
            </p>
          </motion.div>

          {/* Bento */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
            {situations.map((situation, index) => (
              <motion.article
                key={situation.title}
                initial={situation.initial}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                }}
                className={[
                  situation.className,
                  "group relative min-h-[260px] overflow-hidden rounded-2xl border border-border/70 bg-secondary/[0.08] p-7 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5 sm:p-8 lg:min-h-[280px] lg:p-10",
                ].join(" ")}
              >
                {/* Akcent w tle */}
                <motion.div
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/[0.08] blur-3xl"
                  whileHover={{
                    scale: 1.35,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.5 }}
                  aria-hidden="true"
                />

                {/* Cienka linia */}
                <motion.div
                  className="absolute left-0 top-0 h-[3px] bg-gradient-to-r from-primary via-accent to-transparent"
                  initial={{ width: "42px" }}
                  whileHover={{ width: "100%" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                <div className="relative z-10 flex h-full flex-col">
                  <p className="text-sm font-medium tracking-wide text-primary sm:text-base">
                    {situation.eyebrow}
                  </p>

                  <h3 className="mt-7 max-w-xl text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
                    {situation.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {situation.description}
                  </p>

                  <motion.div
                    className="mt-auto pt-8"
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="h-px w-10 bg-primary/40 transition-all duration-500 group-hover:w-20 group-hover:bg-primary" />
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.65,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 overflow-hidden rounded-2xl bg-primary px-6 py-8 sm:px-9 sm:py-10 lg:px-12"
          >
            <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
              <p className="max-w-4xl text-xl font-semibold leading-snug tracking-tight text-primary-foreground sm:text-2xl lg:text-3xl">
                Nie szukasz „więcej marketingu”. Potrzebujesz wiedzieć, co
                zrobić dalej.
              </p>

              <p className="max-w-xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
                Zakres współpracy wynika z sytuacji firmy, jej celów i realnych
                możliwości, a nie z gotowego pakietu działań.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
