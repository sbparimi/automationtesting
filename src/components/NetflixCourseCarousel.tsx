import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Clock, BookOpen, Code, TestTube, Brain, Users, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  lessonCount: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  path: string;
  icon: React.ElementType;
  gradient: string;
}

const courses: Course[] = [
  {
    id: "typescript",
    title: "Master TypeScript",
    description: "From basics to advanced patterns. Build type-safe automation code.",
    image: "/placeholder.svg",
    lessonCount: 160,
    duration: "40+ hours",
    level: "Beginner",
    category: "Foundation",
    path: "/master-typescript",
    icon: Code,
    gradient: "from-blue-500 to-blue-700"
  },
  {
    id: "playwright",
    title: "Playwright Mastery",
    description: "Enterprise-grade browser automation with Microsoft's powerful framework.",
    image: "/placeholder.svg",
    lessonCount: 160,
    duration: "45+ hours",
    level: "Intermediate",
    category: "Automation",
    path: "/playwright-course",
    icon: TestTube,
    gradient: "from-green-500 to-green-700"
  },
  {
    id: "cypress",
    title: "Cypress Complete",
    description: "Modern E2E testing with the developer-friendly testing framework.",
    image: "/placeholder.svg",
    lessonCount: 160,
    duration: "42+ hours",
    level: "Intermediate",
    category: "Automation",
    path: "/cypress-course",
    icon: Sparkles,
    gradient: "from-emerald-500 to-emerald-700"
  },
  {
    id: "test-management",
    title: "Test Management & Leadership",
    description: "Lead QA teams, build strategies, and drive quality at enterprise scale.",
    image: "/placeholder.svg",
    lessonCount: 160,
    duration: "50+ hours",
    level: "Advanced",
    category: "Leadership",
    path: "/test-management",
    icon: Users,
    gradient: "from-purple-500 to-purple-700"
  },
  {
    id: "ai-qa",
    title: "AI in QA",
    description: "Leverage AI and GenAI to supercharge your testing workflows.",
    image: "/placeholder.svg",
    lessonCount: 160,
    duration: "35+ hours",
    level: "Advanced",
    category: "AI/ML",
    path: "/ai-in-qa",
    icon: Brain,
    gradient: "from-pink-500 to-pink-700"
  },
  {
    id: "frameworks",
    title: "Framework Architecture",
    description: "Build production-grade test frameworks from POM to Hybrid patterns.",
    image: "/placeholder.svg",
    lessonCount: 174,
    duration: "55+ hours",
    level: "Advanced",
    category: "Architecture",
    path: "/frameworks-course",
    icon: TrendingUp,
    gradient: "from-orange-500 to-orange-700"
  }
];

const CourseCard = ({ course, index }: { course: Course; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px]"
    >
      <Link to={course.path}>
        <motion.div
          className="relative h-[400px] rounded-2xl overflow-hidden cursor-pointer group"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.05, zIndex: 10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-90`} />
          
          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white/30 rounded-full" />
            <div className="absolute bottom-4 left-4 w-24 h-24 border-2 border-white/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full" />
          </div>
          
          {/* Content */}
          <div className="relative h-full p-6 flex flex-col justify-between text-white">
            {/* Top Section */}
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-3 font-medium">
                {course.category}
              </Badge>
              
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <course.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 leading-tight">{course.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                {course.description}
              </p>
            </div>
            
            {/* Bottom Section */}
            <div>
              {/* Stats */}
              <div className="flex items-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1.5 text-white/90">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.lessonCount} lessons</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
              </div>
              
              {/* Level Badge */}
              <div className="flex items-center justify-between">
                <Badge 
                  className={`
                    ${course.level === 'Beginner' ? 'bg-green-400/30 text-green-100' : ''}
                    ${course.level === 'Intermediate' ? 'bg-yellow-400/30 text-yellow-100' : ''}
                    ${course.level === 'Advanced' ? 'bg-red-400/30 text-red-100' : ''}
                    border-none font-medium
                  `}
                >
                  {course.level}
                </Badge>
                
                {/* Play Button on Hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <Play className="w-5 h-5 text-foreground fill-foreground ml-1" />
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Hover Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export const NetflixCourseCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-3">
                <Sparkles className="w-3 h-3 mr-1" />
                ALL COURSES
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Your Learning Journey
              </h2>
              <p className="text-white/70 mt-2 text-lg">
                500+ lessons • 6 comprehensive courses • From beginner to expert
              </p>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : ''}`}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : ''}`}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Course Cards Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {courses.map((course, index) => (
            <div key={course.id} className="snap-start">
              <CourseCard course={course} index={index} />
            </div>
          ))}
        </div>
        
        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {courses.map((_, index) => (
            <div 
              key={index}
              className="w-2 h-2 rounded-full bg-white/30"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
