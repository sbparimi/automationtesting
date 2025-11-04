// Comprehensive TypeScript Learning Structure
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

// BASIC TYPESCRIPT COURSE
export const basicTypeScriptCourse: Course = {
  id: 'basic-typescript',
  title: 'TypeScript Fundamentals for Test Automation',
  description: 'Master the core concepts of TypeScript for building robust test automation frameworks with Playwright and Cypress',
  sections: [
    {
      id: 'section-1-fundamentals',
      title: 'Section 1: TypeScript Fundamentals (15 lessons)',
      description: 'Core building blocks of TypeScript',
      lessons: [
        { id: 'ts-basic-001', title: 'Variables and Type Annotations', duration: '12 min', level: 'basic' },
        { id: 'ts-basic-002', title: 'Primitive Types: string, number, boolean', duration: '10 min', level: 'basic' },
        { id: 'ts-basic-003', title: 'Arrays and Tuples', duration: '15 min', level: 'basic' },
        { id: 'ts-basic-004', title: 'Objects and Type Aliases', duration: '18 min', level: 'basic' },
        { id: 'ts-basic-005', title: 'Union and Intersection Types', duration: '20 min', level: 'basic' },
        { id: 'ts-basic-006', title: 'Literal Types and Type Narrowing', duration: '14 min', level: 'basic' },
        { id: 'ts-basic-007', title: 'Functions and Function Types', duration: '16 min', level: 'basic' },
        { id: 'ts-basic-008', title: 'Optional and Default Parameters', duration: '12 min', level: 'basic' },
        { id: 'ts-basic-009', title: 'Rest Parameters and Spread Operator', duration: '15 min', level: 'basic' },
        { id: 'ts-basic-010', title: 'Void, Never, and Unknown Types', duration: '13 min', level: 'basic' },
        { id: 'ts-basic-011', title: 'Type Assertions and Type Casting', duration: '14 min', level: 'basic' },
        { id: 'ts-basic-012', title: 'Enums: Numeric and String', duration: '17 min', level: 'basic' },
        { id: 'ts-basic-013', title: 'Any vs Unknown: When to Use', duration: '11 min', level: 'basic' },
        { id: 'ts-basic-014', title: 'Null and Undefined Handling', duration: '13 min', level: 'basic' },
        { id: 'ts-basic-015', title: 'Type Inference Best Practices', duration: '15 min', level: 'basic' },
      ]
    },
    {
      id: 'section-2-interfaces-classes',
      title: 'Section 2: Interfaces and Classes (13 lessons)',
      description: 'Object-oriented programming in TypeScript',
      lessons: [
        { id: 'ts-basic-016', title: 'Defining Interfaces', duration: '14 min', level: 'basic' },
        { id: 'ts-basic-017', title: 'Optional Properties in Interfaces', duration: '10 min', level: 'basic' },
        { id: 'ts-basic-018', title: 'Readonly Properties', duration: '12 min', level: 'basic' },
        { id: 'ts-basic-019', title: 'Extending Interfaces', duration: '16 min', level: 'basic' },
        { id: 'ts-basic-020', title: 'Index Signatures', duration: '14 min', level: 'basic' },
        { id: 'ts-basic-021', title: 'Class Basics and Constructors', duration: '18 min', level: 'basic' },
        { id: 'ts-basic-022', title: 'Access Modifiers: public, private, protected', duration: '15 min', level: 'basic' },
        { id: 'ts-basic-023', title: 'Getters and Setters', duration: '13 min', level: 'basic' },
        { id: 'ts-basic-024', title: 'Static Members', duration: '12 min', level: 'basic' },
        { id: 'ts-basic-025', title: 'Abstract Classes', duration: '17 min', level: 'basic' },
        { id: 'ts-basic-026', title: 'Implementing Interfaces in Classes', duration: '14 min', level: 'basic' },
        { id: 'ts-basic-027', title: 'Class Inheritance', duration: '19 min', level: 'basic' },
        { id: 'ts-basic-028', title: 'Method Overriding', duration: '13 min', level: 'basic' },
      ]
    },
    {
      id: 'section-3-playwright-basics',
      title: 'Section 3: TypeScript with Playwright Basics (12 lessons)',
      description: 'Applying TypeScript in Playwright test automation',
      lessons: [
        { id: 'ts-basic-029', title: 'Setting Up Playwright with TypeScript', duration: '16 min', level: 'basic' },
        { id: 'ts-basic-030', title: 'Type-Safe Page Object Model', duration: '22 min', level: 'basic' },
        { id: 'ts-basic-031', title: 'Typing Test Fixtures', duration: '18 min', level: 'basic' },
        { id: 'ts-basic-032', title: 'Custom Commands with Types', duration: '20 min', level: 'basic' },
        { id: 'ts-basic-033', title: 'Locator Types and Auto-Complete', duration: '15 min', level: 'basic' },
        { id: 'ts-basic-034', title: 'Response Types for API Testing', duration: '19 min', level: 'basic' },
        { id: 'ts-basic-035', title: 'Test Data Type Definitions', duration: '17 min', level: 'basic' },
        { id: 'ts-basic-036', title: 'Config File TypeScript Setup', duration: '14 min', level: 'basic' },
        { id: 'ts-basic-037', title: 'Custom Reporter Types', duration: '16 min', level: 'basic' },
        { id: 'ts-basic-038', title: 'Browser Context Types', duration: '13 min', level: 'basic' },
        { id: 'ts-basic-039', title: 'Screenshot and Video Types', duration: '12 min', level: 'basic' },
        { id: 'ts-basic-040', title: 'Network Interception Types', duration: '18 min', level: 'basic' },
      ]
    },
    {
      id: 'section-4-cypress-basics',
      title: 'Section 4: TypeScript with Cypress Basics (12 lessons)',
      description: 'Applying TypeScript in Cypress test automation',
      lessons: [
        { id: 'ts-basic-041', title: 'Setting Up Cypress with TypeScript', duration: '15 min', level: 'basic' },
        { id: 'ts-basic-042', title: 'Type-Safe Cypress Commands', duration: '20 min', level: 'basic' },
        { id: 'ts-basic-043', title: 'Custom Command Type Definitions', duration: '22 min', level: 'basic' },
        { id: 'ts-basic-044', title: 'Page Object Pattern in Cypress', duration: '24 min', level: 'basic' },
        { id: 'ts-basic-045', title: 'Fixture Data Typing', duration: '16 min', level: 'basic' },
        { id: 'ts-basic-046', title: 'Cypress Config TypeScript', duration: '14 min', level: 'basic' },
        { id: 'ts-basic-047', title: 'Plugin Types and Setup', duration: '18 min', level: 'basic' },
        { id: 'ts-basic-048', title: 'Intercept and Route Types', duration: '19 min', level: 'basic' },
        { id: 'ts-basic-049', title: 'Environment Variable Types', duration: '13 min', level: 'basic' },
        { id: 'ts-basic-050', title: 'Session Types and Storage', duration: '15 min', level: 'basic' },
        { id: 'ts-basic-051', title: 'Task Types for Node Events', duration: '17 min', level: 'basic' },
        { id: 'ts-basic-052', title: 'Assertion Types and Chaining', duration: '16 min', level: 'basic' },
      ]
    }
  ]
};

