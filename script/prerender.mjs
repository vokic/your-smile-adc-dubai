// Post-build prerender for the static SPA.
// Serves `dist/public` over HTTP, navigates a headless Chromium to each
// route, waits for the React app + lazy chunks to settle, and writes the
// rendered HTML to dist/public/<route>/index.html. Goal: every route ships
// real first-byte HTML with the correct <title>/<meta>/og/JSON-LD instead
// of the SPA shell.

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "..", "dist", "public");

// Keep in sync with vite-plugin-sitemap.ts ROUTES and the Wouter routes
// in client/src/App.tsx. /thanks is excluded from search indexing but
// still prerendered so post-submit lands on a real HTML page.
const ROUTES = [
  "/",
  "/services",
  "/veneers",
  "/implants",
  "/orthodontics",
  "/whitening",
  "/crowns-bridges",
  "/cosmetic",
  "/emergency",
  "/dental-surgery",
  "/general-preventive",
  "/xray-opg",
  "/dental-tourism",
  "/gallery",
  "/doctors",
  "/about",
  "/faq",
  "/blog",
  "/blog-post",
  "/contact",
  "/privacy",
  "/terms",
  "/sitemap",
  "/thanks",
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

/**
 * Start a static file server backed by DIST_DIR. SPA fallback serves the
 * provided shellHtml (kept in memory) instead of reading index.html from
 * disk, which prevents earlier prerender output from leaking into later
 * routes' renders.
 */
function startServer(shellHtml) {
  const server = http.createServer((req, res) => {
    let urlPath;
    try {
      urlPath = decodeURIComponent(
        new URL(req.url ?? "/", "http://localhost").pathname
      );
    } catch {
      res.writeHead(400);
      res.end();
      return;
    }
    if (urlPath.endsWith("/")) urlPath += "index.html";
    const filePath = path.join(DIST_DIR, urlPath);

    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(shellHtml);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME[ext] ?? "application/octet-stream";
    res.writeHead(200, { "Content-Type": mime });
    fs.createReadStream(filePath)
      .on("error", () => {
        res.statusCode = 500;
        res.end();
      })
      .pipe(res);
  });
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

function outputPathForRoute(route) {
  if (route === "/") return path.join(DIST_DIR, "index.html");
  if (route === "__404__") return path.join(DIST_DIR, "404.html");
  return path.join(DIST_DIR, route.replace(/^\//, ""), "index.html");
}

// URL used when prerendering the 404 page. Any path that no Wouter route
// matches triggers NotFound. The resulting HTML is written to 404.html
// and Netlify serves it with status 404 for unknown URLs.
const NOT_FOUND_URL = "/__not_a_real_route__";

/**
 * The static shell ships fallback <title>/<meta>/<link> tags. React 19
 * hoists per-page metadata into <head> on mount, but it does so by
 * appending — so the shell's fallback tags appear FIRST and the
 * React-rendered tags appear LATER. We want the React-rendered ones to
 * win, so for each tag identity keep the LAST occurrence and drop the
 * rest. (Title is sometimes deduped natively by React; the keep-last
 * rule is correct either way.)
 */
function dedupeHeadInBrowser() {
  const head = document.head;

  const keepLast = (selector) => {
    const els = head.querySelectorAll(selector);
    for (let i = 0; i < els.length - 1; i++) els[i].remove();
  };

  keepLast("title");
  keepLast('link[rel="canonical"]');

  // Meta tags: keep last occurrence per key (name | property | http-equiv).
  const metas = [...head.querySelectorAll("meta")];
  const lastIndex = new Map();
  metas.forEach((meta, i) => {
    const key =
      meta.getAttribute("name") ||
      meta.getAttribute("property") ||
      meta.getAttribute("http-equiv");
    if (!key) return;
    lastIndex.set(key, i);
  });
  metas.forEach((meta, i) => {
    const key =
      meta.getAttribute("name") ||
      meta.getAttribute("property") ||
      meta.getAttribute("http-equiv");
    if (!key) return;
    if (lastIndex.get(key) !== i) meta.remove();
  });
}

async function prerenderRoute(browser, baseUrl, route, outputs) {
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(60_000);
  page.on("pageerror", (err) => {
    console.warn(`[prerender] ${route} page error: ${err.message}`);
  });

  try {
    const urlPath = route === "__404__" ? NOT_FOUND_URL : route;
    await page.goto(`${baseUrl}${urlPath}`, { waitUntil: "networkidle0" });
    // One animation frame so any post-mount effects settle.
    await page.evaluate(
      () => new Promise((r) => requestAnimationFrame(() => r()))
    );
    await page.evaluate(dedupeHeadInBrowser);
    const html = await page.content();
    outputs.push({ route, html });
    return html.length;
  } finally {
    await page.close();
  }
}

async function main() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`[prerender] dist dir not found: ${DIST_DIR}`);
    console.error("[prerender] Run `vite build` first.");
    process.exit(1);
  }

  // Snapshot the shell BEFORE any per-route write happens. All SPA
  // fallbacks during the run serve this shell from memory.
  const shellPath = path.join(DIST_DIR, "index.html");
  const shellHtml = fs.readFileSync(shellPath, "utf-8");

  console.log(`[prerender] Prerendering ${ROUTES.length} routes...`);

  const server = await startServer(shellHtml);
  const port = server.address().port;
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`[prerender] Static server on ${baseUrl}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const outputs = [];
  try {
    const allRoutes = [...ROUTES, "__404__"];
    for (const route of allRoutes) {
      const start = Date.now();
      const size = await prerenderRoute(browser, baseUrl, route, outputs);
      const ms = Date.now() - start;
      const kb = (size / 1024).toFixed(1);
      const label = route === "__404__" ? "/404.html" : route;
      console.log(
        `[prerender] ${label.padEnd(22)} ${kb.padStart(6)} KB  ${ms} ms`
      );
    }

    // Write outputs only after all rendering is done — avoids any chance
    // of an earlier route's HTML being served as the shell to a later one.
    for (const { route, html } of outputs) {
      const outPath = outputPathForRoute(route);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html, "utf-8");
    }
    console.log(`[prerender] Wrote ${outputs.length} HTML files.`);
  } finally {
    await browser.close();
    await new Promise((r) => server.close(r));
  }
}

main().catch((err) => {
  console.error("[prerender] FAILED:", err);
  process.exit(1);
});
