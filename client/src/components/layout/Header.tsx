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
import { Menu, Phone, MessageCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    "Veneers",
    "Implants",
    "Orthodontics",
    "Whitening",
    "Crowns & Bridges",
    "Digital X-Ray",
    "Emergency",
    "Pediatric",
    "Preventive",
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* 1. Logo */}
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <span className="text-2xl font-serif font-bold text-primary">Your Smile</span>
          <span className="text-sm text-muted-foreground hidden md:inline-block">Advanced Dental Center</span>
        </Link>

        {/* 2. Main Navigation (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 cursor-pointer">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Services</NavigationMenuTrigger>
                <NavigationMenuContent className="left-0 top-0 w-[400px] p-4 md:w-[900px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Cosmetic Dentistry */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold text-primary uppercase tracking-wide px-3 py-2">Cosmetic Dentistry</h3>
                      <Link href="/veneers" className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <div className="text-sm font-medium">Veneers</div>
                        <p className="text-xs text-muted-foreground">Flawless porcelain & composite veneers</p>
                      </Link>
                      <a href="#" className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <div className="text-sm font-medium">Teeth Whitening</div>
                        <p className="text-xs text-muted-foreground">Professional brightening treatments</p>
                      </a>
                      <a href="#" className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <div className="text-sm font-medium">Smile Makeover</div>
                        <p className="text-xs text-muted-foreground">Transform your entire smile</p>
                      </a>
                    </div>

                    {/* Restorative Dentistry */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold text-primary uppercase tracking-wide px-3 py-2">Restorative</h3>
                      <a href="#" className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <div className="text-sm font-medium">Dental Implants</div>
                        <p className="text-xs text-muted-foreground">Permanent tooth replacement</p>
                      </a>
                      <a href="#" className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <div className="text-sm font-medium">Crowns & Bridges</div>
                        <p className="text-xs text-muted-foreground">Strengthen & replace teeth</p>
                      </a>
                      <Link href="/dental-surgery" className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <div className="text-sm font-medium">Expert Dental Surgery</div>
                        <p className="text-xs text-muted-foreground">Wisdom teeth, bone grafts, etc</p>
                      </Link>
                    </div>

                    {/* Orthodontics */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold text-primary uppercase tracking-wide px-3 py-2">Orthodontics</h3>
                      <Link href="/orthodontics" className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <div className="text-sm font-medium">Braces & Clear Aligners</div>
                        <p className="text-xs text-muted-foreground">Metal, ceramic, Invisalign</p>
                      </Link>
                      <Link href="/orthodontics" className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <div className="text-sm font-medium">Bite Correction</div>
                        <p className="text-xs text-muted-foreground">Overbite, underbite, crossbite</p>
                      </Link>
                    </div>

                    {/* Preventive & Other */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold text-primary uppercase tracking-wide px-3 py-2">Preventive & Other</h3>
                      <a href="#" className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <div className="text-sm font-medium">Routine Check-Ups</div>
                        <p className="text-xs text-muted-foreground">Regular exams & cleanings</p>
                      </a>
                      <a href="#" className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <div className="text-sm font-medium">Gum Disease Treatment</div>
                        <p className="text-xs text-muted-foreground">Advanced periodontal care</p>
                      </a>
                      <a href="#" className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <div className="text-sm font-medium">Digital X-Ray & OPG</div>
                        <p className="text-xs text-muted-foreground">Advanced diagnostics</p>
                      </a>
                      <a href="#" className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <div className="text-sm font-medium">24/7 Emergency Care</div>
                        <p className="text-xs text-muted-foreground">Urgent dental support</p>
                      </a>
                    </div>
                  </div>
                  <Link href="/services" className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer border-t border-border mt-3 pt-3">
                    <div className="text-sm font-medium">View All Services</div>
                    <p className="text-xs text-muted-foreground">Explore our complete range of dental treatments</p>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 cursor-pointer">
                  About Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/doctors" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 cursor-pointer">
                  Our Doctors
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/faq" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 cursor-pointer">
                  FAQ
                </Link>
              </NavigationMenuItem>
              {["Blog / News"].map((item) => (
                <NavigationMenuItem key={item}>
                  <Link href="#" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 cursor-pointer">
                    {item}
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Link href="/contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 cursor-pointer">
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* 3. CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" asChild className="text-foreground hover:bg-accent hover:text-primary">
            <a href="tel:+971585828257">
              <Phone className="mr-2 h-4 w-4" />
              Call
            </a>
          </Button>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg shadow-primary/20">
            <a href="https://wa.me/971585828257" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              Book Now
            </a>
          </Button>
        </div>

        {/* Mobile CTA Button */}
        <div className="md:hidden">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            <a href="https://wa.me/971585828257" target="_blank" rel="noopener noreferrer">
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium cursor-pointer" onClick={() => setIsOpen(false)}>Home</Link>
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-medium text-muted-foreground">Services</span>
                  {services.map(s => (
                    <a key={s} href="#" className="pl-4 text-sm py-1 hover:text-primary transition-colors">{s}</a>
                  ))}
                </div>
                <Link href="/about" className="text-lg font-medium cursor-pointer">About Us</Link>
                <Link href="/doctors" className="text-lg font-medium cursor-pointer">Our Doctors</Link>
                <a href="#" className="text-lg font-medium">Blog / News</a>
                <Link href="/faq" className="text-lg font-medium cursor-pointer">FAQ</Link>
                <Link href="/contact" className="text-lg font-medium cursor-pointer">Contact Us</Link>
                <div className="mt-4 flex flex-col gap-4">
                  <Button asChild className="w-full bg-primary">
                    <a href="https://wa.me/971585828257">Book Now</a>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <a href="tel:+971585828257">Call Now</a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
