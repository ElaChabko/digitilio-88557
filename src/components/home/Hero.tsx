import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

import type { HomeCopy } from "@/content/home";
import { GradientField } from "@/components/site/GradientField";
import { ActionButton, useCalmMotion } from "@/components/site/motion";

/**
 * Hero „Typografia”: samo duże hasło na środku, na płynnym fiolecie,
 * i jeden przycisk. Przy przewijaniu hasło się zmniejsza, a karta zaokrągla.
 */
type Props = {
  copy: HomeCopy["hero"];
  onCta: () => void;
};

const useHeroMotion = (ref: React.RefObject<HTMLElement>) => {
  const calm = useCalmMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  return {
    p: scrollYProgress,
    calm,
    scale: useTransform(scrollYProgress, [0, 1], [1, calm ? 1 : 0.9]),
    radius: useTransform(scrollYProgress, [0, 1], [0, calm ? 0 : 56]),
    fade: useTransform(scrollYProgress, [0, 0.7], [1, 0]),
  };
};

const Shell = ({
  sectionRef,
  scale,
  radius,
  children,
}: {
  sectionRef: React.RefObject<HTMLElement>;
  scale: MotionValue<number>;
  radius: MotionValue<number>;
  children: React.ReactNode;
}) => (
  <section ref={sectionRef} id="hero" className="relative h-[100svh] min-h-[620px] bg-white">
    <motion.div
      className="absolute inset-0 origin-top overflow-hidden text-white"
      style={{ scale, borderRadius: radius }}
    >
      <GradientField />
      {children}
    </motion.div>
  </section>
);

const Headline = ({
  copy,
  className,
  secondClass = "text-lilac",
}: {
  copy: HomeCopy["hero"];
  className: string;
  secondClass?: string;
}) => (
  <h1 className={className}>
    <span className="hero-slide-in block" style={{ animationDelay: "0.1s" }}>
      {copy.line1}
    </span>
    <span className={`hero-slide-in block ${secondClass}`} style={{ animationDelay: "0.25s" }}>
      {copy.line2}
    </span>
  </h1>
);

const HeroType = ({ copy, onCta }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const m = useHeroMotion(ref);
  const textScale = useTransform(m.p, [0, 1], [1, m.calm ? 1 : 0.86]);

  return (
    <Shell sectionRef={ref} scale={m.scale} radius={m.radius}>
      <motion.div
        style={{ scale: textScale, opacity: m.fade }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-5 pb-16 pt-24 text-center sm:px-8"
      >
        <Headline
          copy={copy}
          className="max-w-[16ch] text-[2.6rem] font-semibold leading-[0.95] tracking-[-0.055em] sm:max-w-[20ch] sm:text-6xl lg:max-w-[22ch] lg:text-[5.2rem] xl:text-[6rem]"
        />
        <div className="hero-fade-up mt-10" style={{ animationDelay: "0.5s" }}>
          <ActionButton tone="white" onClick={onCta}>
            {copy.cta}
          </ActionButton>
        </div>
      </motion.div>
    </Shell>
  );
};

export const Hero = (props: Props) => <HeroType {...props} />;
