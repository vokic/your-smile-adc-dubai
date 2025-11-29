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
                <Link href="/services" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 cursor-pointer">
                  Services
                </Link>
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
