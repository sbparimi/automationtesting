import { Building2, Users, LineChart, Zap, CheckCircle, Code, Shield, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const JourneySection = () => {
  return (
    <section id="journey" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 text-base px-6 py-2 bg-gradient-primary text-primary-foreground border-0">
            5 Years of Playwright Excellence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            My Journey with <span className="bg-gradient-primary bg-clip-text text-transparent">Playwright</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transforming test automation infrastructure at enterprise scale with cutting-edge Playwright frameworks
          </p>
        </div>

        {/* Canon Experience */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow overflow-hidden bg-card/80 backdrop-blur-sm">
            <div className="p-8 md:p-12">
              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-border">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <Building2 className="w-9 h-9 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground">Canon Inc.</h3>
                    <p className="text-lg text-muted-foreground">Senior Test Automation Architect</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-base px-4 py-2 border-primary text-primary w-fit">
                  3+ Years
                </Badge>
              </div>

              {/* Challenge Section */}
              <div className="mb-8 p-6 bg-muted/50 rounded-xl border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <Zap className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">The Challenge</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Joined Canon during a critical modernization initiative. Legacy automation tools were failing to keep pace with rapid development cycles across Oracle Analytics, Salesforce, and ServiceNow applications. The organization needed a complete transformation of their test automation infrastructure.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution & Impact */}
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-4">
                  <Rocket className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <h4 className="text-xl font-bold text-foreground">Solution & Implementation</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-5 bg-gradient-card rounded-lg border border-border hover:shadow-medium transition-all duration-300">
                    <Code className="w-5 h-5 text-primary mb-3" />
                    <h5 className="font-semibold text-foreground mb-2 text-lg">Framework Architecture</h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Architected enterprise-grade Playwright frameworks with BDD (Cucumber), Gherkin syntax, and Page Object Model patterns. Implemented TypeScript for type safety and maintainability.
                    </p>
                  </div>
                  <div className="p-5 bg-gradient-card rounded-lg border border-border hover:shadow-medium transition-all duration-300">
                    <Shield className="w-5 h-5 text-primary mb-3" />
                    <h5 className="font-semibold text-foreground mb-2 text-lg">Advanced Features</h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Integrated network trace analysis, console log monitoring, uncaught exception handling, and custom Allure reporting for comprehensive test visibility.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies & Tools */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-foreground mb-4">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Playwright', 'TypeScript', 'BDD/Cucumber', 'Gherkin', 'Page Object Model', 'GitLab CI/CD', 'JIRA Integration', 'Allure Reports', 'Appium', 'Oracle Analytics', 'Salesforce', 'ServiceNow'].map((tech) => (
                    <Badge key={tech} className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="text-lg font-bold text-foreground mb-4">Key Achievements</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Reduced test execution time by 65% through parallel execution',
                    'Achieved 85% automated test coverage across all applications',
                    'Implemented CI/CD integration reducing deployment time by 40%',
                    'Established test management strategy with JIRA alignment',
                    'Built reusable component library reducing development time by 50%',
                    'Mentored 8 engineers on Playwright and modern testing practices'
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg border border-border/50">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Dolby Experience */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-500 hover:shadow-glow-accent overflow-hidden bg-card/80 backdrop-blur-sm">
            <div className="p-8 md:p-12">
              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-border">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow-accent">
                    <Building2 className="w-9 h-9 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground">Dolby Laboratories</h3>
                    <p className="text-lg text-muted-foreground">Lead Test Automation Engineer</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-base px-4 py-2 border-secondary text-secondary w-fit">
                  2+ Years
                </Badge>
              </div>

              {/* Challenge Section */}
              <div className="mb-8 p-6 bg-muted/50 rounded-xl border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <Zap className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">The Mission</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Tasked with implementing and enhancing Playwright automation framework for Dolby's billing solutions supporting high-availability streaming applications. Critical focus on reducing defect leakage and improving functional test coverage across end-to-end and regression test suites.
                    </p>
                  </div>
                </div>
              </div>

              {/* Leadership & Impact */}
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-4">
                  <Users className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <h4 className="text-xl font-bold text-foreground">Leadership & Strategy</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-5 bg-gradient-card rounded-lg border border-border hover:shadow-medium transition-all duration-300">
                    <Users className="w-5 h-5 text-secondary mb-3" />
                    <h5 className="font-semibold text-foreground mb-2 text-lg">Team Leadership</h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Led a team of 4 test engineers, establishing collaboration frameworks with developers for joint responsibility on component testing (Cypress) and functional automation (Playwright).
                    </p>
                  </div>
                  <div className="p-5 bg-gradient-card rounded-lg border border-border hover:shadow-medium transition-all duration-300">
                    <LineChart className="w-5 h-5 text-secondary mb-3" />
                    <h5 className="font-semibold text-foreground mb-2 text-lg">Quality Metrics</h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Implemented ReportPortal.io for advanced test analytics, reducing defect leakage by 70% and accelerating automation development velocity by 3x.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies & Tools */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-foreground mb-4">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Playwright', 'TypeScript', 'Page Object Model', 'Cypress', 'ReportPortal.io', 'Network Tracing', 'Console Monitoring', 'Exception Handling', 'CI/CD', 'High Availability Systems', 'Billing Solutions', 'Streaming Applications'].map((tech) => (
                    <Badge key={tech} className="bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300 px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="text-lg font-bold text-foreground mb-4">Key Achievements</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Achieved 92% functional test coverage for billing modules',
                    'Reduced defect leakage by 70% through comprehensive E2E testing',
                    'Accelerated automation suite execution from 4 hours to 45 minutes',
                    'Implemented ReportPortal.io for real-time test insights',
                    'Established component testing strategy with Cypress integration',
                    'Trained and mentored 4 engineers on Playwright best practices',
                    'Integrated advanced network trace and console log monitoring',
                    'Built CI/CD pipeline reducing deployment failures by 80%'
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg border border-border/50">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Advanced Capabilities Highlight */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Advanced Playwright Features Implemented</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise in production-grade Playwright capabilities
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: 'Network Trace Analysis', desc: 'Deep packet inspection for API debugging' },
              { title: 'Console Log Monitoring', desc: 'Real-time error detection and logging' },
              { title: 'Exception Handling', desc: 'Uncaught exception capture and reporting' },
              { title: 'Visual Regression', desc: 'Pixel-perfect screenshot comparison' }
            ].map((feature, index) => (
              <div key={index} className="p-5 bg-card border border-border rounded-lg hover:shadow-medium transition-all duration-300 hover:border-primary/40">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                  <Code className="w-5 h-5 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
