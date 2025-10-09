import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Terminal, FileCode, Settings } from "lucide-react";

export const InstallationGuide = () => {
  return (
    <div className="space-y-8">
      {/* Prerequisites */}
      <Card className="p-8 border-2 border-border hover:border-primary/40 transition-all duration-300">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Prerequisites</h3>
            <p className="text-muted-foreground">Before installing Playwright, ensure you have the following:</p>
          </div>
        </div>
        
        <div className="space-y-4 ml-16">
          <div className="p-4 bg-muted/50 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              Node.js (v18 or higher)
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              Playwright requires Node.js. Download from <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">nodejs.org</a>
            </p>
            <div className="bg-background p-3 rounded border border-border font-mono text-sm">
              <span className="text-muted-foreground"># Check Node.js version</span><br />
              <span className="text-foreground">node --version</span><br />
              <span className="text-success"># Should show v18.0.0 or higher</span>
            </div>
          </div>

          <div className="p-4 bg-muted/50 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              npm (comes with Node.js)
            </h4>
            <div className="bg-background p-3 rounded border border-border font-mono text-sm">
              <span className="text-muted-foreground"># Check npm version</span><br />
              <span className="text-foreground">npm --version</span><br />
              <span className="text-success"># Should show 8.0.0 or higher</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Step 1: Create Project */}
      <Card className="p-8 border-2 border-border hover:border-primary/40 transition-all duration-300">
        <div className="flex items-start gap-4 mb-6">
          <Badge className="text-2xl font-bold px-4 py-2 bg-gradient-primary text-primary-foreground">1</Badge>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Create Your Project</h3>
            <p className="text-muted-foreground">Set up a new project directory for your Playwright tests</p>
          </div>
        </div>
        
        <div className="space-y-4 ml-16">
          <div className="bg-background p-4 rounded border border-border font-mono text-sm space-y-2">
            <div><span className="text-muted-foreground"># Create project directory</span></div>
            <div><span className="text-foreground">mkdir my-playwright-project</span></div>
            <div><span className="text-foreground">cd my-playwright-project</span></div>
            <div className="pt-2"><span className="text-muted-foreground"># Initialize npm project</span></div>
            <div><span className="text-foreground">npm init -y</span></div>
          </div>
          <p className="text-sm text-muted-foreground">
            ✅ This creates a <code className="bg-muted px-2 py-1 rounded">package.json</code> file that will track your project dependencies
          </p>
        </div>
      </Card>

      {/* Step 2: Install Playwright */}
      <Card className="p-8 border-2 border-border hover:border-primary/40 transition-all duration-300">
        <div className="flex items-start gap-4 mb-6">
          <Badge className="text-2xl font-bold px-4 py-2 bg-gradient-primary text-primary-foreground">2</Badge>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Install Playwright</h3>
            <p className="text-muted-foreground">Install Playwright and its dependencies</p>
          </div>
        </div>
        
        <div className="space-y-4 ml-16">
          <div className="bg-background p-4 rounded border border-border font-mono text-sm space-y-2">
            <div><span className="text-muted-foreground"># Install Playwright (recommended method)</span></div>
            <div><span className="text-foreground">npm init playwright@latest</span></div>
          </div>
          
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">🎯 What happens during installation:</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                <span>Installs @playwright/test package</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                <span>Downloads browser binaries (Chromium, Firefox, WebKit)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                <span>Creates playwright.config.ts configuration file</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                <span>Adds example test files in tests/ directory</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                <span>Sets up GitHub Actions workflow (optional)</span>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-muted/50 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-2">Alternative: Manual Installation</h4>
            <div className="bg-background p-3 rounded border border-border font-mono text-sm space-y-1">
              <div><span className="text-foreground">npm install --save-dev @playwright/test</span></div>
              <div><span className="text-foreground">npx playwright install</span></div>
            </div>
          </div>
        </div>
      </Card>

      {/* Step 3: Configure Playwright */}
      <Card className="p-8 border-2 border-border hover:border-primary/40 transition-all duration-300">
        <div className="flex items-start gap-4 mb-6">
          <Badge className="text-2xl font-bold px-4 py-2 bg-gradient-primary text-primary-foreground">3</Badge>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Understanding playwright.config.ts</h3>
            <p className="text-muted-foreground">Configure your test runner with essential settings</p>
          </div>
        </div>
        
        <div className="space-y-6 ml-16">
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <FileCode className="w-5 h-5 text-primary" />
              Key Configuration Sections
            </h4>
            
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg border border-border">
                <h5 className="font-semibold text-foreground mb-2">1. Test Directory</h5>
                <div className="bg-background p-3 rounded border border-border font-mono text-sm mb-2">
                  <span className="text-secondary">testDir:</span> <span className="text-foreground">'./tests'</span>
                </div>
                <p className="text-sm text-muted-foreground">Specifies where your test files are located</p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg border border-border">
                <h5 className="font-semibold text-foreground mb-2">2. Timeout Settings</h5>
                <div className="bg-background p-3 rounded border border-border font-mono text-sm mb-2 space-y-1">
                  <div><span className="text-secondary">timeout:</span> <span className="text-foreground">30000</span> <span className="text-muted-foreground">// 30 seconds per test</span></div>
                  <div><span className="text-secondary">expect:</span> {'{'} <span className="text-secondary">timeout:</span> <span className="text-foreground">5000</span> {'}'} <span className="text-muted-foreground">// 5s for assertions</span></div>
                </div>
                <p className="text-sm text-muted-foreground">Controls how long tests wait before timing out</p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg border border-border">
                <h5 className="font-semibold text-foreground mb-2">3. Parallel Execution</h5>
                <div className="bg-background p-3 rounded border border-border font-mono text-sm mb-2 space-y-1">
                  <div><span className="text-secondary">fullyParallel:</span> <span className="text-foreground">true</span> <span className="text-muted-foreground">// Run tests in parallel</span></div>
                  <div><span className="text-secondary">workers:</span> <span className="text-foreground">process.env.CI ? 1 : undefined</span></div>
                </div>
                <p className="text-sm text-muted-foreground">Speed up execution by running tests concurrently</p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg border border-border">
                <h5 className="font-semibold text-foreground mb-2">4. Reporter Configuration</h5>
                <div className="bg-background p-3 rounded border border-border font-mono text-sm mb-2">
                  <span className="text-secondary">reporter:</span> <span className="text-foreground">[['html'], ['list']]</span>
                </div>
                <p className="text-sm text-muted-foreground">Choose how test results are displayed (HTML report, terminal list, etc.)</p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg border border-border">
                <h5 className="font-semibold text-foreground mb-2">5. Browser Configuration (Projects)</h5>
                <div className="bg-background p-3 rounded border border-border font-mono text-sm mb-2 space-y-1">
                  <div><span className="text-secondary">projects:</span> [</div>
                  <div className="ml-4">{'{'} <span className="text-secondary">name:</span> <span className="text-foreground">'chromium'</span>, <span className="text-secondary">use:</span> {'{'} ...<span className="text-foreground">devices</span>['Desktop Chrome'] {'}'} {'}'},</div>
                  <div className="ml-4">{'{'} <span className="text-secondary">name:</span> <span className="text-foreground">'firefox'</span> {'}'},</div>
                  <div className="ml-4">{'{'} <span className="text-secondary">name:</span> <span className="text-foreground">'webkit'</span> {'}'}</div>
                  <div>]</div>
                </div>
                <p className="text-sm text-muted-foreground">Define which browsers to test against</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Step 4: package.json Scripts */}
      <Card className="p-8 border-2 border-border hover:border-primary/40 transition-all duration-300">
        <div className="flex items-start gap-4 mb-6">
          <Badge className="text-2xl font-bold px-4 py-2 bg-gradient-primary text-primary-foreground">4</Badge>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Configure package.json Scripts</h3>
            <p className="text-muted-foreground">Add convenient npm scripts for running tests</p>
          </div>
        </div>
        
        <div className="space-y-4 ml-16">
          <div className="bg-background p-4 rounded border border-border font-mono text-sm space-y-1">
            <div><span className="text-foreground">"scripts"</span>: {'{'}</div>
            <div className="ml-4"><span className="text-secondary">"test"</span>: <span className="text-foreground">"playwright test"</span>,</div>
            <div className="ml-4"><span className="text-secondary">"test:headed"</span>: <span className="text-foreground">"playwright test --headed"</span>,</div>
            <div className="ml-4"><span className="text-secondary">"test:ui"</span>: <span className="text-foreground">"playwright test --ui"</span>,</div>
            <div className="ml-4"><span className="text-secondary">"test:debug"</span>: <span className="text-foreground">"playwright test --debug"</span>,</div>
            <div className="ml-4"><span className="text-secondary">"report"</span>: <span className="text-foreground">"playwright show-report"</span></div>
            <div>{'}'}</div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              { cmd: 'npm test', desc: 'Run all tests in headless mode' },
              { cmd: 'npm run test:headed', desc: 'Run tests with browser visible' },
              { cmd: 'npm run test:ui', desc: 'Open Playwright UI mode (recommended!)' },
              { cmd: 'npm run test:debug', desc: 'Debug tests step by step' },
              { cmd: 'npm run report', desc: 'View HTML test report' }
            ].map((item, index) => (
              <div key={index} className="p-3 bg-muted/30 rounded-lg border border-border">
                <code className="text-sm text-primary font-semibold">{item.cmd}</code>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Step 5: Playwright UI Mode */}
      <Card className="p-8 border-2 border-primary/40 bg-gradient-to-br from-card to-primary/5 transition-all duration-300">
        <div className="flex items-start gap-4 mb-6">
          <Badge className="text-2xl font-bold px-4 py-2 bg-gradient-primary text-primary-foreground">5</Badge>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Launch Playwright UI Mode</h3>
            <p className="text-muted-foreground">The most powerful way to write and debug tests</p>
          </div>
        </div>
        
        <div className="space-y-4 ml-16">
          <div className="bg-background p-4 rounded border border-border font-mono text-sm">
            <span className="text-foreground">npx playwright test --ui</span>
          </div>

          <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
            <h4 className="font-semibold text-foreground mb-3">✨ UI Mode Features:</h4>
            <ul className="space-y-2 text-sm">
              {[
                'Watch mode - automatically re-run tests on file changes',
                'Time travel debugging - step through each action',
                'DOM snapshots - see page state at each step',
                'Network activity - inspect all requests/responses',
                'Console logs - view all browser console output',
                'Pick locator - visually select elements',
                'Trace viewer - detailed execution timeline'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Next Steps */}
      <Card className="p-8 border-2 border-secondary/40 bg-gradient-to-br from-card to-secondary/5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow-accent flex-shrink-0">
            <Settings className="w-6 h-6 text-secondary-foreground" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-3">🎉 You're Ready!</h3>
            <p className="text-muted-foreground mb-4">
              Playwright is now installed and configured. Run your first test:
            </p>
            <div className="bg-background p-3 rounded border border-border font-mono text-sm mb-4">
              <span className="text-foreground">npm run test:ui</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Continue learning with our advanced frameworks and Pro tutorials to build production-ready test automation! 🚀
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
