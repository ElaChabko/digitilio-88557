import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

import { getCaseStudyBySlug } from "@/content/caseStudies";

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();

  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1 flex items-center justify-center px-4">
          <p className="text-muted-foreground">
            Nie znaleziono case study.
          </p>
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
          {/* GRID */}
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

          {/* GLOW */}
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
              <motion.a
                href="/wspolprace"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-sm text-white/55 transition-colors hover:text-white"
              >
                ← Współprace
              </motion.a>

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

              {/* META */}
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

        {/* TEMPORARY CONTENT */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <p className="text-sm text-muted-foreground">
                Pełna treść case study zostanie dodana w kolejnym kroku.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
