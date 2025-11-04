// Comprehensive Playwright Learning Structure
// LinkedIn Learning Style Organization

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  level: 'basic' | 'intermediate' | 'advanced';
}

export interface Section {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  sections: Section[];
}

// BASIC PLAYWRIGHT COURSE
export const basicPlaywrightCourse: Course = {
  id: 'basic-playwright',
  title: 'Playwright Fundamentals',
  description: 'Master the core concepts of Playwright for modern web test automation',
  sections: [
    {
      id: 'section-1-getting-started',
      title: 'Section 1: Getting Started with Playwright (12 lessons)',
      description: 'Installation, setup, and first tests',
      lessons: [
        { id: 'pw-basic-001', title: 'Introduction to Playwright Architecture', duration: '15 min', level: 'basic' },
        { id: 'pw-basic-002', title: 'Installing Playwright and Project Setup', duration: '12 min', level: 'basic' },
        { id: 'pw-basic-003', title: 'Writing Your First Test', duration: '18 min', level: 'basic' },
        { id: 'pw-basic-004', title: 'Understanding Test Structure and Syntax', duration: '16 min', level: 'basic' },
        { id: 'pw-basic-005', title: 'Running Tests in Different Browsers', duration: '14 min', level: 'basic' },
        { id: 'pw-basic-006', title: 'Playwright Test Runner Configuration', duration: '20 min', level: 'basic' },
        { id: 'pw-basic-007', title: 'Using Playwright Inspector', duration: '15 min', level: 'basic' },
        { id: 'pw-basic-008', title: 'Codegen: Auto-generating Tests', duration: '13 min', level: 'basic' },
        { id: 'pw-basic-009', title: 'Understanding Playwright Trace Viewer', duration: '17 min', level: 'basic' },
        { id: 'pw-basic-010', title: 'Project Configuration Best Practices', duration: '19 min', level: 'basic' },
        { id: 'pw-basic-011', title: 'Environment Variables and Secrets', duration: '16 min', level: 'basic' },
        { id: 'pw-basic-012', title: 'Understanding Test Lifecycle Hooks', duration: '18 min', level: 'basic' },
      ],
    },
    {
      id: 'section-2-locators',
      title: 'Section 2: Locators and Element Interaction (14 lessons)',
      description: 'Master element location and interaction strategies',
      lessons: [
        { id: 'pw-basic-013', title: 'CSS Selectors in Playwright', duration: '16 min', level: 'basic' },
        { id: 'pw-basic-014', title: 'Text-based Locators', duration: '14 min', level: 'basic' },
        { id: 'pw-basic-015', title: 'Role-based Locators for Accessibility', duration: '20 min', level: 'basic' },
        { id: 'pw-basic-016', title: 'XPath Selectors Best Practices', duration: '15 min', level: 'basic' },
        { id: 'pw-basic-017', title: 'Playwright Locator Chaining', duration: '17 min', level: 'basic' },
        { id: 'pw-basic-018', title: 'Filtering Locators', duration: '13 min', level: 'basic' },
        { id: 'pw-basic-019', title: 'Strict Mode and Multiple Elements', duration: '16 min', level: 'basic' },
        { id: 'pw-basic-020', title: 'Click, Fill, and Type Actions', duration: '14 min', level: 'basic' },
        { id: 'pw-basic-021', title: 'Handling Dropdowns and Select Elements', duration: '15 min', level: 'basic' },
        { id: 'pw-basic-022', title: 'Checkbox and Radio Button Interaction', duration: '12 min', level: 'basic' },
        { id: 'pw-basic-023', title: 'Uploading Files with Playwright', duration: '18 min', level: 'basic' },
        { id: 'pw-basic-024', title: 'Keyboard and Mouse Actions', duration: '17 min', level: 'basic' },
        { id: 'pw-basic-025', title: 'Drag and Drop Operations', duration: '16 min', level: 'basic' },
        { id: 'pw-basic-026', title: 'Hovering and Focus Management', duration: '13 min', level: 'basic' },
      ],
    },
    {
      id: 'section-3-assertions',
      title: 'Section 3: Assertions and Expectations (13 lessons)',
      description: 'Verification strategies and auto-waiting',
      lessons: [
        { id: 'pw-basic-027', title: 'Introduction to Auto-waiting in Playwright', duration: '15 min', level: 'basic' },
        { id: 'pw-basic-028', title: 'expect() and toBeVisible()', duration: '12 min', level: 'basic' },
        { id: 'pw-basic-029', title: 'Text Content Assertions', duration: '14 min', level: 'basic' },
        { id: 'pw-basic-030', title: 'Attribute and Property Assertions', duration: '16 min', level: 'basic' },
        { id: 'pw-basic-031', title: 'Count and State Assertions', duration: '13 min', level: 'basic' },
        { id: 'pw-basic-032', title: 'URL and Title Assertions', duration: '11 min', level: 'basic' },
        { id: 'pw-basic-033', title: 'Screenshot Comparison Testing', duration: '20 min', level: 'basic' },
        { id: 'pw-basic-034', title: 'Custom Timeouts and Retry Logic', duration: '17 min', level: 'basic' },
        { id: 'pw-basic-035', title: 'Soft Assertions vs Hard Assertions', duration: '15 min', level: 'basic' },
        { id: 'pw-basic-036', title: 'Network Response Assertions', duration: '18 min', level: 'basic' },
        { id: 'pw-basic-037', title: 'Polling and waitFor Methods', duration: '16 min', level: 'basic' },
        { id: 'pw-basic-038', title: 'Custom Assertion Messages', duration: '12 min', level: 'basic' },
        { id: 'pw-basic-039', title: 'Assertion Best Practices', duration: '14 min', level: 'basic' },
      ],
    },
    {
      id: 'section-4-navigation',
      title: 'Section 4: Navigation and Page Management (13 lessons)',
      description: 'Browser context, pages, and navigation patterns',
      lessons: [
        { id: 'pw-basic-040', title: 'Browser Context vs Page', duration: '16 min', level: 'basic' },
        { id: 'pw-basic-041', title: 'Multiple Pages and Tabs', duration: '18 min', level: 'basic' },
        { id: 'pw-basic-042', title: 'Navigation: goto, goBack, goForward', duration: '14 min', level: 'basic' },
        { id: 'pw-basic-043', title: 'Waiting for Navigation Events', duration: '17 min', level: 'basic' },
        { id: 'pw-basic-044', title: 'Handling Pop-ups and New Windows', duration: '19 min', level: 'basic' },
        { id: 'pw-basic-045', title: 'iFrame Handling', duration: '20 min', level: 'basic' },
        { id: 'pw-basic-046', title: 'Shadow DOM Navigation', duration: '16 min', level: 'basic' },
        { id: 'pw-basic-047', title: 'Browser Storage: Cookies, LocalStorage', duration: '18 min', level: 'basic' },
        { id: 'pw-basic-048', title: 'Session State Management', duration: '15 min', level: 'basic' },
        { id: 'pw-basic-049', title: 'Viewport and Device Emulation', duration: '17 min', level: 'basic' },
        { id: 'pw-basic-050', title: 'Geolocation and Permissions', duration: '14 min', level: 'basic' },
        { id: 'pw-basic-051', title: 'Network Conditions Simulation', duration: '16 min', level: 'basic' },
        { id: 'pw-basic-052', title: 'Offline Mode Testing', duration: '13 min', level: 'basic' },
      ],
    },
  ],
};

