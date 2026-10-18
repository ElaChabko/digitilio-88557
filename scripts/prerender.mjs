/**
 * Prerendering: po `vite build` generuje statyczny HTML dla każdej trasy,
 * żeby roboty (Google, crawlery AI, podglądy linków na LinkedIn/Facebooku)
 * widziały treść, tytuł, opis i canonical bez wykonywania JavaScriptu.
 *
 * Wynik:
 *   dist/index.html                    -> /
 *   dist/baza-wiedzy.html              -> /baza-wiedzy
 *   dist/blog/<slug>.html              -> /blog/<slug>
 *   dist/404.html                      -> nieistniejące adresy (status 404)
 *   dist/sitemap.xml                   -> generowana z listy tras
 *
 * Pliki .html bez katalogów, bo Cloudflare Pages serwuje /adres z /adres.html
 * bez ukośnika na końcu – zgodnie z canonical.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const SITE_URL = "https://digitilio.pl";

const { render, getPrerenderRoutes } = await import(pathToFileURL(ssrEntry).href);

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const escapeText = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Usuwa z szablonu tagi, które ustawiamy per strona. */
const stripPageHead = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+name="description"[\s\S]*?>/i, "")
    .replace(/<meta\s+name="robots"[\s\S]*?>/i, "")
    .replace(/<meta\s+property="og:(title|description|image|type|url)"[\s\S]*?>/gi, "")
    .replace(/<meta\s+name="twitter:(title|description|image|card)"[\s\S]*?>/gi, "")
    .replace(/<link\s+rel="canonical"[\s\S]*?>/i, "");

const buildHead = (head) => {
  const tags = [];

  if (head.title) tags.push(`<title>${escapeText(head.title)}</title>`);
  if (head.description)
    tags.push(`<meta name="description" content="${escapeAttr(head.description)}" />`);

  tags.push(
    `<meta name="robots" content="${head.noindex ? "noindex" : "index, follow"}" />`
  );

  if (head.canonical) {
    tags.push(`<link rel="canonical" href="${escapeAttr(head.canonical)}" />`);
    tags.push(`<meta property="og:url" content="${escapeAttr(head.canonical)}" />`);
  }

  if (head.title) {
    tags.push(`<meta property="og:title" content="${escapeAttr(head.title)}" />`);
    tags.push(`<meta name="twitter:title" content="${escapeAttr(head.title)}" />`);
  }

  if (head.description) {
    tags.push(`<meta property="og:description" content="${escapeAttr(head.description)}" />`);
    tags.push(`<meta name="twitter:description" content="${escapeAttr(head.description)}" />`);
  }

  tags.push(`<meta property="og:type" content="${escapeAttr(head.ogType || "website")}" />`);

  if (head.ogImage) {
    tags.push(`<meta property="og:image" content="${escapeAttr(head.ogImage)}" />`);
    tags.push(`<meta name="twitter:image" content="${escapeAttr(head.ogImage)}" />`);
  }

  tags.push(`<meta name="twitter:card" content="summary_large_image" />`);

  for (const alt of head.alternates || []) {
    tags.push(
      `<link rel="alternate" hreflang="${escapeAttr(alt.hreflang)}" href="${escapeAttr(alt.href)}" />`
    );
  }

  if (head.lang && head.lang !== "pl") {
    tags.push(`<meta property="og:locale" content="en_US" />`);
  }

  return tags.join("\n    ");
};

const pageHeads = new Map();

const renderPage = (url) => {
  const { html, head } = render(url);
  pageHeads.set(url, head);

  if (!head.title) {
    throw new Error(`Brak <SEO> na stronie ${url} – każda trasa musi mieć tytuł.`);
  }

  return stripPageHead(template)
    .replace(/<html lang="[^"]*">/, `<html lang="${escapeAttr(head.lang || "pl")}">`)
    .replace("</head>", `    ${buildHead(head)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
};

const outputFileFor = (route) =>
  route === "/" ? "index.html" : `${route.replace(/^\//, "")}.html`;

const routes = getPrerenderRoutes();

for (const { path: route } of routes) {
  const file = path.join(distDir, outputFileFor(route));
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, renderPage(route));
  console.log(`prerender  ${route.padEnd(60)} -> ${outputFileFor(route)}`);
}

// 404 – Cloudflare Pages zwraca go ze statusem 404 dla nieznanych adresów
fs.writeFileSync(path.join(distDir, "404.html"), renderPage("/__404__"));
console.log("prerender  (404)".padEnd(71) + " -> 404.html");

// Sitemap generowana z tej samej listy tras
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    ({ path: route, lastmod }) =>
      `  <url>\n    <loc>${SITE_URL}${route}</loc>${
        lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""
      }\n  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
console.log(`sitemap    ${routes.length} adresów -> sitemap.xml`);

// llms.txt – krótki spis treści strony dla modeli AI (ChatGPT, Claude, Perplexity)
const cleanTitle = (title) => title.replace(/\s*\|\s*(Case study )?Digitilio$/, "");
const entry = (route) => {
  const head = pageHeads.get(route) || {};
  const desc = head.description ? `: ${head.description}` : "";
  return `- [${cleanTitle(head.title || route)}](${SITE_URL}${route})${desc}`;
};
const routePaths = routes.map((r) => r.path);
const pick = (fn) => routePaths.filter(fn).map(entry).join("\n");

const llms = `# Digitilio

> Digitilio to jednoosobowa firma doradczo-marketingowa Eli Chabko. Pomaga firmom, szczególnie B2B, uporządkować marketing, ustalić priorytety i przełożyć strategię na działania, które da się realnie wdrożyć: strategia komunikacji, LinkedIn i social media, Meta Ads, analityka marketingowa i praktyczne wykorzystanie AI.

Kontakt: elachabko@digitilio.pl · LinkedIn: https://www.linkedin.com/in/ela-chabko/

## Główne strony

${pick((r) => ["/", "/wspolprace", "/baza-wiedzy"].includes(r))}

## Case studies

${pick((r) => r.startsWith("/wspolprace/"))}

## Artykuły

${pick((r) => r.startsWith("/blog/"))}

## Informacje prawne

${pick((r) => r.startsWith("/polityka-"))}

## English

${pick((r) => r === "/en")}
`;

fs.writeFileSync(path.join(distDir, "llms.txt"), llms);
console.log("llms.txt   -> llms.txt");
