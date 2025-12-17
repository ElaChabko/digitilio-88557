// src/content/blogs/index.ts
import { noweTechnologie2026 } from "./posts/nowe-technologie-2026";

export const blogPosts = [
  noweTechnologie2026,
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find(post => post.slug === slug);
