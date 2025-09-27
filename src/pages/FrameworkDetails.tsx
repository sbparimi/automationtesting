import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, MessageCircle, Code, FileText, Layers } from "lucide-react";

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
      duration: "Day 1-5",
      description: "Foundation concepts and basic implementation",
      topics: [
        "Framework introduction and concepts",
        "Environment setup and configuration", 
        "Basic project structure",
        "First test implementation",
        "Core patterns and practices"
      ]
    },
    {
      id: "intermediate", 
      title: "Intermediate Level",
      duration: "Day 6-15",
      description: "Advanced patterns and real-world implementation",
      topics: [
        "Advanced design patterns",
        "CI/CD integration with GitHub/GitLab",
        "Slack/Teams notifications setup",
        "JIRA integration and reporting",
        "Custom utilities and helpers"
      ]
    },
    {
      id: "advanced",
      title: "Advanced Level", 
      duration: "Day 16-30",
      description: "Enterprise-grade implementation and optimization",
      topics: [
        "Military precision test architecture",
        "Allure reporting with trace viewer",
        "Network-level debugging and monitoring",
        "Performance optimization techniques",
        "Enterprise deployment strategies"
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
                        <CardTitle className="text-lg">{level.title}</CardTitle>
                        <CardDescription>
                          {level.duration} • {level.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {level.topics.map((topic, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-success rounded-full"></div>
                              <span className="text-sm">{topic}</span>
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
                  <div className="text-3xl font-bold text-primary">$10</div>
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