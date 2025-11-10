import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  // Placeholder blog posts - will be replaced with real content later
  const placeholderPosts = [
    {
      id: 1,
      title: "Wkrótce pojawią się tu wartościowe treści",
      excerpt: "Pracuję nad przygotowaniem artykułów o social media marketingu, AI i strategiach komunikacji.",
      date: "Coming soon",
      readTime: "5 min",
      category: "Social Media"
    },
    {
      id: 2,
      title: "Trendy w marketingu 2025",
      excerpt: "Czego możesz się spodziewać w nadchodzących miesiącach? Blog wkrótce dostępny.",
      date: "Coming soon",
      readTime: "7 min",
      category: "Marketing"
    },
    {
      id: 3,
      title: "AI w komunikacji marki",
      excerpt: "Jak wykorzystać sztuczną inteligencję do budowania silnej marki? Dowiesz się wkrótce.",
      date: "Coming soon",
      readTime: "6 min",
      category: "AI"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-background pt-24 sm:pt-28 md:pt-32">
        {/* Animated background orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl z-[1]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent/20 rounded-full blur-3xl z-[1]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pb-2 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
              Blog
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Miejsce, w którym dzielę się wiedzą o social media marketingu, strategiach komunikacji i wykorzystaniu AI w biznesie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Placeholder image area */}
                <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
                    animate={{
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-primary opacity-0 group-hover:opacity-100" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="max-w-2xl mx-auto p-8 bg-card border border-border rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Treści wkrótce dostępne
              </h2>
              <p className="text-muted-foreground mb-6">
                Pracuję nad wartościowymi artykułami, które pomogą Ci rozwijać Twoją markę w social mediach. Zapraszam wkrótce!
              </p>
              <Button 
                variant="hero"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Wróć na górę
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
