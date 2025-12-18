import { useState } from "react";
import { CourseLayout } from "@/components/CourseLayout";
import { allAiInQaCourses, botiumParetoStrategy } from "@/data/aiInQaLessons";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Target, Zap, CheckCircle, Calendar } from "lucide-react";

const AiInQaCourse = () => {
  const [isStrategyOpen, setIsStrategyOpen] = useState(false);

  return (
    <div>
      {/* Pareto Learning Strategy Collapsible */}
      <div className="fixed bottom-6 right-6 z-50 max-w-md">
        <Collapsible open={isStrategyOpen} onOpenChange={setIsStrategyOpen}>
          <CollapsibleTrigger className="w-full">
            <div className="bg-[hsl(120,60%,25%)] hover:bg-[hsl(120,60%,20%)] text-black font-bold px-6 py-4 rounded-lg shadow-xl flex items-center justify-between gap-3 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span className="text-lg">🎯 Pareto Learning Strategy</span>
              </div>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isStrategyOpen ? 'rotate-180' : ''}`} />
            </div>
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="bg-[hsl(120,60%,25%)] text-black mt-2 rounded-lg shadow-xl p-6 max-h-[70vh] overflow-y-auto">
              <h3 className="text-xl font-bold mb-2">{botiumParetoStrategy.title}</h3>
              <p className="text-sm mb-4 opacity-90">{botiumParetoStrategy.description}</p>
              
              <div className="bg-black/10 rounded-lg p-3 mb-4">
                <p className="text-sm font-medium">💡 {botiumParetoStrategy.keyInsight}</p>
              </div>

              {/* Weekly Phases */}
              {botiumParetoStrategy.phases.map((phase, idx) => (
                <div key={idx} className="mb-4 border-t border-black/20 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4" />
                    <h4 className="font-bold">{phase.week}</h4>
                  </div>
                  <p className="text-sm mb-2 opacity-90">{phase.focus}</p>
                  <div className="space-y-1">
                    {phase.criticalLessons.slice(0, 3).map((lesson, i) => (
                      <div key={i} className="text-xs bg-black/10 rounded px-2 py-1">
                        <span className="font-semibold">{lesson.title}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs mt-2 font-medium">📌 {phase.dailyGoal}</p>
                </div>
              ))}

              {/* Quick Wins */}
              <div className="border-t border-black/20 pt-4 mt-4">
                <h4 className="font-bold flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4" /> Quick Wins
                </h4>
                <div className="space-y-1">
                  {botiumParetoStrategy.quickWins.slice(0, 4).map((win, i) => (
                    <div key={i} className="text-xs flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                      <span>{win}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Metrics */}
              <div className="border-t border-black/20 pt-4 mt-4">
                <h4 className="font-bold mb-2">✅ Success Metrics</h4>
                <div className="space-y-1">
                  {botiumParetoStrategy.successMetrics.map((metric, i) => (
                    <div key={i} className="text-xs flex items-start gap-2">
                      <span>•</span>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <CourseLayout
        title="AI in Quality Assurance"
        subtitle="From Junior QA to Director Level. Learn AI fundamentals, prompt engineering, AI-powered automation, and strategic AI leadership for modern testing."
        badgeText="AI & GenAI"
        courses={allAiInQaCourses}
        lessonPath="ai-qa-lesson"
        roleJourney={["Junior QA", "Mid QA", "Senior QA", "Lead", "Manager", "Director"]}
      />
    </div>
  );
};

export default AiInQaCourse;
