export const pomMindmap = {
  name: "Page Object Model",
  children: [
    {
      name: "Architecture Foundation",
      children: [
        {
          name: "Page Classes",
          attributes: { description: "Encapsulated UI logic" },
          children: [
            { name: "Locator Strategy", attributes: { description: "CSS/XPath selectors" } },
            { name: "Action Methods", attributes: { description: "Click, type, select" } },
            { name: "Wait Strategies", attributes: { description: "Explicit/implicit waits" } },
            { name: "Element Collections", attributes: { description: "Dynamic element handling" } }
          ]
        },
        {
          name: "Base Page Class",
          attributes: { description: "Common abstractions" },
          children: [
            { name: "Browser Context", attributes: { description: "Page/browser instance" } },
            { name: "Navigation Utils", attributes: { description: "URL handling" } },
            { name: "Screenshot Utils", attributes: { description: "Evidence capture" } },
            { name: "JavaScript Executor", attributes: { description: "Custom JS execution" } }
          ]
        }
      ]
    },
    {
      name: "Playwright Integration",
      children: [
        { name: "Page Objects", attributes: { description: "Playwright page fixture" } },
        { name: "Locator API", attributes: { description: "Auto-waiting locators" } },
        { name: "Test Isolation", attributes: { description: "Fresh context per test" } },
        { name: "Network Interception", attributes: { description: "Mock API responses" } }
      ]
    },
    {
      name: "Advanced Patterns",
      children: [
        { name: "Component Objects", attributes: { description: "Reusable UI components" } },
        { name: "Page Factory", attributes: { description: "Dependency injection" } },
        { name: "Fluent Interface", attributes: { description: "Method chaining" } },
        { name: "Builder Pattern", attributes: { description: "Complex object creation" } }
      ]
    },
    {
      name: "DevOps Integration",
      children: [
        { name: "Docker Containers", attributes: { description: "Isolated test execution" } },
        { name: "Parallel Execution", attributes: { description: "Worker threads/sharding" } },
        { name: "CI/CD Pipelines", attributes: { description: "GitHub Actions/Jenkins" } },
        { name: "Test Reports", attributes: { description: "HTML/Allure reporting" } }
      ]
    }
  ]
};

export const keywordDrivenMindmap = {
  name: "Keyword Driven",
  children: [
    {
      name: "Keyword Library",
      children: [
        { name: "Navigation Keywords", attributes: { description: "Navigate, GoTo" } },
        { name: "Action Keywords", attributes: { description: "Click, Type, Select" } },
        { name: "Validation Keywords", attributes: { description: "VerifyText, CheckElement" } }
      ]
    },
    {
      name: "Test Data Layer",
      children: [
        { name: "Excel/CSV Sheets", attributes: { description: "Business users edit" } },
        { name: "JSON Config", attributes: { description: "Structured data" } },
        { name: "Database", attributes: { description: "Dynamic test data" } }
      ]
    },
    {
      name: "Execution Engine",
      children: [
        { name: "Keyword Parser", attributes: { description: "Read & interpret" } },
        { name: "Action Mapper", attributes: { description: "Map to methods" } },
        { name: "Result Logger", attributes: { description: "Track execution" } }
      ]
    },
    {
      name: "Advanced Features",
      children: [
        { name: "Custom Keywords", attributes: { description: "Business-specific" } },
        { name: "Error Recovery", attributes: { description: "Self-healing" } },
        { name: "CI/CD", attributes: { description: "Jenkins/Azure" } }
      ]
    }
  ]
};

export const dataDrivenMindmap = {
  name: "Data Driven",
  children: [
    {
      name: "Data Sources",
      children: [
        { name: "JSON Files", attributes: { description: "Structured data" } },
        { name: "CSV/Excel", attributes: { description: "Tabular format" } },
        { name: "Database", attributes: { description: "SQL queries" } },
        { name: "APIs", attributes: { description: "Real-time data" } }
      ]
    },
    {
      name: "Test Framework",
      children: [
        { name: "Parameterized Tests", attributes: { description: "Loop through data" } },
        { name: "Data Provider", attributes: { description: "Feed test data" } },
        { name: "Assertions", attributes: { description: "Expected vs actual" } }
      ]
    },
    {
      name: "Data Management",
      children: [
        { name: "Data Generator", attributes: { description: "Faker.js integration" } },
        { name: "Data Validator", attributes: { description: "Schema validation" } },
        { name: "Data Cleanup", attributes: { description: "Post-test cleanup" } }
      ]
    },
    {
      name: "Reporting",
      children: [
        { name: "Per-Dataset Reports", attributes: { description: "Individual results" } },
        { name: "Aggregate Reports", attributes: { description: "Overall stats" } },
        { name: "CI/CD Dashboards", attributes: { description: "Jenkins/Grafana" } }
      ]
    }
  ]
};

