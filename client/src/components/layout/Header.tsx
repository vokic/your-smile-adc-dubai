import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Menu, Phone, MessageCircle, ChevronDown, ChevronRight, Search, ArrowRight,
} from "lucide-react";
import {
  ToothChipped, ToothImplant, ToothVeneer, ToothCrown, FaceSmile, ToothBraces, ToothClean, ToothExtraction,
  ToothFilling, ToothProtection, ToothXray, Home as HomeIcon, Airplane, Gallery,
} from "@/components/DentalIcons";
import type { DentalIcon } from "@/components/DentalIcons";
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
  /** Locale key under `navServices.*`; the label and blurb come from there. */
  key: string;
  path: string;
  icon: DentalIcon;
}

// Order = owner's positioning: complex cases first, then the rest.
const SERVICES: NavService[] = [
  { key: "emergency", path: "/emergency", icon: ToothChipped },
  { key: "implants", path: "/implants", icon: ToothImplant },
  { key: "veneers", path: "/veneers", icon: ToothVeneer },
  { key: "crownsBridges", path: "/crowns-bridges", icon: ToothCrown },
  { key: "cosmetic", path: "/cosmetic", icon: FaceSmile },
  { key: "orthodontics", path: "/orthodontics", icon: ToothBraces },
  { key: "whitening", path: "/whitening", icon: ToothClean },
  { key: "dentalSurgery", path: "/dental-surgery", icon: ToothExtraction },
  { key: "restorative", path: "/restorative", icon: ToothFilling },
  { key: "generalPreventive", path: "/general-preventive", icon: ToothProtection },
  { key: "xrayOpg", path: "/xray-opg", icon: ToothXray },
  { key: "atHome", path: "/at-home", icon: HomeIcon },
  { key: "dentalTourism", path: "/dental-tourism", icon: Airplane },
  { key: "gallery", path: "/gallery", icon: Gallery },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  const [servicesOpen, setServicesOpen] = useState(false);
  // Controlled so the Services popover closes after navigation; uncontrolled
  // Radix keeps it open under the cursor once the SPA route changes.
  const [navValue, setNavValue] = useState("");
  const [location] = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    setNavValue("");
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

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

  // inline-flex to match the Services trigger (a button); plain inline <a>s sit on
  // the <li> text baseline and end up ~2px lower than it.
  const navLink = "inline-flex items-center whitespace-nowrap text-[13px] xl:text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer px-1.5 xl:px-2 py-1";

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        {/* Logo. Equal flex basis on the two side groups is what actually centres
            the nav: justify-between cannot, because logo and CTA widths differ. */}
        <div className="flex items-center shrink-0 lg:flex-1 lg:basis-0">
          <Link href="/" className="flex items-center gap-3 cursor-pointer group">
            <img
              src={logoImage}
              alt={t("nav.logoAlt")}
              className="h-14 lg:h-11 xl:h-14 w-auto transition-opacity group-hover:opacity-80"
              width="auto"
              height="56"
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center justify-center shrink-0">
          <NavigationMenu value={navValue} onValueChange={setNavValue}>
            <NavigationMenuList className="space-x-0 xl:space-x-1">
              <NavigationMenuItem>
                <Link href="/" className={navLink}>{t("nav.home")}</Link>
              </NavigationMenuItem>
              <NavigationMenuItem value="services">
                <NavigationMenuTrigger className="h-auto whitespace-nowrap text-[13px] xl:text-sm font-medium text-foreground hover:text-primary data-[state=open]:text-primary !bg-transparent hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent transition-colors px-1.5 xl:px-2 py-1">
                  {t("nav.services")}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-3 md:w-[min(760px,calc(100vw_-_2rem))]">
                  <div className="mb-3 px-1 pb-3 border-b border-border flex items-center justify-between gap-4">
                    <NavigationMenuLink asChild>
                      <Link href="/services" className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold text-sm">
                        {t("nav.viewAllServices")}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </NavigationMenuLink>
                    <span className="text-xs text-muted-foreground">{t("nav.complexCases")}</span>
                  </div>
                  <ul className="grid grid-cols-3 gap-1">
                    {SERVICES.map(({ key, path, icon: Icon }) => (
                      <li key={path}>
                        <NavigationMenuLink asChild active={location === path}>
                          <Link
                            href={path}
                            className="group flex items-start gap-3 rounded-xl p-2.5 outline-none transition-colors hover:bg-muted focus-visible:bg-muted focus-visible:ring-2 focus-visible:ring-ring data-[active]:bg-muted"
                          >
                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
                                {t(`navServices.${key}.name`)}
                              </span>
                              <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">{t(`navServices.${key}.desc`)}</span>
                            </span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
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
        <div className="hidden md:flex items-center gap-2 lg:gap-1.5 xl:gap-2 shrink-0 lg:flex-1 lg:basis-0 lg:justify-end">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={openSearch} aria-label={t("nav.searchAria")} data-testid="button-search-open">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" asChild className="text-foreground hover:bg-accent hover:text-primary rounded-full lg:px-3 xl:px-4">
            <a href={`tel:${REGULAR_PHONE}`} aria-label={t("nav.call")} onClick={() => track("call_click", { source: "header", line: "regular" })}>
              <Phone className="mr-2 lg:mr-0 xl:mr-2 h-4 w-4" />
              <span className="lg:hidden xl:inline">{t("nav.call")}</span>
            </a>
          </Button>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg shadow-primary/20 rounded-full whitespace-nowrap">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_click", { source: "header" })}>
              <MessageCircle className="mr-2 h-4 w-4" />
              {t("nav.book")}
            </a>
          </Button>
          <LanguageSwitcher isDark={false} />
        </div>

        {/* Mobile: search + menu */}
        <div className="flex items-center gap-1 lg:hidden">
          <Button variant="ghost" size="icon" className="rounded-full md:hidden" onClick={openSearch} aria-label={t("nav.searchShort")}>
            <Search className="h-5 w-5" />
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={t("nav.openMenu")}>
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
                    <CollapsibleContent className="flex flex-col gap-0.5 pb-2">
                      <Link
                        href="/services"
                        className="mb-1 flex min-h-11 items-center justify-between rounded-xl bg-primary/10 px-3 text-sm font-semibold text-primary"
                        onClick={() => { setIsOpen(false); setServicesOpen(false); }}
                      >
                        {t("nav.allServices")}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      {SERVICES.map(({ key, path, icon: Icon }) => (
                        <Link
                          key={path}
                          href={path}
                          className={`flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm transition-colors hover:bg-muted hover:text-primary cursor-pointer ${
                            location === path ? "bg-muted" : ""
                          }`}
                          onClick={() => { setIsOpen(false); setServicesOpen(false); }}
                        >
                          <Icon className="h-4 w-4 shrink-0 text-primary" />
                          <span className="flex-1">{t(`navServices.${key}.name`)}</span>
                          <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/50" />
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