// INTERMEDIATE TYPESCRIPT COURSE
export const intermediateTypeScriptCourse: Course = {
  id: 'intermediate-typescript',
  title: 'Advanced TypeScript Patterns for Test Automation',
  description: 'Deep dive into advanced TypeScript patterns, generics, and design patterns for scalable test frameworks',
  sections: [
    {
      id: 'section-5-generics',
      title: 'Section 5: Generics and Advanced Types (15 lessons)',
      description: 'Reusable, type-safe code with generics',
      lessons: [
        { id: 'ts-int-001', title: 'Introduction to Generics', duration: '18 min', level: 'intermediate' },
        { id: 'ts-int-002', title: 'Generic Functions', duration: '22 min', level: 'intermediate' },
        { id: 'ts-int-003', title: 'Generic Classes', duration: '24 min', level: 'intermediate' },
        { id: 'ts-int-004', title: 'Generic Interfaces', duration: '20 min', level: 'intermediate' },
        { id: 'ts-int-005', title: 'Generic Constraints', duration: '19 min', level: 'intermediate' },
        { id: 'ts-int-006', title: 'Multiple Type Parameters', duration: '21 min', level: 'intermediate' },
        { id: 'ts-int-007', title: 'Default Generic Parameters', duration: '16 min', level: 'intermediate' },
        { id: 'ts-int-008', title: 'Conditional Types', duration: '26 min', level: 'intermediate' },
        { id: 'ts-int-009', title: 'Mapped Types', duration: '24 min', level: 'intermediate' },
        { id: 'ts-int-010', title: 'Template Literal Types', duration: '18 min', level: 'intermediate' },
        { id: 'ts-int-011', title: 'Utility Types: Partial, Required, Readonly', duration: '20 min', level: 'intermediate' },
        { id: 'ts-int-012', title: 'Utility Types: Pick, Omit, Extract, Exclude', duration: '22 min', level: 'intermediate' },
        { id: 'ts-int-013', title: 'ReturnType and Parameters Utility', duration: '17 min', level: 'intermediate' },
        { id: 'ts-int-014', title: 'Record and NonNullable Types', duration: '15 min', level: 'intermediate' },
        { id: 'ts-int-015', title: 'Type Guards and Type Predicates', duration: '23 min', level: 'intermediate' },
      ]
    },
    {
      id: 'section-6-decorators',
      title: 'Section 6: Decorators and Metadata (12 lessons)',
      description: 'Advanced TypeScript decorators for test frameworks',
      lessons: [
        { id: 'ts-int-016', title: 'Introduction to Decorators', duration: '20 min', level: 'intermediate' },
        { id: 'ts-int-017', title: 'Class Decorators', duration: '22 min', level: 'intermediate' },
        { id: 'ts-int-018', title: 'Method Decorators', duration: '24 min', level: 'intermediate' },
        { id: 'ts-int-019', title: 'Property Decorators', duration: '18 min', level: 'intermediate' },
        { id: 'ts-int-020', title: 'Parameter Decorators', duration: '19 min', level: 'intermediate' },
        { id: 'ts-int-021', title: 'Decorator Factories', duration: '21 min', level: 'intermediate' },
        { id: 'ts-int-022', title: 'Decorator Composition', duration: '17 min', level: 'intermediate' },
        { id: 'ts-int-023', title: 'Reflect Metadata API', duration: '25 min', level: 'intermediate' },
        { id: 'ts-int-024', title: 'Custom Test Decorators for Playwright', duration: '28 min', level: 'intermediate' },
        { id: 'ts-int-025', title: 'Custom Test Decorators for Cypress', duration: '27 min', level: 'intermediate' },
        { id: 'ts-int-026', title: 'Logging Decorators', duration: '20 min', level: 'intermediate' },
        { id: 'ts-int-027', title: 'Performance Monitoring Decorators', duration: '23 min', level: 'intermediate' },
      ]
    },
    {
      id: 'section-7-async-patterns',
      title: 'Section 7: Asynchronous Patterns (14 lessons)',
      description: 'Mastering async/await and Promises in test automation',
      lessons: [
        { id: 'ts-int-028', title: 'Promises and Type Safety', duration: '19 min', level: 'intermediate' },
        { id: 'ts-int-029', title: 'Async/Await Best Practices', duration: '22 min', level: 'intermediate' },
        { id: 'ts-int-030', title: 'Error Handling in Async Code', duration: '24 min', level: 'intermediate' },
        { id: 'ts-int-031', title: 'Promise.all and Parallel Execution', duration: '20 min', level: 'intermediate' },
        { id: 'ts-int-032', title: 'Promise.race and Timeout Patterns', duration: '18 min', level: 'intermediate' },
        { id: 'ts-int-033', title: 'Sequential vs Parallel Async Operations', duration: '21 min', level: 'intermediate' },
        { id: 'ts-int-034', title: 'Retry Mechanisms with Async', duration: '26 min', level: 'intermediate' },
        { id: 'ts-int-035', title: 'Async Generators and Iterators', duration: '23 min', level: 'intermediate' },
        { id: 'ts-int-036', title: 'Observable Patterns with RxJS', duration: '28 min', level: 'intermediate' },
        { id: 'ts-int-037', title: 'Event Emitters and Typed Events', duration: '20 min', level: 'intermediate' },
        { id: 'ts-int-038', title: 'Async Context in Playwright', duration: '25 min', level: 'intermediate' },
        { id: 'ts-int-039', title: 'Async Context in Cypress', duration: '24 min', level: 'intermediate' },
        { id: 'ts-int-040', title: 'Debouncing and Throttling', duration: '19 min', level: 'intermediate' },
        { id: 'ts-int-041', title: 'Queue Patterns for Test Execution', duration: '22 min', level: 'intermediate' },
      ]
    },
    {
      id: 'section-8-design-patterns',
      title: 'Section 8: Design Patterns in TypeScript (13 lessons)',
      description: 'Common design patterns for test automation',
      lessons: [
        { id: 'ts-int-042', title: 'Singleton Pattern for Test Configuration', duration: '20 min', level: 'intermediate' },
        { id: 'ts-int-043', title: 'Factory Pattern for Test Data', duration: '24 min', level: 'intermediate' },
        { id: 'ts-int-044', title: 'Builder Pattern for Complex Objects', duration: '26 min', level: 'intermediate' },
        { id: 'ts-int-045', title: 'Strategy Pattern for Test Strategies', duration: '23 min', level: 'intermediate' },
        { id: 'ts-int-046', title: 'Observer Pattern for Event Handling', duration: '22 min', level: 'intermediate' },
        { id: 'ts-int-047', title: 'Command Pattern for Test Actions', duration: '25 min', level: 'intermediate' },
        { id: 'ts-int-048', title: 'Chain of Responsibility Pattern', duration: '21 min', level: 'intermediate' },
        { id: 'ts-int-049', title: 'Proxy Pattern for Element Wrapping', duration: '24 min', level: 'intermediate' },
        { id: 'ts-int-050', title: 'Adapter Pattern for Framework Integration', duration: '23 min', level: 'intermediate' },
        { id: 'ts-int-051', title: 'Facade Pattern for Complex APIs', duration: '20 min', level: 'intermediate' },
        { id: 'ts-int-052', title: 'Module Pattern for Code Organization', duration: '18 min', level: 'intermediate' },
        { id: 'ts-int-053', title: 'Dependency Injection in Tests', duration: '27 min', level: 'intermediate' },
        { id: 'ts-int-054', title: 'Repository Pattern for Data Access', duration: '25 min', level: 'intermediate' },
      ]
    }
  ]
};

