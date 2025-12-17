import { useParams } from "react-router-dom";
import { post1 } from "@/content/blogs";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  if (slug !== post1.slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1>404 – Artykuł nie istnieje</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-4">
          {post1.title}
        </h1>

        <p className="text-muted-foreground mb-8">
          {post1.date} · {post1.readTime}
        </p>

        <p className="text-lg">
          {post1.excerpt}
        </p>
      </main>

      <Footer />
    </div>
  );
}
