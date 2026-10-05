import { BlogPost } from "./types";
import { noweTechnologie2026 } from "./posts/nowe-technologie-2026";
import { linkedinPremiujeLudzi } from "./posts/linkedin-premiuje-ludzi-ryzyko-dla-firm";

export const blogPosts: BlogPost[] = [
  linkedinPremiujeLudzi,
  noweTechnologie2026,
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
