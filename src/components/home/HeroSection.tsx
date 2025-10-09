import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-bakery-line.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Keeping Bakery Production Lines Running -{" "}
              <span className="text-secondary">Reliably, Every Day</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              18+ years of specialist mechanical engineering for pita, naan, and
              flatbread manufacturers across the UK
            </p>
            
            <p className="text-base md:text-lg">
              From emergency breakdowns to preventive maintenance programs, we help
              industrial bakeries minimize downtime, maintain compliance, and extend
              equipment life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/contact">Request Service Call</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Clock className="h-8 w-8 text-secondary flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">18+ Years</div>
                  <div className="text-xs text-muted-foreground">Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Shield className="h-8 w-8 text-secondary flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">BRC & HACCP</div>
                  <div className="text-xs text-muted-foreground">Documentation</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Wrench className="h-8 w-8 text-secondary flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">Emergency</div>
                  <div className="text-xs text-muted-foreground">Response Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Industrial bakery production line with conveyor system"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative Badge */}
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground px-6 py-4 rounded-lg shadow-lg">
              <div className="font-bold text-2xl">18+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
