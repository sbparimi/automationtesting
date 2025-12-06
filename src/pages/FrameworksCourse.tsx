import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Lock, Play, Clock, Layers, ArrowRight, Crown, MessageCircle, Zap, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { allFrameworksCourses, getTotalFrameworkLessons } from "@/data/frameworksLessons";
import { useSubscription } from "@/hooks/useSubscription";
import { UpgradeModal } from "@/components/UpgradeModal";

const FrameworksCourse = () => {
  const navigate = useNavigate();
  const { isPremium, checkAccess, showUpgradeModal, setShowUpgradeModal, triggerSource } = useSubscription();

  const handleLessonClick = (lessonId: string, lessonTitle: string, lessonIndex: number, isFree?: boolean) => {
    if (checkAccess(lessonTitle, lessonIndex, isFree)) {
      navigate(`/framework-lesson/${lessonId}`);
    }
  };

  const whatsappNumber = "31616270233";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in the Production-Grade Frameworks course (€2.99/month). Please help me get started!");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const totalLessons = getTotalFrameworkLessons();
  const freeLessons = allFrameworksCourses.reduce((total, course) => 
    total + course.lessons.filter(l => l.isFree).length, 0
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_70%)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-2">
            <Layers className="w-4 h-4 mr-2 inline" />
            Production-Grade Frameworks
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Master <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">7 Enterprise</span> Frameworks
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
            <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 text-success" />
              <span className="text-sm font-medium">{freeLessons} Free Lessons</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-warning" />
              <span className="text-sm font-medium">7 Framework Patterns</span>
            </div>
          </div>

          {!isPremium() && (
            <Card className="max-w-md mx-auto bg-gradient-to-br from-primary/10 to-background border-primary/30">
              <CardContent className="p-6 text-center">
                <Crown className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">Unlock All Frameworks</h3>
                <p className="text-3xl font-bold text-primary mb-1">€2.99<span className="text-sm text-muted-foreground">/month</span></p>
                <p className="text-sm text-muted-foreground mb-4">Full access to all {totalLessons}+ lessons</p>
                <Button 
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  <MessageCircle className="w-4 h-4" />
                  Subscribe via WhatsApp
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Integration Notice */}
      <section className="py-8 px-6 bg-muted/30 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="border-success text-success">Playwright</Badge>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">All frameworks work with Playwright</span>
            </div>
            <div className="w-px h-6 bg-border hidden md:block" />
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="border-warning text-warning">Cypress</Badge>
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
            {allFrameworksCourses.map((course, courseIndex) => {
              const freeLessonCount = course.lessons.filter(l => l.isFree).length;
              const lockedLessonCount = course.lessons.length - freeLessonCount;
              
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
                          <Badge variant="outline" className="text-xs text-success border-success/30">
                            {freeLessonCount} free
                          </Badge>
                          {lockedLessonCount > 0 && (
                            <Badge variant="outline" className="text-xs text-warning border-warning/30">
                              <Lock className="w-3 h-3 mr-1" />
                              {lockedLessonCount} premium
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-6 pb-4">
                    <div className="grid gap-2 mt-4">
                      {course.lessons.map((lesson, lessonIndex) => {
                        const isAccessible = lesson.isFree || isPremium();
                        const globalIndex = allFrameworksCourses.slice(0, courseIndex).reduce((acc, c) => acc + c.lessons.length, 0) + lessonIndex;
                        
                        return (
                          <div
                            key={lesson.id}
                            onClick={() => handleLessonClick(lesson.id, lesson.title, lessonIndex, lesson.isFree)}
                            className={`flex items-center gap-4 p-4 rounded-lg border transition-all cursor-pointer ${
                              isAccessible 
                                ? 'bg-background hover:bg-muted/50 border-border hover:border-primary/30 hover:shadow-sm' 
                                : 'bg-muted/30 border-border/50 hover:bg-muted/50'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              isAccessible ? 'bg-primary/10' : 'bg-muted'
                            }`}>
                              {isAccessible ? (
                                <Play className="w-4 h-4 text-primary" />
                              ) : (
                                <Lock className="w-4 h-4 text-muted-foreground" />
                              )}
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className={`font-medium ${isAccessible ? 'text-foreground' : 'text-muted-foreground'}`}>
                                  {lessonIndex + 1}. {lesson.title}
                                </span>
                                {lesson.isFree && (
                                  <Badge variant="outline" className="text-xs text-success border-success/30">FREE</Badge>
                                )}
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

      {/* CTA Section */}
      {!isPremium() && (
        <section className="py-16 px-6 bg-gradient-to-br from-primary/10 to-background">
          <div className="max-w-3xl mx-auto text-center">
            <Crown className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Master Enterprise Frameworks?</h2>
            <p className="text-muted-foreground mb-8">
              Get full access to all 7 production-grade framework courses, {totalLessons}+ lessons, 
              and become an enterprise automation architect.
            </p>
            <Button 
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2 px-8"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              Subscribe Now - €2.99/month
            </Button>
          </div>
        </section>
      )}

      <Footer />

      <UpgradeModal 
        isOpen={showUpgradeModal} 
        onClose={() => setShowUpgradeModal(false)}
        triggerSource={triggerSource}
      />
    </div>
  );
};

export default FrameworksCourse;
