import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ClipboardList, ListOrdered, Rocket, Search, type LucideIcon } from "lucide-react";

import type { HomeCopy, StepIcon } from "@/content/home";
import { Pill, useCalmMotion } from "@/components/site/motion";

const ICONS: Record<StepIcon, LucideIcon> = {
  search: Search,
  priority: ListOrdered,
  plan: ClipboardList,
  rocket: Rocket,
};

// Każde słowo w innym odcieniu z palety marki (jak Add / Send / Exchange)
const COLORS = [
  { tile: "bg-violet", text: "text-violet" },
  { tile: "bg-orchid", text: "text-orchid" },
  { tile: "bg-indigo", text: "text-indigo" },
  { tile: "bg-violet-bright", text: "text-violet-bright" },
];

const Row = ({
  step,
  index,
  total,
  progress,
}: {
  step: HomeCopy["process"]["steps"][number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) => {
  const start = 0.08 + (index / total) * 0.62;
  const end = start + 0.12;
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [70, 0]);
  const scale = useTransform(progress, [start, end], [0.85, 1]);
  const Icon = ICONS[step.icon];
  const color = COLORS[index % COLORS.length];

  return (
    <motion.li style={{ opacity, y, scale }} className="flex flex-col items-center">
      <div className="flex items-center gap-3 sm:gap-5">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white sm:h-16 sm:w-16 sm:rounded-[1.2rem] lg:h-20 lg:w-20 ${color.tile}`}
        >
          <Icon className="h-5 w-5 sm:h-7 sm:w-7 lg:h-9 lg:w-9" strokeWidth={2} />
        </span>
        <span
          className={`text-[3.1rem] font-semibold leading-none tracking-[-0.05em] sm:text-7xl lg:text-[6.5rem] ${color.text}`}
        >
          {step.word}
        </span>
      </div>
      <p className="mt-2 max-w-md text-center text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
        {step.description}
      </p>
    </motion.li>
  );
};

export const ProcessWords = ({ copy }: { copy: HomeCopy["process"] }) => {
  const ref = useRef<HTMLElement | null>(null);
  const calm = useCalmMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const closingOpacity = useTransform(scrollYProgress, [0.86, 0.96], [0, 1]);

  if (calm) {
    return (
      <section id="process" className="bg-white px-5 py-24 text-center">
        <Pill>{copy.pill}</Pill>
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-foreground">
          {copy.title}
        </h2>
        <ol className="mt-12 space-y-8">
          {copy.steps.map((s) => (
            <li key={s.word}>
              <p className="text-5xl font-semibold text-violet">{s.word}</p>
              <p className="mx-auto mt-2 max-w-md text-muted-foreground">{s.description}</p>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  return (
    <section ref={ref} id="process" className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-20 text-center sm:px-8">
        <Pill>{copy.pill}</Pill>
        <h2 className="mt-4 max-w-2xl text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">
          {copy.title}
        </h2>

        <ol className="mt-8 space-y-4 sm:mt-10 sm:space-y-6">
          {copy.steps.map((step, i) => (
            <Row key={step.word} step={step} index={i} total={copy.steps.length} progress={scrollYProgress} />
          ))}
        </ol>

        <motion.p
          style={{ opacity: closingOpacity }}
          className="mt-8 hidden max-w-2xl text-lg font-medium leading-snug text-violet sm:block"
        >
          {copy.closing}
        </motion.p>
      </div>
    </section>
  );
};
