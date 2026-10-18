/**
 * Przesuwający się pasek logotypów klientów.
 * Ideo Force – logo już opublikowane na stronie Współprace.
 * Pozostałe pozycje to PLACEHOLDERY do podmiany po zebraniu zgód:
 * wystarczy dodać plik do public/logos i wpisać go na listę.
 */
type LogoItem =
  | { type: "logo"; name: string; src: string }
  | { type: "placeholder"; name: string };

const logos: LogoItem[] = [
  { type: "logo", name: "Ideo Force", src: "/logos/ideo-force.svg" },
  { type: "placeholder", name: "Logo klienta" },
  { type: "placeholder", name: "Logo klienta" },
  { type: "placeholder", name: "Logo klienta" },
  { type: "placeholder", name: "Logo klienta" },
  { type: "placeholder", name: "Logo klienta" },
];

const Item = ({ item }: { item: LogoItem }) =>
  item.type === "logo" ? (
    <img
      src={item.src}
      alt={item.name}
      className="h-8 w-auto shrink-0 opacity-70 brightness-0 invert transition-opacity hover:opacity-100 sm:h-9"
      loading="lazy"
    />
  ) : (
    <span className="flex h-10 w-36 shrink-0 items-center justify-center rounded-lg border border-dashed border-white/20 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35">
      {item.name}
    </span>
  );

export const LogoStrip = () => (
  <section
    aria-label="Klienci i współprace"
    className="relative overflow-hidden border-y border-white/10 bg-ink py-8 sm:py-10"
  >
    <div
      className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent sm:w-40"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent sm:w-40"
      aria-hidden="true"
    />

    {/* Lista powtórzona dwa razy – animacja przesuwa o połowę, więc pętla jest płynna */}
    <div className="flex w-max animate-marquee items-center gap-14 sm:gap-20">
      {[...logos, ...logos, ...logos, ...logos].map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </div>
  </section>
);
