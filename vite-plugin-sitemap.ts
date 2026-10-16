import type { Plugin } from "vite";
import routesJson from "./client/src/lib/routes.json";

/**
 * Emits sitemap.xml and robots.txt at build time from the shared route
 * registry in client/src/lib/routes.json (also consumed by App.tsx and the
 * prerender script), including its `siteUrl`. Add new routes there — never
 * here.
 *
 * `changefreq` and `priority` are hints for crawlers, not commands. There
 * is no <lastmod>: a build date on every URL is not a real modification date,
 * and Google ignores lastmod once it proves unreliable.
 * `noindex: true` keeps the route out of the sitemap (e.g. /thanks). It is
 * NOT disallowed in robots.txt — Google has to crawl a page to see its
 * noindex.
 */
interface RouteEntry {
  path: string;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: number;
  noindex?: boolean;
}

const ROUTES = routesJson.routes as RouteEntry[];

function buildSitemap(siteUrl: string): string {
  const entries = ROUTES.filter((r) => !r.noindex)
    .map((r) => {
      const lines = [
        "  <url>",
        `    <loc>${siteUrl}${r.path === "/" ? "" : r.path}</loc>`,
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

function buildRobots(siteUrl: string): string {
  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}

export function sitemapPlugin(siteUrl: string = routesJson.siteUrl): Plugin {
  return {
    name: "vite-plugin-sitemap",
    apply: "build",
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: buildSitemap(siteUrl),
      });
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: buildRobots(siteUrl),
      });
    },
  };
}
