import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, BookOpen, Code2, Lightbulb, Zap, CheckCircle2, PlayCircle } from "lucide-react";

// This is a template - in production, this would fetch from a database
const getLessonContent = (lessonId: string) => {
  // Example detailed content for one lesson
  return {
    id: lessonId,
    title: "Variables and Type Annotations",
    level: "Basic",
    duration: "12 min",
    objectives: [
      "Understand the importance of explicit type annotations",
      "Learn the difference between type inference and explicit types",
      "Master variable declaration best practices",
      "Apply type annotations in real test automation scenarios"
    ],
    whyItMatters: [
      {
        question: "Why do we need type annotations?",
        answer: "Type annotations prevent runtime errors by catching type mismatches during development, saving hours of debugging in production"
      },
      {
        question: "Why not just use JavaScript?",
        answer: "TypeScript provides compile-time safety, better IDE support, and self-documenting code that scales from solo projects to enterprise teams"
      },
      {
        question: "Why is this important for test automation?",
        answer: "Test frameworks handle complex data structures (page objects, test data, API responses). Types prevent passing wrong data types and breaking tests silently"
      },
      {
        question: "Why learn this first?",
        answer: "Type annotations are the foundation of all TypeScript features. Master this, and everything else becomes easier to understand"
      },
      {
        question: "Why does this improve code quality?",
        answer: "Explicit types make code self-documenting, enable better refactoring, and catch bugs before tests even run"
      }
    ],
    concept: `Type annotations in TypeScript explicitly define what type of value a variable can hold. This creates a contract that TypeScript enforces at compile time, preventing type-related bugs before your code runs.

In test automation, this means your test data, locators, and page objects are validated before tests execute, dramatically reducing flaky tests caused by type mismatches.`,
    
    implementation: {
      basic: `// Basic Type Annotations
let username: string = "testuser@example.com";
let age: number = 25;
let isActive: boolean = true;
let scores: number[] = [85, 90, 95];

// Type Inference (TypeScript infers the type)
let email = "user@example.com"; // inferred as string
let count = 100; // inferred as number

// Const declarations (preferred for immutable values)
const API_URL: string = "https://api.example.com";
const MAX_RETRIES: number = 3;`,

      playwright: `// Playwright Example - Type-Safe Test Data
import { test, expect, Page } from '@playwright/test';

// Explicit types for test credentials
const username: string = 'admin@test.com';
const password: string = 'SecurePass123';
const timeout: number = 5000;

test('Login with typed credentials', async ({ page }: { page: Page }) => {
  // Navigate to login page
  await page.goto('https://app.example.com/login');
  
  // Type-safe element interactions
  await page.fill('[data-testid="username"]', username);
  await page.fill('[data-testid="password"]', password);
  await page.click('[data-testid="login-btn"]', { timeout });
  
  // Type-safe assertions
  const welcomeText: string = await page.textContent('.welcome-message');
  expect(welcomeText).toContain(username);
});

// Advanced: Type-safe test data objects
interface LoginCredentials {
  username: string;
  password: string;
  rememberMe: boolean;
}

const validUser: LoginCredentials = {
  username: 'admin@test.com',
  password: 'SecurePass123',
  rememberMe: true
};

test('Login with structured data', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[data-testid="username"]', validUser.username);
  await page.fill('[data-testid="password"]', validUser.password);
  if (validUser.rememberMe) {
    await page.check('[data-testid="remember-me"]');
  }
  await page.click('[data-testid="login-btn"]');
});`,

      cypress: `// Cypress Example - Type-Safe Custom Commands
describe('Login Flow', () => {
  it('should login with typed credentials', () => {
    // Explicit types for test data
    const username: string = 'admin@test.com';
    const password: string = 'SecurePass123';
    const timeout: number = 5000;
    
    cy.visit('/login');
    cy.get('[data-testid="username"]').type(username);
    cy.get('[data-testid="password"]').type(password);
    cy.get('[data-testid="login-btn"]').click();
    
    cy.get('.welcome-message', { timeout })
      .should('contain.text', username);
  });
});

// Advanced: Type-safe test data interface
interface UserCredentials {
  email: string;
  password: string;
  role: 'admin' | 'user' | 'guest';
}

const adminUser: UserCredentials = {
  email: 'admin@test.com',
  password: 'SecurePass123',
  role: 'admin'
};

describe('Role-based Login', () => {
  it('should login admin user', () => {
    cy.visit('/login');
    cy.get('[data-testid="email"]').type(adminUser.email);
    cy.get('[data-testid="password"]').type(adminUser.password);
    cy.get('[data-testid="login-btn"]').click();
    
    // Type-safe role verification
    cy.url().should('include', \`/dashboard/\${adminUser.role}\`);
  });
});`
    },

    benefits: [
      {
        title: "Catch Errors Early",
        description: "TypeScript catches type errors during development, not during test execution",
        example: "Prevents passing a number where a string is expected, avoiding runtime failures"
      },
      {
        title: "Better IDE Support",
        description: "Get autocomplete, inline documentation, and intelligent refactoring",
        example: "Your IDE suggests available properties and methods, reducing typos"
      },
      {
        title: "Self-Documenting Code",
        description: "Types serve as inline documentation that never goes stale",
        example: "New team members understand function parameters without reading docs"
      },
      {
        title: "Safer Refactoring",
        description: "Change types confidently - TypeScript finds all affected code",
        example: "Rename a property and TypeScript updates all references automatically"
      },
      {
        title: "Production-Grade Quality",
        description: "Industry standard for enterprise test frameworks",
        example: "90% of Playwright/Cypress enterprise projects use TypeScript"
      }
    ],

    commonMistakes: [
      {
        mistake: "Using 'any' type everywhere",
        why: "Defeats the purpose of TypeScript, removes all type safety",
        fix: "Use specific types or 'unknown' if type is truly unknown, then narrow it"
      },
      {
        mistake: "Over-annotating obvious types",
        why: "TypeScript can infer most types, explicit annotations add noise",
        fix: "Let TypeScript infer simple types like: let count = 5 (inferred as number)"
      },
      {
        mistake: "Ignoring type errors with @ts-ignore",
        why: "Hides real problems that will surface in production",
        fix: "Fix the root cause or use proper type assertions with explanation"
      },
      {
        mistake: "Not using const for immutable values",
        why: "Misses opportunities for stricter type inference and prevents mutations",
        fix: "Use const for values that won't change: const API_KEY = 'xxx'"
      }
    ],

    practiceExercises: [
      {
        title: "Exercise 1: Basic Type Annotations",
        difficulty: "Beginner",
        description: "Create type-safe test data for a login form",
        task: `Create variables with proper type annotations for:
1. Email address
2. Password
3. Remember me checkbox state
4. Login timeout in milliseconds
5. Array of valid email domains`,
        solution: `const email: string = "test@example.com";
const password: string = "SecurePass123";
const rememberMe: boolean = true;
const timeout: number = 5000;
const validDomains: string[] = ["example.com", "test.com", "demo.com"];`
      },
      {
        title: "Exercise 2: Type Inference",
        difficulty: "Beginner",
        description: "Identify which variables need explicit types",
        task: `Review this code and remove unnecessary type annotations:
let name: string = "John";
let age: number = 25;
let isVerified: boolean = false;
let apiUrl: string = "https://api.example.com";`,
        solution: `// Better - let TypeScript infer obvious types
let name = "John"; // inferred as string
let age = 25; // inferred as number
let isVerified = false; // inferred as boolean

// Keep explicit type for clarity and documentation
const apiUrl: string = "https://api.example.com";`
      },
      {
        title: "Exercise 3: Playwright Test Data",
        difficulty: "Intermediate",
        description: "Create type-safe test data for Playwright",
        task: `Create a type-safe test that validates user registration with:
- Username (string)
- Email (string)
- Age (number)
- Newsletter subscription (boolean)`,
        solution: `import { test, expect } from '@playwright/test';

const username: string = "johndoe";
const email: string = "john@example.com";
const age: number = 25;
const subscribe: boolean = true;

test('User registration with typed data', async ({ page }) => {
  await page.goto('/register');
  await page.fill('[data-testid="username"]', username);
  await page.fill('[data-testid="email"]', email);
  await page.fill('[data-testid="age"]', age.toString());
  if (subscribe) {
    await page.check('[data-testid="newsletter"]');
  }
  await page.click('[data-testid="submit"]');
  
  await expect(page.locator('.success-message'))
    .toContainText(\`Welcome, \${username}\`);
});`
      },
      {
        title: "Exercise 4: Cypress Custom Command",
        difficulty: "Intermediate",
        description: "Create type-safe custom login command",
        task: `Create a reusable login function with type-safe parameters`,
        solution: `// In cypress/support/commands.ts
function login(email: string, password: string, remember: boolean = false): void {
  cy.visit('/login');
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="password"]').type(password);
  if (remember) {
    cy.get('[data-testid="remember"]').check();
  }
  cy.get('[data-testid="login-btn"]').click();
}

// Usage in test
it('should login user', () => {
  login('user@test.com', 'password123', true);
  cy.url().should('include', '/dashboard');
});`
      },
      {
        title: "Exercise 5: Advanced Type Safety",
        difficulty: "Advanced",
        description: "Build type-safe page object with proper annotations",
        task: `Create a LoginPage class with type-safe methods`,
        solution: `import { Page } from '@playwright/test';

class LoginPage {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }
  
  async navigate(): Promise<void> {
    await this.page.goto('/login');
  }
  
  async login(username: string, password: string): Promise<void> {
    await this.page.fill('[data-testid="username"]', username);
    await this.page.fill('[data-testid="password"]', password);
    await this.page.click('[data-testid="login-btn"]');
  }
  
  async getErrorMessage(): Promise<string> {
    return await this.page.textContent('.error-message') || '';
  }
  
  async isLoginButtonEnabled(): Promise<boolean> {
    return await this.page.isEnabled('[data-testid="login-btn"]');
  }
}

// Usage
test('Login page interactions', async ({ page }) => {
  const loginPage: LoginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('test@example.com', 'password');
});`
      }
    ],

    additionalResources: [
      {
        title: "TypeScript Official Handbook",
        url: "https://www.typescriptlang.org/docs/handbook/basic-types.html",
        type: "Documentation"
      },
      {
        title: "Playwright TypeScript Guide",
        url: "https://playwright.dev/docs/test-typescript",
        type: "Framework Docs"
      },
      {
        title: "Cypress TypeScript Support",
        url: "https://docs.cypress.io/guides/tooling/typescript-support",
        type: "Framework Docs"
      }
    ]
  };
};

