import { motion } from "framer-motion";
import { EASE, Eyebrow, FadeIn, RevealText } from "./primitives";

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

export const HomeBenefits = () => (
  <section id="benefits" className="bg-ink py-24 text-white sm:py-28 lg:py-36">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <Eyebrow tone="light">Co zyskujesz</Eyebrow>
            <RevealText
              text="Po współpracy wiesz, co robić dalej."
              className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            />
          </div>
          <FadeIn>
            <p className="max-w-md text-lg leading-relaxed text-white/70">
              Efektem współpracy nie ma być dłuższa lista działań. Potrzebujesz
              wiedzieć, co jest priorytetem, dlaczego właśnie to i jak przełożyć
              decyzje na codzienną pracę marketingu.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 lg:mt-20">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: EASE }}
              className="group grid grid-cols-1 gap-3 border-t border-white/15 py-8 transition-colors last:border-b sm:grid-cols-[4rem_1fr_1.2fr] sm:items-baseline sm:gap-8 sm:py-10"
            >
              <span className="text-sm font-semibold tabular-nums text-[hsl(270_62%_76%)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-3xl font-extrabold tracking-[-0.03em] transition-colors duration-500 group-hover:text-[hsl(270_62%_80%)] sm:text-4xl lg:text-5xl">
                {item.title}
              </h3>
              <p className="max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <FadeIn className="mt-12">
          <p className="max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Dobry marketing nie polega na robieniu wszystkiego. Część wartości
            polega właśnie na tym, żeby wiedzieć, czego nie robić.
          </p>
        </FadeIn>
      </div>
    </div>
  </section>
);