export const hybridMindmap = {
  name: "Hybrid Framework",
  children: [
    {
      name: "Architecture Layers",
      children: [
        { name: "Page Objects", attributes: { description: "UI abstraction" } },
        { name: "Keywords", attributes: { description: "Business actions" } },
        { name: "Data Sources", attributes: { description: "Multiple formats" } },
        { name: "BDD Scenarios", attributes: { description: "Gherkin features" } }
      ]
    },
    {
      name: "Framework Core",
      children: [
        { name: "Test Orchestrator", attributes: { description: "Central engine" } },
        { name: "Config Manager", attributes: { description: "Environment control" } },
        { name: "Logger System", attributes: { description: "Comprehensive logs" } }
      ]
    },
    {
      name: "Advanced Features",
      children: [
        { name: "AI Test Healing", attributes: { description: "Auto-fix locators" } },
        { name: "Visual Testing", attributes: { description: "Screenshot diff" } },
        { name: "API Integration", attributes: { description: "API + UI tests" } },
        { name: "Performance Tests", attributes: { description: "Load metrics" } }
      ]
    },
    {
      name: "DevOps Integration",
      children: [
        { name: "Multi-Platform CI", attributes: { description: "Jenkins/GitLab/Azure" } },
        { name: "Docker Containers", attributes: { description: "Isolated envs" } },
        { name: "Cloud Execution", attributes: { description: "AWS/Azure scale" } },
        { name: "Real-time Monitoring", attributes: { description: "Grafana/ELK" } }
      ]
    }
  ]
};

export const bddMindmap = {
  name: "BDD Framework",
  children: [
    {
      name: "Feature Files",
      children: [
        { name: "Gherkin Syntax", attributes: { description: "Given/When/Then" } },
        { name: "Scenarios", attributes: { description: "Test cases in plain English" } },
        { name: "Examples", attributes: { description: "Data-driven scenarios" } },
        { name: "Tags", attributes: { description: "Test organization" } }
      ]
    },
    {
      name: "Step Definitions",
      children: [
        { name: "Given Steps", attributes: { description: "Preconditions" } },
        { name: "When Steps", attributes: { description: "Actions" } },
        { name: "Then Steps", attributes: { description: "Validations" } },
        { name: "Hooks", attributes: { description: "Before/After" } }
      ]
    },
    {
      name: "Page Objects Integration",
      children: [
        { name: "Page Classes", attributes: { description: "Reusable components" } },
        { name: "World Object", attributes: { description: "Shared context" } },
        { name: "Fixtures", attributes: { description: "Test data setup" } }
      ]
    },
    {
      name: "Reporting & CI/CD",
      children: [
        { name: "Cucumber Reports", attributes: { description: "HTML/JSON output" } },
        { name: "Living Documentation", attributes: { description: "Auto-generated docs" } },
        { name: "CI Integration", attributes: { description: "Jenkins/GitLab" } }
      ]
    }
  ]
};

