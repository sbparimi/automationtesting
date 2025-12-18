import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, GitBranch, Monitor, Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const skills = [
  {
    icon: Code2,
    title: "TypeScript Mastery",
    description: "Strong typing, generics, and advanced patterns for robust automation",
    link: "/master-typescript",
    lessons: "50+ lessons"
  },
  {
    icon: Monitor,
    title: "Playwright & Cypress",
    description: "Modern test frameworks with advanced patterns and best practices",
    link: "/playwright",
    lessons: "80+ lessons"
  },
  {
    icon: Database,
    title: "API Testing",
    description: "REST, GraphQL integration testing with comprehensive validation",
    link: "/playwright",
    lessons: "30+ lessons"
  },
  {
    icon: GitBranch,
    title: "CI/CD Integration",
    description: "GitHub Actions, Jenkins, Azure DevOps pipeline automation",
    link: "/master-typescript",
    lessons: "25+ lessons"
  },
  {
    icon: Shield,
    title: "Test Management",
    description: "TMAP methodology, risk-based testing, and quality governance",
    link: "/test-management",
    lessons: "100+ lessons"
  },
  {
    icon: Zap,
    title: "AI in QA",
    description: "AI-powered test generation, chatbot testing, and intelligent automation",
    link: "/ai-in-qa",
    lessons: "150+ lessons"
  }
];

export const SkillsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-bold">
            <Zap className="w-3 h-3 mr-1" />
            COMPLETE SKILL COVERAGE
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills That Get You Hired
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master every aspect of modern QA automation. <span className="text-primary font-semibold">Click any skill to start learning.</span>
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Link key={skill.title} to={skill.link}>
              <Card 
                className="group border border-border shadow-soft hover:shadow-strong hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 animate-slide-up overflow-hidden h-full cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <skill.icon className="w-7 h-7 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs font-medium">
                      {skill.lessons}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>Start Learning</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
