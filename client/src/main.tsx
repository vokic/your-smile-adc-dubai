import { createRoot } from "react-dom/client";
import App, { preloadRoute } from "./App";
// Self-hosted fonts (bundled by Vite): no render-blocking third-party CSS and
// no extra connections to Google. Same weights the Google Fonts URL loaded.
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
// Lato has no Cyrillic. Carlito is derived from Lato's design and has it;
// listed after Lato in --font-sans, so only Russian text uses it, and its
// unicode-range faces mean English/German visitors never download it.
import "@fontsource/carlito/400.css";
import "@fontsource/carlito/700.css";
import "./index.css";

// After a deploy, a tab opened earlier still asks for the previous build's
// page chunks, which no longer exist. Reload once to pick up the new build
// instead of landing on the error screen. The timestamp guard stops a reload
// loop when a chunk is genuinely missing (or storage is blocked).
window.addEventListener("vite:preloadError", (event) => {
  const KEY = "ysadc-chunk-reload";
  try {
    const last = Number(sessionStorage.getItem(KEY) ?? 0);
    if (Date.now() - last < 10_000) return;
    sessionStorage.setItem(KEY, String(Date.now()));
  } catch {
    return;
  }
  event.preventDefault();
  window.location.reload();
});

// Every route ships prerendered HTML. Resolving the current page's lazy chunk
// before the first render lets React swap that HTML for an identical tree in
// one commit, instead of showing the Suspense spinner (and shifting the
// layout) while the chunk downloads. The chunk is already modulepreloaded by
// the prerendered <head>, so this rarely waits at all.
preloadRoute(window.location.pathname)
  .catch(() => {
    /* chunk failed — render anyway; Suspense retries and ErrorBoundary catches */
  })
  .finally(() => {
    createRoot(document.getElementById("root")!).render(<App />);
  });
