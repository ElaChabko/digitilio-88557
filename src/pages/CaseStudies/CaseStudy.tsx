import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ContactFormDialog } from "@/components/ContactFormDialog";

import { getCaseStudyBySlug } from "@/content/caseStudies";

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;

  const [isContactOpen, setIsContactOpen] = useState(false);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              Nie znaleziono case study.
            </p>

            <Link
              to="/wspolprace"
              className="mt-5 inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Wróć do współprac
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  const canonicalUrl = `https://digitilio.pl/wspolprace/${caseStudy.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={caseStudy.seoTitle}
        description={caseStudy.seoDescription}
        canonical={canonicalUrl}
      />

      <Navigation />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#17131f] pb-20 pt-36 text-white sm:pb-24 sm:pt-40 lg:pb-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            aria-hidden="true"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          <motion.div
            className="pointer-events-none absolute -left-48 top-0 h-[560px] w-[560px] rounded-full bg-primary/25 blur-[150px]"
            animate={{
              x: [0, 35, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          />

          <div className="container relative z-10 mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to="/wspolprace"
                  className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Współprace
                </Link>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 max-w-5xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
              >
                {caseStudy.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.15,
                }}
                className="mt-8 max-w-4xl text-lg font-light leading-relaxed text-white/70 sm:text-xl"
              >
                {caseStudy.lead}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.25,
                }}
                className="mt-12 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">
                    Branża
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {caseStudy.industry}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">
                    Zakres
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {caseStudy.scope}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">
                    Okres
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {caseStudy.period}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NAJWAŻNIEJSZE WYNIKI */}
        <section className="border-b border-border py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10 text-sm font-medium text-primary"
              >
                Najważniejsze wyniki
              </motion.p>

              <div className="grid border-y border-border md:grid-cols-2 lg:grid-cols-4">
                {caseStudy.results.map((result, index) => (
                  <motion.div
                    key={`${result.value}-${index}`}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    className={[
                      "py-8 md:p-8 lg:min-h-[270px]",
                      index !== caseStudy.results.length - 1
                        ? "lg:border-r lg:border-border"
                        : "",
                    ].join(" ")}
                  >
                    <p className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                      {result.value}
                    </p>

                    <p className="mt-4 font-medium leading-snug text-foreground">
                      {result.label}
                    </p>

                    {result.description && (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {result.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DYNAMICZNE SEKCJE */}
        {caseStudy.sections.map((section, sectionIndex) => {
          switch (section.type) {
            /* TEXT */
            case "text":
              return (
                <section
                  key={`text-${sectionIndex}`}
                  className="py-20 sm:py-24 lg:py-28"
                >
                  <div className="container mx-auto px-4 sm:px-6">
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        className="lg:sticky lg:top-32 lg:self-start"
                      >
                        {section.eyebrow && (
                          <p className="mb-4 text-sm font-medium text-primary">
                            {section.eyebrow}
                          </p>
                        )}

                        <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                          {section.title}
                        </h2>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        className="space-y-6 text-lg leading-relaxed text-muted-foreground"
                      >
                        {section.paragraphs.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}

                        {section.stats && section.stats.length > 0 && (
                          <div className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
                            {section.stats.map((stat, index) => (
                              <div key={`${stat.value}-${index}`}>
                                <p className="text-2xl font-bold text-foreground sm:text-3xl">
                                  {stat.value}
                                </p>

                                <p className="mt-2 text-sm text-muted-foreground">
                                  {stat.label}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </section>
              );

            /* DECISION */
            case "decision": {
              const isDark = section.theme === "dark";

              return (
                <section
                  key={`decision-${sectionIndex}`}
                  className={
                    isDark
                      ? "relative overflow-hidden bg-[#17131f] py-20 text-white sm:py-24 lg:py-28"
                      : "border-y border-border bg-secondary/20 py-20 sm:py-24 lg:py-28"
                  }
                >
                  {isDark && (
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.03]"
                      aria-hidden="true"
                      style={{
                        backgroundImage: `
                          linear-gradient(to right, white 1px, transparent 1px),
                          linear-gradient(to bottom, white 1px, transparent 1px)
                        `,
                        backgroundSize: "80px 80px",
                      }}
                    />
                  )}

                  <div className="container relative z-10 mx-auto px-4 sm:px-6">
                    <div className="mx-auto max-w-7xl">
                      <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                        <motion.div
                          initial={{ opacity: 0, y: 25 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                        >
                          <p
                            className={[
                              "text-7xl font-bold tracking-tight sm:text-8xl",
                              isDark
                                ? "text-white/10"
                                : "text-primary/15",
                            ].join(" ")}
                          >
                            {section.number}
                          </p>

                          <h2
                            className={[
                              "mt-5 max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-4xl",
                              isDark ? "text-white" : "text-foreground",
                            ].join(" ")}
                          >
                            {section.title}
                          </h2>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.15 }}
                          className={[
                            "space-y-6 text-lg leading-relaxed",
                            isDark
                              ? "text-white/65"
                              : "text-muted-foreground",
                          ].join(" ")}
                        >
                          {section.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))}

                          {section.statement && (
                            <p
                              className={[
                                "pt-3 text-2xl font-semibold leading-snug sm:text-3xl",
                                isDark ? "text-white" : "text-foreground",
                              ].join(" ")}
                            >
                              {section.statement}
                            </p>
                          )}

                          {section.stats && section.stats.length > 0 && (
                            <div
                              className={[
                                "mt-10 grid gap-6 border-t pt-8 sm:grid-cols-3",
                                isDark
                                  ? "border-white/10"
                                  : "border-border",
                              ].join(" ")}
                            >
                              {section.stats.map((stat, index) => (
                                <div key={`${stat.value}-${index}`}>
                                  <p
                                    className={[
                                      "text-3xl font-bold",
                                      isDark
                                        ? "text-white"
                                        : "text-foreground",
                                    ].join(" ")}
                                  >
                                    {stat.value}
                                  </p>

                                  <p
                                    className={[
                                      "mt-2 text-sm leading-relaxed",
                                      isDark
                                        ? "text-white/50"
                                        : "text-muted-foreground",
                                    ].join(" ")}
                                  >
                                    {stat.label}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}

                          {section.flow && section.flow.length > 0 && (
                            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                              {section.flow.map((step, index) => (
                                <div
                                  key={`${step.label}-${index}`}
                                  className="flex items-center gap-3 sm:flex-1"
                                >
                                  <div
                                    className={[
                                      "flex-1 rounded-full border px-4 py-3 text-center text-sm font-medium",
                                      isDark
                                        ? "border-white/10 bg-white/[0.05] text-white"
                                        : "border-border bg-background text-foreground",
                                    ].join(" ")}
                                  >
                                    {step.label}
                                  </div>

                                  {index !== section.flow!.length - 1 && (
                                    <ArrowRight
                                      className={[
                                        "hidden h-4 w-4 flex-shrink-0 sm:block",
                                        isDark
                                          ? "text-white/35"
                                          : "text-muted-foreground",
                                      ].join(" ")}
                                    />
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            }

            /* COMPARISON */
            case "comparison":
              return (
                <section
                  key={`comparison-${sectionIndex}`}
                  className="py-20 sm:py-24 lg:py-28"
                >
                  <div className="container mx-auto px-4 sm:px-6">
                    <div className="mx-auto max-w-7xl">
                      {section.number && (
                        <p className="text-7xl font-bold text-primary/15 sm:text-8xl">
                          {section.number}
                        </p>
                      )}

                      {section.eyebrow && (
                        <p className="mb-4 text-sm font-medium text-primary">
                          {section.eyebrow}
                        </p>
                      )}

                      <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                        {section.title}
                      </h2>

                      <div className="mt-10 max-w-4xl space-y-6 text-lg leading-relaxed text-muted-foreground">
                        {section.intro.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>

                      <div className="mt-12 grid overflow-hidden rounded-3xl border border-border md:grid-cols-2">
                        {section.items.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{
                              opacity: 0,
                              x: index === 0 ? -25 : 25,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            viewport={{ once: true }}
                            className={[
                              "p-8 sm:p-10",
                              index !== section.items.length - 1
                                ? "border-b border-border md:border-b-0 md:border-r"
                                : "",
                            ].join(" ")}
                          >
                            <p className="text-sm font-medium text-primary">
                              {item.name}
                            </p>

                            <p className="mt-6 text-5xl font-bold tracking-tight">
                              {item.primaryValue}
                            </p>

                            <p className="mt-2 text-muted-foreground">
                              {item.primaryLabel}
                            </p>

                            {item.secondaryValue && (
                              <>
                                <p className="mt-8 text-3xl font-bold">
                                  {item.secondaryValue}
                                </p>

                                <p className="mt-2 text-sm text-muted-foreground">
                                  {item.secondaryLabel}
                                </p>
                              </>
                            )}
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-10 max-w-4xl space-y-5 text-lg leading-relaxed text-muted-foreground">
                        {section.paragraphs.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}

                        {section.statement && (
                          <p className="pt-4 text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
                            {section.statement}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              );

            /* GROWTH */
            case "growth":
              return (
                <section
                  key={`growth-${sectionIndex}`}
                  className="border-y border-border bg-secondary/20 py-20 sm:py-24 lg:py-28"
                >
                  <div className="container mx-auto px-4 sm:px-6">
                    <div className="mx-auto max-w-7xl">
                      {section.eyebrow && (
                        <p className="mb-4 text-sm font-medium text-primary">
                          {section.eyebrow}
                        </p>
                      )}

                      <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                        {section.title}
                      </h2>

                      <div className="mt-12 grid gap-6 md:grid-cols-2">
                        {section.items.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="rounded-3xl border border-border bg-background p-8 sm:p-10"
                          >
                            <p className="text-sm text-muted-foreground">
                              {item.name}
                            </p>

                            <div className="mt-6 flex items-center gap-4">
                              <span className="text-4xl font-bold sm:text-5xl">
                                {item.from}
                              </span>

                              <ArrowRight className="h-6 w-6 text-primary" />

                              <span className="text-4xl font-bold sm:text-5xl">
                                {item.to}
                              </span>
                            </div>

                            <p className="mt-5 text-sm text-muted-foreground">
                              {item.period}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-12 max-w-4xl space-y-6 text-lg leading-relaxed text-muted-foreground">
                        {section.paragraphs.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              );

            /* SPOTLIGHT */
            case "spotlight":
              return (
                <section
                  key={`spotlight-${sectionIndex}`}
                  className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24 lg:py-28"
                >
                  <div className="container relative z-10 mx-auto px-4 sm:px-6">
                    <div className="mx-auto max-w-7xl">
                      <p className="text-sm font-medium text-white/55">
                        {section.eyebrow}
                      </p>

                      <div className="mt-8 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                        >
                          <p className="text-7xl font-bold tracking-tight sm:text-8xl md:text-9xl">
                            {section.value}
                          </p>

                          <p className="mt-4 text-lg text-white/65">
                            {section.label}
                          </p>

                          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10">
                            {section.stats.map((stat, index) => (
                              <div key={`${stat.value}-${index}`}>
                                <p className="text-3xl font-bold">
                                  {stat.value}
                                </p>

                                <p className="mt-2 text-sm text-white/55">
                                  {stat.label}
                                </p>
                              </div>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="space-y-6 text-lg leading-relaxed text-white/70"
                        >
                          {section.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))}

                          {section.statement && (
                            <p className="border-t border-white/15 pt-8 text-2xl font-semibold leading-snug text-white sm:text-3xl">
                              {section.statement}
                            </p>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </section>
              );

            /* CHANNELS */
            case "channels":
              return (
                <section
                  key={`channels-${sectionIndex}`}
                  className="py-20 sm:py-24 lg:py-28"
                >
                  <div className="container mx-auto px-4 sm:px-6">
                    <div className="mx-auto max-w-7xl">
                      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        {section.title}
                      </h2>

                      {section.intro && (
                        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                          {section.intro}
                        </p>
                      )}

                      <div className="mt-12 grid gap-6 md:grid-cols-2">
                        {section.channels.map((channel, index) => (
                          <motion.div
                            key={channel.name}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="rounded-3xl border border-border p-8 sm:p-10"
                          >
                            <p className="text-sm font-medium text-primary">
                              {channel.name}
                            </p>

                            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                              {channel.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {section.conclusion && (
                        <p className="mt-10 max-w-4xl text-lg leading-relaxed text-muted-foreground">
                          {section.conclusion}
                        </p>
                      )}
                    </div>
                  </div>
                </section>
              );

            /* SUMMARY */
            case "summary":
              return (
                <section
                  key={`summary-${sectionIndex}`}
                  className="border-y border-border bg-secondary/20 py-20 sm:py-24 lg:py-28"
                >
                  <div className="container mx-auto px-4 sm:px-6">
                    <div className="mx-auto max-w-7xl">
                      {section.eyebrow && (
                        <p className="mb-4 text-sm font-medium text-primary">
                          {section.eyebrow}
                        </p>
                      )}

                      <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                        {section.title}
                      </h2>

                      {section.opening && (
                        <p className="mt-8 max-w-4xl text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
                          {section.opening}
                        </p>
                      )}

                      {section.intro && (
                        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-muted-foreground">
                          {section.intro}
                        </p>
                      )}

                      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {section.flow.map((step, index) => (
                          <motion.div
                            key={`${step.label}-${index}`}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.05,
                            }}
                            className="rounded-2xl border border-border bg-background p-5"
                          >
                            <p className="text-xs font-medium text-primary">
                              {String(index + 1).padStart(2, "0")}
                            </p>

                            <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                              {step.label}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-12 max-w-4xl">
                        <p className="text-lg leading-relaxed text-muted-foreground">
                          W efekcie w okresie współpracy:
                        </p>

                        <ul className="mt-6 space-y-4">
                          {section.results.map((result, index) => (
                            <li
                              key={index}
                              className="flex gap-3 text-lg leading-relaxed text-muted-foreground"
                            >
                              <span className="mt-[10px] h-2 w-2 flex-shrink-0 rounded-full bg-primary" />

                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              );

            /* NOTE */
            case "note":
              return (
                <section
                  key={`note-${sectionIndex}`}
                  className="py-20 sm:py-24"
                >
                  <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="mx-auto max-w-5xl rounded-3xl border border-primary/15 bg-primary/[0.05] p-8 sm:p-10 md:p-12"
                    >
                      {section.eyebrow && (
                        <p className="text-sm font-medium text-primary">
                          {section.eyebrow}
                        </p>
                      )}

                      <div className="mt-6 space-y-6">
                        {section.paragraphs.map((paragraph, index) => (
                          <p
                            key={index}
                            className={
                              index === section.paragraphs.length - 1
                                ? "text-lg font-medium leading-relaxed text-foreground"
                                : "text-lg leading-relaxed text-muted-foreground"
                            }
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </section>
              );

            /* FINAL */
            case "final":
              return (
                <section
                  key={`final-${sectionIndex}`}
                  className="relative overflow-hidden bg-[#17131f] py-20 text-white sm:py-24 lg:py-28"
                >
                  <motion.div
                    className="pointer-events-none absolute -bottom-52 right-0 h-[520px] w-[520px] rounded-full bg-primary/25 blur-[150px]"
                    animate={{
                      x: [0, -25, 0],
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    aria-hidden="true"
                  />

                  <div className="container relative z-10 mx-auto px-4 sm:px-6">
                    <div className="mx-auto max-w-7xl">
                      <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
                      >
                        {section.statement}
                      </motion.p>

                      {(section.ctaText || section.ctaButton) && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                          className="mt-12 border-t border-white/10 pt-10"
                        >
                          {section.ctaText && (
                            <p className="text-lg text-white/65">
                              {section.ctaText}
                            </p>
                          )}

                          {section.ctaButton && (
                            <Button
                              type="button"
                              size="lg"
                              onClick={() => setIsContactOpen(true)}
                              className="group mt-6 h-auto rounded-full bg-white px-7 py-5 text-base text-[#17131f] transition-all duration-300 hover:bg-white/90 sm:px-8 sm:text-lg"
                            >
                              {section.ctaButton}

                              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </section>
              );

            default:
              return null;
          }
        })}
      </main>

      <Footer />

      <ContactFormDialog
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
