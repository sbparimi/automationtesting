import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
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
      <SkillsSection />
      <FrameworksSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
