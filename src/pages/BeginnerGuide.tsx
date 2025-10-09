import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Target, Workflow, FolderTree, Briefcase, Users, LineChart, Zap, Wrench } from "lucide-react";
import { InstallationGuide } from "@/components/InstallationGuide";

const BeginnerGuide = () => {
  const sections = [
    {
      id: "getting-started",
      title: "Getting Started with Playwright",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Installation, setup, and your first test",
      content: {
        basic: {
          title: "Basic Setup",
          points: [
            "Installing Playwright using npm or yarn package manager",
            "Understanding the project structure and configuration files",
            "Running your first test with npx playwright test command",
            "Viewing test results in the terminal output",
            "Understanding test files and basic test syntax"
          ],
          code: `// Install Playwright
npm init playwright@latest

// Your first test
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});`
        },
        intermediate: {
          title: "Configuration & Options",
          points: [
            "Customizing playwright.config.ts for your project needs",
            "Setting up multiple browsers (Chromium, Firefox, WebKit)",
            "Configuring base URL and timeout settings",
            "Understanding test reporters and output formats",
            "Setting up test directories and file patterns"
          ],
          code: `// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:3000',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  ],
});`
        },
        advanced: {
          title: "Advanced Setup Patterns",
          points: [
            "Implementing custom test fixtures and global setup",
            "Configuring parallel execution and sharding strategies",
            "Setting up trace viewer and debugging tools",
            "Managing environment-specific configurations",
            "Implementing CI/CD pipeline integration basics"
          ],
          code: `// global-setup.ts
async function globalSetup() {
  // Database setup, auth tokens, etc.
  console.log('Global setup running...');
}

export default globalSetup;

// Using in config
export default defineConfig({
  globalSetup: require.resolve('./global-setup'),
  workers: 4, // Parallel execution
  retries: 2, // Retry failed tests
});`
        }
      }
    },
    {
      id: "locators",
      title: "Locators and Selectors",
      icon: <Target className="w-6 h-6" />,
      description: "Finding elements efficiently and reliably",
      content: {
        basic: {
          title: "Basic Locator Strategies",
          points: [
            "Using getByRole for accessible element selection",
            "Finding elements by text with getByText",
            "Locating by placeholder and label attributes",
            "Understanding test ID locators (data-testid)",
            "Basic CSS selectors for simple element targeting"
          ],
          code: `// Recommended locator strategies
await page.getByRole('button', { name: 'Submit' }).click();
await page.getByText('Welcome').isVisible();
await page.getByPlaceholder('Enter email').fill('test@example.com');
await page.getByLabel('Password').fill('secret');
await page.getByTestId('login-button').click();`
        },
        intermediate: {
          title: "Advanced Locators",
          points: [
            "Chaining locators for precise element targeting",
            "Using filters to narrow down element matches",
            "Working with nth and first/last element selection",
            "Implementing locator assertions with expect",
            "Handling dynamic content and element states"
          ],
          code: `// Advanced locator patterns
const product = page.getByRole('listitem')
  .filter({ hasText: 'Premium' })
  .first();
await product.click();

// Locator assertions
await expect(page.getByRole('alert')).toBeVisible();
await expect(page.getByRole('heading')).toHaveText('Dashboard');

// Chaining
await page.locator('.container')
  .locator('button')
  .nth(2)
  .click();`
        },
        advanced: {
          title: "Complex Locator Patterns",
          points: [
            "Creating reusable custom locator functions",
            "Implementing auto-waiting and retry strategies",
            "Using XPath for complex DOM navigation",
            "Building locator maps for page objects",
            "Implementing self-healing locator patterns"
          ],
          code: `// Custom locator utilities
class CustomLocators {
  static getByDataAttribute(page: Page, attr: string, value: string) {
    return page.locator(\`[data-\${attr}="\${value}"]\`);
  }
  
  static getCardByTitle(page: Page, title: string) {
    return page.locator('.card')
      .filter({ has: page.locator(\`h3:has-text("\${title}")\`) });
  }
}

// Usage
await CustomLocators.getByDataAttribute(page, 'test-id', 'submit-btn').click();
await CustomLocators.getCardByTitle(page, 'Product A').click();`
        }
      }
    },
    {
      id: "actions",
      title: "Actions and Assertions",
      icon: <Code className="w-6 h-6" />,
      description: "Interacting with elements and verifying results",
      content: {
        basic: {
          title: "Basic User Actions",
          points: [
            "Clicking buttons and links with .click()",
            "Filling input fields using .fill() method",
            "Selecting dropdown options with .selectOption()",
            "Checking and unchecking checkboxes",
            "Basic keyboard and mouse interactions"
          ],
          code: `// Basic actions
await page.getByRole('button', { name: 'Login' }).click();
await page.getByLabel('Email').fill('user@example.com');
await page.getByLabel('Country').selectOption('USA');
await page.getByRole('checkbox', { name: 'Accept terms' }).check();

// Keyboard actions
await page.keyboard.press('Enter');
await page.keyboard.type('Hello World');`
        },
        intermediate: {
          title: "Complex Interactions",
          points: [
            "Implementing drag and drop operations",
            "Handling file uploads and downloads",
            "Working with hover states and tooltips",
            "Managing multiple tabs and windows",
            "Executing JavaScript in the browser context"
          ],
          code: `// File upload
await page.getByLabel('Upload').setInputFiles('path/to/file.pdf');

// Drag and drop
await page.locator('.draggable').dragTo(page.locator('.drop-zone'));

// Hover actions
await page.getByRole('button', { name: 'Menu' }).hover();
await expect(page.getByRole('tooltip')).toBeVisible();

// Multiple tabs
const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  page.getByRole('link', { name: 'Open in new tab' }).click()
]);`
        },
        advanced: {
          title: "Advanced Assertions & Custom Actions",
          points: [
            "Creating custom matchers and assertions",
            "Implementing soft assertions for non-blocking checks",
            "Using visual regression testing techniques",
            "Building reusable action sequences",
            "Implementing retry logic for flaky operations"
          ],
          code: `// Soft assertions
await expect.soft(page.getByText('Item 1')).toBeVisible();
await expect.soft(page.getByText('Item 2')).toBeVisible();
// Test continues even if assertions fail

// Custom actions
class PageActions {
  static async loginAs(page: Page, role: 'admin' | 'user') {
    const credentials = {
      admin: { email: 'admin@test.com', password: 'admin123' },
      user: { email: 'user@test.com', password: 'user123' }
    };
    await page.getByLabel('Email').fill(credentials[role].email);
    await page.getByLabel('Password').fill(credentials[role].password);
    await page.getByRole('button', { name: 'Login' }).click();
  }
}

// Usage
await PageActions.loginAs(page, 'admin');`
        }
      }
    },
    {
      id: "navigation",
      title: "Page Navigation and Waiting",
      icon: <Workflow className="w-6 h-6" />,
      description: "Managing page loads and dynamic content",
      content: {
        basic: {
          title: "Basic Navigation",
          points: [
            "Navigating to URLs with page.goto()",
            "Understanding auto-waiting mechanisms",
            "Using page.reload() and page.goBack()",
            "Waiting for page load states",
            "Basic timeout configurations"
          ],
          code: `// Navigation basics
await page.goto('https://example.com');
await page.goto('https://example.com', { waitUntil: 'domcontentloaded' });

// Navigation actions
await page.reload();
await page.goBack();
await page.goForward();

// Wait for load
await page.waitForLoadState('networkidle');`
        },
        intermediate: {
          title: "Advanced Waiting Strategies",
          points: [
            "Waiting for specific elements and conditions",
            "Using waitForSelector with custom timeouts",
            "Implementing waitForResponse for API calls",
            "Handling navigation events and redirects",
            "Working with dynamic content loading"
          ],
          code: `// Wait for elements
await page.waitForSelector('.product-list', { state: 'visible' });

// Wait for API response
await page.waitForResponse(resp => 
  resp.url().includes('/api/products') && resp.status() === 200
);

// Wait for function
await page.waitForFunction(() => 
  document.querySelectorAll('.item').length > 5
);

// Wait for navigation
await Promise.all([
  page.waitForNavigation(),
  page.getByRole('link', { name: 'Next' }).click()
]);`
        },
        advanced: {
          title: "Complex Navigation Patterns",
          points: [
            "Implementing custom wait utilities and helpers",
            "Managing single-page application routing",
            "Handling race conditions and timing issues",
            "Building navigation state machines",
            "Implementing smart retry mechanisms"
          ],
          code: `// Custom wait utilities
class WaitHelpers {
  static async waitForStableDOM(page: Page, timeout = 5000) {
    let previousHTML = '';
    const startTime = Date.now();
    
    while (Date.now() - startTime < timeout) {
      const currentHTML = await page.content();
      if (currentHTML === previousHTML) {
        await page.waitForTimeout(100);
        return;
      }
      previousHTML = currentHTML;
      await page.waitForTimeout(100);
    }
  }
  
  static async waitForAPICall(page: Page, endpoint: string) {
    return page.waitForResponse(
      resp => resp.url().includes(endpoint) && resp.ok(),
      { timeout: 10000 }
    );
  }
}

// Usage
await WaitHelpers.waitForStableDOM(page);
await WaitHelpers.waitForAPICall(page, '/api/data');`
        }
      }
    },
    {
      id: "test-structure",
      title: "Test Structure and Organization",
      icon: <FolderTree className="w-6 h-6" />,
      description: "Organizing tests effectively for maintainability",
      content: {
        basic: {
          title: "Basic Test Structure",
          points: [
            "Understanding test() and describe() blocks",
            "Using beforeEach and afterEach hooks",
            "Organizing tests into logical test suites",
            "Writing descriptive test names and documentation",
            "Basic file and folder organization patterns"
          ],
          code: `// Basic test structure
import { test, expect } from '@playwright/test';

describe('Login Feature', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('should login with valid credentials', async ({ page }) => {
    await page.getByLabel('Email').fill('user@example.com');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();
    
    await expect(page).toHaveURL('/dashboard');
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await page.getByLabel('Email').fill('wrong@example.com');
    await page.getByLabel('Password').fill('wrong');
    await page.getByRole('button', { name: 'Login' }).click();
    
    await expect(page.getByRole('alert')).toBeVisible();
  });
});`
        },
        intermediate: {
          title: "Advanced Test Organization",
          points: [
            "Creating custom fixtures for test data",
            "Implementing test annotations and tags",
            "Using test.step() for detailed reporting",
            "Organizing tests by user journey and feature",
            "Implementing data-driven test patterns"
          ],
          code: `// Custom fixtures
import { test as base } from '@playwright/test';

type MyFixtures = {
  authenticatedPage: Page;
};

const test = base.extend<MyFixtures>({
  authenticatedPage: async ({ page }, use) => {
    await page.goto('/login');
    await page.getByLabel('Email').fill('user@test.com');
    await page.getByLabel('Password').fill('password');
    await page.getByRole('button', { name: 'Login' }).click();
    await use(page);
  },
});

// Test annotations
test('admin workflow', {
  tag: '@smoke',
  annotation: { type: 'issue', description: 'Related to JIRA-123' }
}, async ({ authenticatedPage }) => {
  // Test using authenticated page
});

// Test steps
test('checkout process', async ({ page }) => {
  await test.step('Add items to cart', async () => {
    await page.getByRole('button', { name: 'Add to Cart' }).click();
  });
  
  await test.step('Proceed to checkout', async () => {
    await page.getByRole('link', { name: 'Checkout' }).click();
  });
});`
        },
        advanced: {
          title: "Enterprise Test Architecture",
          points: [
            "Building page object models for reusability",
            "Implementing test factory patterns",
            "Creating shared utilities and helper libraries",
            "Managing test data and environment configurations",
            "Implementing parallel execution strategies"
          ],
          code: `// Page Object Model
class LoginPage {
  constructor(private page: Page) {}
  
  async navigate() {
    await this.page.goto('/login');
  }
  
  async login(email: string, password: string) {
    await this.page.getByLabel('Email').fill(email);
    await this.page.getByLabel('Password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
  
  async getErrorMessage() {
    return this.page.getByRole('alert').textContent();
  }
}

// Test factory
class TestDataFactory {
  static createUser(override = {}) {
    return {
      email: 'user@test.com',
      password: 'password123',
      name: 'Test User',
      ...override
    };
  }
}

// Usage in tests
test('user workflow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const user = TestDataFactory.createUser();
  
  await loginPage.navigate();
  await loginPage.login(user.email, user.password);
  
  await expect(page).toHaveURL('/dashboard');
});`
        }
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-hero">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-button rounded-3xl shadow-glow mb-6 animate-float">
            <BookOpen className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Playwright for Beginners
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master the fundamentals of Playwright test automation. Each topic progresses from basic concepts to advanced patterns, all scoped for beginner-level understanding.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="installation" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 max-w-2xl mx-auto">
              <TabsTrigger value="installation"><Wrench className="w-4 h-4 mr-2" />Installation</TabsTrigger>
              <TabsTrigger value="tutorial"><BookOpen className="w-4 h-4 mr-2" />Tutorials</TabsTrigger>
              <TabsTrigger value="journey"><Briefcase className="w-4 h-4 mr-2" />My Journey</TabsTrigger>
            </TabsList>

            <TabsContent value="installation" className="space-y-6">
              <InstallationGuide />
            </TabsContent>

            <TabsContent value="tutorial" className="space-y-12">
          {sections.map((section, index) => (
            <Card key={section.id} className="overflow-hidden border-2 hover:shadow-warm transition-all duration-300 bg-gradient-card">
              <CardHeader className="bg-gradient-warm border-b">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-button rounded-2xl flex items-center justify-center shadow-glow">
                    {section.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground">
                      {index + 1}. {section.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-1">
                      {section.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="basic">Basic</TabsTrigger>
                    <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                    <TabsTrigger value="advanced">Advanced</TabsTrigger>
                  </TabsList>
                  
                  {Object.entries(section.content).map(([level, content]) => (
                    <TabsContent key={level} value={level} className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-foreground">
                          {content.title}
                        </h3>
                        <ul className="space-y-3 mb-6">
                          {content.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                              </div>
                              <span className="text-muted-foreground">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-muted/50 rounded-xl p-6 border">
                        <h4 className="text-sm font-semibold mb-3 text-foreground uppercase tracking-wide">
                          Code Example
                        </h4>
                        <pre className="overflow-x-auto">
                          <code className="text-sm text-foreground font-mono">
                            {content.code}
                          </code>
                        </pre>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          ))}
            </TabsContent>

            {/* My Journey Tab */}
            <TabsContent value="journey" className="space-y-12">
              {/* Canon Experience */}
              <Card className="overflow-hidden border-2 hover:shadow-warm transition-all duration-300 bg-gradient-card">
                <CardHeader className="bg-gradient-warm border-b">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-button rounded-2xl flex items-center justify-center shadow-glow">
                      <Briefcase className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">
                        Canon - Test Automation Architect
                      </CardTitle>
                      <CardDescription className="text-base mt-1">
                        Modernizing enterprise test automation infrastructure
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      The Challenge
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      When I joined Canon, the organization was facing critical challenges in their test automation landscape. Legacy automation tools were creating bottlenecks in the CI/CD pipeline, test maintenance costs were escalating, and defect leakage to production was impacting customer satisfaction. The existing framework lacked scalability, making it difficult to keep pace with rapid application modernization across Oracle Analytics, Salesforce, and ServiceNow platforms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Building the Solution
                    </h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Enterprise Framework Architecture:</strong> Designed and implemented a scalable Playwright framework supporting Web and API automation across multiple enterprise applications (Oracle Analytics, Salesforce, ServiceNow)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">BDD with Gherkin:</strong> Integrated Behavior-Driven Development using Cucumber and Gherkin syntax, enabling non-technical stakeholders to contribute to test scenarios and improve collaboration
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Page Object Model (POM):</strong> Architected maintainable test structure using POM pattern with TypeScript, reducing code duplication by 60% and improving test reliability
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">CI/CD Integration:</strong> Integrated framework with GitLab CI/CD pipelines, enabling automated test execution on every commit and reducing deployment cycles from weeks to days
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">JIRA Integration:</strong> Built seamless integration with JIRA for defect tracking and test case management, providing real-time traceability between requirements and test execution
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Mobile Automation:</strong> Extended framework capabilities to mobile platforms using Appium, providing unified automation approach across web and mobile applications
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                      <Code className="w-5 h-5 text-primary" />
                      Advanced Playwright Features Implemented
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4 border">
                        <h4 className="font-semibold mb-2 text-foreground">Network Interception & Monitoring</h4>
                        <p className="text-sm text-muted-foreground">Implemented network trace analysis to capture and validate API calls, monitor performance metrics, and detect security vulnerabilities during test execution</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 border">
                        <h4 className="font-semibold mb-2 text-foreground">Console Log Analysis</h4>
                        <p className="text-sm text-muted-foreground">Automated detection of console errors and warnings, integrating them into test reports to catch JavaScript errors before they reach production</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 border">
                        <h4 className="font-semibold mb-2 text-foreground">Uncaught Exception Handling</h4>
                        <p className="text-sm text-muted-foreground">Built robust error handling mechanisms to capture and report uncaught exceptions, improving test stability and debugging efficiency</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 border">
                        <h4 className="font-semibold mb-2 text-foreground">Allure Reporting</h4>
                        <p className="text-sm text-muted-foreground">Configured comprehensive Allure test reports with screenshots, videos, network logs, and execution trends for stakeholder visibility</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 border">
                        <h4 className="font-semibold mb-2 text-foreground">Test Data Management</h4>
                        <p className="text-sm text-muted-foreground">Designed dynamic test data factories with environment-specific configurations, supporting parallel execution across multiple test environments</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 border">
                        <h4 className="font-semibold mb-2 text-foreground">Visual Regression Testing</h4>
                        <p className="text-sm text-muted-foreground">Implemented automated visual comparison testing to catch UI regressions across different browsers and viewport sizes</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                      <LineChart className="w-5 h-5 text-primary" />
                      Impact & Results
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        Reduced test execution time by 70% through parallel execution strategies
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        Increased automated test coverage from 30% to 85% across critical user journeys
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        Decreased defect leakage to production by 45% within first 6 months
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        Established test automation best practices adopted across 5+ engineering teams
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Dolby Experience */}
              <Card className="overflow-hidden border-2 hover:shadow-warm transition-all duration-300 bg-gradient-card">
                <CardHeader className="bg-gradient-warm border-b">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-button rounded-2xl flex items-center justify-center shadow-glow">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">
                        Dolby - Lead QA Engineer
                      </CardTitle>
                      <CardDescription className="text-base mt-1">
                        Leading automation for high-availability streaming platforms
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Mission & Scope
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Joined Dolby to revolutionize quality assurance for their billing solutions powering online streaming applications serving millions of users. The challenge was to build a robust automation framework that could ensure 99.99% uptime while supporting rapid feature deployment in a high-stakes financial processing environment.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                      <Workflow className="w-5 h-5 text-primary" />
                      Framework Implementation
                    </h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Page Object Model Architecture:</strong> Designed enterprise-grade POM framework for billing solutions, ensuring maintainability and scalability across 50+ payment workflows
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Functional Test Coverage:</strong> Achieved 90% functional test automation coverage including E2E user journeys, regression suites, and System Integration Testing (SIT)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Defect Leakage Reduction:</strong> Implemented comprehensive test strategies that reduced production defects by 60% through enhanced validation of edge cases and payment processing scenarios
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Component Testing with Cypress:</strong> Collaborated with developers to implement component-level testing using Cypress, creating a joint responsibility model that improved code quality at the unit level
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">ReportPortal.io Integration:</strong> Configured advanced reporting with ReportPortal.io, providing real-time test insights, ML-powered failure analysis, and historical trend analysis
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Team Leadership
                    </h3>
                    <div className="bg-muted/50 rounded-lg p-4 border">
                      <p className="text-muted-foreground leading-relaxed">
                        Led a high-performing team of 4 test engineers, establishing best practices for test automation, code reviews, and knowledge sharing. Accelerated automation delivery by implementing agile testing methodologies and fostering close collaboration with development teams. Mentored junior engineers on Playwright advanced patterns, TypeScript best practices, and test architecture principles.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                      <Code className="w-5 h-5 text-primary" />
                      Advanced Technical Implementations
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4 border">
                        <h4 className="font-semibold mb-2 text-foreground">Network Trace Analysis</h4>
                        <p className="text-sm text-muted-foreground">Implemented sophisticated network monitoring to validate payment gateway integrations, track API response times, and ensure secure data transmission for PCI compliance</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 border">
                        <h4 className="font-semibold mb-2 text-foreground">Console Log Monitoring</h4>
                        <p className="text-sm text-muted-foreground">Automated capture and analysis of browser console logs to detect JavaScript errors, third-party script failures, and potential security vulnerabilities</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 border">
                        <h4 className="font-semibold mb-2 text-foreground">Exception Tracking</h4>
                        <p className="text-sm text-muted-foreground">Built comprehensive uncaught exception handlers to catch and report runtime errors, improving test reliability and accelerating root cause analysis</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 border">
                        <h4 className="font-semibold mb-2 text-foreground">Performance Monitoring</h4>
                        <p className="text-sm text-muted-foreground">Integrated performance metrics tracking within test execution to ensure billing pages met sub-2-second load time SLAs under various network conditions</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 border">
                        <h4 className="font-semibold mb-2 text-foreground">Test Data Factory Pattern</h4>
                        <p className="text-sm text-muted-foreground">Designed sophisticated test data generation strategies supporting complex billing scenarios, subscription models, and international payment methods</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 border">
                        <h4 className="font-semibold mb-2 text-foreground">CI/CD Pipeline Optimization</h4>
                        <p className="text-sm text-muted-foreground">Optimized test execution in CI/CD pipeline, reducing feedback cycle from 2 hours to 20 minutes through intelligent test parallelization and selective test execution</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                      <LineChart className="w-5 h-5 text-primary" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        Achieved 99.99% uptime for billing services through comprehensive automated testing
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        Reduced regression test cycle time from 3 days to 4 hours
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        Improved deployment confidence enabling bi-weekly releases instead of monthly
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        Zero critical billing defects in production for 12+ consecutive months
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        Established automation framework adopted as standard across 3 product lines
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Combined Technical Excellence */}
              <Card className="overflow-hidden border-2 hover:shadow-warm transition-all duration-300 bg-gradient-card">
                <CardHeader className="bg-gradient-warm border-b">
                  <CardTitle className="text-2xl text-foreground">
                    Technical Excellence Across Organizations
                  </CardTitle>
                  <CardDescription className="text-base mt-1">
                    Common patterns and advanced capabilities implemented across Canon and Dolby
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Code className="w-4 h-4 text-primary" />
                        Core Technologies
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Playwright with TypeScript</li>
                        <li>• Page Object Model (POM)</li>
                        <li>• BDD with Cucumber/Gherkin</li>
                        <li>• JIRA Integration</li>
                        <li>• GitLab CI/CD</li>
                        <li>• Cypress (Component Testing)</li>
                        <li>• Appium (Mobile Testing)</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        Advanced Features
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Network Trace Monitoring</li>
                        <li>• Console Log Analysis</li>
                        <li>• Uncaught Exception Handling</li>
                        <li>• Visual Regression Testing</li>
                        <li>• Performance Metrics Tracking</li>
                        <li>• API Automation</li>
                        <li>• Parallel Execution</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <LineChart className="w-4 h-4 text-primary" />
                        Reporting & Analytics
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Allure Reports (Canon)</li>
                        <li>• ReportPortal.io (Dolby)</li>
                        <li>• Test Execution Trends</li>
                        <li>• Failure Analysis</li>
                        <li>• Coverage Metrics</li>
                        <li>• Performance Dashboards</li>
                        <li>• Real-time Monitoring</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-warm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Practice?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Explore our framework implementations to see these concepts in action with real-world examples.
          </p>
          <a
            href="/#frameworks"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-button text-primary-foreground rounded-2xl font-semibold shadow-glow hover:shadow-warm transition-all duration-300"
          >
            Explore Frameworks
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BeginnerGuide;
