import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { blogPosts } from "@/content/blogs/index";

const EASE = [0.22, 1, 0.36, 1] as const;

const formatDate = (date: string) => {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

/**
 * Trzy najnowsze artykuły z Bazy wiedzy na stronie głównej –
 * pokazują sposób myślenia, zanim ktoś napisze.
 */
export const LatestArticles = () => {
  const posts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section
      id="articles"
      className="relative overflow-hidden bg-secondary/20 py-20 sm:py-24 lg:py-28"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 sm:mb-14 md:flex-row md:items-end md:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="max-w-2xl"
            >
              <p className="mb-4 text-sm font-medium tracking-wide text-primary sm:text-base">
                Baza wiedzy
              </p>
              <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Zobacz, jak myślę o marketingu.
              </h2>
            </motion.div>

            <Link
              to="/baza-wiedzy"
              className="group inline-flex items-center gap-2 text-base font-semibold text-primary"
            >
              Wszystkie artykuły
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl bg-background shadow-[0_2px_20px_-8px_hsl(263_33%_35%/0.25)] transition-shadow duration-300 hover:shadow-[0_20px_50px_-15px_hsl(263_33%_35%/0.35)]"
              >
                <Link to={`/blog/${post.slug}`} className="flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-sm text-muted-foreground">
                      {formatDate(post.date)} · {post.readTime}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="mt-3 line-clamp-3 text-base leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                    )}
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-primary">
                      Czytaj
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
