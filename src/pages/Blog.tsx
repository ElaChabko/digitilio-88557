import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  ExternalLink,
  SlidersHorizontal,
} from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

import { blogPosts } from "@/content/blogs/index";

type KnowledgeArea =
  | "Wszystkie"
  | "Decyzje marketingowe"
  | "Diagnoza i analityka"
  | "Strategia i komunikacja"
  | "Social media"
  | "AI w praktyce";

type KnowledgeSource = "blog" | "medium";

type KnowledgeItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string | null;
  source: KnowledgeSource;
  href: string;
  categories: string[];
  knowledgeArea: Exclude<KnowledgeArea, "Wszystkie">;
};

type MediumApiPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  image: string | null;
  categories: string[];
  readTime: string;
};

type MediumApiResponse = {
  ok: boolean;
  posts?: MediumApiPost[];
};

const knowledgeAreaOrder: KnowledgeArea[] = [
  "Wszystkie",
  "Decyzje marketingowe",
  "Diagnoza i analityka",
  "Strategia i komunikacja",
  "Social media",
  "AI w praktyce",
];

const getKnowledgeArea = (
  categories: string[]
): Exclude<KnowledgeArea, "Wszystkie"> => {
  const value = categories.join(" ").toLowerCase();

  if (
    value.includes("ai") ||
    value.includes("artificial intelligence") ||
    value.includes("ai_governance") ||
    value.includes("ai-governance")
  ) {
    return "AI w praktyce";
  }

  if (
    value.includes("analytics") ||
    value.includes("anality") ||
    value.includes("data") ||
    value.includes("dane") ||
    value.includes("pomiar")
  ) {
    return "Diagnoza i analityka";
  }

  if (
    value.includes("social") ||
    value.includes("instagram") ||
    value.includes("facebook") ||
    value.includes("linkedin")
  ) {
    return "Social media";
  }

  if (
    value.includes("strateg") ||
    value.includes("communication") ||
    value.includes("komunik")
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

const getMaterialCountLabel = (count: number) => {
  if (count === 1) {
    return "1 materiał";
  }

  if (count >= 2 && count <= 4) {
    return `${count} materiały`;
  }

  return `${count} materiałów`;
};

const KnowledgeLink = ({
  item,
  children,
  className,
}: {
  item: KnowledgeItem;
  children: ReactNode;
  className?: string;
}) => {
  if (item.source === "medium") {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={`Czytaj na Medium: ${item.title}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={item.href}
      className={className}
      aria-label={`Czytaj artykuł: ${item.title}`}
    >
      {children}
    </Link>
  );
};

export default function Blog() {
  const [mediumPosts, setMediumPosts] = useState<MediumApiPost[]>([]);
  const [activeArea, setActiveArea] =
    useState<KnowledgeArea>("Wszystkie");

  useEffect(() => {
    let isMounted = true;

    const loadMediumPosts = async () => {
      try {
        const response = await fetch("/api/medium");

        if (!response.ok) {
          return;
        }

        const data: MediumApiResponse = await response.json();

        if (
          isMounted &&
          data.ok &&
          Array.isArray(data.posts)
        ) {
          setMediumPosts(data.posts);
        }
      } catch (error) {
        console.error(
          "Nie udało się pobrać publikacji Medium:",
          error
        );
      }
    };

    loadMediumPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  const knowledgeItems = useMemo<KnowledgeItem[]>(() => {
    const localItems: KnowledgeItem[] = blogPosts.map((post) => {
      const categories = [post.category];

      return {
        id: `blog-${post.id}`,
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        readTime: post.readTime,
        image: post.image,
        source: "blog",
        href: `/blog/${post.slug}`,
        categories,
        knowledgeArea: getKnowledgeArea(categories),
      };
    });

    const mediumItems: KnowledgeItem[] = mediumPosts.map((post) => ({
      id: `medium-${post.id}`,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      readTime: post.readTime,
      image: post.image,
      source: "medium",
      href: post.link,
      categories: post.categories,
      knowledgeArea: getKnowledgeArea(post.categories),
    }));

    return [...localItems, ...mediumItems].sort((a, b) => {
      const aTime = new Date(a.date).getTime();
      const bTime = new Date(b.date).getTime();

      if (Number.isNaN(aTime) || Number.isNaN(bTime)) {
        return 0;
      }

      return bTime - aTime;
    });
  }, [mediumPosts]);

  /**
   * Najnowszy materiał jest wyróżniony.
   * Nadal pozostaje również w pełnej bibliotece poniżej.
   */
  const featuredItem = knowledgeItems[0];

  const availableAreas = useMemo(() => {
    const usedAreas = new Set(
      knowledgeItems.map((item) => item.knowledgeArea)
    );

    return knowledgeAreaOrder.filter(
      (area) =>
        area === "Wszystkie" || usedAreas.has(area)
    );
  }, [knowledgeItems]);

  /**
   * Biblioteka pokazuje wszystkie materiały.
   * Featured NIE jest z niej usuwany.
   */
  const filteredItems = useMemo(() => {
    if (activeArea === "Wszystkie") {
      return knowledgeItems;
    }

    return knowledgeItems.filter(
      (item) => item.knowledgeArea === activeArea
    );
  }, [activeArea, knowledgeItems]);

  useEffect(() => {
    if (!availableAreas.includes(activeArea)) {
      setActiveArea("Wszystkie");
    }
  }, [availableAreas, activeArea]);

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
                className="text-sm font-medium text-white/55"
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
                className="mt-5 max-w-4xl text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl md:text-[3.4rem]"
              >
                Lepsze decyzje marketingowe zaczynają się od właściwej
                diagnozy.
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
                {availableAreas.map((area) => {
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
        {featuredItem && activeArea === "Wszystkie" && (
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
                  <KnowledgeLink
                    item={featuredItem}
                    className="group grid lg:grid-cols-[1.05fr_0.95fr]"
                  >
                    <div className="relative min-h-[260px] overflow-hidden sm:min-h-[340px] lg:min-h-[440px]">
                      {featuredItem.image ? (
                        <img
                          src={featuredItem.image}
                          alt={featuredItem.title}
                          loading="eager"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-primary/10" />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>

                    <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-medium uppercase tracking-[0.12em] text-primary">
                          {featuredItem.knowledgeArea}
                        </span>

                        <span className="text-xs text-muted-foreground">
                          {featuredItem.source === "medium"
                            ? "MEDIUM ↗"
                            : "ARTYKUŁ"}
                        </span>
                      </div>

                      <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                        {featuredItem.title}
                      </h2>

                      <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                        {featuredItem.excerpt}
                      </p>

                      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {formatDate(featuredItem.date)}
                        </span>

                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {featuredItem.readTime}
                        </span>
                      </div>

                      <div className="mt-9 inline-flex items-center gap-2 font-medium text-foreground">
                        {featuredItem.source === "medium"
                          ? "Czytaj na Medium"
                          : "Czytaj materiał"}

                        {featuredItem.source === "medium" ? (
                          <ExternalLink className="h-4 w-4 text-primary" />
                        ) : (
                          <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                        )}
                      </div>
                    </div>
                  </KnowledgeLink>
                </motion.article>
              </div>
            </div>
          </section>
        )}

        {/* BIBLIOTEKA */}
        <section className="border-t border-border bg-secondary/15 py-16 sm:py-20 lg:py-24">
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
                  {getMaterialCountLabel(filteredItems.length)}
                </p>
              </div>

              {filteredItems.length > 0 ? (
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
                  {filteredItems.map((item, index) => {
                    const itemCount = filteredItems.length;

                    const isSingle = itemCount === 1;
                    const isTwoItems = itemCount === 2;

                    const isWide =
                      itemCount >= 3 &&
                      (index === 0 || index % 5 === 0);

                    return (
                      <motion.article
                        key={item.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{
                          duration: 0.5,
                          delay: Math.min(index * 0.05, 0.2),
                        }}
                        className={
                          isSingle
                            ? "md:col-span-2 lg:col-span-8"
                            : isTwoItems
                              ? "md:col-span-1 lg:col-span-6"
                              : isWide
                                ? "md:col-span-2 lg:col-span-8"
                                : "lg:col-span-4"
                        }
                      >
                        <KnowledgeLink
                          item={item}
                          className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg"
                        >
                          <div
                            className={[
                              "relative overflow-hidden",
                              isSingle
                                ? "aspect-[16/8]"
                                : isTwoItems
                                  ? "aspect-[16/9]"
                                  : isWide
                                    ? "aspect-[16/8] lg:aspect-[16/7]"
                                    : "aspect-[16/10]",
                            ].join(" ")}
                          >
                            {item.image ? (
                              <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                              />
                            ) : (
                              <div className="absolute inset-0 bg-primary/10" />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                          </div>

                          <div className="flex flex-1 flex-col p-6 sm:p-7">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <span className="text-xs font-medium uppercase tracking-[0.1em] text-primary">
                                {item.knowledgeArea}
                              </span>

                              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                                {item.source === "medium" ? (
                                  <>
                                    MEDIUM
                                    <ExternalLink className="h-3 w-3" />
                                  </>
                                ) : (
                                  "ARTYKUŁ"
                                )}
                              </span>
                            </div>

                            <h3 className="mt-4 text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl">
                              {item.title}
                            </h3>

                            <p className="mt-4 line-clamp-3 text-base leading-relaxed text-muted-foreground">
                              {item.excerpt}
                            </p>

                            <div className="mt-auto flex items-end justify-between gap-5 pt-8">
                              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                                <span className="inline-flex items-center gap-1.5">
                                  <Calendar className="h-3.5 w-3.5" />
                                  {formatDate(item.date)}
                                </span>

                                <span className="inline-flex items-center gap-1.5">
                                  <Clock className="h-3.5 w-3.5" />
                                  {item.readTime}
                                </span>
                              </div>

                              {item.source === "medium" ? (
                                <ExternalLink className="h-5 w-5 shrink-0 text-primary" />
                              ) : (
                                <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                              )}
                            </div>
                          </div>
                        </KnowledgeLink>
                      </motion.article>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-10 rounded-3xl border border-border bg-background p-8 sm:p-10">
                  <p className="text-lg font-medium text-foreground">
                    W tej kategorii nie ma jeszcze materiałów.
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
