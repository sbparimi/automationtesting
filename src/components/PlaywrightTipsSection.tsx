import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Shield, Target, Database, Monitor, Globe, Clock, Settings, FileText, GitBranch, TestTube, Bot, Eye, Network, AlertTriangle, Layers, CheckCircle, TrendingUp, Lock, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    icon: Bot,
    title: "AI-Powered Locators",
    category: "AI",
    snippet: `// Intelligent element detection
class SmartLocator {
  static async findByText(page: Page, text: string, options?: {
    role?: string;
    exact?: boolean;
  }) {
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
  }
];

export const PlaywrightTipsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedTips = isExpanded ? tips : tips.slice(0, 4);
  
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
            Pro Tips & Patterns
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Production-Ready Playwright Patterns
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Copy-paste these TypeScript patterns into your projects for enterprise-grade automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <AnimatePresence>
            {displayedTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full border border-border hover:border-primary/30 transition-all hover:shadow-md">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <tip.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-base font-semibold text-foreground">
                          {tip.title}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {tip.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-3">
                      {tip.description}
                    </p>
                    <pre className="bg-secondary/50 rounded-lg p-3 text-xs overflow-x-auto text-foreground/90">
                      <code>{tip.snippet}</code>
                    </pre>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {tips.length > 4 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-xl transition-all"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Show All {tips.length} Tips <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
