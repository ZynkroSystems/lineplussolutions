import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Wrench, Calendar, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Mechanical Breakdown Repair",
    description:
      "Rapid mechanical diagnosis and repair for pitta/Arabic bread lines, including bearings, belts, seals, chains, and drive systems.",
    link: "/services#breakdown"
  },
  {
    icon: Calendar,
    title: "Pneumatic & High-Heat Maintenance",
    description:
      "Pneumatic system maintenance, high-temperature chain lubrication, and reliability checks tailored to tunnel ovens and conveyors.",
    link: "/services#ppm"
  },
  {
    icon: ClipboardCheck,
    title: "BRC/HACCP Audit Support",
    description:
      "Audit-ready mechanical traceability logs, inspection sheets, and compliance documentation to support BRC and HACCP requirements.",
    link: "/services#audit"
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Arabic Bread Line Maintenance{" "}
            <span className="text-secondary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mechanical-only support for pitta and naan bread production lines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-lift bg-card border-border">
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Icon className="h-7 w-7 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardFooter>
                  <Link 
                    to={service.link}
                    className="text-secondary hover:text-secondary/80 font-medium text-sm inline-flex items-center gap-1"
                  >
                    Read More →
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/services">View All Services in Detail</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
