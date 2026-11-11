import { Check } from "lucide-react";

import type { HomeCopy } from "@/content/home";
import { FadeUp, Pill } from "@/components/site/motion";

const TILES = ["bg-violet", "bg-orchid", "bg-indigo", "bg-violet-bright"];

/** Korzyści: wiersze z „ptaszkami” */
export const Benefits = ({ copy }: { copy: HomeCopy["benefits"] }) => (
  <section id="benefits" className="bg-lilac-soft px-5 py-24 sm:px-8 sm:py-32">
    <div className="mx-auto max-w-6xl">
      <div className="text-center">
        <FadeUp>
          <Pill>{copy.pill}</Pill>
        </FadeUp>
        <h2 className="mx-auto mt-6 max-w-4xl text-[2.1rem] font-semibold leading-[1.03] tracking-[-0.045em] text-violet sm:text-5xl lg:text-6xl">
          {copy.title}
        </h2>
      </div>

      <ul className="mt-14 divide-y divide-violet/15 border-y border-violet/15">
        {copy.items.map((item, i) => (
          <li key={item.title} className="grid grid-cols-1 items-center gap-4 py-7 sm:grid-cols-[auto_1fr_1fr] sm:gap-8 sm:py-8">
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white sm:h-14 sm:w-14 ${TILES[i % TILES.length]}`}
            >
              <Check className="h-6 w-6" strokeWidth={3} />
            </span>
            <h3
              className="text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl lg:text-4xl"
            >
              {item.title}
            </h3>
            <p
              className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {item.description}
            </p>
          </li>
        ))}
      </ul>

      <FadeUp className="mx-auto mt-14 max-w-3xl text-center">
        <p className="text-xl leading-relaxed text-foreground/80 sm:text-2xl">{copy.closing}</p>
      </FadeUp>
    </div>
  </section>
);
