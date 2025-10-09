import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Wrench, Calendar, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Breakdown & Repair",
    description: "Fast fault diagnosis and on-site repairs. We replace bearings, belts, seals, and pneumatic components to get your line running again — quickly and correctly.",
    link: "/services#breakdown"
  },
  {
    icon: Calendar,
    title: "Preventive Maintenance Programs",
    description: "Structured PPM schedules designed to reduce unexpected failures. Regular inspections, lubrication, calibration, and component replacement keep machinery reliable and efficient.",
    link: "/services#ppm"
  },
  {
    icon: ClipboardCheck,
    title: "Audit Support & Documentation",
    description: "Complete maintenance logs, inspection sheets, calibration records, and QA checklists prepared for BRC, HACCP, and ISO audits. We help you pass inspections with confidence.",
    link: "/services#audit"
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Maintenance Support for{" "}
            <span className="text-secondary">Bakery Production Lines</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-lift bg-card border-border">
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-secondary/10">
                    <Icon className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
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
