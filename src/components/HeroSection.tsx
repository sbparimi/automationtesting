import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, TestTube, Code, Phone, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-warm relative overflow-hidden" style={{ backgroundImage: 'var(--blob-pattern)' }}>
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-warm opacity-95"></div>
      
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
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-foreground animate-slide-up" style={{animationDelay: '0.2s'}}>
            with Suresh Parimi
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-normal">
            18+ years in automation governance, test management, and driving transformations in software testing. 
            Learn to build scalable, AI-powered Playwright frameworks that deliver enterprise-grade test automation solutions.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <div className="flex items-center gap-3 bg-card rounded-3xl px-6 py-3 shadow-warm animate-float">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-base font-medium">+31616270233</span>
            </div>
            <div className="flex items-center gap-3 bg-card rounded-3xl px-6 py-3 shadow-warm animate-float" style={{animationDelay: '0.2s'}}>
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-base font-medium">reachparimi@gmail.com</span>
            </div>
          </div>

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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-3xl p-6 text-center hover:shadow-glow transition-bounce hover:scale-105 animate-slide-up shadow-warm" style={{animationDelay: '0.3s'}}>
              <div className="text-primary text-2xl font-bold mb-2">Expert-Led Training</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Live Classes</div>
            </div>
            <div className="bg-card border border-border rounded-3xl p-6 text-center hover:shadow-glow transition-bounce hover:scale-105 animate-slide-up shadow-warm" style={{animationDelay: '0.4s'}}>
              <div className="text-primary text-2xl font-bold mb-2">18+ Years</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Experience</div>
            </div>
            <div className="bg-card border border-border rounded-3xl p-6 text-center hover:shadow-glow transition-bounce hover:scale-105 animate-slide-up shadow-warm" style={{animationDelay: '0.5s'}}>
              <div className="text-primary text-2xl font-bold mb-2">5+ Frameworks</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Framework Types</div>
            </div>
            <div className="bg-card border border-border rounded-3xl p-6 text-center hover:shadow-glow transition-bounce hover:scale-105 animate-slide-up shadow-warm" style={{animationDelay: '0.6s'}}>
              <div className="text-primary text-2xl font-bold mb-2">Hands-On Labs</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Practical Experience</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce mt-8">
            <div className="w-8 h-12 border-2 border-primary rounded-full flex justify-center bg-card shadow-glow mx-auto">
              <div className="w-2 h-4 bg-gradient-button rounded-full mt-3 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};