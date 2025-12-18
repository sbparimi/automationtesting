// Utility to generate comprehensive Cypress lesson content with STAR method

export interface LessonContent {
  title: string;
  objectives: string[];
  concept: string;
  starMethod: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  whys: { question: string; answer: string }[];
  cypressImplementation: { title: string; code: string; explanation: string; starContext: { situation: string; task: string; action: string; result: string } }[];
  benefits: string[];
  commonMistakes: { mistake: string; solution: string }[];
  exercises: { title: string; task: string; solution: string }[];
  resources: string[];
}

export const generateCypressLessonContent = (lessonId: string, title: string, level: string): LessonContent => {
  const lessonNumber = parseInt(lessonId.split('-').pop() || '0');
  
  return {
    title,
    objectives: [
      `Master ${title.toLowerCase()} concepts in Cypress`,
      `Understand practical applications of ${title.split(':')[0]}`,
      `Implement production-ready ${title.toLowerCase()} patterns`,
      `Avoid common pitfalls when using ${title.split(' ')[0]}`,
      `Build reusable and maintainable test solutions`
    ],
    
    // STAR Method Overview for the entire lesson
    starMethod: {
      situation: `Modern web applications require robust end-to-end testing. Teams struggle with ${title.toLowerCase()} due to asynchronous behavior, flaky tests, and complex DOM interactions. Cypress provides a unique architecture to solve these challenges.`,
      task: `Implement ${title.toLowerCase()} using Cypress best practices. Create tests that are fast, reliable, and provide excellent developer experience with time-travel debugging.`,
      action: `Apply Cypress commands with proper chaining, use intercept for network control, leverage custom commands for reusability, and structure tests with the Testing Library philosophy.`,
      result: `Achieve 99% test reliability, reduce debugging time by 70% with time-travel, and create a test suite that runs in under 10 minutes for 200+ tests.`
    },
    
    concept: `**${title}**

This lesson covers ${title.toLowerCase()}, an essential concept in Cypress test automation. Understanding this topic will help you build more robust, maintainable, and efficient test suites.

**The STAR Framework Applied to ${title}:**

By understanding ${title.toLowerCase()} through STAR, you contextualize the problem, understand the approach, and measure success.

**Key Concepts:**

1. **Foundation**: ${title} forms a critical part of modern Cypress testing strategies. This approach enables teams to write tests that are both powerful and easy to maintain.

2. **Real-world Application**: In production environments, ${title.toLowerCase()} is used to solve specific testing challenges that arise in complex web applications.

3. **Best Practices**: Following industry-standard patterns for ${title.toLowerCase()} ensures your tests remain stable and valuable as your application grows.

**Why This Matters:**

Cypress provides unique capabilities for ${title.toLowerCase()} that distinguish it from other testing frameworks. The automatic waiting, real-time reloading, and time-travel debugging make implementing ${title.toLowerCase()} both easier and more powerful.`,
    
    whys: [
      {
        question: `Why is ${title.split(' ')[0]} important in Cypress?`,
        answer: `${title.split(' ')[0]} enables you to write more reliable tests by providing better control over test execution and reducing flaky tests. It's a fundamental building block for professional test automation.`
      },
      {
        question: `Why does Cypress handle ${title.split(' ')[0]} differently than Selenium?`,
        answer: `Cypress runs directly in the browser, giving it native access to ${title.split(' ')[0]}. This architecture eliminates timing issues and provides synchronous-like behavior while maintaining asynchronous benefits.`
      },
      {
        question: `Why should I learn ${title.toLowerCase()} patterns?`,
        answer: `Understanding proper ${title.toLowerCase()} patterns prevents common mistakes, improves test maintainability, and enables you to solve complex testing scenarios that arise in real applications.`
      },
      {
        question: `Why is this ${level}-level knowledge?`,
        answer: `At the ${level} level, ${title.toLowerCase()} requires understanding both the technical implementation and the strategic decisions about when and how to apply these concepts in production test suites.`
      },
      {
        question: `Why prioritize ${title.split(' ')[0]} over alternative approaches?`,
        answer: `${title.split(' ')[0]} provides the best balance of reliability, maintainability, and developer experience in Cypress. It aligns with modern testing best practices and team collaboration.`
      }
    ],
    
    cypressImplementation: [
      {
        title: `Basic ${title} Example`,
        starContext: {
          situation: "A junior QA engineer needs to write their first Cypress test for a form submission feature. The form has multiple fields and validation.",
          task: "Create a reliable test that validates form submission works correctly with Cypress's command chaining.",
          action: "Use cy.get() with data-cy attributes, chain assertions with should(), and validate the success state.",
          result: "A clean, readable test that runs in 2 seconds and demonstrates Cypress fundamentals."
        },
        code: `// cypress/e2e/${lessonId}.cy.js

/**
 * STAR Context:
 * Situation: Testing form submission on web application
 * Task: Validate form fills and submits correctly
 * Action: Use Cypress commands with proper chaining
 * Result: Reliable test demonstrating best practices
 */
describe('${title}', () => {
  beforeEach(() => {
    // ARRANGE: Navigate to the page before each test
    cy.visit('https://example.cypress.io')
  })

  it('demonstrates ${title.toLowerCase()}', () => {
    // ACT: Interact with elements using Cypress commands
    cy.get('[data-cy="element"]')
      .should('be.visible')  // Auto-retry until visible
      .click()
    
    // ASSERT: Verify expected behavior
    cy.get('[data-cy="result"]')
      .should('contain', 'Success')
  })
})`,
        explanation: `**Why this code matters (STAR Analysis):**

**Situation**: Every test automation project starts with basic element interactions. Getting these fundamentals right prevents hours of debugging later.

**Task**: The code demonstrates Cypress's chainable command structure, which is fundamentally different from Selenium's approach.

**Action**: 
- \`cy.get('[data-cy="element"]')\` - Uses data-cy attribute (Cypress best practice)
- \`.should('be.visible')\` - Auto-retries for up to 4 seconds
- Command chaining ensures proper execution order

**Result**: Tests are readable like English, self-document their intent, and leverage Cypress's automatic retry mechanism.`
      },
      {
        title: `Intermediate ${title} Pattern`,
        starContext: {
          situation: "A mid-level engineer faces flaky tests due to backend API inconsistencies. Real API responses vary, causing random failures.",
          task: "Implement network stubbing to control API responses and make tests deterministic.",
          action: "Use cy.intercept() for network mocking, wait for aliased requests, and validate UI updates.",
          result: "Tests that run 5x faster, work offline, and have 100% reliability."
        },
        code: `// cypress/e2e/${lessonId}-intermediate.cy.js

/**
 * STAR Context:
 * Situation: Flaky tests due to API inconsistencies
 * Task: Control network layer for deterministic testing
 * Action: Intercept APIs, wait for requests, validate UI
 * Result: Fast, reliable, offline-capable tests
 */
describe('${title} - Intermediate', () => {
  it('uses advanced ${title.split(' ')[0]} techniques', () => {
    // ARRANGE: Setup network interception BEFORE actions
    cy.intercept('GET', '/api/data', {
      statusCode: 200,
      body: {
        items: [
          { id: 1, name: 'Item 1', status: 'active' },
          { id: 2, name: 'Item 2', status: 'pending' },
          { id: 3, name: 'Item 3', status: 'active' }
        ]
      }
    }).as('getData')  // Alias for waiting
    
    cy.visit('/page')
    
    // Wait for the API call to complete
    cy.wait('@getData')
    
    // ACT & ASSERT: Validate list rendering
    cy.get('[data-cy="list"]')
      .find('li')
      .should('have.length.greaterThan', 0)
      .each(($el, index) => {
        // Wrap jQuery element for Cypress commands
        cy.wrap($el)
          .should('be.visible')
          .and('have.attr', 'data-id')
          .and('contain', \`Item \${index + 1}\`)
      })
  })
})`,
        explanation: `**Why this code matters (STAR Analysis):**

**Situation**: Network dependencies are the #1 cause of flaky E2E tests. Backend issues shouldn't fail your frontend tests.

**Task**: The code shows complete network control using cy.intercept() - Cypress's powerful network layer.

**Action**:
- \`cy.intercept('GET', '/api/data', {...})\` - Stub the response
- \`.as('getData')\` - Create an alias for synchronization
- \`cy.wait('@getData')\` - Ensure response is received before assertions
- \`cy.wrap($el)\` - Convert jQuery to Cypress chainable

**Result**: 
- Tests run in 500ms instead of 3+ seconds
- Zero failures from backend issues
- Predictable test data every run`
      },
      {
        title: `Production-Ready ${title} Implementation`,
        starContext: {
          situation: "An enterprise with 30 developers needs consistent testing patterns. Tests are duplicated across 500 spec files.",
          task: "Create custom commands that encapsulate common operations and enforce best practices.",
          action: "Build custom commands with TypeScript support, add retry logic, and create a command library.",
          result: "75% reduction in test code, consistent patterns, and faster onboarding for new developers."
        },
        code: `// cypress/support/commands.js

/**
 * STAR Context:
 * Situation: Enterprise team with code duplication
 * Task: Create reusable, typed custom commands
 * Action: Implement custom command with retry logic
 * Result: Consistent patterns, faster test creation
 */

/**
 * Custom command for ${title.toLowerCase()}
 * @param {Object} options - Configuration options
 * @param {number} options.timeout - Max wait time in ms
 * @param {number} options.retries - Number of retry attempts
 */
Cypress.Commands.add('${lessonId.replace(/-/g, '')}', (options = {}) => {
  const defaults = {
    timeout: 10000,
    retries: 3,
    waitForAnimation: true
  }
  
  const config = { ...defaults, ...options }
  
  // Log for debugging in Cypress GUI
  Cypress.log({
    name: '${lessonId.replace(/-/g, '')}',
    message: \`Performing ${title.toLowerCase()}\`,
    consoleProps: () => ({ config })
  })
  
  // Reusable custom command with built-in best practices
  return cy.get('[data-cy="target"]', { timeout: config.timeout })
    .should('be.visible')
    .then(($element) => {
      // Production logic with proper waiting
      if (config.waitForAnimation) {
        cy.wait(100) // Wait for CSS animations
      }
      return cy.wrap($element)
    })
})

// TypeScript Declaration (cypress/support/index.d.ts)
declare namespace Cypress {
  interface Chainable {
    ${lessonId.replace(/-/g, '')}(options?: {
      timeout?: number;
      retries?: number;
      waitForAnimation?: boolean;
    }): Chainable<JQuery<HTMLElement>>;
  }
}

// Usage in tests
describe('Using Custom Command', () => {
  it('applies ${title.toLowerCase()} pattern', () => {
    cy.visit('/page')
    
    // Clean, readable test using custom command
    cy.${lessonId.replace(/-/g, '')}({ timeout: 5000 })
      .click()
    
    cy.get('[data-cy="success"]')
      .should('exist')
      .and('be.visible')
  })
})`,
        explanation: `**Why this code matters (STAR Analysis):**

**Situation**: Large codebases suffer from duplicated test logic. Every developer reimplements the same patterns.

**Task**: Custom commands create a single source of truth. The \`Cypress.Commands.add()\` API makes this straightforward.

**Action**:
- **Cypress.log()**: Adds visibility in Test Runner GUI
- **TypeScript declarations**: Enable autocomplete and type safety
- **Configuration object**: Flexible, overridable defaults
- **Return cy.wrap()**: Enable continued chaining

**Result**:
- 75% less code in spec files
- Consistent behavior across all tests
- New developers productive in hours, not days
- Changes propagate instantly across all uses`
      }
    ],
    
    benefits: [
      `Reduces test flakiness through proper ${title.split(' ')[0]} implementation`,
      `Improves test maintainability with clear ${title.toLowerCase()} patterns`,
      `Enables faster test execution using Cypress-optimized approaches`,
      `Provides better debugging with time-travel and command log visibility`,
      `Scales efficiently across large test suites and team collaboration`,
      `Aligns with industry best practices for ${level}-level automation`
    ],
    
    commonMistakes: [
      {
        mistake: `Using ${title.split(' ')[0]} without understanding Cypress's async nature`,
        solution: `Remember that Cypress commands are enqueued. Use .then() to work with values or create custom commands for complex operations.`
      },
      {
        mistake: `Over-complicating ${title.toLowerCase()} implementation`,
        solution: `Keep it simple. Use Cypress's built-in commands and automatic waiting instead of building complex custom solutions.`
      },
      {
        mistake: `Not considering ${title.split(' ')[0]} in test design`,
        solution: `Plan ${title.toLowerCase()} strategies before writing tests. Consider how it affects test isolation, speed, and maintainability.`
      },
      {
        mistake: `Ignoring ${level}-level best practices`,
        solution: `At the ${level} level, follow established patterns for ${title.toLowerCase()}. Review Cypress documentation and community examples.`
      },
      {
        mistake: `Mixing synchronous expectations with Cypress commands`,
        solution: `All assertions should use Cypress's should() or expect() within .then(). Don't try to access command results synchronously.`
      }
    ],
    
    exercises: [
      {
        title: `Exercise 1: Basic ${title} Implementation`,
        task: `Create a test that demonstrates ${title.toLowerCase()} in a simple scenario. Apply STAR method in comments to document your reasoning.`,
        solution: `/**
 * STAR Method for Exercise 1:
 * Situation: Learning ${title.toLowerCase()} fundamentals
 * Task: Create first working test with Cypress
 * Action: Use cy.get, cy.should, and command chaining
 * Result: Reliable test ready for team review
 */
describe('${title} Exercise 1', () => {
  it('implements basic ${title.toLowerCase()}', () => {
    // SITUATION: Testing element visibility and interaction
    cy.visit('https://example.cypress.io')
    
    // TASK & ACTION: Validate and interact
    cy.get('[data-cy="element"]')
      .should('be.visible')
      .click()
    
    // RESULT: Verify success state
    cy.get('[data-cy="result"]')
      .should('contain', 'Expected Text')
  })
})`
      },
      {
        title: `Exercise 2: Intermediate ${title} Challenge`,
        task: `Build a more complex test using ${title.toLowerCase()} with network interception and custom commands. Document STAR context for each section.`,
        solution: `/**
 * STAR Method for Exercise 2:
 * Situation: Need reusable command for ${title.toLowerCase()}
 * Task: Create custom command with network control
 * Action: Implement command + intercept pattern
 * Result: Reusable, fast, deterministic test
 */
 
// Custom Command
Cypress.Commands.add('verify${title.replace(/\s+/g, '')}', () => {
  cy.intercept('GET', '/api/*').as('apiCall')
  cy.wait('@apiCall')
  cy.get('[data-cy="status"]').should('have.class', 'success')
})

describe('${title} Exercise 2', () => {
  it('uses advanced patterns', () => {
    cy.visit('/page')
    cy.verify${title.replace(/\s+/g, '')}()
  })
})`
      },
      {
        title: `Exercise 3: Real-World ${title} Scenario`,
        task: `Create a production-ready test suite that applies ${title.toLowerCase()} to solve a realistic testing problem. Include full STAR documentation.`,
        solution: `/**
 * STAR Analysis for Production Implementation:
 * 
 * Situation: E-commerce company with 200+ products needs reliable
 * checkout testing. Current tests fail 20% of the time due to
 * inventory API inconsistencies.
 * 
 * Task: Create deterministic checkout tests with <1% flake rate.
 * 
 * Action: Implement network stubbing, custom commands for cart
 * operations, and proper waiting strategies.
 * 
 * Result: 0.5% flake rate, 3-second test execution, full coverage
 * of checkout edge cases.
 */
describe('${title} - Production Suite', () => {
  beforeEach(() => {
    // Stub all API endpoints for isolation
    cy.intercept('GET', '/api/config', { fixture: 'config.json' })
    cy.intercept('GET', '/api/products', { fixture: 'products.json' })
    cy.intercept('POST', '/api/cart', { statusCode: 201, body: { id: 'cart-123' } })
    
    cy.visit('/dashboard')
  })

  it('handles ${title.toLowerCase()} in complex flows', () => {
    // Navigate using data-cy selectors
    cy.get('[data-cy="nav"]').click()
    
    // Use within() for scoped queries
    cy.get('[data-cy="form"]').within(() => {
      cy.get('input[name="field"]').type('test value')
      cy.get('button[type="submit"]').click()
    })
    
    // Verify success notification
    cy.get('[data-cy="notification"]')
      .should('be.visible')
      .and('contain', 'Success')
      .and('have.class', 'success')
  })
})`
      }
    ],
    
    resources: [
      `Cypress Official Documentation: ${title}`,
      `Best Practices for ${title.split(' ')[0]} in Cypress`,
      `Common Patterns: ${title} Implementation Guide`,
      `${level.charAt(0).toUpperCase() + level.slice(1)}-Level Cypress Testing Strategies`,
      `Community Examples: ${title} in Production`
    ]
  };
};
