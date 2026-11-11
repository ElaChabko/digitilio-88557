import aboutPhoto from "@/assets/about-photo-new.webp";
import type { HomeCopy } from "@/content/home";
import {
  ActionButton,
  CountUp,
  FadeUp,
  Pill,
  PlaceholderTag,
} from "@/components/site/motion";

/** O mnie: ciemna śliwkowa sekcja, zdjęcie odsłaniane przy przewijaniu, liczby odliczane w górę */
export const About = ({ copy, onCta }: { copy: HomeCopy["about"]; onCta: () => void }) => {

  return (
    <section id="about" className="relative overflow-hidden bg-plum px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="overflow-hidden rounded-[2rem] lg:sticky lg:top-24 lg:self-start">
            <img
              src={aboutPhoto}
              alt="Ela Chabko - Digitilio"
              width={768}
              height={768}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>

          <div>
            <Pill tone="light">{copy.pill}</Pill>
            <h2 className="mt-6 text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[4.5rem]">
              {copy.title}
            </h2>

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
          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-20">
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
                    <span
                      aria-hidden="true"
                      className={`block h-9 overflow-visible text-7xl font-semibold leading-[0.6] ${t.placeholder ? "text-lilac/40" : "text-lilac"}`}
                    >
                      „
                    </span>
                    {t.placeholder && <PlaceholderTag tone="light">{copy.testimonials!.tag}</PlaceholderTag>}
                  </div>
                  <blockquote
                    className={`mt-8 text-xl leading-relaxed sm:text-2xl ${
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
