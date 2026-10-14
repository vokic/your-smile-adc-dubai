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
import "./index.css";

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
