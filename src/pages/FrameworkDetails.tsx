import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HoverCardDetailed, HoverCardDetailedTrigger, HoverCardDetailedContent } from "@/components/ui/hover-card-detailed";
import { ArrowLeft, MessageCircle, Code, FileText, Layers, Clock, Target, Zap } from "lucide-react";
import { POMDiagram, KeywordDrivenDiagram, DataDrivenDiagram, HybridDiagram, BDDDiagram, APIDiagram } from "@/components/FrameworkDiagrams";

const frameworkData = {
  "page-object-model": {
    title: "Page Object Model Framework",
    description: "Industry-standard design pattern for maintainable and scalable test automation",
    icon: "📄",
    complexity: "Intermediate",
    benefits: [
      "Reduced code duplication",
      "Enhanced maintainability", 
      "Better code organization",
      "Improved test readability"
    ],
    technologies: ["TypeScript", "Playwright", "Jest", "Node.js"],
    DiagramComponent: POMDiagram
  },
  "keyword-driven": {
    title: "Keyword Driven Framework",
    description: "Data-driven approach using keywords to define test actions and behaviors",
    icon: "🔤",
    complexity: "Advanced",
    benefits: [
      "Non-technical team collaboration",
      "Reusable test components",
      "Simplified test maintenance",
      "Business-readable tests"
    ],
    technologies: ["TypeScript", "Excel/JSON", "Playwright", "Custom Engine"],
    DiagramComponent: KeywordDrivenDiagram
  },
  "data-driven": {
    title: "Data Driven Framework",
    description: "Execute tests with multiple data sets for comprehensive coverage",
    icon: "📊",
    complexity: "Intermediate",
    benefits: [
      "Multiple test scenarios",
      "External data sources",
      "Parameterized testing",
      "Comprehensive coverage"
    ],
    technologies: ["TypeScript", "CSV/JSON/Excel", "Playwright", "Database"],
    DiagramComponent: DataDrivenDiagram
  },
  "hybrid-framework": {
    title: "Hybrid Framework",
    description: "Combined approach leveraging multiple framework patterns",
    icon: "🔄",
    complexity: "Advanced",
    benefits: [
      "Best of all approaches",
      "Maximum flexibility",
      "Enterprise scalability",
      "Comprehensive solution"
    ],
    technologies: ["TypeScript", "Multiple Patterns", "Playwright", "Advanced Config"],
    DiagramComponent: HybridDiagram
  },
  "bdd-cucumber": {
    title: "BDD with Cucumber",
    description: "Behavior-driven development with Gherkin syntax",
    icon: "🥒",
    complexity: "Advanced",
    benefits: [
      "Business collaboration",
      "Living documentation",
      "Readable scenarios",
      "Stakeholder alignment"
    ],
    technologies: ["TypeScript", "Cucumber", "Gherkin", "Playwright"],
    DiagramComponent: BDDDiagram
  },
  "api-ui-integration": {
    title: "API + UI Integration",
    description: "Full-stack testing combining API and UI validation",
    icon: "🔗",
    complexity: "Expert",
    benefits: [
      "End-to-end validation",
      "Faster feedback loops",
      "Complete coverage",
      "Performance insights"
    ],
    technologies: ["TypeScript", "REST/GraphQL", "Playwright", "Performance Tools"],
    DiagramComponent: APIDiagram
  },
  "bdd-advanced-factory": {
    title: "BDD Advanced Factory Pattern",
    description: "Revolutionary enterprise BDD framework with TypeScript factory patterns enabling manual testers to create automation through pure Gherkin syntax",
    icon: "🏭",
    complexity: "Expert",
    benefits: [
      "Zero-code automation for manual testers",
      "Advanced TypeScript factory architecture",
      "AI-powered step generation",
      "Self-healing keyword system",
      "Enterprise governance and versioning"
    ],
    technologies: ["TypeScript", "Playwright", "Cucumber", "Gherkin", "Factory Pattern", "Decorators"],
    DiagramComponent: BDDDiagram
  }
};

