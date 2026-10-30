import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, ImageIcon } from "lucide-react";

import type { HomeCopy, WorkItem } from "@/content/home";
import { DotOrb } from "@/components/site/DotOrb";
import { Pill, PlaceholderTag, useCalmMotion } from "@/components/site/motion";

const Card = ({ item, placeholderTag }: { item: WorkItem; placeholderTag: string }) => {
  const shell =
    "relative flex h-[min(50vh,440px)] w-[min(78vw,460px)] sm:h-[min(60vh,520px)] shrink-0 flex-col overflow-hidden rounded-[2rem] p-7 sm:p-9";

  if (item.type === "case") {
    return (
      <Link to={item.href} className={`group ${shell} bg-violet text-white`}>
        <div className="pointer-events-none absolute -right-[30%] -top-[25%] w-[95%] opacity-90">
          <StaticOrb />
        </div>
        <span className="relative text-sm font-medium text-white/75">Case study</span>
        <div className="relative mt-auto">
          <p className="text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">{item.stat}</p>
          <p className="mt-2 text-base text-white/80">{item.statLabel}</p>
          <div className="mt-8 flex items-end justify-between gap-4 border-t border-white/20 pt-5">
            <div>
              <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
              <p className="mt-1 text-sm text-white/65">{item.meta}</p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-violet transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (item.type === "text") {
    return (
      <article className={`${shell} bg-plum text-white`}>
        <span className="text-sm font-medium text-lilac">{item.meta}</span>
        <h3 className="mt-auto text-3xl font-semibold leading-tight tracking-[-0.03em]">{item.title}</h3>
        <p className="mt-4 text-base leading-relaxed text-white/75">{item.text}</p>
      </article>
    );
  }

  return (
    <article className={`${shell} border-2 border-dashed border-violet/20 bg-lilac-soft`}>
      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        <ImageIcon className="h-12 w-12 text-violet/30" strokeWidth={1.25} />
        <PlaceholderTag>{placeholderTag}</PlaceholderTag>
      </div>
      <h3 className="text-xl font-semibold text-foreground/70">{item.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{item.meta}</p>
    </article>
  );
};

// Nieruchomy obiekt kul do kart (bez reakcji na przewijanie)
const StaticOrb = () => {
  const still = useMotionValue(0);
  return <DotOrb progress={still} spin={false} />;
};

/**
 * Realizacje: sekcja przypięta, karty przesuwają się w poziomie podczas przewijania w dół.
 */
export const WorkTrack = ({ copy }: { copy: HomeCopy["work"] }) => {
  const ref = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [distance, setDistance] = useState(0);
  const calm = useCalmMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0.08, 0.92], [0, -distance]);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth + 48));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const header = (
    <div className="mx-auto flex max-w-[1500px] flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
      <div>
        <Pill>{copy.pill}</Pill>
        <h2 className="mt-5 max-w-3xl text-[2.1rem] font-semibold leading-[1.03] tracking-[-0.045em] text-violet sm:text-5xl lg:text-6xl">
          {copy.title}
        </h2>
        <p className="mt-3 text-base text-muted-foreground">{copy.lead}</p>
      </div>
      {copy.allHref && copy.allLabel && (
        <Link
          to={copy.allHref}
          className="group inline-flex items-center gap-2 self-start rounded-full border border-violet/25 px-5 py-2.5 text-sm font-semibold text-violet transition-colors hover:bg-violet hover:text-white lg:self-auto"
        >
          {copy.allLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );

  if (calm) {
    return (
      <section id="work" className="bg-white py-24">
        {header}
        <div className="mt-10 flex gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-12">
          {copy.items.map((item, i) => (
            <Card key={i} item={item} placeholderTag={copy.placeholderTag} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="work" className="relative bg-white" style={{ height: `${120 + copy.items.length * 45}vh` }}>
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden pb-20 pt-24">
        {header}
        <motion.div ref={trackRef} style={{ x }} className="mt-8 flex w-max gap-5 px-5 sm:mt-10 sm:px-8 lg:px-12">
          {copy.items.map((item, i) => (
            <Card key={i} item={item} placeholderTag={copy.placeholderTag} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
