import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import engineerImage from "@/assets/mechanic_fixing_motor.png";

const About = () => {
  const highlights = [
    "20+ years mechanical engineering in bakery production",
    "Specialist knowledge: pitta, naan, flatbread machinery",
    "BRC, HACCP, ISO documentation expertise",
    "Emergency breakdown response experience",
    "PPM program development and implementation"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-16 md:pt-20 pb-10 md:pb-12 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              20+ Years on the Factory Floor {" "}
              <span className="text-accent">Not Behind a Desk</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Real experience maintaining the equipment that produces pitta, naan, and flatbread
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 text-lg">
                <p>
                  Lineplus Solutions Ltd was founded on a simple principle: bakery machinery
                  needs engineers who truly understand how production lines work - not just
                  in theory, but through years of hands-on experience.
                </p>

                <p>
                  For over 20+ years, I've worked inside bakery production facilities
                  maintaining the equipment that produces pitta bread, naan, and Arabic flatbread.
                  I've diagnosed thousands of breakdowns, optimized hundreds
                  of maintenance schedules, and helped bakery teams prepare for countless
                  audits.
                </p>

                <h2 className="text-2xl font-bold text-secondary pt-4">What I've Learned</h2>

                <p>
                  Every production line has its weak points - the bearings that fail first,
                  the belts that slip under load, the sensors that drift out of calibration.
                  Effective maintenance isn't about fixing things when they break. It's about
                  understanding where failures happen and building systems that prevent them.
                </p>

                <p>Industrial bakeries face unique challenges:</p>
                <ul className="space-y-2 pl-6">
                  <li>• High-temperature environments that stress components</li>
                  <li>• Continuous operation across multiple shifts</li>
                  <li>• Strict hygiene and compliance requirements</li>
                  <li>• Pressure to maintain consistent product quality</li>
                  <li>• Limited tolerance for unexpected downtime</li>
                </ul>

                <p>
                  Lineplus Solutions exists to solve these challenges with reliable
                  engineering support, structured maintenance programs, and complete audit
                  documentation.
                </p>
              </div>

              <div className="space-y-8">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={engineerImage}
                    alt="Engineer inspecting bakery equipment"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="bg-muted/50 p-8 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold mb-6">My Approach</h3>
                  <p className="mb-6">
                    I work directly with bakery owners and production managers to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Assess current equipment condition and maintenance practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Identify high-risk failure points</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Develop preventive maintenance schedules tailored to your production demands</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Provide clear, traceable documentation for compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Respond quickly when breakdowns do occur</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Experience & <span className="text-secondary">Credentials</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-6 bg-card rounded-lg border border-border"
                >
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