// INTERMEDIATE PLAYWRIGHT COURSE
export const intermediatePlaywrightCourse: Course = {
  id: 'intermediate-playwright',
  title: 'Playwright Advanced Techniques',
  description: 'Page Object Model, fixtures, and advanced testing patterns',
  sections: [
    {
      id: 'section-5-pom',
      title: 'Section 5: Page Object Model (15 lessons)',
      description: 'Building maintainable test architectures',
      lessons: [
        { id: 'pw-int-001', title: 'Introduction to Page Object Model', duration: '18 min', level: 'intermediate' },
        { id: 'pw-int-002', title: 'Creating Your First Page Object', duration: '20 min', level: 'intermediate' },
        { id: 'pw-int-003', title: 'Organizing Page Objects by Feature', duration: '17 min', level: 'intermediate' },
        { id: 'pw-int-004', title: 'Component-based Page Objects', duration: '22 min', level: 'intermediate' },
        { id: 'pw-int-005', title: 'Page Object Inheritance Patterns', duration: '19 min', level: 'intermediate' },
        { id: 'pw-int-006', title: 'Builder Pattern for Page Objects', duration: '21 min', level: 'intermediate' },
        { id: 'pw-int-007', title: 'Type-safe Locators in Page Objects', duration: '16 min', level: 'intermediate' },
        { id: 'pw-int-008', title: 'Reusable Methods and Actions', duration: '18 min', level: 'intermediate' },
        { id: 'pw-int-009', title: 'Page Object with Generic Types', duration: '20 min', level: 'intermediate' },
        { id: 'pw-int-010', title: 'Handling Dynamic Pages', duration: '17 min', level: 'intermediate' },
        { id: 'pw-int-011', title: 'Error Handling in Page Objects', duration: '15 min', level: 'intermediate' },
        { id: 'pw-int-012', title: 'Logging and Debugging Page Objects', duration: '16 min', level: 'intermediate' },
        { id: 'pw-int-013', title: 'Testing Page Objects in Isolation', duration: '19 min', level: 'intermediate' },
        { id: 'pw-int-014', title: 'Page Object Anti-patterns', duration: '14 min', level: 'intermediate' },
        { id: 'pw-int-015', title: 'Refactoring to Page Objects', duration: '23 min', level: 'intermediate' },
      ],
    },
    {
      id: 'section-6-fixtures',
      title: 'Section 6: Fixtures and Test Data (14 lessons)',
      description: 'Custom fixtures, test data management, and isolation',
      lessons: [
        { id: 'pw-int-016', title: 'Understanding Playwright Fixtures', duration: '17 min', level: 'intermediate' },
        { id: 'pw-int-017', title: 'Creating Custom Fixtures', duration: '20 min', level: 'intermediate' },
        { id: 'pw-int-018', title: 'Fixture Composition and Dependencies', duration: '22 min', level: 'intermediate' },
        { id: 'pw-int-019', title: 'Worker vs Test-scoped Fixtures', duration: '18 min', level: 'intermediate' },
        { id: 'pw-int-020', title: 'Auto Fixtures and Setup/Teardown', duration: '19 min', level: 'intermediate' },
        { id: 'pw-int-021', title: 'Fixture Options and Configuration', duration: '16 min', level: 'intermediate' },
        { id: 'pw-int-022', title: 'Test Data Factories with Faker.js', duration: '21 min', level: 'intermediate' },
        { id: 'pw-int-023', title: 'Loading Test Data from JSON/CSV', duration: '17 min', level: 'intermediate' },
        { id: 'pw-int-024', title: 'Database Fixtures and Seeding', duration: '23 min', level: 'intermediate' },
        { id: 'pw-int-025', title: 'API Fixtures for Pre-conditions', duration: '20 min', level: 'intermediate' },
        { id: 'pw-int-026', title: 'Fixture-based Authentication', duration: '19 min', level: 'intermediate' },
        { id: 'pw-int-027', title: 'Shared State Fixtures', duration: '15 min', level: 'intermediate' },
        { id: 'pw-int-028', title: 'Fixture Debugging Techniques', duration: '14 min', level: 'intermediate' },
        { id: 'pw-int-029', title: 'Fixture Best Practices', duration: '16 min', level: 'intermediate' },
      ],
    },
    {
      id: 'section-7-api',
      title: 'Section 7: API Testing with Playwright (13 lessons)',
      description: 'REST API testing, mocking, and integration',
      lessons: [
        { id: 'pw-int-030', title: 'Introduction to APIRequestContext', duration: '16 min', level: 'intermediate' },
        { id: 'pw-int-031', title: 'GET Requests and Response Validation', duration: '18 min', level: 'intermediate' },
        { id: 'pw-int-032', title: 'POST, PUT, DELETE Operations', duration: '20 min', level: 'intermediate' },
        { id: 'pw-int-033', title: 'Request Headers and Authentication', duration: '17 min', level: 'intermediate' },
        { id: 'pw-int-034', title: 'Query Parameters and Path Variables', duration: '15 min', level: 'intermediate' },
        { id: 'pw-int-035', title: 'JSON Schema Validation', duration: '19 min', level: 'intermediate' },
        { id: 'pw-int-036', title: 'GraphQL API Testing', duration: '22 min', level: 'intermediate' },
        { id: 'pw-int-037', title: 'Network Interception and Mocking', duration: '21 min', level: 'intermediate' },
        { id: 'pw-int-038', title: 'Request/Response Modification', duration: '18 min', level: 'intermediate' },
        { id: 'pw-int-039', title: 'HAR File Recording and Replay', duration: '16 min', level: 'intermediate' },
        { id: 'pw-int-040', title: 'API Test Data Setup', duration: '17 min', level: 'intermediate' },
        { id: 'pw-int-041', title: 'Combining UI and API Tests', duration: '20 min', level: 'intermediate' },
        { id: 'pw-int-042', title: 'API Performance Testing', duration: '19 min', level: 'intermediate' },
      ],
    },
    {
      id: 'section-8-advanced-features',
      title: 'Section 8: Advanced Features (12 lessons)',
      description: 'Visual testing, mobile, accessibility',
      lessons: [
        { id: 'pw-int-043', title: 'Visual Regression Testing Setup', duration: '22 min', level: 'intermediate' },
        { id: 'pw-int-044', title: 'Snapshot Testing Strategies', duration: '18 min', level: 'intermediate' },
        { id: 'pw-int-045', title: 'Accessibility Testing with Axe', duration: '21 min', level: 'intermediate' },
        { id: 'pw-int-046', title: 'Mobile Device Emulation', duration: '17 min', level: 'intermediate' },
        { id: 'pw-int-047', title: 'Touch Gestures and Mobile Events', duration: '19 min', level: 'intermediate' },
        { id: 'pw-int-048', title: 'Video Recording Configuration', duration: '15 min', level: 'intermediate' },
        { id: 'pw-int-049', title: 'Custom Trace and Screenshot Capture', duration: '20 min', level: 'intermediate' },
        { id: 'pw-int-050', title: 'PDF Generation and Testing', duration: '16 min', level: 'intermediate' },
        { id: 'pw-int-051', title: 'Download and Upload Handling', duration: '18 min', level: 'intermediate' },
        { id: 'pw-int-052', title: 'Dialogs and Alerts Management', duration: '14 min', level: 'intermediate' },
        { id: 'pw-int-053', title: 'Browser Context Isolation', duration: '17 min', level: 'intermediate' },
        { id: 'pw-int-054', title: 'Multi-tab Scenarios', duration: '19 min', level: 'intermediate' },
      ],
    },
  ],
};

