import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ChevronDown, ImageIcon } from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO, SITE_URL } from "@/components/SEO";
import { ContactForm } from "@/components/ContactForm";
import { Contact } from "@/components/home/Contact";
import { GradientField } from "@/components/site/GradientField";
import { FadeUp, Pill, PlaceholderTag } from "@/components/site/motion";
import { SYSTEMS_PATH, areaById, getSystemExample, systemsCopy } from "@/content/systems";
import NotFound from "@/pages/NotFound";
import { track } from "@/lib/track";

const c = systemsCopy.example;

const SectionTitle = ({ children }: { children: string }) => (
  <h2 className="text-[1.9rem] font-semibold leading-[1.05] tracking-[-0.04em] text-sys-deep sm:text-4xl lg:text-5xl">
    {children}
  </h2>
);

/**
 * Podstrona przykładu /systemy-dla-firm/[slug] – szablon z briefu:
 * nagłówek → problem → rozwiązanie → co z tego ma firma → jak to zrobiliśmy →
 * technologia (zwinięte) → zastrzeżenie → CTA z formularzem.
 */
const SystemExamplePage = () => {
  const { slug = "" } = useParams();
  const example = getSystemExample(slug);
  if (!example) return <NotFound />;

  const area = areaById(example.area);
  const canonical = `${SITE_URL}${SYSTEMS_PATH}/${example.slug}`;
  const hasDemo = example.proof === "demo" && Boolean(example.demoUrl);
  const media = example.media?.length ? example.media : null;

  const toContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <SEO title={example.seoTitle} description={example.seoDescription} canonical={canonical} ogType="article" noindex={example.draft} />
      <Navigation onContact={toContact} />

      <main>
        {/* 1. NAGŁÓWEK */}
        <section className="relative overflow-hidden text-white">
          <GradientField tone="sys" />
          <div className="relative mx-auto max-w-[1400px] px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:px-12">
            <Link
              to={SYSTEMS_PATH + "#przyklady"}
              className="hero-fade-up inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {c.back}
            </Link>
            <div className="hero-fade-up mt-4 flex flex-wrap gap-2" style={{ animationDelay: "0.05s" }}>
              <Pill tone="light">{area.name}</Pill>
              {example.industry && <Pill tone="light">{example.industry}</Pill>}
            </div>
            <h1
              className="hero-slide-in mt-6 max-w-4xl text-[clamp(1.8rem,8.6vw,2.6rem)] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[4.4rem]"
              style={{ animationDelay: "0.1s" }}
            >
              {example.name}
            </h1>
            <p className="hero-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl" style={{ animationDelay: "0.3s" }}>
              {example.effect}
            </p>
            <div className="hero-fade-up mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.45s" }}>
              {example.proof === "demo" &&
                (hasDemo ? (
                  <a
                    href={example.demoUrl}
                    target="_blank"
                    rel="noopener"
                    onClick={() => track("demo_open", { demo_name: example.slug, demo_place: "example_page" })}
                    className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-6 text-base font-semibold text-sys-deep transition-colors hover:bg-sys-soft"
                  >
                    {systemsCopy.examples.open}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="inline-flex min-h-[48px] items-center rounded-full border border-dashed border-white/40 px-6 text-base font-semibold text-white/70">
                    {systemsCopy.examples.soon}
                  </span>
                ))}
              {example.draft && <PlaceholderTag tone="light">{c.draftTag}</PlaceholderTag>}
            </div>
          </div>
        </section>

        {/* 2–3. PROBLEM I ROZWIĄZANIE */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
            <FadeUp>
              <SectionTitle>{c.problem}</SectionTitle>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/85">
                {example.problem.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.06}>
              <SectionTitle>{c.solution}</SectionTitle>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/85">
                {example.solution.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Zrzuty ekranu albo nagranie */}
          <div className="mx-auto mt-14 grid max-w-[1400px] grid-cols-1 gap-4 md:grid-cols-3">
            {media
              ? media.map((m) =>
                  m.type === "video" ? (
                    <video
                      key={m.src}
                      src={m.src}
                      aria-label={m.alt}
                      className="aspect-[16/10] w-full rounded-[1.5rem] object-cover"
                      muted
                      loop
                      playsInline
                      controls
                      preload="none"
                    />
                  ) : (
                    <img key={m.src} src={m.src} alt={m.alt} loading="lazy" className="aspect-[16/10] w-full rounded-[1.5rem] object-cover" />
                  )
                )
              : [0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex aspect-[16/10] flex-col items-center justify-center gap-3 rounded-[1.5rem] border-2 border-dashed border-sys/15 bg-sys-soft"
                  >
                    <ImageIcon className="h-9 w-9 text-sys-deep/30" strokeWidth={1.25} />
                    {i === 0 && <PlaceholderTag>{c.mediaTag}</PlaceholderTag>}
                  </div>
                ))}
          </div>
        </section>

        {/* 4. CO Z TEGO MA FIRMA */}
        <section className="bg-sys-soft px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[1400px]">
            <SectionTitle>{c.benefits}</SectionTitle>
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              {example.benefits.map((b, i) => (
                <FadeUp key={b} delay={i * 0.05}>
                  <div className="h-full rounded-[1.75rem] bg-white p-7">
                    <span className="text-4xl font-semibold leading-none tracking-[-0.05em] text-sys-light tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-6 text-xl font-semibold leading-snug tracking-[-0.02em] text-foreground">{b}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* 5. JAK TO ZROBILIŚMY */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[1400px]">
            <SectionTitle>{c.how}</SectionTitle>
            <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {systemsCopy.process.steps.map((step, i) => (
                <li key={step.word} className="border-t border-sys/15 pt-5">
                  <span className="text-sm font-semibold tabular-nums text-sys-deep/60">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-sys-deep">{step.word}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{step.description}</p>
                </li>
              ))}
            </ol>

            {/* 6. TECHNOLOGIA (zwinięte) */}
            {example.tech?.length ? (
              <details className="group mt-14 rounded-[1.5rem] border border-sys/15 p-6 sm:p-7">
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-foreground">
                  {c.tech}
                  <ChevronDown className="h-5 w-5 text-sys-deep transition-transform group-open:rotate-180" />
                </summary>
                <ul className="mt-4 space-y-2">
                  {example.tech.map((t) => (
                    <li key={t} className="flex gap-3 text-base text-muted-foreground">
                      <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-sys" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </details>
            ) : null}

            {/* 7. ZASTRZEŻENIE */}
            {example.disclaimer && <p className="mt-8 text-sm text-muted-foreground">{example.disclaimer}</p>}
          </div>
        </section>

        {/* 8. CTA */}
        <Contact
          tone="sys"
          copy={{
            pill: systemsCopy.contact.pill,
            title: c.cta,
            lead: systemsCopy.contact.lead,
            cta: "",
            note: "elachabko@digitilio.pl",
          }}
        >
          <div className="rounded-[1.75rem] bg-white p-6 text-foreground sm:p-8">
            <ContactForm topicSet="systems" withSite source={`przyklad:${example.slug}`} initialTopic={example.area} />
          </div>
        </Contact>
      </main>

      <Footer />
    </>
  );
};

export default SystemExamplePage;
