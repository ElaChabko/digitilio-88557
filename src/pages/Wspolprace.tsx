
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Quote,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { caseStudies } from "@/content/caseStudies";

const getCaseStudyMeta = (scope: string, industry: string) => {
  const mainScope = scope
    .split(",")[0]
    ?.trim()
    .replace(/^strategia\s+/i, "");

  const mainIndustry = industry.split("/")[0]?.trim();

  return [mainScope, mainIndustry].filter(Boolean).join(" · ");
};

const getCaseStudyExcerpt = (lead: string) => {
  const firstSentence = lead.match(/^[^.!?]+[.!?]/);

  return firstSentence ? firstSentence[0].trim() : lead;
};

const references = [
  {
    id: "ideo-force",
    company: "Ideo Force",
    logo: "/logos/ideo-force.svg",
    pdf: "/referencje/Ela%20Referencje.pdf",
    author: "Joanna Tymowicz",
    position: "Wiceprezeska Zarządu Ideo Force",
    quote:
      "Ela potrafi dobrze łączyć strategiczne spojrzenie na komunikację z jej sprawną realizacją.",
    description:
      "Zwraca uwagę nie tylko na jakość samych treści, ale również na ich spójność z celami biznesowymi, charakterem marki i szerszym kontekstem działań marketingowych.",
  },
];

export default function Wspolprace() {
  const [activeReference, setActiveReference] = useState<string | null>(
    null
  );

  const [expandedPdf, setExpandedPdf] = useState<string | null>(null);

  const toggleReference = (id: string) => {
    setActiveReference((current) => (current === id ? null : id));
    setExpandedPdf(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Współprace i case studies | Digitilio"
        description="Wybrane projekty Digitilio pokazujące, jak strategia, dane i decyzje przekładają się na konkretne działania marketingowe."
        canonical="https://digitilio.pl/wspolprace"
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

          <div
            className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]"
            aria-hidden="true"
          />

          <div className="container relative z-10 mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 text-sm font-medium text-white/55 sm:text-base"
              >
                Współprace
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
              >
                Wybrane współprace i case studies
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-white/65 sm:text-xl"
              >
                Pokazuję nie tylko efekty działań, ale również decyzje, które do
                nich prowadziły - co analizowaliśmy, co zmienialiśmy i dlaczego.
              </motion.p>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10 text-sm font-medium text-primary"
              >
                Case studies
              </motion.p>

              <div className="divide-y divide-border border-y border-border">
                {caseStudies.map((caseStudy, caseIndex) => {
                  const results = caseStudy.results.slice(0, 3);

                  return (
                    <Link
                      key={caseStudy.slug}
                      to={`/wspolprace/${caseStudy.slug}`}
                      className="group block"
                    >
                      <motion.article
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                          duration: 0.65,
                          delay: caseIndex * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative py-10 sm:py-12 lg:py-14"
                      >
                        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-16">
                          <div>
                            <p className="mb-4 text-sm font-medium text-muted-foreground">
                              {getCaseStudyMeta(
                                caseStudy.scope,
                                caseStudy.industry
                              )}
                            </p>

                            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-4xl">
                              {caseStudy.title}
                            </h2>

                            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                              {getCaseStudyExcerpt(caseStudy.lead)}
                            </p>

                            <div className="mt-8 flex items-center gap-2 font-medium text-primary">
                              <span>Zobacz case study</span>
                              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                          </div>

                          {results.length > 0 && (
                            <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                              {results.map((result, resultIndex) => (
                                <div
                                  key={`${caseStudy.slug}-${result.value}-${resultIndex}`}
                                >
                                  <p className="whitespace-nowrap text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                    {result.value}
                                  </p>

                                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {result.label}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.article>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* REFERENCJE */}
        <section className="border-t border-border bg-muted/20 py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="mb-5 text-sm font-medium text-primary">
                  Referencje
                </p>

                <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Co mówią o współpracy?
                </h2>
              </motion.div>

              <div className="mt-12 space-y-8">
                {references.map((reference) => {
                  const isOpen = activeReference === reference.id;
                  const isPdfOpen = expandedPdf === reference.id;

                  return (
                    <div key={reference.id}>
                      {/* LOGO */}
                      <button
                        type="button"
                        onClick={() => toggleReference(reference.id)}
                        aria-expanded={isOpen}
                        aria-controls={`reference-${reference.id}`}
                        className={`group flex min-h-[120px] w-full max-w-[250px] items-center justify-center rounded-xl border bg-background p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                          isOpen
                            ? "border-primary/50 shadow-md"
                            : "border-border"
                        }`}
                      >
                        <img
                          src={reference.logo}
                          alt={`Logo ${reference.company}`}
                          className="max-h-16 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </button>

                      {/* DYMEK */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`reference-${reference.id}`}
                            key={`bubble-${reference.id}`}
                            initial={{ opacity: 0, height: 0, y: -8 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -8 }}
                            transition={{
                              duration: 0.35,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="ml-10 h-0 w-0 border-x-[12px] border-b-[12px] border-x-transparent border-b-border" />

                            <div className="rounded-xl border border-border bg-background p-6 shadow-sm sm:p-10 lg:max-w-4xl">
                              <Quote
                                className="mb-6 h-8 w-8 text-primary"
                                strokeWidth={1.5}
                                aria-hidden="true"
                              />

                              <blockquote>
                                <p className="text-xl font-medium leading-relaxed tracking-tight text-foreground sm:text-2xl">
                                  „{reference.quote}”
                                </p>

                                <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                                  {reference.description}
                                </p>
                              </blockquote>

                              <div className="mt-8 border-t border-border pt-6">
                                <p className="font-semibold text-foreground">
                                  {reference.author}
                                </p>

                                <p className="mt-1 text-sm text-muted-foreground">
                                  {reference.position}
                                </p>

                                <button
                                  type="button"
                                  onClick={() =>
                                    setExpandedPdf((current) =>
                                      current === reference.id
                                        ? null
                                        : reference.id
                                    )
                                  }
                                  aria-expanded={isPdfOpen}
                                  aria-controls={`pdf-${reference.id}`}
                                  className="mt-7 inline-flex items-center gap-2 rounded-lg border border-primary px-5 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                >
                                  {isPdfOpen
                                    ? "Ukryj pełne referencje"
                                    : "Pokaż pełne referencje"}

                                  <ChevronDown
                                    className={`h-4 w-4 transition-transform duration-300 ${
                                      isPdfOpen ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                              </div>

                              {/* PODGLĄD PDF */}
                              <AnimatePresence initial={false}>
                                {isPdfOpen && (
                                  <motion.div
                                    id={`pdf-${reference.id}`}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.35 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="mt-6">
                                      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                                        <p className="text-sm font-medium text-foreground">
                                          Pełny dokument referencyjny
                                        </p>

                                        <a
                                          href={reference.pdf}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                                        >
                                          Otwórz PDF w nowej karcie
                                          <ArrowUpRight className="h-4 w-4" />
                                        </a>
                                      </div>

                                      <iframe
                                        src={reference.pdf}
                                        title={`Referencje ${reference.company}`}
                                        className="h-[480px] w-full rounded-lg border border-border bg-white sm:h-[650px] lg:h-[800px]"
                                        loading="lazy"
                                      />
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
