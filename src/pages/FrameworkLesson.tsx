import { useParams, Link, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Clock, BookOpen, CheckCircle2, AlertTriangle, Target, Lightbulb, Code, FileText, List, ChevronRight } from "lucide-react";
import { allFrameworksCourses } from "@/data/frameworksLessons";
import { generateFrameworkContent } from "@/utils/generateFrameworkContent";
import { useEffect, useState } from "react";

const FrameworkLesson = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("overview");

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

  const prevLesson = lessonIndex > 0 ? allLessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < allLessons.length - 1 ? allLessons[lessonIndex + 1] : null;

  // Scroll to top when lesson changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection("overview");
  }, [lessonId]);

  const handleNextLesson = () => {
    if (nextLesson) {
      navigate(`/framework-lesson/${nextLesson.id}`);
    }
  };

  const handlePrevLesson = () => {
    if (prevLesson) {
      navigate(`/framework-lesson/${prevLesson.id}`);
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!currentLesson || !currentCourse) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
          <Link to="/frameworks">
            <Button>Back to Frameworks</Button>
          </Link>
        </div>
      </div>
    );
  }

  const content = generateFrameworkContent(currentLesson.id, currentLesson.title, currentCourse.title);

  const sections = [
    { id: "overview", label: "Overview", icon: Target },
    { id: "objectives", label: "Objectives", icon: CheckCircle2 },
    { id: "why-analysis", label: "5 Why Analysis", icon: Lightbulb },
    { id: "content", label: "Lesson Content", icon: BookOpen },
    { id: "code-example", label: "Code Example", icon: Code },
    { id: "best-practices", label: "Best Practices", icon: CheckCircle2 },
    { id: "pitfalls", label: "Common Pitfalls", icon: AlertTriangle },
    { id: "assignment", label: "Assignment", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/frameworks" className="hover:text-primary transition-colors font-medium">Frameworks</Link>
            <ChevronRight className="w-4 h-4" />
            <span>{currentCourse.title}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{currentLesson.title}</span>
          </div>

          {/* Lesson Header */}
          <div className="mb-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-primary text-foreground text-sm px-4 py-1">{currentCourse.icon} {currentCourse.title}</Badge>
              <Badge variant="outline" className="text-sm px-4 py-1">Free Access</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{currentLesson.title}</h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-medium">{currentLesson.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">Lesson {lessonIndex + 1} of {allLessons.length}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Quick Navigation Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <div className="lg:sticky lg:top-28">
                <Card className="border-2 border-primary/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <List className="w-5 h-5 text-primary" />
                      Quick Navigation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <nav className="space-y-1">
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                            activeSection === section.id
                              ? 'bg-primary text-foreground font-bold'
                              : 'text-muted-foreground hover:bg-primary/10 hover:text-foreground'
                          }`}
                        >
                          <section.icon className="w-4 h-4 shrink-0" />
                          <span className="text-sm">{section.label}</span>
                        </button>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 space-y-8">
              {/* Overview Section */}
              <Card id="overview" className="scroll-mt-32 border-2 hover:border-primary/30 transition-colors">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent border-b">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    Lesson Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed text-lg">{content.overview}</p>
                </CardContent>
              </Card>

              {/* Learning Objectives */}
              <Card id="objectives" className="scroll-mt-32 border-2 hover:border-primary/30 transition-colors">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent border-b">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    Learning Objectives
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {content.learningObjectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-foreground">{index + 1}</span>
                        </div>
                        <span className="text-foreground leading-relaxed pt-1">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* 5 Why Analysis */}
              <Card id="why-analysis" className="scroll-mt-32 border-2 hover:border-primary/30 transition-colors">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent border-b">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    5 Why Analysis - Deep Understanding
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  {Object.entries(content.whyAnalysis).map(([key, why], index) => (
                    <div key={key} className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary rounded-r-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-8 rounded-full bg-primary text-foreground flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </span>
                        <h4 className="font-bold text-foreground text-lg">{why.question}</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed ml-11">{why.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Main Content */}
              <Card id="content" className="scroll-mt-32 border-2 hover:border-primary/30 transition-colors">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent border-b">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    Lesson Content
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    {content.mainContent.split('\n\n').map((paragraph, index) => {
                      if (paragraph.startsWith('#')) {
                        const level = paragraph.match(/^#+/)?.[0].length || 1;
                        const text = paragraph.replace(/^#+\s*/, '');
                        if (level === 1) return <h2 key={index} className="text-2xl font-bold mt-10 mb-5 text-foreground border-b-2 border-primary/20 pb-3">{text}</h2>;
                        if (level === 2) return <h3 key={index} className="text-xl font-bold mt-8 mb-4 text-foreground">{text}</h3>;
                        return <h4 key={index} className="text-lg font-semibold mt-6 mb-3 text-foreground">{text}</h4>;
                      }
                      if (paragraph.startsWith('-') || paragraph.startsWith('*')) {
                        const items = paragraph.split('\n').filter(item => item.trim());
                        return (
                          <ul key={index} className="space-y-3 my-6 bg-muted/20 p-6 rounded-xl">
                            {items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                <span className="w-2 h-2 bg-primary rounded-full mt-2.5 shrink-0" />
                                <span className="leading-relaxed">{item.replace(/^[-*]\s*/, '')}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      if (paragraph.match(/^\d+\./)) {
                        const items = paragraph.split('\n').filter(item => item.trim());
                        return (
                          <ol key={index} className="space-y-3 my-6 bg-muted/20 p-6 rounded-xl">
                            {items.map((item, i) => (
                              <li key={i} className="flex items-start gap-4 text-muted-foreground">
                                <span className="w-7 h-7 bg-primary text-foreground rounded-full flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</span>
                                <span className="leading-relaxed pt-0.5">{item.replace(/^\d+\.\s*/, '')}</span>
                              </li>
                            ))}
                          </ol>
                        );
                      }
                      return <p key={index} className="text-muted-foreground leading-relaxed mb-5 text-lg">{paragraph}</p>;
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Code Example */}
              {content.codeExample && (
                <Card id="code-example" className="scroll-mt-32 border-2 hover:border-primary/30 transition-colors">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent border-b">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Code className="w-5 h-5 text-primary" />
                      </div>
                      Code Example
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <pre className="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto text-sm leading-relaxed border-2 border-slate-700">
                      <code>{content.codeExample}</code>
                    </pre>
                  </CardContent>
                </Card>
              )}

              {/* Best Practices */}
              <Card id="best-practices" className="scroll-mt-32 border-2 hover:border-primary/30 transition-colors">
                <CardHeader className="bg-gradient-to-r from-green-500/10 to-transparent border-b">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    Best Practices
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="grid md:grid-cols-2 gap-4">
                    {content.bestPractices.map((practice, index) => (
                      <li key={index} className="flex items-start gap-3 p-4 bg-green-500/5 rounded-xl border border-green-500/20">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground leading-relaxed">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Common Pitfalls */}
              <Card id="pitfalls" className="scroll-mt-32 border-2 hover:border-primary/30 transition-colors">
                <CardHeader className="bg-gradient-to-r from-amber-500/10 to-transparent border-b">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    Common Pitfalls to Avoid
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="grid md:grid-cols-2 gap-4">
                    {content.commonPitfalls.map((pitfall, index) => (
                      <li key={index} className="flex items-start gap-3 p-4 bg-amber-500/5 rounded-xl border border-amber-500/20">
                        <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground leading-relaxed">{pitfall}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Practical Assignment */}
              <Card id="assignment" className="scroll-mt-32 border-2 border-primary/30">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-xl bg-primary/30 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    Practical Assignment: {content.practicalAssignment.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{content.practicalAssignment.description}</p>
                  
                  <div className="space-y-8">
                    <div className="bg-muted/30 rounded-xl p-6">
                      <h4 className="font-bold text-foreground mb-4 text-lg flex items-center gap-2">
                        <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-foreground text-sm">📋</span>
                        Tasks
                      </h4>
                      <ol className="space-y-3">
                        {content.practicalAssignment.tasks.map((task, index) => (
                          <li key={index} className="flex items-start gap-4">
                            <span className="w-7 h-7 rounded-full bg-primary text-foreground flex items-center justify-center flex-shrink-0 text-sm font-bold">
                              {index + 1}
                            </span>
                            <span className="text-muted-foreground leading-relaxed pt-0.5">{task}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-6">
                      <h4 className="font-bold text-foreground mb-4 text-lg flex items-center gap-2">
                        <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-foreground text-sm">📦</span>
                        Deliverables
                      </h4>
                      <ul className="space-y-3">
                        {content.practicalAssignment.deliverables.map((deliverable, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-6">
                      <h4 className="font-bold text-foreground mb-4 text-lg flex items-center gap-2">
                        <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-foreground text-sm">⭐</span>
                        Evaluation Criteria
                      </h4>
                      <ul className="space-y-3">
                        {content.practicalAssignment.evaluationCriteria.map((criteria, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Target className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{criteria}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Summary */}
              <Card className="border-2 bg-gradient-to-r from-primary/5 to-transparent">
                <CardHeader>
                  <CardTitle className="text-xl">Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">{content.summary}</p>
                </CardContent>
              </Card>

              {/* Additional Resources */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Additional Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {content.additionalResources.map((resource, index) => (
                      <li key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        <BookOpen className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{resource}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-8 border-t-2 border-primary/20">
                {prevLesson ? (
                  <Button onClick={handlePrevLesson} size="lg" className="gap-3">
                    <ArrowLeft className="w-5 h-5" />
                    Previous Lesson
                  </Button>
                ) : (
                  <div />
                )}
                
                {nextLesson ? (
                  <Button onClick={handleNextLesson} size="lg" className="gap-3">
                    Next Lesson
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                ) : (
                  <Link to="/frameworks">
                    <Button size="lg" className="gap-3">
                      Complete Course
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FrameworkLesson;