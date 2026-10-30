import { useEffect, useState } from "react";
import type { HeroVariant } from "@/components/home/Hero";

/**
 * TYMCZASOWE – wybór wariantu hero na podglądzie (?hero=a|b|c).
 * Przełącznik pokazuje się tylko poza produkcją (digitilio.pl).
 * Po wyborze wariantu do usunięcia.
 */
const VARIANTS: { id: HeroVariant; label: string }[] = [
  { id: "a", label: "A · Portret" },
  { id: "b", label: "B · Typografia" },
  { id: "c", label: "C · Okładka" },
];

export const useHeroVariant = () => {
  const [variant, setVariant] = useState<HeroVariant>("a");
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("hero");
    if (param === "a" || param === "b" || param === "c") setVariant(param);
    setIsPreview(!/(^|\.)digitilio\.pl$/.test(window.location.hostname));
  }, []);

  const choose = (v: HeroVariant) => {
    setVariant(v);
    const url = new URL(window.location.href);
    url.searchParams.set("hero", v);
    window.history.replaceState(null, "", url.toString());
    window.scrollTo({ top: 0 });
  };

  return { variant, choose, isPreview };
};

export const HeroSwitcher = ({
  variant,
  choose,
}: {
  variant: HeroVariant;
  choose: (v: HeroVariant) => void;
}) => (
  <div className="fixed left-1/2 top-20 z-[55] flex -translate-x-1/2 gap-1 rounded-full bg-white/90 p-1 text-xs font-semibold shadow-xl ring-1 ring-violet/15 backdrop-blur-md sm:top-5">
    {VARIANTS.map((v) => (
      <button
        key={v.id}
        type="button"
        onClick={() => choose(v.id)}
        className={`rounded-full px-3 py-2 transition-colors ${
          variant === v.id ? "bg-violet text-white" : "text-violet hover:bg-lilac-soft"
        }`}
      >
        {v.label}
      </button>
    ))}
  </div>
);
