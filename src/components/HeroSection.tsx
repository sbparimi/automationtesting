import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star, Sparkles, Play, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background pt-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      
      {/* Main Hero Area */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-bounce-subtle">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Your QA Career Starts Here</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
              The Ultimate
              <br />
              <span className="text-foreground">QA Automation</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">Learning Platform</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Trusted by beginners, professionals & practitioners;
              <br />
              Built with production-grade content in mind.
            </p>

            {/* Feature List */}
            <div className="flex flex-col gap-3 mb-8">
              {['160+ lessons per course', 'Real-world examples', 'Lifetime access'].map((feature, i) => (
                <div key={feature} className="flex items-center gap-2 animate-slide-up" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-4 mb-12">
              <Button 
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background px-8 py-6 rounded-xl text-base font-semibold transition-all hover:scale-105 group shadow-strong"
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Learning
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-6 py-6 rounded-xl text-base font-semibold group"
              >
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-12 animate-slide-up stagger-3">
              <div className="group">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-foreground group-hover:text-primary transition-colors">500+</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Lessons Available</p>
              </div>
              <div className="group">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-foreground group-hover:text-primary transition-colors">5</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Complete Courses</p>
              </div>
              <div className="group">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-foreground group-hover:text-primary transition-colors">6</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Career Levels</p>
              </div>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative hidden lg:block animate-slide-in-right">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative bg-card border border-border rounded-3xl p-8 shadow-xl card-hover">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl hover:from-primary/10 hover:to-primary/5 transition-colors">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center animate-bounce-subtle">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Junior to Director Level</p>
                    <p className="text-sm text-muted-foreground">Complete career progression</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl hover:from-success/10 hover:to-success/5 transition-colors">
                  <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
                    <Star className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Production-Grade Content</p>
                    <p className="text-sm text-muted-foreground">Enterprise-level examples</p>
                  </div>
                </div>
                <div className="mt-6 p-6 bg-gradient-button rounded-2xl text-center shadow-glow animate-scale-pulse">
                  <p className="text-3xl font-bold text-primary-foreground">€2.99/month</p>
                  <p className="text-sm text-primary-foreground/80 mt-1">Unlimited access to all courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Cards Section */}
      <div id="courses" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Learning Path</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Whether you're just starting out or leading QA teams, we have the right course for you.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Beginner Card */}
          <Link to="/beginner-guide" className="group">
            <div className="level-beginner rounded-3xl p-8 h-full transition-all duration-500 hover:scale-[1.03] hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <p className="text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wide">For Beginners</p>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Start Your QA
                <br />
                Journey
              </h3>
              <p className="text-foreground/60 text-sm mb-6">Foundation concepts, basic automation, and essential testing skills.</p>
              <div className="flex items-center text-foreground font-medium group-hover:gap-3 gap-2 transition-all">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="mt-8 opacity-80 group-hover:opacity-100 transition-opacity">
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
            <div className="level-professional rounded-3xl p-8 h-full transition-all duration-500 hover:scale-[1.03] hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <p className="text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wide">For Professionals</p>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Master Advanced
                <br />
                Automation
              </h3>
              <p className="text-foreground/60 text-sm mb-6">TypeScript, frameworks, CI/CD, and professional patterns.</p>
              <div className="flex items-center text-foreground font-medium group-hover:gap-3 gap-2 transition-all">
                <span>Level Up</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="mt-8 opacity-80 group-hover:opacity-100 transition-opacity">
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
            <div className="level-practitioner rounded-3xl p-8 h-full transition-all duration-500 hover:scale-[1.03] hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <p className="text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wide">For Practitioners</p>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Lead QA Teams
                <br />
                & Strategy
              </h3>
              <p className="text-foreground/60 text-sm mb-6">Team leadership, test strategy, and enterprise governance.</p>
              <div className="flex items-center text-foreground font-medium group-hover:gap-3 gap-2 transition-all">
                <span>Lead Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="mt-8 opacity-80 group-hover:opacity-100 transition-opacity">
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
