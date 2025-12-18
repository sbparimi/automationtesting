export interface CodexLesson {
  id: string;
  title: string;
  duration: string;
  description: string;
}

export interface CodexSection {
  id: string;
  title: string;
  description?: string;
  lessons: CodexLesson[];
}

export interface CodexCourse {
  id: string;
  title: string;
  description: string;
  sections: CodexSection[];
}

// For Beginners - Foundation (52 lessons across 5 sections)
const beginnerSections: CodexSection[] = [
  {
    id: "codex-intro",
    title: "Introduction to AI-Powered Test Automation",
    description: "Understanding AI code generation for testing",
    lessons: [
      { id: "codex-1", title: "What is OpenAI Codex and How It Transforms Testing", duration: "25 min", description: "Understanding AI-powered code generation for test automation" },
      { id: "codex-2", title: "Codex vs ChatGPT vs Copilot: Which Tool for Testing?", duration: "20 min", description: "Comparing AI assistants and their testing capabilities" },
      { id: "codex-3", title: "Setting Up VSCode for AI-Assisted Test Development", duration: "30 min", description: "Installing extensions and configuring your IDE for maximum productivity" },
      { id: "codex-4", title: "GitHub Copilot Installation and Configuration", duration: "25 min", description: "Step-by-step setup of Copilot in VSCode for testing" },
      { id: "codex-5", title: "Understanding Prompt Engineering Basics for Testers", duration: "30 min", description: "How to communicate effectively with AI to generate test code" },
      { id: "codex-6", title: "Your First AI-Generated Playwright Test", duration: "35 min", description: "Hands-on: Generate a complete test using natural language" },
      { id: "codex-7", title: "Your First AI-Generated Cypress Test", duration: "35 min", description: "Hands-on: Generate a complete Cypress test using AI" },
      { id: "codex-8", title: "Understanding AI Limitations in Test Generation", duration: "20 min", description: "When AI fails and how to handle it" },
      { id: "codex-9", title: "The Human-AI Collaboration Model for Testing", duration: "25 min", description: "Best practices for working alongside AI assistants" },
      { id: "codex-10", title: "Setting Up Your AI-Assisted Testing Workflow", duration: "30 min", description: "Creating an efficient development environment" },
    ]
  },
  {
    id: "codex-vscode",
    title: "VSCode Mastery for AI-Assisted Testing",
    description: "Master your development environment",
    lessons: [
      { id: "codex-11", title: "Essential VSCode Extensions for Test Automation", duration: "25 min", description: "Must-have extensions for Playwright and Cypress development" },
      { id: "codex-12", title: "Keyboard Shortcuts That 10x Your Productivity", duration: "20 min", description: "Master shortcuts for rapid test development" },
      { id: "codex-13", title: "Using Copilot Inline Suggestions Effectively", duration: "30 min", description: "Accepting, modifying, and rejecting AI suggestions" },
      { id: "codex-14", title: "Copilot Chat: Asking Questions About Your Test Code", duration: "25 min", description: "Interactive debugging and learning with AI" },
      { id: "codex-15", title: "Multi-Cursor Editing with AI Assistance", duration: "20 min", description: "Editing multiple test cases simultaneously" },
      { id: "codex-16", title: "Code Snippets and AI: A Powerful Combination", duration: "25 min", description: "Creating reusable test templates with AI" },
      { id: "codex-17", title: "Using AI to Generate Test Data", duration: "30 min", description: "Creating realistic test data automatically" },
      { id: "codex-18", title: "Refactoring Tests with AI Suggestions", duration: "25 min", description: "Improving code quality using AI recommendations" },
      { id: "codex-19", title: "Debugging Tests with Copilot Assistance", duration: "30 min", description: "Finding and fixing test failures faster" },
      { id: "codex-20", title: "VSCode Tasks for Automated Test Execution", duration: "25 min", description: "Setting up one-click test runners" },
    ]
  },
  {
    id: "codex-prompts-basic",
    title: "Prompt Engineering for Test Automation",
    description: "Master the art of AI communication",
    lessons: [
      { id: "codex-21", title: "The Anatomy of an Effective Testing Prompt", duration: "30 min", description: "Structure your prompts for optimal AI output" },
      { id: "codex-22", title: "Context Loading: Helping AI Understand Your App", duration: "25 min", description: "Providing enough context for accurate test generation" },
      { id: "codex-23", title: "Generating Page Object Models with Natural Language", duration: "35 min", description: "Create complete POMs using conversational prompts" },
      { id: "codex-24", title: "Prompts for Generating Locator Strategies", duration: "30 min", description: "AI-assisted element identification" },
      { id: "codex-25", title: "Creating Test Suites from User Stories", duration: "35 min", description: "Converting requirements to tests with AI" },
      { id: "codex-26", title: "Generating Assertion Libraries with AI", duration: "25 min", description: "Building comprehensive verification functions" },
      { id: "codex-27", title: "Error Handling Code Generation", duration: "30 min", description: "Creating robust error handling patterns" },
      { id: "codex-28", title: "Generating Wait Strategies for Dynamic Content", duration: "25 min", description: "AI-assisted timing and synchronization" },
      { id: "codex-29", title: "Multi-Step Prompts for Complex Test Scenarios", duration: "35 min", description: "Breaking down complex requirements" },
      { id: "codex-30", title: "Iterative Refinement: Improving AI Output", duration: "30 min", description: "Techniques for getting better results" },
      { id: "codex-31", title: "Prompt Templates for Common Testing Patterns", duration: "25 min", description: "Reusable prompts for frequent tasks" },
      { id: "codex-32", title: "Documenting Your Prompt Library", duration: "20 min", description: "Building a team prompt knowledge base" },
    ]
  },
  {
    id: "codex-playwright-basic",
    title: "Basic Playwright with AI",
    description: "AI-powered Playwright automation",
    lessons: [
      { id: "codex-33", title: "AI-Generated Playwright Project Setup", duration: "35 min", description: "Let AI scaffold your project structure" },
      { id: "codex-34", title: "Generating Navigation Tests with Copilot", duration: "30 min", description: "Create browser navigation tests automatically" },
      { id: "codex-35", title: "Form Interaction Tests via AI Prompts", duration: "35 min", description: "Generate form filling and submission tests" },
      { id: "codex-36", title: "AI-Assisted Screenshot Testing Setup", duration: "25 min", description: "Visual regression testing with AI help" },
      { id: "codex-37", title: "Generating API Mocking Code", duration: "30 min", description: "Create mock API responses using AI" },
      { id: "codex-38", title: "Authentication Test Generation", duration: "35 min", description: "Login/logout test suites via AI" },
      { id: "codex-39", title: "AI-Generated Test Configuration Files", duration: "25 min", description: "playwright.config.ts creation and customization" },
      { id: "codex-40", title: "Creating Test Fixtures with AI Assistance", duration: "30 min", description: "Reusable test setup and teardown" },
      { id: "codex-41", title: "Generating Cross-Browser Test Configurations", duration: "25 min", description: "Multi-browser testing setup via AI" },
      { id: "codex-42", title: "AI-Assisted Test Organization and Structure", duration: "25 min", description: "Organizing tests for maintainability" },
    ]
  },
  {
    id: "codex-cypress-basic",
    title: "Basic Cypress with AI",
    description: "AI-powered Cypress automation",
    lessons: [
      { id: "codex-43", title: "AI-Generated Cypress Project Bootstrap", duration: "35 min", description: "Scaffold Cypress projects with AI" },
      { id: "codex-44", title: "Custom Commands Generation with Copilot", duration: "30 min", description: "Create reusable Cypress commands" },
      { id: "codex-45", title: "E2E Test Generation for User Journeys", duration: "35 min", description: "Complete user flow tests via AI" },
      { id: "codex-46", title: "Component Testing with AI Assistance", duration: "30 min", description: "Generate component tests automatically" },
      { id: "codex-47", title: "AI-Generated Intercept and Stub Patterns", duration: "30 min", description: "Network mocking with AI help" },
      { id: "codex-48", title: "Generating Cypress Plugins with AI", duration: "25 min", description: "Extend Cypress functionality" },
      { id: "codex-49", title: "cypress.config.ts Generation and Optimization", duration: "25 min", description: "Configuration file creation with AI" },
      { id: "codex-50", title: "AI-Assisted Selector Strategies for Cypress", duration: "30 min", description: "Best practices for element selection" },
      { id: "codex-51", title: "Generating Test Hooks and Lifecycle Methods", duration: "25 min", description: "before, after, beforeEach patterns" },
      { id: "codex-52", title: "Recap: Your AI-Assisted Testing Foundation", duration: "20 min", description: "Review and next steps" },
    ]
  }
];

