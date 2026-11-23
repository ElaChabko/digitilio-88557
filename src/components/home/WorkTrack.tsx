import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { PILLARS, type Realization } from "@/content/realizations";
import { Pill, PlaceholderTag } from "@/components/site/motion";

/** Kolory kart: marketing w fioletach marki, systemy w indygo */
const TONES = {
  marketing: ["bg-violet", "bg-plum"],
  systems: ["bg-sys-deep"],
};

const Card = ({ item, index }: { item: Realization; index: number }) => {
  const tones = TONES[item.pillar];
  const bg = tones[index % tones.length];

  return (
    <Link
      to={item.href}
      className={`group relative flex min-h-[400px] w-[78vw] max-w-[340px] shrink-0 flex-col overflow-hidden rounded-[2rem] p-7 text-white lg:min-h-[440px] lg:w-full lg:max-w-none ${bg}`}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/15" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/15" aria-hidden="true" />
      <div
        className={`pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full blur-3xl ${
          item.pillar === "systems" ? "bg-sys-light/20" : "bg-lilac/25"
        }`}
        aria-hidden="true"
      />

      <span
        className={`relative inline-flex self-start rounded-full px-3 py-1 text-xs font-semibold ${
          item.pillar === "systems" ? "bg-sys-light/20 text-sys-light" : "bg-white/15 text-white/85"
        }`}
      >
        {PILLARS[item.pillar].label}
      </span>

      <div className="relative mt-auto">
        {item.stat ? (
          <>
            <p className="text-[clamp(1.7rem,8vw,2.25rem)] font-semibold tracking-[-0.05em] xl:text-5xl">{item.stat}</p>
            <p className="mt-2 max-w-[24ch] text-base text-white/80">{item.statLabel}</p>
          </>
        ) : (
          <p className="max-w-[14ch] text-[clamp(1.6rem,7.4vw,2.1rem)] font-semibold leading-[1.04] tracking-[-0.045em] xl:text-[2.4rem]">
            {item.headline}
          </p>
        )}
        <div className="mt-8 flex items-end justify-between gap-4 border-t border-white/20 pt-5">
          <div>
            <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
            <p className="mt-1 text-sm text-white/65">{item.meta}</p>
            {item.draft && (
              <div className="mt-3">
                <PlaceholderTag tone="light">Treść robocza</PlaceholderTag>
              </div>
            )}
          </div>
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-500 group-hover:rotate-45 ${
              item.pillar === "systems" ? "text-sys-deep" : "text-violet"
            }`}
          >
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

/**
 * Realizacje: siatka kart na komputerze, przesuwanie palcem na telefonie.
 * Karty z obu filarów, kolor i etykieta mówią, którego dotyczą.
 */
export const WorkTrack = ({
  pill,
  title,
  items,
  allHref,
  allLabel,
  id = "work",
}: {
  pill: string;
  title: string;
  items: Realization[];
  allHref?: string;
  allLabel?: string;
  id?: string;
}) => (
  <section id={id} className="bg-white py-24 sm:py-32">
    <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
      <div>
        <Pill>{pill}</Pill>
        <h2 className="mt-5 max-w-3xl text-[2.1rem] font-semibold leading-[1.03] tracking-[-0.045em] text-violet sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
      {allHref && allLabel && (
        <Link
          to={allHref}
          className="group inline-flex min-h-[44px] items-center gap-2 self-start rounded-full border border-violet/25 px-5 py-2.5 text-sm font-semibold text-violet transition-colors hover:bg-violet hover:text-white lg:self-auto"
        >
          {allLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>

    <div className="mx-auto mt-10 max-w-[1400px] lg:px-12">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-8 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
        {items.map((item, i) => (
          <div key={item.href} className="snap-start">
            <Card item={item} index={i} />
          </div>
        ))}
      </div>
    </div>
  </section>
);
