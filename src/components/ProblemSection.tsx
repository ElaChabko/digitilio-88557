import { motion } from "framer-motion";

const problems = [
  {
    number: "01",
    title: "Działania są rozproszone",
    description:
      "Social media, reklamy, strona i content funkcjonują obok siebie, ale nie zawsze wynikają z jednego kierunku.",
  },
  {
    number: "02",
    title: "Pomysłów jest więcej niż zasobów",
    description:
      "Trudno zdecydować, co powinno być priorytetem, co może poczekać, a z czego najlepiej zrezygnować.",
  },
  {
    number: "03",
    title: "Dane są, ale brakuje wniosków",
    description:
      "Raport pokazuje zasięgi, kliknięcia i ruch, jednak nie zawsze odpowiada na pytanie, co z tych wyników wynika dla marketingu firmy.",
  },
  {
    number: "04",
    title: "AI dokłada kolejne możliwości",
    description:
      "Nowe narzędzia mają sens dopiero wtedy, gdy wiadomo, jaki problem mają rozwiązać i co rzeczywiście mają usprawnić.",
  },
];

export const ProblemSection = () => {
  return (
    <section
      id="problem"
      className="relative bg-background py-20 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 xl:gap-28">
            
            {/* Lewa kolumna */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:pr-6"
            >
              <p className="text-sm sm:text-base font-medium text-primary mb-5 tracking-wide">
                Znasz ten scenariusz?
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
                Marketing działa. Tylko coraz trudniej powiedzieć, co naprawdę ma sens.
              </h2>

              <p className="mt-7 text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                W wielu firmach problemem nie jest brak działań. Publikacje
                powstają, kampanie są uruchamiane i pojawiają się kolejne
                pomysły, ale z czasem coraz trudniej zdecydować, które z nich
                naprawdę warto kontynuować.
              </p>
            </motion.div>

            {/* Prawa kolumna */}
            <div className="border-t border-border/70">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="grid grid-cols-[44px_1fr] sm:grid-cols-[60px_1fr] gap-4 sm:gap-6 py-7 sm:py-8 border-b border-border/70"
                >
                  <span className="text-sm sm:text-base font-medium text-primary">
                    {problem.number}
                  </span>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                      {problem.title}
                    </h3>

                    <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
