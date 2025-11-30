interface ServiceItem {
  title: string;
  desc: string;
}

interface ServiceGridProps {
  title?: string;
  services: ServiceItem[];
  columns?: "1" | "2" | "3";
  bgColor?: "bg-background" | "bg-muted/30" | "bg-secondary text-white";
}

export function ServiceGrid({
  title,
  services,
  columns = "2",
  bgColor = "bg-muted/30",
}: ServiceGridProps) {
  const gridCols = {
    "1": "grid-cols-1",
    "2": "md:grid-cols-2",
    "3": "lg:grid-cols-3",
  };

  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
              {title}
            </h2>
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all space-y-3"
              data-testid={`card-service-${index}`}
            >
              <h3 className="text-lg font-bold text-secondary">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
