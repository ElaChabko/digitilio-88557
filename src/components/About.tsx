import aboutPhoto from "@/assets/about-photo-new.webp";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "20+",
    label: "marek",
    hint: "projekty B2B i B2C",
  },
  {
    value: "25+",
    label: "szkoleń",
    hint: "online i stacjonarnie",
  },
  {
    value: "8+",
    label: "lat doświadczenia",
    hint: "marketing i komunikacja",
  },
];

export const About = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-secondary/5 py-20 sm:py-24 lg:py-28"
    >
      {/* Delikatny akcent tła */}
      <div
        className="pointer-events-none absolute -bottom-40 -right-32 h-[480px] w-[480px] rounded-full bg-primary/[0.08] blur-[120px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">

            {/* LEWA STRONA */}
            <div>
              {/* Zdjęcie */}
              <motion.div
                initial={{ opacity: 0, x: -60, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
              >
                <img
                  src={aboutPhoto}
                  alt="Ela Chabko - Digitilio"
                  width={768}
                  height={768}
                  className="w-full object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
              </motion.div>

              {/* Statystyki */}
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-border/70 bg-background/80 p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
                  >
                    <span className="block text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                      {stat.value}
                    </span>

                    <span className="mt-1 block text-sm font-semibold text-foreground sm:text-base">
                      {stat.label}
                    </span>

                    <span className="mt-3 block text-sm leading-relaxed text-muted-foreground">
                      {stat.hint}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* PRAWA STRONA */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col justify-center"
            >
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="mb-4 text-sm font-medium tracking-wide text-primary sm:text-base"
              >
                O mnie
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-2xl text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl"
              >
                Marketing znam z kilku stron stołu.
              </motion.h2>

              <div className="mt-8 max-w-2xl space-y-5">
                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-lg font-light leading-relaxed text-muted-foreground sm:text-xl"
                >
                  Nazywam się{" "}
                  <strong className="font-semibold text-foreground">
                    Ela Chabko
                  </strong>
                  . Łączę strategiczne spojrzenie z doświadczeniem w codziennym
                  wdrażaniu marketingu, dzięki czemu rekomendacje oceniam nie
                  tylko przez pryzmat tego, jak brzmią na prezentacji, ale
                  również tego, czy firma rzeczywiście będzie w stanie je
                  wykorzystać.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.22 }}
                  className="text-base leading-relaxed text-muted-foreground sm:text-lg"
                >
                  Pracuję przy strategii, komunikacji, social mediach, content
                  marketingu, kampaniach i analityce. Korzystam również z AI i
                  automatyzacji, ale tylko tam, gdzie pomagają usprawnić proces,
                  poprawić jakość pracy albo podejmować decyzje na lepszej
                  podstawie.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.29 }}
                  className="text-base leading-relaxed text-muted-foreground sm:text-lg"
                >
                  Nie interesuje mnie dokładanie kolejnych działań tylko po to,
                  żeby marketing wyglądał na bardziej aktywny. Znacznie
                  ważniejsze jest dla mnie ustalenie, co naprawdę ma sens dla
                  konkretnej firmy, jej Klientów, budżetu i możliwości zespołu.
                </motion.p>
              </div>

              {/* Statement */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 border-l-2 border-primary/40 pl-5 sm:pl-6"
              >
                <p className="max-w-xl text-lg font-medium leading-relaxed text-foreground sm:text-xl">
                  Strategia powinna pomagać podejmować decyzje, a nie tylko
                  dobrze wyglądać w prezentacji.
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.42,
                }}
                className="mt-9"
              >
                <Button
                  type="button"
                  size="lg"
                  onClick={() => setIsContactOpen(true)}
                  className="group h-auto rounded-full bg-primary px-7 py-5 text-base text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl sm:px-8 sm:text-lg"
                >
                  Porozmawiajmy o Twoim marketingu
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <ContactFormDialog
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </section>
  );
};