// ADVANCED PLAYWRIGHT COURSE
export const advancedPlaywrightCourse: Course = {
  id: 'advanced-playwright',
  title: 'Playwright Enterprise Patterns',
  description: 'Scaling, CI/CD, reporting, and production-grade frameworks',
  sections: [
    {
      id: 'section-9-cicd',
      title: 'Section 9: CI/CD Integration (14 lessons)',
      description: 'Continuous testing and deployment pipelines',
      lessons: [
        { id: 'pw-adv-001', title: 'GitHub Actions for Playwright', duration: '22 min', level: 'advanced' },
        { id: 'pw-adv-002', title: 'Jenkins Pipeline Configuration', duration: '24 min', level: 'advanced' },
        { id: 'pw-adv-003', title: 'GitLab CI/CD Setup', duration: '20 min', level: 'advanced' },
        { id: 'pw-adv-004', title: 'Azure DevOps Integration', duration: '23 min', level: 'advanced' },
        { id: 'pw-adv-005', title: 'CircleCI Configuration', duration: '19 min', level: 'advanced' },
        { id: 'pw-adv-006', title: 'Docker Container Testing', duration: '26 min', level: 'advanced' },
        { id: 'pw-adv-007', title: 'Kubernetes Test Execution', duration: '28 min', level: 'advanced' },
        { id: 'pw-adv-008', title: 'Cloud Browser Services (BrowserStack)', duration: '21 min', level: 'advanced' },
        { id: 'pw-adv-009', title: 'Sauce Labs Integration', duration: '20 min', level: 'advanced' },
        { id: 'pw-adv-010', title: 'Parallel Execution Strategies', duration: '25 min', level: 'advanced' },
        { id: 'pw-adv-011', title: 'Sharding Tests Across Workers', duration: '22 min', level: 'advanced' },
        { id: 'pw-adv-012', title: 'Flaky Test Detection and Retry', duration: '24 min', level: 'advanced' },
        { id: 'pw-adv-013', title: 'Test Result Caching', duration: '18 min', level: 'advanced' },
        { id: 'pw-adv-014', title: 'Matrix Testing Strategies', duration: '21 min', level: 'advanced' },
      ],
    },
    {
      id: 'section-10-reporting',
      title: 'Section 10: Reporting and Observability (13 lessons)',
      description: 'Allure, custom reporters, and dashboards',
      lessons: [
        { id: 'pw-adv-015', title: 'Built-in HTML Reporter', duration: '16 min', level: 'advanced' },
        { id: 'pw-adv-016', title: 'Allure Reporter Setup', duration: '22 min', level: 'advanced' },
        { id: 'pw-adv-017', title: 'Allure Annotations and Metadata', duration: '20 min', level: 'advanced' },
        { id: 'pw-adv-018', title: 'Custom Reporter Implementation', duration: '26 min', level: 'advanced' },
        { id: 'pw-adv-019', title: 'JUnit XML Reporter for CI', duration: '17 min', level: 'advanced' },
        { id: 'pw-adv-020', title: 'JSON Reporter and Data Analysis', duration: '19 min', level: 'advanced' },
        { id: 'pw-adv-021', title: 'Slack/Teams Notifications', duration: '21 min', level: 'advanced' },
        { id: 'pw-adv-022', title: 'Grafana Dashboard Integration', duration: '24 min', level: 'advanced' },
        { id: 'pw-adv-023', title: 'TestRail Integration', duration: '23 min', level: 'advanced' },
        { id: 'pw-adv-024', title: 'Jira Xray Test Management', duration: '25 min', level: 'advanced' },
        { id: 'pw-adv-025', title: 'Custom Test Analytics', duration: '22 min', level: 'advanced' },
        { id: 'pw-adv-026', title: 'Performance Metrics Collection', duration: '20 min', level: 'advanced' },
        { id: 'pw-adv-027', title: 'Trend Analysis and Historical Data', duration: '18 min', level: 'advanced' },
      ],
    },
    {
      id: 'section-11-performance',
      title: 'Section 11: Performance and Optimization (13 lessons)',
      description: 'Speed optimization and resource management',
      lessons: [
        { id: 'pw-adv-028', title: 'Test Execution Performance Tuning', duration: '21 min', level: 'advanced' },
        { id: 'pw-adv-029', title: 'Worker Process Optimization', duration: '19 min', level: 'advanced' },
        { id: 'pw-adv-030', title: 'Browser Launch Options', duration: '17 min', level: 'advanced' },
        { id: 'pw-adv-031', title: 'Memory Management Strategies', duration: '23 min', level: 'advanced' },
        { id: 'pw-adv-032', title: 'Resource Cleanup Best Practices', duration: '18 min', level: 'advanced' },
        { id: 'pw-adv-033', title: 'Selective Test Execution', duration: '20 min', level: 'advanced' },
        { id: 'pw-adv-034', title: 'Test Impact Analysis', duration: '24 min', level: 'advanced' },
        { id: 'pw-adv-035', title: 'Lighthouse Performance Audits', duration: '22 min', level: 'advanced' },
        { id: 'pw-adv-036', title: 'Web Vitals Monitoring', duration: '19 min', level: 'advanced' },
        { id: 'pw-adv-037', title: 'Network Throttling Analysis', duration: '17 min', level: 'advanced' },
        { id: 'pw-adv-038', title: 'CPU and Memory Profiling', duration: '21 min', level: 'advanced' },
        { id: 'pw-adv-039', title: 'Trace Analysis for Bottlenecks', duration: '20 min', level: 'advanced' },
        { id: 'pw-adv-040', title: 'Optimization Metrics Dashboard', duration: '18 min', level: 'advanced' },
      ],
    },
    {
      id: 'section-12-architecture',
      title: 'Section 12: Enterprise Framework Architecture (14 lessons)',
      description: 'Production-grade framework design',
      lessons: [
        { id: 'pw-adv-041', title: 'Multi-Project Monorepo Setup', duration: '26 min', level: 'advanced' },
        { id: 'pw-adv-042', title: 'Shared Libraries and Utilities', duration: '22 min', level: 'advanced' },
        { id: 'pw-adv-043', title: 'Configuration Management System', duration: '24 min', level: 'advanced' },
        { id: 'pw-adv-044', title: 'Multi-Environment Strategy', duration: '21 min', level: 'advanced' },
        { id: 'pw-adv-045', title: 'Secret Management Integration', duration: '23 min', level: 'advanced' },
        { id: 'pw-adv-046', title: 'Dynamic Test Data Generation', duration: '25 min', level: 'advanced' },
        { id: 'pw-adv-047', title: 'Database State Management', duration: '27 min', level: 'advanced' },
        { id: 'pw-adv-048', title: 'Service Virtualization', duration: '24 min', level: 'advanced' },
        { id: 'pw-adv-049', title: 'Contract Testing Integration', duration: '26 min', level: 'advanced' },
        { id: 'pw-adv-050', title: 'Cross-browser Strategy', duration: '20 min', level: 'advanced' },
        { id: 'pw-adv-051', title: 'Framework Documentation Standards', duration: '19 min', level: 'advanced' },
        { id: 'pw-adv-052', title: 'Code Quality and Linting', duration: '18 min', level: 'advanced' },
        { id: 'pw-adv-053', title: 'Framework Versioning Strategy', duration: '17 min', level: 'advanced' },
        { id: 'pw-adv-054', title: 'Migration and Upgrade Paths', duration: '22 min', level: 'advanced' },
      ],
    },
  ],
};

export const allPlaywrightCourses = [
  basicPlaywrightCourse,
  intermediatePlaywrightCourse,
  advancedPlaywrightCourse,
];
