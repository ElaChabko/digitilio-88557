/**
 * Mały znak marki: okrąg z kropek różnej wielkości, jak w logo Digitilio.
 * Płaski, w kolorze tekstu (currentColor) – zamiast typowych ikon.
 */
const DOTS = Array.from({ length: 12 }, (_, i) => {
  const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
  const sizes = [2.3, 1.1, 1.7, 0.9, 2, 1.3, 1, 1.9, 1.2, 1.6, 0.9, 1.4];
  return { cx: 12 + Math.cos(a) * 8.4, cy: 12 + Math.sin(a) * 8.4, r: sizes[i] };
});

export const DotMark = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    {DOTS.map((d, i) => (
      <circle key={i} cx={d.cx.toFixed(2)} cy={d.cy.toFixed(2)} r={d.r} />
    ))}
  </svg>
);
