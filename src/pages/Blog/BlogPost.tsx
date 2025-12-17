import { useParams } from "react-router-dom";
import { getPostBySlug } from "@/content/blogs";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
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
          {post.title}
        </h1>

        <p className="text-muted-foreground mb-8">
          {post.date} · {post.readTime} · {post.category}
        </p>

        <article className="prose prose-neutral max-w-none">
          {post.content}
        </article>
      </main>

      <Footer />
    </div>
  );
}
