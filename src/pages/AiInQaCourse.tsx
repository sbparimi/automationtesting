import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Lock, Circle, CheckCircle2, Bookmark, ChevronDown, Sparkles, Award, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { allAiInQaCourses, Course } from "@/data/aiInQaLessons";
import { useSubscription } from "@/hooks/useSubscription";
import { UpgradeModal } from "@/components/UpgradeModal";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

interface CourseSectionProps {
  course: Course;
  levelLabel: string;
  levelColor: string;
  levelIcon: React.ReactNode;
  startIndex: number;
  isLessonFree: (courseId: string, lessonIndex: number) => boolean;
  isPremium: () => boolean;
  checkAccess: (title: string, index: number) => void;
}

const CourseSection = ({ 
  course, 
  levelLabel, 
  levelColor, 
  levelIcon, 
  startIndex,
  isLessonFree,
  isPremium,
  checkAccess
}: CourseSectionProps) => {
  const [openSections, setOpenSections] = useState<string[]>([course.sections[0]?.id || '']);
  
  let lessonNumber = startIndex;

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className="space-y-6">
      {/* Course Header Card */}
      <Card className={`${levelColor} border-none`}>
        <CardHeader>
          <div className="w-12 h-12 bg-foreground/10 rounded-2xl flex items-center justify-center mb-4">
            {levelIcon}
          </div>
          <CardTitle className="text-2xl text-foreground">{levelLabel}</CardTitle>
          <CardDescription className="text-foreground/70">{course.description}</CardDescription>
        </CardHeader>
      </Card>

      {/* Sections Accordion */}
      <div className="bg-card border rounded-xl overflow-hidden">
        {/* Contents Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b bg-muted/30">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-foreground">Contents</span>
          </div>
        </div>

        {/* Sections */}
        {course.sections.map((section, sectionIndex) => {
          const isOpen = openSections.includes(section.id);
          const sectionStartNumber = lessonNumber;

          return (
            <Collapsible
              key={section.id}
              open={isOpen}
              onOpenChange={() => toggleSection(section.id)}
            >
              <CollapsibleTrigger className="w-full">
                <div className={`flex items-center justify-between px-5 py-4 hover:bg-muted/50 transition-colors border-b ${isOpen ? 'bg-muted/30' : ''}`}>
                  <span className="font-semibold text-foreground text-left">
                    {sectionIndex + 1}. {section.title.replace(/Section \d+: /, '').replace(/ \(\d+ lessons\)/, '')}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <div className="border-b">
                  {section.lessons.map((lesson) => {
                    lessonNumber++;
                    const globalIndex = lessonNumber - 1;
                    const isFree = isLessonFree('', globalIndex);
                    const hasAccess = isPremium() || isFree;
                    const isCompleted = false; // Can be connected to user progress later

                    const handleClick = (e: React.MouseEvent) => {
                      if (!hasAccess) {
                        e.preventDefault();
                        checkAccess(lesson.title, globalIndex);
                      }
                    };

                    return (
                      <Link
                        key={lesson.id}
                        to={hasAccess ? `/ai-qa-lesson/${lesson.id}` : '#'}
                        onClick={handleClick}
                        className={`flex items-center justify-between px-5 py-3 hover:bg-muted/30 transition-colors group ${
                          !hasAccess ? 'opacity-60' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          {/* Status Circle */}
                          {hasAccess ? (
                            isCompleted ? (
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            ) : (
                              <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            )
                          ) : (
                            <Lock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          )}
                          
                          {/* Lesson Info */}
                          <div className="flex flex-col min-w-0">
                            <span className={`text-sm font-medium truncate ${hasAccess ? 'text-foreground group-hover:text-primary' : 'text-muted-foreground'}`}>
                              {lesson.title}
                            </span>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              <span>{lesson.duration}</span>
                              {isFree && (
                                <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">FREE</Badge>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Bookmark Icon */}
                        <Bookmark className="w-5 h-5 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    );
                  })}
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
};

const AiInQaCourse = () => {
  const { isLessonFree, isPremium, showUpgradeModal, setShowUpgradeModal, triggerSource, checkAccess } = useSubscription();

  // Calculate total lessons and starting indices
  let totalLessons = 0;
  const courseStartIndices: number[] = [];
  
  allAiInQaCourses.forEach((course, index) => {
    courseStartIndices.push(totalLessons);
    course.sections.forEach(section => {
      totalLessons += section.lessons.length;
    });
  });

  const courseConfigs = [
    { 
      course: allAiInQaCourses[0], 
      levelLabel: 'For Beginners', 
      levelColor: 'bg-[hsl(48,96%,75%)]',
      levelIcon: <Sparkles className="w-6 h-6 text-foreground" />
    },
    { 
      course: allAiInQaCourses[1], 
      levelLabel: 'For Professionals', 
      levelColor: 'bg-[hsl(145,70%,65%)]',
      levelIcon: <Award className="w-6 h-6 text-foreground" />
    },
    { 
      course: allAiInQaCourses[2], 
      levelLabel: 'For Practitioners', 
      levelColor: 'bg-[hsl(195,90%,65%)]',
      levelIcon: <Crown className="w-6 h-6 text-foreground" />
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <UpgradeModal isOpen={showUpgradeModal} onClose={() => setShowUpgradeModal(false)} triggerSource={triggerSource} />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-6 bg-gradient-button">
              <Sparkles className="w-3 h-3 mr-1" />
              AI & GenAI • {totalLessons}+ Lessons
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
              AI in Quality Assurance
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From Junior QA to Director Level. Learn AI fundamentals, prompt engineering, 
              AI-powered automation, and strategic AI leadership for modern testing.
            </p>
            
            {/* Role Journey */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              <Badge variant="outline" className="bg-primary/5">Junior QA</Badge>
              <span className="text-muted-foreground self-center">→</span>
              <Badge variant="outline" className="bg-primary/5">Mid QA</Badge>
              <span className="text-muted-foreground self-center">→</span>
              <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/20">Senior QA</Badge>
              <span className="text-muted-foreground self-center">→</span>
              <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/20">Lead</Badge>
              <span className="text-muted-foreground self-center">→</span>
              <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">Manager</Badge>
              <span className="text-muted-foreground self-center">→</span>
              <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">Director</Badge>
            </div>
          </div>

          {/* Course Sections - Each with its own card and accordion */}
          <div className="grid lg:grid-cols-3 gap-8">
            {courseConfigs.map((config, index) => (
              <CourseSection
                key={config.course.id}
                course={config.course}
                levelLabel={config.levelLabel}
                levelColor={config.levelColor}
                levelIcon={config.levelIcon}
                startIndex={courseStartIndices[index]}
                isLessonFree={isLessonFree}
                isPremium={isPremium}
                checkAccess={checkAccess}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AiInQaCourse;