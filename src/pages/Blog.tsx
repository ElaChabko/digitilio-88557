import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  SlidersHorizontal,
} from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

import { blogPosts } from "@/content/blogs/index";

type BlogListItem = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug?: string;
};

type KnowledgeArea =
  | "Wszystkie"
  | "Decyzje marketingowe"
  | "Diagnoza i analityka"
  | "Strategia i komunikacja"
  | "Social media"
  | "AI w praktyce";

const knowledgeAreas: KnowledgeArea[] = [
  "Wszystkie",
  "Decyzje marketingowe",
  "Diagnoza i analityka",
  "Strategia i komunikacja",
  "Social media",
  "AI w praktyce",
];

/**
 * Na razie wykorzystujemy istniejące pole `category`.
 * Kiedy będziemy podpinać Medium, dodamy osobne pole `knowledgeArea`
 * do wspólnego modelu treści.
 */
const getKnowledgeArea = (post: BlogListItem): KnowledgeArea => {
  const category = post.category.toLowerCase();

  if (
    category.includes("social") ||
    category.includes("instagram") ||
    category.includes("facebook") ||
    category.includes("linkedin")
  ) {
    return "Social media";
  }

  if (
    category.includes("ai") ||
    category.includes("sztuczna inteligencja")
  ) {
    return "AI w praktyce";
  }

  if (
    category.includes("anality") ||
    category.includes("dane") ||
    category.includes("analytics")
  ) {
    return "Diagnoza i analityka";
  }

  if (
    category.includes("strateg") ||
    category.includes("komunik")
  ) {
    return "Strategia i komunikacja";
  }

  return "Decyzje marketingowe";
};

const formatDate = (date: string) => {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
};

