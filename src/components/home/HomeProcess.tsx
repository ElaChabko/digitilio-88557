import { motion } from "framer-motion";
import { EASE, Eyebrow, FadeIn, RevealText } from "./primitives";

const steps = [
  {
    title: "Diagnozuję sytuację",
    description:
      "Analizuję cele, dotychczasowe działania, komunikację, kanały, dane i dostępne zasoby. Szukam nie tylko tego, co nie działa, ale również miejsc, w których firma niepotrzebnie traci czas lub uwagę.",
  },
  {
    title: "Ustalamy priorytety",
    description:
      "Nie każda dobra możliwość jest właściwym kierunkiem na teraz. Określamy, czym warto zająć się w pierwszej kolejności, co może poczekać i z jakich działań najlepiej zrezygnować.",
  },
  {
    title: "Przekładamy decyzje na plan",
    description:
      "Rekomendacje zamieniamy na konkretne działania, odpowiedzialności, kanały i sposób mierzenia efektów. Plan musi uwzględniać realny budżet, czas i możliwości zespołu.",
  },
  {
    title: "Wdrażamy i wyciągamy wnioski",
    description:
      "Jeśli zakres współpracy tego wymaga, wspieram również realizację. Później wracamy do danych, oceniamy efekty i korygujemy kierunek zamiast trzymać się założeń, które przestały działać.",
  },
];

export const HomeProcess = () => (
  <section
    id="process"
    className="relative overflow-hidden bg-primary py-24 text-white sm:py-28 lg:py-36"
  >
    <div className="container relative z-10 mx-auto px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <Eyebrow tone="light">Jak pracuję</Eyebrow>
            <RevealText
              text="Najpierw trzeba dobrze zrozumieć problem."
              className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            />
          </div>
          <FadeIn>
            <p className="max-w-md text-lg leading-relaxed text-white/75">
              Nie zaczynam od kanału, formatu ani listy działań. Najpierw chcę
              zrozumieć, co dzieje się w marketingu firmy, gdzie rzeczywiście
              leży problem i jakie decyzje mają dziś największe znaczenie.
            </p>
          </FadeIn>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: EASE }}
              className="group flex flex-col bg-primary p-7 transition-colors duration-500 hover:bg-[hsl(263_36%_30%)] sm:p-8"
            >
              <span className="text-6xl font-extrabold leading-none tracking-[-0.04em] text-white/20 transition-colors duration-500 group-hover:text-[hsl(270_62%_80%)] lg:text-7xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-10 text-xl font-bold leading-snug sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/70">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>

        <FadeIn className="mt-12">
          <p className="max-w-3xl text-xl font-bold leading-snug sm:text-2xl">
            Strategia nie kończy się na prezentacji. Powinna ułatwiać
            podejmowanie kolejnych decyzji i dawać się wykorzystać w codziennej
            pracy.
          </p>
        </FadeIn>
      </div>
    </div>
  </section>
);
