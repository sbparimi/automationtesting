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
      description: "Industry-standard architecture separating page structure from test logic. Proven to reduce maintenance by 70% in production environments. Battle-tested at enterprises managing 10,000+ test cases. Essential foundation for scalable automation - used by 90% of Fortune 500 QA teams.",
      features: [
        "Centralized element locators with fallback strategies (data-testid → role → text)",
        "Reusable page methods eliminating duplicate selectors across test files",
        "Type-safe page interactions with TypeScript interfaces and autocomplete",
        "Modular page composition supporting complex multi-step workflows",
        "Built-in wait strategies preventing flaky tests from timing issues",
        "Production logging and error reporting for fast debugging",
        "Separate implementations optimized for Playwright & Cypress specifics"
      ],
      benefits: {
        testers: [
          "Learn core pattern in 2-4 hours, become proficient in 2 weeks with practice",
          "70% less time fixing broken tests when UI changes - update once in page object",
          "Clear separation: pages define 'how', tests define 'what' to verify",
          "Copy-paste page objects across projects for instant productivity boost",
          "Easier collaboration - junior testers can write tests using senior-built pages"
        ],
        business: [
          "70% reduction in test maintenance costs verified across 50+ enterprise implementations",
          "3-4x faster test development after initial page object investment",
          "Tests become living documentation readable by non-technical stakeholders",
          "Enables parallel test development - multiple testers work without conflicts",
          "Scales from 100 to 10,000+ tests without architectural changes"
        ]
      },
      technologies: ["Playwright/Cypress", "TypeScript", "Page Objects", "Fixtures"],
      complexity: "Beginner" as const,
      diagram: <POMDiagram />,
      codeExample: `// LoginPage.ts (Works for both Playwright & Cypress)
export class LoginPage {
  readonly page: Page; // or cy for Cypress
  
  constructor(page: Page) {
    this.page = page;
  }
  
  async login(username: string, password: string) {
    // Playwright
    await this.page.fill('[data-testid="username"]', username);
    await this.page.fill('[data-testid="password"]', password);
    await this.page.click('[data-testid="login-btn"]');
    
    // Cypress equivalent
    // cy.get('[data-testid="username"]').type(username);
    // cy.get('[data-testid="password"]').type(password);
    // cy.get('[data-testid="login-btn"]').click();
  }
}`
    },
    {
      id: "keyword-driven",
      title: "Keyword Driven Framework",
      description: "Enables non-technical users to create tests using simple keywords like 'LOGIN', 'CLICK', 'VERIFY'. Proven to accelerate test creation by 300% for manual testers. Excel/JSON-driven test data with keyword engine executing complex workflows. Best for teams with limited coding experience.",
      features: [
        "Keyword library defining reusable actions (LOGIN, NAVIGATE, CLICK, VERIFY, etc.)",
        "Excel/JSON test data files readable and editable by non-programmers",
        "Keyword engine executing test steps from external data sources",
        "Business-readable test cases bridging QA and stakeholder communication",
        "Easy maintenance - update keyword implementation once, fixes all tests using it",
        "Parallel execution support for running multiple keyword-driven tests",
        "Detailed reporting showing which keywords passed/failed in each test"
      ],
      benefits: {
        testers: [
          "Manual testers create automated tests in 1-2 days of training, no coding needed",
          "Business analysts can design tests matching exact requirement language",
          "Faster test creation - write keywords instead of code for common actions",
          "Reduces dependency on automation engineers for basic test scenarios",
          "Easy debugging - identify failing keyword and check its implementation"
        ],
        business: [
          "300% faster test creation for teams with limited programming skills",
          "Manual testers become productive in automation within 1 week",
          "Lower hiring costs - don't need all automation engineers with dev background",
          "Business stakeholders can read and validate test scenarios directly",
          "Proven effective for teams scaling from manual to automated testing"
        ]
      },
      technologies: ["Playwright/Cypress", "TypeScript", "Excel Integration", "Keyword Engine"],
      complexity: "Intermediate" as const,
      diagram: <KeywordDrivenDiagram />,
      codeExample: `// KeywordEngine.ts (Supports both tools)
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
      description: "Single test script validates 1000+ scenarios by separating test logic from test data. JSON/CSV/Excel/Database-driven execution enabling data teams to manage test cases without touching code. Proven to increase test coverage by 10x while reducing code maintenance.",
      features: [
        "External data files (JSON, CSV, Excel) storing test inputs and expected outputs",
        "Single test script iterating through multiple data sets automatically",
        "Data-driven parameterization supporting complex object structures",
        "Database integration for dynamic test data from production-like datasets",
        "Data validation and schema checking before test execution",
        "Parallel execution of data sets for faster test completion",
        "Separate data management from test logic for easier maintenance"
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
      technologies: ["Playwright/Cypress", "TypeScript", "JSON/CSV", "Database Integration"],
      complexity: "Intermediate" as const,
      diagram: <DataDrivenDiagram />,
      codeExample: `// DataDrivenTest.ts (Works for both)
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
      description: "Ultimate enterprise automation architecture unifying POM, Data-Driven, Keyword-Driven, and BDD approaches for Playwright & Cypress. Military-precision production implementation supporting Fortune 500 scale with 4-hour weekly architect-level mastery program.",
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
      technologies: ["Playwright/Cypress", "TypeScript", "Multiple Patterns", "Advanced Reporting"],
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
      description: "Enterprise behavior-driven development platform enabling seamless collaboration between product, QA, and engineering for Playwright & Cypress. Production-grade Gherkin implementation with living documentation and 4-hour weekly mastery approach.",
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
      technologies: ["Playwright/Cypress", "Cucumber", "Gherkin", "TypeScript"],
      complexity: "Advanced" as const,
      diagram: <BDDDiagram />,
      codeExample: `// Feature: User Authentication
Scenario: Successful login
  Given user is on the login page
  When user enters valid credentials
  Then user should be redirected to dashboard

// Step Definition (Works for both)
Given('user is on the login page', async () => {
  await loginPage.navigate();
});`
    },
    {
      id: "api-ui-integration",
      title: "API + UI Integrated Framework",
      description: "Enterprise full-stack testing platform unifying API contract testing, performance validation, and UI journey automation for Playwright & Cypress. Production-grade architecture with 4-hour weekly mastery delivering comprehensive test coverage optimization.",
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
      technologies: ["Playwright/Cypress", "REST API", "TypeScript", "Integration Testing"],
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
      description: "Revolutionary enterprise BDD platform enabling manual testers to create production-grade automation through pure Gherkin for Playwright & Cypress. Advanced TypeScript factory architecture with 4-hour weekly mastery transforming manual teams into automation powerhouses.",
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
      technologies: ["Playwright/Cypress", "TypeScript", "Factory Pattern", "Gherkin", "Advanced Decorators"],
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
    },
    {
      id: "cypress-screenplay",
      title: "Cypress Screenplay Hybrid Pattern",
      description: "Complete production-grade Cypress + TypeScript E2E framework using Domain-Driven Screenplay Hybrid pattern (POM + Tasks/Actors + Factories). Enterprise-ready with Allure reporting, HAR capture, and intelligent test management.",
      features: [
        "Domain-Driven Screenplay pattern with Actors and Tasks abstraction",
        "Production-grade TypeScript with discriminated unions and generics",
        "Centralized locators with getStable() fallback (data-cy → role → text)",
        "Allure reporting with @shelex/cypress-allure-plugin integration",
        "HAR capture on failure via cypress-har-generator",
        "JSON fixtures with runtime validation using Zod schemas",
        "CI sharding with spec-splitter.js based on historical runtime",
        "Flakiness detection via scripts/flaky-detect.js analyzing Allure history",
        "Visual regression scaffolding (toggleable via env.VISUAL_REGRESSION)"
      ],
      benefits: {
        testers: [
          "4-hour weekly mastery of advanced Cypress patterns and architecture",
          "Domain-driven test design keeping specs clean and maintainable",
          "Type-safe development with full TypeScript strict mode",
          "Production debugging with HAR capture and detailed Allure reports",
          "Intelligent test organization with Actors, Tasks, and Page Objects"
        ],
        business: [
          "Enterprise-scale framework supporting thousands of test executions",
          "Flaky test detection preventing unreliable test suites",
          "CI/CD optimization through intelligent spec sharding",
          "Production-ready reporting with Allure for stakeholder visibility",
          "Maintainable architecture reducing long-term automation costs by 70%"
        ]
      },
      technologies: ["Cypress", "TypeScript", "Screenplay Pattern", "Allure", "Zod"],
      complexity: "Advanced" as const,
      diagram: <HybridDiagram />,
      codeExample: `// MemberActor.ts - Screenplay Pattern
export class MemberActor {
  constructor(private identity: Member) {}
  
  async performsSchedule(visit: MemberVisit) {
    cy.allure().step('Member schedules visit');
    await memberTasks.loginAs(this.identity.name);
    await memberTasks.scheduleVisit(visit);
    await memberTasks.logout();
  }
}

// visit-lifecycle.cy.ts - Domain-Driven Spec
describe('Visit Lifecycle', () => {
  it('completes member to CTM flow', () => {
    cy.allure().epic('Healthcare').feature('Visit Management');
    
    const member = new MemberActor(memberData[0]);
    const ctm = new CTMActor(ctmData[0]);
    
    member.performsSchedule(visitData);
    ctm.performsComplete(visitData);
  });
});`
    },
    {
      id: "playwright-pom-allure-jira",
      title: "Playwright POM + Allure + Jira Integration",
      description: "Enterprise-grade Playwright + TypeScript framework with production-ready Page Object Model architecture, Allure reporting, Jira synchronization, and comprehensive artifact collection. Built for Fortune 500 scale with daily automated dashboards, functional vs script failure tracking, and complete traceability from test to Jira issue.",
      features: [
        "Modular Page Object Model with centralized selector repository isolating all locators",
        "Factory pattern generating typed domain data (members, visits, providers) for data-driven testing",
        "Allure reporter with automatic screenshot, video, trace, and network log attachment",
        "Jira integration mapping test results to issues with auto-update Pass/Fail status",
        "Fixture-driven test data (JSON/Excel) editable by manual testers without code changes",
        "Production-grade CI/CD pipeline with daily automated runs and dashboard publishing",
        "Comprehensive artifact collection: screenshots, videos, traces, console logs, network HAR",
        "Reporting summary distinguishing functional defects from script failures with flakiness tracking",
        "Global test hooks for setup, teardown, and automatic artifact attachment on failure",
        "TypeScript interfaces for Visit, Member, CTMVisit with enum validation for statuses",
        "Reusable custom commands wrapping page objects for Member/CTM role-based actions",
        "Rule matrix controlling valid actions per visit status preventing invalid test scenarios"
      ],
      benefits: {
        testers: [
          "4-hour weekly training delivering production-grade Playwright POM + reporting mastery",
          "Clear separation: page objects for how, fixtures for what, tests for verify",
          "Manual testers edit JSON fixtures to create new test scenarios without coding",
          "Instant debugging with attached screenshots, traces, videos, and network logs in Allure",
          "Jira-linked failures enabling one-click navigation from dashboard to detailed test evidence",
          "Flakiness detection across runs identifying unstable tests requiring investigation",
          "Production-grade artifact collection capturing full execution context for post-mortem analysis"
        ],
        business: [
          "Complete traceability: Allure to Jira to Production defect with full evidence chain",
          "Daily automated dashboard showing pass rate, functional vs script failures, and trends",
          "88% faster defect triage through automatic functional/script failure classification",
          "Stakeholder-friendly Allure reports with graphs, trends, and business-readable summaries",
          "Manual QA team becomes data contributor through fixture editing without automation dependency",
          "CI/CD integration with GitHub Actions/Jenkins enabling daily regression validation",
          "Historical trend analysis identifying test stability patterns and coverage gaps",
          "Enterprise scalability supporting thousands of tests with parallel execution and sharding"
        ]
      },
      technologies: ["Playwright", "TypeScript", "Page Objects", "Allure", "Jira API", "CI/CD"],
      complexity: "Advanced" as const,
      diagram: <POMDiagram />,
      folderStructure: `qa-automation/
├── tests/
│   ├── member/
│   │   └── book-visit.spec.ts
│   └── ctm/
│       └── manage-visit.spec.ts
├── pages/
│   ├── member/
│   │   ├── loginPage.ts
│   │   └── bookVisitPage.ts
│   └── ctm/
│       ├── loginPage.ts
│       └── visitDashboardPage.ts
├── support/
│   ├── commands/
│   │   ├── memberCommands.ts
│   │   └── ctmCommands.ts
│   ├── factory/
│   │   ├── memberFactory.ts
│   │   └── visitFactory.ts
│   ├── types/domain.ts
│   ├── utils/
│   │   ├── selectors.ts
│   │   ├── dataLoader.ts
│   │   └── visit-rules.ts
│   └── plugins/
│       ├── allureReporter.ts
│       └── jiraSync.ts
├── fixtures/
│   ├── memberData.json
│   └── visitData.json
└── playwright.config.ts`,
      structureDetails: [
        {
          folder: "tests/",
          purpose: "Contains all test specifications organized by user role (member, CTM, admin). Each test file uses page objects and fixtures to verify user workflows.",
          keyFiles: [
            "member/book-visit.spec.ts - Member booking workflow with Allure reporting and Jira linking",
            "ctm/manage-visit.spec.ts - Care Team Member workflow for visit management",
            "Each test includes @JIRA tags for traceability and uses Allure steps for detailed reporting"
          ]
        },
        {
          folder: "pages/",
          purpose: "Page Object Model classes containing all element locators and page-specific actions. Each page class encapsulates UI interactions for a single page or component.",
          keyFiles: [
            "member/loginPage.ts - Login page with username/password fields and login action",
            "member/bookVisitPage.ts - Visit booking form with provider selection and time slot booking",
            "ctm/visitDashboardPage.ts - Dashboard for CTM to view and manage scheduled visits",
            "Each page uses centralized selectors from utils/selectors.ts for consistency"
          ]
        },
        {
          folder: "support/commands/",
          purpose: "Reusable custom commands wrapping page objects for complex, multi-step actions. These commands provide role-based workflows (Member, CTM, Admin).",
          keyFiles: [
            "memberCommands.ts - Member-specific workflows like loginAsMember(), scheduleVisit()",
            "ctmCommands.ts - CTM workflows like loginAsCTM(), completeVisit(), reviewVisit()",
            "Commands use page objects internally and add Allure steps for reporting"
          ]
        },
        {
          folder: "support/factory/",
          purpose: "Factory pattern for generating test data. Creates typed domain objects with sensible defaults and allows overrides for specific test scenarios.",
          keyFiles: [
            "memberFactory.ts - Creates Member objects with name, email, state, insurance",
            "visitFactory.ts - Creates Visit objects with provider, date/time, visit type",
            "Factories ensure consistent test data structure across all tests"
          ]
        },
        {
          folder: "support/types/",
          purpose: "TypeScript interfaces and types for domain models. Ensures type safety across the entire framework.",
          keyFiles: [
            "domain.ts - Member, Provider, Visit, CTMVisit interfaces",
            "Enums for VisitStatus (Scheduled, InProgress, Completed, Cancelled)",
            "VisitAction union types for valid state transitions"
          ]
        },
        {
          folder: "support/utils/",
          purpose: "Utility functions for common tasks like data loading, selector management, and business rule validation.",
          keyFiles: [
            "selectors.ts - Centralized repository of all CSS/XPath selectors",
            "dataLoader.ts - Loads and validates fixture data (JSON/Excel)",
            "visit-rules.ts - Business rule matrix for valid visit state transitions",
            "Utilities are pure functions with no side effects for easy testing"
          ]
        },
        {
          folder: "support/plugins/",
          purpose: "Framework-level integrations for reporting and external systems.",
          keyFiles: [
            "allureReporter.ts - Configures Allure reporter with screenshot/video/trace attachment",
            "jiraSync.ts - Syncs test results to Jira issues, updates Pass/Fail status",
            "Plugins run as part of test lifecycle hooks (beforeEach, afterEach)"
          ]
        },
        {
          folder: "fixtures/",
          purpose: "Test data files in JSON/Excel format. Editable by manual testers without code changes. Loaded via dataLoader utility.",
          keyFiles: [
            "memberData.json - Array of member test data (name, email, credentials)",
            "visitData.json - Array of visit scenarios (provider, time, visit type, expected results)",
            "Data files support multiple test scenarios from single test script"
          ]
        },
        {
          folder: "Root Configuration",
          purpose: "Framework configuration files defining test execution, reporting, and CI/CD settings.",
          keyFiles: [
            "playwright.config.ts - Test timeout, browsers, retries, parallel execution, Allure reporter",
            "CI/CD pipeline (GitHub Actions/Jenkins) - Daily automated runs, artifact publishing",
            "Environment variables for JIRA_BASE, MEMBER_PASSWORD, CTM_PASSWORD"
          ]
        }
      ],
      codeExample: `// pages/member/loginPage.ts
export class MemberLoginPage {
  constructor(private page: Page) {}
  
  async login(username: string, password: string) {
    await allure.step('Member login', async () => {
      await this.page.fill('[data-testid="username"]', username);
      await this.page.fill('[data-testid="password"]', password);
      await this.page.click('[data-testid="login-btn"]');
    });
  }
}

// tests/member/book-visit.spec.ts
import { test } from '@playwright/test';
import { allure } from 'allure-playwright';
import { MemberLoginPage } from '../../pages/member/loginPage';
import { loadMembers, loadVisits } from '../../support/utils/dataLoader';

test.describe('Member Visit Booking @JIRA-PROJECT', () => {
  test('should book visit successfully @JIRA-123', async ({ page }) => {
    await allure.epic('Healthcare');
    await allure.feature('Visit Management');
    await allure.issue('JIRA-123', 'https://jira.company.com/browse/JIRA-123');
    
    const memberData = await loadMembers();
    const visitData = await loadVisits();
    
    const loginPage = new MemberLoginPage(page);
    await loginPage.login(memberData[0].username, process.env.MEMBER_PASSWORD!);
    
    // Booking flow continues using page objects
  });
});`
    }
  ];

  return (
    <section id="frameworks" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Production-Grade Framework Architectures
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
          9 battle-tested frameworks for Playwright & Cypress. Each framework is production-proven, scalable to thousands of tests, and includes complete implementation guides with real-world code examples.
        </p>
        <p className="text-base text-muted-foreground max-w-3xl mx-auto">
          Every framework includes: Detailed architecture diagrams • Step-by-step implementation guides • Production code examples for both Playwright & Cypress • Best practices & anti-patterns • Performance optimization strategies
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frameworks.map((framework) => (
            <FrameworkCard key={framework.id} {...framework} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Have questions about which framework to choose?
          </p>
          <Link 
            to="https://wa.me/31616270233" 
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 bg-success hover:bg-success/90 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Get Expert Guidance on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
};