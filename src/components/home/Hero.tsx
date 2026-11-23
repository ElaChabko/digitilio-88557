import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

import type { HomeCopy } from "@/content/home";
import { Link } from "react-router-dom";

import { TOPICS, type TopicId } from "@/content/topics";
import { GradientField } from "@/components/site/GradientField";
import { useCalmMotion } from "@/components/site/motion";

/**
 * Hero „Typografia”: duże hasło na środku, na płynnym fiolecie.
 * Strona główna PL: pod hasłem dwoje drzwi do filarów (Marketing / Systemy dla firm).
 * Wersja EN: pigułki z tematami, które otwierają formularz z wybranym tematem. Przy przewijaniu hasło się zmniejsza, a karta zaokrągla.
 */
export type HeroDoor = {
  tone: "marketing" | "systems";
  eyebrow: string;
  title: string;
  chips: string[];
  href: string;
};

type Props = {
  copy: HomeCopy["hero"];
  lang?: "pl" | "en";
  onCta: (topic?: TopicId) => void;
  /** Strona główna PL: dwoje „drzwi” do filarów zamiast pigułek z tematami */
  doors?: HeroDoor[];
  /** Tekst linku pod drzwiami (otwiera formularz) */
  doorsHelp?: string;
};

/** Duże drzwi do filaru: kolor mówi, dokąd prowadzą */
const Door = ({ door }: { door: HeroDoor }) => {
  const sys = door.tone === "systems";
  return (
    <Link
      to={door.href}
      className={`group flex items-center gap-4 rounded-[1.6rem] p-4 text-left transition-transform duration-300 hover:-translate-y-1 sm:rounded-[2rem] sm:p-6 ${
        sys ? "bg-sys-deep/85 text-white ring-1 ring-white/20 backdrop-blur-sm" : "bg-white text-violet"
      }`}
    >
      <span className="min-w-0 flex-1">
        <span className={`block text-xs font-semibold uppercase tracking-[0.12em] ${sys ? "text-sys-light" : "text-violet/60"}`}>
          {door.eyebrow}
        </span>
        <span className="mt-1.5 block text-lg font-semibold leading-tight tracking-[-0.02em] sm:mt-2 sm:text-2xl">
          {door.title}
        </span>
        <span className={`mt-3 hidden flex-wrap gap-1.5 sm:flex`}>
          {door.chips.map((chip) => (
            <span
              key={chip}
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${sys ? "bg-white/10 text-white/85" : "bg-lilac-soft text-violet"}`}
            >
              {chip}
            </span>
          ))}
        </span>
      </span>
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1 sm:h-12 sm:w-12 ${
          sys ? "bg-white text-sys-deep" : "bg-violet text-white"
        }`}
        aria-hidden="true"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
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
  <section ref={sectionRef} id="hero" className="relative bg-white">
    <motion.div
      className="relative flex min-h-[100svh] origin-top flex-col overflow-hidden text-white"
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

const HeroType = ({ copy, onCta, lang = "pl", doors, doorsHelp }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const m = useHeroMotion(ref);
  const textScale = useTransform(m.p, [0, 1], [1, m.calm ? 1 : 0.86]);

  return (
    <Shell sectionRef={ref} scale={m.scale} radius={m.radius}>
      <motion.div
        style={{ scale: textScale, opacity: m.fade }}
        className="relative z-10 flex min-h-[100svh] flex-1 flex-col items-center justify-center px-4 pb-24 pt-24 text-center sm:px-8 sm:pb-24 sm:pt-28"
      >
        <Headline
          copy={copy}
          className="max-w-full text-[clamp(1.45rem,7.4vw,2.2rem)] font-semibold leading-[0.98] tracking-[-0.05em] sm:max-w-[20ch] sm:text-6xl lg:max-w-[22ch] lg:text-[4.6rem] xl:text-[5.2rem]"
        />
        <p
          className="hero-fade-up mt-5 max-w-2xl text-[15px] leading-relaxed text-white/85 sm:mt-8 sm:text-xl"
          style={{ animationDelay: "0.4s" }}
        >
          {copy.lead}
        </p>

        {doors ? (
          <div className="hero-fade-up mt-6 w-full max-w-4xl sm:mt-10" style={{ animationDelay: "0.55s" }}>
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
              {doors.map((door) => (
                <Door key={door.href} door={door} />
              ))}
            </div>
            <p className="mt-4 text-xs text-white/65 sm:mt-6 sm:text-sm">
              {copy.note}
              {doorsHelp && (
                <>
                  {" · "}
                  <button
                    type="button"
                    onClick={() => onCta()}
                    className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
                  >
                    {doorsHelp}
                  </button>
                </>
              )}
            </p>
          </div>
        ) : (
        <div className="hero-fade-up mt-6 w-full max-w-3xl sm:mt-10" style={{ animationDelay: "0.55s" }}>
          <p className="text-sm font-semibold text-white/70">{copy.topicsLabel}</p>
          <ul className="mt-3 flex flex-wrap justify-center gap-2 sm:mt-4 sm:gap-3">
            {TOPICS.map((topic) => (
              <li key={topic.id}>
                <button
                  type="button"
                  onClick={() => onCta(topic.id)}
                  className="group inline-flex items-center gap-2 rounded-full bg-white/[0.12] px-3.5 py-2 text-left text-[13px] font-semibold leading-tight text-white ring-1 ring-white/25 backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-violet sm:px-5 sm:py-3 sm:text-base"
                >
                  {topic[lang]}
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-white/60 sm:mt-5 sm:text-sm">{copy.note}</p>
        </div>
        )}
      </motion.div>
    </Shell>
  );
};

export const Hero = (props: Props) => <HeroType {...props} />;
