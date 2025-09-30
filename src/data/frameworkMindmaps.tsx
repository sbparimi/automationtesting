export const pomMindmap = {
  name: "Page Object Model",
  children: [
    {
      name: "Page Classes",
      attributes: { description: "Encapsulated UI logic" },
      children: [
        { name: "Locator Strategy", attributes: { description: "CSS/XPath selectors" } },
        { name: "Action Methods", attributes: { description: "Click, type, select" } },
        { name: "Wait Strategies", attributes: { description: "Explicit/implicit waits" } }
      ]
    },
    {
      name: "Base Page Class",
      attributes: { description: "Common abstractions" },
      children: [
        { name: "Browser Context", attributes: { description: "Page/browser instance" } },
        { name: "Navigation Utils", attributes: { description: "URL handling" } },
        { name: "Screenshot Utils", attributes: { description: "Evidence capture" } }
      ]
    },
    {
      name: "Playwright Integration",
      attributes: { description: "Core framework" },
      children: [
        { name: "Page Objects", attributes: { description: "Playwright page fixture" } },
        { name: "Locator API", attributes: { description: "Auto-waiting locators" } },
        { name: "Test Isolation", attributes: { description: "Fresh context per test" } }
      ]
    },
    {
      name: "Advanced Patterns",
      attributes: { description: "Design patterns" },
      children: [
        { name: "Component Objects", attributes: { description: "Reusable UI components" } },
        { name: "Page Factory", attributes: { description: "Dependency injection" } },
        { name: "Fluent Interface", attributes: { description: "Method chaining" } }
      ]
    },
    {
      name: "DevOps Integration",
      attributes: { description: "CI/CD pipeline" },
      children: [
        { name: "Docker Containers", attributes: { description: "Isolated test execution" } },
        { name: "Parallel Execution", attributes: { description: "Worker threads/sharding" } },
        { name: "CI/CD Pipelines", attributes: { description: "GitHub Actions/Jenkins" } }
      ]
    },
    {
      name: "Test Architecture",
      attributes: { description: "Framework structure" },
      children: [
        { name: "Element Collections", attributes: { description: "Dynamic element handling" } },
        { name: "JavaScript Executor", attributes: { description: "Custom JS execution" } },
        { name: "Network Interception", attributes: { description: "Mock API responses" } }
      ]
    }
  ]
};

export const keywordDrivenMindmap = {
  name: "Keyword Driven",
  children: [
    {
      name: "Keyword Library",
      attributes: { description: "Core keywords" },
      children: [
        { name: "Navigation Keywords", attributes: { description: "Navigate, GoTo" } },
        { name: "Action Keywords", attributes: { description: "Click, Type, Select" } },
        { name: "Validation Keywords", attributes: { description: "VerifyText, CheckElement" } }
      ]
    },
    {
      name: "Test Data Layer",
      attributes: { description: "Data management" },
      children: [
        { name: "Excel/CSV Sheets", attributes: { description: "Business users edit" } },
        { name: "JSON Config", attributes: { description: "Structured data" } },
        { name: "Database", attributes: { description: "Dynamic test data" } }
      ]
    },
    {
      name: "Execution Engine",
      attributes: { description: "Test runner" },
      children: [
        { name: "Keyword Parser", attributes: { description: "Read & interpret" } },
        { name: "Action Mapper", attributes: { description: "Map to methods" } },
        { name: "Result Logger", attributes: { description: "Track execution" } }
      ]
    },
    {
      name: "Advanced Features",
      attributes: { description: "Extended capabilities" },
      children: [
        { name: "Custom Keywords", attributes: { description: "Business-specific" } },
        { name: "Error Recovery", attributes: { description: "Self-healing" } },
        { name: "CI/CD Integration", attributes: { description: "Jenkins/Azure DevOps" } }
      ]
    }
  ]
};

export const dataDrivenMindmap = {
  name: "Data Driven",
  children: [
    {
      name: "Data Sources",
      attributes: { description: "Input data types" },
      children: [
        { name: "JSON Files", attributes: { description: "Structured data" } },
        { name: "CSV/Excel", attributes: { description: "Tabular format" } },
        { name: "Database", attributes: { description: "SQL queries" } }
      ]
    },
    {
      name: "Test Framework",
      attributes: { description: "Core execution" },
      children: [
        { name: "Parameterized Tests", attributes: { description: "Loop through data" } },
        { name: "Data Provider", attributes: { description: "Feed test data" } },
        { name: "Assertions", attributes: { description: "Expected vs actual" } }
      ]
    },
    {
      name: "Data Management",
      attributes: { description: "Data handling" },
      children: [
        { name: "Data Generator", attributes: { description: "Faker.js integration" } },
        { name: "Data Validator", attributes: { description: "Schema validation" } },
        { name: "Data Cleanup", attributes: { description: "Post-test cleanup" } }
      ]
    },
    {
      name: "Reporting System",
      attributes: { description: "Test analytics" },
      children: [
        { name: "Per-Dataset Reports", attributes: { description: "Individual results" } },
        { name: "Aggregate Reports", attributes: { description: "Overall stats" } },
        { name: "CI/CD Dashboards", attributes: { description: "Jenkins/Grafana" } }
      ]
    },
    {
      name: "External Integration",
      attributes: { description: "Data connectivity" },
      children: [
        { name: "APIs", attributes: { description: "Real-time data" } },
        { name: "Cloud Storage", attributes: { description: "S3/Azure Blob" } },
        { name: "Configuration", attributes: { description: "Environment data" } }
      ]
    }
  ]
};

