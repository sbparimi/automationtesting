import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Crown, MessageCircle, Zap, BookOpen, Award } from "lucide-react";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerSource?: string;
}

export const UpgradeModal = ({ isOpen, onClose, triggerSource }: UpgradeModalProps) => {
  const whatsappNumber = "31616270233";
  const whatsappMessage = encodeURIComponent(
    `Hi! I'd like to upgrade to QAForge Pro ($2.99/month). ${triggerSource ? `I was viewing: ${triggerSource}` : ''}`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const features = [
    { icon: BookOpen, text: "Access to all 500+ premium lessons" },
    { icon: Zap, text: "AI in QA complete curriculum" },
    { icon: Award, text: "Test Management (TMAP Next)" },
    { icon: Crown, text: "Director-level leadership content" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-2 border-primary/30 bg-gradient-to-br from-background via-background to-primary/5">
        <DialogHeader className="space-y-3">
          <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center shadow-glow">
            <Crown className="w-8 h-8 text-primary-foreground" />
          </div>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center">
            Unlock <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">Premium</span> Access
          </DialogTitle>
          <DialogDescription className="text-center text-base text-muted-foreground">
            Get unlimited access to all courses and content
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {/* Pricing */}
          <div className="text-center bg-primary/5 border border-primary/20 rounded-2xl p-6">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-bold text-foreground">€2.99</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <Badge variant="secondary" className="mt-2 bg-primary/10 text-primary border-primary/20">
              Cancel anytime
            </Badge>
          </div>

          {/* Features */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <Button 
            className="w-full h-12 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-base gap-2 rounded-xl shadow-lg hover:shadow-xl transition-all"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            <MessageCircle className="w-5 h-5" />
            Upgrade via WhatsApp
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Secure payment • Instant access • 24/7 support
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
