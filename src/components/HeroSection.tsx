import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, TestTube, Code, Phone, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden" style={{ backgroundImage: 'var(--grid-pattern)' }}>
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      
      <div className="max-w-6xl mx-auto px-6 text-center animate-fade-in pt-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground tracking-tight leading-none">
            Build Enterprise Playwright Frameworks
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-foreground">
            with Suresh Parimi
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-normal">
            18+ years in automation governance, test management, and driving transformations in software testing. 
            Learn to build scalable, AI-powered Playwright frameworks that deliver enterprise-grade test automation solutions.
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

          {/* CTA */}
          <div className="flex justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:shadow-glow hover:scale-105"
              onClick={() => document.getElementById('frameworks')?.scrollIntoView({ behavior: 'smooth' })}
            >
              START LEARNING
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:bg-accent transition-all duration-300">
              <div className="text-primary text-2xl font-bold mb-2">Expert-Led Training</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Live Classes</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:bg-accent transition-all duration-300">
              <div className="text-primary text-2xl font-bold mb-2">18+ Years</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Experience</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:bg-accent transition-all duration-300">
              <div className="text-primary text-2xl font-bold mb-2">5+ Frameworks</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Framework Types</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:bg-accent transition-all duration-300">
              <div className="text-primary text-2xl font-bold mb-2">Hands-On Labs</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Practical Experience</div>
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