export const hybridMindmap = {
  name: "Hybrid Framework",
  children: [
    {
      name: "Page Objects Layer",
      attributes: { description: "UI abstraction" },
      children: [
        { name: "Component Objects", attributes: { description: "Reusable UI elements" } },
        { name: "Page Classes", attributes: { description: "Screen representations" } },
        { name: "Element Locators", attributes: { description: "Smart selectors" } }
      ]
    },
    {
      name: "Keyword Layer",
      attributes: { description: "Business actions" },
      children: [
        { name: "Business Keywords", attributes: { description: "High-level actions" } },
        { name: "Technical Keywords", attributes: { description: "Low-level operations" } },
        { name: "Validation Keywords", attributes: { description: "Assert operations" } }
      ]
    },
    {
      name: "Data Layer",
      attributes: { description: "Test data management" },
      children: [
        { name: "Excel/CSV", attributes: { description: "Structured datasets" } },
        { name: "JSON Config", attributes: { description: "Configuration data" } },
        { name: "Database", attributes: { description: "Dynamic data" } }
      ]
    },
    {
      name: "BDD Integration",
      attributes: { description: "Behavior driven" },
      children: [
        { name: "Gherkin Features", attributes: { description: "Natural language tests" } },
        { name: "Step Definitions", attributes: { description: "Code bindings" } },
        { name: "Cucumber Reports", attributes: { description: "Living documentation" } }
      ]
    },
    {
      name: "Framework Core",
      attributes: { description: "Central engine" },
      children: [
        { name: "Test Orchestrator", attributes: { description: "Execution control" } },
        { name: "Config Manager", attributes: { description: "Environment setup" } },
        { name: "Logger System", attributes: { description: "Comprehensive logging" } }
      ]
    },
    {
      name: "DevOps Pipeline",
      attributes: { description: "CI/CD integration" },
      children: [
        { name: "Docker Containers", attributes: { description: "Isolated environments" } },
        { name: "Cloud Execution", attributes: { description: "Scalable infrastructure" } },
        { name: "Monitoring", attributes: { description: "Real-time analytics" } }
      ]
    }
  ]
};

export const bddMindmap = {
  name: "BDD Framework",
  children: [
    {
      name: "Feature Files",
      attributes: { description: "Gherkin scenarios" },
      children: [
        { name: "Gherkin Syntax", attributes: { description: "Given/When/Then" } },
        { name: "Scenarios", attributes: { description: "Test cases in plain English" } },
        { name: "Examples", attributes: { description: "Data-driven scenarios" } }
      ]
    },
    {
      name: "Step Definitions",
      attributes: { description: "Code bindings" },
      children: [
        { name: "Given Steps", attributes: { description: "Preconditions setup" } },
        { name: "When Steps", attributes: { description: "Action execution" } },
        { name: "Then Steps", attributes: { description: "Assertion validations" } }
      ]
    },
    {
      name: "Page Objects",
      attributes: { description: "UI abstraction" },
      children: [
        { name: "Page Classes", attributes: { description: "Reusable components" } },
        { name: "World Object", attributes: { description: "Shared context" } },
        { name: "Fixtures", attributes: { description: "Test data setup" } }
      ]
    },
    {
      name: "Test Organization",
      attributes: { description: "Structure & tags" },
      children: [
        { name: "Tags", attributes: { description: "Test categorization" } },
        { name: "Hooks", attributes: { description: "Before/After methods" } },
        { name: "Background", attributes: { description: "Common steps" } }
      ]
    },
    {
      name: "Reporting System",
      attributes: { description: "Documentation" },
      children: [
        { name: "Cucumber Reports", attributes: { description: "HTML/JSON output" } },
        { name: "Living Documentation", attributes: { description: "Auto-generated docs" } },
        { name: "Allure Integration", attributes: { description: "Rich test reports" } }
      ]
    },
    {
      name: "CI/CD Integration",
      attributes: { description: "Pipeline automation" },
      children: [
        { name: "Jenkins Pipeline", attributes: { description: "Automated execution" } },
        { name: "GitLab CI", attributes: { description: "Version control integration" } },
        { name: "Docker Support", attributes: { description: "Containerized tests" } }
      ]
    }
  ]
};

