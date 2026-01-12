import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import usePageMeta from "@/hooks/use-page-meta";

const CoolingConveyorAlignment = () => {
  usePageMeta({
    title: "Cooling Conveyor Alignment for Pitta Lines | Lineplus Solutions",
    description:
      "Mechanical-only guidance for cooling conveyor alignment on pitta and Arabic bread production lines to prevent tracking drift and downtime.",
    canonical: "https://lineplus.co.uk/insights/cooling-conveyor-alignment",
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cooling Conveyor Alignment for Pitta & Arabic Bread Lines",
    description:
      "Mechanical-only guidance for cooling conveyor alignment on pitta and Arabic bread production lines to prevent tracking drift and downtime.",
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
              Cooling Conveyor Alignment for Pitta & Arabic Bread Lines
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Mechanical-only steps to keep cooling conveyors stable on high-volume
              pitta and Arabic bread production lines.
            </p>
          </div>
        </section>

        <article className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">
            <p>
              Cooling conveyors protect product quality after high-heat baking. When
              mechanical alignment slips, belts drift, bearings overheat, and stoppages
              cascade across pitta and Arabic bread lines.
            </p>
            <p>
              These conveyors are often overlooked because they appear simple, but they
              handle long runs and heavy heat load. Small mechanical deviations quickly
              become product flow issues.
            </p>
            <p>
              Lineplus Solutions focuses on mechanical-only conveyor reliability with
              20+ years of experience in industrial flatbread production environments.
            </p>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">Why Conveyors Drift</h2>
              <p>
                Heat cycles, flour dust, and long-run loads wear rollers and bearings.
                Misalignment starts small but quickly causes edge wear and belt damage.
              </p>
              <p>
                Once a belt starts riding a frame edge, contamination risk and premature
                belt failure increase significantly.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-bold">1. Tracking and Alignment Checks</h3>
              <p>
                We measure roller squareness, frame level, and belt tracking points to
                keep cooling conveyors centered and stable during peak production.
              </p>
              <p>
                Consistent tracking reduces rework and keeps downstream stacking stable.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-bold">2. Bearing Health and Heat</h3>
              <p>
                Bearing temperatures rise quickly on pitta lines. We inspect bearing
                housings, seals, and lubrication intervals to prevent seized rollers.
              </p>
              <p>
                Early temperature rise is a strong indicator of lubrication or alignment
                issues that can be corrected before failure.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-bold">3. Belt Tension and Wear Points</h3>
              <p>
                Over-tensioned belts accelerate wear and strain drive systems. We set
                tension to manufacturer specs and document adjustments for traceability.
              </p>
              <p>
                Proper tension protects the drive and extends belt life, lowering total
                maintenance cost across the line.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-bold">4. BRC/HACCP Mechanical Compliance</h3>
              <p>
                Cooling conveyors are inspected during audits. We provide mechanical
                maintenance logs and inspection sheets that prove compliance and reduce
                audit risk.
              </p>
              <p>
                Logs record dates, adjustments, and component changes to keep audits
                straightforward and stress-free.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">Conclusion</h2>
              <p>
                Conveyor stability protects throughput and product quality. With 20+
                years of mechanical-only expertise, we keep cooling conveyors aligned,
                efficient, and audit-ready.
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

export default CoolingConveyorAlignment;
