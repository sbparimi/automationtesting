import { Separator } from "@/components/ui/separator";
import { TestTube, Mail, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <TestTube className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-foreground">Suresh Parimi</span>
            </div>
            <p className="text-muted-foreground mb-4">
              18+ years in automation governance, test management, and driving transformations 
              in software testing with Playwright and TypeScript.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:suresh.parimi@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+31616270233" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="w-5 h-5 flex items-center justify-center text-xs font-bold">📱</span>
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Framework Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Framework Types</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#frameworks" className="hover:text-primary transition-colors">Page Object Model</a></li>
              <li><a href="#frameworks" className="hover:text-primary transition-colors">Keyword Driven</a></li>
              <li><a href="#frameworks" className="hover:text-primary transition-colors">Data Driven</a></li>
              <li><a href="#frameworks" className="hover:text-primary transition-colors">Hybrid Framework</a></li>
              <li><a href="#frameworks" className="hover:text-primary transition-colors">BDD with Cucumber</a></li>
              <li><a href="#frameworks" className="hover:text-primary transition-colors">API + UI Integration</a></li>
            </ul>
          </div>

          {/* Business Value */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Business Value</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#business-value" className="hover:text-primary transition-colors">Cost Reduction</a></li>
              <li><a href="#business-value" className="hover:text-primary transition-colors">Faster Releases</a></li>
              <li><a href="#business-value" className="hover:text-primary transition-colors">Quality Assurance</a></li>
              <li><a href="#business-value" className="hover:text-primary transition-colors">Team Efficiency</a></li>
              <li><a href="#business-value" className="hover:text-primary transition-colors">ROI Optimization</a></li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Suresh Parimi. Professional portfolio showcasing Playwright frameworks and expertise.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};