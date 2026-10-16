import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { sitemapPlugin } from "./vite-plugin-sitemap";
import { trackingPlugin } from "./vite-plugin-tracking";
import { fontPreloadPlugin } from "./vite-plugin-font-preload";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemapPlugin(),
    trackingPlugin(),
    fontPreloadPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  // Tailwind v4 runs as a Vite plugin; an empty inline PostCSS config stops
  // Vite from picking up a stray postcss.config.* from a parent folder.
  css: {
    postcss: {
      plugins: [],
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  // Dev server on localhost only (the Replit-era 0.0.0.0 + allowedHosts: true
  // exposed it to the whole network). To test on a phone over Wi-Fi, run
  // `npm run dev -- --host` for that session.
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