export const apiUiMindmap = {
  name: "API + UI Integration",
  children: [
    {
      name: "API Testing Layer",
      attributes: { description: "Backend validation" },
      children: [
        { name: "Request Builder", attributes: { description: "REST/GraphQL clients" } },
        { name: "Response Validator", attributes: { description: "Schema validation" } },
        { name: "Auth Handler", attributes: { description: "OAuth/JWT tokens" } }
      ]
    },
    {
      name: "UI Testing Layer",
      attributes: { description: "Frontend validation" },
      children: [
        { name: "Page Objects", attributes: { description: "UI component abstraction" } },
        { name: "User Workflows", attributes: { description: "End-to-end journeys" } },
        { name: "Visual Validation", attributes: { description: "Screenshot comparison" } }
      ]
    },
    {
      name: "Integration Strategy",
      attributes: { description: "Hybrid approach" },
      children: [
        { name: "API Setup + UI Verify", attributes: { description: "Fast data setup" } },
        { name: "Contract Testing", attributes: { description: "API-UI synchronization" } },
        { name: "Performance Metrics", attributes: { description: "Response time tracking" } }
      ]
    },
    {
      name: "Test Data Management",
      attributes: { description: "Data handling" },
      children: [
        { name: "Data Setup via API", attributes: { description: "Test prerequisites" } },
        { name: "Data Cleanup", attributes: { description: "Post-test cleanup" } },
        { name: "Mock Services", attributes: { description: "Service virtualization" } }
      ]
    },
    {
      name: "CI/CD Pipeline",
      attributes: { description: "Automation pipeline" },
      children: [
        { name: "API Tests First", attributes: { description: "Fast feedback loop" } },
        { name: "UI Critical Paths", attributes: { description: "Essential user flows" } },
        { name: "Parallel Execution", attributes: { description: "Optimized runtime" } }
      ]
    },
    {
      name: "Monitoring & Analytics",
      attributes: { description: "Observability" },
      children: [
        { name: "Unified Dashboard", attributes: { description: "Combined API/UI metrics" } },
        { name: "Performance Tracking", attributes: { description: "Real-time monitoring" } },
        { name: "Error Analysis", attributes: { description: "Failure correlation" } }
      ]
    }
  ]
};

export const bddAdvancedMindmap = {
  name: "BDD Advanced Factory",
  children: [
    {
      name: "Factory Pattern Core",
      attributes: { description: "Advanced design patterns" },
      children: [
        { name: "Step Definition Factory", attributes: { description: "Metadata-driven generation" } },
        { name: "Keyword Registry", attributes: { description: "Central management system" } },
        { name: "Decorator Patterns", attributes: { description: "@AtomicKeyword @BusinessKeyword" } }
      ]
    },
    {
      name: "Atomic Keywords",
      attributes: { description: "Core playwright actions" },
      children: [
        { name: "Playwright Actions", attributes: { description: "click(), fill(), select()" } },
        { name: "Smart Waits", attributes: { description: "Auto-wait strategies" } },
        { name: "Assertion Library", attributes: { description: "expect().toBeVisible()" } }
      ]
    },
    {
      name: "Business Keywords",
      attributes: { description: "High-level workflows" },
      children: [
        { name: "User Journeys", attributes: { description: "loginAsUser(), checkout()" } },
        { name: "Action Chains", attributes: { description: "Composite operations" } },
        { name: "State Management", attributes: { description: "Shared test context" } }
      ]
    },
    {
      name: "Manual Tester Interface",
      attributes: { description: "Zero-code authoring" },
      children: [
        { name: "Pure Gherkin", attributes: { description: "Natural language tests" } },
        { name: "Intelligent Library", attributes: { description: "Searchable keywords" } },
        { name: "IDE Integration", attributes: { description: "VSCode IntelliSense" } }
      ]
    },
    {
      name: "TypeScript Patterns",
      attributes: { description: "Advanced programming" },
      children: [
        { name: "Generic Factories", attributes: { description: "Type-safe creation" } },
        { name: "Decorator System", attributes: { description: "Runtime metadata" } },
        { name: "Proxy Pattern", attributes: { description: "Method interception" } }
      ]
    },
    {
      name: "DevOps Integration",
      attributes: { description: "Enterprise CI/CD" },
      children: [
        { name: "Multi-Platform CI", attributes: { description: "Jenkins/GitLab/Azure" } },
        { name: "Self-Healing Tests", attributes: { description: "AI-powered recovery" } },
        { name: "Analytics Dashboard", attributes: { description: "Real-time monitoring" } }
      ]
    }
  ]
};
