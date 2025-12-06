import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Check, Crown, Sparkles } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

const plans = [
  {
    name: "1-WEEK TRIAL",
    badge: "TRY IT OUT",
    originalPrice: "€1.29",
    price: "€0.89",
    perDay: "per day",
    total: "€6.29 total",
    originalTotal: "€9.09",
    popular: false,
  },
  {
    name: "4-WEEK PLAN",
    badge: "MOST POPULAR",
    originalPrice: "€0.69",
    price: "€0.29",
    perDay: "per day",
    total: "€8.79 total",
    originalTotal: "€20.79",
    popular: true,
  },
  {
    name: "12-WEEK PLAN",
    badge: "BEST VALUE",
    originalPrice: "€0.49",
    price: "€0.19",
    perDay: "per day",
    total: "€17.19 total",
    originalTotal: "€44.19",
    popular: false,
  },
];

export const PricingSection = () => {
  const whatsappNumber = "31616270233";
  const whatsappMessage = encodeURIComponent(
    "Hi! I'd like to subscribe to QAForge Pro (€2.99/month)."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-20 bg-background" id="pricing">
      <div className="max-w-5xl mx-auto px-6">
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
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card bg-card rounded-2xl p-6 shadow-soft ${
                plan.popular ? 'popular ring-2 ring-primary' : 'border border-border'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-xs font-bold py-1 px-3 rounded-full text-center mb-4 -mt-9 mx-auto w-fit">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-lg font-bold text-foreground mb-2">{plan.name}</h3>
              
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.perDay}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm mb-4">
                <span className="line-through text-muted-foreground">{plan.originalTotal}</span>
                <span className="text-foreground font-medium">{plan.total}</span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  <span>5 free lessons per course</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Full access to all 500+ lessons</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Money-back guarantee note */}
        <p className="text-center text-muted-foreground mb-6">
          30-day money-back guarantee
        </p>
        
        {/* Main CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-lg px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all gap-3"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            <MessageCircle className="w-6 h-6" />
            Get Started via WhatsApp
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Continue with other payment options available
          </p>
        </div>
      </div>
    </section>
  );
};
