import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Shield, Target, Database, Monitor, Globe, Clock, Settings, FileText, GitBranch, TestTube, Bot, Eye, Network, AlertTriangle, Layers, CheckCircle, TrendingUp, Lock } from "lucide-react";

const tips = [
  {
    icon: Code,
    title: "Advanced Page Object Pattern",
    category: "Architecture",
    snippet: `// Enhanced Page Object with TypeScript generics
export class BasePage<T = any> {
  constructor(protected page: Page) {}
  
  async waitForElement<K extends keyof T>(
    selector: K, 
    options?: WaitForSelectorOptions
  ): Promise<Locator> {
    return this.page.waitForSelector(
      selector as string, 
      options
    );
  }
}`,
    description: "Type-safe page objects with generic constraints for better IDE support and runtime safety."
  },
  {
    icon: Zap,
    title: "Parallel Test Optimization",
    category: "Performance",
    snippet: `// Dynamic worker allocation based on test complexity
export const config: PlaywrightTestConfig = {
  workers: process.env.CI 
    ? Math.min(4, os.cpus().length) 
    : Math.max(1, Math.floor(os.cpus().length / 2)),
  
  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  }
};`,
    description: "Intelligent worker allocation and resource management for optimal test execution speed."
  },
  {
    icon: Shield,
    title: "Robust Element Handling",
    category: "Stability",
    snippet: `// Retry mechanism with exponential backoff
async function waitForStableElement(
  page: Page, 
  selector: string,
  retries = 3
): Promise<Locator> {
  for (let i = 0; i < retries; i++) {
    try {
      const element = page.locator(selector);
      await element.waitFor({ state: 'stable' });
      return element;
    } catch (error) {
      if (i === retries - 1) throw error;
      await page.waitForTimeout(Math.pow(2, i) * 1000);
    }
  }
}`,
    description: "Bulletproof element interaction with intelligent retry logic and stability checks."
  },
  {
    icon: Target,
    title: "Smart Test Data Management",
    category: "Data",
    snippet: `// Type-safe test data factory
interface TestUser {
  email: string;
  password: string;
  role: 'admin' | 'user';
}

export class TestDataFactory {
  static createUser(overrides?: Partial<TestUser>): TestUser {
    return {
      email: faker.internet.email(),
      password: 'Test123!',
      role: 'user',
      ...overrides
    };
  }
}`,
    description: "Dynamic test data generation with TypeScript interfaces for consistent, maintainable test data."
  },
  {
    icon: Database,
    title: "API Test Integration",
    category: "Integration",
    snippet: `// Seamless API + UI testing
class APIHelper {
  static async createUser(request: APIRequestContext) {
    const response = await request.post('/api/users', {
      data: { name: 'Test User', email: 'test@example.com' }
    });
    return response.json();
  }
  
  static async setupTestData(page: Page, userData: any) {
    await page.route('**/api/user/**', route => {
      route.fulfill({ json: userData });
    });
  }
}`,
    description: "Combined API and UI testing for comprehensive end-to-end validation with mocked responses."
  },
  {
    icon: Monitor,
    title: "Visual Regression Testing",
    category: "Visual",
    snippet: `// Automated visual comparisons
test('homepage visual regression', async ({ page }) => {
  await page.goto('/');
  
  // Full page screenshot
  await expect(page).toHaveScreenshot('homepage.png');
  
  // Element-specific screenshot
  await expect(page.locator('.hero-section'))
    .toHaveScreenshot('hero.png', {
      threshold: 0.2,
      animations: 'disabled'
    });
});`,
    description: "Pixel-perfect visual regression detection with customizable thresholds and animation handling."
  },
  {
    icon: Globe,
    title: "Cross-Browser Testing",
    category: "Compatibility",
    snippet: `// Multi-browser configuration
export default defineConfig({
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'mobile', use: { ...devices['iPhone 12'] } }
  ],
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  }
});`,
    description: "Enterprise-grade cross-browser testing setup with device emulation and environment management."
  },
  {
    icon: Clock,
    title: "Smart Wait Strategies",
    category: "Reliability",
    snippet: `// Intelligent wait conditions
async function waitForDataLoad(page: Page, selector: string) {
  await page.waitForFunction(
    sel => {
      const element = document.querySelector(sel);
      return element && element.textContent !== 'Loading...';
    },
    selector,
    { timeout: 10000 }
  );
}

// Network idle wait
await page.waitForLoadState('networkidle');`,
    description: "Advanced waiting strategies for dynamic content and network-dependent operations."
  },
  {
    icon: Settings,
    title: "Custom Fixture Pattern",
    category: "Setup",
    snippet: `// Reusable test fixtures
export const test = base.extend<{
  authenticatedPage: Page;
  testData: TestDataInterface;
}>({
  authenticatedPage: async ({ page }, use) => {
    await page.goto('/login');
    await page.fill('[data-testid="email"]', 'admin@test.com');
    await page.fill('[data-testid="password"]', 'password');
    await page.click('[data-testid="login-btn"]');
    await use(page);
  }
});`,
    description: "Custom fixture pattern for reusable test setup and teardown with type safety."
  },
  {
    icon: FileText,
    title: "Enhanced Test Reporting",
    category: "Reporting",
    snippet: `// Custom test metadata and reporting
test('user registration', async ({ page }, testInfo) => {
  testInfo.annotations.push({ type: 'feature', description: 'User Management' });
  testInfo.annotations.push({ type: 'severity', description: 'critical' });
  
  await test.step('Navigate to registration', async () => {
    await page.goto('/register');
  });
  
  await test.step('Fill registration form', async () => {
    await page.fill('#email', 'user@test.com');
    await page.fill('#password', 'SecurePass123!');
  });
});`,
    description: "Rich test reporting with custom metadata, annotations, and detailed step tracking."
  },
  {
    icon: GitBranch,
    title: "CI/CD Integration",
    category: "DevOps",
    snippet: `# GitHub Actions workflow
name: E2E Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        browser: [chromium, firefox, webkit]
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npx playwright install \${{ matrix.browser }}
      - run: npm run test:e2e -- --project=\${{ matrix.browser }}`,
    description: "Complete CI/CD pipeline setup with matrix builds and automated browser installation."
  },
  {
    icon: TestTube,
    title: "Mock Service Worker",
    category: "Mocking",
    snippet: `// Advanced API mocking
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: 'John Doe', email: 'john@example.com' }
      ])
    );
  })
];

// In test
await page.route('**/api/**', route => {
  // Custom routing logic
});`,
    description: "Sophisticated API mocking with MSW integration for isolated testing environments."
  },
  {
    icon: Bot,
    title: "AI-Powered Locators",
    category: "AI",
    snippet: `// Intelligent element detection
class SmartLocator {
  static async findByText(page: Page, text: string, options?: {
    role?: string;
    exact?: boolean;
  }) {
    // Try multiple strategies
    const strategies = [
      () => page.getByRole(options?.role || 'button', { name: text }),
      () => page.getByText(text, { exact: options?.exact }),
      () => page.locator(\`[aria-label="\${text}"]\`),
      () => page.locator(\`[title="\${text}"]\`)
    ];
    
    for (const strategy of strategies) {
      try {
        const element = strategy();
        await element.waitFor({ timeout: 1000 });
        return element;
      } catch {}
    }
    throw new Error(\`Element with text "\${text}" not found\`);
  }
}`,
    description: "AI-enhanced element detection with fallback strategies and intelligent locator selection."
  },
  {
    icon: Eye,
    title: "Accessibility Testing",
    category: "A11y",
    snippet: `// Automated accessibility checks
import { injectAxe, checkA11y } from 'axe-playwright';

test('accessibility compliance', async ({ page }) => {
  await page.goto('/');
  await injectAxe(page);
  
  await checkA11y(page, null, {
    detailedReport: true,
    detailedReportOptions: { html: true }
  }, (violations) => {
    console.log(\`Found \${violations.length} accessibility violations\`);
  });
});`,
    description: "Comprehensive accessibility testing with axe-core integration and detailed violation reporting."
  },
  {
    icon: Network,
    title: "Network Monitoring",
    category: "Performance",
    snippet: `// Performance and network monitoring
test('performance metrics', async ({ page }) => {
  const responses = [];
  
  page.on('response', response => {
    responses.push({
      url: response.url(),
      status: response.status(),
      timing: response.timing()
    });
  });
  
  await page.goto('/dashboard');
  
  // Analyze network performance
  const slowRequests = responses.filter(r => 
    r.timing && (r.timing.responseEnd - r.timing.requestStart) > 1000
  );
  
  expect(slowRequests).toHaveLength(0);
});`,
    description: "Real-time network monitoring and performance analysis with custom metrics and thresholds."
  },
  {
    icon: AlertTriangle,
    title: "Error Boundary Testing",
    category: "Error Handling",
    snippet: `// Comprehensive error handling
test('error boundary behavior', async ({ page }) => {
  // Listen for console errors
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });
  
  // Trigger error condition
  await page.route('**/api/critical-data', route => {
    route.abort('failed');
  });
  
  await page.goto('/dashboard');
  
  // Verify error boundary displays
  await expect(page.getByText('Something went wrong')).toBeVisible();
  expect(errors).toHaveLength(0); // No console errors
});`,
    description: "Robust error boundary testing with console monitoring and graceful failure validation."
  },
  {
    icon: Layers,
    title: "Component Testing",
    category: "Components",
    snippet: `// Isolated component testing
import { test, expect } from '@playwright/experimental-ct-react';
import { UserCard } from './UserCard';

test('user card interactions', async ({ mount }) => {
  const component = await mount(
    <UserCard 
      user={{ id: 1, name: 'John Doe', role: 'admin' }}
      onEdit={() => {}}
      onDelete={() => {}}
    />
  );
  
  await expect(component.getByText('John Doe')).toBeVisible();
  await component.getByRole('button', { name: 'Edit' }).click();
  
  // Verify edit callback
  await expect(component).toHaveAttribute('data-editing', 'true');
});`,
    description: "Isolated React component testing with Playwright's component test runner and event validation."
  },
  {
    icon: CheckCircle,
    title: "Health Check Automation",
    category: "Monitoring",
    snippet: `// Automated health checks
class HealthChecker {
  static async validateApplication(page: Page) {
    const checks = [
      () => this.checkPageLoad(page),
      () => this.checkAPIEndpoints(page),
      () => this.checkCriticalElements(page),
      () => this.checkPerformanceMetrics(page)
    ];
    
    const results = await Promise.allSettled(checks.map(check => check()));
    
    return results.map((result, index) => ({
      check: checks[index].name,
      status: result.status,
      error: result.status === 'rejected' ? result.reason : null
    }));
  }
}`,
    description: "Automated application health monitoring with comprehensive check suites and reporting."
  },
  {
    icon: TrendingUp,
    title: "Performance Budgets",
    category: "Performance",
    snippet: `// Performance budget enforcement
test('performance budgets', async ({ page }) => {
  const startTime = Date.now();
  
  await page.goto('/');
  
  // Measure Core Web Vitals
  const metrics = await page.evaluate(() => {
    return new Promise(resolve => {
      new PerformanceObserver(list => {
        const entries = list.getEntries();
        resolve({
          FCP: entries.find(e => e.name === 'first-contentful-paint')?.startTime,
          LCP: entries.find(e => e.entryType === 'largest-contentful-paint')?.startTime
        });
      }).observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
    });
  });
  
  expect(metrics.FCP).toBeLessThan(1500); // 1.5s budget
  expect(metrics.LCP).toBeLessThan(2500); // 2.5s budget
});`,
    description: "Performance budget enforcement with Core Web Vitals monitoring and automated threshold validation."
  },
  {
    icon: Lock,
    title: "Security Testing",
    category: "Security",
    snippet: `// Automated security checks
test('security vulnerabilities', async ({ page }) => {
  // Check for XSS vulnerabilities
  await page.goto('/search?q=<script>alert("xss")</script>');
  
  const alertDialogs = [];
  page.on('dialog', dialog => {
    alertDialogs.push(dialog.message());
    dialog.dismiss();
  });
  
  await page.waitForTimeout(1000);
  expect(alertDialogs).toHaveLength(0);
  
  // Check for sensitive data exposure
  const response = await page.request.get('/api/user/profile');
  const body = await response.json();
  
  expect(body).not.toHaveProperty('password');
  expect(body).not.toHaveProperty('ssn');
});`,
    description: "Comprehensive security testing including XSS prevention and sensitive data exposure validation."
  }
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Playwright Tips & Advanced Techniques
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Production-proven TypeScript patterns and optimization techniques for enterprise-grade automation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <Card key={index} className="hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <tip.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-foreground">{tip.title}</CardTitle>
                      <Badge className="mt-1 text-xs bg-gradient-button text-foreground border-0">
                        {tip.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {tip.description}
                </p>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-foreground">
                    <code>{tip.snippet}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};