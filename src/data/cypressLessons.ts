// Comprehensive Cypress Learning Structure
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

// BASIC CYPRESS COURSE
export const basicCypressCourse: Course = {
  id: 'basic-cypress',
  title: 'Cypress Fundamentals',
  description: 'Master the core concepts of Cypress for modern web test automation',
  sections: [
    {
      id: 'section-1-getting-started',
      title: 'Section 1: Getting Started with Cypress (12 lessons)',
      description: 'Installation, setup, and first tests',
      lessons: [
        { id: 'cy-basic-001', title: 'Introduction to Cypress Architecture', duration: '15 min', level: 'basic' },
        { id: 'cy-basic-002', title: 'Installing Cypress and Project Setup', duration: '12 min', level: 'basic' },
        { id: 'cy-basic-003', title: 'Writing Your First Test', duration: '18 min', level: 'basic' },
        { id: 'cy-basic-004', title: 'Understanding describe, it, and hooks', duration: '16 min', level: 'basic' },
        { id: 'cy-basic-005', title: 'Cypress Test Runner Interface', duration: '14 min', level: 'basic' },
        { id: 'cy-basic-006', title: 'Configuration: cypress.config.js', duration: '20 min', level: 'basic' },
        { id: 'cy-basic-007', title: 'Understanding the Command Log', duration: '15 min', level: 'basic' },
        { id: 'cy-basic-008', title: 'Time Travel Debugging', duration: '13 min', level: 'basic' },
        { id: 'cy-basic-009', title: 'Cypress Selector Playground', duration: '17 min', level: 'basic' },
        { id: 'cy-basic-010', title: 'Project Structure Best Practices', duration: '19 min', level: 'basic' },
        { id: 'cy-basic-011', title: 'Environment Variables in Cypress', duration: '16 min', level: 'basic' },
        { id: 'cy-basic-012', title: 'beforeEach, afterEach Lifecycle', duration: '18 min', level: 'basic' },
      ],
    },
    {
      id: 'section-2-selectors',
      title: 'Section 2: Selectors and Element Interaction (14 lessons)',
      description: 'Master element location and interaction strategies',
      lessons: [
        { id: 'cy-basic-013', title: 'cy.get() and CSS Selectors', duration: '16 min', level: 'basic' },
        { id: 'cy-basic-014', title: 'cy.contains() for Text Selection', duration: '14 min', level: 'basic' },
        { id: 'cy-basic-015', title: 'Data Attributes Strategy (data-cy)', duration: '20 min', level: 'basic' },
        { id: 'cy-basic-016', title: 'XPath Plugin and Usage', duration: '15 min', level: 'basic' },
        { id: 'cy-basic-017', title: 'Chaining Commands: find, filter, eq', duration: '17 min', level: 'basic' },
        { id: 'cy-basic-018', title: 'Traversal: parent, children, siblings', duration: '13 min', level: 'basic' },
        { id: 'cy-basic-019', title: 'cy.click() and Click Options', duration: '16 min', level: 'basic' },
        { id: 'cy-basic-020', title: 'cy.type() and Input Handling', duration: '14 min', level: 'basic' },
        { id: 'cy-basic-021', title: 'cy.select() for Dropdowns', duration: '15 min', level: 'basic' },
        { id: 'cy-basic-022', title: 'cy.check() and cy.uncheck()', duration: '12 min', level: 'basic' },
        { id: 'cy-basic-023', title: 'File Upload with attachFile', duration: '18 min', level: 'basic' },
        { id: 'cy-basic-024', title: 'Keyboard Events and Shortcuts', duration: '17 min', level: 'basic' },
        { id: 'cy-basic-025', title: 'cy.trigger() for Custom Events', duration: '16 min', level: 'basic' },
        { id: 'cy-basic-026', title: 'Hover Simulation Strategies', duration: '13 min', level: 'basic' },
      ],
    },
    {
      id: 'section-3-assertions',
      title: 'Section 3: Assertions and Expectations (13 lessons)',
      description: 'Verification strategies and automatic retry',
      lessons: [
        { id: 'cy-basic-027', title: 'Introduction to Automatic Retry', duration: '15 min', level: 'basic' },
        { id: 'cy-basic-028', title: 'should() Assertions Chaining', duration: '12 min', level: 'basic' },
        { id: 'cy-basic-029', title: 'expect() from Chai Library', duration: '14 min', level: 'basic' },
        { id: 'cy-basic-030', title: 'Visibility Assertions: be.visible', duration: '16 min', level: 'basic' },
        { id: 'cy-basic-031', title: 'Text Assertions: have.text, contain', duration: '13 min', level: 'basic' },
        { id: 'cy-basic-032', title: 'Attribute Assertions: have.attr', duration: '11 min', level: 'basic' },
        { id: 'cy-basic-033', title: 'Length and Count Assertions', duration: '15 min', level: 'basic' },
        { id: 'cy-basic-034', title: 'URL Assertions: should(include)', duration: '12 min', level: 'basic' },
        { id: 'cy-basic-035', title: 'Class and CSS Assertions', duration: '14 min', level: 'basic' },
        { id: 'cy-basic-036', title: 'Value Assertions for Inputs', duration: '13 min', level: 'basic' },
        { id: 'cy-basic-037', title: 'Negative Assertions: not.exist', duration: '16 min', level: 'basic' },
        { id: 'cy-basic-038', title: 'Multiple Assertions with and()', duration: '15 min', level: 'basic' },
        { id: 'cy-basic-039', title: 'Custom Assertion Messages', duration: '14 min', level: 'basic' },
      ],
    },
    {
      id: 'section-4-navigation',
      title: 'Section 4: Navigation and Page Management (13 lessons)',
      description: 'Browser navigation, iframes, and window handling',
      lessons: [
        { id: 'cy-basic-040', title: 'cy.visit() and Base URL', duration: '16 min', level: 'basic' },
        { id: 'cy-basic-041', title: 'cy.go() for Navigation', duration: '14 min', level: 'basic' },
        { id: 'cy-basic-042', title: 'cy.reload() Page Refresh', duration: '12 min', level: 'basic' },
        { id: 'cy-basic-043', title: 'cy.url() and Location Assertions', duration: '15 min', level: 'basic' },
        { id: 'cy-basic-044', title: 'Handling Multiple Tabs/Windows', duration: '19 min', level: 'basic' },
        { id: 'cy-basic-045', title: 'iFrame Handling with cy.iframe()', duration: '20 min', level: 'basic' },
        { id: 'cy-basic-046', title: 'Shadow DOM Access', duration: '16 min', level: 'basic' },
        { id: 'cy-basic-047', title: 'cy.window() and Window Properties', duration: '18 min', level: 'basic' },
        { id: 'cy-basic-048', title: 'cy.document() DOM Manipulation', duration: '15 min', level: 'basic' },
        { id: 'cy-basic-049', title: 'Viewport Configuration', duration: '17 min', level: 'basic' },
        { id: 'cy-basic-050', title: 'Cookie Management', duration: '14 min', level: 'basic' },
        { id: 'cy-basic-051', title: 'LocalStorage and SessionStorage', duration: '16 min', level: 'basic' },
        { id: 'cy-basic-052', title: 'Browser Console Access', duration: '13 min', level: 'basic' },
      ],
    },
  ],
};

