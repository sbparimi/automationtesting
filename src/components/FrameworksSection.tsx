import { FrameworkCard } from "./FrameworkCard";
import { 
  POMDiagram, 
  KeywordDrivenDiagram, 
  DataDrivenDiagram, 
  HybridDiagram, 
  BDDDiagram, 
  APIDiagram 
} from "./FrameworkDiagrams";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export const FrameworksSection = () => {
  const frameworks = [
    {
      id: "page-object-model",
      title: "Page Object Model (POM)",
      description: "The foundation of maintainable test automation. Encapsulates page elements and actions into reusable, testable components with clear separation of concerns.",
      features: [
        "Encapsulated page elements and actions",
        "Reusable components across test suites",
        "Easy maintenance when UI changes",
        "Clear separation between test logic and page interactions",
        "Enhanced readability and debugging capabilities"
      ],
      benefits: {
        testers: [
          "Faster test creation using existing page objects",
          "Reduced code duplication and maintenance effort",
          "Easier debugging with localized failures",
          "Improved test readability and documentation"
        ],
        business: [
          "40% reduction in maintenance costs",
          "Faster time-to-market with reusable components",
          "Higher test coverage with stable automation",
          "Reduced regression testing time"
        ]
      },
      technologies: ["Playwright", "TypeScript", "Page Objects", "Fixtures"],
      complexity: "Beginner" as const,
      diagram: <POMDiagram />,
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
      description: "Enables non-technical stakeholders to create and maintain tests using business-readable keywords. Perfect for organizations with diverse technical skills.",
      features: [
        "Business-readable test scripts",
        "Separation of test design and implementation",
        "Excel/CSV based test case management",
        "Reusable keyword library",
        "Non-technical team participation"
      ],
      benefits: {
        testers: [
          "Focus on test logic rather than code implementation",
          "Reusable keywords across multiple test scenarios",
          "Easy collaboration with business analysts",
          "Reduced learning curve for new team members"
        ],
        business: [
          "Business users can create tests independently",
          "60% faster test creation cycle",
          "Improved test coverage through business involvement",
          "Reduced dependency on technical resources"
        ]
      },
      technologies: ["Playwright", "TypeScript", "Excel Integration", "Keyword Engine"],
      complexity: "Intermediate" as const,
      diagram: <KeywordDrivenDiagram />,
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
      description: "Executes the same test logic across multiple data sets, maximizing test coverage while minimizing code duplication. Supports various data sources.",
      features: [
        "Multiple data source support (JSON, CSV, Database)",
        "Parameterized test execution",
        "Dynamic test case generation",
        "Comprehensive data validation",
        "Parallel data processing capabilities"
      ],
      benefits: {
        testers: [
          "Test multiple scenarios with single script",
          "Easy data management and updates",
          "Comprehensive edge case coverage",
          "Simplified test maintenance"
        ],
        business: [
          "90% increase in test scenario coverage",
          "Faster identification of data-related bugs",
          "Reduced time for regression testing",
          "Higher confidence in data integrity"
        ]
      },
      technologies: ["Playwright", "TypeScript", "JSON/CSV", "Database Integration"],
      complexity: "Intermediate" as const,
      diagram: <DataDrivenDiagram />,
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
      description: "The ultimate enterprise solution combining POM, Data-Driven, and Keyword-Driven approaches. Provides maximum flexibility and scalability for complex applications.",
      features: [
        "Multi-paradigm approach integration",
        "Flexible test design patterns",
        "Advanced reporting and analytics",
        "Cross-browser and cross-platform support",
        "CI/CD pipeline integration"
      ],
      benefits: {
        testers: [
          "Choose best approach for each test scenario",
          "Maximum code reusability and maintainability",
          "Advanced debugging and reporting capabilities",
          "Seamless integration with existing processes"
        ],
        business: [
          "75% reduction in overall testing effort",
          "Enterprise-scale test automation capability",
          "Improved ROI on testing investments",
          "Future-proof automation architecture"
        ]
      },
      technologies: ["Playwright", "TypeScript", "Multiple Patterns", "Advanced Reporting"],
      complexity: "Advanced" as const,
      diagram: <HybridDiagram />,
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
      description: "Behavior-driven development framework that bridges the communication gap between technical and non-technical stakeholders using natural language scenarios.",
      features: [
        "Gherkin syntax for natural language tests",
        "Living documentation generation",
        "Stakeholder collaboration features",
        "Step definition reusability",
        "Business-readable test reports"
      ],
      benefits: {
        testers: [
          "Clear, readable test scenarios",
          "Easy collaboration with product owners",
          "Reusable step definitions",
          "Self-documenting test suites"
        ],
        business: [
          "Improved communication between teams",
          "Living documentation that stays current",
          "Higher stakeholder engagement in testing",
          "Reduced misunderstanding of requirements"
        ]
      },
      technologies: ["Playwright", "Cucumber", "Gherkin", "TypeScript"],
      complexity: "Advanced" as const,
      diagram: <BDDDiagram />,
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
      description: "Comprehensive testing approach combining API and UI automation for complete application coverage. Optimizes test execution speed while maintaining user journey validation.",
      features: [
        "API and UI test integration",
        "Optimized test execution strategy",
        "Data setup via API, validation via UI",
        "Comprehensive coverage analysis",
        "Performance and functional testing blend"
      ],
      benefits: {
        testers: [
          "Faster test execution with API setup",
          "Complete application coverage",
          "Efficient data management",
          "Comprehensive validation capabilities"
        ],
        business: [
          "50% faster test execution",
          "Higher confidence in releases",
          "Reduced production issues",
          "Optimal resource utilization"
        ]
      },
      technologies: ["Playwright", "REST API", "TypeScript", "Integration Testing"],
      complexity: "Advanced" as const,
      diagram: <APIDiagram />,
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
      description: "Revolutionary BDD framework enabling manual testers to automate using pure Gherkin syntax. Advanced TypeScript factory patterns handle atomic and business keywords automatically.",
      features: [
        "Pure Gherkin syntax automation for manual testers",
        "Advanced TypeScript factory design patterns",
        "Atomic keyword abstraction layer",
        "Business-focused keyword composition",
        "Zero coding required for test creation",
        "Dynamic step definition generation",
        "Smart parameter injection and validation"
      ],
      benefits: {
        testers: [
          "Manual testers create automation without coding",
          "Gherkin-first approach with instant execution",
          "Reusable business keyword library",
          "Self-healing test capabilities",
          "Advanced debugging through factory layers"
        ],
        business: [
          "80% faster automation adoption",
          "Manual testers become automation contributors",
          "Reduced training costs and time",
          "Scalable test creation across teams",
          "Enterprise-grade maintainability"
        ]
      },
      technologies: ["Playwright", "TypeScript", "Factory Pattern", "Gherkin", "Advanced Decorators"],
      complexity: "Advanced" as const,
      diagram: <BDDDiagram />,
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