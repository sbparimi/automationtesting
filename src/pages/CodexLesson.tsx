import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Clock, BookOpen, CheckCircle2, Code, Lightbulb, Target, Zap, Bot, AlertTriangle, Star, GraduationCap, Wrench, Rocket, ListChecks } from "lucide-react";
import { codexPhases, getAllCodexLessons, getCodexLessonById, getAdjacentLessons } from "@/data/codexCourseData";
import { generateCodexCourseContent } from "@/utils/generateCodexCourseContent";
import { parseMarkdown } from "@/utils/parseMarkdown";

const CodexLesson = () => {
  const { lessonId } = useParams();
  
  const allLessons = getAllCodexLessons();
  const currentLesson = getCodexLessonById(lessonId || "");
  const { previous: prevLesson, next: nextLesson } = getAdjacentLessons(lessonId || "");
  
  if (!currentLesson) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Lesson Not Found</h1>
          <Link to="/codex-course">
            <Button>Back to Course</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const content = generateCodexCourseContent(currentLesson.id);
  
  if (!content) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Content Not Available</h1>
          <Link to="/codex-course">
            <Button>Back to Course</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              to="/codex-course" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to 30-Hour Cypress + AI Codex Course
            </Link>
          </div>
          
          {/* Lesson Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                <Bot className="w-3 h-3 mr-1" />
                {currentLesson.phase}
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Clock className="w-3 h-3" />
                {currentLesson.duration}
              </Badge>
              <Badge variant="outline">
                Lesson {currentLesson.lessonNumber} of {allLessons.length}
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lesson {currentLesson.lessonNumber}: {currentLesson.title}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              {content.overview}
            </p>
            
            {/* What You'll Learn */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                What You Will Learn
              </h2>
              <ul className="grid md:grid-cols-2 gap-2">
                {currentLesson.whatYouWillLearn.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* BEGINNER SECTION */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{content.beginnerSection.title}</h2>
                <p className="text-sm text-muted-foreground">{content.beginnerSection.duration}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {content.beginnerSection.content.map((block, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  {block.title && (
                    <h3 className="text-lg font-semibold text-foreground mb-4">{block.title}</h3>
                  )}
                  
                  {block.type === 'explanation' && (
                    <div className="prose prose-sm max-w-none">
                      {block.content.split('\n\n').map((para, pi) => (
                        <p key={pi} className="text-foreground/80 whitespace-pre-wrap mb-4 last:mb-0">{parseMarkdown(para)}</p>
                      ))}
                    </div>
                  )}
                  
                  {block.type === 'steps' && block.steps && (
                    <div className="space-y-4">
                      <p className="text-foreground/80 mb-4">{parseMarkdown(block.content)}</p>
                      {block.steps.map((step) => (
                        <div key={step.step} className="bg-background border border-border rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {step.step}
                            </span>
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground">{step.action}</h4>
                              <p className="text-sm text-foreground/80 mt-1">{parseMarkdown(step.details)}</p>
                              {step.verification && (
                                <p className="text-sm text-green-600 dark:text-green-400 mt-2 flex items-center gap-1">
                                  <CheckCircle2 className="w-3 h-3" />
                                  Verify: {step.verification}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {block.type === 'checkpoint' && (
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                      <div className="prose prose-sm max-w-none">
                        {block.content.split('\n').map((line, li) => (
                          <p key={li} className="text-foreground/80 mb-1">{parseMarkdown(line)}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
          
          {/* INTERMEDIATE SECTION */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Wrench className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{content.intermediateSection.title}</h2>
                <p className="text-sm text-muted-foreground">{content.intermediateSection.duration}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {content.intermediateSection.content.map((block, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  {block.title && (
                    <h3 className="text-lg font-semibold text-foreground mb-4">{block.title}</h3>
                  )}
                  
                  <div className="prose prose-sm max-w-none">
                    {block.content.split('\n\n').map((para, pi) => (
                      <p key={pi} className="text-foreground/80 whitespace-pre-wrap mb-4 last:mb-0">{parseMarkdown(para)}</p>
                    ))}
                  </div>
                  
                  {block.code && (
                    <pre className="bg-secondary rounded-lg p-4 mt-4 text-sm overflow-x-auto">
                      <code className="text-secondary-foreground">{block.code}</code>
                    </pre>
                  )}
                </div>
              ))}
            </div>
          </section>
          
          {/* ADVANCED SECTION */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{content.advancedSection.title}</h2>
                <p className="text-sm text-muted-foreground">{content.advancedSection.duration}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {content.advancedSection.content.map((block, i) => (
                <div key={i} className={`rounded-xl p-6 ${block.type === 'warning' ? 'bg-red-500/10 border border-red-500/30' : 'bg-card border border-border'}`}>
                  {block.title && (
                    <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${block.type === 'warning' ? 'text-red-600 dark:text-red-400' : 'text-foreground'}`}>
                      {block.type === 'warning' && <AlertTriangle className="w-5 h-5" />}
                      {block.title}
                    </h3>
                  )}
                  
                  <div className="prose prose-sm max-w-none">
                    {block.content.split('\n\n').map((para, pi) => (
                      <p key={pi} className="text-foreground/80 whitespace-pre-wrap mb-4 last:mb-0">{parseMarkdown(para)}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* HANDS-ON EXERCISE */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{content.handsOnExercise.title}</h2>
                <p className="text-sm text-muted-foreground">{content.handsOnExercise.objective}</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/5 rounded-2xl p-6 border border-orange-500/20">
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-2">Problem Statement</h3>
                <p className="text-foreground/80">{content.handsOnExercise.problem}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-2">Prerequisites</h3>
                <ul className="space-y-1">
                  {content.handsOnExercise.prerequisites.map((prereq, i) => (
                    <li key={i} className="text-foreground/80 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" />
                      {prereq}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Step-by-Step Solution</h3>
                {content.handsOnExercise.steps.map((step) => (
                  <div key={step.stepNumber} className="bg-background/50 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {step.stepNumber}
                      </span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{step.instruction}</h4>
                        <p className="text-sm text-foreground/70 mt-2 mb-2">{step.howTo}</p>
                        {step.code && (
                          <pre className="bg-secondary rounded-lg p-3 text-xs overflow-x-auto my-2">
                            <code className="text-secondary-foreground">{step.code}</code>
                          </pre>
                        )}
                        <p className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          {step.verification}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {content.handsOnExercise.expectedOutput && (
                <div className="mt-6 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">Expected Output</h3>
                  <pre className="text-sm text-foreground/80 whitespace-pre-wrap">{content.handsOnExercise.expectedOutput}</pre>
                </div>
              )}
              
              {content.handsOnExercise.troubleshooting.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold text-foreground mb-3">Troubleshooting</h3>
                  <div className="space-y-3">
                    {content.handsOnExercise.troubleshooting.map((item, i) => (
                      <div key={i} className="bg-background/50 rounded-lg p-3">
                        <p className="font-medium text-red-600 dark:text-red-400 text-sm">Issue: {item.issue}</p>
                        <p className="text-xs text-foreground/60 mt-1">Cause: {item.cause}</p>
                        <p className="text-sm text-foreground/80 mt-1">Solution: {item.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
          
          {/* EXIT CHECKLIST */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <ListChecks className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Exit Checklist</h2>
                <p className="text-sm text-muted-foreground">Verify you can do all of these before moving on</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-2xl p-6 border border-green-500/20">
              <div className="space-y-3">
                {content.exitChecklist.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-background/50 rounded-lg p-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{item.skill}</p>
                      <p className="text-sm text-foreground/60">{item.verification}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-border">
            {prevLesson ? (
              <Link to={`/codex-lesson/${prevLesson.id}`}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Lesson {prevLesson.lessonNumber}</span>
                </Button>
              </Link>
            ) : (
              <div />
            )}
            
            {nextLesson ? (
              <Link to={`/codex-lesson/${nextLesson.id}`}>
                <Button className="gap-2">
                  <span className="hidden sm:inline">Lesson {nextLesson.lessonNumber}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            ) : (
              <Link to="/codex-course">
                <Button className="gap-2">
                  Complete Course
                  <CheckCircle2 className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CodexLesson;