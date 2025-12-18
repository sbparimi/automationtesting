import { Navigation } from "@/components/Navigation";
import { NetflixHero } from "@/components/NetflixHero";
import { NetflixCourseCarousel } from "@/components/NetflixCourseCarousel";
import { SocialProofBanner } from "@/components/SocialProofBanner";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Netflix-Style Hero with Rotating Courses */}
      <NetflixHero />
      
      {/* Course Carousel - Right After Hero */}
      <NetflixCourseCarousel />
      
      <ScrollAnimationWrapper direction="up" delay={0.1}>
        <SocialProofBanner />
      </ScrollAnimationWrapper>
      
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
