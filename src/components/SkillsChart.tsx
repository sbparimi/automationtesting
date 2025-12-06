import { useEffect, useState } from "react";

const skills = [
  { name: "Self-awareness", width: 100, color: "skill-bar-blue", delay: 0 },
  { name: "Ambition", width: 85, color: "skill-bar-green", delay: 0.1 },
  { name: "Processing information", width: 70, color: "skill-bar-pink", delay: 0.2 },
  { name: "Resilience", width: 55, color: "skill-bar-yellow", delay: 0.3 },
  { name: "Adaptability", width: 40, color: "skill-bar-orange", delay: 0.4 },
];

export const SkillsChart = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative p-8">
      {/* Y-axis arrow */}
      <div className="absolute left-4 top-4 bottom-12 w-0.5 bg-foreground/80" />
      <div className="absolute left-2 top-2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-foreground/80" />
      
      {/* X-axis arrow */}
      <div className="absolute left-4 bottom-8 right-4 h-0.5 bg-foreground/80" />
      <div className="absolute right-2 bottom-6 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-foreground/80" />
      
      {/* X-axis label */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm font-medium text-foreground">
        Chance of getting hired
      </div>
      
      {/* Bars */}
      <div className="ml-8 space-y-3 pb-12">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="relative"
            style={{ animationDelay: `${skill.delay}s` }}
          >
            <div
              className={`${skill.color} rounded-r-xl py-3 px-4 text-white font-medium text-sm shadow-md transition-all duration-1000`}
              style={{
                width: isVisible ? `${skill.width}%` : '0%',
                transitionDelay: `${skill.delay}s`
              }}
            >
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
