import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import usePageMeta from "@/hooks/use-page-meta";

const insights = [
  {
    slug: "/insights/oven-chain-management",
    title: "High-Heat Oven Chain Management for Pitta Production Lines",
    excerpt:
      "Master lubrication, tensioning, and wear points in high-temperature pitta tunnel ovens to prevent downtime and keep mechanical systems compliant.",
  },
  {
    slug: "/insights/pneumatic-maintenance",
    title: "Pneumatic System Maintenance for Naan & Arabic Bread Lines",
    excerpt:
      "Reduce air loss, cylinder wear, and valve failures in mechanical-only pneumatic systems powering naan and Arabic bread production lines.",
  },
  {
    slug: "/insights/spiral-prover-reliability",
    title: "Spiral Prover Reliability for Flatbread Production",
    excerpt:
      "Improve prover chain tracking, lubrication, and mechanical alignment to protect dough handling and keep flatbread lines consistent.",
  },
  {
    slug: "/insights/cooling-conveyor-alignment",
    title: "Cooling Conveyor Alignment for Pitta & Arabic Bread Lines",
    excerpt:
      "Diagnose tracking drift and bearing wear in cooling conveyors to keep pitta and Arabic bread lines moving without stoppages.",
  },
  {
    slug: "/insights/stacker-timing-control",
    title: "Automated Stacking System Timing for Pitta Lines",
    excerpt:
      "Mechanical timing, transfer points, and drive checks that keep automated stackers stable on high-volume pitta lines.",
  },
];

const Insights = () => {
  usePageMeta({
    title: "Technical Insights | Industrial Bakery Mechanical Engineering | Lineplus Solutions",
    description:
      "Expert articles on mechanical maintenance for pitta, naan, and Arabic bread production lines. Prevent downtime and ensure BRC audit readiness with our 20+ years of specialist knowledge.",
    canonical: "https://lineplus.co.uk/insights",
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="pt-16 md:pt-20 pb-10 md:pb-12 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Technical Insights: Specialist Mechanical Engineering for Pitta & Flatbread Lines
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Leverage 20+ years of mechanical-only experience. These articles focus on
              pitta, naan, and Arabic bread production lines to prevent downtime and
              support BRC/HACCP compliance.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {insights.map((insight) => (
                <Card key={insight.slug} className="hover-lift bg-card border-border">
                  <CardHeader className="space-y-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">
                        <Link to={insight.slug} className="hover:text-secondary transition-colors">
                          {insight.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-base">{insight.excerpt}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Link to={insight.slug} className="text-secondary font-medium text-sm">
                      Read Article →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
