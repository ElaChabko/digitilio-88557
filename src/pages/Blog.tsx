import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

import { blogPosts } from "@/content/blogs/index";

type BlogListItem = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug?: string;
};

export default function Blog() {
  const posts: BlogListItem[] = [
    ...blogPosts,
    {
      id: 9991,
      title: "Trendy w marketingu 2026",
      excerpt: "Blog wkrótce dostępny.",
      date: "Coming soon",
      readTime: "7 min",
      category: "Marketing",
    },
    {
      id: 9992,
      title: "AI w komunikacji marki",
      excerpt: "Dowiesz się wkrótce.",
      date: "Coming soon",
      readTime: "6 min",
      category: "AI",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-background pt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Wiedza o social media, strategiach komunikacji i AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* POSTS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const Card = (
                <div
                  className={`bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 ${
                    post.slug
                      ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                      : "opacity-70"
                  }`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">

  {/* OBRAZEK */}
  <img
    src={post.image}
    alt={post.title}
    loading="lazy"
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  />

  {/* GRADIENT / CIEŃ – overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

</div>


                  <div className="p-6">
                    <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>

                    <h3 className="text-xl font-bold mt-3 mb-3">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex gap-4">
                        <span>
                          <Calendar className="inline w-4 h-4 mr-1" />
                          {post.date}
                        </span>
                        <span>
                          <Clock className="inline w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>

                      {post.slug && (
                        <ArrowRight className="w-5 h-5 text-primary opacity-70" />
                      )}
                    </div>
                  </div>
                </div>
              );

              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {post.slug ? (
                    <a href={`/blog/${post.slug}`}>{Card}</a>
                  ) : (
                    Card
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
