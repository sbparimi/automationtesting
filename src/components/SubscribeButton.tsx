import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Email validation schema
const emailSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email is too short")
    .max(255, "Email is too long")
    .trim()
    .toLowerCase(),
});

interface SubscribeButtonProps {
  frameworkId: string;
  frameworkName: string;
}

export const SubscribeButton = ({ frameworkId, frameworkName }: SubscribeButtonProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async () => {
    // Validate email with Zod
    const validationResult = emailSchema.safeParse({ email: email.trim() });
    
    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors[0]?.message || "Invalid email";
      toast({
        title: "Invalid Email",
        description: errorMessage,
        variant: "destructive",
      });
      return;
    }

    const validatedEmail = validationResult.data.email;
    setIsLoading(true);

    try {
      // Generate confirmation token on client side
      const confirmationToken = crypto.randomUUID();

      // Insert subscription record with token
      const { error: dbError } = await supabase
        .from("subscriptions")
        .insert({ 
          email: validatedEmail, 
          framework_id: frameworkId,
          confirmation_token: confirmationToken,
          is_confirmed: false
        });

      if (dbError) {
        console.error("Database error:", dbError);
        throw new Error("Failed to create subscription");
      }

      const { error: emailError } = await supabase.functions.invoke("send-course-email", {
        body: { email: validatedEmail, frameworkId, frameworkName },
      });

      if (emailError) {
        console.error("Email error:", emailError);
        throw new Error("Failed to send confirmation email");
      }

      toast({
        title: "Subscribed!",
        description: "Check your email to confirm your subscription.",
      });
      setEmail("");
    } catch (error: any) {
      toast({
        title: "Subscription Failed",
        description: error.message || "Please try again",
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