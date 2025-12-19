import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { codexPhases } from "@/data/codexCourseData";
import { Clock, BookOpen, CheckCircle2, ChevronRight, Bot, GraduationCap, Wrench, Zap, Rocket, Shield, Target } from "lucide-react";

const phaseIcons = [
  <GraduationCap className="w-6 h-6" />,
  <Wrench className="w-6 h-6" />,
  <Bot className="w-6 h-6" />,
  <Zap className="w-6 h-6" />,
  <Rocket className="w-6 h-6" />
];

const phaseColors = [
  "from-green-500/20 to-green-500/5 border-green-500/30",
  "from-blue-500/20 to-blue-500/5 border-blue-500/30",
  "from-purple-500/20 to-purple-500/5 border-purple-500/30",
  "from-orange-500/20 to-orange-500/5 border-orange-500/30",
  "from-red-500/20 to-red-500/5 border-red-500/30"
];

const CodexCourse = () => {
  const totalLessons = codexPhases.reduce((acc, phase) => acc + phase.lessons.length, 0);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              <Bot className="w-3 h-3 mr-1" />
              30-Hour Comprehensive Course
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Automation Testing with Cypress
              <br />
              <span className="text-primary">using OpenAI Codex</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform from a non-technical manual tester into a proficient automation engineer. 
              30 comprehensive lessons taking you from zero to enterprise-grade test automation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">30 Hours Total</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{totalLessons} Lessons</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Zero to Enterprise</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Production Ready</span>
              </div>
            </div>
            
            <Link to={`/codex-lesson/${codexPhases[0].lessons[0].id}`}>
              <Button size="lg" className="gap-2">
                Start Learning Now
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          {/* Course Structure */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Course Structure</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {codexPhases.map((phase, idx) => (
                <div key={phase.id} className={`bg-gradient-to-br ${phaseColors[idx]} rounded-xl p-4 border`}>
                  <div className="flex items-center gap-2 mb-2">
                    {phaseIcons[idx]}
                    <span className="font-bold text-sm">Phase {idx + 1}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{phase.title.replace(`Phase ${idx + 1}: `, '')}</p>
                  <p className="text-xs font-medium">{phase.lessons.length} lessons</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* All Phases and Lessons */}
          <div className="space-y-12">
            {codexPhases.map((phase, phaseIdx) => (
              <section key={phase.id}>
                <div className={`bg-gradient-to-r ${phaseColors[phaseIdx]} rounded-2xl p-6 mb-6 border`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-background/50 rounded-xl flex items-center justify-center">
                      {phaseIcons[phaseIdx]}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{phase.title}</h2>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid gap-4">
                  {phase.lessons.map((lesson) => (
                    <Link 
                      key={lesson.id} 
                      to={`/codex-lesson/${lesson.id}`}
                      className="block"
                    >
                      <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:bg-card/80 transition-all group">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-lg font-bold text-primary">{lesson.lessonNumber}</span>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {lesson.title}
                              </h3>
                            </div>
                            
                            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                              {lesson.description}
                            </p>
                            
                            <div className="flex flex-wrap items-center gap-3">
                              <Badge variant="secondary" className="gap-1 text-xs">
                                <Clock className="w-3 h-3" />
                                {lesson.duration}
                              </Badge>
                              
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <CheckCircle2 className="w-3 h-3" />
                                {lesson.whatYouWillLearn.length} learning objectives
                              </div>
                            </div>
                          </div>
                          
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 border border-primary/30">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Career?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                By the end of this 30-hour course, you will be able to independently build Cypress automation, 
                use OpenAI Codex safely, run tests across multiple environments, and function as a junior-to-mid SDET.
              </p>
              <Link to={`/codex-lesson/${codexPhases[0].lessons[0].id}`}>
                <Button size="lg" className="gap-2">
                  Begin Your Journey
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CodexCourse;