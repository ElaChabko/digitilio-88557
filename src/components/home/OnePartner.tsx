import { FadeUp, Pill, ScrollText } from "@/components/site/motion";

type Props = {
  pill: string;
  text: string;
  facts: { value: string; label: string }[];
};

/**
 * Scena wyróżnika na stronie głównej: tekst „wywoływany” słowo po słowie
 * (ta sama animacja co „Znasz ten scenariusz?”) i trzy krótkie fakty.
 */
export const OnePartner = ({ pill, text, facts }: Props) => (
  <section className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
    <div className="mx-auto max-w-[1400px]">
      <Pill>{pill}</Pill>
      <ScrollText
        as="h2"
        text={text}
        className="mt-8 max-w-5xl text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.04em] text-violet sm:text-5xl lg:text-[4rem]"
      />
      <div className="mt-14 grid grid-cols-1 gap-6 border-t border-violet/15 pt-10 sm:grid-cols-3">
        {facts.map((f, i) => (
          <FadeUp key={f.label} delay={i * 0.06}>
            <p className="text-4xl font-semibold tracking-[-0.05em] text-violet sm:text-5xl">{f.value}</p>
            <p className="mt-2 text-base text-muted-foreground">{f.label}</p>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);
