import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

/** Wspólna krzywa animacji całej strony */
export const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Czy użytkownik prosi o ograniczenie ruchu (systemowe ustawienie).
 * Do momentu załadowania strony zwraca false, żeby HTML z buildu
 * i pierwsze renderowanie w przeglądarce były identyczne.
 */
export const useCalmMotion = () => {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && Boolean(reduced);
};

/** Etykieta w pigułce nad nagłówkiem (jak „Jeton Card”) */
export const Pill = ({
  children,
  tone = "brand",
  className = "",
}: {
  children: ReactNode;
  tone?: "brand" | "light";
  className?: string;
}) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium ${
      tone === "light"
        ? "border-white/30 text-white/90"
        : "border-violet/25 text-violet"
    } ${className}`}
  >
    <span
      className={`h-1.5 w-1.5 rounded-full ${tone === "light" ? "bg-lilac" : "bg-violet"}`}
      aria-hidden="true"
    />
    {children}
  </span>
);

/** Pojawienie się przy przewijaniu */
export const FadeUp = ({
  children,
  delay = 0,
  y = 32,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "article";
}) => {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Comp>
  );
};

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
};

/**
 * Tekst „wywoływany” słowo po słowie przy przewijaniu.
 */
export const ScrollText = ({
  text,
  as: Tag = "p",
  className = "",
  offset = ["start 0.85", "start 0.3"],
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  offset?: [string, string];
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as never,
  });
  const calm = useCalmMotion();
  const words = text.split(" ");

  if (calm) return <Tag className={className}>{text}</Tag>;

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        return (
          <span key={i}>
            <Word progress={scrollYProgress} range={[start, start + 1 / words.length]}>
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
 * Liczba odliczająca się w górę po wejściu w widok.
 * W HTML z buildu jest od razu pełna wartość.
 */
export const CountUp = ({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) => {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const target = match ? Number(match[2]) : 0;
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(target);
  const started = useRef(false);

  useEffect(() => {
    if (match && !inView && !started.current) setDisplay(0);
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
      {match[1]}
      {display}
      {match[3]}
    </span>
  );
};

/** Oznaczenie miejsca czekającego na materiał */
export const PlaceholderTag = ({
  children,
  tone = "brand",
}: {
  children: ReactNode;
  tone?: "brand" | "light";
}) => (
  <span
    className={`inline-flex items-center rounded-full border border-dashed px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${
      tone === "light" ? "border-white/35 text-white/60" : "border-violet/35 text-violet/70"
    }`}
  >
    {children}
  </span>
);

/** Przycisk-link w stylu strony (biały lub fioletowy) */
export const ActionButton = ({
  children,
  onClick,
  href,
  tone = "violet",
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  tone?: "violet" | "white";
  className?: string;
}) => {
  const cls = `group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-base font-semibold transition-all duration-300 hover:gap-4 ${
    tone === "white"
      ? "bg-white text-violet hover:bg-lilac-soft"
      : "bg-violet text-white hover:bg-violet-bright"
  } ${className}`;
  const arrow = (
    <span
      className={`flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-[-45deg] ${
        tone === "white" ? "bg-violet text-white" : "bg-white text-violet"
      }`}
      aria-hidden="true"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
        {arrow}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
      {arrow}
    </button>
  );
};
