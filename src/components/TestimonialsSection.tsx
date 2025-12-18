import { Star, Quote } from "lucide-react";
import { Badge } from "./ui/badge";

const testimonials = [
  {
    rating: 5,
    text: "This has been one of the best learning tools I've used in my professional career. The structured approach to QA automation is exactly what I needed to land my new role.",
    author: "Senior QA Engineer",
    company: "Tech Startup",
    icon: "💼"
  },
  {
    rating: 5,
    text: "Loads of content. Great concept to be able to learn whenever and wherever you want. Ideal scenario for me to just accumulate knowledge while working full-time.",
    author: "David Forecast",
    company: "Enterprise Corp",
    icon: "⭐"
  },
  {
    rating: 5,
    text: "There are countless opportunities with this platform. I went from manual testing to automation in just 3 months. The practical examples made all the difference!",
    author: "Sarah Martinez",
    company: "FinTech Company",
    icon: "🚀"
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-20" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-bold">
            <Quote className="w-3 h-3 mr-1" />
            SUCCESS STORIES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real Results from Real People
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of professionals who transformed their QA careers.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-strong hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="text-5xl mb-4 opacity-20">"</div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                ))}
              </div>
              
              {/* Quote Text */}
              <p className="text-foreground mb-6 leading-relaxed text-base">
                {testimonial.text}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-lg">
                  {testimonial.icon}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
