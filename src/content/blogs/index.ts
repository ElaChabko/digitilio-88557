// src/content/blogs/index.ts
import { noweTechnologie2026 } from "./posts/nowe-technologie-2026";
import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [noweTechnologie2026];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
