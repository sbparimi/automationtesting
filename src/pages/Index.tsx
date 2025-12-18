import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofBanner } from "@/components/SocialProofBanner";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { SkillsSection } from "@/components/SkillsSection";
import { FrameworksSection } from "@/components/FrameworksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SocialProofBanner />
      <FeaturesGrid />
      <SkillsSection />
      <TestimonialsSection />
      <FrameworksSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
