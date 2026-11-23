import { Link } from "react-router-dom";

import { GradientField } from "@/components/site/GradientField";
import { FadeUp, Pill } from "@/components/site/motion";

type PillarCopy = {
  eyebrow: string;
  title: string;
  text: string;
  items: string[];
  cta: string;
  href: string;
};

const Panel = ({ data, tone }: { data: PillarCopy; tone: "violet" | "sys" }) => {
  const sys = tone === "sys";
  return (
    <Link
      to={data.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2.2rem] p-8 text-white sm:p-10 lg:min-h-[620px] lg:p-12"
    >
      <GradientField tone={tone} />
      <div className="relative flex h-full flex-col">
        <span className={`text-sm font-semibold uppercase tracking-[0.14em] ${sys ? "text-sys-light" : "text-lilac"}`}>
          {data.eyebrow}
        </span>
        <h3 className="mt-4 text-[2rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl">{data.title}</h3>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-white/80">{data.text}</p>

        <ul className="mt-10 border-t border-white/15">
          {data.items.map((item, i) => (
            <li key={item} className="flex items-center gap-4 border-b border-white/15 py-4 text-lg font-medium">
              <span className={`text-sm font-semibold tabular-nums ${sys ? "text-sys-light" : "text-lilac"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ul>

        <span className="mt-10 inline-flex items-center gap-3 self-start rounded-full bg-white py-2 pl-6 pr-2 text-base font-semibold lg:mt-auto">
          <span className={sys ? "text-sys-deep" : "text-violet"}>{data.cta}</span>
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:translate-x-1 ${
              sys ? "bg-sys-deep" : "bg-violet"
            }`}
            aria-hidden="true"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </span>
      </div>
    </Link>
  );
};

/** Dwa filary obok siebie: fiolet = marketing, indygo = systemy */
export const Pillars = ({
  pill,
  title,
  marketing,
  systems,
}: {
  pill: string;
  title: string;
  marketing: PillarCopy;
  systems: PillarCopy;
}) => (
  <section id="filary" className="bg-white px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">
    <div className="mx-auto max-w-[1400px]">
      <Pill>{pill}</Pill>
      <h2 className="mt-6 max-w-3xl text-[2.1rem] font-semibold leading-[1.03] tracking-[-0.045em] text-violet sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
        <FadeUp>
          <Panel data={marketing} tone="violet" />
        </FadeUp>
        <FadeUp delay={0.08}>
          <Panel data={systems} tone="sys" />
        </FadeUp>
      </div>
    </div>
  </section>
);
