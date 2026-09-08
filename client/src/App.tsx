import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/hooks/useLanguage";
import { useEffect, lazy, Suspense, type ComponentType } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { CookieConsent } from "@/components/CookieConsent";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { trackPageView } from "@/lib/analytics";
import routesJson from "@/lib/routes.json";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Wouter passes route params; pages ignore them.
type PageComponent = ComponentType<any>;

const SubServicePage = lazy(() => import("@/pages/services/SubServicePage"));

/**
 * Route → component map. The list of paths lives in lib/routes.json (shared
 * with the sitemap plugin and the prerender script). Any registered path that
 * has two segments under a treatment category is a data-driven sub-service
 * page; everything else needs an explicit entry here.
 */
const PAGES: Record<string, PageComponent> = {
  "/": Home,
  "/services": lazy(() => import("@/pages/Services")),
  "/doctors": lazy(() => import("@/pages/Doctors")),
  "/contact": lazy(() => import("@/pages/Contact")),
  "/faq": lazy(() => import("@/pages/FAQ")),
  "/about": lazy(() => import("@/pages/About")),
  "/veneers": lazy(() => import("@/pages/Veneers")),
  "/dental-surgery": lazy(() => import("@/pages/DentalSurgery")),
  "/orthodontics": lazy(() => import("@/pages/Orthodontics")),
  "/implants": lazy(() => import("@/pages/Implants")),
  "/general-preventive": lazy(() => import("@/pages/GeneralAndPreventive")),
  "/restorative": lazy(() => import("@/pages/Restorative")),
  "/xray-opg": lazy(() => import("@/pages/DentalXrayOPG")),
  "/crowns-bridges": lazy(() => import("@/pages/CrownsAndBridges")),
  "/cosmetic": lazy(() => import("@/pages/Cosmetic")),
  "/whitening": lazy(() => import("@/pages/Whitening")),
  "/emergency": lazy(() => import("@/pages/Emergency")),
  "/at-home": lazy(() => import("@/pages/AtHome")),
  "/blog": lazy(() => import("@/pages/Blog")),
  "/blog-post": lazy(() => import("@/pages/BlogPost")),
  "/dental-tourism": lazy(() => import("@/pages/DentalTourism")),
  "/gallery": lazy(() => import("@/pages/Gallery")),
  "/privacy": lazy(() => import("@/pages/Privacy")),
  "/terms": lazy(() => import("@/pages/Terms")),
  "/sitemap": lazy(() => import("@/pages/Sitemap")),
  "/thanks": lazy(() => import("@/pages/Thanks")),
};

const SUB_SERVICE_PATTERN =
  /^\/(dental-surgery|general-preventive|crowns-bridges|whitening|orthodontics|restorative)\/[a-z0-9-]+$/;

const ROUTES = routesJson.routes.map((r) => r.path);

function componentFor(path: string): PageComponent | null {
  if (PAGES[path]) return PAGES[path];
  if (SUB_SERVICE_PATTERN.test(path)) return SubServicePage;
  return null;
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
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Defer so the new page's <title> has been hoisted before we read it.
    const t = setTimeout(() => trackPageView(location), 50);
    return () => clearTimeout(t);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
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
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LanguageProvider>
            <Toaster />
            <Router />
          </LanguageProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
