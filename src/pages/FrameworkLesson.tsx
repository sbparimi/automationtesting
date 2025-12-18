import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Clock, BookOpen } from "lucide-react";
import { allFrameworksCourses } from "@/data/frameworksLessons";

const FrameworkLesson = () => {
  const { lessonId } = useParams<{ lessonId: string }>();

  // Find the lesson across all courses
  let currentLesson = null;
  let currentCourse = null;
  let lessonIndex = 0;
  let allLessons: any[] = [];

  for (const course of allFrameworksCourses) {
    for (let i = 0; i < course.lessons.length; i++) {
      allLessons.push({ ...course.lessons[i], courseTitle: course.title, courseIcon: course.icon });
      if (course.lessons[i].id === lessonId) {
        currentLesson = course.lessons[i];
        currentCourse = course;
        lessonIndex = allLessons.length - 1;
      }
    }
  }

  if (!currentLesson || !currentCourse) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
          <Link to="/frameworks" className="text-primary hover:underline">
            Back to Frameworks
          </Link>
        </div>
      </div>
    );
  }

  const prevLesson = lessonIndex > 0 ? allLessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < allLessons.length - 1 ? allLessons[lessonIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/frameworks" className="hover:text-primary transition-colors">Frameworks</Link>
            <span>/</span>
            <span>{currentCourse.title}</span>
            <span>/</span>
            <span className="text-foreground">{currentLesson.title}</span>
          </div>

          {/* Lesson Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary">{currentCourse.icon} {currentCourse.title}</Badge>
              <Badge className="bg-primary text-foreground">Free Access</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{currentLesson.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{currentLesson.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Lesson {lessonIndex + 1} of {allLessons.length}</span>
              </div>
            </div>
          </div>

          {/* Lesson Content */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Lesson Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{currentLesson.description}</p>
              
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">What you'll learn:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Core concepts and fundamentals of this framework pattern</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Practical implementation with code examples</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Best practices for production environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Common pitfalls and how to avoid them</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-background rounded-lg border border-primary/20">
                <p className="text-center text-muted-foreground">
                  Full lesson content including video, code samples, and exercises coming soon. 
                  <br />
                  <span className="text-primary">Sign up to get notified when this lesson is published!</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            {prevLesson ? (
              <Link to={`/framework-lesson/${prevLesson.id}`}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Previous: {prevLesson.title.slice(0, 30)}...
                </Button>
              </Link>
            ) : (
              <div />
            )}
            
            {nextLesson ? (
              <Link to={`/framework-lesson/${nextLesson.id}`}>
                <Button className="gap-2 bg-primary hover:bg-primary-hover text-foreground">
                  Next: {nextLesson.title.slice(0, 30)}...
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            ) : (
              <Link to="/frameworks">
                <Button className="gap-2 bg-primary hover:bg-primary-hover text-foreground">
                  Complete Course
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FrameworkLesson;
