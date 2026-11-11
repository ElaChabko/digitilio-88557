import type { HomeCopy } from "@/content/home";
import { GradientField } from "@/components/site/GradientField";
import { FadeUp, Pill } from "@/components/site/motion";

/** Usługi: fioletowa sekcja z czterema kartami (bez przypinania) */
export const Services = ({ copy }: { copy: HomeCopy["services"] }) => (
  <section id="services" className="relative overflow-hidden px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
    <GradientField tone="deep" />

    <div className="relative mx-auto max-w-[1400px]">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <Pill tone="light">{copy.pill}</Pill>
          <h2 className="mt-6 max-w-3xl text-[2.1rem] font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            {copy.title}
          </h2>
        </div>
        <p className="max-w-md text-lg leading-relaxed text-white/80">{copy.lead}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-16">
        {copy.items.map((item, i) => {
          return (
            <FadeUp key={item.title} delay={(i % 2) * 0.06}>
              <article className="flex h-full flex-col rounded-[2rem] bg-white/[0.08] p-7 ring-1 ring-white/15 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.13] sm:p-9">
                <span className="text-5xl font-semibold leading-none tracking-[-0.05em] text-lilac tabular-nums sm:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-[1.75rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/80">{item.description}</p>
              </article>
            </FadeUp>
          );
        })}
      </div>

      <p className="mt-10 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">{copy.note}</p>
    </div>
  </section>
);