const FrameworkDetails = () => {
  const { frameworkId } = useParams<{ frameworkId: string }>();
  const framework = frameworkData[frameworkId as keyof typeof frameworkData];

  if (!framework) {
    return <div>Framework not found</div>;
  }

  const handleBuyNow = () => {
    const message = `Hi Suresh, I'm interested in purchasing the ${framework.title} detailed implementation guide for $10. Please provide me with access details.`;
    const whatsappUrl = `https://wa.me/31616270233?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const levels = [
    {
      id: "beginner",
      title: "Beginner Level",
      duration: "Day 1-5 (4 hours/week)",
      description: "Foundation concepts and basic implementation",
      topics: [
        {
          name: "Framework introduction and concepts",
          details: "Deep dive into framework architecture, design patterns, and when to use this approach. Learn the fundamental concepts that make this framework production-ready.",
          practicalOutcome: "Build your first working test framework with proper structure"
        },
        {
          name: "Environment setup and configuration", 
          details: "Complete development environment setup including Node.js, TypeScript, VS Code extensions, and debugging tools. Configure Git, ESLint, and Prettier for team collaboration.",
          practicalOutcome: "Fully configured development environment ready for enterprise development"
        },
        {
          name: "Basic project structure",
          details: "Learn industry-standard folder organization, naming conventions, and file structure. Understand separation of concerns and maintainable code architecture.",
          practicalOutcome: "Create a scalable project structure that can grow with your team"
        },
        {
          name: "First test implementation",
          details: "Write your first automated test using best practices. Learn element selection, test data management, and assertion strategies that work in production.",
          practicalOutcome: "Working test that can be run in any environment with confidence"
        },
        {
          name: "Core patterns and practices",
          details: "Master essential patterns like Page Object Model basics, test data factories, and utility functions. Learn debugging techniques and error handling.",
          practicalOutcome: "Reusable components that save 50% development time on future tests"
        }
      ]
    },
    {
      id: "intermediate", 
      title: "Intermediate Level",
      duration: "Day 6-15 (4 hours/week)",
      description: "Advanced patterns and real-world implementation",
      topics: [
        {
          name: "Advanced design patterns",
          details: "Implement sophisticated patterns like Builder, Factory, and Strategy patterns for test automation. Learn composition over inheritance and create truly maintainable test suites.",
          practicalOutcome: "Enterprise-grade test architecture that scales to thousands of tests"
        },
        {
          name: "CI/CD integration with GitHub/GitLab",
          details: "Complete DevOps pipeline setup with automated test execution, parallel runs, and intelligent retry mechanisms. Configure test execution for different environments and branches.",
          practicalOutcome: "Fully automated CI/CD pipeline that runs tests on every commit"
        },
        {
          name: "Slack/Teams notifications setup",
          details: "Real-time notifications with rich formatting, test results, screenshots, and failure analysis. Set up different notification levels for different stakeholders.",
          practicalOutcome: "Automated communication system that keeps the team informed 24/7"
        },
        {
          name: "JIRA integration and reporting",
          details: "Automatic ticket creation for test failures, test execution reporting, and traceability matrix. Link test results to requirements and user stories.",
          practicalOutcome: "Seamless integration between testing and project management workflows"
        },
        {
          name: "Custom utilities and helpers",
          details: "Build a comprehensive utility library with database helpers, API utilities, file operations, and custom matchers. Create domain-specific test helpers.",
          practicalOutcome: "Reusable utility library that reduces test writing time by 70%"
        }
      ]
    },
    {
      id: "advanced",
      title: "Advanced Level", 
      duration: "Day 16-30 (4 hours/week)",
      description: "Enterprise-grade implementation and optimization",
      topics: [
        {
          name: "Military precision test architecture",
          details: "Build bulletproof test architecture with advanced error handling, retry mechanisms, and fault tolerance. Implement health checks, self-healing tests, and monitoring.",
          practicalOutcome: "Zero-maintenance test suite that handles any production scenario"
        },
        {
          name: "Allure reporting with trace viewer",
          details: "Comprehensive reporting with network traces, console logs, screenshots, and video recordings. Create executive dashboards and detailed technical reports.",
          practicalOutcome: "Professional reporting system that provides complete test execution insights"
        },
        {
          name: "Network-level debugging and monitoring",
          details: "Advanced debugging techniques with network interception, performance monitoring, and API mocking. Implement request/response validation and performance budgets.",
          practicalOutcome: "Complete visibility into application behavior during test execution"
        },
        {
          name: "Performance optimization techniques",
          details: "Optimize test execution speed with parallel processing, smart test selection, and resource management. Implement test impact analysis and flaky test detection.",
          practicalOutcome: "Test suite that runs 10x faster with 99.9% reliability"
        },
        {
          name: "Enterprise deployment strategies",
          details: "Production deployment with multiple environments, feature flags, canary releases, and rollback strategies. Implement test data management and environment provisioning.",
          practicalOutcome: "Enterprise-ready deployment pipeline with zero-downtime releases"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary-hover mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-3xl">
                {framework.icon}
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  {framework.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {framework.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <Badge variant="secondary">{framework.complexity}</Badge>
              <div className="flex gap-2">
                {framework.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="structure">Structure</TabsTrigger>
                  <TabsTrigger value="implementation">Implementation</TabsTrigger>
                  <TabsTrigger value="devops">DevOps</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Layers className="w-5 h-5" />
                        Framework Architecture
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted/50 p-6 rounded-lg mb-4">
                        <framework.DiagramComponent />
                      </div>
                      <h4 className="font-semibold mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {framework.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {levels.map((level) => (
                    <Card key={level.id}>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-gradient-button">
                            {level.id === 'beginner' && <Target className="w-5 h-5 text-foreground" />}
                            {level.id === 'intermediate' && <Zap className="w-5 h-5 text-foreground" />}
                            {level.id === 'advanced' && <Layers className="w-5 h-5 text-foreground" />}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{level.title}</CardTitle>
                            <CardDescription>
                              {level.duration} • {level.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {level.topics.map((topic, index) => (
                            <li key={index}>
                              <HoverCardDetailed>
                                <HoverCardDetailedTrigger asChild>
                                  <div className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                    <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                                    <div>
                                      <span className="text-sm font-medium hover:text-primary transition-colors">
                                        {topic.name}
                                      </span>
                                    </div>
                                  </div>
                                </HoverCardDetailedTrigger>
                                <HoverCardDetailedContent className="w-96">
                                  <div className="space-y-3">
                                    <h4 className="font-semibold text-primary">{topic.name}</h4>
                                    <div className="space-y-2">
                                      <div>
                                        <h5 className="text-sm font-medium text-muted-foreground mb-1">What You'll Learn:</h5>
                                        <p className="text-sm leading-relaxed">{topic.details}</p>
                                      </div>
                                      <div>
                                        <h5 className="text-sm font-medium text-muted-foreground mb-1">Practical Outcome:</h5>
                                        <p className="text-sm leading-relaxed text-success">{topic.practicalOutcome}</p>
                                      </div>
                                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3">
                                        <Clock className="w-3 h-3" />
                                        <span>Daily practice: 30-45 minutes</span>
                                      </div>
                                    </div>
                                  </div>
                                </HoverCardDetailedContent>
                              </HoverCardDetailed>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="structure" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        Project Structure
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <pre className="text-sm text-muted-foreground">
{frameworkId === "bdd-advanced-factory" ? `📁 project-root/
├── 📁 features/
│   ├── 📁 authentication/   # Login & user management
│   ├── 📁 ecommerce/       # Shopping & checkout flows
│   └── 📁 admin/           # Admin panel features
├── 📁 src/
│   ├── 📁 factories/
│   │   ├── KeywordFactory.ts       # Core factory pattern
│   │   ├── StepDefinitionFactory.ts # Step generation
│   │   └── KeywordRegistry.ts      # Keyword management
│   ├── 📁 keywords/
│   │   ├── 📁 atomic/             # Low-level actions
│   │   │   ├── NavigationKeywords.ts
│   │   │   ├── InputKeywords.ts
│   │   │   └── AssertionKeywords.ts
│   │   ├── 📁 business/           # High-level workflows
│   │   │   ├── AuthenticationKeywords.ts
│   │   │   ├── CheckoutKeywords.ts
│   │   │   └── ProductKeywords.ts
│   │   └── 📁 decorators/         # Metadata annotations
│   │       ├── AtomicKeyword.ts
│   │       └── BusinessKeyword.ts
│   ├── 📁 pages/                  # Page Objects
│   ├── 📁 support/
│   │   ├── hooks.ts               # Before/After hooks
│   │   ├── world.ts               # Shared context
│   │   └── cucumber.ts            # Cucumber config
│   └── 📁 utils/
├── 📁 step-definitions/           # Generated step defs
├── 📁 reports/                    # Cucumber reports
└── 📄 cucumber.config.ts` : `📁 project-root/
├── 📁 src/
│   ├── 📁 pages/           # Page Object classes
│   ├── 📁 components/      # Reusable UI components  
│   ├── 📁 utils/          # Helper utilities
│   ├── 📁 data/           # Test data files
│   └── 📁 fixtures/       # Test fixtures
├── 📁 tests/
│   ├── 📁 e2e/           # End-to-end tests
│   ├── 📁 api/           # API tests
│   └── 📁 integration/   # Integration tests
├── 📁 reports/           # Test reports & screenshots
├── 📁 config/            # Configuration files
└── 📄 playwright.config.ts`}
                        </pre>
                      </div>
                      <div className="mt-4 space-y-3">
                        <h4 className="font-semibold">File Naming Conventions:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {frameworkId === "bdd-advanced-factory" ? (
                            <>
                              <li>• Features: <code>login.feature</code>, <code>checkout.feature</code></li>
                              <li>• Factories: <code>UserFactory.ts</code>, <code>ProductFactory.ts</code></li>
                              <li>• Keywords: <code>AuthenticationKeywords.ts</code>, <code>CartKeywords.ts</code></li>
                              <li>• Steps: <code>authentication.steps.ts</code>, <code>common.steps.ts</code></li>
                            </>
                          ) : (
                            <>
                              <li>• Pages: <code>LoginPage.ts</code>, <code>DashboardPage.ts</code></li>
                              <li>• Tests: <code>login.spec.ts</code>, <code>checkout.spec.ts</code></li>
                              <li>• Utils: <code>dateUtils.ts</code>, <code>apiHelpers.ts</code></li>
                              <li>• Data: <code>testData.json</code>, <code>userCredentials.ts</code></li>
                            </>
                          )}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="implementation" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        Production-Ready Implementation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {frameworkId === "bdd-advanced-factory" ? (
                        <>
                          <div>
                            <h4 className="font-semibold mb-2">Gherkin Feature File (Manual Tester Creates):</h4>
                            <div className="bg-card border border-border rounded-lg p-4">
                              <pre className="text-sm text-muted-foreground">
{`# features/authentication/login.feature
Feature: User Authentication
  As a registered user
  I want to login to the application
  So that I can access my account

  Background:
    Given the application is running
    And I am on the login page

  Scenario: Successful login with valid credentials
    Given I have a valid user account with username "testuser@example.com"
    When I enter username "testuser@example.com"
    And I enter password "SecurePass123"
    And I click the login button
    Then I should see the dashboard page
    And I should see welcome message "Welcome, Test User"

  Scenario Outline: Login with invalid credentials
    When I enter username "<username>"
    And I enter password "<password>"
    And I click the login button
    Then I should see error message "<error>"
    
    Examples:
      | username              | password      | error                  |
      | invalid@example.com   | wrong123      | Invalid credentials    |
      | testuser@example.com  | wrongpass     | Invalid password       |
      | empty@example.com     |               | Password is required   |

  Scenario: Complete user journey with checkout
    Given I am logged in as "premium_user"
    When I search for product "MacBook Pro"
    And I select the first product from results
    And I add product to cart
    And I proceed to checkout
    And I enter shipping address
    And I select payment method "Credit Card"
    And I complete the purchase
    Then I should see order confirmation
    And I should receive order confirmation email`}
                              </pre>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Factory Pattern with Decorators (Automation Engineer Creates):</h4>
                            <div className="bg-card border border-border rounded-lg p-4">
                              <pre className="text-sm text-muted-foreground">
{`// src/factories/StepDefinitionFactory.ts
import { Page } from '@playwright/test';

// Decorator for atomic keywords
export function AtomicKeyword(name: string) {
  return function (target: any, propertyKey: string) {
    KeywordRegistry.registerAtomic(name, target[propertyKey]);
  };
}

// Decorator for business keywords  
export function BusinessKeyword(name: string) {
  return function (target: any, propertyKey: string) {
    KeywordRegistry.registerBusiness(name, target[propertyKey]);
  };
}

// src/keywords/atomic/InputKeywords.ts
export class InputKeywords {
  constructor(private page: Page) {}

  @AtomicKeyword('enter text')
  async enterText(locator: string, text: string): Promise<void> {
    await this.page.locator(locator).fill(text);
    await this.page.waitForTimeout(100); // Smart wait
  }

  @AtomicKeyword('click element')
  async clickElement(locator: string): Promise<void> {
    await this.page.locator(locator).waitFor({ state: 'visible' });
    await this.page.locator(locator).click();
  }
}

// src/keywords/business/AuthenticationKeywords.ts
export class AuthenticationKeywords {
  constructor(
    private page: Page,
    private inputKeywords: InputKeywords,
    private navigationKeywords: NavigationKeywords
  ) {}

  @BusinessKeyword('login as user')
  async loginAsUser(username: string, password: string): Promise<void> {
    await this.navigationKeywords.navigateTo('/login');
    await this.inputKeywords.enterText('[data-testid="username"]', username);
    await this.inputKeywords.enterText('[data-testid="password"]', password);
    await this.inputKeywords.clickElement('[data-testid="login-btn"]');
    await this.page.waitForURL('**/dashboard');
  }

  @BusinessKeyword('I am logged in as')
  async quickLogin(userType: string): Promise<void> {
    const credentials = this.getUserCredentials(userType);
    await this.loginAsUser(credentials.username, credentials.password);
  }
}`}
                              </pre>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Step Definitions (Auto-Generated):</h4>
                            <div className="bg-card border border-border rounded-lg p-4">
                              <pre className="text-sm text-muted-foreground">
{`// step-definitions/authentication.steps.ts (Auto-generated by factory)
import { Given, When, Then } from '@cucumber/cucumber';
import { KeywordFactory } from '../src/factories/KeywordFactory';

Given('I have a valid user account with username {string}', async function(username: string) {
  this.username = username;
  this.user = await KeywordFactory.createUser(username);
});

When('I enter username {string}', async function(username: string) {
  const inputKeywords = KeywordFactory.getKeywords('input');
  await inputKeywords.enterText('[data-testid="username"]', username);
});

When('I enter password {string}', async function(password: string) {
  const inputKeywords = KeywordFactory.getKeywords('input');
  await inputKeywords.enterText('[data-testid="password"]', password);
});

When('I click the login button', async function() {
  const inputKeywords = KeywordFactory.getKeywords('input');
  await inputKeywords.clickElement('[data-testid="login-btn"]');
});

Then('I should see the dashboard page', async function() {
  const assertionKeywords = KeywordFactory.getKeywords('assertion');
  await assertionKeywords.verifyUrl('**/dashboard');
});

Given('I am logged in as {string}', async function(userType: string) {
  const authKeywords = KeywordFactory.getKeywords('authentication');
  await authKeywords.quickLogin(userType);
});`}
                              </pre>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Keyword Registry System:</h4>
                            <div className="bg-card border border-border rounded-lg p-4">
                              <pre className="text-sm text-muted-foreground">
{`// src/factories/KeywordRegistry.ts
export class KeywordRegistry {
  private static atomicKeywords: Map<string, Function> = new Map();
  private static businessKeywords: Map<string, Function> = new Map();

  static registerAtomic(name: string, fn: Function): void {
    this.atomicKeywords.set(name, fn);
    console.log(\`Registered atomic keyword: \${name}\`);
  }

  static registerBusiness(name: string, fn: Function): void {
    this.businessKeywords.set(name, fn);
    console.log(\`Registered business keyword: \${name}\`);
  }

  static getAtomic(name: string): Function {
    if (!this.atomicKeywords.has(name)) {
      throw new Error(\`Atomic keyword '\${name}' not found\`);
    }
    return this.atomicKeywords.get(name)!;
  }

  static getAllKeywords(): { atomic: string[], business: string[] } {
    return {
      atomic: Array.from(this.atomicKeywords.keys()),
      business: Array.from(this.businessKeywords.keys())
    };
  }
}`}
                              </pre>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <h4 className="font-semibold mb-2">TypeScript Configuration:</h4>
                            <div className="bg-card border border-border rounded-lg p-4">
                              <pre className="text-sm text-muted-foreground">
{`// tsconfig.json - Enterprise Grade Configuration
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs", 
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}`}
                              </pre>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Advanced Locator Strategies:</h4>
                            <div className="bg-card border border-border rounded-lg p-4">
                              <pre className="text-sm text-muted-foreground">
{`// Optimized Playwright Selectors
await page.locator('[data-testid="submit-btn"]').click();
await page.getByRole('button', { name: 'Submit' }).click();
await page.getByText('Welcome').first().click();`}
                              </pre>
                            </div>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="devops" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>CI/CD Integration</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {frameworkId === "bdd-advanced-factory" ? (
                        <>
                          <div>
                            <h4 className="font-semibold mb-2">GitHub Actions with Cucumber:</h4>
                            <div className="bg-card border border-border rounded-lg p-4">
                              <pre className="text-sm text-muted-foreground">
{`name: BDD Test Suite
on: 
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 2 * * *' # Daily at 2 AM

jobs:
  cucumber-tests:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        browser: [chromium, firefox, webkit]
        shard: [1, 2, 3, 4]
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm run test:cucumber -- --shard=\${'$'}{{ matrix.shard }}/4
        env:
          BROWSER: \${'$'}{{ matrix.browser }}
      - name: Upload Cucumber Reports
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: cucumber-report-\${'$'}{{ matrix.browser }}-\${'$'}{{ matrix.shard }}
          path: reports/cucumber/
      - name: Generate Allure Report
        if: always()
        run: npm run allure:generate
      - name: Publish Test Results
        if: always()
        uses: EnricoMi/publish-unit-test-result-action@v2
        with:
          files: reports/cucumber/*.json`}
                              </pre>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Cucumber Configuration:</h4>
                            <div className="bg-card border border-border rounded-lg p-4">
                              <pre className="text-sm text-muted-foreground">
{`// cucumber.config.ts
export default {
  requireModule: ['ts-node/register'],
  require: ['src/step-definitions/**/*.ts', 'src/support/**/*.ts'],
  format: [
    'progress-bar',
    'html:reports/cucumber/report.html',
    'json:reports/cucumber/report.json',
    'junit:reports/cucumber/report.xml',
    '@cucumber/pretty-formatter'
  ],
  formatOptions: {
    snippetInterface: 'async-await'
  },
  parallel: 4,
  retry: 2,
  retryTagFilter: '@flaky',
  tags: 'not @skip and not @wip'
};`}
                              </pre>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Slack Integration with Rich Formatting:</h4>
                            <div className="bg-card border border-border rounded-lg p-4">
                              <pre className="text-sm text-muted-foreground">
{`// src/support/slack-reporter.ts
import axios from 'axios';

export class SlackReporter {
  async sendReport(results: TestResults): Promise<void> {
    const message = {
      blocks: [
        {
          type: "header",
          text: { type: "plain_text", text: "🧪 BDD Test Results" }
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: \`*Total Scenarios:*\\n\${results.total}\` },
            { type: "mrkdwn", text: \`*Passed:*\\n✅ \${results.passed}\` },
            { type: "mrkdwn", text: \`*Failed:*\\n❌ \${results.failed}\` },
            { type: "mrkdwn", text: \`*Duration:*\\n⏱️ \${results.duration}\` }
          ]
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: \`*Failed Features:*\\n\${results.failedFeatures.map(f => 
              \`• \${f.name}: \${f.error}\`).join('\\n')}\`
          }
        },
        {
          type: "actions",
          elements: [
            {
              type: "button",
              text: { type: "plain_text", text: "View Full Report" },
              url: results.reportUrl
            }
          ]
        }
      ]
    };
    
    await axios.post(process.env.SLACK_WEBHOOK_URL!, message);
  }
}`}
                              </pre>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">JIRA Integration:</h4>
                            <div className="bg-card border border-border rounded-lg p-4">
                              <pre className="text-sm text-muted-foreground">
{`// src/support/jira-integration.ts
export class JiraIntegration {
  async createTicketForFailure(scenario: FailedScenario): Promise<void> {
    const issue = {
      fields: {
        project: { key: 'AUTO' },
        summary: \`[AUTO] \${scenario.feature}: \${scenario.name}\`,
        description: \`
*Scenario:* \${scenario.name}
*Feature:* \${scenario.feature}
*Error:* \${scenario.error}
*Steps:*
\${scenario.steps.map((s, i) => \`\${i + 1}. \${s}\`).join('\\n')}

*Environment:* \${process.env.TEST_ENV}
*Browser:* \${scenario.browser}
*Screenshot:* {noformat}\${scenario.screenshot}{noformat}
        \`,
        issuetype: { name: 'Bug' },
        priority: { name: scenario.severity },
        labels: ['automation', 'bdd', 'regression']
      }
    };
    
    await this.jiraClient.createIssue(issue);
  }
}`}
                              </pre>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Living Documentation Generation:</h4>
                            <p className="text-sm text-muted-foreground">
                              Automatically generates beautiful HTML documentation from your Gherkin features, 
                              creating living documentation that stakeholders can review. Updates automatically 
                              with each test run, showing real execution results alongside scenarios.
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <h4 className="font-semibold mb-2">GitHub Actions Pipeline:</h4>
                            <div className="bg-card border border-border rounded-lg p-4">
                              <pre className="text-sm text-muted-foreground">
{`name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npx playwright install
      - run: npm run test:e2e`}
                              </pre>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Slack Integration:</h4>
                            <p className="text-sm text-muted-foreground">
                              Automatic notifications to Slack channels with test results, screenshots, and trace files.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">JIRA Integration:</h4>
                            <p className="text-sm text-muted-foreground">
                              Automated ticket updates with test execution status and failure details.
                            </p>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Get Complete Implementation</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="bg-gradient-button text-foreground px-4 py-2 rounded-lg text-sm font-medium">
                    Only 4 Hours/Week Required
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lifetime access to complete implementation guide
                  </p>
                  <ul className="text-left space-y-2 text-sm">
                    <li>✅ 30-day structured learning</li>
                    <li>✅ Production-ready code</li>
                    <li>✅ CI/CD integration guides</li>
                    <li>✅ Allure reporting setup</li>
                    <li>✅ Enterprise best practices</li>
                  </ul>
                  <Button 
                    className="w-full bg-gradient-button hover:shadow-glow text-foreground"
                    onClick={() => {
                      const message = `Hi Suresh, I want to master Playwright, can we have a quick chat?

Full Name: [Your Full Name]
Phone Number: [Your Phone Number]  
LinkedIn Profile: [Your LinkedIn URL]

I'm interested in the ${framework.title} implementation guide and would love to discuss the details.`;
                      const whatsappUrl = `https://wa.me/31616270233?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact via WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Beginner (Days 1-5):</strong>
                      <p className="text-muted-foreground">Foundation setup, basic patterns, first working tests</p>
                    </div>
                    <div>
                      <strong>Intermediate (Days 6-15):</strong>
                      <p className="text-muted-foreground">Advanced patterns, CI/CD, notifications, reporting</p>
                    </div>
                    <div>
                      <strong>Advanced (Days 16-30):</strong>
                      <p className="text-muted-foreground">Enterprise architecture, optimization, production deployment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FrameworkDetails;