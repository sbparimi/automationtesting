import { Star, TrendingUp, Users, BookOpen, Award } from "lucide-react";
import { useEffect, useState } from "react";

export const SocialProofBanner = () => {
  const [stats, setStats] = useState({
    learners: 0,
    lessons: 0,
    hours: 0
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const learnerTarget = 782;
    const lessonsTarget = 500;
    const hoursTarget = 120;
    
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      setStats({
        learners: Math.floor(learnerTarget * progress),
        lessons: Math.floor(lessonsTarget * progress),
        hours: Math.floor(hoursTarget * progress)
      });
      if (step >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-muted/30 via-primary/5 to-muted/30 border-y border-border relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Label */}
        <div className="text-center mb-8">
          <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
            TRUSTED BY QA PROFESSIONALS WORLDWIDE
          </p>
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-warning text-warning" />
            ))}
            <span className="ml-2 text-foreground font-semibold">4.9/5</span>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card/50 rounded-2xl border border-border/50 backdrop-blur-sm transition-all hover:shadow-medium hover:-translate-y-1">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-3">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              {stats.learners}+
            </div>
            <div className="text-sm text-muted-foreground font-medium mt-1">
              Active Learners
            </div>
          </div>
          
          <div className="text-center p-6 bg-card/50 rounded-2xl border border-border/50 backdrop-blur-sm transition-all hover:shadow-medium hover:-translate-y-1">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-3">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              {stats.lessons}+
            </div>
            <div className="text-sm text-muted-foreground font-medium mt-1">
              Free Lessons
            </div>
          </div>
          
          <div className="text-center p-6 bg-card/50 rounded-2xl border border-border/50 backdrop-blur-sm transition-all hover:shadow-medium hover:-translate-y-1">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-3">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              {stats.hours}+
            </div>
            <div className="text-sm text-muted-foreground font-medium mt-1">
              Hours of Content
            </div>
          </div>
          
          <div className="text-center p-6 bg-card/50 rounded-2xl border border-border/50 backdrop-blur-sm transition-all hover:shadow-medium hover:-translate-y-1">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-3">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              90
            </div>
            <div className="text-sm text-muted-foreground font-medium mt-1">
              Day to Job Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
