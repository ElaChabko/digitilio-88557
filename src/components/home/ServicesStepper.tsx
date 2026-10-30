import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Compass, LifeBuoy, Rocket, ScanSearch, type LucideIcon } from "lucide-react";

import type { HomeCopy, ServiceIcon } from "@/content/home";
import { EASE, Pill, useCalmMotion } from "@/components/site/motion";

const ICONS: Record<ServiceIcon, LucideIcon> = {
  diagnosis: ScanSearch,
  strategy: Compass,
  implementation: Rocket,
  support: LifeBuoy,
};

// Delikatnie różne odcienie fioletu dla kolejnych kroków
const SHADES = [
  "linear-gradient(150deg, hsl(262 46% 32%), hsl(266 50% 46%))",
  "linear-gradient(150deg, hsl(264 48% 36%), hsl(272 52% 52%))",
  "linear-gradient(150deg, hsl(258 44% 34%), hsl(250 46% 52%))",
  "linear-gradient(150deg, hsl(268 46% 30%), hsl(284 44% 50%))",
];

/**
 * Usługi: przypięta fioletowa sekcja z krokami 01–04 przełączanymi przewijaniem
 * (jak sekcja „One App” na jeton.com).
 */
export const ServicesStepper = ({ copy }: { copy: HomeCopy["services"] }) => {
  const ref = useRef<HTMLElement | null>(null);
  const calm = useCalmMotion();
  const [active, setActive] = useState(0);
  const n = copy.items.length;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(n - 1, Math.max(0, Math.floor(v * n)));
    setActive((prev) => (prev === next ? prev : next));
  });

  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const travel = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + travel * ((i + 0.5) / n), behavior: "smooth" });
  };

  const item = copy.items[active];
  const Icon = ICONS[item.icon];

  if (calm) {
    return (
      <section id="services" className="bg-violet px-5 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <Pill tone="light">{copy.pill}</Pill>
          <h2 className="mt-6 text-5xl font-semibold tracking-[-0.04em]">{copy.title}</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {copy.items.map((s) => (
              <div key={s.title} className="rounded-3xl bg-white/10 p-8">
                <h3 className="text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-white/80">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="services" className="relative bg-white" style={{ height: `${n * 85 + 60}vh` }}>
      {/* Pełna lista usług dla czytników ekranu i wyszukiwarek (na ekranie widać jedną naraz) */}
      <ul className="sr-only">
        {copy.items.map((s) => (
          <li key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </li>
        ))}
      </ul>

      <div className="sticky top-0 h-[100svh] overflow-hidden text-white">
        {/* Tło zmieniające odcień */}
        {SHADES.slice(0, n).map((bg, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{ background: bg }}
            initial={false}
            animate={{ opacity: i === active ? 1 : 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          />
        ))}

        <div className="relative mx-auto grid h-full max-w-[1500px] grid-cols-1 content-center gap-6 px-5 pb-40 pt-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:px-12 lg:pb-24">
          {/* Lewa kolumna */}
          <div>
            <Pill tone="light">{copy.pill}</Pill>
            <h2 className="mt-6 max-w-xl text-[1.9rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[4.2rem]">
              {copy.title}
            </h2>
            <p className="mt-6 hidden max-w-md text-lg leading-relaxed text-white/80 sm:block">
              {copy.lead}
            </p>
          </div>

          {/* Karta usługi */}
          <div className="relative min-h-[270px] sm:min-h-[360px] lg:min-h-[440px]" aria-hidden="true">
            <AnimatePresence mode="wait">
              <motion.article
                key={active}
                initial={{ opacity: 0, y: 50, rotate: 2, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, rotate: -2, scale: 0.96 }}
                transition={{ duration: 0.55, ease: EASE }}
                className="absolute inset-0 flex flex-col overflow-hidden rounded-[2rem] bg-white/[0.1] p-7 ring-1 ring-white/20 backdrop-blur-md sm:p-10"
              >
                <span
                  className="pointer-events-none absolute -right-4 -top-10 select-none text-[11rem] font-semibold leading-none tracking-[-0.06em] text-white/[0.07] sm:text-[14rem]"
                  aria-hidden="true"
                >
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-violet">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-auto pt-6 text-[1.6rem] sm:pt-10 font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/85 sm:mt-4 sm:text-lg">
                  {item.description}
                </p>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        {/* Zakładki 01–04 i pasek postępu */}
        <div className="absolute inset-x-0 bottom-24 px-5 sm:px-8 lg:bottom-8 lg:px-12">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-4 h-px w-full bg-white/20">
              <motion.div className="h-px bg-white" style={{ width: progressWidth }} />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {copy.items.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`flex items-center gap-2 rounded-full border p-1 text-sm font-medium sm:pr-3 transition-all duration-300 ${
                    i === active
                      ? "border-white bg-white text-violet"
                      : "border-white/30 text-white/70 hover:border-white/60 hover:text-white"
                  }`}
                  aria-label={s.title}
                  aria-current={i === active}
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-xs ${
                      i === active ? "bg-violet text-white" : "border border-white/40"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="hidden sm:inline">{s.title}</span>
                </button>
              ))}
            </div>
            <p className="mt-4 hidden text-sm text-white/70 lg:block">{copy.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
