import { useParams } from "react-router-dom";
import { useRef, useState } from "react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { PageHero } from "@/components/site/PageHero";
import { ActionButton, FadeUp, Pill, useCalmMotion } from "@/components/site/motion";
import { LatestArticles, formatPlDate } from "@/components/LatestArticles";

import { Calendar, Clock } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { getPostBySlug } from "@/content/blogs/index";
import { createBreadcrumbSchema, PERSON_ID } from "@/lib/structuredData";

import { ArticleSection } from "./ArticleSection";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  const [isContactOpen, setIsContactOpen] = useState(false);
  const calm = useCalmMotion();
  const articleRef = useRef<HTMLElement | null>(null);
  const coverRef = useRef<HTMLDivElement | null>(null);

  // Pasek postępu czytania
  const { scrollYProgress: readProgress } = useScroll({
    target: articleRef,
    offset: ["start start", "end end"],
  });
  const readScale = useSpring(readProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  // Okładka rozszerza się przy przewijaniu
  const { scrollYProgress: coverProgress } = useScroll({
    target: coverRef,
    offset: ["start end", "center center"],
  });
  const coverScale = useTransform(coverProgress, [0, 1], [calm ? 1 : 0.88, 1]);
  const coverRadius = useTransform(coverProgress, [0, 1], [48, 28]);

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
    dateModified: post.date,
    inLanguage: "pl-PL",

    author: {
      "@id": PERSON_ID,
      "@type": "Person",
      name: "Ela Chabko",
      url: "https://www.linkedin.com/in/ela-chabko/",
    },

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
      name: "Baza wiedzy",
      url: "https://digitilio.pl/baza-wiedzy",
    },
    {
      name: post.title,
      url: canonicalUrl,
    },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${post.title} | Digitilio`}
        description={post.excerpt}
        canonical={canonicalUrl}
        ogImage={absoluteImageUrl}
        ogType="article"
      />

      <StructuredData data={blogPostSchema} />
      <StructuredData data={breadcrumbSchema} />

      {/* Pasek postępu czytania */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-violet via-violet-bright to-orchid"
        style={{ scaleX: readScale }}
      />

      <Navigation />

      <PageHero
        size="article"
        pill={post.category}
        title={post.title}
      >
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {formatPlDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
          <span>Ela Chabko</span>
        </div>
      </PageHero>

      <article ref={articleRef} className="px-5 pb-20 sm:px-8 lg:px-12">
        {/* OKŁADKA */}
        {post.image && (
          <div ref={coverRef} className="mx-auto mt-10 max-w-5xl sm:mt-14">
            <motion.div style={{ scale: coverScale, borderRadius: coverRadius }} className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="aspect-[16/8] w-full object-cover"
                loading="eager"
              />
            </motion.div>
          </div>
        )}

        <div className="mx-auto max-w-3xl">
          {/* LEAD */}
          {post.excerpt && (
            <FadeUp>
              <p className="mt-14 text-xl font-medium leading-relaxed tracking-[-0.01em] text-violet sm:text-2xl">
                {post.excerpt}
              </p>
            </FadeUp>
          )}

          <hr className="my-12 border-t border-violet/15" />

          {/* TREŚĆ */}
          <div className="space-y-8">
            {post.content.map((section, index) => (
              <ArticleSection
                key={index}
                section={section}
                level={index === 0 ? 2 : 3}
              />
            ))}
          </div>

          {/* CTA */}
          <FadeUp className="mt-20">
            <div className="relative overflow-hidden rounded-[2.2rem] bg-violet p-8 text-white sm:p-12">
              <Pill tone="light">Masz podobny problem?</Pill>
              <p className="mt-6 text-2xl font-semibold leading-snug tracking-[-0.03em] sm:text-3xl">
                Porozmawiajmy o tym, jak to wygląda w Twojej firmie.
              </p>
              <div className="mt-8">
                <ActionButton tone="white" onClick={() => setIsContactOpen(true)}>
                  Napisz do mnie
                </ActionButton>
              </div>
            </div>
          </FadeUp>
        </div>
      </article>

      <LatestArticles excludeSlug={post.slug} pill="Czytaj dalej" title="Więcej z Bazy wiedzy." />

      <Footer />

      <ContactFormDialog
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
