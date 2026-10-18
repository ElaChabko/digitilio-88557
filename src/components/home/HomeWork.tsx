import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ImageIcon } from "lucide-react";

import { caseStudies } from "@/content/caseStudies";
import { EASE, Eyebrow, PlaceholderTag, RevealText } from "./primitives";

/**
 * Wybrane realizacje. Pierwsza karta to opublikowane case study,
 * pozostałe to PLACEHOLDERY do podmiany na realizacje po zebraniu zgód.
 */
const placeholders = [
  { sector: "Technologia B2B / SaaS", scope: "Strategia contentu i LinkedIn" },
  { sector: "Marka produktowa", scope: "Komunikacja i social media" },
  { sector: "E-commerce", scope: "Meta Ads i analityka" },
];

export const HomeWork = () => {
  const featured = caseStudies[0];
  const stat = featured?.results?.[0];

  return (
    <section id="work" className="bg-ink py-24 text-white sm:py-28 lg:py-36">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Eyebrow tone="light">Wybrane realizacje</Eyebrow>
              <RevealText
                text="Projekty, które przyniosły efekty."
                className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
              />
            </div>

            <Link
              to="/wspolprace"
              className="group inline-flex items-center gap-3 self-start rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-ink lg:self-auto"
            >
              Wszystkie współprace
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-20">
            {/* Prawdziwe case study */}
            {featured && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <Link
                  to={`/wspolprace/${featured.slug}`}
                  className="group block"
                >
                  <div className="relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-3xl bg-primary p-8 sm:p-10">
                    <div
                      className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/15"
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/15"
                      aria-hidden="true"
                    />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                      Case study
                    </span>
                    {stat && (
                      <div>
                        <p className="text-5xl font-extrabold tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                          {stat.value}
                        </p>
                        <p className="mt-2 text-base text-white/75 sm:text-lg">
                          {stat.label}
                        </p>
                      </div>
                    )}
                    <ArrowUpRight className="absolute bottom-8 right-8 h-7 w-7 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 sm:bottom-10 sm:right-10" />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-6">
                    <h3 className="text-lg font-bold leading-snug sm:text-xl">
                      Meta Ads dla lokalnego gabinetu specjalistycznego
                    </h3>
                  </div>
                  <p className="mt-1.5 text-sm uppercase tracking-[0.12em] text-white/45">
                    Usługi lokalne · Meta Ads
                  </p>
                </Link>
              </motion.div>
            )}

            {/* Placeholdery */}
            {placeholders.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: ((index + 1) % 2) * 0.12, ease: EASE }}
              >
                <div className="relative flex aspect-[4/3] flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-dashed border-white/20 bg-ink-soft">
                  <ImageIcon className="h-10 w-10 text-white/20" strokeWidth={1.25} />
                  <PlaceholderTag tone="light">Zdjęcie realizacji</PlaceholderTag>
                </div>
                <h3 className="mt-5 text-lg font-bold leading-snug text-white/80 sm:text-xl">
                  {item.scope}
                </h3>
                <p className="mt-1.5 text-sm uppercase tracking-[0.12em] text-white/45">
                  {item.sector}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
