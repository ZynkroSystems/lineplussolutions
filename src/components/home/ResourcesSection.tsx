import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { FileText } from "lucide-react";

const resources = [
  {
    title: "PPM System Pack",
    description:
      "Preventive maintenance schedules, inspection checklists, and tracking logs",
  },
  {
    title: "Maintenance Log & Checklist Set",
    description:
      "Daily, weekly, and monthly logs with space for observations and parts used",
  },
  {
    title: "Audit Documentation Pack",
    description:
      "BRC and HACCP-ready maintenance records, calibration logs, and reports",
  }
];

const ResourcesSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Maintenance Resources{" "}
            <span className="text-secondary">Built from Real Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Preview the resources we are preparing for bakery production teams
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {resources.map((resource, index) => (
            <Card key={index} className="hover-lift bg-card border-border flex flex-col">
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                  <FileText className="h-7 w-7 text-accent-foreground" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription className="text-base flex-grow">
                    {resource.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-secondary">Coming Soon</div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/resources">Preview Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <Button asChild size="lg">
            <Link to="/resources">View All Resources</Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            Full downloads will be available soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
