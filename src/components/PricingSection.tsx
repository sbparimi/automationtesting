import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Check, Crown, Sparkles } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

export const PricingSection = () => {
  const whatsappNumber = "31616270233";
  const whatsappMessage = encodeURIComponent(
    "Hi! I'd like to subscribe to QAForge Pro (€2.99/week)."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-20 bg-background" id="pricing">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Start growing your QA career today!
          </h2>
          
          {/* Urgency Banner */}
          <div className="inline-flex items-center gap-2 urgency-banner px-6 py-3 rounded-full text-foreground font-medium animate-urgency">
            <Sparkles className="w-5 h-5 text-primary" />
            <span>60% discount reserved for: </span>
            <CountdownTimer initialMinutes={10} />
          </div>
        </div>
        
        {/* Single Pricing Card */}
        <div className="bg-card border-2 border-primary rounded-3xl p-8 shadow-xl max-w-md mx-auto mb-8">
          <div className="text-center">
            <Badge className="bg-primary text-primary-foreground mb-4">
              FLAT FEE - BEST VALUE
            </Badge>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">Weekly Access</h3>
            
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-5xl font-bold text-foreground">€2.99</span>
              <span className="text-muted-foreground text-lg">/week</span>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Full access to all courses • Cancel anytime
            </p>
            
            <div className="space-y-3 text-left mb-8">
              <div className="flex items-center gap-3 text-foreground">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>5 FREE lessons per course to try</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Full access to all 500+ premium lessons</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>TypeScript, Playwright, Cypress, AI in QA</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Test Management & Frameworks courses</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Production-grade code examples</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Junior to Director career path</span>
              </div>
            </div>
            
            <Button
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all gap-3"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <MessageCircle className="w-6 h-6" />
              Subscribe via WhatsApp
            </Button>
          </div>
        </div>
        
        {/* Money-back guarantee note */}
        <p className="text-center text-muted-foreground">
          30-day money-back guarantee • Secure payment
        </p>
      </div>
    </section>
  );
};
