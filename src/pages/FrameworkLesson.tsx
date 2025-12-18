import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Clock, BookOpen, CheckCircle2, AlertTriangle, Target, Lightbulb, Code, FileText } from "lucide-react";
import { allFrameworksCourses } from "@/data/frameworksLessons";
import { generateFrameworkContent } from "@/utils/generateFrameworkContent";

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

  // Generate comprehensive content for this lesson
  const content = generateFrameworkContent(currentLesson.id, currentLesson.title, currentCourse.title);

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

          {/* Overview Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Lesson Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{content.overview}</p>
            </CardContent>
          </Card>

          {/* Learning Objectives */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Learning Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {content.learningObjectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-primary">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* 5 Why Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                5 Why Analysis - Deep Understanding
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(content.whyAnalysis).map(([key, why], index) => (
                <div key={key} className="border-l-4 border-primary/30 pl-4">
                  <h4 className="font-semibold text-foreground mb-2">
                    Why #{index + 1}: {why.question}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{why.answer}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Main Content */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Lesson Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                {content.mainContent.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('#')) {
                    const level = paragraph.match(/^#+/)?.[0].length || 1;
                    const text = paragraph.replace(/^#+\s*/, '');
                    if (level === 1) return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">{text}</h2>;
                    if (level === 2) return <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">{text}</h3>;
                    return <h4 key={index} className="text-lg font-medium mt-4 mb-2 text-foreground">{text}</h4>;
                  }
                  if (paragraph.startsWith('-') || paragraph.startsWith('*')) {
                    const items = paragraph.split('\n').filter(item => item.trim());
                    return (
                      <ul key={index} className="space-y-2 my-4">
                        {items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{item.replace(/^[-*]\s*/, '')}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (paragraph.match(/^\d+\./)) {
                    const items = paragraph.split('\n').filter(item => item.trim());
                    return (
                      <ol key={index} className="space-y-2 my-4">
                        {items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="font-semibold text-primary">{i + 1}.</span>
                            <span>{item.replace(/^\d+\.\s*/, '')}</span>
                          </li>
                        ))}
                      </ol>
                    );
                  }
                  return <p key={index} className="text-muted-foreground leading-relaxed mb-4">{paragraph}</p>;
                })}
              </div>
            </CardContent>
          </Card>

          {/* Code Example */}
          {content.codeExample && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Code Example
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto text-sm">
                  <code>{content.codeExample}</code>
                </pre>
              </CardContent>
            </Card>
          )}

          {/* Best Practices */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-3">
                {content.bestPractices.map((practice, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{practice}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Common Pitfalls */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Common Pitfalls to Avoid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-3">
                {content.commonPitfalls.map((pitfall, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{pitfall}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Practical Assignment */}
          <Card className="mb-8 border-primary/30">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Practical Assignment: {content.practicalAssignment.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">{content.practicalAssignment.description}</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Tasks:</h4>
                  <ol className="space-y-2">
                    {content.practicalAssignment.tasks.map((task, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-primary">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{task}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Deliverables:</h4>
                  <ul className="space-y-2">
                    {content.practicalAssignment.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                        <span className="text-muted-foreground">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Evaluation Criteria:</h4>
                  <ul className="space-y-2">
                    {content.practicalAssignment.evaluationCriteria.map((criteria, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-primary mt-1" />
                        <span className="text-muted-foreground">{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{content.summary}</p>
            </CardContent>
          </Card>

          {/* Additional Resources */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {content.additionalResources.map((resource, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{resource}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            {prevLesson ? (
              <Link to={`/framework-lesson/${prevLesson.id}`}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>
              </Link>
            ) : (
              <div />
            )}
            
            {nextLesson ? (
              <Link to={`/framework-lesson/${nextLesson.id}`}>
                <Button className="gap-2 bg-primary hover:bg-primary-hover text-foreground">
                  Next Lesson
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
