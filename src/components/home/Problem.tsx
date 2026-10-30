import type { HomeCopy } from "@/content/home";
import { FadeUp, Pill, ScrollText } from "@/components/site/motion";

/** Wyśrodkowane hasła w kolorze marki, wywoływane słowo po słowie (jak „Contactless payments? Sure.”) */
export const Problem = ({ copy }: { copy: HomeCopy["problem"] }) => (
  <section id="problem" className="bg-white px-5 py-28 sm:px-8 sm:py-36 lg:py-44">
    <div className="mx-auto max-w-5xl text-center">
      <FadeUp>
        <Pill>{copy.pill}</Pill>
      </FadeUp>

      <div className="mt-10 space-y-2 sm:mt-12">
        {copy.lines.map((line) => (
          <ScrollText
            key={line}
            as="h2"
            text={line}
            offset={["start 0.9", "start 0.55"]}
            className="text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.035em] text-violet sm:text-5xl lg:text-[4.25rem]"
          />
        ))}
      </div>

      <FadeUp delay={0.1} className="mx-auto mt-14 max-w-2xl">
        <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">{copy.lead}</p>
      </FadeUp>
    </div>
  </section>
);
