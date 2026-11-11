import { BlogPost } from "./types";
import { noweTechnologie2026 } from "./posts/nowe-technologie-2026";
import { linkedinPremiujeLudzi } from "./posts/linkedin-premiuje-ludzi-ryzyko-dla-firm";
import { planMarketingowy2027 } from "./posts/plan-marketingowy-2027-checklista";
import { komunikacjaBranzaDronowa } from "./posts/komunikacja-branza-dronowa-tajemnica-zaufanie";

export const blogPosts: BlogPost[] = [
  planMarketingowy2027,
  komunikacjaBranzaDronowa,
  linkedinPremiujeLudzi,
  noweTechnologie2026,
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
