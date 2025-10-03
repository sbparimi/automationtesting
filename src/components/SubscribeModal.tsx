import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const SubscribeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show modal after a short delay when page loads
    const timer = setTimeout(() => {
      const hasSeenModal = localStorage.getItem("hasSeenSubscribeModal");
      if (!hasSeenModal) {
        setIsOpen(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { error: dbError } = await supabase
        .from("subscriptions")
        .insert({ 
          email, 
          framework_id: "playwright-mastery"
        });

      if (dbError) throw dbError;

      const { error: emailError } = await supabase.functions.invoke("send-course-email", {
        body: { 
          email, 
          frameworkId: "playwright-mastery", 
          frameworkName: "Playwright Mastery" 
        },
      });

      if (emailError) throw emailError;

      setIsSubscribed(true);
      localStorage.setItem("hasSeenSubscribeModal", "true");
      
      toast({
        title: "Almost There!",
        description: "Please verify your email to confirm your subscription.",
      });
    } catch (error: any) {
      toast({
        title: "Subscription Failed",
        description: error.message,
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

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Subscribe to Become an Awesome Playwright Tester
          </DialogTitle>
        </DialogHeader>
        
        {!isSubscribed ? (
          <div className="space-y-4 pt-4">
            <p className="text-center text-muted-foreground">
              Please enter your active email below
            </p>
            
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="w-full"
              />
              
              <Button 
                onClick={handleSubscribe} 
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
          </div>
        ) : (
          <div className="py-6 text-center">
            <div className="text-6xl mb-4">📧</div>
            <p className="text-lg font-semibold mb-2">Check Your Email!</p>
            <p className="text-muted-foreground">
              Please verify your email to confirm your subscription.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
