import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/hooks/useLanguage";
import { useEffect, lazy, Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

const Services = lazy(() => import("@/pages/Services"));
const Doctors = lazy(() => import("@/pages/Doctors"));
const Contact = lazy(() => import("@/pages/Contact"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const About = lazy(() => import("@/pages/About"));
const Veneers = lazy(() => import("@/pages/Veneers"));
const DentalSurgery = lazy(() => import("@/pages/DentalSurgery"));
const Orthodontics = lazy(() => import("@/pages/Orthodontics"));
const Implants = lazy(() => import("@/pages/Implants"));
const GeneralAndPreventive = lazy(() => import("@/pages/GeneralAndPreventive"));
const DentalXrayOPG = lazy(() => import("@/pages/DentalXrayOPG"));
const CrownsAndBridges = lazy(() => import("@/pages/CrownsAndBridges"));
const Cosmetic = lazy(() => import("@/pages/Cosmetic"));
const Whitening = lazy(() => import("@/pages/Whitening"));
const Emergency = lazy(() => import("@/pages/Emergency"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const DentalTourism = lazy(() => import("@/pages/DentalTourism"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const Sitemap = lazy(() => import("@/pages/Sitemap"));
const Thanks = lazy(() => import("@/pages/Thanks"));

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
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<RouteFallback />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/doctors" component={Doctors} />
            <Route path="/contact" component={Contact} />
            <Route path="/faq" component={FAQ} />
            <Route path="/about" component={About} />
            <Route path="/veneers" component={Veneers} />
            <Route path="/dental-surgery" component={DentalSurgery} />
            <Route path="/orthodontics" component={Orthodontics} />
            <Route path="/implants" component={Implants} />
            <Route path="/general-preventive" component={GeneralAndPreventive} />
            <Route path="/xray-opg" component={DentalXrayOPG} />
            <Route path="/crowns-bridges" component={CrownsAndBridges} />
            <Route path="/cosmetic" component={Cosmetic} />
            <Route path="/whitening" component={Whitening} />
            <Route path="/emergency" component={Emergency} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog-post" component={BlogPost} />
            <Route path="/dental-tourism" component={DentalTourism} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
            <Route path="/sitemap" component={Sitemap} />
            <Route path="/thanks" component={Thanks} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
      <FloatingActionButton />
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
