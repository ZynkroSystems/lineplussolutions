import { Cpu, Flame, Wind, CircleDot, ScanLine, Layers, Settings, Database, Package } from "lucide-react";

const equipment = [
  { icon: CircleDot, name: "Dough Dividers & Rounders" },
  { icon: Flame, name: "Tunnel Ovens" },
  { icon: Wind, name: "Cooling Conveyors" },
  { icon: Layers, name: "Proofers & Resting Systems" },
  { icon: ScanLine, name: "Metal Detectors" },
  { icon: Cpu, name: "Sorting & Inspection Tables" },
  { icon: Settings, name: "Industrial Mixers" },
  { icon: Database, name: "Air Compressors & Pneumatic Systems" },
  { icon: Package, name: "Packaging Conveyors" }
];

const EquipmentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Specialized in <span className="text-secondary">Flatbread & Pita</span>{" "}
            Production Machinery
          </h2>
          <p className="text-lg text-muted-foreground">
            We maintain the equipment that matters most to your production line
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {equipment.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border hover-lift"
              >
                <div className="mb-3 p-3 rounded-full bg-accent/20">
                  <Icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-sm font-medium">{item.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
