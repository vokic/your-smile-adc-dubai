import { Award, Users, Clock, CheckCircle, Shield, Trophy } from "lucide-react";

interface Badge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TrustBadgesProps {
  badges?: Badge[];
  title?: string;
  bgColor?: string;
}

export function TrustBadges({ title = "Why Patients Choose Us", bgColor = "bg-background", badges }: TrustBadgesProps) {
  const defaultBadges: Badge[] = [
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Award-Winning Clinic",
      description: "Recognized for excellence in cosmetic & restorative dentistry in Dubai"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "500+ Happy Patients",
      description: "Trusted by hundreds of satisfied patients across Dubai & UAE"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "15+ Years Experience",
      description: "Established track record of successful treatments and transformations"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "International Standards",
      description: "ISO certified, using FDA-approved materials and latest technology"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Board-Certified Dentists",
      description: "Our doctors hold degrees from prestigious international institutions"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "★5.0 Google Rating",
      description: "Consistently rated 5-stars by our verified patients"
    },
  ];

  const displayBadges = badges || defaultBadges;

  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-16 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayBadges.map((badge, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {badge.icon}
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">{badge.title}</h3>
              <p className="text-muted-foreground text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
