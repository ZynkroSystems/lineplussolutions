import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import usePageMeta from "@/hooks/use-page-meta";

const StackerTimingControl = () => {
  usePageMeta({
    title: "Pitta Stacker Timing & Transfer Guide | Lineplus Solutions",
    description:
      "Mechanical-only guidance for automated stacking system timing and transfer points on industrial pitta production lines.",
    canonical: "https://lineplus.co.uk/insights/stacker-timing-control",
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Automated Stacking System Timing for Pitta Lines",
    description:
      "Mechanical-only guidance for automated stacking system timing and transfer points on industrial pitta production lines.",
    author: {
      "@type": "Organization",
      name: "Lineplus Solutions Ltd",
    },
    publisher: {
      "@type": "Organization",
      name: "Lineplus Solutions Ltd",
    },
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="pt-16 md:pt-20 pb-10 md:pb-12 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Automated Stacking System Timing for Pitta Lines
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Mechanical-only timing and transfer checks that keep pitta stackers stable
              and reduce stoppages.
            </p>
          </div>
        </section>

        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">
            <p>
              Automated stackers keep output consistent on high-volume pitta lines. When
              timing slips, stacks collapse, product backs up, and downtime follows.
            </p>
            <p>
              These issues often start as minor mechanical timing drift, but quickly
              become line-wide disruptions if left unchecked.
            </p>
            <p>
              With 20+ years of mechanical-only support for flatbread lines, we focus on
              timing, transfer points, and drive wear that most often cause stacker
              stoppages.
            </p>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">Why Stacker Timing Drifts</h2>
              <p>
                Mechanical wear, chain slack, and uneven drives change transfer timing.
                Small delays create product jams and damage during peak production.
              </p>
              <p>
                Timing drift also increases waste as stacks become unstable or
                misaligned at the handover point.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-bold">1. Transfer Point Alignment</h3>
              <p>
                We inspect mechanical guides, stop positions, and alignment at transfer
                points to keep stacks clean and consistent.
              </p>
              <p>
                Stable transfer points reduce collisions and protect the mechanical
                frame from repeated impact.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-bold">2. Drive Chain and Sprocket Wear</h3>
              <p>
                Wear in chains and sprockets creates timing lag. We measure wear and
                document tolerances so replacements can be planned ahead of failure.
              </p>
              <p>
                Planned replacement avoids emergency call-outs and keeps shift output
                on schedule.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-bold">3. Timing Checks During PPM</h3>
              <p>
                During PPM visits, we validate mechanical timing against line speed,
                identify drift, and reset the system before breakdowns occur.
              </p>
              <p>
                This keeps stacker performance aligned with upstream oven and conveyor
                rates.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-bold">4. Audit-Ready Mechanical Logs</h3>
              <p>
                Stacker systems are inspected during BRC/HACCP audits. We provide traceable
                mechanical logs to demonstrate preventative maintenance and corrective
                actions.
              </p>
              <p>
                Clear records of timing checks and component changes remove doubt during
                audit reviews.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">Conclusion</h2>
              <p>
                Stable stacking protects throughput and reduces waste. With 20+ years of
                mechanical-only experience, we keep pitta stackers aligned, reliable, and
                audit-ready.
              </p>
            </section>

            <div className="pt-6">
              <Link to="/contact" className="text-secondary font-semibold">
                Need expert mechanical support for your pitta line? Contact Lineplus Solutions Today.
              </Link>
            </div>
          </div>
        </article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </main>
      <Footer />
    </div>
  );
};

export default StackerTimingControl;
