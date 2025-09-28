import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HoverCardDetailed, HoverCardDetailedTrigger, HoverCardDetailedContent } from "@/components/ui/hover-card-detailed";
import { ArrowLeft, MessageCircle, Code, FileText, Layers, Clock, Target, Zap } from "lucide-react";

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
    diagram: "Advanced architectural diagrams showing page object hierarchy and interaction patterns"
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
    diagram: "Keyword mapping and execution flow architecture"
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
    diagram: "Data flow and test execution pipeline visualization"
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
    diagram: "Multi-pattern integration and workflow architecture"
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
    diagram: "BDD workflow and step definition mapping"
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
    diagram: "API-UI integration patterns and testing strategies"
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
                        <p className="text-center text-muted-foreground">
                          {framework.diagram}
                        </p>
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
{`📁 project-root/
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
                          <li>• Pages: <code>LoginPage.ts</code>, <code>DashboardPage.ts</code></li>
                          <li>• Tests: <code>login.spec.ts</code>, <code>checkout.spec.ts</code></li>
                          <li>• Utils: <code>dateUtils.ts</code>, <code>apiHelpers.ts</code></li>
                          <li>• Data: <code>testData.json</code>, <code>userCredentials.ts</code></li>
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
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="devops" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>CI/CD Integration</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
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