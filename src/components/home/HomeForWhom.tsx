import { motion } from "framer-motion";
import { EASE, Eyebrow, FadeIn, RevealText } from "./primitives";

const situations = [
  {
    eyebrow: "Porządkowanie",
    title: "Marketing działa po kawałku",
    description:
      "Social media, kampanie, strona i content są prowadzone, ale brakuje jednego kierunku i jasnej hierarchii priorytetów.",
  },
  {
    eyebrow: "Zmiana",
    title: "Firma jest przed ważnym ruchem",
    description:
      "Nowa strona, zmiana komunikacji, kolejny kanał albo przebudowa sposobu pozyskiwania Klientów wymagają szerszej decyzji niż wybór kolejnego narzędzia.",
  },
  {
    eyebrow: "Perspektywa",
    title: "Brakuje senioralnego spojrzenia",
    description:
      "Zespół działa, ale potrzebuje kogoś, kto połączy dane, kontekst biznesowy i wykonanie, a następnie pomoże ocenić, co rzeczywiście ma sens.",
  },
  {
    eyebrow: "Decyzje",
    title: "Potrzebujesz partnera do myślenia",
    description:
      "Nie kolejnej osoby do realizowania listy zadań, ale kogoś, z kim można zweryfikować kierunek, priorytety i kolejne decyzje marketingowe.",
  },
];

export const HomeForWhom = () => (
  <section id="for-whom" className="bg-paper py-24 sm:py-28 lg:py-36">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <Eyebrow>Dla kogo?</Eyebrow>
            <RevealText
              text="Nie musisz zaczynać marketingu od zera, żeby potrzebować nowego kierunku."
              className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl"
            />
          </div>
          <FadeIn>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              Najczęściej pracuję z właścicielami i osobami odpowiedzialnymi za
              marketing w firmach, w których działania już trwają, ale coraz
              trudniej ocenić, co powinno być kolejnym krokiem.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-20">
          {situations.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: (index % 2) * 0.12, ease: EASE }}
              className="group rounded-3xl bg-background p-8 transition-colors duration-500 hover:bg-ink sm:p-10"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary transition-colors duration-500 group-hover:text-[hsl(270_62%_78%)]">
                {item.eyebrow}
              </p>
              <h3 className="mt-6 text-2xl font-bold leading-tight tracking-tight text-foreground transition-colors duration-500 group-hover:text-white sm:text-[1.75rem]">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/70">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>

        <FadeIn className="mt-10">
          <div className="grid grid-cols-1 gap-4 rounded-3xl bg-primary p-8 text-white sm:p-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <p className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              Nie szukasz „więcej marketingu”. Potrzebujesz wiedzieć, co zrobić
              dalej.
            </p>
            <p className="text-base leading-relaxed text-white/75">
              Zakres współpracy wynika z sytuacji firmy, jej celów i realnych
              możliwości, a nie z gotowego pakietu działań.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
