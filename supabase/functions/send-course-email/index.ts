import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Send course email function invoked');
    
    const { email, frameworkId, frameworkName } = await req.json();
    console.log('Request payload:', { email, frameworkId, frameworkName });

    // Check if RESEND_API_KEY is configured
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured');
      throw new Error('Email service is not configured. Please contact support.');
    }

    // Generate confirmation token
    const confirmationToken = crypto.randomUUID();
    console.log('Generated confirmation token');
    
    // Store token in database
    const { error: updateError } = await supabase
      .from('subscriptions')
      .update({ confirmation_token: confirmationToken })
      .eq('email', email)
      .eq('framework_id', frameworkId);

    if (updateError) {
      console.error('Error updating confirmation token:', updateError);
      throw new Error('Failed to update subscription');
    }
    console.log('Successfully updated confirmation token in database');

    const confirmationUrl = `${Deno.env.get('SUPABASE_URL')}/functions/v1/confirm-subscription?token=${confirmationToken}&email=${encodeURIComponent(email)}&framework=${frameworkId}`;

    // Using Resend's default email (works without domain verification)
    // To use your own domain, set FROM_EMAIL environment variable
    const fromEmail = Deno.env.get("FROM_EMAIL") || "Playwright Academy <onboarding@resend.dev>";
    
    console.log('Attempting to send email with Resend');
    const emailResponse = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: `Confirm Your Subscription - ${frameworkName} Course`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333;">Confirm Your Email</h1>
          <p>Thank you for subscribing to the <strong>${frameworkName}</strong> 30-Day Course!</p>
          
          <p>Please confirm your email address to start receiving daily lessons:</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${confirmationUrl}" 
               style="background-color: #4F46E5; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Confirm Subscription
            </a>
          </div>
          
          <p style="color: #666; font-size: 14px;">If you didn't subscribe to this course, you can safely ignore this email.</p>
          
          <p>Best regards,<br>The Playwright Academy Team</p>
        </div>
      `,
    });

    console.log("Email sent successfully:", JSON.stringify(emailResponse));

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error in send-course-email:", error);
    console.error("Error stack:", error.stack);
    return new Response(JSON.stringify({ 
      error: error.message,
      details: error.toString() 
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});