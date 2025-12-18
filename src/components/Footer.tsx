import { Separator } from "@/components/ui/separator";
import { TestTube, Mail, Linkedin, Github, Heart, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-card to-muted/30 border-t border-border py-16 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4 group">
              <div className="w-10 h-10 bg-gradient-button rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-glow">
                <TestTube className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">QAForge</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              The ultimate QA automation learning platform. From beginner to director-level content with production-grade examples.
            </p>
            <div className="flex space-x-3">
              <a 
                href="mailto:reachparimi@gmail.com" 
                className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com" 
                className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              Courses
              <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">5</span>
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/master-typescript", label: "TypeScript" },
                { to: "/playwright", label: "Playwright" },
                { to: "/cypress", label: "Cypress" },
                { to: "/test-management", label: "Test Management" },
                { to: "/ai-in-qa", label: "AI in QA" },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Levels */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Learning Paths</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/beginner-guide" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full level-beginner" />
                  For Beginners
                </Link>
              </li>
              <li>
                <Link to="/master-typescript" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full level-professional" />
                  For Professionals
                </Link>
              </li>
              <li>
                <Link to="/test-management" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full level-practitioner" />
                  For Practitioners
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/jobs" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                  Find Jobs in Europe
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <a href="https://wa.me/31616270233" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                  Contact Support
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8 bg-border/50" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} QAForge. Made with <Heart className="w-3 h-3 text-secondary inline animate-pulse" /> for QA professionals.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
