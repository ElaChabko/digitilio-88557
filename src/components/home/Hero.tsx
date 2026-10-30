import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

import heroPortrait from "@/assets/hero-portrait.webp";
import type { HomeCopy } from "@/content/home";
import { GradientField } from "@/components/site/GradientField";
import { ActionButton, useCalmMotion } from "@/components/site/motion";

/**
 * Hero – trzy warianty do wyboru (podgląd: ?hero=a, ?hero=b, ?hero=c):
 *  a) „Portret”    – hasło po lewej, Ela po prawej na płynnym fiolecie
 *  b) „Typografia” – samo duże hasło na środku
 *  c) „Okładka”    – układ okładki magazynu: hasło za i przed portretem
 * We wszystkich: tylko hasło i jeden przycisk.
 */
export type HeroVariant = "a" | "b" | "c";

type Props = {
  copy: HomeCopy["hero"];
  onCta: () => void;
  variant?: HeroVariant;
};

const useHeroMotion = (ref: React.RefObject<HTMLElement>) => {
  const calm = useCalmMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  return {
    p: scrollYProgress,
    calm,
    scale: useTransform(scrollYProgress, [0, 1], [1, calm ? 1 : 0.9]),
    radius: useTransform(scrollYProgress, [0, 1], [0, calm ? 0 : 56]),
    textY: useTransform(scrollYProgress, [0, 1], [0, calm ? 0 : -140]),
    fade: useTransform(scrollYProgress, [0, 0.7], [1, 0]),
    photoY: useTransform(scrollYProgress, [0, 1], [0, calm ? 0 : 90]),
    photoScale: useTransform(scrollYProgress, [0, 1], [1, calm ? 1 : 1.06]),
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

/* ---------- A: Portret ---------- */
const HeroPortrait = ({ copy, onCta }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const m = useHeroMotion(ref);

  return (
    <Shell sectionRef={ref} scale={m.scale} radius={m.radius}>
      <motion.img
        src={heroPortrait}
        alt="Ela Chabko – Digitilio"
        width={1080}
        height={1350}
        loading="eager"
        decoding="async"
        {...{ fetchpriority: "high" }}
        style={{ y: m.photoY, scale: m.photoScale }}
        className="hero-scale-in absolute bottom-0 right-[-14vw] h-[52svh] w-auto max-w-none origin-bottom object-contain sm:right-[-4vw] sm:h-[62svh] lg:right-[4vw] lg:h-[94%]"
      />

      <motion.div
        style={{ y: m.textY, opacity: m.fade }}
        className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col px-5 pt-28 sm:px-8 lg:justify-end lg:px-12 lg:pb-24 lg:pt-0"
      >
        <Headline
          copy={copy}
          className="max-w-[18ch] text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.05em] sm:text-7xl lg:max-w-[60%] lg:text-[5.4rem] xl:text-[6.2rem]"
        />
        <div className="hero-fade-up mt-8 lg:mt-10" style={{ animationDelay: "0.5s" }}>
          <ActionButton tone="white" onClick={onCta}>
            {copy.cta}
          </ActionButton>
        </div>
      </motion.div>
    </Shell>
  );
};

/* ---------- B: Typografia ---------- */
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

/* ---------- C: Okładka ---------- */
const HeroCover = ({ copy, onCta }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const m = useHeroMotion(ref);
  const backY = useTransform(m.p, [0, 1], [0, m.calm ? 0 : -60]);

  return (
    <Shell sectionRef={ref} scale={m.scale} radius={m.radius}>
      {/* Pierwsza linia – ZA portretem */}
      <motion.p
        aria-hidden="true"
        style={{ y: backY }}
        className="hero-slide-in absolute inset-x-0 top-[13svh] z-0 px-5 text-center text-[11.2vw] font-semibold uppercase leading-[0.88] tracking-[-0.06em] text-white/95 sm:top-[12svh] lg:top-[10svh] lg:text-[8.6vw]"
      >
        {copy.line1.replace(/\.$/, "")}
      </motion.p>

      <div className="absolute inset-x-0 bottom-0 z-10 flex h-[66svh] justify-center lg:h-[84%]">
        <motion.img
          src={heroPortrait}
          alt="Ela Chabko – Digitilio"
          width={1080}
          height={1350}
          loading="eager"
          decoding="async"
          {...{ fetchpriority: "high" }}
          style={{ y: m.photoY, scale: m.photoScale }}
          className="hero-scale-in h-full w-auto max-w-none origin-bottom object-contain"
        />
      </div>

      {/* Druga linia + przycisk – PRZED portretem */}
      <motion.div
        style={{ y: m.textY, opacity: m.fade }}
        className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[hsl(262_46%_24%/0.85)] via-[hsl(262_46%_24%/0.35)] to-transparent px-5 pb-24 pt-24 sm:px-8 lg:px-12 lg:pb-28"
      >
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="max-w-[20ch] text-[2.2rem] font-semibold leading-[1] tracking-[-0.045em] sm:text-5xl lg:text-[3.6rem]">
            <span className="sr-only">{copy.line1} </span>
            <span className="hero-slide-in block text-lilac" style={{ animationDelay: "0.3s" }}>
              {copy.line2}
            </span>
          </h1>
          <div className="hero-fade-up shrink-0" style={{ animationDelay: "0.5s" }}>
            <ActionButton tone="white" onClick={onCta}>
              {copy.cta}
            </ActionButton>
          </div>
        </div>
      </motion.div>
    </Shell>
  );
};

export const Hero = ({ variant = "a", ...props }: Props) => {
  if (variant === "b") return <HeroType {...props} />;
  if (variant === "c") return <HeroCover {...props} />;
  return <HeroPortrait {...props} />;
};
