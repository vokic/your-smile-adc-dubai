import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Doctors from "@/pages/Doctors";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import About from "@/pages/About";
import Veneers from "@/pages/Veneers";
import DentalSurgery from "@/pages/DentalSurgery";
import Orthodontics from "@/pages/Orthodontics";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/services" component={Services}/>
          <Route path="/doctors" component={Doctors}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/faq" component={FAQ}/>
          <Route path="/about" component={About}/>
          <Route path="/veneers" component={Veneers}/>
          <Route path="/dental-surgery" component={DentalSurgery}/>
          <Route path="/orthodontics" component={Orthodontics}/>
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
