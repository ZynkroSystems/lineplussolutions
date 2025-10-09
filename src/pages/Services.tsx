import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Calendar, ClipboardCheck, Users, CheckCircle } from "lucide-react";
import maintenanceImage from "@/assets/maintenance-closeup.jpg";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive Maintenance Support{" "}
              <span className="text-accent">for Bakery Production Lines</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Expert engineering services designed to keep your machinery running reliably
            </p>
          </div>
        </section>

        {/* Service 1: Breakdown Repair */}
        <section id="breakdown" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex p-4 rounded-lg bg-secondary/10">
                  <Wrench className="h-10 w-10 text-secondary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Breakdown Repair & Fault Diagnosis
                </h2>
                <p className="text-lg">
                  When production stops, speed and accuracy matter. We provide rapid
                  response breakdown services for all major bakery equipment.
                </p>

                <div>
                  <h3 className="text-xl font-bold mb-4">What We Do:</h3>
                  <ul className="space-y-3">
                    {[
                      "Emergency fault diagnosis on-site",
                      "Mechanical component replacement (bearings, belts, chains, seals)",
                      "Pneumatic system repairs (valves, cylinders, air lines)",
                      "Electrical troubleshooting and control panel diagnostics",
                      "Post-repair testing and documentation"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg border border-border">
                  <h4 className="font-bold mb-2">Equipment Covered:</h4>
                  <p>
                    Tunnel ovens, cooling conveyors, dough dividers, metal detectors,
                    proofers, mixers, packaging systems, and supporting equipment
                  </p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border border-accent/30">
                  <h4 className="font-bold mb-2">Response Times:</h4>
                  <p>
                    Emergency callouts available for critical production failures. We
                    communicate realistic timelines and keep you updated throughout the
                    repair process.
                  </p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={maintenanceImage}
                  alt="Maintenance and repair work"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: PPM */}
        <section id="ppm" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
                <img
                  src={maintenanceImage}
                  alt="Preventive maintenance program"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex p-4 rounded-lg bg-secondary/10">
                  <Calendar className="h-10 w-10 text-secondary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Preventive Maintenance Programs (PPM)
                </h2>
                <p className="text-lg">
                  Structured maintenance schedules designed to reduce unexpected failures
                  and extend equipment lifespan.
                </p>

                <div>
                  <h3 className="text-xl font-bold mb-4">What We Deliver:</h3>
                  <ul className="space-y-3">
                    {[
                      "Custom PPM schedules based on your equipment and production demands",
                      "Regular inspection routines (daily, weekly, monthly cycles)",
                      "Lubrication and calibration procedures",
                      "Wear component tracking and replacement planning",
                      "Performance monitoring and reliability data tracking",
                      "Complete maintenance logs and documentation"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-secondary/10 p-6 rounded-lg">
                  <h4 className="font-bold mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    <li>• Fewer unexpected breakdowns</li>
                    <li>• Extended machinery lifespan</li>
                    <li>• Improved production efficiency</li>
                    <li>• Audit-ready maintenance records</li>
                    <li>• Reduced long-term maintenance costs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: Audit Support */}
        <section id="audit" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex p-4 rounded-lg bg-secondary/10">
                  <ClipboardCheck className="h-10 w-10 text-secondary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Audit Support & Compliance Documentation
                </h2>
                <p className="text-lg">
                  BRC, HACCP, and ISO audits require complete, traceable maintenance
                  records. We provide all documentation you need to demonstrate compliance.
                </p>

                <div>
                  <h3 className="text-xl font-bold mb-4">What We Provide:</h3>
                  <ul className="space-y-3">
                    {[
                      "Maintenance logs and inspection sheets",
                      "Calibration records and certificates",
                      "Equipment cleaning and sanitation schedules",
                      "Spare parts traceability logs",
                      "Breakdown reports and corrective action records",
                      "QA checklists and verification documents"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-lg font-medium">
                  All documentation is organized, dated, and audit-ready.
                </p>
              </div>

              <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Pass Your Audits with Confidence</h3>
                <p className="mb-6 text-lg opacity-90">
                  Complete traceability from preventive maintenance to breakdown repairs
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    <span>BRC-compliant maintenance records</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    <span>HACCP equipment documentation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    <span>ISO maintenance standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 4: Consultancy */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex p-4 rounded-lg bg-secondary/10">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Maintenance Consultancy & System Setup
              </h2>
              <p className="text-lg">
                Setting up a new bakery or improving existing maintenance practices? We
                help you build reliable systems from the start.
              </p>

              <div className="grid md:grid-cols-2 gap-6 pt-8">
                {[
                  "Equipment assessment and condition surveys",
                  "Maintenance program design and implementation",
                  "Staff training on basic maintenance procedures",
                  "Spare parts inventory planning",
                  "Maintenance software/system recommendations",
                  "Continuous improvement planning"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-6 bg-card rounded-lg border border-border text-left"
                  >
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg pt-6">
                Ideal for new bakeries establishing maintenance protocols or existing
                facilities looking to formalize their approach.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Improve Your Maintenance Program?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to discuss your bakery's specific needs and find the right
              maintenance solution
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