export default function Blog() {
  const [activeArea, setActiveArea] =
    useState<KnowledgeArea>("Wszystkie");

  const posts: BlogListItem[] = [...blogPosts];

  /**
   * Na razie pierwszy artykuł traktujemy jako wyróżniony.
   * Później możemy dodać np. `featured: true` do danych artykułu.
   */
  const featuredPost = posts[0];

  const filteredPosts = useMemo(() => {
    if (activeArea === "Wszystkie") {
      return posts;
    }

    return posts.filter(
      (post) => getKnowledgeArea(post) === activeArea
    );
  }, [activeArea, posts]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Baza wiedzy o marketingu, strategii i AI | Digitilio"
        description="Analizy, obserwacje z projektów i praktyczne materiały o strategii, danych, komunikacji i AI. Wiedza, która pomaga podejmować lepsze decyzje marketingowe."
        canonical="https://digitilio.pl/blog"
      />

      <Navigation />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#17131f] pb-16 pt-36 text-white sm:pb-20 sm:pt-40 lg:pb-24">
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

          <motion.div
            className="pointer-events-none absolute -left-48 top-0 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[150px]"
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
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
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-sm font-medium text-primary-foreground/60"
              >
                Baza wiedzy
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-5 max-w-5xl text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl"
              >
                Lepsze decyzje marketingowe zaczynają się od właściwej diagnozy.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                }}
                className="mt-7 max-w-3xl text-lg leading-relaxed text-white/65 sm:text-xl"
              >
                Analizy, obserwacje z projektów i praktyczne materiały o
                strategii, danych, komunikacji i AI. Nie po to, żeby robić
                więcej, ale żeby lepiej oceniać, co rzeczywiście ma sens.
              </motion.p>
            </div>
          </div>
        </section>

        {/* FILTRY */}
        <section className="border-b border-border bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl py-6">
              <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground md:hidden">
                <SlidersHorizontal className="h-4 w-4" />
                Filtruj materiały
              </div>

              <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
                {knowledgeAreas.map((area) => {
                  const isActive = activeArea === area;

                  return (
                    <button
                      key={area}
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className={[
                        "shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200",
                        isActive
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground",
                      ].join(" ")}
                    >
                      {area}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED */}
        {featuredPost && activeArea === "Wszystkie" && (
          <section className="py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="mx-auto max-w-7xl">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-sm font-medium text-primary"
                >
                  Polecam zacząć tutaj
                </motion.p>

                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55 }}
                  className="mt-6 overflow-hidden rounded-3xl border border-border bg-card"
                >
                  {featuredPost.slug ? (
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="group grid lg:grid-cols-[1.05fr_0.95fr]"
                    >
                      <div className="relative min-h-[260px] overflow-hidden sm:min-h-[340px] lg:min-h-[460px]">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          loading="eager"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>

                      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs font-medium uppercase tracking-[0.12em] text-primary">
                            {getKnowledgeArea(featuredPost)}
                          </span>

                          <span className="text-xs text-muted-foreground">
                            ARTYKUŁ
                          </span>
                        </div>

                        <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                          {featuredPost.title}
                        </h2>

                        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                          {featuredPost.excerpt}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            {formatDate(featuredPost.date)}
                          </span>

                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="h-4 w-4" />
                            {featuredPost.readTime}
                          </span>
                        </div>

                        <div className="mt-9 inline-flex items-center gap-2 font-medium text-foreground">
                          Czytaj materiał
                          <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  ) : null}
                </motion.article>
              </div>
            </div>
          </section>
        )}

        {/* LIBRARY */}
        <section
          className={
            activeArea === "Wszystkie"
              ? "border-t border-border bg-secondary/15 py-16 sm:py-20 lg:py-24"
              : "py-16 sm:py-20 lg:py-24"
          }
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-primary">
                    {activeArea === "Wszystkie"
                      ? "Biblioteka"
                      : activeArea}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {activeArea === "Wszystkie"
                      ? "Najnowsze materiały"
                      : "Materiały w tym obszarze"}
                  </h2>
                </div>

                <p className="text-sm text-muted-foreground">
                  {filteredPosts.length}{" "}
                  {filteredPosts.length === 1
                    ? "materiał"
                    : "materiałów"}
                </p>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
                  {filteredPosts.map((post, index) => {
                    const isWide =
                      filteredPosts.length > 2 &&
                      (index === 0 || index % 5 === 0);

                    if (!post.slug) {
                      return null;
                    }

                    return (
                      <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{
                          duration: 0.5,
                          delay: Math.min(index * 0.05, 0.2),
                        }}
                        className={
                          isWide
                            ? "md:col-span-2 lg:col-span-8"
                            : "lg:col-span-4"
                        }
                      >
                        <Link
                          to={`/blog/${post.slug}`}
                          className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg"
                        >
                          <div
                            className={[
                              "relative overflow-hidden",
                              isWide
                                ? "aspect-[16/8] lg:aspect-[16/7]"
                                : "aspect-[16/10]",
                            ].join(" ")}
                          >
                            <img
                              src={post.image}
                              alt={post.title}
                              loading="lazy"
                              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                          </div>

                          <div className="flex flex-1 flex-col p-6 sm:p-7">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <span className="text-xs font-medium uppercase tracking-[0.1em] text-primary">
                                {getKnowledgeArea(post)}
                              </span>

                              <span className="text-xs text-muted-foreground">
                                ARTYKUŁ
                              </span>
                            </div>

                            <h3
                              className={[
                                "mt-4 font-bold leading-tight tracking-tight text-foreground",
                                isWide
                                  ? "text-2xl sm:text-3xl"
                                  : "text-xl sm:text-2xl",
                              ].join(" ")}
                            >
                              {post.title}
                            </h3>

                            <p className="mt-4 line-clamp-3 text-base leading-relaxed text-muted-foreground">
                              {post.excerpt}
                            </p>

                            <div className="mt-auto flex items-end justify-between gap-5 pt-8">
                              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                                <span className="inline-flex items-center gap-1.5">
                                  <Calendar className="h-3.5 w-3.5" />
                                  {formatDate(post.date)}
                                </span>

                                <span className="inline-flex items-center gap-1.5">
                                  <Clock className="h-3.5 w-3.5" />
                                  {post.readTime}
                                </span>
                              </div>

                              <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                          </div>
                        </Link>
                      </motion.article>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-10 rounded-3xl border border-border bg-background p-8 sm:p-10">
                  <p className="text-lg font-medium text-foreground">
                    W tej kategorii nie ma jeszcze materiałów.
                  </p>

                  <p className="mt-2 text-muted-foreground">
                    Kolejne analizy i publikacje będą pojawiać się tutaj wraz z
                    rozwojem Bazy wiedzy.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="border-t border-border py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <p className="text-sm font-medium text-primary">
                  Wiedza to punkt wyjścia
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Dobra praktyka nie zawsze jest dobrą decyzją w Twojej
                  sytuacji.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Materiały pomagają zrozumieć problem. Jeśli potrzebujesz
                  przełożyć je na konkretną sytuację firmy, wtedy warto zacząć
                  od diagnozy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
