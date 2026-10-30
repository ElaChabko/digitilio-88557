import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Check, Heart, Mail, Play, Sparkles } from "lucide-react";

import type { HomeCopy } from "@/content/home";
import { useCalmMotion } from "@/components/site/motion";

/**
 * „Jeden kierunek”: przypięta sekcja (jak „Unify your finances” na jeton.com).
 * Karty z różnymi działaniami marketingowymi wlatują z krawędzi ekranu,
 * otaczają hasło, a potem zbierają się w jeden stos, na który wjeżdża plan marketingowy.
 */

type Pos = { x: number; y: number; r: number };
type CardSpec = { key: string; around: Pos; render: (c: HomeCopy["unify"]["cards"]) => ReactNode };

const Base = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div
    className={`w-[clamp(150px,17vw,240px)] rounded-[1.4rem] p-4 shadow-[0_30px_60px_-25px_hsl(263_50%_20%/0.45)] sm:p-5 ${className}`}
  >
    {children}
  </div>
);

const CARDS: CardSpec[] = [
  {
    key: "post",
    around: { x: -33, y: -27, r: -8 },
    render: (c) => (
      <Base className="bg-white text-foreground ring-1 ring-violet/10">
        <div className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-full bg-violet" />
          <span className="text-sm font-semibold">{c.post}</span>
        </div>
        <div className="mt-4 space-y-1.5">
          <div className="h-2 rounded-full bg-violet/15" />
          <div className="h-2 w-4/5 rounded-full bg-violet/15" />
          <div className="h-2 w-3/5 rounded-full bg-violet/15" />
        </div>
        <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Heart className="h-3.5 w-3.5 fill-orchid text-orchid" /> 128
        </div>
      </Base>
    ),
  },
  {
    key: "ads",
    around: { x: 31, y: -29, r: 7 },
    render: (c) => (
      <Base className="bg-violet text-white">
        <p className="text-sm font-semibold">{c.ads}</p>
        <span className="mt-3 inline-flex rounded-full bg-white/20 px-2.5 py-1 text-xs">{c.adsStatus}</span>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-2/3 rounded-full bg-lilac" />
        </div>
      </Base>
    ),
  },
  {
    key: "report",
    around: { x: -38, y: 5, r: 5 },
    render: (c) => (
      <Base className="bg-white text-foreground ring-1 ring-violet/10">
        <p className="text-sm font-semibold">{c.report}</p>
        <div className="mt-4 flex h-16 items-end gap-1.5">
          {[40, 65, 35, 80, 55, 95].map((h, i) => (
            <span key={i} className="flex-1 rounded-t-md bg-indigo/80" style={{ height: `${h}%` }} />
          ))}
        </div>
      </Base>
    ),
  },
  {
    key: "newsletter",
    around: { x: 36, y: 3, r: -6 },
    render: (c) => (
      <Base className="bg-lilac text-plum">
        <Mail className="h-6 w-6" />
        <p className="mt-3 text-sm font-semibold">{c.newsletter}</p>
        <span className="mt-3 inline-flex rounded-full bg-white/60 px-2.5 py-1 text-xs font-medium">
          {c.newsletterStatus}
        </span>
      </Base>
    ),
  },
  {
    key: "website",
    around: { x: -25, y: 30, r: 6 },
    render: (c) => (
      <Base className="bg-white text-foreground ring-1 ring-violet/10">
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-orchid" />
          <span className="h-2 w-2 rounded-full bg-lilac" />
          <span className="h-2 w-2 rounded-full bg-violet/30" />
        </div>
        <div className="mt-3 h-12 rounded-lg bg-gradient-to-br from-violet/80 to-orchid/70" />
        <p className="mt-3 text-sm font-semibold">{c.website}</p>
      </Base>
    ),
  },
  {
    key: "content",
    around: { x: 25, y: 30, r: -5 },
    render: (c) => (
      <Base className="bg-plum text-white">
        <p className="text-sm font-semibold">{c.content}</p>
        <div className="mt-4 grid grid-cols-7 gap-1.5">
          {Array.from({ length: 21 }, (_, i) => (
            <span
              key={i}
              className={`aspect-square rounded-[3px] ${[2, 5, 9, 12, 16, 19].includes(i) ? "bg-lilac" : "bg-white/15"}`}
            />
          ))}
        </div>
      </Base>
    ),
  },
  {
    key: "ai",
    around: { x: -5, y: -37, r: 3 },
    render: (c) => (
      <Base className="bg-white text-foreground ring-1 ring-violet/10">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-orchid" />
          <span className="text-sm font-semibold">{c.ai}</span>
        </div>
        <p className="mt-3 rounded-xl rounded-tl-sm bg-lilac-soft px-3 py-2 text-xs text-violet">
          {c.aiText}
        </p>
      </Base>
    ),
  },
  {
    key: "reel",
    around: { x: 5, y: 37, r: -4 },
    render: (c) => (
      <Base className="relative overflow-hidden bg-gradient-to-br from-orchid to-violet p-0 text-white sm:p-0">
        <div className="flex aspect-[4/3] items-center justify-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/25 backdrop-blur">
            <Play className="h-5 w-5 fill-white" />
          </span>
        </div>
        <p className="px-4 pb-4 text-sm font-semibold">{c.reel}</p>
      </Base>
    ),
  },
];

