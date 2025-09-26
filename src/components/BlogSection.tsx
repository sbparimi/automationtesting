import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Shield, Target } from "lucide-react";

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
                      <Badge variant="outline" className="mt-1 text-xs border-primary text-primary">
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