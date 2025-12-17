import { BlogPost } from "./types";
import { noweTechnologie2026 } from "./posts/nowe-technologie-2026";

export const blogPosts: BlogPost[] = [
  noweTechnologie2026,
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
