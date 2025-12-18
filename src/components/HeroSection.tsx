import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, BookOpen, Sparkles, GraduationCap, Target, Clock, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { SkillsChart } from "./SkillsChart";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background pt-20 md:pt-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 md:w-96 h-72 md:h-96 bg-primary/15 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-64 md:w-80 h-64 md:h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      {/* Main Hero Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-4 py-2 mb-6 border border-primary/30 shadow-glow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-foreground animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-foreground tracking-wide">100% FREE • NO CREDIT CARD NEEDED</span>
            </motion.div>
            
            {/* Catchy Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.05] mb-4">
              <span className="block mb-2">Stop Dreaming.</span>
              <span className="block text-primary">Start Automating.</span>
            </h1>
            
            {/* Subheadline - Value Proposition */}
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-2 font-semibold">
              Land your QA Automation job in 90 days.
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed max-w-lg">
              Join <span className="text-primary font-bold">782+ professionals</span> who transformed their careers with production-ready skills in TypeScript, Playwright, Cypress, and AI automation.
            </p>

            {/* Quick Value Props - 5 Second Rule */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 md:mb-8">
              {[
                { icon: Target, text: 'Job-Ready Skills' },
                { icon: TrendingUp, text: 'Career Growth' },
                { icon: Zap, text: 'Instant Access' }
              ].map((item, i) => (
                <motion.div 
                  key={item.text} 
                  className="flex items-center gap-3 bg-muted/50 rounded-xl px-4 py-3 border border-border/50 transition-all hover:bg-muted hover:border-primary/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Section */}
            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Link to="/auth">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary-hover text-foreground px-6 sm:px-8 py-6 sm:py-7 rounded-2xl text-base sm:text-lg font-bold transition-all hover:scale-105 group shadow-glow border-2 border-primary/50 w-full sm:w-auto"
                >
                  Start Learning Now — It's Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              className="flex items-center gap-4 md:gap-6 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>500+ Lessons</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Real Projects</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Expert Content</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Visual - Skills Chart */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div 
              className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div 
              className="relative bg-card border border-border rounded-3xl p-6 shadow-strong"
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(132, 204, 22, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -top-3 -right-3">
                <Badge className="bg-primary text-foreground shadow-glow font-bold animate-bounce-subtle">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  HIGH DEMAND
                </Badge>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 text-center">
                Skills Employers Want
              </h3>
              <SkillsChart />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Course Cards Section */}
      <div id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        {/* Section Header - Clear Direction */}
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-primary text-foreground mb-4 shadow-glow font-bold text-sm px-4 py-2">
            <GraduationCap className="w-4 h-4 mr-2" />
            CHOOSE YOUR STARTING POINT
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            3 Paths. 1 Goal.
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Whether you're starting fresh or leveling up, we've got you covered.
          </p>
          <p className="text-base sm:text-lg text-primary font-semibold">
            All courses free. Pick your level and start today.
          </p>
        </motion.div>
        
        {/* Course Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Beginner Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link to="/beginner-guide" className="group block h-full">
              <motion.div 
                className="level-beginner rounded-3xl p-6 md:p-8 h-full relative overflow-hidden border-2 border-transparent"
                whileHover={{ scale: 1.03, borderColor: "rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                
                {/* Time Indicator */}
                <div className="flex items-center gap-2 text-foreground/70 text-sm mb-4">
                  <Clock className="w-4 h-4" />
                  <span>4-6 weeks</span>
                </div>
                
                <Badge className="bg-foreground/10 text-foreground border-foreground/20 mb-3 font-bold">
                  <BookOpen className="w-3 h-3 mr-1" />
                  NEW TO QA?
                </Badge>
                
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  Beginner Journey
                </h3>
                
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  Master the fundamentals. Learn testing basics, write your first automated tests, and build a strong foundation.
                </p>
                
                <ul className="space-y-2 mb-6 text-sm">
                  {['Testing fundamentals', 'Basic automation', 'Tool setup'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-foreground/60" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center text-foreground font-bold group-hover:gap-3 gap-2 transition-all text-lg">
                  <span>Start Here</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            </Link>
          </motion.div>
          
          {/* Professionals Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/master-typescript" className="group block h-full">
              <motion.div 
                className="level-professional rounded-3xl p-6 md:p-8 h-full relative overflow-hidden border-2 border-transparent"
                whileHover={{ scale: 1.03, borderColor: "rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                
                {/* Popular Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-foreground text-background font-bold animate-bounce-subtle">
                    MOST POPULAR
                  </Badge>
                </div>
                
                {/* Time Indicator */}
                <div className="flex items-center gap-2 text-foreground/70 text-sm mb-4">
                  <Clock className="w-4 h-4" />
                  <span>8-12 weeks</span>
                </div>
                
                <Badge className="bg-foreground/10 text-foreground border-foreground/20 mb-3 font-bold">
                  <Zap className="w-3 h-3 mr-1" />
                  LEVEL UP
                </Badge>
                
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  Professional Track
                </h3>
                
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  TypeScript mastery, advanced frameworks, CI/CD integration. Production-grade patterns used by top companies.
                </p>
                
                <ul className="space-y-2 mb-6 text-sm">
                  {['TypeScript & Playwright', 'Cypress mastery', 'CI/CD pipelines'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-foreground/60" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center text-foreground font-bold group-hover:gap-3 gap-2 transition-all text-lg">
                  <span>Go Pro</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            </Link>
          </motion.div>
          
          {/* Practitioners Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="sm:col-span-2 md:col-span-1"
          >
            <Link to="/test-management" className="group block h-full">
              <motion.div 
                className="level-practitioner rounded-3xl p-6 md:p-8 h-full relative overflow-hidden border-2 border-transparent"
                whileHover={{ scale: 1.03, borderColor: "rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                
                {/* Time Indicator */}
                <div className="flex items-center gap-2 text-foreground/70 text-sm mb-4">
                  <Clock className="w-4 h-4" />
                  <span>12+ weeks</span>
                </div>
                
                <Badge className="bg-foreground/10 text-foreground border-foreground/20 mb-3 font-bold">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  LEADERSHIP
                </Badge>
                
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  Lead & Strategize
                </h3>
                
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  Test strategy, team leadership, enterprise governance. Prepare for Senior, Lead, and Director roles.
                </p>
                
                <ul className="space-y-2 mb-6 text-sm">
                  {['TMAP methodology', 'Team leadership', 'AI in QA'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-foreground/60" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center text-foreground font-bold group-hover:gap-3 gap-2 transition-all text-lg">
                  <span>Lead Teams</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
