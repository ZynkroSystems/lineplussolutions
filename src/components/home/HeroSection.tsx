import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Wrench } from "lucide-react";
import heroImage from "@/assets/hero_pitta_oven.png";
import QuickContactCard from "@/components/home/QuickContactCard";

const HeroSection = () => {
  return (
    <section className="relative pt-0 md:pt-10 pb-6 md:pb-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Content */}
          <div className="space-y-5 md:space-y-6 lg:col-span-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Industrial Pitta Bakery Engineer for{" "}
              <span className="text-secondary">Flatbread line maintenance</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              20+ years of mechanical-only support for pitta, naan, and Arabic bread
              production lines across the UK.
            </p>
            
            <p className="text-base md:text-lg">
              Naan bread production line repair and BRC-compliant bakery maintenance
              to reduce downtime, keep high-heat systems reliable, and deliver audit-ready
              mechanical documentation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/contact">Emergency Mechanical Call-out</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link to="/services">BRC Compliance Audit</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Clock className="h-8 w-8 text-secondary flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">20+ Years</div>
                  <div className="text-xs text-muted-foreground">Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Shield className="h-8 w-8 text-secondary flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">BRC & HACCP</div>
                  <div className="text-xs text-muted-foreground">Mechanical Logs</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Wrench className="h-8 w-8 text-secondary flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">Mechanical Only</div>
                  <div className="text-xs text-muted-foreground">Deep Expertise</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="space-y-4 lg:col-span-4">
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src={heroImage}
                  alt="Industrial pitta oven mechanical repair and conveyor system"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              {/* Decorative Badge */}
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground px-6 py-4 rounded-lg shadow-lg">
                <div className="font-bold text-2xl">20+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
            <div className="-mt-6 lg:-mt-10">
              <QuickContactCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
