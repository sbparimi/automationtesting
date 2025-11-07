import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, BookOpen, Code2, Lightbulb, Zap, CheckCircle2, PlayCircle } from "lucide-react";
import { allTypeScriptCourses } from "@/data/typeScriptLessons";

// This is a template - in production, this would fetch from a database
const getLessonContent = (lessonId: string) => {
  // Return basic lesson structure - expand with full content for each lesson
  return {
    id: lessonId,
    title: "Variables: let, const, and var Explained",
    level: "Basic",
    duration: "15 min",
    objectives: [
      "Understand variable declarations in TypeScript",
      "Learn the differences between let, const, and var",
      "Master type annotations and inference",
      "Apply variables in test automation scenarios"
    ],
    whyItMatters: [
      {
        question: "Why learn TypeScript for test automation?",
        answer: "TypeScript catches errors during development, provides better IDE support, and creates more maintainable test frameworks."
      },
      {
        question: "Why use type annotations?",
        answer: "Type annotations prevent runtime errors by catching type mismatches early, making your test code more reliable."
      },
      {
        question: "Why is this important for Playwright and Cypress?",
        answer: "Both frameworks fully support TypeScript, enabling type-safe page objects, test data, and custom commands."
      },
      {
        question: "Why start with variables?",
        answer: "Variables are the foundation of all programming. Understanding scope and types prevents most beginner mistakes."
      },
      {
        question: "Why does immutability matter?",
        answer: "Immutable test data prevents test contamination and makes tests more reliable and parallelizable."
      }
    ],
    concept: `Variables store data in your test automation code. TypeScript adds type safety to JavaScript variables, catching errors before tests run. Understanding let, const, and var is essential for writing reliable test automation.`,
    
    implementation: {
      basic: `// Basic variable declarations with types
let username: string = "testuser@example.com";
let age: number = 25;
let isActive: boolean = true;

// Type inference
let email = "user@test.com"; // inferred as string
const API_URL = "https://api.example.com"; // const for constants`,

      playwright: `// Playwright with TypeScript
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://app.example.com';

test('login test', async ({ page }) => {
  const username: string = 'admin@test.com';
  const password: string = 'SecurePass123';
  
  await page.goto(BASE_URL + '/login');
  await page.fill('[data-testid="username"]', username);
  await page.fill('[data-testid="password"]', password);
  await page.click('[data-testid="login-btn"]');
  
  await expect(page).toHaveURL(BASE_URL + '/dashboard');
});`,

      cypress: `// Cypress with TypeScript
describe('Login Tests', () => {
  const BASE_URL = 'https://app.example.com';
  
  it('should login successfully', () => {
    const username: string = 'admin@test.com';
    const password: string = 'SecurePass123';
    
    cy.visit(BASE_URL + '/login');
    cy.get('[data-testid="username"]').type(username);
    cy.get('[data-testid="password"]').type(password);
    cy.get('[data-testid="login-btn"]').click();
    
    cy.url().should('include', '/dashboard');
  });
});`
    },

    benefits: [
      {
        title: "Catch Errors Early",
        description: "TypeScript catches type errors during development",
        example: "IDE shows errors before running tests"
      },
      {
        title: "Better Autocomplete",
        description: "Get intelligent code suggestions",
        example: "IDE suggests available methods and properties"
      },
      {
        title: "Self-Documenting",
        description: "Types serve as inline documentation",
        example: "Function signatures show what parameters are needed"
      }
    ],

    commonMistakes: [
      {
        mistake: "Using any type everywhere",
        why: "Defeats the purpose of TypeScript",
        fix: "Use specific types or unknown"
      },
      {
        mistake: "Using var instead of let/const",
        why: "var has confusing scope rules",
        fix: "Always use let or const"
      }
    ],

    practiceExercises: [
      {
        title: "Exercise 1: Variable Declarations",
        description: "Practice using let and const",
        starterCode: "// Declare variables for test data",
        solution: "const username = 'test@example.com';\nlet retryCount = 0;",
        explanation: "Use const for values that don't change, let for values that will be reassigned"
      }
    ],

    additionalResources: [
      { title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
      { title: "Playwright TypeScript Guide", url: "https://playwright.dev/docs/test-typescript" },
      { title: "Cypress TypeScript Guide", url: "https://docs.cypress.io/guides/tooling/typescript-support" }
    ]
  };
};

const TypeScriptLesson = () => {
  const { lessonId } = useParams();
  const lesson = getLessonContent(lessonId || 'ts-basic-001');

  // Find previous and next lessons
  const findAdjacentLessons = () => {
    const allLessons: Array<{ lesson: any; course: any; section: any }> = [];
    for (const course of allTypeScriptCourses) {
      for (const section of course.sections) {
        for (const tsLesson of section.lessons) {
          allLessons.push({ lesson: tsLesson, course, section });
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Lesson Title Header */}
      <div className="bg-gradient-accent/20 border-b">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-text bg-clip-text text-transparent">
            {lesson.title}
          </h1>
        </div>
      </div>
      
      <div className="pt-12 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/master-typescript">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Course
            </Button>
          </Link>

          {/* Lesson metadata */}
          <div className="flex gap-4 mb-8">
            <Badge>{lesson.level}</Badge>
            <Badge variant="outline">{lesson.duration}</Badge>
          </div>

          {/* Learning Objectives */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Learning Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {lesson.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* The 5 Whys */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                The 5 Whys - Understanding the Purpose
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {lesson.whyItMatters.map((item, index) => (
                  <AccordionItem key={index} value={`why-${index}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Core Concept */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Core Concept</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{lesson.concept}</p>
            </CardContent>
          </Card>

          {/* Implementation Guide */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                Implementation Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Basic Example</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{lesson.implementation.basic}</code>
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Playwright Example</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{lesson.implementation.playwright}</code>
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Cypress Example</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{lesson.implementation.cypress}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Key Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {lesson.benefits.map((benefit, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{benefit.description}</p>
                    <p className="text-xs text-primary">{benefit.example}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Practice Exercises */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5" />
                Practice Exercises
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {lesson.practiceExercises.map((exercise, index) => (
                  <AccordionItem key={index} value={`exercise-${index}`}>
                    <AccordionTrigger>
                      {exercise.title}
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <p className="text-muted-foreground">{exercise.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Starter Code:</h4>
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                          <code>{exercise.starterCode}</code>
                        </pre>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Solution:</h4>
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                          <code>{exercise.solution}</code>
                        </pre>
                      </div>
                      <p className="text-sm text-muted-foreground">{exercise.explanation}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="w-full sm:w-auto">
              {prev ? (
                <Link to={`/typescript-lesson/${prev.lesson.id}`} className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous: {prev.lesson.title}
                  </Button>
                </Link>
              ) : (
                <div className="w-full sm:w-auto"></div>
              )}
            </div>
            
            <Link to="/master-typescript">
              <Button variant="ghost" size="lg">
                All Lessons
              </Button>
            </Link>
            
            <div className="w-full sm:w-auto">
              {next ? (
                <Link to={`/typescript-lesson/${next.lesson.id}`} className="w-full sm:w-auto">
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

export default TypeScriptLesson;
