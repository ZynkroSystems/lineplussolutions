import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";

const templates = [
  {
    title: "PPM Template Bundle",
    description: "Complete preventive maintenance scheduling system with inspection checklists, frequency planners, and tracking logs",
    price: "£59"
  },
  {
    title: "Maintenance Log & Checklist Set",
    description: "Daily, weekly, and monthly maintenance documentation with space for observations, parts used, and technician notes",
    price: "£39"
  },
  {
    title: "Audit Documentation Kit",
    description: "BRC and HACCP-ready maintenance records, calibration logs, and inspection reports",
    price: "£49"
  }
];

const ResourcesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Maintenance Templates —{" "}
            <span className="text-secondary">Built from Real Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Downloadable tools and documentation systems designed from 18 years of
            hands-on bakery maintenance work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {templates.map((template, index) => (
            <Card key={index} className="hover-lift bg-card border-border flex flex-col">
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/20">
                  <FileText className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl mb-2">{template.title}</CardTitle>
                <CardDescription className="text-base flex-grow">
                  {template.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary">{template.price}</div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/resources">
                    <Download className="h-4 w-4 mr-2" />
                    View Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <Button asChild size="lg">
            <Link to="/resources">Browse All Templates</Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            All templates are Excel-based, fully customizable, and ready to implement immediately
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
