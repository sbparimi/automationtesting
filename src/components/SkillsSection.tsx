import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Cog, Zap, Brain, Users } from "lucide-react";

const skills = [
  {
    icon: Shield,
    title: "Automation Governance",
    description: "Establishing standards, best practices, and governance frameworks for enterprise automation"
  },
  {
    icon: Cog,
    title: "Framework Implementation", 
    description: "End-to-end implementation of scalable test automation frameworks across organizations"
  },
  {
    icon: Target,
    title: "Test Management",
    description: "Strategic test planning, execution management, and quality assurance leadership"
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Driving transformations in software testing practices and modernizing QA processes"
  },
  {
    icon: Brain,
    title: "AI Capabilities",
    description: "Integrating AI and machine learning into testing workflows for intelligent automation"
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Leading cross-functional teams and mentoring QA professionals in modern practices"
  }
];

const companies = [
  "Crossover Health", "Canon Europe", "Philips", "Dolby", 
  "Pfizer", "Pensions UK GOVT", "Medseek"
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Core Expertise & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven track record with industry-leading organizations
          </p>
        </div>

        {/* Companies */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Trusted by Leading Organizations
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {companies.map((company, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {company}
              </Badge>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-card border border-border hover:shadow-glow transition-all duration-300 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground text-sm">{skill.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};