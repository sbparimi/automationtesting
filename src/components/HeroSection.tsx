import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, TestTube, Code, Phone, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center animate-fade-in pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-foreground tracking-tight leading-none">
            Suresh Parimi
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-foreground">
            Playwright Framework Architect
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed font-normal">
            18+ years in automation governance, test management, and driving transformations in software testing. 
            Specialized in enterprise-grade Playwright frameworks with AI capabilities.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-base">+31616270233</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-base">suresh.parimi@example.com</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-full text-base font-medium transition-all duration-200 hover:shadow-lg"
              onClick={() => document.getElementById('frameworks')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Frameworks
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-3 rounded-full text-base font-medium transition-all duration-200"
              onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Playwright Tips
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">18+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">5+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Framework Types</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">10</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Happy Customers</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce mt-8">
            <ArrowDown className="w-5 h-5 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};