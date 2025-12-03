import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { TestTube, Zap, Trophy, Clock, PlayCircle, Lock } from "lucide-react";
import { allCypressCourses } from "@/data/cypressLessons";
import { useSubscription } from "@/hooks/useSubscription";
import { UpgradeModal } from "@/components/UpgradeModal";

const CypressCourse = () => {
  const { isPremium, isLessonFree, showUpgradeModal, setShowUpgradeModal, checkAccess, triggerSource } = useSubscription();

  // Calculate total lessons
  let totalLessons = 0;
  allCypressCourses.forEach(course => {
    course.sections.forEach(section => {
      totalLessons += section.lessons.length;
    });
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <UpgradeModal isOpen={showUpgradeModal} onClose={() => setShowUpgradeModal(false)} triggerSource={triggerSource} />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-6 bg-gradient-button">{totalLessons} Comprehensive Lessons</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
              Master Cypress Test Automation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build production-ready test automation frameworks from scratch. Master custom commands, network control, TypeScript integration, and enterprise CI/CD pipelines.
            </p>
          </div>

          {/* Course Overview Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-[hsl(48,96%,75%)] border-none hover:scale-[1.02] transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-foreground/10 rounded-2xl flex items-center justify-center mb-4">
                  <TestTube className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground">For Beginners</CardTitle>
                <CardDescription className="text-foreground/70">Getting started, selectors, assertions, navigation</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-[hsl(145,70%,65%)] border-none hover:scale-[1.02] transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-foreground/10 rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground">For Professionals</CardTitle>
                <CardDescription className="text-foreground/70">Custom commands, fixtures, network control, plugins</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-[hsl(195,90%,65%)] border-none hover:scale-[1.02] transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-foreground/10 rounded-2xl flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground">For Practitioners</CardTitle>
                <CardDescription className="text-foreground/70">CI/CD, reporting, performance, enterprise architecture</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Course Sections */}
          <div className="space-y-12">
            {allCypressCourses.map((course, courseIndex) => {
              let lessonNumber = 0;
              // Calculate starting lesson number for this course
              for (let i = 0; i < courseIndex; i++) {
                allCypressCourses[i].sections.forEach(section => {
                  lessonNumber += section.lessons.length;
                });
              }
              
              const levelLabel = course.id.includes('basic') ? 'For Beginners' : 
                                course.id.includes('intermediate') ? 'For Professionals' : 'For Practitioners';
              
              return (
                <Card key={course.id} className="border-2">
                  <CardHeader>
                    <Badge className="w-fit mb-2">{levelLabel}</Badge>
                    <CardTitle className="text-3xl mb-2">{course.title}</CardTitle>
                    <CardDescription className="text-base">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {course.sections.map((section) => (
                      <div key={section.id} className="border rounded-lg p-6 bg-muted/30">
                        <h3 className="text-xl font-bold mb-2 text-foreground">{section.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{section.description}</p>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {section.lessons.map((lesson) => {
                            lessonNumber++;
                            const globalIndex = lessonNumber - 1;
                            const isFree = isLessonFree('', globalIndex);
                            const hasAccess = isPremium() || isFree;
                            
                            const handleClick = (e: React.MouseEvent) => {
                              if (!hasAccess) {
                                e.preventDefault();
                                checkAccess(lesson.title, globalIndex);
                              }
                            };
                            
                            return (
                              <Link
                                key={lesson.id}
                                to={hasAccess ? `/cypress-lesson/${lesson.id}` : '#'}
                                onClick={handleClick}
                                className={`group bg-background p-4 rounded-lg border transition-all duration-300 ${
                                  hasAccess ? 'hover:border-primary hover:shadow-md' : 'opacity-75 cursor-pointer'
                                }`}
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-primary">{lessonNumber}.</span>
                                    {hasAccess ? (
                                      <PlayCircle className="w-4 h-4 text-primary" />
                                    ) : (
                                      <Lock className="w-4 h-4 text-muted-foreground" />
                                    )}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    {isFree && <Badge variant="secondary" className="text-[10px] px-1.5 py-0">FREE</Badge>}
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                      <Clock className="w-3 h-3" />
                                      {lesson.duration}
                                    </div>
                                  </div>
                                </div>
                                <h4 className={`text-sm font-semibold transition-colors line-clamp-2 ${
                                  hasAccess ? 'text-foreground group-hover:text-primary' : 'text-muted-foreground'
                                }`}>
                                  {lesson.title}
                                </h4>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CypressCourse;
