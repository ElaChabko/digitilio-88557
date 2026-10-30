import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { createCollectionSchema } from "@/lib/structuredData";
import { PageHero } from "@/components/site/PageHero";
import { ArticleCard } from "@/components/LatestArticles";
import { ActionButton, EASE, FadeUp, Pill, ScrollText } from "@/components/site/motion";
import { ContactFormDialog } from "@/components/ContactFormDialog";

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
  const [isContactOpen, setIsContactOpen] = useState(false);

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
    <div className="min-h-screen bg-white">
      <SEO
        title="Baza wiedzy o marketingu, strategii i AI | Digitilio"
        description="Analizy, obserwacje z projektów i praktyczne materiały o strategii, danych, komunikacji i AI. Wiedza, która pomaga podejmować lepsze decyzje marketingowe."
        canonical="https://digitilio.pl/baza-wiedzy"
      />

      <StructuredData
        data={createCollectionSchema({
          name: "Baza wiedzy Digitilio",
          description:
            "Analizy, obserwacje z projektów i praktyczne materiały o strategii, danych, komunikacji i AI.",
          url: "https://digitilio.pl/baza-wiedzy",
          items: blogPosts.map((post) => ({
            name: post.title,
            url: `https://digitilio.pl/blog/${post.slug}`,
          })),
        })}
      />

      <Navigation />

      <main>
        <PageHero
          pill="Baza wiedzy"
          title="Lepsze decyzje marketingowe zaczynają się od właściwej diagnozy."
          lead="Analizy, obserwacje z projektów i praktyczne materiały o strategii, danych, komunikacji i AI. Nie po to, żeby robić więcej, ale żeby lepiej oceniać, co rzeczywiście ma sens."
        />

        {/* FILTRY – przyklejone pod górnym paskiem */}
        <div className="sticky top-[76px] z-30 px-5 pt-8 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1400px] justify-center">
            <div className="flex max-w-full gap-1 overflow-x-auto rounded-full bg-white/85 p-1.5 shadow-[0_10px_40px_-15px_hsl(263_40%_25%/0.35)] ring-1 ring-violet/10 backdrop-blur-md">
              {availableAreas.map((area) => {
                const isActive = activeArea === area;
                return (
                  <button
                    key={area}
                    type="button"
                    onClick={() => setActiveArea(area)}
                    className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-white" : "text-foreground/70 hover:text-violet"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="area-pill"
                        className="absolute inset-0 rounded-full bg-violet"
                        transition={{ duration: 0.4, ease: EASE }}
                      />
                    )}
                    <span className="relative">{area}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* WYRÓŻNIONY */}
        {featuredItem && activeArea === "Wszystkie" && (
          <section className="px-5 pt-14 sm:px-8 sm:pt-20 lg:px-12">
            <div className="mx-auto max-w-[1400px]">
              <FadeUp>
                <KnowledgeLink
                  item={featuredItem}
                  className="group grid overflow-hidden rounded-[2.2rem] bg-lilac-soft lg:grid-cols-[1.15fr_0.85fr]"
                >
                  <div className="relative min-h-[260px] overflow-hidden sm:min-h-[360px] lg:min-h-[480px]">
                    {featuredItem.image ? (
                      <img
                        src={featuredItem.image}
                        alt={featuredItem.title}
                        loading="eager"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-violet to-orchid" />
                    )}
                  </div>
                  <div className="flex flex-col p-7 sm:p-10 lg:p-12">
                    <Pill>Polecam zacząć tutaj</Pill>
                    <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-foreground transition-colors group-hover:text-violet sm:text-4xl lg:text-[2.8rem]">
                      {featuredItem.title}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {featuredItem.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-4 pt-10">
                      <p className="text-sm text-muted-foreground">
                        {featuredItem.knowledgeArea} · {formatDate(featuredItem.date)} · {featuredItem.readTime}
                      </p>
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet text-white transition-transform duration-500 group-hover:rotate-45">
                        {featuredItem.source === "medium" ? (
                          <ExternalLink className="h-5 w-5" />
                        ) : (
                          <ArrowUpRight className="h-5 w-5" />
                        )}
                      </span>
                    </div>
                  </div>
                </KnowledgeLink>
              </FadeUp>
            </div>
          </section>
        )}

        {/* BIBLIOTEKA */}
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[1400px]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-[2.1rem] font-semibold tracking-[-0.045em] text-violet sm:text-5xl">
                {activeArea === "Wszystkie" ? "Najnowsze materiały" : activeArea}
              </h2>
              <p className="text-sm text-muted-foreground">
                {getMaterialCountLabel(filteredItems.length)}
              </p>
            </div>

            {filteredItems.length > 0 ? (
              <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((item, index) => (
                  <ArticleCard
                    key={item.id}
                    href={item.href}
                    external={item.source === "medium"}
                    image={item.image}
                    category={item.source === "medium" ? `${item.knowledgeArea} · Medium ↗` : item.knowledgeArea}
                    title={item.title}
                    excerpt={item.excerpt}
                    meta={`${formatDate(item.date)} · ${item.readTime}`}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-12 rounded-[2rem] bg-lilac-soft p-10 text-center">
                <p className="text-lg font-medium text-violet">
                  W tej kategorii nie ma jeszcze materiałów.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ZAMKNIĘCIE */}
        <section className="px-5 pb-28 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[2.4rem] bg-violet px-7 py-14 text-white sm:px-14 sm:py-20">
            <Pill tone="light">Wiedza to punkt wyjścia</Pill>
            <ScrollText
              as="h2"
              text="Dobra praktyka nie zawsze jest dobrą decyzją w Twojej sytuacji."
              className="mt-6 max-w-3xl text-[2rem] font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl"
            />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Materiały pomagają zrozumieć problem. Jeśli potrzebujesz
              przełożyć je na konkretną sytuację firmy, wtedy warto zacząć od
              diagnozy.
            </p>
            <div className="mt-10">
              <ActionButton tone="white" onClick={() => setIsContactOpen(true)}>
                Porozmawiajmy o Twoim marketingu
              </ActionButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ContactFormDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
