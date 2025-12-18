import { TestTube, Menu, X, LogIn, LogOut, Shield, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAdmin, isPremium, signOut, loading } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { to: "/master-typescript", label: "TypeScript" },
    { to: "/playwright", label: "Playwright" },
    { to: "/cypress", label: "Cypress" },
    { to: "/frameworks", label: "Frameworks" },
    { to: "/test-management", label: "Test Management & Leadership" },
    { to: "/ai-in-qa", label: "AI in QA" },
    { to: "/jobs", label: "Jobs" },
  ];

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error("Failed to sign out");
    } else {
      toast.success("Signed out successfully");
      navigate("/");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-b border-border z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-button rounded-2xl flex items-center justify-center shadow-glow transition-transform group-hover:scale-110">
              <TestTube className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">QAForge</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative text-foreground hover:text-primary text-sm font-medium transition-all duration-300 px-4 py-2 rounded-xl hover:bg-primary/5 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Auth Section */}
          <div className="hidden lg:flex items-center gap-2">
            {loading ? (
              <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <User className="w-4 h-4" />
                    <span className="max-w-[100px] truncate">{user.email?.split('@')[0]}</span>
                    {isPremium && (
                      <span className="px-1.5 py-0.5 text-[10px] font-bold bg-primary/20 text-primary rounded">PRO</span>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {isAdmin && (
                    <>
                      <DropdownMenuItem onClick={() => navigate('/admin')} className="gap-2">
                        <Shield className="w-4 h-4" />
                        Admin Panel
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuItem onClick={handleSignOut} className="gap-2 text-destructive">
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button size="sm" className="gap-2">
                  <LogIn className="w-4 h-4" />
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-slide-up">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-foreground hover:text-primary text-sm font-medium transition-all duration-300 px-4 py-3 rounded-xl hover:bg-primary/5 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Auth */}
              <div className="pt-4 border-t border-border mt-2">
                {user ? (
                  <>
                    {isAdmin && (
                      <Link
                        to="/admin"
                        className="flex items-center gap-2 text-foreground hover:text-primary text-sm font-medium px-4 py-3 rounded-xl hover:bg-primary/5"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Shield className="w-4 h-4" />
                        Admin Panel
                      </Link>
                    )}
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2 text-destructive text-sm font-medium px-4 py-3 rounded-xl hover:bg-destructive/5 w-full text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Link
                    to="/auth"
                    className="flex items-center gap-2 text-primary text-sm font-medium px-4 py-3 rounded-xl hover:bg-primary/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LogIn className="w-4 h-4" />
                    Login / Sign Up
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
