import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { JourneySection } from "@/components/JourneySection";
import { PricingSection } from "@/components/PricingSection";
import { SkillsSection } from "@/components/SkillsSection";
import { FrameworksSection } from "@/components/FrameworksSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { SubscribeModal } from "@/components/SubscribeModal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SubscribeModal />
      <Navigation />
      <HeroSection />
      <JourneySection />
      <PricingSection />
      <SkillsSection />
      <FrameworksSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