// For Professionals - Intermediate (54 lessons across 5 sections)
const professionalSections: CodexSection[] = [
  {
    id: "codex-prompts-advanced",
    title: "Advanced Prompt Engineering",
    description: "Master complex prompting techniques",
    lessons: [
      { id: "codex-53", title: "Chain-of-Thought Prompting for Complex Tests", duration: "35 min", description: "Multi-step reasoning for test generation" },
      { id: "codex-54", title: "Few-Shot Learning: Teaching AI Your Patterns", duration: "30 min", description: "Provide examples for better output" },
      { id: "codex-55", title: "Zero-Shot Prompting for Novel Scenarios", duration: "30 min", description: "Generating tests without examples" },
      { id: "codex-56", title: "Role-Based Prompting: AI as Senior SDET", duration: "25 min", description: "Persona-based prompts for quality output" },
      { id: "codex-57", title: "Constraint-Based Prompts for Code Standards", duration: "30 min", description: "Enforcing coding conventions via prompts" },
      { id: "codex-58", title: "Generating TypeScript Interfaces with AI", duration: "35 min", description: "Type definitions for test frameworks" },
      { id: "codex-59", title: "AI-Assisted Test Case Design from Specifications", duration: "35 min", description: "Converting specs to executable tests" },
      { id: "codex-60", title: "Generating Parameterized Test Templates", duration: "30 min", description: "Data-driven test creation" },
      { id: "codex-61", title: "Prompt Chaining for Framework Generation", duration: "40 min", description: "Building complete frameworks step-by-step" },
      { id: "codex-62", title: "Error Recovery Prompts: When AI Gets It Wrong", duration: "25 min", description: "Techniques for correcting AI mistakes" },
      { id: "codex-63", title: "Domain-Specific Prompt Libraries", duration: "30 min", description: "Industry-specific testing prompts" },
      { id: "codex-64", title: "Measuring and Improving Prompt Effectiveness", duration: "25 min", description: "Metrics for AI-assisted testing" },
    ]
  },
  {
    id: "codex-pom",
    title: "Production-Grade Page Object Model with AI",
    description: "Enterprise POM architecture",
    lessons: [
      { id: "codex-65", title: "AI-Generated Base Page Class Architecture", duration: "40 min", description: "Foundation for scalable POMs" },
      { id: "codex-66", title: "Generating Page Factories with Copilot", duration: "35 min", description: "Dynamic page object instantiation" },
      { id: "codex-67", title: "AI-Assisted Component Pattern Implementation", duration: "35 min", description: "Reusable UI component abstractions" },
      { id: "codex-68", title: "Generating Fluent Interface Methods", duration: "30 min", description: "Chainable page object methods" },
      { id: "codex-69", title: "AI-Generated Lazy Loading Patterns", duration: "30 min", description: "Performance-optimized page objects" },
      { id: "codex-70", title: "Creating Self-Healing Locators with AI", duration: "35 min", description: "Resilient element identification" },
      { id: "codex-71", title: "AI-Assisted Page Object Documentation", duration: "25 min", description: "Auto-generated JSDoc comments" },
      { id: "codex-72", title: "Generating Page Object Unit Tests", duration: "30 min", description: "Testing your test framework" },
      { id: "codex-73", title: "AI-Generated Page Object Inheritance Hierarchies", duration: "35 min", description: "Complex POM structures" },
      { id: "codex-74", title: "Refactoring Legacy Page Objects with AI", duration: "35 min", description: "Modernizing existing code" },
    ]
  },
  {
    id: "codex-api",
    title: "AI-Assisted API Testing Integration",
    description: "Full-stack test automation",
    lessons: [
      { id: "codex-75", title: "Generating API Test Clients with AI", duration: "35 min", description: "REST API testing foundations" },
      { id: "codex-76", title: "AI-Generated Request/Response Schemas", duration: "30 min", description: "Type-safe API testing" },
      { id: "codex-77", title: "Creating API Test Utilities with Copilot", duration: "30 min", description: "Helper functions for API tests" },
      { id: "codex-78", title: "AI-Assisted GraphQL Testing Setup", duration: "35 min", description: "GraphQL query and mutation tests" },
      { id: "codex-79", title: "Generating Authentication Token Handlers", duration: "30 min", description: "OAuth and JWT token management" },
      { id: "codex-80", title: "AI-Generated API Contract Tests", duration: "35 min", description: "Schema validation testing" },
      { id: "codex-81", title: "Creating API Mock Servers with AI", duration: "35 min", description: "Standalone mock server generation" },
      { id: "codex-82", title: "AI-Assisted Database Seeding Scripts", duration: "30 min", description: "Test data preparation" },
      { id: "codex-83", title: "Generating API Performance Test Scripts", duration: "35 min", description: "Load testing foundations" },
      { id: "codex-84", title: "AI-Generated API Test Reporting", duration: "25 min", description: "Custom API test reports" },
    ]
  },
  {
    id: "codex-cicd",
    title: "CI/CD Pipeline Generation with AI",
    description: "Automated deployment pipelines",
    lessons: [
      { id: "codex-85", title: "AI-Generated GitHub Actions for Playwright", duration: "40 min", description: "Complete CI workflow generation" },
      { id: "codex-86", title: "AI-Generated GitHub Actions for Cypress", duration: "40 min", description: "Cypress-specific CI pipelines" },
      { id: "codex-87", title: "Creating GitLab CI Pipelines with AI", duration: "35 min", description: "GitLab CI/CD configuration" },
      { id: "codex-88", title: "AI-Assisted Azure DevOps Pipeline Setup", duration: "35 min", description: "Azure Pipelines for testing" },
      { id: "codex-89", title: "Generating Jenkins Pipeline Scripts", duration: "35 min", description: "Jenkinsfile creation with AI" },
      { id: "codex-90", title: "AI-Generated Docker Configurations for Tests", duration: "35 min", description: "Containerized test execution" },
      { id: "codex-91", title: "Creating Parallel Test Execution Configs", duration: "30 min", description: "Sharding and parallelization" },
      { id: "codex-92", title: "AI-Assisted Test Environment Management", duration: "30 min", description: "Dynamic environment configuration" },
      { id: "codex-93", title: "Generating Slack/Teams Notifications", duration: "25 min", description: "Test result notifications" },
      { id: "codex-94", title: "AI-Generated Artifact Management", duration: "25 min", description: "Screenshots, videos, reports storage" },
      { id: "codex-95", title: "Creating Scheduled Test Runs with AI", duration: "25 min", description: "Cron-based test execution" },
      { id: "codex-96", title: "AI-Assisted Pipeline Optimization", duration: "30 min", description: "Reducing CI/CD execution time" },
    ]
  },
  {
    id: "codex-patterns",
    title: "Advanced Test Patterns with AI",
    description: "Enterprise testing patterns",
    lessons: [
      { id: "codex-97", title: "Generating BDD Step Definitions with AI", duration: "35 min", description: "Cucumber/Gherkin automation" },
      { id: "codex-98", title: "AI-Generated Data-Driven Test Frameworks", duration: "40 min", description: "External data source integration" },
      { id: "codex-99", title: "Creating Keyword-Driven Tests with AI", duration: "35 min", description: "Business-readable test creation" },
      { id: "codex-100", title: "AI-Assisted Visual Regression Setup", duration: "35 min", description: "Screenshot comparison automation" },
      { id: "codex-101", title: "Generating Accessibility Test Suites", duration: "30 min", description: "WCAG compliance testing" },
      { id: "codex-102", title: "AI-Generated Performance Testing Scripts", duration: "35 min", description: "Lighthouse and Web Vitals" },
      { id: "codex-103", title: "Creating Mobile Test Configurations with AI", duration: "30 min", description: "Responsive and device testing" },
      { id: "codex-104", title: "AI-Assisted Security Testing Setup", duration: "35 min", description: "Basic security test generation" },
      { id: "codex-105", title: "Generating Test Retry and Recovery Logic", duration: "30 min", description: "Flaky test handling" },
      { id: "codex-106", title: "AI-Generated Test Tagging and Filtering", duration: "25 min", description: "Organizing large test suites" },
    ]
  }
];

