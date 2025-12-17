import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

import { getPostBySlug } from "@/content/blogs";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">
            Nie znaleziono artykułu.
          </p>
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

          {/* META / HEADER */}
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
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              prose prose-neutral dark:prose-invert max-w-none
              prose-h2:mt-12 prose-h2:mb-4
              prose-h3:mt-8 prose-h3:mb-3
              prose-p:leading-relaxed
              prose-ul:my-6
              prose-li:my-2
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </div>
      </article>

      <Footer />
    </div>
  );
}
