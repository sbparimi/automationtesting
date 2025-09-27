import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, CheckCircle, ExternalLink, MessageCircle } from "lucide-react";

const learningPaths = [
  {
    id: "playwright",
    title: "Playwright Path",
    description: "Master Playwright automation from basics to enterprise-level implementation",
    duration: "3 hrs 58 mins",
    completion: "0% complete",
    courses: [
      {
        id: "intro-playwright",
        title: "Introduction to Playwright",
        icon: "🎭",
        level: "Beginner"
      },
      {
        id: "advanced-playwright",
        title: "Advanced Playwright",
        icon: "⚡",
        level: "Intermediate"
      },
      {
        id: "web-element-locator",
        title: "Web Element Locator Strategies",
        icon: "🎯",
        level: "Advanced"
      }
    ]
  },
  {
    id: "visual-ai",
    title: "Visual AI Path",
    description: "Learn cutting-edge visual testing with AI-powered automation",
    duration: "3 hrs 58 mins",
    completion: "0% complete",
    courses: [
      {
        id: "basics-visual-testing",
        title: "The Basics of Visual Testing",
        icon: "👁️",
        level: "Beginner"
      },
      {
        id: "advanced-visual-testing",
        title: "Advanced Visual Testing Techniques",
        icon: "🔍",
        level: "Intermediate"
      },
      {
        id: "expert-visual-testing",
        title: "Expert Visual Testing Strategies",
        icon: "🧠",
        level: "Advanced"
      },
      {
        id: "modern-functional-test",
        title: "Modern Functional Test Automation Through Visual AI",
        icon: "🤖",
        level: "Expert"
      }
    ]
  },
  {
    id: "cypress",
    title: "Cypress Path",
    description: "Complete Cypress testing framework with TypeScript integration",
    duration: "Infinity hrs",
    completion: "0% complete",
    courses: [
      {
        id: "intro-cypress",
        title: "Introduction to Cypress",
        icon: "🌲",
        level: "Beginner"
      },
      {
        id: "cypress-typescript",
        title: "Cypress with TypeScript",
        icon: "📘",
        level: "Intermediate"
      },
      {
        id: "cypress-web-elements",
        title: "Web Element Locator Strategies",
        icon: "🎯",
        level: "Advanced"
      }
    ]
  },
  {
    id: "devops",
    title: "DevOps Path",
    description: "Integrate testing with DevOps pipelines and CI/CD automation",
    duration: "11 hrs 16 mins - 11 hrs 26 mins",
    completion: "0% complete",
    courses: [
      {
        id: "test-automation-devops",
        title: "Test Automation in DevOps",
        icon: "⚙️",
        level: "Intermediate"
      },
      {
        id: "whole-team-approach",
        title: "The Whole Team Approach to Continuous Testing",
        icon: "👥",
        level: "Advanced"
      }
    ]
  },
  {
    id: "codeless",
    title: "Codeless Path",
    description: "No-code/low-code testing solutions for rapid automation",
    duration: "5 hrs 42 mins",
    completion: "0% complete",
    courses: [
      {
        id: "whole-team-continuous",
        title: "The Whole Team Approach to Continuous Testing",
        icon: "🌐",
        level: "Beginner"
      },
      {
        id: "foundation-codeless",
        title: "Setting a Foundation for Successful Test Automation",
        icon: "🏗️",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "python-testing",
    title: "Python Testing Path",
    description: "Comprehensive Python testing frameworks and methodologies",
    duration: "13 hrs 35 mins",
    completion: "0% complete",
    courses: [
      {
        id: "foundation-python",
        title: "Setting a Foundation for Successful Test Automation",
        icon: "🐍",
        level: "Beginner"
      },
      {
        id: "python-programming",
        title: "Python Programming",
        icon: "💻",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "observability",
    title: "Observability & TestOps",
    description: "Advanced monitoring, tracing, and test operations",
    duration: "8 hrs 45 mins",
    completion: "0% complete",
    courses: [
      {
        id: "test-observability",
        title: "Test Observability Fundamentals",
        icon: "📊",
        level: "Intermediate"
      },
      {
        id: "testops-practices",
        title: "TestOps Best Practices",
        icon: "🔧",
        level: "Advanced"
      }
    ]
  }
];

const LearningPaths = () => {
  const handleBuyNow = (pathTitle: string) => {
    const message = `Hi Suresh, I'm interested in purchasing the ${pathTitle} course for $10. Please provide me with access details.`;
    const whatsappUrl = `https://wa.me/31616270233?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Learning Paths
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master test automation with structured learning paths designed for real-world, enterprise-grade implementation. 
              Each path includes beginner to advanced levels with military precision and production-ready frameworks.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {learningPaths.map((path) => (
              <Card key={path.id} className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl text-primary flex items-center gap-2">
                      {path.title}
                      <ExternalLink className="w-4 h-4" />
                    </CardTitle>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>{path.completion}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{path.duration}</span>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {path.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {path.courses.map((course, index) => (
                      <Link
                        key={course.id}
                        to={`/course/${path.id}/${course.id}`}
                        className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors border border-border/50"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg">
                          {course.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground text-sm leading-tight">
                            {course.title}
                          </h4>
                          <Badge variant="secondary" className="mt-1 text-xs">
                            {course.level}
                          </Badge>
                        </div>
                        {index < path.courses.length - 1 && (
                          <div className="absolute left-8 mt-12 w-0.5 h-6 bg-border"></div>
                        )}
                      </Link>
                    ))}
                    
                    {path.courses.length > 3 && (
                      <div className="flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                          +{path.courses.length - 3}
                        </div>
                        <span className="ml-2 text-primary text-sm font-medium">
                          {path.courses.length - 3} more courses
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-primary">$10</span>
                      <span className="text-sm text-muted-foreground">Lifetime Access</span>
                    </div>
                    <Button 
                      className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                      onClick={() => handleBuyNow(path.title)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Buy via WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LearningPaths;