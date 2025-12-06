import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "This has been one of the best learning tools I've used in my professional career. The structured approach to QA automation is exactly what I needed.",
    source: "LinkedIn Review, March 2025",
    icon: "💼",
    bgColor: "bg-card"
  },
  {
    rating: 5,
    text: "Loads of content. Great concept to be able to learn whenever and wherever you want. Ideal scenario for me to just accumulate knowledge and widen my horizons.",
    author: "David Forecast",
    date: "July 2025",
    icon: "⭐",
    bgColor: "bg-card"
  },
  {
    rating: 5,
    text: "There are countless opportunities with this platform and I'm so grateful I found it! I can assure you that you'll have all of the support you need to test like a pro!",
    author: "Sarah Martinez",
    date: "November 2025",
    icon: "🚀",
    bgColor: "bg-card"
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          From our users
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          See what QA professionals are saying about their learning journey
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${testimonial.bgColor} p-6 shadow-soft border border-border animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{testimonial.icon}</div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-foreground mb-4 leading-relaxed">
                {testimonial.text}
              </p>
              
              {/* Author */}
              <p className="text-sm text-muted-foreground">
                {testimonial.author && <span className="font-medium">{testimonial.author} - </span>}
                {testimonial.date || testimonial.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
