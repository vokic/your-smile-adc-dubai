import { useState } from "react";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, Clock, Star } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EmergencyConfirmModal } from "@/components/EmergencyConfirmModal";

export function Footer() {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const emergencyNumber = "+971523301356";

  const handleEmergencyClick = () => {
    setShowEmergencyModal(true);
  };

  const handleConfirmEmergency = () => {
    setShowEmergencyModal(false);
    window.location.href = `tel:${emergencyNumber}`;
  };
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* 1. Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Your Smile</h3>
            <div className="flex items-start gap-3 text-sm opacity-90">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <p>HDS Business Centre, Jumeirah Lake Towers, Dubai, UAE</p>
            </div>
            <div className="flex items-center gap-3 text-sm opacity-90">
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p><a href="tel:+971588282432" className="hover:text-primary transition-colors">+971 58 828 2432</a></p>
                <button
                  onClick={handleEmergencyClick}
                  className="text-xs text-red-400 mt-1 hover:text-red-300 transition-colors font-semibold underline cursor-pointer"
                  data-testid="button-footer-emergency"
                >
                  Emergency: +971 52 330 1356
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm opacity-90">
              <Mail className="h-5 w-5 shrink-0 text-primary" />
              <a href="mailto:info@yoursmileadcdubai.com" className="hover:text-primary transition-colors">info@yoursmileadcdubai.com</a>
            </div>
          </div>

          {/* 2. Working Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Opening Hours</h4>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Monday – Friday</span>
                <span>9 AM – 9 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Saturday</span>
                <span>9 AM – 6 PM</span>
              </div>
              <div className="flex justify-between text-primary font-medium">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* 3. Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/about" className="hover:text-primary transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors cursor-pointer">Services</Link></li>
              <li><Link href="/doctors" className="hover:text-primary transition-colors cursor-pointer">Our Doctors</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors cursor-pointer">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors cursor-pointer">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors cursor-pointer">Contact Us</Link></li>
            </ul>
          </div>

          {/* 4, 5, 6. Socials, Reviews, Newsletter */}
          <div className="space-y-6">
            <div className="space-y-4">
               <h4 className="text-lg font-bold">Stay Connected</h4>
               <div className="flex gap-4">
                 <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                 <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                 <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                 <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
               </div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="flex items-center gap-1 text-yellow-400 mb-2">
                <Star className="fill-current h-4 w-4" />
                <Star className="fill-current h-4 w-4" />
                <Star className="fill-current h-4 w-4" />
                <Star className="fill-current h-4 w-4" />
                <Star className="fill-current h-4 w-4" />
              </div>
              <p className="text-xs opacity-80">"Best dental experience in Dubai!" - Google Reviews</p>
            </div>

            <div className="space-y-2">
              <h5 className="text-sm font-medium">Subscribe for dental tips & offers</h5>
              <div className="flex gap-2">
                <Input placeholder="Email address" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full" />
                <Button size="icon" className="bg-primary hover:bg-primary/90 rounded-full"><Mail className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} Your Smile Advanced Dental Center. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Emergency Confirmation Modal */}
      <EmergencyConfirmModal
        isOpen={showEmergencyModal}
        onClose={() => setShowEmergencyModal(false)}
        onConfirm={handleConfirmEmergency}
        phoneNumber={emergencyNumber}
      />
    </footer>
  );
}
