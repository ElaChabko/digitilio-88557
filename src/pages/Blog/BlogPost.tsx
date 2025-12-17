import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

import { getPostBySlug } from "@/content/blogs";
import ArticleSection from "./ArticleSection";

type NormalizedSection = {
  heading?: string;
  html: string;
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Nie znaleziono artykułu.</p>
        </main>
        <Footer />
      </div>
    );
  }

  // 🔒 NORMALIZACJA TREŚCI (TU BYŁ BUG)
  const sections: NormalizedSection[] = Array.isArray((post as any).sections)
    ? (post as any).sections
        .filter(Boolean) // usuwa undefined
        .map((s: any) => ({
          heading: typeof s.heading === "string" ? s.heading : undefined,
          html: typeof s.html === "string" ? s.html : "",
        }))
        .filter((s: any) => s.html.trim().length > 0)
    : [
        {
          heading: undefined,
          html: typeof (post as any).content === "string" ? (post as any).content : "",
        },
      ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <article className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* HEADER */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-block text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
              {post.category}
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="mt-4 text-lg text-muted-foreground">
                {post.excerpt}
              </p>
            )}

            <div className="mt-6 flex gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.header>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {sections.map((section, index) => (
              <ArticleSection
                key={index}
                heading={section.heading}
                html={section.html}
              />
            ))}
          </motion.div>

        </div>
      </article>

      <Footer />
    </div>
  );
}
