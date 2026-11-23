import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { SYSTEMS_PATH, areaById, systemsCopy } from "@/content/systems";
import { FadeUp, Pill } from "@/components/site/motion";

const c = systemsCopy.band;

/**
 * Pasek na stronie głównej, który prowadzi do drugiego filaru: Systemy dla firm.
 * Strona główna nadal zaczyna od marketingu (zgodnie z briefem).
 */
export const SystemsBand = () => (
  <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
    <FadeUp className="mx-auto max-w-[1400px]">
      <div className="grid grid-cols-1 gap-10 rounded-[2rem] bg-lilac-soft p-8 sm:p-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <Pill>{c.pill}</Pill>
          <h2 className="mt-6 text-[2rem] font-semibold leading-[1.03] tracking-[-0.045em] text-violet sm:text-5xl">
            {c.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/80">{c.text}</p>
          <Link
            to={SYSTEMS_PATH}
            className="group mt-8 inline-flex min-h-[48px] items-center gap-3 rounded-full bg-violet py-2 pl-6 pr-2 text-base font-semibold text-white transition-colors hover:bg-violet-bright"
          >
            {c.cta}
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-violet transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <ul className="space-y-3">
          {c.areas.map((id, i) => {
            const area = areaById(id);
            return (
              <li key={id}>
                <Link
                  to={`${SYSTEMS_PATH}#${area.anchor}`}
                  className="group flex items-center gap-4 rounded-[1.5rem] bg-white p-5 transition-shadow sm:gap-5 hover:shadow-[0_20px_40px_-25px_hsl(263_50%_25%/0.35)] sm:p-6"
                >
                  <span className="hidden text-3xl font-semibold leading-none tracking-[-0.05em] text-lilac tabular-nums sm:inline">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-semibold text-violet">{area.name}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{area.benefit}</span>
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-violet transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </FadeUp>
  </section>
);
