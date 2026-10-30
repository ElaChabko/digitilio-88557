import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

import type { HomeCopy } from "@/content/home";
import { DotOrb } from "@/components/site/DotOrb";
import { ActionButton, useCalmMotion } from "@/components/site/motion";

/**
 * Hero: cały ekran w fiolecie marki. Przy przewijaniu gradient zmienia odcień,
 * kule z logo rozsypują się, a cała karta lekko się zmniejsza i zaokrągla.
 */
export const Hero = ({
  copy,
  onCta,
}: {
  copy: HomeCopy["hero"];
  onCta: () => void;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const calm = useCalmMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const scale = useTransform(scrollYProgress, [0, 1], [1, calm ? 1 : 0.9]);
  const radius = useTransform(scrollYProgress, [0, 1], [0, calm ? 0 : 56]);
  const shift = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, calm ? 0 : -120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative h-[100svh] min-h-[640px] bg-white">
      <motion.div
        className="absolute inset-0 origin-top overflow-hidden text-white"
        style={{ scale, borderRadius: radius }}
      >
        {/* Gradient bazowy */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 85% 10%, hsl(268 58% 62%) 0%, transparent 55%), linear-gradient(150deg, hsl(262 46% 30%) 0%, hsl(264 46% 40%) 45%, hsl(270 52% 56%) 100%)",
          }}
        />
        {/* Drugi gradient – odsłania się przy przewijaniu (zmiana odcienia jak na jeton.com) */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: shift,
            background:
              "radial-gradient(110% 90% at 20% 90%, hsl(300 55% 78%) 0%, transparent 55%), linear-gradient(150deg, hsl(266 52% 48%) 0%, hsl(276 55% 64%) 55%, hsl(310 55% 82%) 100%)",
          }}
        />
        {/* Ziarno – lekka faktura */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />

        {/* Obiekt z kul */}
        <div className="pointer-events-none absolute right-[-30vw] top-[3%] w-[80vw] opacity-75 sm:right-[-12vw] sm:top-[5%] sm:w-[62vw] sm:opacity-90 lg:right-[3vw] lg:top-1/2 lg:w-[min(76vh,44vw)] lg:-translate-y-1/2 lg:opacity-100">
          <DotOrb progress={scrollYProgress} mode="scatter" strength={1.1} />
        </div>

        {/* Tekst */}
        <motion.div
          className="absolute inset-x-0 bottom-0 z-10"
          style={{ y: textY, opacity: textOpacity }}
        >
          <div className="mx-auto max-w-[1600px] px-5 pb-28 sm:px-8 lg:px-12 lg:pb-28">
            <div className="max-w-[54rem] lg:max-w-[52%]">
              <p
                className="hero-fade-up mb-5 text-sm font-medium text-white/80 sm:text-base"
                style={{ animationDelay: "0.05s" }}
              >
                {copy.eyebrow}
              </p>
              <h1 className="text-[2.35rem] font-semibold leading-[1] tracking-[-0.045em] sm:text-6xl lg:text-[4.1rem] xl:text-[4.8rem]">
                <span className="hero-slide-in block" style={{ animationDelay: "0.15s" }}>
                  {copy.line1}
                </span>
                <span
                  className="hero-slide-in block text-white/70"
                  style={{ animationDelay: "0.3s" }}
                >
                  {copy.line2}
                </span>
              </h1>

              <div
                className="hero-fade-up mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-10"
                style={{ animationDelay: "0.6s" }}
              >
                <p className="max-w-sm text-base leading-relaxed text-white/90 sm:text-lg">{copy.lead}</p>
                <div className="flex shrink-0 flex-col items-start gap-2">
                  <ActionButton tone="white" onClick={onCta}>
                    {copy.cta}
                  </ActionButton>
                  <p className="pl-1 text-xs text-white/70 sm:text-sm">{copy.note}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <a
          href="#problem"
          className="absolute bottom-8 left-12 z-10 hidden items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/25 lg:flex"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
          {copy.scroll}
        </a>
      </motion.div>
    </section>
  );
};
