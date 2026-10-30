import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { GradientField } from "./GradientField";
import { Pill, useCalmMotion } from "./motion";

/**
 * Nagłówek podstron: fiolet marki na całą szerokość z płynnym gradientem.
 * Przy przewijaniu karta lekko się zmniejsza i zaokrągla (jak hero strony głównej).
 */
export const PageHero = ({
  pill,
  title,
  lead,
  children,
  size = "default",
}: {
  pill?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  size?: "default" | "article";
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const calm = useCalmMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, calm ? 1 : 0.94]);
  const radius = useTransform(scrollYProgress, [0, 0.6], [0, calm ? 0 : 44]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, calm ? 0 : -60]);

  return (
    <section ref={ref} className="relative bg-white">
      <motion.div
        className="relative origin-top overflow-hidden text-white"
        style={{ scale, borderRadius: radius }}
      >
        <GradientField />

        <motion.div
          style={{ y: textY }}
          className={`relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 ${
            size === "article" ? "pb-16 pt-32 sm:pb-20 sm:pt-40" : "pb-20 pt-36 sm:pb-28 sm:pt-44 lg:pb-32"
          }`}
        >
          {pill && (
            <div className="hero-fade-up">
              <Pill tone="light">{pill}</Pill>
            </div>
          )}
          <h1
            className={`hero-slide-in mt-6 max-w-4xl font-semibold tracking-[-0.045em] ${
              size === "article"
                ? "text-[2.1rem] leading-[1.05] sm:text-5xl lg:text-[3.8rem]"
                : "text-[2.6rem] leading-[1] sm:text-6xl lg:text-[5.2rem]"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            {title}
          </h1>
          {lead && (
            <div
              className="hero-fade-up mt-7 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl"
              style={{ animationDelay: "0.35s" }}
            >
              {lead}
            </div>
          )}
          {children && (
            <div className="hero-fade-up mt-8" style={{ animationDelay: "0.5s" }}>
              {children}
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};
