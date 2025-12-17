import { useRouter } from "next/router";
import { posts } from "@/content/blogs";

export default function BlogPostPage() {
  const { query } = useRouter();
  const slug = query.slug as string;

  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <div style={{ padding: 40 }}>Nie znaleziono artykułu</div>;
  }

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 40 }}>
      <h1>{post.title}</h1>
      <p>{post.date} · {post.readTime}</p>

      <pre style={{ whiteSpace: "pre-wrap", marginTop: 24 }}>
        {post.content}
      </pre>
    </main>
  );
}
