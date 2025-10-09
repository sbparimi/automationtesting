import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, TestTube, Code } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden" style={{ backgroundImage: 'var(--blob-pattern)' }}>
      {/* Professional overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      
      <div className="max-w-6xl mx-auto px-6 text-center animate-fade-in pt-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground tracking-tight leading-none animate-slide-up">
            Master{" "}
            <span className="bg-gradient-button bg-clip-text text-transparent animate-float">
              Playwright Automation
            </span>
            <br />Like a Pro
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-normal">
            18+ years in automation governance, test management, and driving transformations in software testing. 
            Learn production-grade, enterprise-level Playwright frameworks through structured daily learning (4 hours/week). 
            Master scalable, AI-powered test automation with real-world implementations.
          </p>

          {/* CTA */}
          <div className="flex justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-button hover:shadow-glow text-primary-foreground px-12 py-6 rounded-3xl text-lg font-semibold transition-bounce hover:scale-105 animate-pulse-glow shadow-warm"
              onClick={() => document.getElementById('frameworks')?.scrollIntoView({ behavior: 'smooth' })}
            >
              START LEARNING ✨
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="bg-gradient-button border border-border rounded-3xl p-6 text-center hover:shadow-glow transition-bounce hover:scale-105 animate-slide-up shadow-warm" style={{animationDelay: '0.3s'}}>
              <div className="text-foreground text-xl font-bold mb-2">5+ Frameworks</div>
              <div className="text-sm text-foreground/80 uppercase tracking-wide">Framework Types</div>
            </div>
            <div className="bg-gradient-button border border-border rounded-3xl p-6 text-center hover:shadow-glow transition-bounce hover:scale-105 animate-slide-up shadow-warm" style={{animationDelay: '0.4s'}}>
              <div className="text-foreground text-xl font-bold mb-2">4 Hours/Week</div>
              <div className="text-sm text-foreground/80 uppercase tracking-wide">Practical Learning</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce mt-8">
            <button 
              className="w-8 h-12 border-2 border-primary rounded-full flex justify-center bg-card shadow-glow mx-auto cursor-pointer hover:shadow-strong transition-all duration-300"
              onClick={() => document.getElementById('frameworks')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="w-2 h-4 bg-gradient-button rounded-full mt-3 animate-pulse"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};