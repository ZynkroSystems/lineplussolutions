import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { FileText, CheckCircle } from "lucide-react";

const resources = [
  {
    title: "Complete PPM System Pack",
    description: "Comprehensive preventive maintenance system preview including:",
    features: [
      "Equipment-specific inspection checklists (ovens, conveyors, dividers, proofers)",
      "Daily, weekly, monthly, quarterly maintenance schedules",
      "Lubrication tracking sheets",
      "Calibration logs",
      "Maintenance frequency planners",
      "Performance tracking templates"
    ],
    note: "Perfect for bakeries establishing or formalizing PPM programs."
  },
  {
    title: "Maintenance Log & Checklist Bundle",
    description: "Complete documentation system preview with:",
    features: [
      "Daily maintenance logs",
      "Weekly inspection checklists",
      "Monthly deep-clean schedules",
      "Technician observation notes templates",
      "Parts usage tracking",
      "Work order forms"
    ],
    note: "Keep detailed records of every maintenance task performed."
  },
  {
    title: "Breakdown Report & Analysis Pack",
    description: "Professional breakdown documentation preview including:",
    features: [
      "Fault diagnosis forms",
      "Root cause analysis worksheets",
      "Corrective action tracking",
      "Downtime cost calculation",
      "Parts replacement logs"
    ],
    note: "Essential for continuous improvement and audit trails."
  },
  {
    title: "Spare Parts Inventory Tracker",
    description: "Organize and manage critical spares with:",
    features: [
      "Parts catalog templates",
      "Stock level monitoring",
      "Reorder point alerts",
      "Supplier contact database",
      "Parts usage history",
      "Cost tracking"
    ],
    note: "Never run out of critical components during a breakdown."
  },
  {
    title: "Audit-Ready Documentation Kit",
    description: "Complete compliance package preview including:",
    features: [
      "BRC maintenance documentation templates",
      "HACCP equipment logs",
      "Calibration certificates and schedules",
      "Cleaning and sanitation records",
      "Traceability documentation",
      "Monthly compliance checklists"
    ],
    note: "Everything you need for successful audits."
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-16 md:pt-20 pb-10 md:pb-12 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Maintenance Resources{" "}
              <span className="text-accent">Preview Library</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              A preview of documentation systems built from 20+ years of real bakery
              maintenance experience
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
            <p className="text-lg">
              Every template and tool in this collection has been developed through years
              of hands-on work maintaining industrial bakery equipment. These aren't
              generic checklists - they're proven systems designed specifically for pitta,
              naan, and flatbread production lines.
            </p>
            <p className="text-lg text-muted-foreground">
              These resources are in final preparation and will be available soon.
            </p>

            <div className="grid md:grid-cols-4 gap-4 pt-6">
              <div className="flex items-center gap-2 justify-center p-4 bg-card rounded-lg border border-border">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium">Excel-based</span>
              </div>
              <div className="flex items-center gap-2 justify-center p-4 bg-card rounded-lg border border-border">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium">Fully customizable</span>
              </div>
              <div className="flex items-center gap-2 justify-center p-4 bg-card rounded-lg border border-border">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium">Ready to implement</span>
              </div>
              <div className="flex items-center gap-2 justify-center p-4 bg-card rounded-lg border border-border">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium">Compliance-ready</span>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {resources.map((resource, index) => (
                <Card key={index} className="hover-lift flex flex-col">
                  <CardHeader className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                      <FileText className="h-7 w-7 text-secondary" />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">{resource.title}</CardTitle>
                      <div className="text-sm font-semibold uppercase tracking-wide text-secondary">
                        Coming Soon
                      </div>
                    </div>
                    <CardDescription className="text-base mb-4">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {resource.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4 italic">
                      {resource.note}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" size="lg" variant="outline" disabled>
                      Coming Soon
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Support Note */}
            <div className="text-center mt-12 p-6 bg-accent/10 rounded-lg border border-accent/30 max-w-3xl mx-auto">
              <p className="text-lg">
                <strong>Need Help?</strong> Email us for early access or questions about
                implementation
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
