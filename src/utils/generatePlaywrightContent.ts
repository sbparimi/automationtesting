// Utility to generate comprehensive Playwright lesson content with STAR method

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
  playwrightImplementation: { title: string; code: string; explanation: string; starContext: { situation: string; task: string; action: string; result: string } }[];
  benefits: string[];
  commonMistakes: { mistake: string; solution: string }[];
  exercises: { title: string; task: string; solution: string }[];
  resources: string[];
}

export const generatePlaywrightLessonContent = (lessonId: string, title: string, level: string): LessonContent => {
  const lessonNumber = parseInt(lessonId.split('-').pop() || '0');
  
  return {
    title,
    objectives: [
      `Master ${title.toLowerCase()} concepts in Playwright`,
      `Understand practical applications of ${title.split(':')[0]}`,
      `Implement production-ready ${title.toLowerCase()} patterns`,
      `Avoid common pitfalls when using ${title.split(' ')[0]}`,
      `Build scalable and maintainable test solutions`
    ],
    
    // STAR Method Overview for the entire lesson
    starMethod: {
      situation: `In modern web applications, teams face challenges with ${title.toLowerCase()}. Complex SPAs, dynamic content, and cross-browser requirements make traditional testing approaches insufficient. Organizations need reliable, maintainable test automation that scales with their development velocity.`,
      task: `Your task is to implement ${title.toLowerCase()} using Playwright's powerful features. You need to create tests that are fast, reliable, and easy to maintain while handling real-world scenarios like authentication, API interactions, and visual validation.`,
      action: `Apply Playwright's built-in capabilities including auto-waiting, powerful locators, browser contexts, and network interception. Structure your tests using Page Object Model, leverage fixtures for reusability, and integrate with CI/CD pipelines for continuous testing.`,
      result: `Achieve 95%+ test reliability with zero flaky tests. Reduce test execution time by 60% compared to Selenium. Enable parallel execution across multiple browsers. Create a maintainable test suite that catches bugs before production.`
    },
    
    concept: `**${title}**

This lesson explores ${title.toLowerCase()}, a crucial concept in Playwright test automation. Mastering this topic enables you to build enterprise-grade, reliable, and efficient test frameworks.

**The STAR Framework Applied to ${title}:**

Understanding ${title.toLowerCase()} through the STAR method helps you contextualize WHY this matters and HOW to apply it effectively in real projects.

**Key Concepts:**

1. **Foundation**: ${title} represents a core pillar of modern Playwright testing. This approach allows teams to create tests that are robust, fast, and maintainable across multiple browsers.

2. **Real-world Application**: In production environments, ${title.toLowerCase()} addresses specific automation challenges in complex web applications, SPAs, and modern frameworks like React, Vue, and Angular.

3. **Best Practices**: Following Playwright-recommended patterns for ${title.toLowerCase()} ensures your tests remain stable, fast, and valuable as applications evolve.

**Why This Matters:**

Playwright's architecture provides unique advantages for ${title.toLowerCase()}. Features like auto-waiting, powerful locators, multi-browser support, and comprehensive debugging tools make implementing ${title.toLowerCase()} both straightforward and powerful.`,
    
    whys: [
      {
        question: `Why is ${title.split(' ')[0]} critical in Playwright?`,
        answer: `${title.split(' ')[0]} enables you to write more dependable tests with better browser control and reduced flakiness. It's essential for professional test automation that scales across teams and projects.`
      },
      {
        question: `Why does Playwright handle ${title.split(' ')[0]} differently than Cypress?`,
        answer: `Playwright runs out-of-process and controls browsers via DevTools Protocol, enabling true multi-browser support, network interception, and powerful features like browser contexts that ${title.split(' ')[0]} leverages.`
      },
      {
        question: `Why should I invest time learning ${title.toLowerCase()} patterns?`,
        answer: `Proper ${title.toLowerCase()} patterns prevent brittle tests, enhance code reusability, and enable you to handle complex scenarios like authentication, API testing, and visual regression efficiently.`
      },
      {
        question: `Why is this considered ${level}-level knowledge?`,
        answer: `At the ${level} level, ${title.toLowerCase()} requires understanding both technical implementation and strategic decision-making about architecture, performance optimization, and CI/CD integration.`
      },
      {
        question: `Why choose ${title.split(' ')[0]} over alternative approaches?`,
        answer: `${title.split(' ')[0]} provides optimal reliability, performance, and developer experience in Playwright. It follows modern testing principles and integrates seamlessly with CI/CD pipelines.`
      }
    ],
    
    playwrightImplementation: [
      {
        title: `Basic ${title} Example`,
        starContext: {
          situation: "A new QA engineer needs to implement their first ${title.toLowerCase()} test for an e-commerce checkout page. The page has dynamic content and requires waiting for API responses.",
          task: "Create a reliable test that validates the core functionality without flakiness, using Playwright's auto-waiting capabilities.",
          action: "Use Playwright's locators with data-testid attributes, leverage expect assertions with built-in retry logic, and structure the test with clear arrange-act-assert pattern.",
          result: "A stable test that runs in under 2 seconds, works across Chrome, Firefox, and Safari, and serves as a template for future tests."
        },
        code: `// tests/${lessonId}.spec.ts
import { test, expect } from '@playwright/test';

/**
 * STAR Context:
 * Situation: Testing checkout flow on e-commerce platform
 * Task: Validate product can be added and checkout initiated
 * Action: Use locators, auto-waiting, and assertions
 * Result: Reliable test for CI/CD pipeline
 */
test.describe('${title}', () => {
  test('demonstrates ${title.toLowerCase()}', async ({ page }) => {
    // ARRANGE: Navigate to the application
    await page.goto('https://playwright.dev');
    
    // ACT: Interact with the element
    const element = page.locator('[data-testid="element"]');
    await expect(element).toBeVisible();
    await element.click();
    
    // ASSERT: Verify expected behavior
    const result = page.locator('[data-testid="result"]');
    await expect(result).toHaveText('Success');
  });
});`,
        explanation: `**Why this code matters (STAR Analysis):**

**Situation**: You're building reliable tests for a web application that needs to run in CI/CD.

**Task**: The code demonstrates the fundamental pattern using data-testid locators which are stable and don't break when UI text changes.

**Action**: We use \`page.locator()\` for element selection and \`expect()\` with automatic retry for assertions. The \`toBeVisible()\` check ensures the element is ready before interaction.

**Result**: This pattern produces tests that are 95% less flaky than XPath-based selectors and run 3x faster than equivalent Selenium tests.`
      },
      {
        title: `Intermediate ${title} Pattern`,
        starContext: {
          situation: "A mid-level engineer needs to test a data-driven application that fetches information from APIs. Tests are currently flaky due to network timing issues.",
          task: "Implement network interception to control API responses and eliminate timing-based flakiness.",
          action: "Use page.route() for network mocking, implement proper waiting strategies, and iterate over dynamic elements.",
          result: "Tests that are 100% deterministic, run offline, and execute 10x faster than hitting real APIs."
        },
        code: `// tests/${lessonId}-intermediate.spec.ts
import { test, expect } from '@playwright/test';

/**
 * STAR Context:
 * Situation: Data-driven app with flaky API-dependent tests
 * Task: Eliminate network timing issues
 * Action: Mock APIs, control responses, validate UI updates
 * Result: Deterministic tests with controlled data
 */
test.describe('${title} - Intermediate', () => {
  test('uses advanced ${title.split(' ')[0]} techniques', async ({ page }) => {
    // ARRANGE: Setup API interception BEFORE navigation
    // This ensures we capture all network requests
    await page.route('**/api/data', route => route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ]})
    }));
    
    // ACT: Navigate and interact
    await page.goto('/page');
    
    // ASSERT: Validate list items with iteration
    const listItems = page.locator('[data-testid="list"] li');
    await expect(listItems).toHaveCount(3);
    
    // Iterate and validate each item
    const count = await listItems.count();
    for (let i = 0; i < count; i++) {
      const item = listItems.nth(i);
      await expect(item).toBeVisible();
      await expect(item).toHaveAttribute('data-id');
      await expect(item).toContainText(\`Item \${i + 1}\`);
    }
  });
});`,
        explanation: `**Why this code matters (STAR Analysis):**

**Situation**: API-dependent tests are notoriously flaky. Network latency, server state, and rate limits cause random failures.

**Task**: The code shows how to intercept network requests and provide controlled mock data, eliminating external dependencies.

**Action**: 
- \`page.route()\` intercepts matching requests
- \`route.fulfill()\` provides mock response
- Pattern \`**/api/data\` matches any URL ending with /api/data
- Iteration with \`nth(i)\` safely accesses individual items

**Result**: Tests run in 200ms instead of 2-3 seconds, work offline, and never fail due to backend issues.`
      },
      {
        title: `Production-Ready ${title} Implementation`,
        starContext: {
          situation: "An enterprise team needs to scale their test automation across 50+ developers. Current approach has duplication and inconsistent patterns.",
          task: "Create reusable helpers and fixtures that enforce best practices and reduce code duplication by 80%.",
          action: "Implement helper classes, custom fixtures, and establish clear patterns for the team to follow.",
          result: "A maintainable test framework where new tests take 5 minutes instead of 30 minutes to write."
        },
        code: `// lib/helpers/${lessonId}.ts
import { Page, Locator, expect } from '@playwright/test';

/**
 * STAR Context:
 * Situation: Enterprise team scaling automation
 * Task: Reduce duplication, enforce patterns
 * Action: Create reusable helper class
 * Result: 5-minute test creation, consistent quality
 */
export class ${title.replace(/\s+/g, '')}Helper {
  private readonly page: Page;
  private readonly defaultTimeout: number;
  
  constructor(page: Page, options = { timeout: 10000 }) {
    this.page = page;
    this.defaultTimeout = options.timeout;
  }
  
  /**
   * Performs the ${title.toLowerCase()} operation with built-in retry logic
   * @param options - Configuration options
   * @returns The target element for chaining
   */
  async perform${title.replace(/\s+/g, '')}(options: { 
    timeout?: number;
    waitForNetwork?: boolean;
  } = {}) {
    const config = {
      timeout: options.timeout ?? this.defaultTimeout,
      waitForNetwork: options.waitForNetwork ?? true
    };
    
    // Wait for network to be idle if configured
    if (config.waitForNetwork) {
      await this.page.waitForLoadState('networkidle');
    }
    
    const element = this.page.locator('[data-testid="target"]');
    await expect(element).toBeVisible({ timeout: config.timeout });
    
    return element;
  }
  
  /**
   * Validates the ${title.toLowerCase()} completed successfully
   */
  async verify${title.replace(/\s+/g, '')}Success() {
    const successIndicator = this.page.locator('[data-testid="success"]');
    await expect(successIndicator).toBeVisible();
    await expect(successIndicator).toHaveClass(/completed/);
  }
}

// tests/using-helper.spec.ts
import { test } from '@playwright/test';
import { ${title.replace(/\s+/g, '')}Helper } from '../lib/helpers/${lessonId}';

test.describe('${title} with Helper Pattern', () => {
  test('applies ${title.toLowerCase()} pattern with reusable code', async ({ page }) => {
    // ARRANGE: Initialize helper
    const helper = new ${title.replace(/\s+/g, '')}Helper(page);
    await page.goto('/page');
    
    // ACT: Use helper methods
    const element = await helper.perform${title.replace(/\s+/g, '')}({
      timeout: 5000
    });
    
    // ASSERT: Verify success
    await helper.verify${title.replace(/\s+/g, '')}Success();
  });
});`,
        explanation: `**Why this code matters (STAR Analysis):**

**Situation**: Large teams struggle with code duplication. 50 developers writing similar code creates maintenance nightmares.

**Task**: The helper class encapsulates ${title.toLowerCase()} logic in one place. Changes propagate everywhere automatically.

**Action**:
- **Constructor pattern**: Pass configuration at instantiation
- **TypeScript types**: Ensure correct usage at compile time
- **JSDoc comments**: Self-documenting code for team adoption
- **Chaining support**: Return elements for flexible test composition

**Result**: 
- 80% reduction in test code
- Single source of truth for patterns
- New team members productive in days, not weeks`
      }
    ],
    
    benefits: [
      `Eliminates test flakiness through robust ${title.split(' ')[0]} implementation`,
      `Enhances test maintainability with clean ${title.toLowerCase()} patterns`,
      `Accelerates test execution using Playwright's parallel capabilities`,
      `Provides comprehensive debugging with traces, videos, and screenshots`,
      `Scales seamlessly across multiple browsers and devices`,
      `Follows ${level}-level industry standards for enterprise automation`
    ],
    
    commonMistakes: [
      {
        mistake: `Using ${title.split(' ')[0]} without proper async/await`,
        solution: `Always await Playwright actions and assertions. Forgetting await leads to race conditions and unpredictable test behavior.`
      },
      {
        mistake: `Over-engineering ${title.toLowerCase()} solutions`,
        solution: `Leverage Playwright's built-in features like auto-waiting and smart locators instead of building complex custom logic.`
      },
      {
        mistake: `Ignoring ${title.split(' ')[0]} in Page Object Model design`,
        solution: `Incorporate ${title.toLowerCase()} into your POM from the start. Design page objects that encapsulate ${title.toLowerCase()} logic cleanly.`
      },
      {
        mistake: `Not following ${level}-level best practices`,
        solution: `Study Playwright documentation and community examples for ${title.toLowerCase()}. Adopt proven patterns used in production systems.`
      },
      {
        mistake: `Mixing test logic with ${title.split(' ')[0]} implementation`,
        solution: `Separate concerns: ${title.toLowerCase()} logic should be in helpers/page objects, while test files focus on scenario validation.`
      }
    ],
    
    exercises: [
      {
        title: `Exercise 1: Basic ${title} Implementation`,
        task: `Create a test that demonstrates ${title.toLowerCase()} using Playwright's core features. Apply the STAR method to document your approach in comments.`,
        solution: `import { test, expect } from '@playwright/test';

/**
 * STAR Method Documentation:
 * Situation: New team member learning ${title.toLowerCase()}
 * Task: Create first working test with proper patterns
 * Action: Use locators, assertions, and arrange-act-assert
 * Result: Reliable test ready for code review
 */
test('${title} basic exercise', async ({ page }) => {
  // SITUATION: Testing a login flow
  await page.goto('https://playwright.dev');
  
  // TASK: Validate element visibility and interaction
  const element = page.locator('[data-testid="element"]');
  await expect(element).toBeVisible();
  
  // ACTION: Perform the interaction
  await element.click();
  
  // RESULT: Verify expected outcome
  const result = page.locator('[data-testid="result"]');
  await expect(result).toContainText('Expected');
});`
      },
      {
        title: `Exercise 2: Intermediate ${title} Challenge`,
        task: `Build a complex test using ${title.toLowerCase()} with fixtures, route interception, and page object pattern. Use STAR to justify each implementation decision.`,
        solution: `// page-objects/${lessonId}.page.ts
import { Page, expect } from '@playwright/test';

/**
 * STAR: Encapsulating ${title.toLowerCase()} in a Page Object
 * Situation: Complex page with multiple interactions
 * Task: Create maintainable, reusable page abstraction
 * Action: Implement POM with TypeScript
 * Result: 80% code reuse across 20+ tests
 */
export class ${title.replace(/\s+/g, '')}Page {
  constructor(private page: Page) {}
  
  async navigate() {
    await this.page.goto('/page');
  }
  
  async perform${title.replace(/\s+/g, '')}() {
    await this.page.locator('[data-testid="action"]').click();
  }
  
  async verifySuccess() {
    await expect(this.page.locator('[data-testid="success"]')).toBeVisible();
  }
}

// tests/exercise.spec.ts
import { test, expect } from '@playwright/test';
import { ${title.replace(/\s+/g, '')}Page } from '../page-objects/${lessonId}.page';

test('${title} intermediate', async ({ page }) => {
  // STAR: Mock API for deterministic testing
  await page.route('**/api/**', route => route.fulfill({ 
    status: 200, 
    body: '{"status": "ok"}' 
  }));
  
  const pageObj = new ${title.replace(/\s+/g, '')}Page(page);
  await pageObj.navigate();
  await pageObj.perform${title.replace(/\s+/g, '')}();
  await pageObj.verifySuccess();
});`
      },
      {
        title: `Exercise 3: Real-World ${title} Scenario`,
        task: `Design an enterprise-ready test suite applying ${title.toLowerCase()} to solve production testing challenges. Document with full STAR analysis.`,
        solution: `// fixtures/${lessonId}.fixture.ts
import { test as base, expect } from '@playwright/test';
import { ${title.replace(/\s+/g, '')}Helper } from '../lib/helpers/${lessonId}';

/**
 * STAR Analysis for Enterprise Implementation:
 * 
 * Situation: Company with 100+ microservices needs unified E2E testing
 * approach. Current tests take 4 hours and have 30% flake rate.
 * 
 * Task: Reduce execution to 30 minutes with <1% flake rate.
 * 
 * Action: Implement custom fixtures, parallel execution, and helper
 * patterns that encapsulate common operations.
 * 
 * Result: 30-minute pipeline, 0.5% flake rate, 50% faster test creation.
 */
export const test = base.extend({
  helper: async ({ page }, use) => {
    await use(new ${title.replace(/\s+/g, '')}Helper(page));
  }
});

// tests/production.spec.ts
import { test } from '../fixtures/${lessonId}.fixture';

test.describe('${title} Production Suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/api/config', route => 
      route.fulfill({ body: JSON.stringify({ mode: 'test' }) })
    );
  });

  test('handles ${title.toLowerCase()} in complex workflow', async ({ page, helper }) => {
    await page.goto('/dashboard');
    await helper.perform${title.replace(/\s+/g, '')}();
    
    await expect(page.locator('[data-testid="notification"]'))
      .toHaveText('Operation completed successfully');
  });
});`
      }
    ],
    
    resources: [
      `Playwright Official Documentation: ${title}`,
      `Best Practices for ${title.split(' ')[0]} in Playwright`,
      `Production Patterns: ${title} Implementation Guide`,
      `${level.charAt(0).toUpperCase() + level.slice(1)}-Level Playwright Testing Strategies`,
      `Community Examples: ${title} in Enterprise Systems`
    ]
  };
};
