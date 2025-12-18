import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Circle, CheckCircle2, Bookmark, ChevronDown, Sparkles, Award, Crown, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  description?: string;
}

interface Section {
  id: string;
  title: string;
  description?: string;
  lessons: Lesson[];
}

interface Course {
  id: string;
  title: string;
  description: string;
  sections: Section[];
}

interface CourseLayoutProps {
  title: string;
  subtitle: string;
  badgeText: string;
  courses: Course[];
  lessonPath: string;
  roleJourney?: string[];
}

type LevelFilter = 'all' | 'beginner' | 'professional' | 'practitioner';

interface CourseSectionProps {
  course: Course;
  levelLabel: string;
  levelColor: string;
  levelIcon: React.ReactNode;
  lessonPath: string;
  isSelected: boolean;
  onSelect: () => void;
}

const CourseSection = ({ 
  course, 
  levelLabel, 
  levelColor, 
  levelIcon, 
  lessonPath,
  isSelected,
  onSelect
}: CourseSectionProps) => {
  const [openSections, setOpenSections] = useState<string[]>([course.sections[0]?.id || '']);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
      {/* Course Header Card */}
      <Card 
        className={`${levelColor} border-none cursor-pointer transition-all duration-300 hover:scale-[1.02] ${isSelected ? 'ring-4 ring-foreground/20 shadow-strong' : ''}`}
        onClick={onSelect}
      >
        <CardHeader>
          <div className="w-14 h-14 bg-foreground/10 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
            {levelIcon}
          </div>
          <CardTitle className="text-2xl text-foreground">{levelLabel}</CardTitle>
          <CardDescription className="text-foreground/70">{course.description}</CardDescription>
          <div className="mt-3 flex items-center gap-2">
            <Badge variant="secondary" className="bg-foreground/10 text-foreground border-none">
              {course.sections.reduce((acc, s) => acc + s.lessons.length, 0)} lessons
            </Badge>
            <Badge variant="secondary" className="bg-foreground/10 text-foreground border-none">
              FREE
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Sections Accordion */}
      <div className="bg-card border rounded-xl overflow-hidden shadow-soft">
        {/* Contents Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b bg-muted/30">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-foreground">Contents</span>
            <Badge variant="outline" className="text-xs">{course.sections.length} sections</Badge>
          </div>
        </div>

        {/* Sections */}
        {course.sections.map((section, sectionIndex) => {
          const isOpen = openSections.includes(section.id);

          return (
            <Collapsible
              key={section.id}
              open={isOpen}
              onOpenChange={() => toggleSection(section.id)}
            >
              <CollapsibleTrigger className="w-full">
                <div className={`flex items-center justify-between px-5 py-4 hover:bg-muted/50 transition-all duration-200 border-b ${isOpen ? 'bg-muted/30' : ''}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${isOpen ? 'bg-primary text-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {sectionIndex + 1}
                    </div>
                    <span className="font-semibold text-foreground text-left">
                      {section.title.replace(/Section \d+: /, '').replace(/ \(\d+ lessons\)/, '')}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">{section.lessons.length} lessons</span>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <div className="border-b bg-muted/10">
                  {section.lessons.map((lesson) => {
                    const isCompleted = false;

                    return (
                      <Link
                        key={lesson.id}
                        to={`/${lessonPath}/${lesson.id}`}
                        className="flex items-center justify-between px-5 py-3.5 hover:bg-muted/40 transition-all duration-200 group border-b border-muted/30 last:border-b-0"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          {/* Status Circle */}
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          ) : (
                            <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0 group-hover:text-primary transition-colors" />
                          )}
                          
                          {/* Lesson Info */}
                          <div className="flex flex-col min-w-0">
                            <span className="text-sm font-medium truncate transition-colors text-foreground group-hover:text-primary">
                              {lesson.title}
                            </span>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                              <Clock className="w-3 h-3" />
                              <span>{lesson.duration}</span>
                            </div>
                          </div>
                        </div>

                        {/* Bookmark Icon */}
                        <Bookmark className="w-5 h-5 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:text-primary" />
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

export const CourseLayout = ({ title, subtitle, badgeText, courses, lessonPath, roleJourney }: CourseLayoutProps) => {
  const [activeFilter, setActiveFilter] = useState<LevelFilter>('all');

  // Calculate total lessons
  let totalLessons = 0;
  courses.forEach((course) => {
    course.sections.forEach(section => {
      totalLessons += section.lessons.length;
    });
  });

  const courseConfigs = [
    { 
      course: courses[0], 
      levelLabel: 'For Beginners', 
      levelColor: 'bg-gradient-to-br from-[hsl(95,70%,85%)] to-[hsl(95,70%,78%)]',
      levelIcon: <BookOpen className="w-7 h-7 text-foreground" />,
      filterKey: 'beginner' as LevelFilter
    },
    { 
      course: courses[1], 
      levelLabel: 'For Professionals', 
      levelColor: 'bg-gradient-to-br from-[hsl(95,70%,75%)] to-[hsl(95,70%,68%)]',
      levelIcon: <Award className="w-7 h-7 text-foreground" />,
      filterKey: 'professional' as LevelFilter
    },
    { 
      course: courses[2], 
      levelLabel: 'For Practitioners', 
      levelColor: 'bg-gradient-to-br from-[hsl(95,70%,65%)] to-[hsl(95,70%,55%)]',
      levelIcon: <Crown className="w-7 h-7 text-foreground" />,
      filterKey: 'practitioner' as LevelFilter
    },
  ];

  // Handle additional courses (like Bot Framework)
  if (courses.length > 3) {
    for (let i = 3; i < courses.length; i++) {
      courseConfigs.push({
        course: courses[i],
        levelLabel: courses[i].title,
        levelColor: 'bg-gradient-to-br from-[hsl(95,70%,70%)] to-[hsl(95,70%,60%)]',
        levelIcon: <BookOpen className="w-7 h-7 text-foreground" />,
        filterKey: 'all' as LevelFilter
      });
    }
  }

  const filteredConfigs = activeFilter === 'all' 
    ? courseConfigs 
    : courseConfigs.filter(c => c.filterKey === activeFilter);

  const handleCardSelect = (filterKey: LevelFilter) => {
    setActiveFilter(prev => prev === filterKey ? 'all' : filterKey);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-6 bg-primary text-foreground shadow-glow">
              <Sparkles className="w-3 h-3 mr-1" />
              {badgeText} • {totalLessons}+ Free Lessons
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-slide-up">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {subtitle}
            </p>
            
            {/* Role Journey */}
            {roleJourney && roleJourney.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {roleJourney.map((role, index) => (
                  <div key={role} className="flex items-center gap-2">
                    <Badge 
                      variant="outline" 
                      className="transition-all duration-300 hover:scale-105 bg-primary/10 border-primary/30"
                    >
                      {role}
                    </Badge>
                    {index < roleJourney.length - 1 && (
                      <span className="text-muted-foreground">→</span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === 'all' 
                    ? 'bg-foreground text-background shadow-medium' 
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                All Courses
              </button>
              {courseConfigs.slice(0, 3).map(config => (
                <button
                  key={config.filterKey}
                  onClick={() => setActiveFilter(config.filterKey)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === config.filterKey 
                      ? 'bg-foreground text-background shadow-medium' 
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {config.levelLabel}
                </button>
              ))}
            </div>
          </div>

          {/* Course Sections - Responsive Grid */}
          <div className={`grid gap-8 transition-all duration-500 ${
            filteredConfigs.length === 1 ? 'lg:grid-cols-1 max-w-2xl mx-auto' : 
            filteredConfigs.length === 2 ? 'lg:grid-cols-2' : 
            'lg:grid-cols-3'
          }`}>
            {filteredConfigs.map((config) => (
              <CourseSection
                key={config.course.id}
                course={config.course}
                levelLabel={config.levelLabel}
                levelColor={config.levelColor}
                levelIcon={config.levelIcon}
                lessonPath={lessonPath}
                isSelected={activeFilter === config.filterKey}
                onSelect={() => handleCardSelect(config.filterKey)}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseLayout;
