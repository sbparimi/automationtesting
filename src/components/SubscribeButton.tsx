import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface SubscribeButtonProps {
  frameworkId: string;
  frameworkName: string;
}

export const SubscribeButton = ({ frameworkId, frameworkName }: SubscribeButtonProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
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
        .insert({ email, framework_id: frameworkId });

      if (dbError) throw dbError;

      const { error: emailError } = await supabase.functions.invoke("send-course-email", {
        body: { email, frameworkId, frameworkName },
      });

      if (emailError) throw emailError;

      toast({
        title: "Subscribed!",
        description: "Check your email to confirm your subscription.",
      });
      setEmail("");
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

  return (
    <div className="flex flex-col gap-2 p-4 bg-secondary/20 rounded-lg">
      <h3 className="font-semibold">Subscribe to 30-Day Course</h3>
      <p className="text-sm text-muted-foreground">Get daily lessons delivered to your inbox</p>
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <Button onClick={handleSubscribe} disabled={isLoading}>
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
    </div>
  );
};