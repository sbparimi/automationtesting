import { Mic, Star, Zap, ArrowUp, Lightbulb, Share2 } from "lucide-react";

const skills = [
  { name: "Public speaking", icon: Mic, color: "bg-[hsl(340,65%,65%)]" },
  { name: "Leadership", icon: Star, color: "bg-[hsl(45,95%,55%)]" },
  { name: "Clear communication", icon: Zap, color: "bg-[hsl(160,60%,50%)]" },
  { name: "Productivity", icon: ArrowUp, color: "bg-[hsl(210,80%,60%)]" },
  { name: "Creativity", icon: Lightbulb, color: "bg-[hsl(340,65%,75%)]" },
  { name: "Networking", icon: Share2, color: "bg-[hsl(32,90%,60%)]" },
];

export const LightbulbSkills = () => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Lightbulb shape */}
      <div className="relative w-64 overflow-hidden">
        {/* Top rounded part */}
        <div className="rounded-t-full overflow-hidden">
          {skills.slice(0, 3).map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`${skill.color} py-4 px-6 flex items-center justify-center gap-2 text-white font-medium`}
              >
                <Icon className="w-5 h-5" />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
        
        {/* Bottom tapered part */}
        <div className="flex flex-col items-center">
          {skills.slice(3).map((skill, index) => {
            const Icon = skill.icon;
            const widthPercent = 100 - (index * 15);
            return (
              <div
                key={skill.name}
                className={`${skill.color} py-3 px-4 flex items-center justify-center gap-2 text-white font-medium`}
                style={{ width: `${widthPercent}%` }}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{skill.name}</span>
              </div>
            );
          })}
        </div>
        
        {/* Bulb base */}
        <div className="flex flex-col items-center mt-2">
          <div className="w-20 h-3 bg-[hsl(45,90%,60%)] rounded-sm" />
          <div className="w-16 h-3 bg-[hsl(35,85%,55%)] rounded-sm mt-1" />
          <div className="w-12 h-3 bg-[hsl(30,80%,50%)] rounded-sm mt-1" />
          <div className="w-8 h-4 bg-[hsl(30,80%,50%)] rounded-b-lg mt-1" />
        </div>
      </div>
    </div>
  );
};
