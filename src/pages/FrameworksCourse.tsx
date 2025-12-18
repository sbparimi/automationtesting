import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Play, Clock, Layers, ArrowRight, Zap, Shield, BookOpen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { allFrameworksCourses, getTotalFrameworkLessons } from "@/data/frameworksLessons";

const FrameworksCourse = () => {
  const navigate = useNavigate();

  const handleLessonClick = (lessonId: string) => {
    navigate(`/framework-lesson/${lessonId}`);
  };

  const totalLessons = getTotalFrameworkLessons();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_70%)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-primary text-foreground px-4 py-2">
            <Layers className="w-4 h-4 mr-2 inline" />
            Production-Grade Frameworks
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Master <span className="text-foreground">7 Enterprise</span> Frameworks
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete framework mastery for Playwright & Cypress. From Page Object Model to Advanced BDD Factory patterns. 
            Production-tested architectures used by Fortune 500 companies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
              <Play className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{totalLessons}+ Lessons</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium">100% Free</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-warning" />
              <span className="text-sm font-medium">7 Framework Patterns</span>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Notice */}
      <section className="py-8 px-6 bg-muted/30 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="border-primary text-primary">Playwright</Badge>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">All frameworks work with Playwright</span>
            </div>
            <div className="w-px h-6 bg-border hidden md:block" />
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="border-primary text-primary">Cypress</Badge>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">All frameworks work with Cypress</span>
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks List */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {allFrameworksCourses.map((course) => {
              return (
                <AccordionItem 
                  key={course.id} 
                  value={course.id}
                  className="border border-border rounded-xl overflow-hidden bg-card shadow-soft"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4 w-full">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-2xl shadow-lg`}>
                        {course.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-lg font-bold text-foreground">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">{course.description}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <Badge variant="secondary" className="text-xs">
                            {course.lessons.length} lessons
                          </Badge>
                          <Badge className="text-xs bg-primary text-foreground">
                            <BookOpen className="w-3 h-3 mr-1" />
                            Free Access
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-6 pb-4">
                    <div className="grid gap-2 mt-4">
                      {course.lessons.map((lesson, lessonIndex) => {
                        return (
                          <div
                            key={lesson.id}
                            onClick={() => handleLessonClick(lesson.id)}
                            className="flex items-center gap-4 p-4 rounded-lg border transition-all cursor-pointer bg-background hover:bg-muted/50 border-border hover:border-primary/30 hover:shadow-sm"
                          >
                            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10">
                              <Play className="w-4 h-4 text-primary" />
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-foreground">
                                  {lessonIndex + 1}. {lesson.title}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">{lesson.description}</p>
                            </div>
                            
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              <span>{lesson.duration}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FrameworksCourse;
