import { BlogPost } from "./types";
import { noweTechnologie2026 } from "./posts/nowe-technologie-2026";
import { linkedinPremiujeLudzi } from "./posts/linkedin-premiuje-ludzi-ryzyko-dla-firm";
import { komunikacjaBranzaDronowa } from "./posts/komunikacja-branza-dronowa-tajemnica-zaufanie";

export const blogPosts: BlogPost[] = [
  komunikacjaBranzaDronowa,
  linkedinPremiujeLudzi,
  noweTechnologie2026,
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
