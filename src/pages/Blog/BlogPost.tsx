import { useParams } from "react-router-dom";
import { getPostBySlug } from "@/content/blogs";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return <div className="p-10">Artykuł nie istnieje</div>;
  }

  return (
    <>
      <Navigation />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <div className="text-muted-foreground mb-8">
          {post.date} · {post.readTime}
        </div>

        <article className="prose prose-neutral max-w-none">
          {post.content}
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
