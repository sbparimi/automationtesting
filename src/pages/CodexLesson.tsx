import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Clock, BookOpen, CheckCircle2, Code, Lightbulb, Target, Zap, Bot } from "lucide-react";
import { allCodexCourses } from "@/data/codexLessons";

const CodexLesson = () => {
  const { lessonId } = useParams();
  
  // Flatten all lessons from all courses and sections
  let allLessons: any[] = [];
  
  for (const course of allCodexCourses) {
    for (const section of course.sections) {
      allLessons = [...allLessons, ...section.lessons];
    }
  }
  
  for (const course of allCodexCourses) {
    for (const section of course.sections) {
      const index = section.lessons.findIndex(l => l.id === lessonId);
      if (index !== -1) {
        currentLesson = section.lessons[index];
        currentCourse = course;
        lessonIndex = allLessons.findIndex(l => l.id === lessonId);
        break;
      }
    }
    if (currentLesson) break;
  }
  
  if (!currentLesson || !currentCourse) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Lesson Not Found</h1>
          <Link to="/codex-course">
            <Button>Back to Course</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const prevLesson = lessonIndex > 0 ? allLessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < allLessons.length - 1 ? allLessons[lessonIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              to="/codex-course" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to AI-Powered Testing Course
            </Link>
          </div>
          
          {/* Lesson Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                <Bot className="w-3 h-3 mr-1" />
                {currentCourse.level}
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Clock className="w-3 h-3" />
                {currentLesson.duration}
              </Badge>
              <Badge variant="outline">
                Lesson {lessonIndex + 1} of {allLessons.length}
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {currentLesson.title}
            </h1>
            
            <p className="text-lg text-muted-foreground">
              {currentLesson.description}
            </p>
          </div>
          
          {/* Lesson Content */}
          <div className="prose prose-lg max-w-none">
            {/* STAR Method Introduction */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 mb-8 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground m-0">Learning Objectives (STAR Method)</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background/50 rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">S</span>
                    Situation
                  </h3>
                  <p className="text-muted-foreground text-sm m-0">
                    Understand the real-world scenario where this AI-assisted technique applies to Playwright/Cypress automation.
                  </p>
                </div>
                
                <div className="bg-background/50 rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">T</span>
                    Task
                  </h3>
                  <p className="text-muted-foreground text-sm m-0">
                    Define the specific automation challenge you'll solve using AI assistance.
                  </p>
                </div>
                
                <div className="bg-background/50 rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">A</span>
                    Action
                  </h3>
                  <p className="text-muted-foreground text-sm m-0">
                    Step-by-step implementation using Copilot prompts and VSCode workflows.
                  </p>
                </div>
                
                <div className="bg-background/50 rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">R</span>
                    Result
                  </h3>
                  <p className="text-muted-foreground text-sm m-0">
                    Validate your implementation and measure productivity gains.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Key Concepts */}
            <div className="bg-card border border-border rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-foreground" />
                </div>
                <h2 className="text-xl font-bold text-foreground m-0">Key Concepts</h2>
              </div>
              
              <ul className="space-y-3 m-0 p-0 list-none">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">How to structure prompts for maximum AI code generation quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">VSCode shortcuts and Copilot features for rapid test development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Production-grade patterns that AI generates reliably</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">When to accept, modify, or reject AI suggestions</span>
                </li>
              </ul>
            </div>
            
            {/* Code Example */}
            <div className="bg-secondary rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-secondary-foreground m-0">Sample Prompt & Output</h2>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-secondary-foreground/70 mb-2">💬 Prompt to Copilot:</p>
                <pre className="bg-background/10 rounded-lg p-4 text-sm text-secondary-foreground overflow-x-auto">
                  <code>{`// Generate a Playwright page object for a login page with:
// - Email and password input fields
// - Login button with loading state handling
// - Error message validation
// - Successful login redirect verification`}</code>
                </pre>
              </div>
              
              <div>
                <p className="text-sm text-secondary-foreground/70 mb-2">🤖 AI-Generated Output:</p>
                <pre className="bg-background/10 rounded-lg p-4 text-sm text-secondary-foreground overflow-x-auto">
                  <code>{`import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly loadingSpinner: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByLabel('Email');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.getByRole('alert');
    this.loadingSpinner = page.getByTestId('loading-spinner');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.loadingSpinner.waitFor({ state: 'hidden' });
  }

  async expectError(message: string) {
    await expect(this.errorMessage).toContainText(message);
  }

  async expectSuccessfulLogin() {
    await expect(this.page).toHaveURL(/dashboard/);
  }
}`}</code>
                </pre>
              </div>
            </div>
            
            {/* Practice Exercise */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-2xl p-6 mb-8 border border-green-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-foreground m-0">Practice Exercise</h2>
              </div>
              
              <ol className="space-y-3 m-0 p-0 list-none">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                  <span className="text-foreground">Open VSCode with your test project and activate Copilot</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                  <span className="text-foreground">Write a comment describing the page object you need</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                  <span className="text-foreground">Accept the AI suggestion and run your tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                  <span className="text-foreground">Iterate on the prompt to improve the output</span>
                </li>
              </ol>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-border">
            {prevLesson ? (
              <Link to={`/codex-lesson/${prevLesson.id}`}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous:</span> {prevLesson.title.slice(0, 25)}...
                </Button>
              </Link>
            ) : (
              <div />
            )}
            
            {nextLesson ? (
              <Link to={`/codex-lesson/${nextLesson.id}`}>
                <Button className="gap-2">
                  <span className="hidden sm:inline">Next:</span> {nextLesson.title.slice(0, 25)}...
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            ) : (
              <Link to="/codex-course">
                <Button className="gap-2">
                  Complete Course
                  <CheckCircle2 className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CodexLesson;
