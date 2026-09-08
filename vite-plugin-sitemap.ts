import type { Plugin } from "vite";
import routesJson from "./client/src/lib/routes.json";

/**
 * Emits sitemap.xml at build time from the shared route registry in
 * client/src/lib/routes.json (also consumed by App.tsx and the prerender
 * script). Add new routes there — never here.
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

const ROUTES = routesJson.routes as RouteEntry[];

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
