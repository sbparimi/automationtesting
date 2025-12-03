import { Separator } from "@/components/ui/separator";
import { TestTube, Mail, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-button rounded-xl flex items-center justify-center">
                <TestTube className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">QAForge</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              The ultimate QA automation learning platform. From beginner to director-level content.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:reachparimi@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Courses</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/master-typescript" className="hover:text-primary transition-colors">TypeScript</Link></li>
              <li><Link to="/playwright" className="hover:text-primary transition-colors">Playwright</Link></li>
              <li><Link to="/cypress" className="hover:text-primary transition-colors">Cypress</Link></li>
              <li><Link to="/test-management" className="hover:text-primary transition-colors">Test Management</Link></li>
              <li><Link to="/ai-in-qa" className="hover:text-primary transition-colors">AI in QA</Link></li>
            </ul>
          </div>

          {/* Levels */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Learning Paths</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/beginner-guide" className="hover:text-primary transition-colors">For Beginners</Link></li>
              <li><Link to="/master-typescript" className="hover:text-primary transition-colors">For Professionals</Link></li>
              <li><Link to="/test-management" className="hover:text-primary transition-colors">For Practitioners</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/jobs" className="hover:text-primary transition-colors">Find Jobs in Europe</Link></li>
              <li><a href="https://wa.me/31616270233" className="hover:text-primary transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 QAForge. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
