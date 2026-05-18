import type { Plugin } from "vite";

/**
 * Route registry for the static SPA. Keep in sync with the <Route>s in
 * client/src/App.tsx. When a new route ships, add an entry here.
 *
 * `changefreq` and `priority` are hints for crawlers, not commands.
 * `noindex: true` keeps the route out of the sitemap (e.g. /thanks).
 */
interface RouteEntry {
  path: string;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: number;
  noindex?: boolean;
}

const ROUTES: RouteEntry[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/services", changefreq: "monthly", priority: 0.9 },
  { path: "/veneers", changefreq: "monthly", priority: 0.9 },
  { path: "/implants", changefreq: "monthly", priority: 0.9 },
  { path: "/orthodontics", changefreq: "monthly", priority: 0.9 },
  { path: "/whitening", changefreq: "monthly", priority: 0.8 },
  { path: "/crowns-bridges", changefreq: "monthly", priority: 0.8 },
  { path: "/cosmetic", changefreq: "monthly", priority: 0.8 },
  { path: "/emergency", changefreq: "monthly", priority: 0.9 },
  { path: "/dental-surgery", changefreq: "monthly", priority: 0.8 },
  { path: "/general-preventive", changefreq: "monthly", priority: 0.8 },
  { path: "/xray-opg", changefreq: "monthly", priority: 0.7 },
  { path: "/dental-tourism", changefreq: "monthly", priority: 0.8 },
  { path: "/gallery", changefreq: "weekly", priority: 0.8 },
  { path: "/doctors", changefreq: "monthly", priority: 0.7 },
  { path: "/about", changefreq: "monthly", priority: 0.7 },
  { path: "/faq", changefreq: "monthly", priority: 0.6 },
  { path: "/blog", changefreq: "weekly", priority: 0.8 },
  // /blog/:slug entries will be appended by the MDX blog workstream (B3).
  { path: "/contact", changefreq: "monthly", priority: 0.7 },
  { path: "/privacy", changefreq: "yearly", priority: 0.3 },
  { path: "/terms", changefreq: "yearly", priority: 0.3 },
  { path: "/sitemap", changefreq: "yearly", priority: 0.3 },
  { path: "/thanks", noindex: true },
];

function buildSitemap(siteUrl: string, lastmod: string): string {
  const entries = ROUTES.filter((r) => !r.noindex)
    .map((r) => {
      const lines = [
        "  <url>",
        `    <loc>${siteUrl}${r.path === "/" ? "" : r.path}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
      ];
      if (r.changefreq) lines.push(`    <changefreq>${r.changefreq}</changefreq>`);
      if (r.priority !== undefined) lines.push(`    <priority>${r.priority.toFixed(1)}</priority>`);
      lines.push("  </url>");
      return lines.join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

export function sitemapPlugin(
  siteUrl = "https://yoursmileadvanceddental.ae"
): Plugin {
  return {
    name: "vite-plugin-sitemap",
    apply: "build",
    generateBundle() {
      const lastmod = new Date().toISOString().slice(0, 10);
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: buildSitemap(siteUrl, lastmod),
      });
    },
  };
}
