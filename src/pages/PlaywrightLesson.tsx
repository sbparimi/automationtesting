import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, BookOpen, Code, CheckCircle, AlertCircle } from "lucide-react";
import { allPlaywrightCourses } from "@/data/playwrightLessons";
import { generatePlaywrightLessonContent } from "@/utils/generatePlaywrightContent";

const PlaywrightLesson = () => {
  const { lessonId } = useParams();
  
  const findLesson = () => {
    for (const course of allPlaywrightCourses) {
      for (const section of course.sections) {
        const lesson = section.lessons.find(l => l.id === lessonId);
        if (lesson) return { lesson, section, course };
      }
    }
    return null;
  };

  const lessonData = findLesson();
  // Generate content dynamically for all lessons
  const content = lessonId && lessonData
    ? generatePlaywrightLessonContent(
        lessonData.lesson.id,
        lessonData.lesson.title,
        lessonData.lesson.level
      )
    : null;

  // Find previous and next lessons
  const findAdjacentLessons = () => {
    if (!lessonData) return { prev: null, next: null };
    
    const allLessons: Array<{ lesson: any; course: any; section: any }> = [];
    for (const course of allPlaywrightCourses) {
      for (const section of course.sections) {
        for (const lesson of section.lessons) {
          allLessons.push({ lesson, course, section });
        }
      }
    }
    
    const currentIndex = allLessons.findIndex(item => item.lesson.id === lessonId);
    return {
      prev: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
      next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null
    };
  };

  const { prev, next } = findAdjacentLessons();

  if (!lessonData || !content) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Lesson Not Found</h1>
          <Link to="/playwright">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Playwright Course
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/playwright" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Back to All Playwright Lessons
            </Link>
          </div>

          {/* Header with lesson title */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="text-sm">
                {lessonData.lesson.level.charAt(0).toUpperCase() + lessonData.lesson.level.slice(1)}
              </Badge>
              <Badge variant="outline" className="text-sm">
                {lessonData.lesson.duration}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
              {content.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {lessonData.section.title} • {lessonData.course.title}
            </p>
          </div>

          {/* Learning Objectives */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Learning Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {content.objectives.map((objective, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{i + 1}</span>
                    </div>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Concept Explanation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Concept Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                {content.concept.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-4 last:mb-0 whitespace-pre-wrap">{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 5 Whys Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>The 5 Whys: Deep Understanding</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {content.whys.map((why, i) => (
                <div key={i} className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-bold text-lg mb-2 text-primary">
                    Q{i + 1}: {why.question}
                  </h3>
                  <p className="text-muted-foreground">{why.answer}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Playwright Implementation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Playwright Implementation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {content.playwrightImplementation.map((impl, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold mb-3">{impl.title}</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-3">
                    <code className="text-sm">{impl.code}</code>
                  </pre>
                  <p className="text-muted-foreground italic">{impl.explanation}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Key Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {content.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Common Mistakes */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Common Mistakes & Solutions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {content.commonMistakes.map((mistake, i) => (
                <div key={i} className="border border-destructive/20 rounded-lg p-4">
                  <h4 className="font-semibold text-destructive mb-2">❌ Mistake:</h4>
                  <p className="mb-3">{mistake.mistake}</p>
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ Solution:</h4>
                  <p className="text-muted-foreground">{mistake.solution}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Practice Exercises */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Practice Exercises</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {content.exercises.map((exercise, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <h3 className="text-lg font-bold mb-2">{exercise.title}</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Task:</h4>
                    <p className="text-muted-foreground">{exercise.task}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Solution:</h4>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{exercise.solution}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {content.resources.map((resource, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{resource}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="w-full sm:w-auto">
              {prev ? (
                <Link to={`/playwright-lesson/${prev.lesson.id}`} className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous: {prev.lesson.title}
                  </Button>
                </Link>
              ) : (
                <div className="w-full sm:w-auto"></div>
              )}
            </div>
            
            <Link to="/playwright">
              <Button variant="ghost" size="lg">
                All Lessons
              </Button>
            </Link>
            
            <div className="w-full sm:w-auto">
              {next ? (
                <Link to={`/playwright-lesson/${next.lesson.id}`} className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Next: {next.lesson.title}
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Button>
                </Link>
              ) : (
                <div className="w-full sm:w-auto"></div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlaywrightLesson;
