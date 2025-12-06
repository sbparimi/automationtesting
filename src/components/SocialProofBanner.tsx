import { Star, Users, BookOpen, Shield } from "lucide-react";
import { useEffect, useState } from "react";

export const SocialProofBanner = () => {
  const [stats, setStats] = useState({
    learners: 0,
    lessons: 0
  });

  useEffect(() => {
    // Animate numbers
    const duration = 2000;
    const steps = 50;
    const learnerTarget = 782;
    const lessonsTarget = 176600;
    
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      setStats({
        learners: Math.floor(learnerTarget * progress),
        lessons: Math.floor(lessonsTarget * progress)
      });
      if (step >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-8 bg-muted/20 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stars */}
        <div className="flex justify-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-warning text-warning" />
          ))}
        </div>
        
        {/* Stats */}
        <div className="flex justify-center gap-12 md:gap-24">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              {stats.learners.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">
              people learned<br />with us last hour
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              {stats.lessons.toLocaleString()}+
            </div>
            <div className="text-sm text-muted-foreground">
              lessons completed in<br />the last 6 months
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
