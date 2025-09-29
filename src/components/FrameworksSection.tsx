import { FrameworkCard } from "./FrameworkCard";
import { FrameworkMindmap } from "./FrameworkMindmap";
import { 
  pomMindmap, 
  keywordDrivenMindmap, 
  dataDrivenMindmap, 
  hybridMindmap, 
  bddMindmap, 
  apiUiMindmap,
  bddAdvancedMindmap 
} from "../data/frameworkMindmaps";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export const FrameworksSection = () => {
  const frameworks = [
    {
      id: "page-object-model",
      title: "Page Object Model (POM)",
      description: "Enterprise-grade foundation for scalable test automation. Architect-level implementation with advanced design patterns, dependency injection, and AI-powered self-healing capabilities for production-grade test suites.",
      features: [
        "Advanced encapsulation with fluent interfaces and method chaining",
        "Smart locator strategies with CSS, XPath, and data-testid optimization",
        "Dependency injection container for seamless page object management",
        "AI-powered self-healing locators with automatic DOM analysis",
        "Production-grade error handling with detailed failure diagnostics",
        "Performance monitoring with page load metrics and bottleneck detection",
        "Cross-browser compatibility matrix with automated environment switching"
      ],
      benefits: {
        testers: [
          "4-hour weekly learning schedule with immediate production implementation",
          "70% reduction in test maintenance through intelligent page object architecture",
          "Advanced debugging toolkit with visual failure analysis and stack traces",
          "Enterprise-level test design patterns for complex application workflows",
          "Real-time test execution monitoring with performance insights"
        ],
        business: [
          "65% reduction in automation maintenance costs through intelligent design",
          "2x faster release cycles with robust regression automation coverage",
          "Enterprise-scale test automation supporting millions of daily transactions",
          "ROI improvement through reusable component library across product lines",
          "Production incident reduction by 80% through comprehensive test coverage"
        ]
      },
      technologies: ["Playwright", "TypeScript", "Page Objects", "Fixtures"],
      complexity: "Beginner" as const,
      diagram: <FrameworkMindmap data={pomMindmap} title="Page Object Model Architecture" />,
      codeExample: `// LoginPage.ts
export class LoginPage {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }
  
  async login(username: string, password: string) {
    await this.page.fill('[data-testid="username"]', username);
    await this.page.fill('[data-testid="password"]', password);
    await this.page.click('[data-testid="login-btn"]');
  }
}`
    },
    {
      id: "keyword-driven",
      title: "Keyword Driven Framework",
      description: "Production-ready business automation platform enabling manual testers and business users to create enterprise-grade test automation through natural language keywords. Advanced architecture with 4-hour weekly mastery program.",
      features: [
        "Natural language keyword library with business domain vocabulary",
        "Excel/JSON/Database integration with real-time data synchronization",
        "Advanced keyword composition with nested business logic workflows",
        "Intelligent keyword suggestion engine with auto-completion support",
        "Enterprise security with role-based access control for keyword management",
        "Production deployment pipeline with automated keyword validation",
        "Performance optimization with keyword execution caching and parallel processing"
      ],
      benefits: {
        testers: [
          "4-hour weekly training transforms manual testers into automation contributors",
          "Zero coding required - business-focused keyword approach accelerates productivity",
          "Advanced keyword analytics showing usage patterns and optimization opportunities",
          "Enterprise-level collaboration tools connecting business analysts with automation",
          "Production-grade debugging with keyword-level execution tracing and analytics"
        ],
        business: [
          "Manual testing teams become automation force multipliers within 4 weeks",
          "75% reduction in automation development timeline through business user participation",
          "Enterprise-scale keyword governance ensuring consistency across global teams",
          "ROI acceleration through reduced dependency on technical automation resources",
          "Production incident reduction through business-user-created regression suites"
        ]
      },
      technologies: ["Playwright", "TypeScript", "Excel Integration", "Keyword Engine"],
      complexity: "Intermediate" as const,
      diagram: <FrameworkMindmap data={keywordDrivenMindmap} title="Keyword Driven Architecture" />,
      codeExample: `// KeywordEngine.ts
export class KeywordEngine {
  async executeKeyword(keyword: string, data: any[]) {
    switch(keyword.toLowerCase()) {
      case 'login':
        await this.login(data[0], data[1]);
        break;
      case 'navigate':
        await this.navigate(data[0]);
        break;
      // More keywords...
    }
  }
}`
    },
    {
      id: "data-driven",
      title: "Data Driven Framework",
      description: "Enterprise data automation platform executing thousands of test scenarios from centralized data repositories. Production-grade implementation with real-time database integration, synthetic data generation, and 4-hour weekly mastery approach.",
      features: [
        "Multi-source data integration: JSON, CSV, SQL databases, NoSQL, REST APIs",
        "Advanced test parameterization with complex object injection and validation",
        "AI-powered synthetic test data generation ensuring edge case coverage",
        "Real-time data synchronization with production-mirror test environments",
        "Enterprise data governance with PII masking and compliance validation",
        "Performance-optimized parallel data processing with distributed execution",
        "Production-grade data validation with schema enforcement and anomaly detection"
      ],
      benefits: {
        testers: [
          "4-hour weekly training delivering comprehensive data-driven expertise",
          "Single test script validates 1000+ scenarios through intelligent data injection",
          "Advanced data analytics identifying coverage gaps and optimization opportunities",
          "Production-grade debugging with per-dataset execution tracing and failure isolation",
          "Enterprise tooling for managing massive test data repositories efficiently"
        ],
        business: [
          "95% increase in test scenario coverage through intelligent data multiplication",
          "Data-related production defects reduced by 85% through comprehensive validation",
          "Regression execution time cut by 60% through parallel data processing",
          "Compliance assurance through automated PII handling and data governance",
          "ROI acceleration through test reusability across multiple data environments"
        ]
      },
      technologies: ["Playwright", "TypeScript", "JSON/CSV", "Database Integration"],
      complexity: "Intermediate" as const,
      diagram: <FrameworkMindmap data={dataDrivenMindmap} title="Data Driven Architecture" />,
      codeExample: `// DataDrivenTest.ts
testData.forEach((data, index) => {
  test(\`Login Test \${index + 1}\`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(data.username, data.password);
    await expect(page).toHaveURL(data.expectedUrl);
  });
});`
    },
    {
      id: "hybrid-framework",
      title: "Hybrid Framework",
      description: "Ultimate enterprise automation architecture unifying POM, Data-Driven, Keyword-Driven, and BDD approaches. Military-precision production implementation supporting Fortune 500 scale with 4-hour weekly architect-level mastery program.",
      features: [
        "Unified architecture orchestrating multiple automation paradigms intelligently",
        "AI-powered test strategy selector choosing optimal approach per scenario",
        "Enterprise observability with distributed tracing and real-time monitoring",
        "Production-grade resilience with self-healing, retry mechanisms, and circuit breakers",
        "Advanced CI/CD orchestration across Jenkins, GitLab, Azure DevOps, GitHub Actions",
        "Cloud-native execution on AWS, Azure, GCP with auto-scaling and cost optimization",
        "Comprehensive security framework with secrets management and audit logging"
      ],
      benefits: {
        testers: [
          "4-hour weekly training delivers enterprise architect-level framework mastery",
          "Flexibility to apply best-fit automation strategy for each unique test scenario",
          "Production-grade debugging suite with distributed tracing and root cause analysis",
          "Advanced analytics dashboard showing framework utilization and optimization insights",
          "Enterprise collaboration tools enabling global team coordination and knowledge sharing"
        ],
        business: [
          "82% reduction in total testing effort through intelligent automation orchestration",
          "Enterprise-scale capability supporting 10,000+ daily test executions",
          "Production deployment confidence with 99.9% automation reliability",
          "3x ROI improvement through maximum reusability and minimal maintenance overhead",
          "Future-proof architecture adapting to emerging technologies and testing paradigms"
        ]
      },
      technologies: ["Playwright", "TypeScript", "Multiple Patterns", "Advanced Reporting"],
      complexity: "Advanced" as const,
      diagram: <FrameworkMindmap data={hybridMindmap} title="Hybrid Framework Architecture" />,
      codeExample: `// HybridFramework.ts
export class HybridFramework {
  async executeTest(config: TestConfig) {
    if (config.type === 'keyword') {
      await this.keywordEngine.execute(config.keywords);
    } else if (config.type === 'datadriven') {
      await this.dataDrivenEngine.execute(config.data);
    }
    // Page objects used throughout
  }
}`
    },
    {
      id: "bdd-cucumber",
      title: "BDD with Cucumber",
      description: "Enterprise behavior-driven development platform enabling seamless collaboration between product, QA, and engineering. Production-grade Gherkin implementation with living documentation and 4-hour weekly mastery approach.",
      features: [
        "Natural language Gherkin syntax creating executable requirements documentation",
        "Advanced step definition library with reusable business domain vocabulary",
        "Real-time living documentation auto-generated from executable specifications",
        "Enterprise collaboration hub connecting product owners, QA, and developers",
        "Intelligent scenario validation preventing ambiguity and ensuring consistency",
        "Production-grade reporting with business-readable insights and traceability",
        "CI/CD integration providing instant feedback on requirement implementation"
      ],
      benefits: {
        testers: [
          "4-hour weekly training delivering production-grade BDD expertise",
          "Natural language scenarios eliminating technical barrier for test creation",
          "Enterprise-level step definition library accelerating test development",
          "Advanced collaboration tools enabling real-time stakeholder engagement",
          "Production debugging with scenario-level execution tracing and analytics"
        ],
        business: [
          "Requirements-to-automation gap eliminated through executable specifications",
          "Living documentation reducing specification maintenance effort by 70%",
          "Cross-functional collaboration improving requirement clarity by 90%",
          "Production defect reduction through early requirement validation and testing",
          "Stakeholder confidence through business-readable test reports and dashboards"
        ]
      },
      technologies: ["Playwright", "Cucumber", "Gherkin", "TypeScript"],
      complexity: "Advanced" as const,
      diagram: <FrameworkMindmap data={bddMindmap} title="BDD Framework Architecture" />,
      codeExample: `// Feature: User Authentication
Scenario: Successful login
  Given user is on the login page
  When user enters valid credentials
  Then user should be redirected to dashboard

// Step Definition
Given('user is on the login page', async () => {
  await loginPage.navigate();
});`
    },
    {
      id: "api-ui-integration",
      title: "API + UI Integrated Framework",
      description: "Enterprise full-stack testing platform unifying API contract testing, performance validation, and UI journey automation. Production-grade architecture with 4-hour weekly mastery delivering comprehensive test coverage optimization.",
      features: [
        "Unified API + UI test orchestration with intelligent execution strategy",
        "Contract testing ensuring API-UI synchronization and backward compatibility",
        "Performance monitoring with API response time tracking and SLA validation",
        "Data setup via API with UI validation ensuring end-to-end journey integrity",
        "Advanced mocking and service virtualization for isolated component testing",
        "Production-grade observability with distributed tracing across API and UI layers",
        "CI/CD optimization executing fast API tests before comprehensive UI validation"
      ],
      benefits: {
        testers: [
          "4-hour weekly training delivering full-stack testing architect expertise",
          "Test execution speed improved 70% through intelligent API-first strategy",
          "Complete application coverage from API contracts to user journey validation",
          "Advanced debugging with request/response capture and UI correlation",
          "Production-grade tooling for managing complex microservice test dependencies"
        ],
        business: [
          "75% faster test execution through optimized API setup and UI validation strategy",
          "Production incident reduction by 88% through comprehensive full-stack coverage",
          "API breaking changes detected instantly through contract testing automation",
          "Performance SLA enforcement preventing production degradation",
          "Resource optimization through strategic API vs UI test distribution"
        ]
      },
      technologies: ["Playwright", "REST API", "TypeScript", "Integration Testing"],
      complexity: "Advanced" as const,
      diagram: <FrameworkMindmap data={apiUiMindmap} title="API + UI Integration Architecture" />,
      codeExample: `// IntegratedTest.ts
test('Order flow', async ({ request, page }) => {
  // API setup
  const user = await request.post('/api/users', { data: userData });
  const product = await request.post('/api/products', { data: productData });
  
  // UI validation
  await page.goto('/checkout');
  await expect(page.locator('.user-name')).toHaveText(user.name);
});`
    },
    {
      id: "bdd-advanced-factory",
      title: "BDD Advanced Factory Pattern",
      description: "Revolutionary enterprise BDD platform enabling manual testers to create production-grade automation through pure Gherkin. Advanced TypeScript factory architecture with 4-hour weekly mastery transforming manual teams into automation powerhouses.",
      features: [
        "Zero-code automation through natural Gherkin syntax empowering manual testers",
        "Advanced TypeScript factory patterns with decorators, generics, and dependency injection",
        "Atomic keyword library providing fundamental building blocks for complex workflows",
        "Business keyword composition orchestrating atomic actions into domain workflows",
        "AI-powered step definition generation with intelligent parameter inference",
        "Self-healing keyword architecture with automatic adaptation to UI changes",
        "Enterprise governance with keyword versioning, approval workflows, and analytics"
      ],
      benefits: {
        testers: [
          "4-hour weekly training transforms manual testers into automation contributors",
          "Zero coding barrier - pure Gherkin approach enables immediate productivity",
          "Advanced keyword analytics showing reusability patterns and coverage insights",
          "Production-grade debugging with factory-layer execution tracing and diagnostics",
          "Enterprise collaboration tools enabling keyword sharing across global teams"
        ],
        business: [
          "Manual testing teams become automation force within 3 weeks of training",
          "88% reduction in automation development costs through manual tester enablement",
          "Test creation velocity increased 5x through keyword reusability and composition",
          "Training ROI achieved within 4 weeks through immediate productivity gains",
          "Enterprise-scale keyword governance ensuring consistency across 1000+ test scenarios"
        ]
      },
      technologies: ["Playwright", "TypeScript", "Factory Pattern", "Gherkin", "Advanced Decorators"],
      complexity: "Advanced" as const,
      diagram: <FrameworkMindmap data={bddAdvancedMindmap} title="BDD Advanced Factory Architecture" />,
      codeExample: `// Advanced Factory Pattern
@StepDefinitionFactory
export class BusinessKeywordFactory {
  @AtomicKeyword('login')
  private async atomicLogin(user: User): Promise<void> {
    await this.page.fill('[data-testid="username"]', user.username);
    await this.page.fill('[data-testid="password"]', user.password);
    await this.page.click('[data-testid="login-btn"]');
  }
  
  @BusinessKeyword('user authenticates successfully')
  async userAuthentication(userData: UserData): Promise<AuthResult> {
    const factory = KeywordFactory.create<LoginFactory>();
    return await factory.execute('login', userData);
  }
}

// Gherkin Feature - No code needed by manual testers
Feature: E-commerce User Journey
  Scenario: Complete purchase flow
    Given user authenticates successfully
    When user searches for "premium laptop"
    And user adds item to cart
    Then user completes checkout process`
    }
  ];

  return (
    <section id="frameworks" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Framework Architecture
            <span className="block text-primary">Showcase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each framework is carefully architected to solve specific automation challenges while maintaining 
            enterprise-grade quality, scalability, and maintainability standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {frameworks.map((framework, index) => (
            <div 
              key={framework.title} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FrameworkCard {...framework} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};