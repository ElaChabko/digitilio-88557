
import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { caseStudies } from "@/content/caseStudies";
import { StructuredData } from "@/components/StructuredData";
import { createCollectionSchema } from "@/lib/structuredData";
import { PageHero } from "@/components/site/PageHero";
import { Pill } from "@/components/site/motion";
import { PracticeDecisions } from "@/components/site/PracticeDecisions";

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

type Reference = {
  id: string;
  company: string;
  website: string;
  logo: string;
  logoClassName?: string;
  pdf: string;
  image: string;
  author: string;
  position: string;
  quote: string;
  description: string;
};

const references: Reference[] = [
  {
    id: "ideo-force",
    company: "Ideo Force",
    website: "https://ideoforce.pl",
    logo: "/logos/ideo-force.svg",
    pdf: "/referencje/Ela%20Referencje.pdf",
    image: "/referencje/ideo-force-referencje.webp",
    author: "Joanna Tymowicz",
    position: "Wiceprezeska Zarządu Ideo Force",
    quote:
      "Ela potrafi dobrze łączyć strategiczne spojrzenie na komunikację z jej sprawną realizacją.",
    description:
      "Zwraca uwagę nie tylko na jakość samych treści, ale również na ich spójność z celami biznesowymi, charakterem marki i szerszym kontekstem działań marketingowych.",
  },
  {
    id: "id-group",
    company: "ID Group",
    website: "https://www.idgroup.team",
    logo: "/logos/id-group.png",
    pdf: "/referencje/id-group-referencje.pdf",
    image: "/referencje/id-group-referencje.webp",
    author: "Łukasz Szymczak",
    position: "Founder ID Group",
    logoClassName: "max-h-[88px]",
    quote:
      "Praca z Elą Chabko to nie tylko przyjemność, ale i wewnętrzny spokój.",
    description:
      "Jest całkowicie samodzielna i pokazuje wysoki poziom kompetencji zarówno w pracy hands-on, komunikacji z klientem, przygotowaniu strategii, jak i prowadzeniu projektu całościowo.",
  },
];

