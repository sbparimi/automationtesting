import { HeroSection } from "@/components/HeroSection";
import { FrameworksSection } from "@/components/FrameworksSection";
import { BusinessValueSection } from "@/components/BusinessValueSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FrameworksSection />
      <BusinessValueSection />
      <Footer />
    </div>
  );
};

export default Index;
