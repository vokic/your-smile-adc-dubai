import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, Phone, MessageCircle, ChevronDown, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SearchDialog } from "@/components/SearchDialog";
import logoImage from "@assets/logo_1764501679029.png";
import { REGULAR_PHONE, whatsappLink } from "@/lib/constants";
import { track } from "@/lib/analytics";

interface NavService {
  name: string;
  path: string;
  desc: string;
  featured?: boolean;
}

// Order = owner's positioning: complex cases first, then the rest.
const SERVICES: NavService[] = [
  { name: "Emergency Dentist", path: "/emergency", desc: "Same-day pain relief & trauma care", featured: true },
  { name: "Dental Implants", path: "/implants", desc: "Single tooth to All-on-4 / All-on-6" },
  { name: "Veneers (Hollywood Smile)", path: "/veneers", desc: "No-prep ceramic veneers" },
  { name: "Crowns & Bridges", path: "/crowns-bridges", desc: "Zirconia, porcelain, same-day" },
  { name: "Cosmetic Dentistry", path: "/cosmetic", desc: "Complete smile transformations" },
  { name: "Orthodontics & Invisalign", path: "/orthodontics", desc: "Aligners, ceramic & metal braces" },
  { name: "Teeth Whitening", path: "/whitening", desc: "Laser, in-office, take-home" },
  { name: "Oral & Dental Surgery", path: "/dental-surgery", desc: "Wisdom teeth, grafting, sinus lift" },
  { name: "Restorative Dentistry", path: "/restorative", desc: "Inlays, onlays & overlays" },
  { name: "General & Preventive", path: "/general-preventive", desc: "Check-ups, cleanings, kids" },
  { name: "Digital X-Ray, OPG & CBCT", path: "/xray-opg", desc: "In-clinic 2D & 3D imaging" },
  { name: "Private At-Home Visit", path: "/at-home", desc: "Dental care at your home or office", featured: true },
  { name: "Dental Tourism", path: "/dental-tourism", desc: "Treatment-only or all-inclusive packages" },
  { name: "Smile Gallery", path: "/gallery", desc: "Before & after results" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsVisible(!(currentScrollY > lastScrollYRef.current && currentScrollY > 80));
          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
        track("search_open", { source: "shortcut" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openSearch = () => {
    setSearchOpen(true);
    track("search_open", { source: "header" });
  };

  const navLink = "text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer px-2 py-1";

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group shrink-0">
          <img
            src={logoImage}
            alt="Your Smile Advanced Dental Center - Dental Clinic in Dubai JLT"
            className="h-14 w-auto transition-opacity group-hover:opacity-80"
            width="auto"
            height="56"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className={navLink}>{t("nav.home")}</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-foreground hover:text-primary !bg-transparent !hover:bg-transparent data-[state=open]:!bg-transparent transition-colors px-2 py-1">
                  {t("nav.services")}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="left-0 top-0 w-[400px] p-4 md:w-[760px] bg-white/95 backdrop-blur">
                  <div className="mb-4 pb-4 border-b border-border flex items-center justify-between">
                    <Link href="/services" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-semibold text-sm">
                      View All Services →
                    </Link>
                    <span className="text-xs text-muted-foreground">Specialists in complex cases</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.path}
                        href={s.path}
                        className={`group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-muted cursor-pointer ${
                          s.featured ? "text-primary" : "text-foreground hover:text-primary"
                        }`}
                      >
                        <div className="text-sm font-medium">{s.name}</div>
                        <p className="text-xs text-muted-foreground">{s.desc}</p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem><Link href="/about" className={navLink}>{t("nav.aboutUs")}</Link></NavigationMenuItem>
              <NavigationMenuItem><Link href="/doctors" className={navLink}>{t("nav.ourDoctors")}</Link></NavigationMenuItem>
              <NavigationMenuItem><Link href="/faq" className={navLink}>{t("nav.faq")}</Link></NavigationMenuItem>
              <NavigationMenuItem><Link href="/blog" className={navLink}>{t("nav.blogNews")}</Link></NavigationMenuItem>
              <NavigationMenuItem><Link href="/contact" className={navLink}>{t("nav.contactUs")}</Link></NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={openSearch} aria-label="Search the site (Ctrl+K)" data-testid="button-search-open">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" asChild className="text-foreground hover:bg-accent hover:text-primary rounded-full">
            <a href={`tel:${REGULAR_PHONE}`} onClick={() => track("call_click", { source: "header", line: "regular" })}>
              <Phone className="mr-2 h-4 w-4" />
              {t("nav.call")}
            </a>
          </Button>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg shadow-primary/20 rounded-full">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_click", { source: "header" })}>
              <MessageCircle className="mr-2 h-4 w-4" />
              {t("nav.book")}
            </a>
          </Button>
          <LanguageSwitcher isDark={false} />
        </div>

        {/* Mobile: search + menu */}
        <div className="flex items-center gap-1 lg:hidden">
          <Button variant="ghost" size="icon" className="rounded-full md:hidden" onClick={openSearch} aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col p-0">
              <div className="flex-1 overflow-y-auto">
                <nav className="flex flex-col gap-1 mt-8 px-6 pb-8">
                  <div className="mb-4 pb-4 border-b border-border">
                    <LanguageSwitcher />
                  </div>
                  <Link href="/" className="text-lg font-medium cursor-pointer py-3" onClick={() => setIsOpen(false)}>{t("nav.home")}</Link>

                  <Collapsible open={servicesOpen} onOpenChange={setServicesOpen} className="w-full">
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium py-3 hover:text-primary transition-colors">
                      <span>{t("nav.services")}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="flex flex-col gap-1 pl-4 pt-1">
                      <Link href="/services" className="text-sm py-2 font-semibold text-primary" onClick={() => { setIsOpen(false); setServicesOpen(false); }}>
                        All services →
                      </Link>
                      {SERVICES.map((s) => (
                        <Link
                          key={s.path}
                          href={s.path}
                          className={`text-sm py-2 hover:text-primary transition-colors cursor-pointer ${s.featured ? "text-primary font-medium" : ""}`}
                          onClick={() => { setIsOpen(false); setServicesOpen(false); }}
                        >
                          {s.name}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Link href="/about" className="text-lg font-medium cursor-pointer py-3" onClick={() => setIsOpen(false)}>{t("nav.aboutUs")}</Link>
                  <Link href="/doctors" className="text-lg font-medium cursor-pointer py-3" onClick={() => setIsOpen(false)}>{t("nav.ourDoctors")}</Link>
                  <Link href="/blog" className="text-lg font-medium cursor-pointer py-3" onClick={() => setIsOpen(false)}>{t("nav.blogNews")}</Link>
                  <Link href="/faq" className="text-lg font-medium cursor-pointer py-3" onClick={() => setIsOpen(false)}>{t("nav.faq")}</Link>
                  <Link href="/contact" className="text-lg font-medium cursor-pointer py-3" onClick={() => setIsOpen(false)}>{t("nav.contactUs")}</Link>
                </nav>
              </div>

              <div className="border-t border-border px-6 py-4 flex flex-col gap-3">
                <Button asChild className="w-full bg-primary text-primary-foreground rounded-full">
                  <a href={whatsappLink()} onClick={() => { setIsOpen(false); track("whatsapp_click", { source: "mobile-menu" }); }} target="_blank" rel="noopener noreferrer">{t("nav.book")}</a>
                </Button>
                <Button variant="outline" asChild className="w-full rounded-full">
                  <a href={`tel:${REGULAR_PHONE}`} onClick={() => { setIsOpen(false); track("call_click", { source: "mobile-menu", line: "regular" }); }}>{t("nav.call")}</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}
