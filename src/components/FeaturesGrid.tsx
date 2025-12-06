import { BookOpen, Clock, Headphones, Layers, Monitor, Award } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Personalized learning plan",
    description: "Tailored curriculum based on your skill level and career goals",
  },
  {
    icon: Clock,
    badge: "20+ min/day",
    title: "Bite-sized lessons",
    description: "Learn in short, focused sessions that fit your schedule",
  },
  {
    icon: Headphones,
    title: "Multi-format learning",
    description: "Text, code examples, and interactive exercises",
  },
  {
    icon: Layers,
    title: "500+ lessons",
    description: "Comprehensive content across all QA automation topics",
  },
  {
    icon: Monitor,
    title: "Access on any device",
    description: "Learn on desktop, tablet, or mobile whenever you want",
  },
  {
    icon: Award,
    title: "Career progression",
    description: "From Junior QA to Director-level leadership content",
  },
];

export const FeaturesGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          What you get with QAForge
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Everything you need to master QA automation
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card p-6 bg-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  {feature.badge && (
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
