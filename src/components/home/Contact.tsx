import { useRef, type ReactNode } from "react";
import { useScroll } from "framer-motion";

import type { HomeCopy } from "@/content/home";
import { DotOrb } from "@/components/site/DotOrb";
import { ActionButton, FadeUp, Pill } from "@/components/site/motion";

/**
 * Kontakt: fiolet na cały ekran. Kule, które rozsypały się w hero,
 * tutaj przy przewijaniu wracają do pierścienia – klamra całej strony.
 */
export const Contact = ({
  copy,
  onCta,
  children,
}: {
  copy: HomeCopy["contact"];
  onCta?: () => void;
  /** Np. formularz na stronie /en zamiast przycisku */
  children?: ReactNode;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative scroll-mt-0 overflow-hidden px-5 py-28 text-white sm:px-8 sm:py-36 lg:px-12 lg:py-44"
      style={{
        background:
          "radial-gradient(100% 80% at 90% 100%, hsl(296 50% 74%) 0%, transparent 55%), linear-gradient(160deg, hsl(262 46% 30%) 0%, hsl(265 48% 42%) 50%, hsl(272 52% 56%) 100%)",
      }}
    >
      <div className="pointer-events-none absolute -right-[20vw] top-1/2 w-[80vw] -translate-y-1/2 opacity-80 sm:-right-[10vw] sm:w-[60vw] lg:-right-[6vw] lg:w-[min(90vh,48vw)]">
        <DotOrb progress={scrollYProgress} mode="gather" strength={1.4} />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        <Pill tone="light">{copy.pill}</Pill>
        <FadeUp>
          <h2 className="mt-6 max-w-4xl text-[2.6rem] font-semibold leading-[1] tracking-[-0.05em] sm:text-7xl lg:text-[5.8rem]">
            {copy.title}
          </h2>
        </FadeUp>

        {children ? (
          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <FadeUp>
              <p className="max-w-md text-lg leading-relaxed text-white/85">{copy.lead}</p>
              <a href="mailto:elachabko@digitilio.pl" className="mt-6 inline-block text-lg font-semibold underline decoration-white/40 underline-offset-4 hover:decoration-white">
                {copy.note}
              </a>
            </FadeUp>
            <FadeUp delay={0.1}>{children}</FadeUp>
          </div>
        ) : (
          <FadeUp delay={0.1} className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">{copy.lead}</p>
            <div className="flex flex-col items-start gap-3">
              <ActionButton tone="white" onClick={onCta}>
                {copy.cta}
              </ActionButton>
              <p className="pl-1 text-sm text-white/70">{copy.note}</p>
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  );
};
