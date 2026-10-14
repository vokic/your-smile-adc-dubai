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
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
