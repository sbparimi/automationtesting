import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofBanner } from "@/components/SocialProofBanner";
import { NetflixCourseCarousel } from "@/components/NetflixCourseCarousel";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { TestimonialsSection } from "@/components/TestimonialsSection";
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
      
      {/* Netflix-Style Course Carousel */}
      <NetflixCourseCarousel />
      
      <ScrollAnimationWrapper direction="up" delay={0.1}>
        <FeaturesGrid />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper direction="right" delay={0.1}>
        <TestimonialsSection />
      </ScrollAnimationWrapper>
      
      <Footer />
    </div>
  );
};

export default Index;
