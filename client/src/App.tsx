import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/hooks/useLanguage";
import { useEffect, lazy, Suspense, type ComponentType } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { CookieConsent } from "@/components/CookieConsent";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import routesJson from "@/lib/routes.json";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Wouter passes route params; pages ignore them.
type PageComponent = ComponentType<any>;
type LazyPage = PageComponent & { preload: () => Promise<void> };

/**
 * React.lazy plus a `preload()` that resolves the chunk ahead of rendering.
 * Once loaded, the page renders synchronously instead of suspending — which
 * is what keeps the prerendered HTML on screen during the first client
 * render (see main.tsx) rather than swapping it for the Suspense spinner.
 */
function lazyPage(load: () => Promise<{ default: PageComponent }>): LazyPage {
  let Loaded: PageComponent | null = null;
  const remember = (mod: { default: PageComponent }) => {
    Loaded = mod.default;
    return mod;
  };
  const Lazy = lazy(() => load().then(remember));
  const Page = ((props: object) => (Loaded ? <Loaded {...props} /> : <Lazy {...props} />)) as LazyPage;
  Page.preload = () => load().then(remember).then(() => undefined);
  return Page;
}

const SubServicePage = lazyPage(() => import("@/pages/services/SubServicePage"));
const BlogPost = lazyPage(() => import("@/pages/BlogPost"));

/**
 * Route → component map. The list of paths lives in lib/routes.json (shared
 * with the sitemap plugin and the prerender script). Any registered path that
 * has two segments under a treatment category is a data-driven sub-service
 * page, and /blog/<slug> is an article from content/blog.ts; everything else
 * needs an explicit entry here.
 */
const PAGES: Record<string, PageComponent> = {
  "/": Home,
  "/services": lazyPage(() => import("@/pages/Services")),
  "/doctors": lazyPage(() => import("@/pages/Doctors")),
  "/contact": lazyPage(() => import("@/pages/Contact")),
  "/faq": lazyPage(() => import("@/pages/FAQ")),
  "/about": lazyPage(() => import("@/pages/About")),
  "/veneers": lazyPage(() => import("@/pages/Veneers")),
  "/dental-surgery": lazyPage(() => import("@/pages/DentalSurgery")),
  "/orthodontics": lazyPage(() => import("@/pages/Orthodontics")),
  "/implants": lazyPage(() => import("@/pages/Implants")),
  "/general-preventive": lazyPage(() => import("@/pages/GeneralAndPreventive")),
  "/restorative": lazyPage(() => import("@/pages/Restorative")),
  "/xray-opg": lazyPage(() => import("@/pages/DentalXrayOPG")),
  "/crowns-bridges": lazyPage(() => import("@/pages/CrownsAndBridges")),
  "/cosmetic": lazyPage(() => import("@/pages/Cosmetic")),
  "/whitening": lazyPage(() => import("@/pages/Whitening")),
  "/emergency": lazyPage(() => import("@/pages/Emergency")),
  "/at-home": lazyPage(() => import("@/pages/AtHome")),
  "/blog": lazyPage(() => import("@/pages/Blog")),
  "/dental-tourism": lazyPage(() => import("@/pages/DentalTourism")),
  "/gallery": lazyPage(() => import("@/pages/Gallery")),
  "/privacy": lazyPage(() => import("@/pages/Privacy")),
  "/terms": lazyPage(() => import("@/pages/Terms")),
  "/sitemap": lazyPage(() => import("@/pages/Sitemap")),
  "/thanks": lazyPage(() => import("@/pages/Thanks")),
};

const SUB_SERVICE_PATTERN =
  /^\/(dental-surgery|general-preventive|crowns-bridges|whitening|orthodontics|restorative)\/[a-z0-9-]+$/;
const BLOG_POST_PATTERN = /^\/blog\/[a-z0-9-]+$/;

const ROUTES = routesJson.routes.map((r) => r.path);

// Pagefind indexes only <main data-pagefind-body>, so 404 and noindex pages
// (and the header/footer/cookie banner around <main>) stay out of search.
const INDEXABLE = new Set(
  routesJson.routes.filter((r) => !("noindex" in r && r.noindex)).map((r) => r.path),
);

function componentFor(path: string): PageComponent | null {
  if (PAGES[path]) return PAGES[path];
  if (SUB_SERVICE_PATTERN.test(path)) return SubServicePage;
  if (BLOG_POST_PATTERN.test(path)) return BlogPost;
  return null;
}

/** Load the chunk for `path` (if it is a lazy page) before the first render. */
export function preloadRoute(path: string): Promise<void> {
  const Component = componentFor(path);
  return Component && "preload" in Component
    ? (Component as LazyPage).preload()
    : Promise.resolve();
}

if (import.meta.env.DEV) {
  for (const path of ROUTES) {
    if (!componentFor(path)) {
      console.warn(`[routes] ${path} is registered in routes.json but has no component in App.tsx`);
    }
  }
}

function RouteFallback() {
  return (
    <div
      className="flex items-center justify-center min-h-[60vh]"
      role="status"
      aria-label="Loading page"
    >
      <div className="h-10 w-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    // Instant: a smooth scroll from the footer visibly drags the new page up.
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow" data-pagefind-body={INDEXABLE.has(location) ? "" : undefined}>
        <Suspense fallback={<RouteFallback />}>
          <Switch>
            {ROUTES.map((path) => {
              const Component = componentFor(path);
              return Component ? <Route key={path} path={path} component={Component} /> : null;
            })}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
      <FloatingActionButton />
      <CookieConsent />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Toaster />
        <Router />
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
