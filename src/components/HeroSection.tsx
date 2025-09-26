import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, TestTube, Code, Target } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-success rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-primary rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-success rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Professional Badge */}
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary text-primary">
            <TestTube className="w-4 h-4 mr-2" />
            Test Automation Architect
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Playwright Framework
            <span className="block text-primary">Architect</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            18+ years crafting scalable, maintainable test automation frameworks. 
            Specialized in building enterprise-grade solutions with Playwright & TypeScript.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">18+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Framework Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-medium transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('frameworks')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Code className="w-5 h-5 mr-2" />
              Explore Frameworks
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => document.getElementById('business-value')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Target className="w-5 h-5 mr-2" />
              Business Impact
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};