export default function Wspolprace() {
  const [activeReference, setActiveReference] = useState<string | null>(
    null
  );

  const [expandedPdf, setExpandedPdf] = useState<string | null>(null);
  const [arrowLeft, setArrowLeft] = useState(40);
  const referencesRowRef = useRef<HTMLDivElement | null>(null);
  const tileRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Strzałka dymka wskazuje środek klikniętego kafelka z logo
  useLayoutEffect(() => {
    if (!activeReference) return;

    const updateArrow = () => {
      const tile = tileRefs.current[activeReference];
      const row = referencesRowRef.current;
      if (!tile || !row) return;
      const tileRect = tile.getBoundingClientRect();
      const rowRect = row.getBoundingClientRect();
      setArrowLeft(tileRect.left - rowRect.left + tileRect.width / 2 - 12);
    };

    updateArrow();
    window.addEventListener("resize", updateArrow);
    return () => window.removeEventListener("resize", updateArrow);
  }, [activeReference]);

  const toggleReference = (id: string) => {
    setActiveReference((current) => (current === id ? null : id));
    setExpandedPdf(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Współprace i case studies | Digitilio"
        description="Wybrane projekty Digitilio pokazujące, jak strategia, dane i decyzje przekładają się na konkretne działania marketingowe."
        canonical="https://digitilio.pl/wspolprace"
      />

      <StructuredData
        data={createCollectionSchema({
          name: "Współprace i case studies Digitilio",
          description:
            "Wybrane projekty pokazujące, jak strategia, dane i decyzje przekładają się na konkretne działania marketingowe.",
          url: "https://digitilio.pl/wspolprace",
          items: caseStudies.map((caseStudy) => ({
            name: caseStudy.title,
            url: `https://digitilio.pl/wspolprace/${caseStudy.slug}`,
          })),
        })}
      />

      <Navigation />

      <main>
        <PageHero
          pill="Współprace"
          title="Wybrane współprace i case studies"
          lead="Pokazuję nie tylko efekty działań, ale również decyzje, które do nich prowadziły - co analizowaliśmy, co zmienialiśmy i dlaczego."
        />

        {/* CASE STUDIES */}
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div>
            <div className="mx-auto max-w-[1400px]">
              <Pill className="mb-10">Case studies</Pill>

              <div className="space-y-6">
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
                        className="relative overflow-hidden rounded-[2.2rem] bg-lilac-soft p-7 transition-colors duration-500 group-hover:bg-violet sm:p-10 lg:p-14"
                      >
                        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-16">
                          <div>
                            <p className="mb-4 text-sm font-medium text-violet transition-colors duration-500 group-hover:text-lilac">
                              {getCaseStudyMeta(
                                caseStudy.scope,
                                caseStudy.industry
                              )}
                            </p>

                            <h2 className="max-w-4xl text-[1.8rem] font-semibold leading-[1.08] tracking-[-0.035em] text-foreground transition-colors duration-500 group-hover:text-white sm:text-4xl lg:text-[2.8rem]">
                              {caseStudy.title}
                            </h2>

                            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/80">
                              {getCaseStudyExcerpt(caseStudy.lead)}
                            </p>

                            <div className="mt-8 flex items-center gap-2 font-semibold text-violet transition-colors duration-500 group-hover:text-white">
                              <span>Zobacz case study</span>
                              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                          </div>

                          {results.length > 0 && (
                            <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-violet/15 pt-8 transition-colors duration-500 group-hover:border-white/20 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                              {results.map((result, resultIndex) => (
                                <div
                                  key={`${caseStudy.slug}-${result.value}-${resultIndex}`}
                                >
                                  <p className="whitespace-nowrap text-3xl font-semibold tracking-[-0.04em] text-violet transition-colors duration-500 group-hover:text-white sm:text-4xl">
                                    {result.value}
                                  </p>

                                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/70">
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

        {/* DECYZJE Z PRAKTYKI */}
        <PracticeDecisions />

        {/* REFERENCJE */}
        <section className="bg-plum px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
          <div>
            <div className="mx-auto max-w-[1400px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Pill tone="light">Referencje</Pill>

                <h2 className="mt-6 max-w-3xl text-[2.2rem] font-semibold tracking-[-0.045em] sm:text-6xl">
                  Co mówią o współpracy?
                </h2>
              </motion.div>

              <div ref={referencesRowRef} className="relative mt-12">
                {/* LOGA */}
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  {references.map((reference) => {
                    const isOpen = activeReference === reference.id;

                    return (
                      <button
                        key={reference.id}
                        ref={(el) => {
                          tileRefs.current[reference.id] = el;
                        }}
                        type="button"
                        onClick={() => toggleReference(reference.id)}
                        aria-expanded={isOpen}
                        aria-controls={`reference-${reference.id}`}
                        className={`group flex min-h-[120px] w-[calc(50%-8px)] items-center justify-center rounded-[1.6rem] border bg-white p-5 transition-all duration-300 hover:border-violet/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 sm:w-[250px] sm:p-6 ${
                          isOpen
                            ? "border-violet/50 shadow-md"
                            : "border-border"
                        }`}
                      >
                        <img
                          src={reference.logo}
                          alt={`Logo ${reference.company}`}
                          className={`${reference.logoClassName ?? "max-h-16"} w-full object-contain transition-transform duration-300 group-hover:scale-105`}
                          loading="lazy"
                        />
                      </button>
                    );
                  })}
                </div>

                {/* DYMEK */}
                <AnimatePresence initial={false} mode="wait">
                  {references
                    .filter((reference) => reference.id === activeReference)
                    .map((reference) => {
                      const isPdfOpen = expandedPdf === reference.id;

                      return (
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
                      <div style={{ marginLeft: arrowLeft }} className="h-0 w-0 border-x-[12px] border-b-[12px] border-x-transparent border-b-white" />

                      <div className="rounded-[2rem] bg-white p-6 text-foreground shadow-sm sm:p-10 lg:max-w-4xl">
                        <span
                          aria-hidden="true"
                          className="mb-8 block h-9 overflow-visible text-7xl font-semibold leading-[0.6] text-violet"
                        >
                          „
                        </span>

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

                          <a
                            href={reference.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 flex w-fit items-center gap-1 text-sm font-medium text-violet hover:underline"
                          >
                            {reference.website.replace(/^https?:\/\//, "")}
                            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                          </a>

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
                            className="mt-7 inline-flex items-center gap-2 rounded-full border border-violet px-5 py-3 font-medium text-violet transition-colors hover:bg-primary hover:text-violet-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2"
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
                                    className="inline-flex items-center gap-2 text-sm font-medium text-violet hover:underline"
                                  >
                                    Otwórz PDF w nowej karcie
                                    <ArrowUpRight className="h-4 w-4" />
                                  </a>
                                </div>


<img
  src={reference.image}
  alt={`Pełna treść referencji ${reference.company} wystawionych przez: ${reference.author}`}
  className="block h-auto w-full rounded-lg bg-white"
  loading="lazy"
/>

                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                      );
                    })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
