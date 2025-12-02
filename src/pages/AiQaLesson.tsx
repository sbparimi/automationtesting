import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, BookOpen, Lightbulb, Target, ExternalLink, Sparkles } from "lucide-react";
import { allAiInQaCourses } from "@/data/aiInQaLessons";
import { generateAiInQaContent } from "@/utils/generateAiInQaContent";

const AiQaLesson = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  
  // Find the lesson across all courses
  let currentLesson = null;
  let currentSection = null;
  let currentCourse = null;
  let lessonIndex = -1;
  
  for (const course of allAiInQaCourses) {
    for (const section of course.sections) {
      const index = section.lessons.findIndex(l => l.id === lessonId);
      if (index !== -1) {
        currentLesson = section.lessons[index];
        currentSection = section;
        currentCourse = course;
        lessonIndex = index;
        break;
      }
    }
    if (currentLesson) break;
  }

  // Get adjacent lessons
  const getAllLessons = () => {
    const lessons: { id: string; title: string }[] = [];
    for (const course of allAiInQaCourses) {
      for (const section of course.sections) {
        for (const lesson of section.lessons) {
          lessons.push({ id: lesson.id, title: lesson.title });
        }
      }
    }
    return lessons;
  };

  const allLessons = getAllLessons();
  const globalIndex = allLessons.findIndex(l => l.id === lessonId);
  const prevLesson = globalIndex > 0 ? allLessons[globalIndex - 1] : null;
  const nextLesson = globalIndex < allLessons.length - 1 ? allLessons[globalIndex + 1] : null;

  if (!currentLesson) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-16 max-w-4xl mx-auto px-6">
          <h1 className="text-2xl font-bold">Lesson not found</h1>
          <Link to="/ai-in-qa" className="text-primary hover:underline">
            Back to AI in QA Course
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const content = generateAiInQaContent(lessonId!, currentLesson.title);

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
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/ai-in-qa" className="text-primary hover:underline text-sm flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Back to AI in QA Course
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Badge className={getLevelColor(currentLesson.level)}>
                <Sparkles className="w-3 h-3 mr-1" />
                {currentLesson.level.charAt(0).toUpperCase() + currentLesson.level.slice(1)}
              </Badge>
              <span className="text-sm text-muted-foreground">{currentLesson.duration}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{content.title}</h1>
            <p className="text-muted-foreground">{currentSection?.title}</p>
          </div>

          {/* Learning Objectives */}
          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="w-5 h-5 text-primary" />
                Learning Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {content.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Five Whys Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                5 Whys Deep Dive
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {content.fiveWhys.map((item, i) => (
                  <div key={i} className="border-l-2 border-primary/30 pl-4">
                    <p className="font-medium text-foreground">{item.question}</p>
                    <p className="text-muted-foreground mt-1">{item.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Code Implementation */}
          {content.codeImplementation && content.codeImplementation.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Implementation Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                {content.codeImplementation.map((impl, i) => (
                  <div key={i} className="mb-6 last:mb-0">
                    <h4 className="font-semibold mb-2">{impl.title}</h4>
                    <pre className="bg-foreground/5 p-4 rounded-lg overflow-x-auto text-sm mb-2">
                      <code>{impl.code}</code>
                    </pre>
                    <p className="text-sm text-muted-foreground">{impl.explanation}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Benefits */}
          <Card className="mb-8 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle className="w-5 h-5 text-primary" />
                Key Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-2">
                {content.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Common Mistakes */}
          <Card className="mb-8 border-secondary/20 bg-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertTriangle className="w-5 h-5 text-secondary" />
                Common Mistakes to Avoid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {content.commonMistakes.map((mistake, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-secondary">✗</span>
                    {mistake}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Exercises */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                📝 Practice Exercises
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2 list-decimal list-inside">
                {content.exercises.map((exercise, i) => (
                  <li key={i} className="text-sm">{exercise}</li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <ExternalLink className="w-5 h-5" />
                Additional Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {content.resources.map((resource, i) => (
                  <li key={i} className="text-sm text-muted-foreground">• {resource}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-6 border-t border-border">
            {prevLesson ? (
              <Link to={`/ai-qa-lesson/${prevLesson.id}`}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>
              </Link>
            ) : <div />}
            
            {nextLesson ? (
              <Link to={`/ai-qa-lesson/${nextLesson.id}`}>
                <Button className="gap-2 bg-gradient-to-r from-primary to-primary-hover">
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            ) : (
              <Link to="/ai-in-qa">
                <Button className="gap-2">Complete Course</Button>
              </Link>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AiQaLesson;
