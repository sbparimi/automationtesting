import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap } from "lucide-react";
import { SubscribeButton } from "./SubscribeButton";

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 text-base px-6 py-2 bg-gradient-primary text-primary-foreground border-0">
            Choose Your Learning Path
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Pricing <span className="bg-gradient-primary bg-clip-text text-transparent">Plans</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start with fundamentals for free, upgrade to Pro for enterprise-level advanced frameworks
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <Card className="relative border-2 border-border hover:border-primary/40 transition-all duration-500 overflow-hidden bg-card/80 backdrop-blur-sm p-8 hover:shadow-medium">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Basic Plan</h3>
                  <p className="text-muted-foreground">For beginners</p>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-foreground">Free</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Perfect for getting started with Playwright automation fundamentals
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {[
                'Daily beginner tutorial emails',
                'Basic Playwright installation guide',
                'Step-by-step setup instructions',
                'Introduction to testing concepts',
                'Community support access',
                'Basic test examples'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-base">{feature}</span>
                </div>
              ))}
            </div>

            <SubscribeButton frameworkId="basic-free-plan" buttonText="Get Started Free" className="w-full" />
          </Card>

          {/* Pro Plan */}
          <Card className="relative border-2 border-primary hover:border-primary transition-all duration-500 overflow-hidden bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm p-8 shadow-glow">
            {/* Popular Badge */}
            <div className="absolute -top-1 -right-1">
              <Badge className="bg-gradient-accent text-secondary-foreground border-0 px-4 py-1.5 rounded-bl-xl rounded-tr-xl">
                Most Popular
              </Badge>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Crown className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Pro Plan</h3>
                  <p className="text-muted-foreground">For professionals</p>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-foreground">€5</span>
                <span className="text-xl text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Master enterprise-level Playwright frameworks with advanced concepts
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {[
                'Everything in Basic Plan',
                'All 5+ Advanced Framework Architectures',
                'BDD with Cucumber & Gherkin mastery',
                'Page Object Model deep dive',
                'CI/CD integration tutorials (GitLab, GitHub)',
                'Advanced TypeScript patterns',
                'Network trace & console monitoring',
                'Custom reporting (Allure, ReportPortal)',
                'Test management & strategy guides',
                'Real-world enterprise case studies',
                'Priority email support',
                'Exclusive Pro community access'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-base font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="w-full bg-gradient-primary hover:shadow-glow text-primary-foreground text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Upgrade to Pro - €5/month
            </Button>
          </Card>
        </div>

        {/* Pro Plan Benefits Highlight */}
        <div className="mt-16 p-8 bg-gradient-hero rounded-2xl border border-primary/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
            Why Go Pro?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Enterprise Frameworks',
                desc: 'Access all 5+ production-ready framework architectures used in Fortune 500 companies'
              },
              {
                title: 'Real-World Experience',
                desc: 'Learn from actual implementations at Canon and Dolby with detailed case studies'
              },
              {
                title: 'Career Advancement',
                desc: 'Master skills that recruiters actively search for in senior automation roles'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-3 shadow-glow">
                  <Crown className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