// ADVANCED TYPESCRIPT COURSE
export const advancedTypeScriptCourse: Course = {
  id: 'advanced-typescript',
  title: 'Expert TypeScript for Enterprise Test Frameworks',
  description: 'Master advanced TypeScript techniques, performance optimization, and enterprise-grade architecture',
  sections: [
    {
      id: 'section-9-advanced-types',
      title: 'Section 9: Advanced Type System (15 lessons)',
      description: 'Expert-level type manipulation and inference',
      lessons: [
        { id: 'ts-adv-001', title: 'Advanced Conditional Types', duration: '28 min', level: 'advanced' },
        { id: 'ts-adv-002', title: 'Distributive Conditional Types', duration: '26 min', level: 'advanced' },
        { id: 'ts-adv-003', title: 'Infer Keyword Mastery', duration: '30 min', level: 'advanced' },
        { id: 'ts-adv-004', title: 'Advanced Mapped Types', duration: '32 min', level: 'advanced' },
        { id: 'ts-adv-005', title: 'Recursive Types', duration: '29 min', level: 'advanced' },
        { id: 'ts-adv-006', title: 'Template Literal Type Patterns', duration: '27 min', level: 'advanced' },
        { id: 'ts-adv-007', title: 'Type-Level Programming', duration: '35 min', level: 'advanced' },
        { id: 'ts-adv-008', title: 'Branded Types for Type Safety', duration: '24 min', level: 'advanced' },
        { id: 'ts-adv-009', title: 'Phantom Types', duration: '26 min', level: 'advanced' },
        { id: 'ts-adv-010', title: 'Variance in TypeScript', duration: '31 min', level: 'advanced' },
        { id: 'ts-adv-011', title: 'Higher-Kinded Types', duration: '33 min', level: 'advanced' },
        { id: 'ts-adv-012', title: 'Type-Level Arithmetic', duration: '28 min', level: 'advanced' },
        { id: 'ts-adv-013', title: 'Custom Utility Types', duration: '25 min', level: 'advanced' },
        { id: 'ts-adv-014', title: 'Type Challenges Solutions', duration: '40 min', level: 'advanced' },
        { id: 'ts-adv-015', title: 'Type-Safe Event Systems', duration: '29 min', level: 'advanced' },
      ]
    },
    {
      id: 'section-10-performance',
      title: 'Section 10: Performance Optimization (12 lessons)',
      description: 'TypeScript performance and compilation optimization',
      lessons: [
        { id: 'ts-adv-016', title: 'Type Compilation Performance', duration: '25 min', level: 'advanced' },
        { id: 'ts-adv-017', title: 'Lazy Type Evaluation', duration: '23 min', level: 'advanced' },
        { id: 'ts-adv-018', title: 'Module Resolution Strategies', duration: '27 min', level: 'advanced' },
        { id: 'ts-adv-019', title: 'Declaration Files Optimization', duration: '24 min', level: 'advanced' },
        { id: 'ts-adv-020', title: 'Build-Time vs Runtime Performance', duration: '26 min', level: 'advanced' },
        { id: 'ts-adv-021', title: 'Tree-Shaking with TypeScript', duration: '22 min', level: 'advanced' },
        { id: 'ts-adv-022', title: 'Bundle Size Optimization', duration: '25 min', level: 'advanced' },
        { id: 'ts-adv-023', title: 'Memory Management in Large Codebases', duration: '28 min', level: 'advanced' },
        { id: 'ts-adv-024', title: 'Incremental Compilation', duration: '21 min', level: 'advanced' },
        { id: 'ts-adv-025', title: 'Project References', duration: '29 min', level: 'advanced' },
        { id: 'ts-adv-026', title: 'Monorepo TypeScript Setup', duration: '32 min', level: 'advanced' },
        { id: 'ts-adv-027', title: 'Watch Mode Optimization', duration: '20 min', level: 'advanced' },
      ]
    },
    {
      id: 'section-11-architecture',
      title: 'Section 11: Enterprise Architecture Patterns (14 lessons)',
      description: 'Scalable test framework architecture',
      lessons: [
        { id: 'ts-adv-028', title: 'Hexagonal Architecture for Tests', duration: '35 min', level: 'advanced' },
        { id: 'ts-adv-029', title: 'Clean Architecture Principles', duration: '32 min', level: 'advanced' },
        { id: 'ts-adv-030', title: 'Domain-Driven Design in Tests', duration: '38 min', level: 'advanced' },
        { id: 'ts-adv-031', title: 'CQRS Pattern for Test Data', duration: '30 min', level: 'advanced' },
        { id: 'ts-adv-032', title: 'Event Sourcing in Test Automation', duration: '33 min', level: 'advanced' },
        { id: 'ts-adv-033', title: 'Microservices Testing Architecture', duration: '36 min', level: 'advanced' },
        { id: 'ts-adv-034', title: 'Plugin Architecture for Extensibility', duration: '29 min', level: 'advanced' },
        { id: 'ts-adv-035', title: 'Middleware Pattern for Test Hooks', duration: '27 min', level: 'advanced' },
        { id: 'ts-adv-036', title: 'Pipeline Architecture for CI/CD', duration: '31 min', level: 'advanced' },
        { id: 'ts-adv-037', title: 'Multi-Tenant Test Framework Design', duration: '34 min', level: 'advanced' },
        { id: 'ts-adv-038', title: 'Feature Flag Integration', duration: '26 min', level: 'advanced' },
        { id: 'ts-adv-039', title: 'A/B Testing Framework Design', duration: '28 min', level: 'advanced' },
        { id: 'ts-adv-040', title: 'Scalable Parallel Execution Architecture', duration: '37 min', level: 'advanced' },
        { id: 'ts-adv-041', title: 'Cross-Browser Testing Architecture', duration: '30 min', level: 'advanced' },
      ]
    },
    {
      id: 'section-12-advanced-playwright',
      title: 'Section 12: Advanced Playwright with TypeScript (13 lessons)',
      description: 'Expert Playwright patterns and techniques',
      lessons: [
        { id: 'ts-adv-042', title: 'Custom Fixture Architecture', duration: '32 min', level: 'advanced' },
        { id: 'ts-adv-043', title: 'Type-Safe Test Generators', duration: '29 min', level: 'advanced' },
        { id: 'ts-adv-044', title: 'Advanced Network Mocking Patterns', duration: '35 min', level: 'advanced' },
        { id: 'ts-adv-045', title: 'Browser Context Isolation Strategies', duration: '28 min', level: 'advanced' },
        { id: 'ts-adv-046', title: 'Performance Profiling with Playwright', duration: '31 min', level: 'advanced' },
        { id: 'ts-adv-047', title: 'Visual Regression Testing Architecture', duration: '33 min', level: 'advanced' },
        { id: 'ts-adv-048', title: 'Accessibility Testing Automation', duration: '30 min', level: 'advanced' },
        { id: 'ts-adv-049', title: 'Code Coverage Integration', duration: '27 min', level: 'advanced' },
        { id: 'ts-adv-050', title: 'Trace Viewer Custom Annotations', duration: '26 min', level: 'advanced' },
        { id: 'ts-adv-051', title: 'Mobile Emulation Best Practices', duration: '29 min', level: 'advanced' },
        { id: 'ts-adv-052', title: 'Geolocation and Permissions Testing', duration: '25 min', level: 'advanced' },
        { id: 'ts-adv-053', title: 'Advanced Waiting Strategies', duration: '28 min', level: 'advanced' },
        { id: 'ts-adv-054', title: 'Component Testing with Playwright', duration: '34 min', level: 'advanced' },
      ]
    }
  ]
};

export const allCourses = [
  basicTypeScriptCourse,
  intermediateTypeScriptCourse,
  advancedTypeScriptCourse
];
