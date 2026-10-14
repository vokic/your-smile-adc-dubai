import type { Plugin } from "vite";

/**
 * Adds <link rel="preload"> for the few font files every hero needs, so they
 * arrive with the CSS instead of after it. Without this the hero headline
 * first paints in the fallback serif and re-wraps when Playfair arrives — a
 * layout shift of ~0.2 CLS on slow phones.
 *
 * The fonts come from @fontsource (imported in client/src/main.tsx), so their
 * fingerprinted names are only known at build time; they are looked up in the
 * bundle here. Latin subsets only — that is what the prerendered (English)
 * HTML renders with. Keep this list short: every preload competes with the
 * hero image for bandwidth.
 */
const CRITICAL_FONTS = [
  "playfair-display-latin-700-normal", // h1 / h2 (font-serif font-bold)
  "lato-latin-400-normal", // body text
  "lato-latin-300-normal", // hero subtitles (font-light)
];

export function fontPreloadPlugin(): Plugin {
  return {
    name: "vite-plugin-font-preload",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        if (!ctx.bundle) return html;
        const files = Object.keys(ctx.bundle);
        const links = CRITICAL_FONTS.map((name) =>
          files.find((f) => f.endsWith(".woff2") && f.includes(`/${name}-`)),
        )
          .filter((f): f is string => Boolean(f))
          .map(
            (f) =>
              `<link rel="preload" href="/${f}" as="font" type="font/woff2" crossorigin>`,
          );
        return html.replace("</head>", `    ${links.join("\n    ")}\n  </head>`);
      },
    },
  };
}
