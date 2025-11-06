import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { TestTube, Zap, Trophy, Clock, PlayCircle } from "lucide-react";
import { allPlaywrightCourses } from "@/data/playwrightLessons";

const PlaywrightCourse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-6 bg-gradient-button">162 Comprehensive Lessons</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
              Master Playwright Test Automation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build enterprise-grade test automation from the ground up. Master Page Object Model, TypeScript best practices, API testing, visual regression, and CI/CD integration to become a senior QA automation engineer.
            </p>
          </div>

          {/* Course Overview Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-button rounded-2xl flex items-center justify-center mb-4">
                  <TestTube className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">52 Basic Lessons</CardTitle>
                <CardDescription>Getting started, locators, assertions, navigation</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-button rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">54 Intermediate</CardTitle>
                <CardDescription>POM, fixtures, API testing, advanced features</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-button rounded-2xl flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">54 Advanced</CardTitle>
                <CardDescription>CI/CD, reporting, performance, enterprise architecture</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Course Sections */}
          <div className="space-y-12">
            {allPlaywrightCourses.map((course) => {
              let lessonNumber = 0;
              return (
                <Card key={course.id} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-3xl mb-2">{course.title}</CardTitle>
                    <CardDescription className="text-base">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {course.sections.map((section) => (
                      <div key={section.id} className="border rounded-lg p-6 bg-gradient-accent/10">
                        <h3 className="text-xl font-bold mb-2 text-foreground">{section.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{section.description}</p>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {section.lessons.map((lesson) => {
                            lessonNumber++;
                            return (
                              <Link
                                key={lesson.id}
                                to={`/playwright-lesson/${lesson.id}`}
                                className="group bg-background p-4 rounded-lg border hover:border-primary transition-all duration-300 hover:shadow-md"
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-primary">{lessonNumber}.</span>
                                    <PlayCircle className="w-4 h-4 text-primary" />
                                  </div>
                                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Clock className="w-3 h-3" />
                                    {lesson.duration}
                                  </div>
                                </div>
                                <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
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

export default PlaywrightCourse;
