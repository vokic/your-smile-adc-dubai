import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import logoImage from '@assets/logo_1764501679029.png';
import { REGULAR_PHONE, WHATSAPP_PHONE } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          if (currentScrollY > lastScrollYRef.current && currentScrollY > 80) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
          
          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: "Veneers", path: "/veneers" },
    { name: "Dental Implants", path: "/implants" },
    { name: "Orthodontics", path: "/orthodontics" },
    { name: "Teeth Whitening", path: "/whitening" },
    { name: "Crowns & Bridges", path: "/crowns-bridges" },
    { name: "Digital X-Ray & OPG", path: "/xray-opg" },
    { name: "Emergency Care", path: "/emergency" },
    { name: "Dental Surgery", path: "/dental-surgery" },
    { name: "Cosmetic Dentistry", path: "/cosmetic" },
    { name: "General & Preventive", path: "/general-preventive" },
    { name: "Dental Tourism", path: "/dental-tourism" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* 1. Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <img 
            src={logoImage} 
            alt="Your Smile Advanced Dental Center - Premium Dental Clinic in Dubai JLT" 
            className="h-14 w-auto transition-opacity group-hover:opacity-80"
            width="auto"
            height="56"
          />
        </Link>

        {/* 2. Main Navigation (Desktop) */}
        <div className="hidden lg:flex items-center gap-10">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer px-2 py-1">
                  {t('nav.home')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-foreground hover:text-primary !bg-transparent !hover:bg-transparent data-[state=open]:!bg-transparent transition-colors px-2 py-1">{t('nav.services')}</NavigationMenuTrigger>
                <NavigationMenuContent className="left-0 top-0 w-[400px] p-4 md:w-[700px] bg-white/95 backdrop-blur">
                  <div className="mb-4 pb-4 border-b border-border">
                    <Link href="/services" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-semibold text-sm">
                      View All Services →
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Link href="/veneers" className="group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors text-foreground hover:text-primary hover:bg-transparent cursor-pointer">
                      <div className="text-sm font-medium">Veneers</div>
                      <p className="text-xs text-muted-foreground">Flawless smile transformations</p>
                    </Link>
                    <Link href="/dental-surgery" className="group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors text-foreground hover:text-primary hover:bg-transparent cursor-pointer">
                      <div className="text-sm font-medium">Dental Surgery</div>
                      <p className="text-xs text-muted-foreground">Expert oral procedures</p>
                    </Link>
                    <Link href="/implants" className="group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors text-foreground hover:text-primary hover:bg-transparent cursor-pointer">
                      <div className="text-sm font-medium">Dental Implants</div>
                      <p className="text-xs text-muted-foreground">Permanent tooth replacement</p>
                    </Link>
                    <Link href="/general-preventive" className="group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors text-foreground hover:text-primary hover:bg-transparent cursor-pointer">
                      <div className="text-sm font-medium">General & Preventive</div>
                      <p className="text-xs text-muted-foreground">Check-ups and cleanings</p>
                    </Link>
                    <Link href="/xray-opg" className="group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors text-foreground hover:text-primary hover:bg-transparent cursor-pointer">
                      <div className="text-sm font-medium">Digital X-Ray & OPG</div>
                      <p className="text-xs text-muted-foreground">Advanced diagnostics</p>
                    </Link>
                    <Link href="/crowns-bridges" className="group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors text-foreground hover:text-primary hover:bg-transparent cursor-pointer">
                      <div className="text-sm font-medium">Crowns & Bridges</div>
                      <p className="text-xs text-muted-foreground">Restore teeth function</p>
                    </Link>
                    <Link href="/cosmetic" className="group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors text-foreground hover:text-primary hover:bg-transparent cursor-pointer">
                      <div className="text-sm font-medium">Cosmetic Dentistry</div>
                      <p className="text-xs text-muted-foreground">Beautiful smile design</p>
                    </Link>
                    <Link href="/whitening" className="group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors text-foreground hover:text-primary hover:bg-transparent cursor-pointer">
                      <div className="text-sm font-medium">Teeth Whitening</div>
                      <p className="text-xs text-muted-foreground">Professional brightening</p>
                    </Link>
                    <Link href="/emergency" className="group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors text-foreground hover:text-primary hover:bg-transparent cursor-pointer">
                      <div className="text-sm font-medium">Emergency Care</div>
                      <p className="text-xs text-muted-foreground">24/7 urgent support</p>
                    </Link>
                    <Link href="/orthodontics" className="group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors text-foreground hover:text-primary hover:bg-transparent cursor-pointer">
                      <div className="text-sm font-medium">Orthodontics</div>
                      <p className="text-xs text-muted-foreground">Braces & clear aligners</p>
                    </Link>
                    <Link href="/gallery" className="group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors text-foreground hover:text-primary hover:bg-transparent cursor-pointer border-t pt-3">
                      <div className="text-sm font-medium text-primary">✨ Smile Transformation Gallery</div>
                      <p className="text-xs text-muted-foreground">Before & after results</p>
                    </Link>
                    <Link href="/dental-tourism" className="group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors text-foreground hover:text-primary hover:bg-transparent cursor-pointer border-t pt-3">
                      <div className="text-sm font-medium text-primary">✈️ Dental Tourism Packages</div>
                      <p className="text-xs text-muted-foreground">All-inclusive international smile packages</p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer px-2 py-1">
                  {t('nav.aboutUs')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/doctors" className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer px-2 py-1">
                  {t('nav.ourDoctors')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer px-2 py-1">
                  {t('nav.faq')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer px-2 py-1">
                  {t('nav.blogNews')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer px-2 py-1">
                  {t('nav.contactUs')}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* 3. CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" asChild className="text-foreground hover:bg-accent hover:text-primary rounded-full">
            <a href={`tel:${REGULAR_PHONE}`}>
              <Phone className="mr-2 h-4 w-4" />
              {t('nav.call')}
            </a>
          </Button>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg shadow-primary/20 rounded-full">
            <a href={`https://wa.me/${WHATSAPP_PHONE.replace('+', '')}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              {t('nav.book')}
            </a>
          </Button>
          <LanguageSwitcher isDark={false} />
        </div>

        {/* Mobile CTA Button */}
        <div className="md:hidden">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
            <a href={`https://wa.me/${WHATSAPP_PHONE.replace('+', '')}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Book
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col p-0">
              <div className="flex-1 overflow-y-auto">
                <nav className="flex flex-col gap-1 mt-8 px-6 pb-8">
                  <div className="mb-4 pb-4 border-b border-border">
                    <LanguageSwitcher />
                  </div>
                  <Link href="/" className="text-lg font-medium cursor-pointer py-3" onClick={() => setIsOpen(false)}>{t('nav.home')}</Link>
                  
                  {/* Expandable Services */}
                  <Collapsible open={servicesOpen} onOpenChange={setServicesOpen} className="w-full">
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium py-3 hover:text-primary transition-colors">
                      <span>{t('nav.services')}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="flex flex-col gap-1 pl-4 pt-1">
                      {services.map(s => (
                        <Link 
                          key={s.name} 
                          href={s.path} 
                          className="text-sm py-2 hover:text-primary transition-colors cursor-pointer" 
                          onClick={() => {
                            setIsOpen(false);
                            setServicesOpen(false);
                          }}
                        >
                          {s.name}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Link href="/gallery" className="text-lg font-medium cursor-pointer py-3" onClick={() => setIsOpen(false)}>{t('services.transformationGallery')}</Link>
                  <Link href="/about" className="text-lg font-medium cursor-pointer py-3" onClick={() => setIsOpen(false)}>{t('nav.aboutUs')}</Link>
                  <Link href="/doctors" className="text-lg font-medium cursor-pointer py-3" onClick={() => setIsOpen(false)}>{t('nav.ourDoctors')}</Link>
                  <Link href="/blog" className="text-lg font-medium cursor-pointer py-3" onClick={() => setIsOpen(false)}>{t('nav.blogNews')}</Link>
                  <Link href="/faq" className="text-lg font-medium cursor-pointer py-3" onClick={() => setIsOpen(false)}>{t('nav.faq')}</Link>
                  <Link href="/contact" className="text-lg font-medium cursor-pointer py-3" onClick={() => setIsOpen(false)}>{t('nav.contactUs')}</Link>
                </nav>
              </div>
              
              <div className="border-t border-border px-6 py-4 flex flex-col gap-3">
                <Button asChild className="w-full bg-primary text-primary-foreground rounded-full">
                  <a href={`https://wa.me/${WHATSAPP_PHONE.replace('+', '')}`} onClick={() => setIsOpen(false)} target="_blank" rel="noopener noreferrer">{t('nav.book')}</a>
                </Button>
                <Button variant="outline" asChild className="w-full rounded-full">
                  <a href={`tel:${REGULAR_PHONE}`} onClick={() => setIsOpen(false)}>{t('nav.call')}</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
