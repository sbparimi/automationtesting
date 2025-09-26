import { Button } from "@/components/ui/button";
import { TestTube, BookOpen } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <TestTube className="w-5 h-5 text-foreground" />
            <span className="text-lg font-semibold text-foreground tracking-tight">Suresh Parimi</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Button 
              variant="ghost" 
              className="text-foreground hover:bg-muted text-sm font-normal px-4 py-2 rounded-full"
              onClick={() => document.getElementById('frameworks')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Frameworks
            </Button>
            <Button 
              variant="ghost"
              className="text-foreground hover:bg-muted text-sm font-normal px-4 py-2 rounded-full flex items-center"
              onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <BookOpen className="w-4 h-4 mr-1" />
              Playwright Tips
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};