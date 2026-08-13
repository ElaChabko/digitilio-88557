import aboutPhoto from "@/assets/about-photo-new.webp";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

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
  const ref = useRef(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

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

      <div
        ref={ref}
        className="container relative z-10 mx-auto px-4 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
            
            {/* LEFT: zdjęcie + proof */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -32 }
              }
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
                <img
                  src={aboutPhoto}
                  alt="Ela Chabko - Digitilio"
                  width={768}
                  height={768}
                  className="w-full object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
              </div>

              {/* Statystyki */}
              <motion.div
                className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3"
                initial={{ opacity: 0, y: 16 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-background px-5 py-6 sm:px-4"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold tracking-tight text-primary">
                        {stat.value}
                      </span>

                      <span className="text-sm font-medium text-foreground">
                        {stat.label}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {stat.hint}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: treść */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 32 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 32 }
              }
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="mb-4 text-sm font-medium tracking-wide text-primary sm:text-base">
                O mnie
              </p>

              <h2 className="max-w-2xl text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Marketing znam z kilku stron stołu.
              </h2>

              <div className="mt-8 max-w-2xl space-y-5">
                <p className="text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
                  Nazywam się{" "}
                  <strong className="font-semibold text-foreground">
                    Ela Chabko
                  </strong>
                  . Łączę strategiczne spojrzenie z doświadczeniem w codziennym
                  wdrażaniu marketingu, dzięki czemu rekomendacje oceniam nie
                  tylko przez pryzmat tego, jak brzmią na prezentacji, ale
                  również tego, czy firma rzeczywiście będzie w stanie je
                  wykorzystać.
                </p>

                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Pracuję przy strategii, komunikacji, social mediach, content
                  marketingu, kampaniach i analityce. Korzystam również z AI i
                  automatyzacji, ale tylko tam, gdzie pomagają usprawnić proces,
                  poprawić jakość pracy albo podejmować decyzje na lepszej
                  podstawie.
                </p>

                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Nie interesuje mnie dokładanie kolejnych działań tylko po to,
                  żeby marketing wyglądał na bardziej aktywny. Znacznie
                  ważniejsze jest dla mnie ustalenie, co naprawdę ma sens dla
                  konkretnej firmy, jej Klientów, budżetu i możliwości zespołu.
                </p>
              </div>

              {/* Statement */}
              <div className="mt-8 border-l-2 border-primary/40 pl-5 sm:pl-6">
                <p className="max-w-xl text-lg font-medium leading-relaxed text-foreground sm:text-xl">
                  Strategia powinna pomagać podejmować decyzje, a nie tylko
                  dobrze wyglądać w prezentacji.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-9">
                <Button
                  type="button"
                  size="lg"
                  onClick={() => setIsContactOpen(true)}
                  className="group h-auto rounded-full bg-primary px-7 py-5 text-base text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl sm:px-8 sm:text-lg"
                >
                  Porozmawiajmy o Twoim marketingu
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
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
