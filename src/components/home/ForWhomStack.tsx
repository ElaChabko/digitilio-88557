import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

import type { HomeCopy } from "@/content/home";
import { FadeUp, Pill, ScrollText, useCalmMotion } from "@/components/site/motion";

// Karty w kolejnych odcieniach – układają się w stos przy przewijaniu
const THEMES = [
  "bg-lilac-soft text-foreground",
  "bg-violet text-white",
  "bg-lilac text-plum",
  "bg-plum text-white",
];

const StackCard = ({
  item,
  index,
  total,
  progress,
}: {
  item: HomeCopy["forWhom"]["items"][number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) => {
  const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - index) * 0.04]);
  const dark = THEMES[index % THEMES.length].includes("text-white");

  return (
    <div className="sticky" style={{ top: `calc(14vh + ${index * 26}px)` }}>
      <motion.article
        style={{ scale }}
        className={`mx-auto flex min-h-[46vh] max-w-5xl origin-top flex-col justify-between rounded-[2.2rem] p-8 shadow-[0_-20px_60px_-30px_hsl(263_40%_20%/0.35)] sm:p-12 lg:min-h-[52vh] ${THEMES[index % THEMES.length]}`}
      >
        <div className="flex items-start justify-between gap-4">
          <span className={`text-sm font-semibold ${dark ? "text-lilac" : "text-violet"}`}>{item.eyebrow}</span>
          <span className={`text-sm font-semibold tabular-nums ${dark ? "text-white/50" : "text-violet/50"}`}>
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
        <div className="mt-16">
          <h3 className="max-w-3xl text-[2rem] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {item.title}
          </h3>
          <p className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${dark ? "text-white/80" : "text-muted-foreground"}`}>
            {item.description}
          </p>
        </div>
      </motion.article>
    </div>
  );
};

export const ForWhomStack = ({ copy }: { copy: HomeCopy["forWhom"] }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const calm = useCalmMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="for-whom" className="bg-white px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <FadeUp>
          <Pill>{copy.pill}</Pill>
        </FadeUp>
        <ScrollText
          as="h2"
          text={copy.title}
          className="mt-6 text-[2.1rem] font-semibold leading-[1.05] tracking-[-0.045em] text-violet sm:text-5xl lg:text-6xl"
        />
        <FadeUp className="mx-auto mt-6 max-w-2xl">
          <p className="text-lg leading-relaxed text-muted-foreground">{copy.lead}</p>
        </FadeUp>
      </div>

      <div ref={ref} className={`mt-16 ${calm ? "space-y-4" : "space-y-[12vh]"}`}>
        {copy.items.map((item, i) =>
          calm ? (
            <article key={item.title} className={`mx-auto max-w-5xl rounded-[2rem] p-8 ${THEMES[i % THEMES.length]}`}>
              <h3 className="text-3xl font-semibold">{item.title}</h3>
              <p className="mt-3">{item.description}</p>
            </article>
          ) : (
            <StackCard key={item.title} item={item} index={i} total={copy.items.length} progress={scrollYProgress} />
          )
        )}
      </div>

      {copy.statement && (
        <FadeUp className="mx-auto mt-24 max-w-4xl text-center">
          <p className="text-2xl font-semibold leading-snug tracking-[-0.03em] text-violet sm:text-4xl">
            {copy.statement.title}
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{copy.statement.text}</p>
        </FadeUp>
      )}
    </section>
  );
};
