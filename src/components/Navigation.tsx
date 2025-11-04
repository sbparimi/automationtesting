import { Button } from "@/components/ui/button";
import { TestTube, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-b border-border z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-button rounded-2xl flex items-center justify-center shadow-glow">
              <TestTube className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">TestCraft Academy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:bg-gradient-button hover:text-primary-foreground text-sm font-medium transition-all duration-300 px-3 py-2 rounded-2xl">
              Home
            </Link>
            <Link to="/master-typescript" className="text-foreground hover:bg-gradient-button hover:text-primary-foreground text-sm font-medium transition-all duration-300 px-3 py-2 rounded-2xl">
              TypeScript
            </Link>
            <Link to="/playwright" className="text-foreground hover:bg-gradient-button hover:text-primary-foreground text-sm font-medium transition-all duration-300 px-3 py-2 rounded-2xl">
              Playwright
            </Link>
            <Link to="/cypress" className="text-foreground hover:bg-gradient-button hover:text-primary-foreground text-sm font-medium transition-all duration-300 px-3 py-2 rounded-2xl">
              Cypress
            </Link>
            <Link to="/jobs" className="text-foreground hover:bg-gradient-button hover:text-primary-foreground text-sm font-medium transition-all duration-300 px-3 py-2 rounded-2xl">
              Find Jobs in Europe
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};