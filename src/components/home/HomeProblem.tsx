import { motion } from "framer-motion";
import { EASE, Eyebrow, FadeIn, RevealText } from "./primitives";

const problems = [
  {
    title: "Działania są rozproszone",
    description:
      "Social media, reklamy, strona i content funkcjonują obok siebie, ale nie zawsze wynikają z jednego kierunku.",
  },
  {
    title: "Pomysłów jest więcej niż zasobów",
    description:
      "Trudno zdecydować, co powinno być priorytetem, co może poczekać, a z czego najlepiej zrezygnować.",
  },
  {
    title: "Dane są, ale brakuje wniosków",
    description:
      "Raport pokazuje zasięgi, kliknięcia i ruch, jednak nie zawsze odpowiada na pytanie, co z tych wyników wynika dla marketingu firmy.",
  },
  {
    title: "AI dokłada kolejne możliwości",
    description:
      "Nowe narzędzia mają sens dopiero wtedy, gdy wiadomo, jaki problem mają rozwiązać i co rzeczywiście mają usprawnić.",
  },
];

export const HomeProblem = () => (
  <section id="problem" className="bg-background py-24 sm:py-28 lg:py-36">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Eyebrow>Znasz ten scenariusz?</Eyebrow>

        <RevealText
          text="Marketing działa. Tylko coraz trudniej powiedzieć, co naprawdę ma sens."
          className="mt-6 max-w-5xl text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[4.25rem]"
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:mt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <FadeIn>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground sm:text-xl">
              W wielu firmach problemem nie jest brak działań. Publikacje
              powstają, kampanie są uruchamiane i pojawiają się kolejne pomysły,
              ale z czasem coraz trudniej zdecydować, które z nich naprawdę warto
              kontynuować.
            </p>
          </FadeIn>

          <ol className="border-t border-foreground/15">
            {problems.map((problem, index) => (
              <motion.li
                key={problem.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
                className="group grid grid-cols-[3rem_1fr] gap-4 border-b border-foreground/15 py-7 sm:grid-cols-[4rem_1fr] sm:py-8"
              >
                <span className="pt-1 text-sm font-semibold tabular-nums text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                    {problem.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
                    {problem.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);
