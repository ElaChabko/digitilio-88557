import type { HomeCopy } from "@/content/home";

/**
 * Przesuwający się pasek logotypów.
 * Ideo Force – logo już opublikowane na stronie Współprace.
 * Pozostałe pozycje to PLACEHOLDERY: dodaj plik do public/logos i wpisz go na listę.
 */
type LogoItem = { type: "logo"; name: string; src: string } | { type: "placeholder" };

const LOGOS: LogoItem[] = [
  { type: "logo", name: "Ideo Force", src: "/logos/ideo-force.svg" },
  { type: "placeholder" },
  { type: "placeholder" },
  { type: "placeholder" },
  { type: "placeholder" },
  { type: "placeholder" },
];

export const LogoMarquee = ({ copy }: { copy: HomeCopy["logos"] }) => (
  <section aria-label={copy.label} className="overflow-hidden bg-white pb-20 pt-6 sm:pb-28">
    <p className="mb-8 text-center text-sm font-medium text-muted-foreground">{copy.label}</p>
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-40" />
      <div className="flex w-max animate-marquee items-center gap-14 sm:gap-20">
        {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((item, i) =>
          item.type === "logo" ? (
            <img
              key={i}
              src={item.src}
              alt={item.name}
              className="h-8 w-auto shrink-0 opacity-60 brightness-0 transition-opacity hover:opacity-100 sm:h-9"
              loading="lazy"
            />
          ) : (
            <span
              key={i}
              className="flex h-11 w-36 shrink-0 items-center justify-center rounded-xl border border-dashed border-violet/25 text-[11px] font-semibold uppercase tracking-[0.14em] text-violet/45"
            >
              {copy.placeholder}
            </span>
          )
        )}
      </div>
    </div>
  </section>
);
