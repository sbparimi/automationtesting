import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { FrameworksSection } from "@/components/FrameworksSection";
import { BlogSection } from "@/components/BlogSection";
import { BusinessValueSection } from "@/components/BusinessValueSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <FrameworksSection />
      <BlogSection />
      <BusinessValueSection />
      <Footer />
    </div>
  );
};

export default Index;
