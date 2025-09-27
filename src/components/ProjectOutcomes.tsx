import { Check } from "lucide-react";

const outcomes = [
  "Master enterprise-grade Playwright framework architecture patterns",
  "Implement scalable test automation solutions for large organizations", 
  "Build AI-powered testing capabilities using modern TypeScript patterns",
  "Design maintainable automation frameworks that scale across teams",
  "Integrate advanced reporting and analytics into your test suites",
  "Apply best practices for test data management and environment handling",
  "Create robust CI/CD integration patterns for continuous testing",
  "Implement advanced debugging and troubleshooting techniques"
];

export const ProjectOutcomes = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Framework Mastery Outcomes
          </h2>
          
          <div className="grid gap-4">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-card transition-colors">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground text-lg leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};