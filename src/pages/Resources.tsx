import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { FileText, Download, CheckCircle } from "lucide-react";

const templates = [
  {
    title: "Complete PPM Template Pack",
    price: "£59",
    description: "Comprehensive preventive maintenance system including:",
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
    price: "£39",
    description: "Complete documentation system with:",
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
    title: "Breakdown Report & Analysis Template",
    price: "£19",
    description: "Professional breakdown documentation including:",
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
    price: "£24",
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
    price: "£49",
    description: "Complete compliance package including:",
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
        <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Maintenance Templates &{" "}
              <span className="text-accent">Documentation Tools</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Ready-to-use systems built from 18 years of real bakery maintenance
              experience
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
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {templates.map((template, index) => (
                <Card key={index} className="hover-lift flex flex-col">
                  <CardHeader>
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-secondary/10">
                      <FileText className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{template.title}</CardTitle>
                    <div className="text-4xl font-bold text-secondary mb-4">
                      {template.price}
                    </div>
                    <CardDescription className="text-base mb-4">
                      {template.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {template.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4 italic">
                      {template.note}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" size="lg">
                      <Download className="h-4 w-4 mr-2" />
                      Purchase & Download
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Bundle Offer */}
            <div className="bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground p-8 md:p-12 rounded-lg text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Maintenance System Bundle
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Get all 5 template packs for just £149
              </p>
              <p className="text-2xl font-bold mb-6">Save £31</p>
              <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90">
                <Download className="h-5 w-5 mr-2" />
                Get the Complete Bundle
              </Button>
            </div>

            {/* Support Note */}
            <div className="text-center mt-12 p-6 bg-accent/10 rounded-lg border border-accent/30 max-w-3xl mx-auto">
              <p className="text-lg">
                <strong>Need Help?</strong> All purchases include free email support for
                template implementation questions
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
