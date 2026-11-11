import type { HomeCopy } from "@/content/home";
import { FadeUp, Pill } from "@/components/site/motion";

const THEMES = [
  "bg-lilac-soft text-foreground",
  "bg-violet text-white",
  "bg-lilac text-plum",
  "bg-plum text-white",
];

/** Dla kogo: cztery karty w siatce (bez przypinania) */
export const ForWhom = ({ copy }: { copy: HomeCopy["forWhom"] }) => (
  <section id="for-whom" className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
    <div className="mx-auto max-w-[1400px]">
      <div className="mx-auto max-w-4xl text-center">
        <Pill>{copy.pill}</Pill>
        <h2 className="mt-6 text-[2.1rem] font-semibold leading-[1.05] tracking-[-0.045em] text-violet sm:text-5xl lg:text-6xl">
          {copy.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{copy.lead}</p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
        {copy.items.map((item, i) => {
          const theme = THEMES[i % THEMES.length];
          const dark = theme.includes("text-white");
          return (
            <FadeUp key={item.title} delay={(i % 2) * 0.06}>
              <article className={`flex h-full flex-col rounded-[2rem] p-8 sm:p-10 ${theme}`}>
                <span className={`text-sm font-semibold ${dark ? "text-lilac" : "text-violet"}`}>{item.eyebrow}</span>
                <h3 className="mt-10 text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl">
                  {item.title}
                </h3>
                <p className={`mt-3 text-base leading-relaxed ${dark ? "text-white/80" : "text-muted-foreground"}`}>
                  {item.description}
                </p>
              </article>
            </FadeUp>
          );
        })}
      </div>

      {copy.statement && (
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <p className="text-2xl font-semibold leading-snug tracking-[-0.03em] text-violet sm:text-4xl">
            {copy.statement.title}
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{copy.statement.text}</p>
        </div>
      )}
    </div>
  </section>
);
