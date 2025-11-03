import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Shield, TrendingUp, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  folderStructure?: string;
  structureDetails?: {
    folder: string;
    purpose: string;
    keyFiles: string[];
  }[];
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
  codeExample,
  folderStructure,
  structureDetails
}: FrameworkCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const complexityColor = {
    Beginner: "success",
    Intermediate: "warning", 
    Advanced: "destructive"
  }[complexity];

  return (
    <Card className="group hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 bg-gradient-accent border-border">
      <CardHeader className="pb-4">
        <div className="mb-4">
          <CardTitle className="text-2xl font-bold text-foreground transition-all duration-300 hover:bg-gradient-button hover:text-primary-foreground hover:shadow-glow hover:scale-105 rounded-3xl px-4 py-2 cursor-pointer inline-block">
            {title}
          </CardTitle>
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

        {/* Folder Structure */}
        {folderStructure && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-foreground">Framework Structure</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowDetails(!showDetails)}
                className="text-primary hover:text-primary-hover"
              >
                {showDetails ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-1" />
                    Hide Details
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-1" />
                    View Implementation Details
                  </>
                )}
              </Button>
            </div>
            
            <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto border">
              <code className="text-muted-foreground">{folderStructure}</code>
            </pre>

            {showDetails && structureDetails && (
              <div className="mt-4 space-y-4">
                <h5 className="font-semibold text-sm text-foreground">Detailed Structure Explanation</h5>
                {structureDetails.map((detail, index) => (
                  <div key={index} className="bg-background p-4 rounded-lg border">
                    <h6 className="font-semibold text-sm text-primary mb-2">{detail.folder}</h6>
                    <p className="text-xs text-muted-foreground mb-3">{detail.purpose}</p>
                    <div>
                      <p className="text-xs font-medium text-foreground mb-2">Key Files:</p>
                      <ul className="space-y-1">
                        {detail.keyFiles.map((file, fileIndex) => (
                          <li key={fileIndex} className="flex items-start text-xs text-muted-foreground">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            {file}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}

                {codeExample && (
                  <div>
                    <h5 className="font-semibold text-sm text-foreground mb-2">Code Example</h5>
                    <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto border">
                      <code className="text-muted-foreground">{codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
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
              const message = `Hi Suresh, I'm interested in learning ${title} with your expert guidance. Can we discuss the details?`;
              const whatsappUrl = `https://wa.me/31616270233?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Get Expert Guidance
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};