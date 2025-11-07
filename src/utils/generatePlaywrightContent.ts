// Utility to generate comprehensive Playwright lesson content for all 162 lessons

export interface LessonContent {
  title: string;
  objectives: string[];
  concept: string;
  whys: { question: string; answer: string }[];
  playwrightImplementation: { title: string; code: string; explanation: string }[];
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
    concept: `**${title}**

This lesson explores ${title.toLowerCase()}, a crucial concept in Playwright test automation. Mastering this topic enables you to build enterprise-grade, reliable, and efficient test frameworks.

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
        code: `// tests/${lessonId}.spec.ts
import { test, expect } from '@playwright/test';

test.describe('${title}', () => {
  test('demonstrates ${title.toLowerCase()}', async ({ page }) => {
    await page.goto('https://playwright.dev');
    
    // Example implementation
    const element = page.locator('[data-testid="element"]');
    await expect(element).toBeVisible();
    await element.click();
    
    // Verify expected behavior
    const result = page.locator('[data-testid="result"]');
    await expect(result).toHaveText('Success');
  });
});`,
        explanation: `This basic example demonstrates the fundamental pattern for ${title.toLowerCase()}. Note how Playwright's auto-waiting eliminates timing issues.`
      },
      {
        title: `Intermediate ${title} Pattern`,
        code: `// tests/${lessonId}-intermediate.spec.ts
import { test, expect } from '@playwright/test';

test.describe('${title} - Intermediate', () => {
  test('uses advanced ${title.split(' ')[0]} techniques', async ({ page }) => {
    // Setup API interception
    await page.route('**/api/data', route => route.fulfill({
      status: 200,
      body: JSON.stringify({ items: [1, 2, 3] })
    }));
    
    await page.goto('/page');
    
    // Advanced implementation with iteration
    const listItems = page.locator('[data-testid="list"] li');
    await expect(listItems).toHaveCount(3);
    
    const count = await listItems.count();
    for (let i = 0; i < count; i++) {
      const item = listItems.nth(i);
      await expect(item).toBeVisible();
      await expect(item).toHaveAttribute('data-id');
    }
  });
});`,
        explanation: `This intermediate pattern showcases sophisticated ${title.toLowerCase()} usage, including route interception and locator iteration with proper async/await.`
      },
      {
        title: `Production-Ready ${title} Implementation`,
        code: `// lib/helpers/${lessonId}.ts
import { Page, Locator, expect } from '@playwright/test';

export class ${title.replace(/\s+/g, '')}Helper {
  constructor(private page: Page) {}
  
  async perform${title.replace(/\s+/g, '')}(options = {}) {
    const defaults = {
      timeout: 10000,
      retries: 3
    };
    
    const config = { ...defaults, ...options };
    
    const element = this.page.locator('[data-testid="target"]');
    await expect(element).toBeVisible({ timeout: config.timeout });
    
    return element;
  }
}

// tests/using-helper.spec.ts
import { test } from '@playwright/test';
import { ${title.replace(/\s+/g, '')}Helper } from '../lib/helpers/${lessonId}';

test('applies ${title.toLowerCase()} pattern', async ({ page }) => {
  const helper = new ${title.replace(/\s+/g, '')}Helper(page);
  await page.goto('/page');
  
  const element = await helper.perform${title.replace(/\s+/g, '')}();
  // Use element for further actions
});`,
        explanation: `This production implementation creates a reusable helper class for ${title.toLowerCase()}, promoting code reuse and maintainability across test suites.`
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
        task: `Create a test that demonstrates ${title.toLowerCase()} using Playwright's core features. Include proper assertions and error handling.`,
        solution: `import { test, expect } from '@playwright/test';

test('${title} basic exercise', async ({ page }) => {
  await page.goto('https://playwright.dev');
  
  const element = page.locator('[data-testid="element"]');
  await expect(element).toBeVisible();
  await element.click();
  
  const result = page.locator('[data-testid="result"]');
  await expect(result).toContainText('Expected');
});`
      },
      {
        title: `Exercise 2: Intermediate ${title} Challenge`,
        task: `Build a complex test using ${title.toLowerCase()} with fixtures, route interception, and page object pattern.`,
        solution: `// page-objects/${lessonId}.page.ts
import { Page } from '@playwright/test';

export class ${title.replace(/\s+/g, '')}Page {
  constructor(private page: Page) {}
  
  async navigate() {
    await this.page.goto('/page');
  }
  
  async perform${title.replace(/\s+/g, '')}() {
    await this.page.locator('[data-testid="action"]').click();
  }
}

// tests/exercise.spec.ts
import { test, expect } from '@playwright/test';
import { ${title.replace(/\s+/g, '')}Page } from '../page-objects/${lessonId}.page';

test('${title} intermediate', async ({ page }) => {
  await page.route('**/api/**', route => route.fulfill({ 
    status: 200, 
    body: '{"status": "ok"}' 
  }));
  
  const pageObj = new ${title.replace(/\s+/g, '')}Page(page);
  await pageObj.navigate();
  await pageObj.perform${title.replace(/\s+/g, '')}();
  
  await expect(page.locator('[data-testid="status"]')).toHaveClass(/success/);
});`
      },
      {
        title: `Exercise 3: Real-World ${title} Scenario`,
        task: `Design an enterprise-ready test suite applying ${title.toLowerCase()} to solve production testing challenges.`,
        solution: `// fixtures/${lessonId}.fixture.ts
import { test as base } from '@playwright/test';
import { ${title.replace(/\s+/g, '')}Helper } from '../lib/helpers/${lessonId}';

export const test = base.extend({
  ${lessonId.replace(/-/g, '')}Helper: async ({ page }, use) => {
    await use(new ${title.replace(/\s+/g, '')}Helper(page));
  }
});

// tests/production.spec.ts
import { test } from '../fixtures/${lessonId}.fixture';
import { expect } from '@playwright/test';

test.describe('${title} Production Suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/api/config', route => 
      route.fulfill({ body: JSON.stringify({ mode: 'test' }) })
    );
  });

  test('handles ${title.toLowerCase()} in complex workflow', async ({ 
    page, 
    ${lessonId.replace(/-/g, '')}Helper 
  }) => {
    await page.goto('/dashboard');
    await ${lessonId.replace(/-/g, '')}Helper.perform${title.replace(/\s+/g, '')}();
    
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
