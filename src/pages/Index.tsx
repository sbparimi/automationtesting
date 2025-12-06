import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofBanner } from "@/components/SocialProofBanner";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { SkillsSection } from "@/components/SkillsSection";
import { FrameworksSection } from "@/components/FrameworksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { MoneyBackGuarantee } from "@/components/MoneyBackGuarantee";
import { PricingSection } from "@/components/PricingSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { SubscribeModal } from "@/components/SubscribeModal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SubscribeModal />
      <Navigation />
      <HeroSection />
      <SocialProofBanner />
      <FeaturesGrid />
      <SkillsSection />
      <TestimonialsSection />
      <MoneyBackGuarantee />
      <PricingSection />
      <FrameworksSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
