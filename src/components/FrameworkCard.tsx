import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Clock, Shield, TrendingUp, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface FrameworkCardProps {
  id?: string;
  title: string;
  description: string;
  features: string[];
  benefits: {
    testers: string[];
    business: string[];
  };
  technologies: string[];
  complexity: "Beginner" | "Intermediate" | "Advanced";
  diagram: React.ReactNode;
  codeExample?: string;
}

export const FrameworkCard = ({ 
  id,
  title, 
  description, 
  features, 
  benefits, 
  technologies, 
  complexity,
  diagram,
  codeExample 
}: FrameworkCardProps) => {
  const complexityColor = {
    Beginner: "success",
    Intermediate: "warning", 
    Advanced: "destructive"
  }[complexity];

  return (
    <Card className="group hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 bg-gradient-accent border-border">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-4">
          <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <Badge variant="outline" className={`border-${complexityColor} text-${complexityColor}`}>
            {complexity}
          </Badge>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Architecture Diagram */}
        <div className="bg-background p-4 rounded-lg border">
          <h4 className="font-semibold mb-3 text-foreground">Framework Architecture</h4>
          {diagram}
        </div>

        {/* Key Features */}
        <div>
          <h4 className="font-semibold mb-3 text-foreground flex items-center">
            <Shield className="w-4 h-4 mr-2 text-primary" />
            Key Features
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-3 text-foreground flex items-center">
              <Users className="w-4 h-4 mr-2 text-success" />
              For Testers
            </h4>
            <ul className="space-y-2">
              {benefits.testers.map((benefit, index) => (
                <li key={index} className="flex items-start text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-foreground flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-primary" />
              Business Value
            </h4>
            <ul className="space-y-2">
              {benefits.business.map((benefit, index) => (
                <li key={index} className="flex items-start text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Code Example */}
        {codeExample && (
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Implementation Preview</h4>
            <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto border">
              <code className="text-muted-foreground">{codeExample}</code>
            </pre>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          {id && (
            <Link to={`/framework/${id}`}>
              <Button 
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Implementation Details
              </Button>
            </Link>
          )}
          
          <Button 
            className="w-full bg-primary hover:bg-primary-hover text-primary-foreground transition-all duration-300"
            onClick={() => {
              const message = `Hi Suresh, I'm interested in purchasing the ${title} course for $10. Please provide me with access details.`;
              const whatsappUrl = `https://wa.me/31616270233?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Buy Now - $10
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};