import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";

import aboutPhoto from "@/assets/about-photo-new.webp";
import type { HomeCopy } from "@/content/home";
import {
  ActionButton,
  CountUp,
  FadeUp,
  Pill,
  PlaceholderTag,
  ScrollText,
  useCalmMotion,
} from "@/components/site/motion";

/** O mnie: ciemna śliwkowa sekcja, zdjęcie odsłaniane przy przewijaniu, liczby odliczane w górę */
export const About = ({ copy, onCta }: { copy: HomeCopy["about"]; onCta: () => void }) => {
  const photoRef = useRef<HTMLDivElement | null>(null);
  const calm = useCalmMotion();
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ["start end", "center center"] });
  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    calm
      ? ["inset(0% 0% 0% 0% round 2rem)", "inset(0% 0% 0% 0% round 2rem)"]
      : ["inset(22% 18% 22% 18% round 2rem)", "inset(0% 0% 0% 0% round 2rem)"]
  );
  const imgScale = useTransform(scrollYProgress, [0, 1], [calm ? 1 : 1.25, 1]);

  return (
    <section id="about" className="relative overflow-hidden bg-plum px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div ref={photoRef} style={{ clipPath: clip }} className="overflow-hidden lg:sticky lg:top-24 lg:self-start">
            <motion.img
              src={aboutPhoto}
              alt="Ela Chabko - Digitilio"
              width={768}
              height={768}
              loading="lazy"
              className="w-full object-cover"
              style={{ scale: imgScale }}
            />
          </motion.div>

          <div>
            <Pill tone="light">{copy.pill}</Pill>
            <ScrollText
              as="h2"
              text={copy.title}
              className="mt-6 text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[4.5rem]"
            />

            <FadeUp className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-white/80">
              {copy.paragraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </FadeUp>

            <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-4">
              {copy.stats.map((s) => (
                <div key={s.label} className="rounded-3xl bg-white/[0.07] p-4 ring-1 ring-white/10 sm:p-6">
                  <CountUp
                    value={s.value}
                    className="block text-4xl font-semibold tracking-[-0.05em] text-lilac sm:text-6xl"
                  />
                  <span className="mt-2 block text-sm font-semibold sm:text-base">{s.label}</span>
                  <span className="mt-1 hidden text-sm text-white/60 sm:block">{s.hint}</span>
                </div>
              ))}
            </div>

            <FadeUp className="mt-12 border-l-2 border-lilac pl-6">
              <p className="max-w-xl text-xl font-semibold leading-snug tracking-[-0.02em] sm:text-2xl">
                {copy.quote}
              </p>
            </FadeUp>

            <FadeUp className="mt-10">
              <ActionButton tone="white" onClick={onCta}>
                {copy.cta}
              </ActionButton>
            </FadeUp>
          </div>
        </div>

        {copy.testimonials && (
          <div className="mt-24 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-32">
            {copy.testimonials.items.map((t, i) => (
              <FadeUp key={t.author + i} delay={i * 0.1}>
                <figure
                  className={`flex h-full flex-col rounded-[2rem] p-8 sm:p-10 ${
                    t.placeholder
                      ? "border border-dashed border-white/20 bg-white/[0.04]"
                      : "bg-violet"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Quote className={`h-8 w-8 ${t.placeholder ? "text-lilac/50" : "text-lilac"}`} />
                    {t.placeholder && <PlaceholderTag tone="light">{copy.testimonials!.tag}</PlaceholderTag>}
                  </div>
                  <blockquote
                    className={`mt-6 text-xl leading-relaxed sm:text-2xl ${
                      t.placeholder ? "text-white/45" : "font-medium tracking-[-0.015em] text-white"
                    }`}
                  >
                    {t.placeholder ? t.text : `„${t.text}”`}
                  </blockquote>
                  <figcaption className="mt-auto pt-8">
                    <p className={`font-semibold ${t.placeholder ? "text-white/50" : "text-white"}`}>{t.author}</p>
                    <p className={`text-sm ${t.placeholder ? "text-white/40" : "text-white/70"}`}>{t.role}</p>
                  </figcaption>
                </figure>
              </FadeUp>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
