import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import { AppProviders, AppRoutes } from "./App";
import { HeadContext, type HeadData } from "@/components/SEO";
import { blogPosts } from "@/content/blogs/index";
import { caseStudies } from "@/content/caseStudies";

/**
 * Lista adresów generowanych statycznie przy buildzie.
 * Nowy artykuł lub case study trafia tu automatycznie
 * po dodaniu go do src/content.
 */
export const getPrerenderRoutes = () => [
  { path: "/", lastmod: undefined as string | undefined },
  { path: "/baza-wiedzy", lastmod: blogPosts[0]?.date },
  { path: "/wspolprace", lastmod: undefined },
  ...blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    lastmod: post.date,
  })),
  ...caseStudies.map((caseStudy) => ({
    path: `/wspolprace/${caseStudy.slug}`,
    lastmod: undefined,
  })),
  { path: "/polityka-prywatnosci", lastmod: undefined },
  { path: "/polityka-cookies", lastmod: undefined },
];

export function render(url: string) {
  const head: HeadData = {};

  const html = renderToString(
    <HeadContext.Provider value={head}>
      <AppProviders>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </AppProviders>
    </HeadContext.Provider>
  );

  return { html, head };
}