const TypeScriptLesson = () => {
  const { lessonId } = useParams();
  const lesson = getLessonContent(lessonId || 'ts-basic-001');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <Link to="/master-typescript" className="inline-flex items-center text-primary hover:text-primary-hover mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to TypeScript Courses
          </Link>

          {/* Lesson Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary">{lesson.level}</Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <PlayCircle className="w-3 h-3" />
                {lesson.duration}
              </Badge>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
              {lesson.title}
            </h1>
          </div>

          {/* Learning Objectives */}
          <Card className="mb-8 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Learning Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {lesson.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{obj}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* The 5 Whys */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                The 5 Whys - Understanding the Purpose
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {lesson.whyItMatters.map((why, idx) => (
                  <AccordionItem key={idx} value={`why-${idx}`}>
                    <AccordionTrigger className="text-left">
                      {why.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">{why.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Concept Explanation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Core Concept</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {lesson.concept}
              </p>
            </CardContent>
          </Card>

          {/* Implementation Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                Implementation Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic TypeScript */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Basic TypeScript</h3>
                <pre className="bg-muted p-6 rounded-lg overflow-x-auto border">
                  <code className="text-sm font-mono">{lesson.implementation.basic}</code>
                </pre>
              </div>

              {/* Playwright Example */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Playwright Framework Usage</h3>
                <pre className="bg-muted p-6 rounded-lg overflow-x-auto border">
                  <code className="text-sm font-mono">{lesson.implementation.playwright}</code>
                </pre>
              </div>

              {/* Cypress Example */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Cypress Framework Usage</h3>
                <pre className="bg-muted p-6 rounded-lg overflow-x-auto border">
                  <code className="text-sm font-mono">{lesson.implementation.cypress}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Why This Matters in Production
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {lesson.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-muted/50 p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2 text-foreground">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{benefit.description}</p>
                    <p className="text-xs text-muted-foreground italic">Example: {benefit.example}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Common Mistakes */}
          <Card className="mb-8 border-destructive/20">
            <CardHeader>
              <CardTitle className="text-destructive">Common Mistakes to Avoid</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lesson.commonMistakes.map((mistake, idx) => (
                  <div key={idx} className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
                    <h4 className="font-semibold text-destructive mb-2">❌ {mistake.mistake}</h4>
                    <p className="text-sm text-muted-foreground mb-2"><strong>Why it's bad:</strong> {mistake.why}</p>
                    <p className="text-sm text-success"><strong>✓ Fix:</strong> {mistake.fix}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Practice Exercises */}
          <Card className="mb-8 border-success/20">
            <CardHeader>
              <CardTitle className="text-success">Practice Exercises</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {lesson.practiceExercises.map((exercise, idx) => (
                  <AccordionItem key={idx} value={`exercise-${idx}`}>
                    <AccordionTrigger className="text-left">
                      <div>
                        <div className="font-semibold">{exercise.title}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          <Badge variant="outline" className="text-xs">{exercise.difficulty}</Badge>
                          <span className="ml-2">{exercise.description}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold mb-2">Task:</h5>
                          <p className="text-muted-foreground whitespace-pre-line">{exercise.task}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2 text-success">Solution:</h5>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto border">
                            <code className="text-sm font-mono">{exercise.solution}</code>
                          </pre>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Additional Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {lesson.additionalResources.map((resource, idx) => (
                  <a
                    key={idx}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-muted/50 p-4 rounded-lg border hover:border-primary transition-colors"
                  >
                    <Badge variant="secondary" className="mb-2">{resource.type}</Badge>
                    <h4 className="font-semibold text-sm text-foreground">{resource.title}</h4>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            <Button variant="outline" asChild>
              <Link to="/master-typescript">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Courses
              </Link>
            </Button>
            <Button variant="default">
              Next Lesson
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TypeScriptLesson;
