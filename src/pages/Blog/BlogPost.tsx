import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

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

          {/* COVER IMAGE */}
          {post.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16"
            >
              <img
                src={post.image}
                alt={post.title}
                className=" w-full
    w-full
    max-h-[220px]
    sm:max-h-[260px]
    md:max-h-[300px]
    object-cover
    object-center
    rounded-3xl"
                loading="eager"
              />
            </motion.div>
          )}
          {/* CONTENT */}
          <div className="space-y-16">
            {post.content.map((section, index) => (
              <ArticleSection
                key={index}
                section={section}
                level={index === 0 ? 2 : 3}
               />
            ))}
          </div>
        </div>
<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="mt-16 flex justify-center"
>
  <Button
    asChild
    size="lg"
    className="
      text-base md:text-lg lg:text-xl
      px-8 py-6 h-auto
      bg-primary text-primary-foreground
      rounded-full group
      shadow-[0_0_40px_hsl(263_33%_35%/0.3)]
      hover:shadow-[0_0_60px_hsl(263_33%_35%/0.5)]
      transition-all duration-500
    "
  >
    <a href="mailto:elachabko@digitilio.pl">
      <Mail className="mr-3 w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
      Napisz do mnie
    </a>
  </Button>
</motion.div>
      </article>

      <Footer />
    </div>
  );
}
