import { BookOpen, Clock, Code, Layers, Monitor, Award, Target, Zap, CheckCircle2 } from "lucide-react";
import { Badge } from "./ui/badge";

const features = [
  {
    icon: Target,
    title: "Production-Ready Skills",
    description: "Learn the exact patterns and practices used by top tech companies. No fluff, just job-ready skills.",
    highlight: "Industry Standard"
  },
  {
    icon: Clock,
    badge: "20 min/day",
    title: "Learn at Your Pace",
    description: "Bite-sized lessons designed for busy professionals. Progress consistently, even with a full-time job.",
    highlight: "Flexible"
  },
  {
    icon: Code,
    title: "Hands-On Projects",
    description: "Every concept includes real code examples and exercises. Build a portfolio as you learn.",
    highlight: "Practical"
  },
  {
    icon: Layers,
    title: "Complete Curriculum",
    description: "From basic testing concepts to AI-powered automation. One platform, complete coverage.",
    highlight: "Comprehensive"
  },
  {
    icon: Monitor,
    title: "Learn Anywhere",
    description: "Access on desktop, tablet, or mobile. Your progress syncs across all devices.",
    highlight: "Multi-Platform"
  },
  {
    icon: Award,
    title: "Career Path Mapped",
    description: "Clear progression from Junior QA to Director. Know exactly what to learn at each stage.",
    highlight: "Career Growth"
  },
];

export const FeaturesGrid = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-bold">
            <Zap className="w-3 h-3 mr-1" />
            WHY CHOOSE QAFORGE
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A learning experience designed for <span className="text-primary font-semibold">real career results</span>, not just certificates.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-card border border-border rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-medium hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header with Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  {feature.badge && (
                    <Badge className="bg-primary text-foreground font-bold text-xs">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                
                {/* Highlight Tag */}
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  {feature.highlight}
                </span>
                
                {/* Title & Description */}
                <h3 className="text-xl font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl border border-primary/20">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {['No credit card required', 'Cancel anytime', 'Start immediately', 'Full access'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
