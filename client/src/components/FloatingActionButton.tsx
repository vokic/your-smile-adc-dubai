import { useState } from "react";
import { MessageCircle, Phone, AlertCircle, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "Book Now",
      href: "https://wa.me/971585828257",
      bg: "bg-primary hover:bg-primary/90 text-white",
      textColor: "text-white",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Call Now",
      href: "tel:+971588282432",
      bg: "bg-muted hover:bg-muted/80 border-2 border-secondary/30",
      textColor: "text-secondary",
    },
    {
      icon: <AlertCircle className="h-5 w-5" />,
      label: "Emergency",
      href: "tel:+971523301356",
      bg: "bg-accent hover:bg-accent/80 border-2 border-primary/30",
      textColor: "text-primary",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Secondary Buttons */}
      <div
        className={`absolute bottom-20 right-0 flex flex-col gap-3 transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {actions.map((action, idx) => (
          <a
            key={idx}
            href={action.href}
            target={action.label === "Book Now" ? "_blank" : undefined}
            rel={action.label === "Book Now" ? "noopener noreferrer" : undefined}
            onClick={() => setIsOpen(false)}
          >
            <Button
              size="lg"
              className={`${action.bg} ${action.textColor} rounded-full shadow-lg gap-2 whitespace-nowrap`}
            >
              {action.icon}
              <span className="hidden sm:inline">{action.label}</span>
            </Button>
          </a>
        ))}
      </div>

      {/* Main Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-16 h-16 p-0 bg-primary hover:bg-primary/90 text-white shadow-2xl flex items-center justify-center"
        data-testid="button-floating-action-toggle"
      >
        {isOpen ? (
          <X className="h-7 w-7" />
        ) : (
          <Plus className="h-7 w-7" />
        )}
      </Button>
    </div>
  );
}
