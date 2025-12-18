import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofBanner } from "@/components/SocialProofBanner";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { SkillsSection } from "@/components/SkillsSection";
import { FrameworksSection } from "@/components/FrameworksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      
      <ScrollAnimationWrapper direction="up" delay={0.1}>
        <SocialProofBanner />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper direction="up" delay={0.1}>
        <FeaturesGrid />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper direction="left" delay={0.1}>
        <SkillsSection />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper direction="right" delay={0.1}>
        <TestimonialsSection />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper direction="up" delay={0.1}>
        <FrameworksSection />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper direction="up" delay={0.1}>
        <BlogSection />
      </ScrollAnimationWrapper>
      
      <Footer />
    </div>
  );
};

export default Index;
