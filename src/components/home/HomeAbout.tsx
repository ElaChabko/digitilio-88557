import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";

import aboutPhoto from "@/assets/about-photo-new.webp";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { CountUp, EASE, Eyebrow, FadeIn, PlaceholderTag, RevealText } from "./primitives";

const stats = [
  { value: "20+", label: "marek", hint: "projekty B2B i B2C" },
  { value: "25+", label: "szkoleń", hint: "online i stacjonarnie" },
  { value: "8+", label: "lat doświadczenia", hint: "marketing i komunikacja" },
];

// PLACEHOLDERY – do podmiany na cytaty z listów referencyjnych po zgodzie klientów
const testimonials = [
  { author: "Imię i nazwisko", role: "Stanowisko, firma" },
  { author: "Imię i nazwisko", role: "Stanowisko, firma" },
];

export const HomeAbout = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section id="about" className="bg-background py-24 sm:py-28 lg:py-36">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="overflow-hidden rounded-[1.75rem] lg:sticky lg:top-28 lg:self-start"
            >
              <img
                src={aboutPhoto}
                alt="Ela Chabko - Digitilio"
                width={768}
                height={768}
                className="w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <div>
              <Eyebrow>O mnie</Eyebrow>
              <RevealText
                text="Marketing znam z kilku stron stołu."
                className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl"
              />

              <FadeIn className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Nazywam się{" "}
                  <strong className="font-bold text-foreground">Ela Chabko</strong>.
                  Łączę strategiczne spojrzenie z doświadczeniem w codziennym
                  wdrażaniu marketingu, dzięki czemu rekomendacje oceniam nie
                  tylko przez pryzmat tego, jak brzmią na prezentacji, ale
                  również tego, czy firma rzeczywiście będzie w stanie je
                  wykorzystać.
                </p>
                <p>
                  Pracuję przy strategii, komunikacji, social mediach, content
                  marketingu, kampaniach i analityce. Korzystam również z AI i
                  automatyzacji, ale tylko tam, gdzie pomagają usprawnić proces,
                  poprawić jakość pracy albo podejmować decyzje na lepszej
                  podstawie.
                </p>
                <p>
                  Nie interesuje mnie dokładanie kolejnych działań tylko po to,
                  żeby marketing wyglądał na bardziej aktywny. Znacznie ważniejsze
                  jest dla mnie ustalenie, co naprawdę ma sens dla konkretnej
                  firmy, jej Klientów, budżetu i możliwości zespołu.
                </p>
              </FadeIn>

              {/* Liczby */}
              <div className="mt-12 grid grid-cols-3 border-t border-foreground/15">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`pt-6 ${index > 0 ? "border-l border-foreground/15 pl-4 sm:pl-6" : ""}`}
                  >
                    <CountUp
                      value={stat.value}
                      className="block text-4xl font-extrabold tracking-[-0.04em] text-primary sm:text-6xl"
                    />
                    <span className="mt-2 block text-sm font-bold text-foreground sm:text-base">
                      {stat.label}
                    </span>
                    <span className="mt-1 hidden text-sm text-muted-foreground sm:block">
                      {stat.hint}
                    </span>
                  </div>
                ))}
              </div>

              <FadeIn className="mt-12 border-l-4 border-primary pl-6">
                <p className="max-w-xl text-xl font-bold leading-snug text-foreground sm:text-2xl">
                  Strategia powinna pomagać podejmować decyzje, a nie tylko
                  dobrze wyglądać w prezentacji.
                </p>
              </FadeIn>

              <FadeIn className="mt-10">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="group inline-flex items-center gap-3 rounded-full bg-ink py-2 pl-6 pr-2 text-base font-semibold text-white transition-colors hover:bg-primary"
                >
                  Porozmawiajmy o Twoim marketingu
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              </FadeIn>
            </div>
          </div>

          {/* Opinie – placeholdery */}
          <div className="mt-24 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-32">
            {testimonials.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <figure className="flex h-full flex-col rounded-3xl border border-dashed border-foreground/20 bg-paper p-8 sm:p-10">
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-primary/40" />
                    <PlaceholderTag>Opinia klienta</PlaceholderTag>
                  </div>
                  <blockquote className="mt-6 text-lg leading-relaxed text-foreground/35 sm:text-xl">
                    Tu pojawi się krótki cytat z listu referencyjnego lub opinii
                    klienta, najlepiej z konkretnym efektem współpracy.
                  </blockquote>
                  <figcaption className="mt-auto pt-8">
                    <p className="font-bold text-foreground/40">{item.author}</p>
                    <p className="text-sm text-foreground/35">{item.role}</p>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
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
