import { useCalmMotion } from "./motion";

/**
 * Płynny gradient w kolorach marki: kilka rozmytych rozjaśnień
 * powoli „pływa” po fioletowym tle (każde inną drogą i w innym tempie).
 */
type Blob = {
  color: string;
  size: string;
  left: string;
  top: string;
  path: "gf-1" | "gf-2" | "gf-3" | "gf-4";
  duration: string;
  delay: string;
};

const BLOBS: Blob[] = [
  { color: "hsl(272 85% 78% / 0.55)", size: "58vmax", left: "48%", top: "-24%", path: "gf-1", duration: "19s", delay: "0s" },
  { color: "hsl(305 70% 76% / 0.45)", size: "46vmax", left: "-14%", top: "42%", path: "gf-2", duration: "23s", delay: "-6s" },
  { color: "hsl(248 75% 70% / 0.45)", size: "44vmax", left: "30%", top: "55%", path: "gf-3", duration: "27s", delay: "-11s" },
  { color: "hsl(285 90% 88% / 0.35)", size: "30vmax", left: "70%", top: "40%", path: "gf-4", duration: "17s", delay: "-4s" },
];

export const GradientField = ({
  className = "",
  tone = "violet",
}: {
  className?: string;
  tone?: "violet" | "deep";
}) => {
  const calm = useCalmMotion();
  const base =
    tone === "deep"
      ? "linear-gradient(160deg, hsl(262 44% 17%) 0%, hsl(263 42% 24%) 100%)"
      : "linear-gradient(155deg, hsl(262 46% 28%) 0%, hsl(264 46% 36%) 55%, hsl(268 46% 42%) 100%)";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0" style={{ background: base }} />
      {BLOBS.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full will-change-transform"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            top: b.top,
            background: `radial-gradient(circle, ${b.color} 0%, transparent 62%)`,
            mixBlendMode: "screen",
            opacity: tone === "deep" ? 0.55 : 1,
            animation: calm ? undefined : `${b.path} ${b.duration} ease-in-out ${b.delay} infinite`,
          }}
        />
      ))}
      {/* Ziarno – delikatna faktura */}
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
};
