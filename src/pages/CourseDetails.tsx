import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, MessageCircle, Clock, User, CheckCircle } from "lucide-react";

const CourseDetails = () => {
  const { pathId, courseId } = useParams<{ pathId: string; courseId: string }>();
  
  const courseData = {
    title: "Introduction to Playwright",
    description: "Master the fundamentals of Playwright automation testing with production-ready TypeScript implementation",
    level: "Beginner",
    duration: "5 days intensive",
    prerequisite: "Basic JavaScript/TypeScript knowledge",
    learningOutcomes: [
      "Set up Playwright testing environment",
      "Write your first automated tests",
      "Understand locator strategies",
      "Implement Page Object Model",
      "Generate and analyze test reports"
    ]
  };

  const dayWiseLessons = [
    {
      day: 1,
      title: "Environment Setup & First Test",
      duration: "2-3 hours",
      topics: [
        "Installing Node.js and npm/yarn",
        "Playwright installation and configuration", 
        "Understanding project structure",
        "Writing your first test",
        "Running tests and viewing results"
      ],
      practicalExercise: "Create a simple login test for a demo application",
      codeSnippet: `// Your first Playwright test
import { test, expect } from '@playwright/test';

test('basic navigation test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});`
    },
    {
      day: 2,
      title: "Locator Strategies & Element Interaction",
      duration: "3-4 hours",
      topics: [
        "Understanding different locator types",
        "Best practices for element selection",
        "Handling dynamic elements",
        "Wait strategies and timeouts",
        "Form interactions and validations"
      ],
      practicalExercise: "Build a comprehensive form testing suite",
      codeSnippet: `// Advanced locator strategies
const submitButton = page.getByRole('button', { name: 'Submit' });
const emailField = page.locator('[data-testid="email-input"]');
const errorMessage = page.getByText('Email is required');

await emailField.fill('user@example.com');
await submitButton.click();
await expect(errorMessage).toBeVisible();`
    },
    {
      day: 3,
      title: "Page Object Model Implementation",
      duration: "4-5 hours", 
      topics: [
        "Page Object Model design pattern",
        "Creating reusable page classes",
        "Organizing test code structure",
        "Implementing base page functionality",
        "Managing test data effectively"
      ],
      practicalExercise: "Refactor existing tests using Page Object Model",
      codeSnippet: `// Page Object Model example
export class LoginPage {
  constructor(private page: Page) {}
  
  get emailInput() {
    return this.page.locator('[data-testid="email"]');
  }
  
  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.page.locator('[data-testid="password"]').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}`
    },
    {
      day: 4,
      title: "Advanced Testing Patterns",
      duration: "4-5 hours",
      topics: [
        "API testing integration",
        "Visual testing basics",
        "Mobile testing setup",
        "Cross-browser testing",
        "Performance testing fundamentals"
      ],
      practicalExercise: "Create a comprehensive test suite covering UI and API",
      codeSnippet: `// API + UI integration test
test('end-to-end user journey', async ({ page, request }) => {
  // Create user via API
  const user = await request.post('/api/users', {
    data: { name: 'Test User', email: 'test@example.com' }
  });
  
  // Verify user in UI
  await page.goto('/users');
  await expect(page.getByText('Test User')).toBeVisible();
});`
    },
    {
      day: 5,
      title: "Reporting & CI/CD Integration",
      duration: "3-4 hours",
      topics: [
        "Generating detailed test reports",
        "Screenshot and video capture",
        "Trace viewer analysis",
        "Setting up GitHub Actions",
        "Continuous integration best practices"
      ],
      practicalExercise: "Setup complete CI/CD pipeline with reporting",
      codeSnippet: `// playwright.config.ts - Production configuration
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [
    ['html'],
    ['allure-playwright'],
    ['junit', { outputFile: 'results.xml' }]
  ],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});`
    }
  ];

  const handleBuyNow = () => {
    const message = `Hi Suresh, I'm interested in purchasing the ${courseData.title} course for $10. Please provide me with access details.`;
    const whatsappUrl = `https://wa.me/31616270233?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Link to="/learning-paths" className="inline-flex items-center text-primary hover:text-primary-hover mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Learning Paths
            </Link>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <Badge className="mb-4">{courseData.level}</Badge>
                  <h1 className="text-4xl font-bold text-foreground mb-4">
                    {courseData.title}
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    {courseData.description}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{courseData.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{courseData.prerequisite}</span>
                    </div>
                  </div>
                </div>

                <Tabs defaultValue="curriculum" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="curriculum">Daily Curriculum</TabsTrigger>
                    <TabsTrigger value="outcomes">Learning Outcomes</TabsTrigger>
                    <TabsTrigger value="exercises">Practical Exercises</TabsTrigger>
                  </TabsList>

                  <TabsContent value="curriculum" className="space-y-6">
                    {dayWiseLessons.map((lesson) => (
                      <Card key={lesson.day}>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                              {lesson.day}
                            </div>
                            {lesson.title}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {lesson.duration}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Topics Covered:</h4>
                              <ul className="space-y-1">
                                {lesson.topics.map((topic, index) => (
                                  <li key={index} className="flex items-center gap-2 text-sm">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span>{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-2">Practical Exercise:</h4>
                              <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                                {lesson.practicalExercise}
                              </p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-2">Code Example:</h4>
                              <div className="bg-card border border-border rounded-lg p-4">
                                <pre className="text-sm text-muted-foreground overflow-x-auto">
                                  {lesson.codeSnippet}
                                </pre>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="outcomes" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>What You'll Master</CardTitle>
                        <CardDescription>
                          By the end of this course, you'll have production-ready skills that you can apply immediately in any enterprise project.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4">
                          {courseData.learningOutcomes.map((outcome, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                              <span>{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="exercises" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Hands-On Projects</CardTitle>
                        <CardDescription>
                          Real-world projects that simulate enterprise-level testing scenarios
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="border border-border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">Project 1: E-commerce Testing Suite</h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              Build a comprehensive test suite for an e-commerce application covering user registration, product search, cart management, and checkout process.
                            </p>
                            <div className="flex gap-2">
                              <Badge variant="secondary">Page Objects</Badge>
                              <Badge variant="secondary">Data-Driven</Badge>
                              <Badge variant="secondary">Cross-Browser</Badge>
                            </div>
                          </div>
                          
                          <div className="border border-border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">Project 2: API + UI Integration</h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              Create tests that validate data flow between API endpoints and UI components, ensuring end-to-end functionality.
                            </p>
                            <div className="flex gap-2">
                              <Badge variant="secondary">API Testing</Badge>
                              <Badge variant="secondary">UI Validation</Badge>
                              <Badge variant="secondary">Data Verification</Badge>
                            </div>
                          </div>
                          
                          <div className="border border-border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">Project 3: CI/CD Pipeline Setup</h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              Configure a complete CI/CD pipeline with automated test execution, reporting, and notifications.
                            </p>
                            <div className="flex gap-2">
                              <Badge variant="secondary">GitHub Actions</Badge>
                              <Badge variant="secondary">Reporting</Badge>
                              <Badge variant="secondary">Notifications</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Enroll Now</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="text-3xl font-bold text-primary">$10</div>
                    <p className="text-sm text-muted-foreground">
                      Lifetime access • Complete materials • 1:1 support
                    </p>
                    <Button 
                      className="w-full bg-primary hover:bg-primary-hover"
                      onClick={handleBuyNow}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Buy via WhatsApp
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Course Includes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>5 days of structured content</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>Production-ready code examples</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>Hands-on practical exercises</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>Complete project templates</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>CI/CD integration guides</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>Direct support via WhatsApp</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>About the Instructor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm space-y-2">
                      <p className="font-semibold">Suresh Parimi</p>
                      <p className="text-muted-foreground">
                        18+ years in automation governance, test management, and driving transformations in software testing with Playwright and TypeScript.
                      </p>
                      <p className="text-muted-foreground">
                        Trusted by companies like Crossover Health, Canon Europe, Philips, Dolby, and Pfizer.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetails;