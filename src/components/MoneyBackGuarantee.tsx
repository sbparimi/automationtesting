import { Shield, CheckCircle2 } from "lucide-react";

export const MoneyBackGuarantee = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Badge */}
          <div className="flex-shrink-0">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 rounded-full border-4 border-foreground/80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs font-bold text-foreground/60 tracking-wider">100% MONEY BACK</div>
                  <div className="text-5xl font-bold text-foreground">30</div>
                  <div className="text-sm font-bold text-foreground">DAYS</div>
                  <div className="text-xs font-bold text-foreground/60 tracking-wider">GUARANTEE</div>
                </div>
              </div>
              {/* Decorative stars */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-foreground/80 rotate-45" />
                ))}
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-foreground/80 rotate-45" />
                ))}
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              100% Money-Back Guarantee
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe that our plan will bring you clear results in just 4 weeks! We are even willing to return your money if you don't see any noticeable progress and can prove that you followed our plan. Please double check our Terms of Use to understand the requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>No questions asked</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Full refund within 30 days</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
