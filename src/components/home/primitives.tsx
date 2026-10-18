import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  animate,
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Mała etykieta nad nagłówkiem: wersaliki, szeroki odstęp, kwadracik w kolorze marki */
export const Eyebrow = ({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) => (
  <p
    className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] sm:text-[13px] ${
      tone === "light" ? "text-white/60" : "text-foreground/55"
    } ${className}`}
  >
    <span
      className={`h-2 w-2 shrink-0 ${
        tone === "light" ? "bg-[hsl(270_60%_75%)]" : "bg-primary"
      }`}
      aria-hidden="true"
    />
    {children}
  </p>
);

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {children}
    </motion.span>
  );
};

/**
 * Nagłówek, który „wywołuje się” przy przewijaniu – słowo po słowie
 * przechodzi z bladego w pełny kolor (jak na moovo.ai).
 */
export const RevealText = ({
  text,
  as: Tag = "h2",
  className = "",
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.35"],
  });

  const words = text.split(" ");

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <span key={i}>
            <Word progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </Tag>
  );
};

/**
 * Liczba odliczająca się w górę, gdy pojawi się na ekranie.
 * W HTML z buildu jest od razu pełna wartość (dla robotów i bez JS).
 */
export const CountUp = ({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) => {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? Number(match[2]) : 0;
  const suffix = match?.[3] ?? "";

  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(target);
  const started = useRef(false);

  // Po załadowaniu JS zaczynamy od zera, dopóki liczba nie wejdzie w widok
  useEffect(() => {
    if (!match) return;
    if (!started.current && !inView) setDisplay(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!match || !inView || started.current) return;
    started.current = true;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (!match) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

/** Pojawianie się elementu przy przewijaniu */
export const FadeIn = ({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay, ease: EASE }}
    className={className}
  >
    {children}
  </motion.div>
);

/** Oznaczenie miejsca, na które czeka materiał (logo, zdjęcie, opinia) */
export const PlaceholderTag = ({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) => (
  <span
    className={`inline-flex items-center rounded-full border border-dashed px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] ${
      tone === "light"
        ? "border-white/30 text-white/50"
        : "border-foreground/25 text-foreground/45"
    }`}
  >
    {children}
  </span>
);
