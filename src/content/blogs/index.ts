import { BlogPost } from "./types";
import { noweTechnologie2026 } from "./posts/nowe-technologie-2026";
import { metaSupportAutomatyzacja } from "./posts/meta-support-automatyzacja";

export const blogPosts: BlogPost[] = [
  metaSupportAutomatyzacja,
  noweTechnologie2026,
  
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
