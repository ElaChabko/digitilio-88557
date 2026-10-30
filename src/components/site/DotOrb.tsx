import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { useCalmMotion } from "./motion";

/**
 * Obiekt graficzny marki: pierścień kul nawiązujący do okręgu kropek z logo Digitilio.
 * Przy przewijaniu kule rozsypują się (mode="scatter") albo zbierają w pierścień (mode="gather").
 * Same CSS i framer-motion – bez plików graficznych i bez WebGL.
 */

type Variant = "gloss" | "deep" | "glass";

type DotSpec = {
  angle: number;
  radius: number; // 0..1 względem promienia pierścienia
  size: number; // % szerokości obiektu
  depth: number; // 0..1 – jak mocno reaguje na przewijanie
  variant: Variant;
};

const rand = (i: number, salt: number) => {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

// Rozmiary kropek inspirowane logo: duże przeplatane drobnymi
const SIZE_PATTERN = [11, 4, 7, 3, 9, 5, 2.5, 8, 4.5, 6, 3, 10, 5, 2.5, 7.5, 4];

const DOTS: DotSpec[] = Array.from({ length: 30 }, (_, i) => {
  const variants: Variant[] = ["gloss", "deep", "gloss", "glass", "deep", "gloss"];
  return {
    angle: (i / 30) * Math.PI * 2 + (rand(i, 1) - 0.5) * 0.18,
    radius: 0.78 + rand(i, 2) * 0.22,
    size: SIZE_PATTERN[i % SIZE_PATTERN.length] * (0.85 + rand(i, 3) * 0.3),
    depth: 0.35 + rand(i, 4) * 0.65,
    variant: variants[i % variants.length],
  };
});

const SPHERE: Record<Variant, React.CSSProperties> = {
  gloss: {
    background:
      "radial-gradient(circle at 32% 28%, #ffffff 0%, hsl(270 85% 92%) 12%, hsl(268 60% 72%) 42%, hsl(264 48% 44%) 100%)",
    boxShadow:
      "inset -6px -10px 18px hsl(262 50% 20% / 0.35), 0 24px 50px -18px hsl(262 60% 12% / 0.55)",
  },
  deep: {
    background:
      "radial-gradient(circle at 30% 26%, hsl(270 75% 86%) 0%, hsl(266 52% 58%) 26%, hsl(263 46% 32%) 70%, hsl(262 52% 18%) 100%)",
    boxShadow:
      "inset -6px -10px 18px hsl(262 60% 10% / 0.4), 0 24px 50px -18px hsl(262 60% 10% / 0.6)",
  },
  glass: {
    background:
      "radial-gradient(circle at 30% 25%, rgb(255 255 255 / 0.65) 0%, rgb(255 255 255 / 0.12) 35%, rgb(255 255 255 / 0.06) 100%)",
    border: "1px solid rgb(255 255 255 / 0.45)",
    backdropFilter: "blur(6px)",
    boxShadow: "0 20px 40px -18px hsl(262 60% 12% / 0.45)",
  },
};

const Dot = ({
  spec,
  progress,
  mode,
  size,
  strength,
}: {
  spec: DotSpec;
  progress: MotionValue<number>;
  mode: "scatter" | "gather";
  size: number;
  strength: number;
}) => {
  // Kierunek „ucieczki” kuli: od środka na zewnątrz, z lekkim skrętem
  const dirX = Math.cos(spec.angle + 0.4);
  const dirY = Math.sin(spec.angle + 0.4);
  const travel = size * strength * spec.depth;

  const range = mode === "scatter" ? [0, 1] : [1, 0];
  const x = useTransform(progress, [0, 1], range.map((r) => r * dirX * travel));
  const y = useTransform(progress, [0, 1], range.map((r) => r * dirY * travel));
  const scale = useTransform(
    progress,
    [0, 1],
    mode === "scatter" ? [1, 1 + spec.depth * 0.6] : [1 + spec.depth * 0.6, 1]
  );

  const left = 50 + Math.cos(spec.angle) * spec.radius * 50;
  const top = 50 + Math.sin(spec.angle) * spec.radius * 46;

  return (
    <motion.span
      aria-hidden="true"
      className="absolute rounded-full"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: `${spec.size}%`,
        aspectRatio: "1",
        translateX: "-50%",
        translateY: "-50%",
        x,
        y,
        scale,
        ...SPHERE[spec.variant],
      }}
    />
  );
};

export const DotOrb = ({
  progress,
  mode = "scatter",
  strength = 0.9,
  className = "",
  spin = true,
  children,
}: {
  progress: MotionValue<number>;
  mode?: "scatter" | "gather";
  strength?: number;
  className?: string;
  spin?: boolean;
  children?: ReactNode;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState(600);
  const calm = useCalmMotion();

  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => setSize(entry.contentRect.width));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const rotate = useTransform(progress, [0, 1], mode === "scatter" ? [0, 70] : [-70, 0]);

  return (
    <div ref={ref} className={`relative aspect-square ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{ rotate: calm ? 0 : rotate }}
      >
        <div
          className={`absolute inset-0 ${spin && !calm ? "animate-[spin_90s_linear_infinite]" : ""}`}
        >
          {DOTS.map((spec, i) => (
            <Dot
              key={i}
              spec={spec}
              progress={progress}
              mode={calm ? "scatter" : mode}
              size={calm ? 0 : size}
              strength={strength}
            />
          ))}
        </div>
      </motion.div>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">{children}</div>
      )}
    </div>
  );
};