// For Practitioners - Advanced (54 lessons across 5 sections)
const practitionerSections: CodexSection[] = [
  {
    id: "codex-enterprise",
    title: "Enterprise Framework Architecture with AI",
    description: "Large-scale system design",
    lessons: [
      { id: "codex-107", title: "AI-Designed Monorepo Test Architecture", duration: "45 min", description: "Large-scale project organization" },
      { id: "codex-108", title: "Generating Dependency Injection Frameworks", duration: "40 min", description: "IoC containers for testing" },
      { id: "codex-109", title: "AI-Generated Service Layer Abstractions", duration: "40 min", description: "Decoupled test architectures" },
      { id: "codex-110", title: "Creating Test Configuration Management Systems", duration: "35 min", description: "Environment-agnostic testing" },
      { id: "codex-111", title: "AI-Assisted Test Registry Implementation", duration: "35 min", description: "Dynamic test discovery" },
      { id: "codex-112", title: "Generating Cross-Platform Test Runners", duration: "40 min", description: "Unified test execution" },
      { id: "codex-113", title: "AI-Generated Plugin Architectures", duration: "40 min", description: "Extensible framework design" },
      { id: "codex-114", title: "Creating AI-Powered Test Generators", duration: "45 min", description: "Meta-testing with AI" },
      { id: "codex-115", title: "AI-Assisted Framework Migration Strategies", duration: "35 min", description: "Upgrading legacy frameworks" },
      { id: "codex-116", title: "Generating Framework Documentation with AI", duration: "30 min", description: "Auto-generated docs and guides" },
      { id: "codex-117", title: "AI-Generated Code Quality Gates", duration: "35 min", description: "Automated code review for tests" },
      { id: "codex-118", title: "Creating Self-Documenting Test Suites", duration: "30 min", description: "Living documentation generation" },
    ]
  },
  {
    id: "codex-intelligence",
    title: "AI-Powered Test Intelligence",
    description: "ML-based test optimization",
    lessons: [
      { id: "codex-119", title: "Implementing AI-Based Test Selection", duration: "45 min", description: "Smart test prioritization" },
      { id: "codex-120", title: "Generating Flakiness Detection Systems", duration: "40 min", description: "Identifying unreliable tests" },
      { id: "codex-121", title: "AI-Assisted Root Cause Analysis", duration: "40 min", description: "Automated failure diagnosis" },
      { id: "codex-122", title: "Creating Test Impact Analysis Tools", duration: "40 min", description: "Code change to test mapping" },
      { id: "codex-123", title: "AI-Generated Test Coverage Optimization", duration: "35 min", description: "Maximizing coverage efficiency" },
      { id: "codex-124", title: "Implementing Predictive Test Scheduling", duration: "40 min", description: "ML-based test ordering" },
      { id: "codex-125", title: "AI-Assisted Test Maintenance Automation", duration: "35 min", description: "Self-healing test suites" },
      { id: "codex-126", title: "Generating Test Analytics Dashboards", duration: "35 min", description: "Real-time test intelligence" },
      { id: "codex-127", title: "AI-Powered Duplicate Test Detection", duration: "30 min", description: "Eliminating redundancy" },
      { id: "codex-128", title: "Creating AI Test Assistants for Teams", duration: "40 min", description: "Custom AI tools for testing" },
    ]
  },
  {
    id: "codex-cicd-advanced",
    title: "Advanced CI/CD with AI",
    description: "Cloud-native test infrastructure",
    lessons: [
      { id: "codex-129", title: "AI-Generated Multi-Stage Pipeline Architectures", duration: "45 min", description: "Complex deployment pipelines" },
      { id: "codex-130", title: "Creating Infrastructure-as-Code for Test Envs", duration: "40 min", description: "Terraform/Pulumi with AI" },
      { id: "codex-131", title: "AI-Assisted Kubernetes Test Deployments", duration: "45 min", description: "Container orchestration for tests" },
      { id: "codex-132", title: "Generating Blue-Green Test Strategies", duration: "35 min", description: "Zero-downtime test deployments" },
      { id: "codex-133", title: "AI-Generated Feature Flag Test Integration", duration: "35 min", description: "Testing with feature toggles" },
      { id: "codex-134", title: "Creating AI-Powered Quality Gates", duration: "40 min", description: "Intelligent deployment decisions" },
      { id: "codex-135", title: "AI-Assisted Chaos Engineering Integration", duration: "40 min", description: "Resilience testing automation" },
      { id: "codex-136", title: "Generating Canary Test Deployments", duration: "35 min", description: "Progressive rollout testing" },
      { id: "codex-137", title: "AI-Generated Rollback Automation", duration: "35 min", description: "Automated failure recovery" },
      { id: "codex-138", title: "Creating Cross-Region Test Orchestration", duration: "40 min", description: "Global test execution" },
    ]
  },
  {
    id: "codex-reporting",
    title: "Production-Grade Reporting with AI",
    description: "Executive dashboards and analytics",
    lessons: [
      { id: "codex-139", title: "AI-Generated Allure Report Customization", duration: "35 min", description: "Enterprise reporting setup" },
      { id: "codex-140", title: "Creating Executive Dashboard Templates", duration: "35 min", description: "C-level test reporting" },
      { id: "codex-141", title: "AI-Assisted Trend Analysis Visualizations", duration: "35 min", description: "Historical test analytics" },
      { id: "codex-142", title: "Generating Custom Report Aggregators", duration: "35 min", description: "Multi-source report merging" },
      { id: "codex-143", title: "AI-Generated Defect Prediction Reports", duration: "40 min", description: "Predictive quality metrics" },
      { id: "codex-144", title: "Creating Real-Time Test Monitoring Dashboards", duration: "40 min", description: "Live execution tracking" },
      { id: "codex-145", title: "AI-Assisted Cost-of-Quality Reporting", duration: "35 min", description: "ROI and cost analysis" },
      { id: "codex-146", title: "Generating Compliance Audit Reports", duration: "35 min", description: "Regulatory reporting automation" },
      { id: "codex-147", title: "AI-Generated Release Readiness Reports", duration: "35 min", description: "Go/no-go decision support" },
      { id: "codex-148", title: "Creating AI-Powered Report Narratives", duration: "35 min", description: "Natural language summaries" },
    ]
  },
  {
    id: "codex-team",
    title: "Team Productivity and Best Practices",
    description: "AI-first team culture",
    lessons: [
      { id: "codex-149", title: "Establishing AI-Assisted Code Review Workflows", duration: "35 min", description: "Team quality processes" },
      { id: "codex-150", title: "Creating Team Prompt Libraries and Standards", duration: "30 min", description: "Shared AI knowledge bases" },
      { id: "codex-151", title: "AI-Generated Onboarding Documentation", duration: "30 min", description: "New team member guides" },
      { id: "codex-152", title: "Implementing AI Pair Programming Practices", duration: "35 min", description: "Collaborative AI usage" },
      { id: "codex-153", title: "Creating AI Usage Guidelines and Governance", duration: "30 min", description: "Responsible AI policies" },
      { id: "codex-154", title: "AI-Assisted Test Case Review Processes", duration: "30 min", description: "Quality assurance for AI output" },
      { id: "codex-155", title: "Generating Training Materials with AI", duration: "35 min", description: "Team skill development" },
      { id: "codex-156", title: "AI-Powered Knowledge Base Creation", duration: "35 min", description: "Documentation automation" },
      { id: "codex-157", title: "Creating AI Metrics and KPIs for Teams", duration: "30 min", description: "Measuring AI impact" },
      { id: "codex-158", title: "AI-Assisted Technical Debt Management", duration: "35 min", description: "Code quality improvement" },
      { id: "codex-159", title: "Building an AI-First Testing Culture", duration: "30 min", description: "Organizational transformation" },
      { id: "codex-160", title: "Future of AI in Test Automation: What's Next", duration: "30 min", description: "Emerging trends and technologies" },
    ]
  }
];

export const allCodexCourses: CodexCourse[] = [
  {
    id: "codex-beginners",
    title: "AI-Powered Testing Foundations",
    description: "Master the basics of using OpenAI Codex and GitHub Copilot for Playwright and Cypress test automation. Learn prompt engineering, VSCode setup, and basic AI-assisted test development.",
    sections: beginnerSections,
  },
  {
    id: "codex-professionals",
    title: "Production-Grade AI Automation",
    description: "Build enterprise frameworks with AI assistance. Master advanced prompt engineering, CI/CD pipeline generation, API testing, and production-ready Page Object Models.",
    sections: professionalSections,
  },
  {
    id: "codex-practitioners",
    title: "Enterprise AI Testing Architecture",
    description: "Design large-scale AI-powered testing systems. Implement test intelligence, advanced CI/CD, executive reporting, and build an AI-first testing culture.",
    sections: practitionerSections,
  },
];
