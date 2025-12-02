import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, BookOpen, Award, Lock, Crown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { allAiInQaCourses } from "@/data/aiInQaLessons";
import { useSubscription } from "@/hooks/useSubscription";
import { UpgradeModal } from "@/components/UpgradeModal";

const AiInQaCourse = () => {
  const { isLessonFree, isPremium, showUpgradeModal, setShowUpgradeModal, triggerSource, checkAccess } = useSubscription();
  
  let globalLessonNumber = 0;

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'basic': return 'bg-primary/10 text-primary border-primary/20';
      case 'intermediate': return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
      case 'advanced': return 'bg-secondary/10 text-secondary border-secondary/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-12">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground border-primary/30">
              <Sparkles className="w-3 h-3 mr-1" />
              AI & GenAI for QA
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              AI in <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Quality Assurance</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From Junior QA to Director Level. Learn AI fundamentals, prompt engineering, 
              AI-powered automation, and strategic AI leadership for modern testing.
            </p>
          </div>

          {/* Role Journey */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="outline" className="bg-primary/5">Junior QA</Badge>
            <span className="text-muted-foreground">→</span>
            <Badge variant="outline" className="bg-primary/5">Mid QA</Badge>
            <span className="text-muted-foreground">→</span>
            <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/20">Senior QA</Badge>
            <span className="text-muted-foreground">→</span>
            <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/20">Lead</Badge>
            <span className="text-muted-foreground">→</span>
            <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">Manager</Badge>
            <span className="text-muted-foreground">→</span>
            <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">Director</Badge>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary">135+</div>
              <div className="text-sm text-muted-foreground">Lessons</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary">10</div>
              <div className="text-sm text-muted-foreground">Sections</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Hours</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Career Levels</div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="max-w-6xl mx-auto px-6">
          {allAiInQaCourses.map((course) => (
            <Card key={course.id} className="mb-8 border-border bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {course.id === 'basic-ai-qa' && <Sparkles className="w-5 h-5 text-primary" />}
                  {course.id === 'intermediate-ai-qa' && <Award className="w-5 h-5 text-amber-500" />}
                  {course.id === 'advanced-ai-qa' && <Crown className="w-5 h-5 text-secondary" />}
                  <Badge className={
                    course.id === 'basic-ai-qa' ? getLevelColor('basic') :
                    course.id === 'intermediate-ai-qa' ? getLevelColor('intermediate') :
                    getLevelColor('advanced')
                  }>
                    {course.id === 'basic-ai-qa' ? 'Basic (Junior-Mid QA)' :
                     course.id === 'intermediate-ai-qa' ? 'Intermediate (Senior-Lead)' : 'Advanced (Manager-Director)'}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {course.sections.map((section) => (
                    <AccordionItem key={section.id} value={section.id}>
                      <AccordionTrigger className="text-left hover:no-underline">
                        <div>
                          <div className="font-semibold text-foreground">{section.title}</div>
                          <div className="text-sm text-muted-foreground">{section.description}</div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pt-2">
                          {section.lessons.map((lesson, lessonIndex) => {
                            globalLessonNumber++;
                            const isFree = lesson.isFree || lessonIndex < 5;
                            const hasAccess = isPremium() || isFree;
                            
                            return (
                              <div key={lesson.id}>
                                {hasAccess ? (
                                  <Link
                                    to={`/ai-qa-lesson/${lesson.id}`}
                                    className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                                  >
                                    <div className="flex items-center gap-3">
                                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                                        {globalLessonNumber}
                                      </span>
                                      <span className="text-foreground group-hover:text-primary transition-colors">
                                        {lesson.title}
                                      </span>
                                      {isFree && !isPremium() && (
                                        <Badge variant="outline" className="text-xs bg-primary/5 text-primary border-primary/20">
                                          Free
                                        </Badge>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                      <Clock className="w-4 h-4" />
                                      {lesson.duration}
                                    </div>
                                  </Link>
                                ) : (
                                  <button
                                    onClick={() => checkAccess(lesson.title, lessonIndex, lesson.isFree)}
                                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                                  >
                                    <div className="flex items-center gap-3">
                                      <span className="w-8 h-8 rounded-full bg-muted text-muted-foreground text-sm font-medium flex items-center justify-center">
                                        {globalLessonNumber}
                                      </span>
                                      <span className="text-muted-foreground">
                                        {lesson.title}
                                      </span>
                                      <Lock className="w-4 h-4 text-muted-foreground" />
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                      <Clock className="w-4 h-4" />
                                      {lesson.duration}
                                    </div>
                                  </button>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      <Footer />
      <UpgradeModal 
        isOpen={showUpgradeModal} 
        onClose={() => setShowUpgradeModal(false)}
        triggerSource={triggerSource}
      />
    </div>
  );
};

export default AiInQaCourse;
