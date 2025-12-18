import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Briefcase, MapPin, Users, Sparkles, ArrowRight, Globe, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const JobSearch = () => {
  const handleVisitEuEngineers = () => {
    window.open("https://euengineers.eu", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Main CTA Card */}
          <div className="text-center space-y-8 animate-fade-in">
            {/* Floating icons */}
            <div className="flex justify-center gap-8 mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center animate-bounce" style={{ animationDelay: '0s' }}>
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center animate-bounce" style={{ animationDelay: '0.2s' }}>
                <Globe className="w-10 h-10 text-primary" />
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center animate-bounce" style={{ animationDelay: '0.4s' }}>
                <Building2 className="w-8 h-8 text-primary" />
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">Premium QA Job Board</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Find Your Dream
                <span className="block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  QA Job in Europe
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Access 1000+ QA Automation positions across Europe with visa sponsorship options through our partner platform
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 py-8">
              <div className="flex items-center gap-3 px-6 py-4 bg-card rounded-2xl border border-border shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">1000+</p>
                  <p className="text-sm text-muted-foreground">Active Jobs</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-card rounded-2xl border border-border shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">30+</p>
                  <p className="text-sm text-muted-foreground">Countries</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-card rounded-2xl border border-border shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Companies</p>
                </div>
              </div>
            </div>

            {/* Main CTA Button */}
            <div className="pt-4">
              <Button
                onClick={handleVisitEuEngineers}
                size="lg"
                className="group relative h-20 px-12 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-500 hover:scale-105 animate-pulse-slow"
              >
                <span className="flex items-center gap-4">
                  <Globe className="w-7 h-7" />
                  Visit EuEngineers.eu for Jobs
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
                  <ExternalLink className="w-5 h-5 opacity-70" />
                </span>
                
                {/* Animated border */}
                <span className="absolute inset-0 rounded-2xl border-2 border-primary/50 animate-ping opacity-30" />
              </Button>
            </div>

            {/* Subtitle */}
            <p className="text-muted-foreground text-lg">
              🇪🇺 Curated positions from top European tech companies
            </p>

            {/* Features grid */}
            <div className="grid md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
              <div className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Visa Sponsorship</h3>
                <p className="text-muted-foreground text-sm">Many positions offer visa sponsorship for qualified candidates from around the world</p>
              </div>
              
              <div className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Remote Friendly</h3>
                <p className="text-muted-foreground text-sm">Filter for remote, hybrid, or on-site positions that match your preferences</p>
              </div>
              
              <div className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Top Companies</h3>
                <p className="text-muted-foreground text-sm">Positions from leading tech companies, startups, and enterprises across Europe</p>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="pt-8">
              <Button
                onClick={handleVisitEuEngineers}
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg font-bold border-2 border-primary/30 hover:border-primary hover:bg-primary/5 rounded-xl transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  Explore All Opportunities
                  <ExternalLink className="w-5 h-5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobSearch;