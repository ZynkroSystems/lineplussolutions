import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesOverview from "@/components/home/ServicesOverview";
import EquipmentSection from "@/components/home/EquipmentSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutPreview />
        <ServicesOverview />
        <EquipmentSection />
        <IndustriesSection />
        <ResourcesSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
