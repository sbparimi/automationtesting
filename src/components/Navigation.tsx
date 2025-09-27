import { Button } from "@/components/ui/button";
import { TestTube, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <TestTube className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground tracking-tight">PlaywrightPro</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/learning-paths" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
              Learning Paths
            </Link>
            <button 
              className="text-foreground hover:text-primary text-sm font-medium transition-colors"
              onClick={() => document.getElementById('frameworks')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Frameworks
            </button>
            <button 
              className="text-foreground hover:text-primary text-sm font-medium transition-colors"
              onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Playwright Tips
            </button>
            <button 
              className="text-foreground hover:text-primary text-sm font-medium transition-colors"
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Expertise
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Mock Interview
            </Button>
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              Get Free Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};