import { useState } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

import { ContactFormDialog } from "@/components/ContactFormDialog";
import heroPortrait from "@/assets/hero-portrait.webp";

/**
 * Hero w stylu redakcyjnym: prawie czarne tło, bardzo duże hasło
 * wersalikami, fiolet marki w drugiej linii. Bez poświat i cząsteczek.
 */
export const HomeHero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-ink text-white"
    >
      {/* Delikatna siatka w tle */}
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-[0.07] md:block"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] lg:gap-14">
            {/* Tekst */}
            <div>
              <p
                className="hero-fade-up flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-white/55 sm:text-[13px]"
                style={{ animationDelay: "0.05s" }}
              >
                <span className="h-2 w-2 bg-[hsl(270_60%_75%)]" aria-hidden="true" />
                Strategia marketingowa i doradztwo
              </p>

              <h1 className="mt-7 text-[8.2vw] font-extrabold uppercase leading-[0.98] tracking-[-0.035em] sm:mt-8 sm:text-[7.4vw] lg:text-[clamp(3rem,4.9vw,4.6rem)]">
                <span className="hero-slide-in block" style={{ animationDelay: "0.15s" }}>
                  Mniej przypadkowych działań.
                </span>
                <span
                  className="hero-slide-in mt-1 block text-[hsl(270_62%_76%)]"
                  style={{ animationDelay: "0.35s" }}
                >
                  Więcej dobrych decyzji marketingowych.
                </span>
              </h1>

              <div
                className="hero-fade-up mt-10 grid grid-cols-1 gap-8 sm:mt-12 md:grid-cols-[1.2fr_1fr] md:items-end"
                style={{ animationDelay: "0.7s" }}
              >
                <p className="max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
                  Pomagam firmom uporządkować marketing, wybrać priorytety i
                  przełożyć strategię na działania, które da się optymalnie
                  wdrożyć.
                </p>

                <div className="flex flex-col items-start gap-3">
                  <button
                    type="button"
                    onClick={() => setIsContactOpen(true)}
                    className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-base font-semibold text-ink transition-colors hover:bg-[hsl(270_62%_88%)]"
                  >
                    Porozmawiajmy o Twojej marce
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:translate-x-0.5">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>
                  <p className="pl-1 text-sm text-white/50">
                    Bez zobowiązań • 15 min rozmowy
                  </p>
                </div>
              </div>
            </div>

            {/* Portret */}
            <div
              className="hero-scale-in relative mx-auto w-full max-w-[340px] lg:max-w-none"
              style={{ animationDelay: "0.3s" }}
            >
              <motion.div
                className="relative overflow-hidden rounded-[1.75rem] bg-[hsl(270_30%_92%)]"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={heroPortrait}
                  alt="Ela Chabko - Digitilio"
                  width={768}
                  height={960}
                  className="h-auto w-full object-cover"
                  loading="eager"
                  decoding="async"
                  {...{ fetchpriority: "high" }}
                />
              </motion.div>

              <div className="absolute -bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-primary px-5 py-4 text-white shadow-2xl sm:left-6 sm:right-6">
                <div>
                  <p className="text-sm font-bold leading-tight">Ela Chabko</p>
                  <p className="text-xs text-white/70">Założycielka Digitilio</p>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70">
                  B2B · B2C
                </span>
              </div>
            </div>
          </div>

          {/* Przewiń */}
          <a
            href="#problem"
            className="mt-16 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white/70 lg:inline-flex"
          >
            <ArrowDown className="h-4 w-4 animate-bounce" />
            Przewiń
          </a>
        </div>
      </div>

      <ContactFormDialog
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </section>
  );
};
