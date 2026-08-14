import { useParams } from "react-router-dom";
import { useState } from "react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { ContactFormDialog } from "@/components/ContactFormDialog";

import { Mail, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

import { getPostBySlug } from "@/content/blogs/index";
import { createBreadcrumbSchema } from "@/lib/structuredData";

import { ArticleSection } from "./ArticleSection";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  const [isContactOpen, setIsContactOpen] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1 flex items-center justify-center px-4">
          <p className="text-center text-muted-foreground">
            Nie znaleziono artykułu.
          </p>
        </main>

        <Footer />
      </div>
    );
  }

  const canonicalUrl = `https://digitilio.pl/blog/${post.slug}`;

  const absoluteImageUrl = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `https://digitilio.pl${post.image.startsWith("/") ? "" : "/"}${post.image}`
    : undefined;

  const blogPostSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${canonicalUrl}#article`,

  url: canonicalUrl,

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },

  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,

  ...(absoluteImageUrl
    ? {
        image: [absoluteImageUrl],
      }
    : {}),

  publisher: {
    "@id": "https://digitilio.pl/#organization",
  },
};
  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: "Digitilio",
      url: "https://digitilio.pl/",
    },
    {
      name: "Blog",
      url: "https://digitilio.pl/blog",
    },
    {
      name: post.title,
      url: canonicalUrl,
    },
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title={`${post.title} | Digitilio`}
        description={post.excerpt}
        canonical={canonicalUrl}
      />

      <StructuredData data={blogPostSchema} />
      <StructuredData data={breadcrumbSchema} />

      <Navigation />

      <article className="pt-32 pb-24">
        <div className="container mx-auto max-w-3xl px-4">
          {/* HEADER */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 mb-6"
          >
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {post.category}
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>

              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </motion.header>

          {/* COVER IMAGE */}
          {post.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-8"
            >
              <img
                src={post.image}
                alt={post.title}
                className="
                  w-full
                  max-h-[220px]
                  rounded-3xl
                  object-cover
                  object-center
                  sm:max-h-[260px]
                  md:max-h-[300px]
                "
                loading="eager"
              />
            </motion.div>
          )}

          {/* EXCERPT */}
          {post.excerpt && (
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
          )}

          <hr className="my-10 border-t border-muted-foreground/20" />

          {/* CONTENT */}
          <div className="space-y-6">
            {post.content.map((section, index) => (
              <ArticleSection
                key={index}
                section={section}
                level={index === 0 ? 2 : 3}
              />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 flex justify-center"
          >
            <Button
              type="button"
              size="lg"
              onClick={() => setIsContactOpen(true)}
              className="
                group
                h-auto
                rounded-full
                bg-primary
                px-8
                py-6
                text-base
                text-primary-foreground
                shadow-[0_0_40px_hsl(263_33%_35%/0.3)]
                transition-all
                duration-500
                hover:shadow-[0_0_60px_hsl(263_33%_35%/0.5)]
                md:text-lg
                lg:text-xl
              "
            >
              <Mail className="mr-3 h-6 w-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              Napisz do mnie
            </Button>
          </motion.div>
        </div>
      </article>

      <Footer />

      <ContactFormDialog
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
