import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { ContactFormDialog } from "@/components/ContactFormDialog";
import { Eyebrow, FadeIn } from "./primitives";

export const HomeContact = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-primary py-24 text-white sm:py-32 lg:py-40"
    >
      {/* Okręgi w tle – graficzny akcent zamiast poświat */}
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full border border-white/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-[360px] w-[360px] rounded-full border border-white/10"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Eyebrow tone="light">Następny krok</Eyebrow>

          <FadeIn>
            <h2 className="mt-6 max-w-5xl text-[9vw] font-extrabold uppercase leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-[5.25rem]">
              Nie wiesz, co powinno być kolejnym krokiem w marketingu?
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Nie musisz mieć gotowego briefu ani listy działań. Na krótkiej
              rozmowie przyjrzymy się sytuacji i sprawdzimy, gdzie mogę realnie
              pomóc.
            </p>

            <div className="flex flex-col items-start gap-3">
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="group inline-flex items-center gap-3 rounded-full bg-white py-2.5 pl-7 pr-2.5 text-lg font-semibold text-ink transition-colors hover:bg-[hsl(270_62%_90%)]"
              >
                Porozmawiajmy o Twoim marketingu
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </button>
              <p className="pl-1 text-sm text-white/60">
                15 min • bez zobowiązań
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <ContactFormDialog
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </section>
  );
};