// INTERMEDIATE CYPRESS COURSE
export const intermediateCypressCourse: Course = {
  id: 'intermediate-cypress',
  title: 'Cypress Advanced Techniques',
  description: 'Custom commands, fixtures, and advanced testing patterns',
  sections: [
    {
      id: 'section-5-custom-commands',
      title: 'Section 5: Custom Commands and Reusability (14 lessons)',
      description: 'Building maintainable test architectures',
      lessons: [
        { id: 'cy-int-001', title: 'Introduction to Custom Commands', duration: '18 min', level: 'intermediate' },
        { id: 'cy-int-002', title: 'Creating Your First Custom Command', duration: '20 min', level: 'intermediate' },
        { id: 'cy-int-003', title: 'Parent, Child, and Dual Commands', duration: '22 min', level: 'intermediate' },
        { id: 'cy-int-004', title: 'Overwriting Existing Commands', duration: '17 min', level: 'intermediate' },
        { id: 'cy-int-005', title: 'TypeScript Typing for Commands', duration: '19 min', level: 'intermediate' },
        { id: 'cy-int-006', title: 'Command Options and Configuration', duration: '16 min', level: 'intermediate' },
        { id: 'cy-int-007', title: 'Chainable Custom Commands', duration: '21 min', level: 'intermediate' },
        { id: 'cy-int-008', title: 'Authentication Custom Commands', duration: '23 min', level: 'intermediate' },
        { id: 'cy-int-009', title: 'Reusable UI Component Commands', duration: '20 min', level: 'intermediate' },
        { id: 'cy-int-010', title: 'Data Generation Commands', duration: '18 min', level: 'intermediate' },
        { id: 'cy-int-011', title: 'Logging and Debug Commands', duration: '15 min', level: 'intermediate' },
        { id: 'cy-int-012', title: 'Command Library Organization', duration: '17 min', level: 'intermediate' },
        { id: 'cy-int-013', title: 'Testing Custom Commands', duration: '16 min', level: 'intermediate' },
        { id: 'cy-int-014', title: 'Custom Command Best Practices', duration: '19 min', level: 'intermediate' },
      ],
    },
    {
      id: 'section-6-fixtures',
      title: 'Section 6: Fixtures and Test Data (14 lessons)',
      description: 'Test data management and isolation',
      lessons: [
        { id: 'cy-int-015', title: 'Understanding Cypress Fixtures', duration: '17 min', level: 'intermediate' },
        { id: 'cy-int-016', title: 'Loading JSON Fixtures', duration: '15 min', level: 'intermediate' },
        { id: 'cy-int-017', title: 'Dynamic Fixture Loading', duration: '20 min', level: 'intermediate' },
        { id: 'cy-int-018', title: 'Fixture Aliases with cy.as()', duration: '18 min', level: 'intermediate' },
        { id: 'cy-int-019', title: 'Fixture Data Manipulation', duration: '19 min', level: 'intermediate' },
        { id: 'cy-int-020', title: 'CSV and Excel Data Loading', duration: '22 min', level: 'intermediate' },
        { id: 'cy-int-021', title: 'Test Data Factories with Faker', duration: '21 min', level: 'intermediate' },
        { id: 'cy-int-022', title: 'Database Seeding Strategies', duration: '24 min', level: 'intermediate' },
        { id: 'cy-int-023', title: 'API-based Data Setup', duration: '23 min', level: 'intermediate' },
        { id: 'cy-int-024', title: 'Environment-specific Fixtures', duration: '17 min', level: 'intermediate' },
        { id: 'cy-int-025', title: 'Fixture-based Authentication', duration: '20 min', level: 'intermediate' },
        { id: 'cy-int-026', title: 'Shared vs Test-specific Data', duration: '16 min', level: 'intermediate' },
        { id: 'cy-int-027', title: 'Fixture Versioning', duration: '15 min', level: 'intermediate' },
        { id: 'cy-int-028', title: 'Fixture Management Best Practices', duration: '18 min', level: 'intermediate' },
      ],
    },
    {
      id: 'section-7-network',
      title: 'Section 7: Network Control and API Testing (13 lessons)',
      description: 'Intercept, stub, and API automation',
      lessons: [
        { id: 'cy-int-029', title: 'Introduction to cy.intercept()', duration: '19 min', level: 'intermediate' },
        { id: 'cy-int-030', title: 'Network Request Interception', duration: '21 min', level: 'intermediate' },
        { id: 'cy-int-031', title: 'Response Stubbing Strategies', duration: '23 min', level: 'intermediate' },
        { id: 'cy-int-032', title: 'cy.wait() for Network Requests', duration: '17 min', level: 'intermediate' },
        { id: 'cy-int-033', title: 'Request/Response Modification', duration: '22 min', level: 'intermediate' },
        { id: 'cy-int-034', title: 'cy.request() for API Testing', duration: '20 min', level: 'intermediate' },
        { id: 'cy-int-035', title: 'API Authentication Testing', duration: '24 min', level: 'intermediate' },
        { id: 'cy-int-036', title: 'GraphQL API Testing', duration: '25 min', level: 'intermediate' },
        { id: 'cy-int-037', title: 'Response Schema Validation', duration: '19 min', level: 'intermediate' },
        { id: 'cy-int-038', title: 'Network Error Simulation', duration: '18 min', level: 'intermediate' },
        { id: 'cy-int-039', title: 'Performance Testing with Intercept', duration: '21 min', level: 'intermediate' },
        { id: 'cy-int-040', title: 'Static Response Fixtures', duration: '16 min', level: 'intermediate' },
        { id: 'cy-int-041', title: 'Dynamic Response Generation', duration: '20 min', level: 'intermediate' },
      ],
    },
    {
      id: 'section-8-plugins',
      title: 'Section 8: Plugins and Advanced Features (13 lessons)',
      description: 'Visual testing, file upload, and extensions',
      lessons: [
        { id: 'cy-int-042', title: 'Cypress Plugin Architecture', duration: '18 min', level: 'intermediate' },
        { id: 'cy-int-043', title: 'Installing and Configuring Plugins', duration: '16 min', level: 'intermediate' },
        { id: 'cy-int-044', title: 'Visual Regression with Percy', duration: '24 min', level: 'intermediate' },
        { id: 'cy-int-045', title: 'Accessibility Testing with Axe', duration: '22 min', level: 'intermediate' },
        { id: 'cy-int-046', title: 'File Upload Plugin', duration: '19 min', level: 'intermediate' },
        { id: 'cy-int-047', title: 'Real Browser Events Plugin', duration: '17 min', level: 'intermediate' },
        { id: 'cy-int-048', title: 'Code Coverage Plugin', duration: '25 min', level: 'intermediate' },
        { id: 'cy-int-049', title: 'Screenshot and Video Plugins', duration: '18 min', level: 'intermediate' },
        { id: 'cy-int-050', title: 'XPath Plugin Usage', duration: '15 min', level: 'intermediate' },
        { id: 'cy-int-051', title: 'Drag and Drop Plugin', duration: '20 min', level: 'intermediate' },
        { id: 'cy-int-052', title: 'Custom Plugin Development', duration: '26 min', level: 'intermediate' },
        { id: 'cy-int-053', title: 'Plugin Configuration Management', duration: '16 min', level: 'intermediate' },
        { id: 'cy-int-054', title: 'Plugin Best Practices', duration: '17 min', level: 'intermediate' },
      ],
    },
  ],
};

