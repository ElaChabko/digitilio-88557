import { motion } from "framer-motion";

const situations = [
  {
    number: "01",
    title: "Marketing działa po kawałku",
    description:
      "Social media, kampanie, strona i content są prowadzone przez różne osoby lub dostawców, ale brakuje jednego kierunku i jasnych priorytetów.",
  },
  {
    number: "02",
    title: "Firma stoi przed ważną zmianą",
    description:
      "Przed Wami nowa strona, zmiana komunikacji, rozwój social media, wejście w kolejny kanał albo uporządkowanie sposobu pozyskiwania Klientów.",
  },
  {
    number: "03",
    title: "Brakuje senioralnego spojrzenia",
    description:
      "Marketing jest już prowadzony, ale potrzebujesz kogoś, kto spojrzy na działania szerzej, połączy dane z kontekstem biznesowym i pomoże ocenić, co naprawdę ma sens.",
  },
  {
    number: "04",
    title: "Potrzebujesz partnera do decyzji",
    description:
      "Nie szukasz kolejnej osoby do realizowania listy zadań. Potrzebujesz wsparcia w ustalaniu kierunku, ocenie pomysłów i podejmowaniu kolejnych decyzji marketingowych.",
  },
];

export const ForWhom = () => {
  return (
    <section
      id="for-whom"
      className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      {/* Subtelny akcent tła */}
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-accent/[0.07] blur-[120px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 xl:gap-24">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <p className="mb-4 text-sm font-medium tracking-wide text-primary sm:text-base">
                Dla kogo?
              </p>

              <h2 className="max-w-xl text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Najczęściej pracuję z firmami, które nie zaczynają marketingu od zera.
              </h2>

              <p className="mt-7 max-w-xl text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
                Działania już są, ale z czasem pojawiło się więcej kanałów,
                pomysłów i decyzji niż jasności, co naprawdę powinno być
                priorytetem.
              </p>

              <div className="mt-9 border-l-2 border-primary/40 pl-5 sm:pl-6">
                <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Digitilio ma sens wtedy, gdy potrzebujesz uporządkowania,
                  kierunku i partnera do myślenia, a nie wyłącznie kolejnej
                  pary rąk do realizacji.
                </p>
              </div>
            </motion.div>

            {/* RIGHT */}
            <div className="border-t border-border/70">
              {situations.map((situation, index) => (
                <motion.article
                  key={situation.number}
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group grid grid-cols-[48px_1fr] gap-5 border-b border-border/70 py-8 sm:grid-cols-[64px_1fr] sm:gap-7 sm:py-10"
                >
                  <span className="pt-1 text-sm font-medium text-primary sm:text-base">
                    {situation.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold leading-tight tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                      {situation.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {situation.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* NOT FOR EVERYONE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-16 rounded-2xl bg-secondary/10 px-6 py-7 sm:px-8 sm:py-8 lg:mt-20"
          >
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.55fr_1.45fr] lg:gap-12">
              <div>
                <p className="text-sm font-medium tracking-wide text-primary sm:text-base">
                  Nie dla każdego
                </p>
              </div>

              <p className="max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Jeśli szukasz wyłącznie najtańszej produkcji postów, gwarancji
                wyniku bez dostępu do danych albo współpracy rozliczanej przede
                wszystkim liczbą materiałów miesięcznie, prawdopodobnie nie
                będziemy najlepszym dopasowaniem.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
