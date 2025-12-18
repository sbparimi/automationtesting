import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Play, Clock, BookOpen, Code, TestTube, Brain, Users, Sparkles, TrendingUp, Bot } from "lucide-react";
import { Link } from "react-router-dom";

interface FeaturedCourse {
  id: string;
  title: string;
  tagline: string;
  description: string;
  lessonCount: number;
  duration: string;
  path: string;
  icon: React.ElementType;
  gradient: string;
  bgImage?: string;
}

const featuredCourses: FeaturedCourse[] = [
  {
    id: "codex",
    title: "AI Codex Mastery",
    tagline: "10x Your Test Development Speed",
    description: "Master GitHub Copilot and AI assistants to supercharge your Playwright and Cypress automation. From prompts to production-grade CI/CD pipelines.",
    lessonCount: 160,
    duration: "50+ hours",
    path: "/codex-course",
    icon: Bot,
    gradient: "from-cyan-600 via-cyan-700 to-cyan-900"
  },
  {
    id: "typescript",
    title: "Master TypeScript",
    tagline: "Write Code That Writes Itself",
    description: "Transform from JavaScript chaos to TypeScript mastery. Build bulletproof automation code that catches bugs before they happen.",
    lessonCount: 160,
    duration: "40+ hours",
    path: "/master-typescript",
    icon: Code,
    gradient: "from-blue-600 via-blue-700 to-blue-900"
  },
  {
    id: "playwright",
    title: "Playwright Mastery",
    tagline: "Automate Like Microsoft Does",
    description: "The framework powering Microsoft's own testing. Cross-browser, lightning-fast, and built for the modern web.",
    lessonCount: 160,
    duration: "45+ hours",
    path: "/playwright-course",
    icon: TestTube,
    gradient: "from-green-600 via-green-700 to-green-900"
  },
  {
    id: "cypress",
    title: "Cypress Complete",
    tagline: "Testing That Developers Love",
    description: "The most developer-friendly E2E framework. Real-time reloading, time-travel debugging, and instant feedback.",
    lessonCount: 160,
    duration: "42+ hours",
    path: "/cypress-course",
    icon: Sparkles,
    gradient: "from-emerald-600 via-emerald-700 to-emerald-900"
  },
  {
    id: "test-management",
    title: "Test Leadership",
    tagline: "From Tester to Test Leader",
    description: "Lead QA teams, build test strategies, and drive quality culture. Your path from IC to Director starts here.",
    lessonCount: 160,
    duration: "50+ hours",
    path: "/test-management",
    icon: Users,
    gradient: "from-purple-600 via-purple-700 to-purple-900"
  },
  {
    id: "ai-qa",
    title: "AI in QA",
    tagline: "The Future is Already Here",
    description: "Leverage ChatGPT, copilots, and GenAI to 10x your testing efficiency. Don't get left behind.",
    lessonCount: 160,
    duration: "35+ hours",
    path: "/ai-in-qa",
    icon: Brain,
    gradient: "from-pink-600 via-pink-700 to-pink-900"
  },
  {
    id: "frameworks",
    title: "Framework Architecture",
    tagline: "Build Systems, Not Scripts",
    description: "Design production-grade frameworks used by Fortune 500 companies. POM, BDD, Hybrid - master them all.",
    lessonCount: 174,
    duration: "55+ hours",
    path: "/frameworks-course",
    icon: TrendingUp,
    gradient: "from-orange-600 via-orange-700 to-orange-900"
  }
];

export const NetflixHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCourse = featuredCourses[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredCourses.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden">
      {/* Background with Gradient */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCourse.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 bg-gradient-to-r ${currentCourse.gradient}`}
        />
      </AnimatePresence>
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 border border-white/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-72 h-72 border border-white/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-12 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge className="bg-primary text-primary-foreground mb-4 text-sm px-4 py-1.5 font-semibold">
              <Sparkles className="w-3 h-3 mr-1.5" />
              100% FREE • {featuredCourses.length} COURSES
            </Badge>
          </motion.div>
          
          {/* Course Title & Tagline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCourse.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <currentCourse.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium uppercase tracking-wider">Featured Course</p>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    {currentCourse.title}
                  </h1>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                {currentCourse.tagline}
              </h2>
              
              <p className="text-lg sm:text-xl text-white/90 mb-6 leading-relaxed max-w-2xl">
                {currentCourse.description}
              </p>
              
              {/* Stats */}
              <div className="flex items-center gap-6 mb-8 text-white/80">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-medium">{currentCourse.lessonCount} lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">{currentCourse.duration}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to={currentCourse.path}>
              <Button 
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 px-8 py-6 text-lg font-bold rounded-xl group"
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                Start Learning
              </Button>
            </Link>
            <Link to="/auth">
              <Button 
                size="lg"
                className="bg-primary/90 text-primary-foreground hover:bg-primary px-8 py-6 text-lg font-bold rounded-xl border-2 border-primary"
              >
                Sign Up Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
        
        {/* Course Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {featuredCourses.map((course, index) => (
            <button
              key={course.id}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-12 bg-primary' 
                  : 'w-6 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        
        {/* Course Quick Nav - Right Side */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3">
          {featuredCourses.map((course, index) => (
            <button
              key={course.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white text-foreground scale-110' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <course.icon className="w-5 h-5" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