const FlyingCard = ({
  spec,
  index,
  progress,
  children,
}: {
  spec: CardSpec;
  index: number;
  progress: MotionValue<number>;
  children: ReactNode;
}) => {
  const n = CARDS.length;
  const enter = 0.02 + index * 0.025;
  const around = 0.32 + index * 0.012;
  const gather = 0.68;

  // Pozycje: daleko poza ekranem → wokół hasła → w stosie na środku
  const far = { x: spec.around.x * 2.3, y: spec.around.y * 2.3, r: spec.around.r * 3 };
  const stack = { x: (index - (n - 1) / 2) * 0.7, y: (index - (n - 1) / 2) * 0.9, r: (index - (n - 1) / 2) * 2.2 };

  const t = [enter, around, gather];
  const x = useTransform(progress, t, [`${far.x}vw`, `${spec.around.x}vw`, `${stack.x}vw`]);
  const y = useTransform(progress, t, [`${far.y}vh`, `${spec.around.y}vh`, `${stack.y}vh`]);
  const rotate = useTransform(progress, t, [far.r, spec.around.r, stack.r]);
  const scale = useTransform(progress, [around, gather], [1, 0.92]);

  return (
    <motion.div className="absolute left-1/2 top-1/2" style={{ x, y, rotate, scale }}>
      <div className="-translate-x-1/2 -translate-y-1/2">{children}</div>
    </motion.div>
  );
};

const PlanCard = ({
  plan,
  progress,
}: {
  plan: HomeCopy["unify"]["plan"];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, [0.7, 0.8], [0, 1]);
  const y = useTransform(progress, [0.7, 0.82], [80, 0]);
  const scale = useTransform(progress, [0.7, 0.82], [0.85, 1]);

  return (
    <motion.div className="absolute left-1/2 top-1/2 z-20" style={{ opacity, y, scale }}>
      <div className="w-[min(78vw,320px)] -translate-x-1/2 -translate-y-1/2 rounded-[1.6rem] bg-violet p-6 text-white shadow-[0_40px_80px_-30px_hsl(263_60%_20%/0.7)] ring-1 ring-white/15 sm:p-7">
        <p className="text-lg font-semibold">{plan.title}</p>
        <ul className="mt-5 space-y-3">
          {plan.items.map((item, i) => (
            <PlanItem key={item} label={item} index={i} progress={progress} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const PlanItem = ({
  label,
  index,
  progress,
}: {
  label: string;
  index: number;
  progress: MotionValue<number>;
}) => {
  const start = 0.8 + index * 0.04;
  const opacity = useTransform(progress, [start, start + 0.04], [0, 1]);
  const x = useTransform(progress, [start, start + 0.04], [-12, 0]);
  return (
    <motion.li className="flex items-center gap-3 text-base" style={{ opacity, x }}>
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-violet">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
      {label}
    </motion.li>
  );
};

export const Unify = ({ copy }: { copy: HomeCopy["unify"] }) => {
  const ref = useRef<HTMLElement | null>(null);
  const calm = useCalmMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const titleScale = useTransform(scrollYProgress, [0.3, 0.7], [1, 0.86]);
  const titleOpacity = useTransform(scrollYProgress, [0.5, 0.72], [1, 0.12]);
  const captionOpacity = useTransform(scrollYProgress, [0.84, 0.92], [0, 1]);
  const captionY = useTransform(scrollYProgress, [0.84, 0.92], [20, 0]);

  // Wersja bez ruchu: hasło + plan, bez przypinania
  if (calm) {
    return (
      <section className="bg-white px-5 py-24 text-center">
        <h2 className="text-6xl font-semibold tracking-[-0.045em] text-violet">
          {copy.title.join(" ")}
        </h2>
        <p className="mt-4 text-xl text-violet/80">{copy.caption}</p>
      </section>
    );
  }

  return (
    <section ref={ref} aria-label={copy.title.join(" ")} className="relative h-[340vh] bg-white">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        <motion.h2
          className="relative z-0 text-center text-[19vw] font-semibold leading-[0.9] tracking-[-0.055em] text-violet sm:text-[15vw] lg:text-[11.5rem] xl:text-[13rem]"
          style={{ scale: titleScale, opacity: titleOpacity }}
        >
          <span className="block">{copy.title[0]}</span>
          <span className="block">{copy.title[1]}</span>
        </motion.h2>

        <div className="absolute inset-0 z-10">
          {CARDS.map((spec, i) => (
            <FlyingCard key={spec.key} spec={spec} index={i} progress={scrollYProgress}>
              {spec.render(copy.cards)}
            </FlyingCard>
          ))}
          <PlanCard plan={copy.plan} progress={scrollYProgress} />
        </div>

        <motion.p
          className="absolute bottom-[14vh] left-0 right-0 z-30 px-6 text-center text-xl font-semibold tracking-[-0.02em] text-violet sm:text-2xl lg:text-3xl"
          style={{ opacity: captionOpacity, y: captionY }}
        >
          {copy.title.join(" ")} <span className="text-violet/60">{copy.caption}</span>
        </motion.p>
      </div>
    </section>
  );
};
