import { MapPin, CheckCircle } from "lucide-react";

const industries = [
  "Pita bread production",
  "Naan manufacturing",
  "Arabic pita and flatbread lines",
  "Similar baked products requiring high-volume machinery"
];

const IndustriesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Supporting UK Bakeries That Produce{" "}
              <span className="text-secondary">Quality Flatbreads</span>
            </h2>
            
            <p className="text-lg">
              We work exclusively with small to medium-sized industrial bakeries
              across the United Kingdom specializing in:
            </p>

            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-base">{industry}</span>
                </li>
              ))}
            </ul>

            <p className="text-base text-muted-foreground">
              Whether you're operating a single line or running multiple production
              shifts, we understand the unique challenges of flatbread manufacturing
              and provide maintenance solutions that keep your operation moving.
            </p>
          </div>

          {/* Visual Element */}
          <div className="bg-gradient-to-br from-primary to-primary/70 rounded-lg p-8 md:p-12 text-primary-foreground">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8" />
              <h3 className="text-2xl font-bold">Service Areas</h3>
            </div>
            <p className="text-lg mb-6">
              Proudly serving industrial bakeries throughout the United Kingdom
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Emergency breakdown response</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>On-site maintenance programs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Audit support nationwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