export const apiUiMindmap = {
  name: "API + UI Integration",
  children: [
    {
      name: "API Testing Layer",
      children: [
        { name: "Request Builder", attributes: { description: "REST/GraphQL" } },
        { name: "Response Validator", attributes: { description: "Schema/Contract" } },
        { name: "Auth Handler", attributes: { description: "OAuth/JWT" } },
        { name: "Data Setup", attributes: { description: "Test prerequisites" } }
      ]
    },
    {
      name: "UI Testing Layer",
      children: [
        { name: "Page Objects", attributes: { description: "UI components" } },
        { name: "User Workflows", attributes: { description: "E2E journeys" } },
        { name: "Visual Validation", attributes: { description: "Screenshot compare" } }
      ]
    },
    {
      name: "Integration Strategy",
      children: [
        { name: "API Setup + UI Verify", attributes: { description: "Fast execution" } },
        { name: "Contract Testing", attributes: { description: "API-UI sync" } },
        { name: "Performance Metrics", attributes: { description: "Response times" } }
      ]
    },
    {
      name: "CI/CD Pipeline",
      children: [
        { name: "API Tests First", attributes: { description: "Fast feedback" } },
        { name: "UI Critical Paths", attributes: { description: "Essential flows" } },
        { name: "Parallel Execution", attributes: { description: "Optimized runtime" } },
        { name: "Advanced Reporting", attributes: { description: "Unified dashboard" } }
      ]
    }
  ]
};

export const bddAdvancedMindmap = {
  name: "BDD Advanced Factory",
  children: [
    {
      name: "Factory Pattern Architecture",
      children: [
        { name: "Step Definition Factory", attributes: { description: "Generates step definitions from metadata" } },
        { name: "Keyword Factory Registry", attributes: { description: "Central keyword management system" } },
        { name: "Decorator-Based Patterns", attributes: { description: "@AtomicKeyword @BusinessKeyword annotations" } },
        { name: "Dependency Injection Container", attributes: { description: "IoC pattern for test dependencies" } },
        { name: "Abstract Factory Pattern", attributes: { description: "Multi-platform test creation" } }
      ]
    },
    {
      name: "Atomic Keyword Layer",
      children: [
        { name: "Playwright Core Actions", attributes: { description: "click(), fill(), select(), hover()" } },
        { name: "Smart Wait Strategies", attributes: { description: "Auto-wait for elements/network" } },
        { name: "Assertion Library", attributes: { description: "expect().toBeVisible(), toHaveText()" } },
        { name: "Error Recovery", attributes: { description: "Retry mechanisms & fallbacks" } },
        { name: "Network Interception", attributes: { description: "API mocking & validation" } }
      ]
    },
    {
      name: "Business Keyword Composition",
      children: [
        { name: "User Journey Workflows", attributes: { description: "loginAsUser(), completeCheckout()" } },
        { name: "Composite Action Chains", attributes: { description: "Combine atomic keywords" } },
        { name: "Context State Management", attributes: { description: "Shared test state & data" } },
        { name: "Dynamic Parameter Injection", attributes: { description: "Runtime data binding" } },
        { name: "Cross-Platform Keywords", attributes: { description: "Web, Mobile, API unified" } }
      ]
    },
    {
      name: "Manual Tester Interface",
      children: [
        { name: "Pure Gherkin Scenarios", attributes: { description: "Zero code test authoring" } },
        { name: "Intelligent Keyword Library", attributes: { description: "Searchable, autocomplete catalog" } },
        { name: "IDE Integration & IntelliSense", attributes: { description: "VSCode extension support" } },
        { name: "Real-time Test Execution", attributes: { description: "Live feedback & debugging" } },
        { name: "Natural Language Processing", attributes: { description: "Gherkin to keyword mapping" } }
      ]
    },
    {
      name: "Advanced TypeScript Patterns",
      children: [
        { name: "Generic Type Factories", attributes: { description: "Type-safe keyword creation" } },
        { name: "Decorator Metadata System", attributes: { description: "Runtime reflection & injection" } },
        { name: "Proxy Pattern Implementation", attributes: { description: "Dynamic method interception" } },
        { name: "Builder Pattern with Fluent API", attributes: { description: "Chainable test construction" } },
        { name: "Template Method Pattern", attributes: { description: "Standardized test flows" } }
      ]
    },
    {
      name: "Enterprise DevOps Integration",
      children: [
        { name: "Multi-Platform CI/CD", attributes: { description: "Jenkins, GitLab, Azure DevOps" } },
        { name: "AI-Powered Self-Healing", attributes: { description: "Auto-fix broken locators" } },
        { name: "Real-time Analytics Dashboard", attributes: { description: "Grafana/ELK stack integration" } },
        { name: "Environment Orchestration", attributes: { description: "Dev/QA/Staging/Prod deployment" } },
        { name: "Parallel Test Distribution", attributes: { description: "Kubernetes-based scaling" } }
      ]
    }
  ]
};
