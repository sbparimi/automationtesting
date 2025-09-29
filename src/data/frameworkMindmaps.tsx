export const pomMindmap = {
  name: "Page Object Model",
  children: [
    {
      name: "Core Components",
      children: [
        {
          name: "Page Classes",
          attributes: { description: "Encapsulate page logic" },
          children: [
            { name: "Locator Definitions" },
            { name: "Action Methods" },
            { name: "Validation Methods" }
          ]
        },
        {
          name: "Base Page",
          attributes: { description: "Common functionality" },
          children: [
            { name: "Navigation" },
            { name: "Wait Strategies" },
            { name: "Error Handling" }
          ]
        }
      ]
    },
    {
      name: "Test Layer",
      children: [
        { name: "Test Specs", attributes: { description: "Business logic tests" } },
        { name: "Test Data", attributes: { description: "JSON/CSV data" } },
        { name: "Fixtures", attributes: { description: "Setup & teardown" } }
      ]
    },
    {
      name: "Utilities",
      children: [
        { name: "Helpers", attributes: { description: "Reusable functions" } },
        { name: "Reporters", attributes: { description: "Custom reporting" } },
        { name: "Config", attributes: { description: "Environment setup" } }
      ]
    },
    {
      name: "CI/CD Integration",
      children: [
        { name: "Jenkins/GitLab", attributes: { description: "Pipeline config" } },
        { name: "Docker", attributes: { description: "Containerization" } },
        { name: "Parallel Execution", attributes: { description: "Sharding & workers" } }
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
      name: "Factory Pattern Core",
      children: [
        { name: "Step Definition Factory", attributes: { description: "Auto-generate steps" } },
        { name: "Keyword Factory", attributes: { description: "Dynamic keyword creation" } },
        { name: "Decorator Patterns", attributes: { description: "@AtomicKeyword/@Business" } },
        { name: "Dependency Injection", attributes: { description: "IoC container" } }
      ]
    },
    {
      name: "Atomic Keywords",
      children: [
        { name: "Basic Actions", attributes: { description: "Click, Type, Navigate" } },
        { name: "Validations", attributes: { description: "Verify, Assert, Check" } },
        { name: "Wait Strategies", attributes: { description: "Smart waits" } },
        { name: "Error Handling", attributes: { description: "Retry & recovery" } }
      ]
    },
    {
      name: "Business Keywords",
      children: [
        { name: "User Workflows", attributes: { description: "Login, Checkout" } },
        { name: "Composite Actions", attributes: { description: "Multiple atomic steps" } },
        { name: "Context Management", attributes: { description: "State handling" } },
        { name: "Dynamic Params", attributes: { description: "Runtime injection" } }
      ]
    },
    {
      name: "Manual Tester Layer",
      children: [
        { name: "Pure Gherkin", attributes: { description: "No code needed" } },
        { name: "Keyword Library", attributes: { description: "Searchable catalog" } },
        { name: "Auto-Complete", attributes: { description: "IDE support" } },
        { name: "Instant Execution", attributes: { description: "No compilation" } }
      ]
    },
    {
      name: "Advanced TypeScript",
      children: [
        { name: "Generics", attributes: { description: "Type-safe factories" } },
        { name: "Decorators", attributes: { description: "Metadata injection" } },
        { name: "Reflection", attributes: { description: "Runtime inspection" } },
        { name: "Abstract Factories", attributes: { description: "Factory of factories" } }
      ]
    },
    {
      name: "Enterprise Features",
      children: [
        { name: "CI/CD Integration", attributes: { description: "Jenkins/GitLab/Azure" } },
        { name: "Self-Healing", attributes: { description: "AI-powered fixes" } },
        { name: "Performance Metrics", attributes: { description: "Real-time dashboards" } },
        { name: "Multi-Environment", attributes: { description: "Dev/QA/Prod" } }
      ]
    }
  ]
};
