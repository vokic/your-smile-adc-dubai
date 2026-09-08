import type { Plugin } from "vite";

/**
 * Keeps tracking snippets out of builds that have no IDs configured.
 *
 * Vite substitutes %VITE_GTM_ID% / %VITE_GSC_VERIFICATION% in index.html
 * from the environment, but leaves the literal token in place when the
 * variable is undefined. This plugin runs after that substitution and
 * removes the GTM <script data-gtm>/<noscript data-gtm> blocks and the
 * Search Console meta tag whenever their value is missing, so a preview or
 * local build never ships a half-configured tag.
 */
export function trackingPlugin(): Plugin {
  return {
    name: "vite-plugin-tracking",
    enforce: "post",
    transformIndexHtml(html) {
      const gtm = process.env.VITE_GTM_ID?.trim();
      const gsc = process.env.VITE_GSC_VERIFICATION?.trim();

      if (!gtm) {
        html = html
          .replace(/\s*<script data-gtm>[\s\S]*?<\/script>/g, "")
          .replace(/\s*<noscript data-gtm>[\s\S]*?<\/noscript>/g, "");
      }
      if (!gsc) {
        html = html.replace(
          /\s*<meta name="google-site-verification" content="[^"]*" \/>/g,
          ""
        );
      }
      return html;
    },
  };
}
