import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import usePageMeta from "@/hooks/use-page-meta";

const SpiralProverReliability = () => {
  usePageMeta({
    title: "Spiral Prover Reliability for Flatbread Lines | Lineplus Solutions",
    description:
      "Mechanical-only insights on spiral prover reliability for flatbread production lines, including chain tracking and lubrication.",
    canonical: "https://lineplus.co.uk/insights/spiral-prover-reliability",
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Spiral Prover Reliability for Flatbread Production",
    description:
      "Mechanical-only insights on spiral prover reliability for flatbread production lines, including chain tracking and lubrication.",
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
              Spiral Prover Reliability for Flatbread Production
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Mechanical-only guidance for keeping provers stable on pitta and Arabic
              bread lines.
            </p>
          </div>
        </section>

        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">
            <p>
              Spiral provers are critical for pitta, naan, and Arabic bread consistency.
              A small mechanical tracking issue can create uneven proof times, product
              variation, and downtime across the entire line.
            </p>
            <p>
              Because provers run continuously, small deviations compound quickly. A
              minor guide misalignment today can become a chain failure tomorrow.
            </p>
            <p>
              With 20+ years of mechanical-only maintenance on flatbread systems, we
              focus on the prover components that most often cause stoppages and audit
              failures.
            </p>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">Where Provers Lose Reliability</h2>
              <p>
                Continuous operation, flour dust, and humidity create tough conditions
                for chains, bearings, and guides. Without structured mechanical care,
                tracking drifts and causes belt damage or jammed carriers.
              </p>
              <p>
                We also see damage from uneven loading when spacing changes, which
                accelerates wear on carriers and drive components.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-bold">1. Chain Tracking and Alignment</h3>
              <p>
                We inspect guide rails, idlers, and sprockets to keep the prover chain
                centered. Minor misalignment quickly becomes major wear in high-volume
                pitta and Arabic bread lines.
              </p>
              <p>
                Tracking checks are logged so trends can be spotted before damage becomes
                visible to operators.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-bold">2. Lubrication for Long-Run Operation</h3>
              <p>
                Provers run for hours at a time. We use food-grade mechanical lubrication
                schedules that protect chains and bearings without contaminating product
                areas.
              </p>
              <p>
                Correct intervals matter. Over-lubrication attracts dust; under-lubrication
                accelerates wear and heat build-up.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-bold">3. Carrier and Drive Wear Checks</h3>
              <p>
                Carrier damage and drive wear cause uneven spacing, impacting dough
                timing. We measure wear points to plan replacement during scheduled
                shutdowns, not mid-shift.
              </p>
              <p>
                This approach keeps production predictable and avoids urgent change-outs
                during high-demand periods.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-bold">4. BRC/HACCP Mechanical Records</h3>
              <p>
                Prover maintenance must be traceable. We supply mechanical inspection
                logs, lubrication records, and corrective actions to support BRC and
                HACCP audits.
              </p>
              <p>
                Documentation includes dates, findings, and parts used so compliance
                teams can answer auditor questions quickly.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">Conclusion</h2>
              <p>
                Reliable proofing is essential for consistent pitta and naan quality.
                With 20+ years of mechanical-only expertise, we keep spiral provers
                stable, efficient, and audit-ready.
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

export default SpiralProverReliability;