// ADVANCED CYPRESS COURSE
export const advancedCypressCourse: Course = {
  id: 'advanced-cypress',
  title: 'Cypress Enterprise Patterns',
  description: 'Scaling, CI/CD, reporting, and production-grade frameworks',
  sections: [
    {
      id: 'section-9-cicd',
      title: 'Section 9: CI/CD Integration (14 lessons)',
      description: 'Continuous testing and deployment pipelines',
      lessons: [
        { id: 'cy-adv-001', title: 'GitHub Actions for Cypress', duration: '22 min', level: 'advanced' },
        { id: 'cy-adv-002', title: 'Jenkins Pipeline Configuration', duration: '24 min', level: 'advanced' },
        { id: 'cy-adv-003', title: 'GitLab CI/CD Setup', duration: '20 min', level: 'advanced' },
        { id: 'cy-adv-004', title: 'CircleCI Integration', duration: '21 min', level: 'advanced' },
        { id: 'cy-adv-005', title: 'Azure DevOps Pipelines', duration: '23 min', level: 'advanced' },
        { id: 'cy-adv-006', title: 'Docker Container Testing', duration: '26 min', level: 'advanced' },
        { id: 'cy-adv-007', title: 'Cypress Dashboard Service', duration: '25 min', level: 'advanced' },
        { id: 'cy-adv-008', title: 'Parallelization Strategy', duration: '28 min', level: 'advanced' },
        { id: 'cy-adv-009', title: 'Load Balancing Tests', duration: '24 min', level: 'advanced' },
        { id: 'cy-adv-010', title: 'Smart Test Orchestration', duration: '22 min', level: 'advanced' },
        { id: 'cy-adv-011', title: 'Flaky Test Management', duration: '21 min', level: 'advanced' },
        { id: 'cy-adv-012', title: 'Test Retries Configuration', duration: '19 min', level: 'advanced' },
        { id: 'cy-adv-013', title: 'Cloud Browser Services', duration: '23 min', level: 'advanced' },
        { id: 'cy-adv-014', title: 'Multi-browser CI Strategy', duration: '20 min', level: 'advanced' },
      ],
    },
    {
      id: 'section-10-reporting',
      title: 'Section 10: Reporting and Observability (13 lessons)',
      description: 'Mochawesome, Allure, and custom dashboards',
      lessons: [
        { id: 'cy-adv-015', title: 'Mochawesome Reporter Setup', duration: '20 min', level: 'advanced' },
        { id: 'cy-adv-016', title: 'Allure Reporter Integration', duration: '24 min', level: 'advanced' },
        { id: 'cy-adv-017', title: 'Allure Annotations and Steps', duration: '22 min', level: 'advanced' },
        { id: 'cy-adv-018', title: 'JUnit XML Reporter', duration: '17 min', level: 'advanced' },
        { id: 'cy-adv-019', title: 'Custom Reporter Development', duration: '26 min', level: 'advanced' },
        { id: 'cy-adv-020', title: 'Multi-reporter Configuration', duration: '19 min', level: 'advanced' },
        { id: 'cy-adv-021', title: 'Slack/Teams Notifications', duration: '21 min', level: 'advanced' },
        { id: 'cy-adv-022', title: 'TestRail Integration', duration: '25 min', level: 'advanced' },
        { id: 'cy-adv-023', title: 'Jira Xray Integration', duration: '24 min', level: 'advanced' },
        { id: 'cy-adv-024', title: 'Custom Analytics Dashboard', duration: '27 min', level: 'advanced' },
        { id: 'cy-adv-025', title: 'Screenshot Attachment Strategies', duration: '18 min', level: 'advanced' },
        { id: 'cy-adv-026', title: 'Video Evidence Management', duration: '20 min', level: 'advanced' },
        { id: 'cy-adv-027', title: 'Historical Trend Analysis', duration: '22 min', level: 'advanced' },
      ],
    },
    {
      id: 'section-11-performance',
      title: 'Section 11: Performance and Optimization (13 lessons)',
      description: 'Speed optimization and resource management',
      lessons: [
        { id: 'cy-adv-028', title: 'Test Execution Performance', duration: '21 min', level: 'advanced' },
        { id: 'cy-adv-029', title: 'Browser Launch Optimization', duration: '19 min', level: 'advanced' },
        { id: 'cy-adv-030', title: 'Memory Management', duration: '23 min', level: 'advanced' },
        { id: 'cy-adv-031', title: 'Selective Test Execution', duration: '20 min', level: 'advanced' },
        { id: 'cy-adv-032', title: 'Test Impact Analysis', duration: '24 min', level: 'advanced' },
        { id: 'cy-adv-033', title: 'Video Recording Strategies', duration: '17 min', level: 'advanced' },
        { id: 'cy-adv-034', title: 'Screenshot Optimization', duration: '16 min', level: 'advanced' },
        { id: 'cy-adv-035', title: 'numTestsKeptInMemory Setting', duration: '18 min', level: 'advanced' },
        { id: 'cy-adv-036', title: 'experimentalMemoryManagement', duration: '22 min', level: 'advanced' },
        { id: 'cy-adv-037', title: 'Network Request Optimization', duration: '19 min', level: 'advanced' },
        { id: 'cy-adv-038', title: 'Resource Cleanup Patterns', duration: '20 min', level: 'advanced' },
        { id: 'cy-adv-039', title: 'Performance Profiling', duration: '21 min', level: 'advanced' },
        { id: 'cy-adv-040', title: 'Bottleneck Identification', duration: '18 min', level: 'advanced' },
      ],
    },
    {
      id: 'section-12-architecture',
      title: 'Section 12: Enterprise Framework Architecture (14 lessons)',
      description: 'Production-grade framework design',
      lessons: [
        { id: 'cy-adv-041', title: 'Monorepo Project Structure', duration: '26 min', level: 'advanced' },
        { id: 'cy-adv-042', title: 'Shared Library Design', duration: '24 min', level: 'advanced' },
        { id: 'cy-adv-043', title: 'Configuration Management', duration: '22 min', level: 'advanced' },
        { id: 'cy-adv-044', title: 'Multi-environment Strategy', duration: '25 min', level: 'advanced' },
        { id: 'cy-adv-045', title: 'Secret Management', duration: '21 min', level: 'advanced' },
        { id: 'cy-adv-046', title: 'Dynamic Test Data System', duration: '27 min', level: 'advanced' },
        { id: 'cy-adv-047', title: 'Database State Management', duration: '28 min', level: 'advanced' },
        { id: 'cy-adv-048', title: 'Service Virtualization', duration: '24 min', level: 'advanced' },
        { id: 'cy-adv-049', title: 'Component Testing Setup', duration: '23 min', level: 'advanced' },
        { id: 'cy-adv-050', title: 'Cross-browser Strategy', duration: '20 min', level: 'advanced' },
        { id: 'cy-adv-051', title: 'Framework Documentation', duration: '19 min', level: 'advanced' },
        { id: 'cy-adv-052', title: 'Code Quality Standards', duration: '18 min', level: 'advanced' },
        { id: 'cy-adv-053', title: 'Framework Versioning', duration: '17 min', level: 'advanced' },
        { id: 'cy-adv-054', title: 'Migration Strategies', duration: '22 min', level: 'advanced' },
      ],
    },
  ],
};

export const allCypressCourses = [
  basicCypressCourse,
  intermediateCypressCourse,
  advancedCypressCourse,
];
