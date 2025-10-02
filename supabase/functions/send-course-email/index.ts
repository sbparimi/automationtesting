import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, frameworkId, frameworkName } = await req.json();

    const emailResponse = await resend.emails.send({
      from: "BDD Academy <onboarding@resend.dev>",
      to: [email],
      subject: `Welcome to ${frameworkName} - 30 Day Course`,
      html: `
        <h1>Welcome to the ${frameworkName} Course!</h1>
        <p>Thank you for subscribing to our comprehensive 30-day learning program.</p>
        
        <h2>What to Expect:</h2>
        <ul>
          <li>Daily lessons covering concepts from basic to advanced</li>
          <li>5+ practical examples per day</li>
          <li>Hands-on practice exercises</li>
          <li>Real-world enterprise scenarios</li>
        </ul>

        <p><strong>Day 1 starts tomorrow!</strong> You'll receive your first lesson covering Gherkin fundamentals.</p>
        
        <p>Please confirm your subscription by clicking the link below:</p>
        <p><a href="${Deno.env.get('SUPABASE_URL')}/confirm?email=${encodeURIComponent(email)}&framework=${frameworkId}">Confirm Subscription</a></p>
        
        <p>Happy learning!<br>The BDD Academy Team</p>
      `,
    });

    console.log("Email sent:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});