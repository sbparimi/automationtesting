import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background pt-24">
      {/* Main Hero Area */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
              The Ultimate
              <br />
              <span className="text-foreground">QA Automation</span>
              <br />
              <span className="bg-gradient-button bg-clip-text text-transparent">Learning Platform</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Trusted by beginners, professionals & practitioners;
              <br />
              Built with production-grade content in mind.
            </p>
            
            <Button 
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 py-6 rounded-lg text-base font-semibold transition-all hover:scale-105 group"
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Learning
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* Stats */}
            <div className="flex gap-12 mt-12">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">500+</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Lessons Available</p>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">5</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Complete Courses</p>
              </div>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Junior to Director Level</p>
                    <p className="text-sm text-muted-foreground">Complete career progression</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Production-Grade Content</p>
                    <p className="text-sm text-muted-foreground">Enterprise-level examples</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gradient-button rounded-xl text-center">
                  <p className="text-2xl font-bold text-primary-foreground">€2.99/month</p>
                  <p className="text-sm text-primary-foreground/80">Unlimited access to all courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Cards Section */}
      <div id="courses" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Beginner Card */}
          <Link to="/beginner-guide" className="group">
            <div className="bg-[hsl(48,96%,75%)] rounded-2xl p-8 h-full transition-transform hover:scale-[1.02] hover:shadow-xl">
              <p className="text-sm font-medium text-foreground/70 mb-2">For Beginners</p>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Start Your QA
                <br />
                Journey
              </h3>
              <div className="mt-8 opacity-80">
                <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
                  <rect x="20" y="30" width="25" height="35" rx="3" fill="hsl(var(--foreground))" opacity="0.2"/>
                  <rect x="50" y="25" width="30" height="40" rx="3" fill="hsl(var(--foreground))" opacity="0.3"/>
                  <path d="M30 55 L35 60 L45 45" stroke="hsl(var(--foreground))" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </Link>
          
          {/* Professionals Card */}
          <Link to="/master-typescript" className="group">
            <div className="bg-[hsl(145,70%,65%)] rounded-2xl p-8 h-full transition-transform hover:scale-[1.02] hover:shadow-xl">
              <p className="text-sm font-medium text-foreground/70 mb-2">For Professionals</p>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Master Advanced
                <br />
                Automation
              </h3>
              <div className="mt-8 opacity-80">
                <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
                  <rect x="15" y="40" width="20" height="30" rx="2" fill="hsl(var(--foreground))" opacity="0.2"/>
                  <rect x="40" y="30" width="20" height="40" rx="2" fill="hsl(var(--foreground))" opacity="0.3"/>
                  <rect x="65" y="20" width="20" height="50" rx="2" fill="hsl(var(--foreground))" opacity="0.2"/>
                  <path d="M25 35 L50 25 L75 15" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </Link>
          
          {/* Practitioners Card */}
          <Link to="/test-management" className="group">
            <div className="bg-[hsl(195,90%,65%)] rounded-2xl p-8 h-full transition-transform hover:scale-[1.02] hover:shadow-xl">
              <p className="text-sm font-medium text-foreground/70 mb-2">For Practitioners</p>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Lead QA Teams
                <br />
                & Strategy
              </h3>
              <div className="mt-8 opacity-80">
                <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="35" r="15" fill="hsl(var(--foreground))" opacity="0.2"/>
                  <circle cx="30" cy="65" r="12" fill="hsl(var(--foreground))" opacity="0.3"/>
                  <circle cx="70" cy="65" r="12" fill="hsl(var(--foreground))" opacity="0.3"/>
                  <path d="M50 50 L30 55 M50 50 L70 55" stroke="hsl(var(--foreground))" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
