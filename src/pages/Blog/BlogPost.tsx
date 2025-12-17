import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

import { getPostBySlug } from "@/content/blogs/index";
import { ArticleSection } from "./ArticleSection";

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
            className="mb-16"
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
          <div className="space-y-24">
            {post.content.map((section, index) => (
              <ArticleSection key={index} section={section} />
            ))}
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
}
