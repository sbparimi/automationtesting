import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star, Sparkles, Play, CheckCircle2, Lock, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { CountdownTimer } from "./CountdownTimer";
import { SkillsChart } from "./SkillsChart";
import { Badge } from "./ui/badge";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background pt-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      
      {/* Urgency Banner - Top */}
      <div className="bg-primary/10 border-b border-primary/20 py-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-3 flex-wrap">
          <Sparkles className="w-5 h-5 text-primary animate-bounce-subtle" />
          <span className="text-foreground font-medium">
            🔥 Limited Time: 60% OFF all plans! Offer ends in: 
          </span>
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold">
            <CountdownTimer initialMinutes={10} />
          </span>
          <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
            5 FREE lessons per course
          </Badge>
        </div>
      </div>
      
      {/* Main Hero Area */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-bounce-subtle">
              <Crown className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">#1 QA Automation Learning Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
              Master QA Automation
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
                Get Hired Faster
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-lg">
              Join <span className="text-foreground font-semibold">782+ learners</span> who transformed their careers with production-grade TypeScript, Playwright, Cypress, and AI automation skills.
            </p>

            {/* Trial Info */}
            <div className="bg-muted/50 rounded-2xl p-4 mb-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Try Before You Buy</p>
                  <p className="text-sm text-muted-foreground">First 5 lessons of each course are completely FREE</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'Playwright', 'Cypress', 'AI in QA', 'Test Management'].map((course) => (
                  <Badge key={course} variant="outline" className="bg-background">
                    {course} • 5 free
                  </Badge>
                ))}
              </div>
            </div>

            {/* Feature List */}
            <div className="flex flex-col gap-2 mb-6">
              {[
                '160+ lessons per course',
                'Production-grade code examples',
                'Junior to Director career path'
              ].map((feature, i) => (
                <div key={feature} className="flex items-center gap-2 animate-slide-up" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <Button 
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background px-8 py-6 rounded-xl text-base font-semibold transition-all hover:scale-105 group shadow-strong"
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">€2.99</p>
                <p className="text-xs text-muted-foreground">/week after trial</p>
              </div>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium">
                    {['JD', 'SM', 'RK', 'AL'][i-1]}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
                <span className="text-sm text-muted-foreground ml-1">4.9/5 from 200+ reviews</span>
              </div>
            </div>
          </div>
          
          {/* Right Visual - Skills Chart */}
          <div className="relative hidden lg:block animate-slide-in-right">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative bg-card border border-border rounded-3xl p-6 shadow-xl">
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">
                Skills That Get You Hired
              </h3>
              <SkillsChart />
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Cards Section */}
      <div id="courses" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            5 FREE LESSONS INCLUDED
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Learning Path</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Try any course with 5 free lessons. Upgrade to unlock 160+ lessons per course.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Beginner Card */}
          <Link to="/beginner-guide" className="group">
            <div className="level-beginner rounded-3xl p-8 h-full transition-all duration-500 hover:scale-[1.03] hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <Badge className="bg-foreground/10 text-foreground border-foreground/20 mb-3">
                5 lessons FREE
              </Badge>
              <p className="text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wide">For Beginners</p>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Start Your QA
                <br />
                Journey
              </h3>
              <p className="text-foreground/60 text-sm mb-6">Foundation concepts, basic automation, and essential testing skills.</p>
              <div className="flex items-center text-foreground font-medium group-hover:gap-3 gap-2 transition-all">
                <span>Start Free</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
          
          {/* Professionals Card */}
          <Link to="/master-typescript" className="group">
            <div className="level-professional rounded-3xl p-8 h-full transition-all duration-500 hover:scale-[1.03] hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <Badge className="bg-foreground/10 text-foreground border-foreground/20 mb-3">
                5 lessons FREE
              </Badge>
              <p className="text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wide">For Professionals</p>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Master Advanced
                <br />
                Automation
              </h3>
              <p className="text-foreground/60 text-sm mb-6">TypeScript, frameworks, CI/CD, and professional patterns.</p>
              <div className="flex items-center text-foreground font-medium group-hover:gap-3 gap-2 transition-all">
                <span>Start Free</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
          
          {/* Practitioners Card */}
          <Link to="/test-management" className="group">
            <div className="level-practitioner rounded-3xl p-8 h-full transition-all duration-500 hover:scale-[1.03] hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <Badge className="bg-foreground/10 text-foreground border-foreground/20 mb-3">
                5 lessons FREE
              </Badge>
              <p className="text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wide">For Practitioners</p>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Lead QA Teams
                <br />
                & Strategy
              </h3>
              <p className="text-foreground/60 text-sm mb-6">Team leadership, test strategy, and enterprise governance.</p>
              <div className="flex items-center text-foreground font-medium group-hover:gap-3 gap-2 transition-all">
                <span>Start Free</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
