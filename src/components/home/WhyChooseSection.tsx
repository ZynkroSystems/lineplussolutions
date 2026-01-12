import { Award, FileCheck, ShieldCheck, Zap } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Deep Specialist Knowledge",
    description: "20+ years working exclusively with pitta, naan, and flatbread production equipment"
  },
  {
    icon: FileCheck,
    title: "Compliance-Ready Documentation",
    description: "Every maintenance task tracked and logged to meet BRC, HACCP, and ISO standards"
  },
  {
    icon: ShieldCheck,
    title: "Mechanical-Only Focus",
    description: "Dedicated mechanical expertise for pitta and Arabic bread lines, no electrical work"
  },
  {
    icon: Zap,
    title: "Fast, Reliable Response",
    description: "Emergency breakdown support with clear communication and realistic timelines"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Bakeries Trust{" "}
            <span className="text-secondary">Lineplus Solutions</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-secondary/10">
                  <Icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
