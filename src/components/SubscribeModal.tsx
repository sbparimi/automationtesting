import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { X } from "lucide-react";

const emailSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email is too long")
    .toLowerCase(),
});

export const SubscribeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show modal after 5 seconds when page loads (less aggressive)
    const timer = setTimeout(() => {
      const hasSeenModal = localStorage.getItem("hasSeenSubscribeModal");
      if (!hasSeenModal) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = async () => {
    // Validate email using zod
    const validation = emailSchema.safeParse({ email });
    
    if (!validation.success) {
      toast({
        title: "Invalid Email",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    const validatedEmail = validation.data.email;
    setIsLoading(true);

    try {
      // Check if already subscribed
      const { data: existing } = await supabase
        .from("subscriptions")
        .select("id, is_confirmed")
        .eq("email", validatedEmail)
        .eq("framework_id", "playwright-mastery")
        .maybeSingle();

      if (existing) {
        if (existing.is_confirmed) {
          toast({
            title: "Already Subscribed",
            description: "You're already subscribed to this course!",
          });
          setIsOpen(false);
          return;
        } else {
          toast({
            title: "Confirmation Pending",
            description: "Please check your email to confirm your subscription.",
          });
          setIsSubscribed(true);
          return;
        }
      }

      // Insert new subscription
      const { error: dbError } = await supabase
        .from("subscriptions")
        .insert({ 
          email: validatedEmail, 
          framework_id: "playwright-mastery"
        });

      if (dbError) throw dbError;

      // Send confirmation email
      const { error: emailError } = await supabase.functions.invoke("send-course-email", {
        body: { 
          email: validatedEmail, 
          frameworkId: "playwright-mastery", 
          frameworkName: "Playwright Mastery" 
        },
      });

      if (emailError) throw emailError;

      setIsSubscribed(true);
      
      toast({
        title: "Check Your Email! 📧",
        description: "We've sent you a confirmation link. Please verify your email.",
      });
    } catch (error: any) {
      console.error("Subscription error:", error);
      toast({
        title: "Subscription Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenSubscribeModal", "true");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading && !isSubscribed) {
      handleSubscribe();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent hideClose className="sm:max-w-lg border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <DialogHeader className="space-y-3">
          <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center animate-pulse-glow">
            <span className="text-3xl">🎯</span>
          </div>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
            Become an Awesome Playwright Tester
          </DialogTitle>
          <DialogDescription className="text-center text-base text-muted-foreground">
            Join our 30-day email course and master Playwright testing!
          </DialogDescription>
        </DialogHeader>
        
        {!isSubscribed ? (
          <div className="space-y-6 pt-2">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-2">
              <h3 className="font-semibold text-sm flex items-center gap-2">
                <span className="text-lg">✨</span> What you'll get:
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1 pl-6">
                <li className="list-disc">Daily lessons for 30 days</li>
                <li className="list-disc">5+ practical examples per day</li>
                <li className="list-disc">Enterprise-ready patterns</li>
                <li className="list-disc">Hands-on exercises</li>
              </ul>
            </div>

            <div className="space-y-3">
              <label htmlFor="email" className="text-sm font-medium">
                Enter your active email address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="w-full h-11 border-2 focus:border-primary transition-colors"
                autoComplete="email"
                aria-label="Email address"
              />
              
              <Button 
                onClick={handleSubscribe} 
                disabled={isLoading || !email}
                className="w-full h-11 bg-gradient-to-r from-primary to-primary-hover hover:opacity-90 transition-all font-semibold text-base shadow-md hover:shadow-lg"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⏳</span> Subscribing...
                  </span>
                ) : (
                  "Subscribe Now"
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Free course • Unsubscribe anytime • No spam, ever
              </p>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-success/10 flex items-center justify-center animate-bounce">
              <span className="text-5xl">📧</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-success">Check Your Email!</h3>
              <p className="text-muted-foreground max-w-sm mx-auto">
                We've sent a confirmation link to <strong className="text-foreground">{email}</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                Click the link to verify your subscription and start your learning journey.
              </p>
            </div>
            
            <div className="pt-4 border-t border-border mt-6">
              <p className="text-xs text-muted-foreground mb-3">
                Didn't receive the email?
              </p>
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  onClick={() => setIsSubscribed(false)}
                  className="w-full"
                >
                  Try Another Email
                </Button>
                <Button
                  variant="ghost"
                  onClick={handleClose}
                  className="w-full"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
