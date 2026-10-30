import { useCalmMotion } from "./motion";

/**
 * Płynny, płaski gradient w kolorach marki (zamiast obiektów 3D).
 * Kilka dużych, rozmytych plam powoli przesuwa się po tle.
 */
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
      ? "linear-gradient(160deg, hsl(262 44% 22%) 0%, hsl(263 44% 30%) 100%)"
      : "linear-gradient(155deg, hsl(262 46% 30%) 0%, hsl(264 46% 38%) 55%, hsl(268 48% 46%) 100%)";

  const blobs = [
    { c: "hsl(270 70% 70% / 0.75)", s: "62vmax", x: "62%", y: "-18%", a: "gf-a", d: "22s" },
    { c: "hsl(300 60% 72% / 0.55)", s: "48vmax", x: "-12%", y: "55%", a: "gf-b", d: "26s" },
    { c: "hsl(250 60% 60% / 0.6)", s: "44vmax", x: "35%", y: "60%", a: "gf-c", d: "30s" },
    { c: "hsl(280 70% 82% / 0.45)", s: "30vmax", x: "80%", y: "50%", a: "gf-b", d: "18s" },
  ];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0" style={{ background: base }} />
      {blobs.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.s,
            height: b.s,
            left: b.x,
            top: b.y,
            background: `radial-gradient(circle, ${b.c} 0%, transparent 65%)`,
            filter: "blur(30px)",
            animation: calm ? undefined : `${b.a} ${b.d} ease-in-out infinite alternate`,
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
