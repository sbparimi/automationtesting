import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, GitBranch, Monitor, Shield, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "TypeScript Mastery",
    description: "Strong typing, generics, and advanced patterns for robust automation",
    color: "from-blue-500/20 to-blue-600/10"
  },
  {
    icon: Monitor,
    title: "Playwright & Cypress",
    description: "Modern test frameworks with advanced patterns and best practices",
    color: "from-green-500/20 to-green-600/10"
  },
  {
    icon: Database,
    title: "API Testing",
    description: "REST, GraphQL integration testing with comprehensive validation",
    color: "from-purple-500/20 to-purple-600/10"
  },
  {
    icon: GitBranch,
    title: "CI/CD Integration",
    description: "GitHub Actions, Jenkins, Azure DevOps pipeline automation",
    color: "from-orange-500/20 to-orange-600/10"
  },
  {
    icon: Shield,
    title: "Test Management",
    description: "TMAP methodology, risk-based testing, and quality governance",
    color: "from-red-500/20 to-red-600/10"
  },
  {
    icon: Zap,
    title: "AI in QA",
    description: "AI-powered test generation, analysis, and intelligent automation",
    color: "from-yellow-500/20 to-yellow-600/10"
  }
];

export const SkillsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Core Competencies</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills You'll Master
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive curriculum covering every aspect of modern QA automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title} 
              className="group border-none shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
