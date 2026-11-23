import { useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO, SITE_URL } from "@/components/SEO";
import { ContactForm } from "@/components/ContactForm";
import { Contact } from "@/components/home/Contact";
import { GradientField } from "@/components/site/GradientField";
import { ActionButton, FadeUp, Pill, PlaceholderTag } from "@/components/site/motion";
import { ExampleCard } from "@/components/systems/ExampleCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AREAS, SYSTEMS_PATH, areaById, systemExamples, systemsCopy as c } from "@/content/systems";
import type { TopicId } from "@/content/topics";
import { track } from "@/lib/track";

const STEP_COLORS = ["bg-sys", "bg-indigo", "bg-sys-deep", "bg-sys"];
const STEP_TEXT = ["text-sys", "text-indigo", "text-sys-deep", "text-sys"];

/**
 * Systemy dla firm: drugi filar Digitilio obok marketingu.
 * 9 bloków z briefu, w głosie „my” (technologię dostarczamy zespołowo).
 */
const Systems = () => {
  const [topic, setTopic] = useState<TopicId | null>(null);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const toContact = (picked?: TopicId) => {
    if (picked) setTopic(picked);
    scrollTo("contact");
  };

  return (
    <>
      <SEO title={c.seoTitle} description={c.seoDescription} canonical={`${SITE_URL}${SYSTEMS_PATH}`} />
      <Navigation onContact={() => toContact()} />

      <main>
        {/* 1. HERO */}
        <section className="relative overflow-hidden text-white">
          <GradientField tone="sys" />
          <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 pb-16 pt-28 sm:px-8 sm:pb-28 sm:pt-44 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12">
            <div>
              <div className="hero-fade-up">
                <Pill tone="light">{c.hero.pill}</Pill>
              </div>
              <h1
                className="hero-slide-in mt-6 max-w-3xl text-[clamp(1.8rem,8.6vw,2.6rem)] font-semibold leading-[1] tracking-[-0.045em] sm:text-6xl lg:text-[4.4rem]"
                style={{ animationDelay: "0.1s" }}
              >
                {c.hero.title}
              </h1>
              <p
                className="hero-fade-up mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:mt-7 sm:text-xl"
                style={{ animationDelay: "0.3s" }}
              >
                {c.hero.lead}
              </p>
              {/* Wyróżnik: widoczny bez przewijania */}
              <p
                className="hero-fade-up mt-5 max-w-xl rounded-2xl bg-white/[0.12] px-4 py-3 text-[15px] font-semibold leading-snug ring-1 ring-white/20 sm:mt-6 sm:px-5 sm:py-4 sm:text-lg"
                style={{ animationDelay: "0.4s" }}
              >
                {c.hero.highlight}
              </p>
              <div className="hero-fade-up mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-8" style={{ animationDelay: "0.5s" }}>
                <ActionButton
                  tone="white"
                  onClick={() => {
                    track("see_examples_click", { place: "hero" });
                    scrollTo("przyklady");
                  }}
                >
                  {c.hero.primary}
                </ActionButton>
                <button
                  type="button"
                  onClick={() => toContact()}
                  className="min-h-[44px] text-base font-semibold underline decoration-white/40 underline-offset-4 hover:decoration-white"
                >
                  {c.hero.secondary}
                </button>
              </div>
            </div>

            {/* Pętla wideo z demami – placeholder do czasu nagrania */}
            <div className="hero-fade-up" style={{ animationDelay: "0.45s" }}>
              <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-[2rem] border-2 border-dashed border-white/30 bg-white/[0.06]">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                  <span className="ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white" />
                </span>
                <PlaceholderTag tone="light">{c.hero.videoTag}</PlaceholderTag>
              </div>
            </div>
          </div>
        </section>

        {/* 2. W CZYM POMAGAMY */}
        <section className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="mx-auto max-w-[1400px]">
            <Pill>{c.problems.pill}</Pill>
            <h2 className="mt-6 text-[2.1rem] font-semibold leading-[1.03] tracking-[-0.045em] text-sys-deep sm:text-5xl lg:text-6xl">
              {c.problems.title}
            </h2>
            <ul className="mt-12 border-b border-sys/15">
              {c.problems.items.map((item) => {
                const area = areaById(item.area);
                return (
                  <li key={item.text} className="border-t border-sys/15">
                    <a
                      href={`#${area.anchor}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(area.anchor);
                      }}
                      className="group flex items-center justify-between gap-6 py-6 sm:py-7"
                    >
                      <span className="text-xl font-semibold leading-snug tracking-[-0.02em] text-foreground transition-colors group-hover:text-sys-deep sm:text-2xl lg:text-[1.75rem]">
                        „{item.text}”
                      </span>
                      <span className="flex shrink-0 items-center gap-3 text-sm font-semibold text-sys-deep">
                        <span className="hidden sm:inline">{area.name}</span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sys-soft transition-colors group-hover:bg-sys group-hover:text-white">
                          <ArrowDown className="h-4 w-4" />
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* 3. 5 OBSZARÓW */}
        <section className="bg-sys-soft px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="mx-auto max-w-[1400px]">
            <Pill>{c.areas.pill}</Pill>
            <h2 className="mt-6 max-w-3xl text-[2.1rem] font-semibold leading-[1.03] tracking-[-0.045em] text-sys-deep sm:text-5xl lg:text-6xl">
              {c.areas.title}
            </h2>

            <div className="mt-12 space-y-4">
              {AREAS.map((area, i) => (
                <FadeUp key={area.id}>
                  <article
                    id={area.anchor}
                    className="scroll-mt-24 grid grid-cols-1 gap-8 rounded-[2rem] bg-white p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
                  >
                    <div className="flex flex-col">
                      <span className="text-5xl font-semibold leading-none tracking-[-0.05em] text-sys-light tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-sys-deep sm:text-4xl">{area.name}</h3>
                      <p className="mt-3 text-lg leading-relaxed text-foreground/80">{area.benefit}</p>
                      <div className="mt-6 lg:mt-auto lg:pt-8">
                        <button
                          type="button"
                          onClick={() => toContact(area.id)}
                          className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-sys-deep hover:gap-3"
                        >
                          {c.areas.more}
                          <ArrowRight className="h-4 w-4 transition-all" />
                        </button>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {area.services.map((service) => (
                        <li key={service} className="flex gap-3 text-base leading-relaxed text-foreground/85">
                          <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-sys" aria-hidden="true" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PRZYKŁADY */}
        <section id="przyklady" className="scroll-mt-0 bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <Pill>{c.examples.pill}</Pill>
                <h2 className="mt-6 text-[2.1rem] font-semibold leading-[1.03] tracking-[-0.045em] text-sys-deep sm:text-5xl lg:text-6xl">
                  {c.examples.title}
                </h2>
              </div>
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">{c.examples.lead}</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {systemExamples.map((example) => (
                <FadeUp key={example.slug}>
                  <ExampleCard example={example} />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* 5. JAK PRACUJEMY */}
        <section className="bg-white px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">
          <div className="mx-auto max-w-[1400px] border-t border-sys/15 pt-24 sm:pt-32">
            <Pill>{c.process.pill}</Pill>
            <h2 className="mt-6 max-w-3xl text-[2.1rem] font-semibold leading-[1.03] tracking-[-0.045em] text-sys-deep sm:text-5xl lg:text-6xl">
              {c.process.title}
            </h2>
            <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
              {c.process.steps.map((step, i) => (
                <FadeUp as="li" key={step.word} delay={i * 0.05} className="border-t border-sys/15 pt-6">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold tabular-nums text-white ${STEP_COLORS[i]}`}
                  >
                    {i + 1}
                  </span>
                  <h3 className={`mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl ${STEP_TEXT[i]}`}>{step.word}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{step.description}</p>
                </FadeUp>
              ))}
            </ol>
          </div>
        </section>

        {/* 6. DLACZEGO DIGITILIO */}
        <section className="relative overflow-hidden px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
          <GradientField tone="sys" />
          <div className="relative mx-auto max-w-[1400px]">
            <Pill tone="light">{c.why.pill}</Pill>
            <h2 className="mt-6 max-w-3xl text-[2.1rem] font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              {c.why.title}
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
              {c.why.items.map((item, i) => (
                <FadeUp key={item.title} delay={i * 0.06}>
                  <article className="flex h-full flex-col rounded-[2rem] bg-white/[0.08] p-7 ring-1 ring-white/15 backdrop-blur-sm sm:p-9">
                    <span className="text-5xl font-semibold leading-none tracking-[-0.05em] text-sys-light tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-8 text-2xl font-semibold leading-tight tracking-[-0.03em]">{item.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-white/80">{item.text}</p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* 7. WEJŚCIE Z NISKĄ BARIERĄ */}
        <section className="bg-white px-5 pt-24 sm:px-8 sm:pt-32 lg:px-12">
          <FadeUp className="mx-auto max-w-[1400px]">
            <div className="flex flex-col gap-8 rounded-[2rem] bg-sys-light p-8 text-sys-deep sm:p-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <Pill className="border-sys-deep/25 text-sys-deep">{c.entry.pill}</Pill>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                  {c.entry.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-sys-deep/85">{c.entry.text}</p>
                <div className="mt-4">
                  <PlaceholderTag>{c.entry.price}</PlaceholderTag>
                </div>
              </div>
              <ActionButton
                tone="sys"
                className="shrink-0 self-start lg:self-center"
                onClick={() => {
                  track("review_click", { place: "entry_tile" });
                  toContact("review");
                }}
              >
                {c.entry.cta}
              </ActionButton>
            </div>
          </FadeUp>
        </section>

        {/* 8. FAQ */}
        <section className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Pill>{c.faq.pill}</Pill>
              <h2 className="mt-6 text-[2.1rem] font-semibold leading-[1.03] tracking-[-0.045em] text-sys-deep sm:text-5xl">
                {c.faq.title}
              </h2>
            </div>
            <Accordion type="single" collapsible className="border-t border-sys/15">
              {c.faq.items.map((item, i) => (
                <AccordionItem key={item.q} value={`faq-${i}`} className="border-sys/15">
                  <AccordionTrigger className="py-6 text-left text-lg font-semibold text-foreground hover:text-sys-deep hover:no-underline sm:text-xl">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                    {item.a || <PlaceholderTag>{c.faq.missing}</PlaceholderTag>}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 9. CTA KOŃCOWE: formularz */}
        <Contact
          tone="sys"
          copy={{ pill: c.contact.pill, title: c.contact.title, lead: c.contact.lead, cta: "", note: "elachabko@digitilio.pl" }}
        >
          <div className="rounded-[1.75rem] bg-white p-6 text-foreground sm:p-8">
            <ContactForm topicSet="systems" withSite source="systemy-dla-firm" initialTopic={topic} />
          </div>
        </Contact>
      </main>

      <Footer />
    </>
  );
};

export default Systems;
