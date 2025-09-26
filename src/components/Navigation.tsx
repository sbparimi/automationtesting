import { Button } from "@/components/ui/button";
import { TestTube, BookOpen } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TestTube className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">Suresh Parimi</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => document.getElementById('frameworks')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Frameworks
            </Button>
            <Button 
              variant="ghost"
              onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Playwright Tips
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};