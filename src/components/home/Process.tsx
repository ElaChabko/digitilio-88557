import { ClipboardList, ListOrdered, Rocket, Search, type LucideIcon } from "lucide-react";

import type { HomeCopy, StepIcon } from "@/content/home";
import { FadeUp, Pill } from "@/components/site/motion";

const ICONS: Record<StepIcon, LucideIcon> = {
  search: Search,
  priority: ListOrdered,
  plan: ClipboardList,
  rocket: Rocket,
};

const COLORS = [
  { tile: "bg-violet", text: "text-violet" },
  { tile: "bg-orchid", text: "text-orchid" },
  { tile: "bg-indigo", text: "text-indigo" },
  { tile: "bg-violet-bright", text: "text-violet-bright" },
];

/** Jak pracuję: cztery kroki obok siebie (bez przypinania) */
export const Process = ({ copy }: { copy: HomeCopy["process"] }) => (
  <section id="process" className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
    <div className="mx-auto max-w-[1400px]">
      <div className="max-w-3xl">
        <Pill>{copy.pill}</Pill>
        <h2 className="mt-6 text-[2.1rem] font-semibold leading-[1.03] tracking-[-0.045em] text-violet sm:text-5xl lg:text-6xl">
          {copy.title}
        </h2>
      </div>

      <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
        {copy.steps.map((step, i) => {
          const Icon = ICONS[step.icon];
          const color = COLORS[i % COLORS.length];
          return (
            <FadeUp as="li" key={step.word} delay={i * 0.05} className="border-t border-violet/15 pt-6">
              <div className="flex items-center gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-2xl text-white ${color.tile}`}>
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="text-sm font-semibold tabular-nums text-foreground/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className={`mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl ${color.text}`}>
                {step.word}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{step.description}</p>
            </FadeUp>
          );
        })}
      </ol>

      <p className="mt-14 max-w-3xl text-xl font-medium leading-snug tracking-[-0.01em] text-foreground sm:text-2xl">
        {copy.closing}
      </p>
    </div>
  </section>
);
