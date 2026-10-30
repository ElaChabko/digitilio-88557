import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { blogPosts } from "@/content/blogs/index";
import { EASE, Pill, ScrollText } from "@/components/site/motion";

export const formatPlDate = (date: string) => {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });
};

/** Karta artykułu – wspólna dla strony głównej, Bazy wiedzy i „Czytaj dalej” */
export const ArticleCard = ({
  href,
  image,
  category,
  title,
  excerpt,
  meta,
  index = 0,
  external = false,
}: {
  href: string;
  image?: string | null;
  category: string;
  title: string;
  excerpt?: string;
  meta: string;
  index?: number;
  external?: boolean;
}) => {
  const inner = (
    <>
      <div className="relative aspect-[16/11] overflow-hidden rounded-[1.6rem] bg-lilac-soft">
        {image ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-violet to-orchid" />
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-violet backdrop-blur-sm">
          {category}
        </span>
        <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-violet text-white opacity-0 transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
      <div className="px-1 pt-5">
        <p className="text-sm text-muted-foreground">{meta}</p>
        <h3 className="mt-2 text-xl font-semibold leading-snug tracking-[-0.02em] text-foreground transition-colors group-hover:text-violet sm:text-[1.4rem]">
          {title}
        </h3>
        {excerpt && (
          <p className="mt-2 line-clamp-2 text-base leading-relaxed text-muted-foreground">{excerpt}</p>
        )}
      </div>
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: Math.min(index * 0.08, 0.3), ease: EASE }}
    >
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
          {inner}
        </a>
      ) : (
        <Link to={href} className="group block">
          {inner}
        </Link>
      )}
    </motion.article>
  );
};

/**
 * Najnowsze artykuły z Bazy wiedzy (strona główna i „Czytaj dalej” pod artykułem).
 */
export const LatestArticles = ({
  excludeSlug,
  pill = "Baza wiedzy",
  title = "Zobacz, jak myślę o marketingu.",
}: {
  excludeSlug?: string;
  pill?: string;
  title?: string;
}) => {
  const posts = [...blogPosts]
    .filter((p) => p.slug !== excludeSlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="articles" className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Pill>{pill}</Pill>
            <ScrollText
              as="h2"
              text={title}
              className="mt-5 text-[2.1rem] font-semibold leading-[1.03] tracking-[-0.045em] text-violet sm:text-5xl lg:text-6xl"
            />
          </div>
          <Link
            to="/baza-wiedzy"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-violet/25 px-5 py-2.5 text-sm font-semibold text-violet transition-colors hover:bg-violet hover:text-white md:self-auto"
          >
            Wszystkie artykuły
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3">
          {posts.map((post, i) => (
            <ArticleCard
              key={post.slug}
              href={`/blog/${post.slug}`}
              image={post.image}
              category={post.category}
              title={post.title}
              excerpt={post.excerpt}
              meta={`${formatPlDate(post.date)} · ${post.readTime}`}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
