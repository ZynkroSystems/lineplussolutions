import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import engineerImage from "@/assets/mechanic_fixing_motor.png";

const AboutPreview = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src={engineerImage}
                alt="Mechanical engineer inspecting industrial pitta line equipment"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Built on Experience, <span className="text-secondary">Trusted for Results</span>
            </h2>
            
            <div className="space-y-4 text-base md:text-lg">
              <p>
                Lineplus Solutions Ltd is led by a mechanical engineer with 20+ years
                inside pitta, naan, and Arabic bread production facilities not behind a
                desk, but on the factory floor.
              </p>
              
              <p>
                We are a flatbread machinery specialist for the equipment that produces
                pitta bread, naan, and Arabic flatbread: tunnel ovens, dough dividers,
                cooling conveyors, provers, stackers, and packaging lines.
              </p>
              
              <p>
                Our approach is simple: understand how each machine works, anticipate
                where failures happen, and build maintenance systems that prevent
                problems before they stop production.
              </p>
              
              <p>
                Whether you're running a single production line or managing multiple
                shifts, we provide the hands-on engineering support and audit-ready
                documentation your bakery needs to stay productive and compliant.
              </p>
            </div>

            <Button asChild size="lg" variant="outline">
              <Link to="/about">Learn More About Our Experience</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
