import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import usePageMeta from "@/hooks/use-page-meta";

const PneumaticMaintenance = () => {
  usePageMeta({
    title: "Pneumatic Maintenance for Naan & Arabic Bread Lines | Lineplus Solutions",
    description:
      "Mechanical-only pneumatic maintenance for industrial naan and Arabic bread production lines. Reduce air loss, cylinder wear, and valve failures.",
    canonical: "https://lineplus.co.uk/insights/pneumatic-maintenance",
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Pneumatic System Maintenance for Naan & Arabic Bread Lines",
    description:
      "Mechanical-only pneumatic maintenance for industrial naan and Arabic bread production lines. Reduce air loss, cylinder wear, and valve failures.",
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
              Pneumatic System Maintenance for Naan & Arabic Bread Lines
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Mechanical-only pneumatic upkeep that keeps naan and Arabic bread lines
              consistent and compliant.
            </p>
          </div>
        </section>

        <article className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">
            <p>
              Pneumatics power critical mechanical functions on pitta, naan, and Arabic
              bread lines: divider gates, cutter actuators, transfer pushers, and
              packaging assists. When air systems are ignored, even a small leak can
              become a production-stopping fault.
            </p>
            <p>
              Air issues rarely fail in isolation. A slow cylinder creates timing drift,
              which leads to jammed transfers, which then triggers unplanned shutdowns.
              Mechanical-only maintenance prevents these small losses from stacking up.
            </p>
            <p>
              Lineplus Solutions provides mechanical-only pneumatic maintenance based on
              20+ years working inside high-volume flatbread bakeries. The goal is simple:
              keep air-driven systems reliable and audit-ready.
            </p>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">Why Pneumatics Fail on Flatbread Lines</h2>
              <p>
                High heat, flour dust, and long production runs degrade seals and
                accelerate wear. Without structured maintenance, air loss increases,
                cylinders slow down, and timing drift disrupts product flow.
              </p>
              <p>
                We also see pressure instability when compressors are overworked by leaks,
                leading to inconsistent actuation during peak output.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-bold">1. Air Preparation and Filtration</h3>
              <p>
                Moisture and contaminants shorten valve and cylinder life. We inspect
                filter/regulator units, drain intervals, and line conditioning to keep
                air supply stable and dry.
              </p>
              <p>
                Clean, dry air reduces sticky valves and prevents internal corrosion,
                which is a common cause of unpredictable stops.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-bold">2. Valve and Cylinder Wear Points</h3>
              <p>
                Sticky valves and slow cylinders create mis-timed transfers and uneven
                cutting. We check response time, end-of-stroke cushioning, and seal
                condition to maintain consistent mechanical performance.
              </p>
              <p>
                We also verify mounting alignment to reduce side-loading, which is a
                frequent cause of premature seal failure.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-bold">3. Leak Detection and Downtime Prevention</h3>
              <p>
                Micro-leaks are expensive. We conduct mechanical inspections of fittings,
                hoses, and manifolds to reduce compressor load and keep pneumatic pressure
                consistent during peak production.
              </p>
              <p>
                Stable pressure means stable timing, which means fewer jams and more
                predictable shift output.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-bold">4. BRC/HACCP Mechanical Traceability</h3>
              <p>
                Auditors want proof. Our mechanical service logs record inspections,
                parts replaced, and corrective actions so your pneumatic system is always
                BRC/HACCP-ready.
              </p>
              <p>
                Traceability includes pressure checks, filter changes, and valve or
                cylinder replacements for full audit confidence.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">Conclusion</h2>
              <p>
                Pneumatic stability protects line speed, product quality, and audit
                compliance. With 20+ years on pitta and Arabic bread lines, we keep your
                air-driven mechanical systems reliable and predictable.
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

export default PneumaticMaintenance;
