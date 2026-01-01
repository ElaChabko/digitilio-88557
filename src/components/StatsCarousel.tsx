import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type StatItem = {
  value: string;   // np. "40+"
  label: string;   // np. "marek"
  hint?: string;   // np. "z Polski i UE"
};

type StatsCarouselProps = {
  items?: StatItem[];
  intervalMs?: number;
  className?: string;
};

export const StatsCarousel = ({
  items,
  intervalMs = 3500,
  className = "",
}: StatsCarouselProps) => {
  const prefersReducedMotion = useReducedMotion();

  const data = useMemo<StatItem[]>(
    () =>
      items ?? [
        { value: "20+", label: "marek", hint: "projekty B2B i B2C" },
        { value: "25+", label: "przeprowadzonych szkoleń", hint: "online i stacjonarnie" },
        { value: "8+", label: "lat doświadczeń", hint: "strategia i content" },
      ],
    [items]
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (data.length <= 1) return;
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, intervalMs);

    return () => clearInterval(t);
  }, [data.length, intervalMs]);

  const current = data[index];

  const variants = {
    enter: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: prefersReducedMotion ? 0 : -10 },
  };

  return (
    <div className={className}>
      <div className="relative overflow-hidden rounded-2xl border bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 shadow-sm">
        <div className="px-5 py-4 md:px-6 md:py-5">
          <div className="flex items-center justify-between gap-4">
            <div className="min-h-[64px] md:min-h-[72px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: prefersReducedMotion ? 0 : 0.35 }}
                >
                  <div className="flex items-baseline gap-3">
                    <div className="text-3xl md:text-4xl font-semibold tracking-tight text-[#3E2C6D]">
                      {current.value}
                    </div>
                    <div className="text-base md:text-lg font-medium text-slate-900">
                      {current.label}
                    </div>
                  </div>
                  {current.hint ? (
                    <div className="mt-1 text-sm text-slate-500">{current.hint}</div>
                  ) : null}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {data.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Pokaż statystykę ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={[
                    "h-2.5 rounded-full transition-all",
                    i === index ? "w-7 bg-[#3E2C6D]" : "w-2.5 bg-slate-300 hover:bg-slate-400",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* opcjonalnie: mały dopisek pod boxem */}
      <div className="mt-2 text-xs text-slate-400">
        Dane orientacyjne. Dopasuję je do aktualnego portfolio.
      </div>
    </div>
  );
};
