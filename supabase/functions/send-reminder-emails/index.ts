import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

const catchySubjects = [
  "🚀 Don't Miss Out! Confirm Your Playwright Journey Today",
  "⚡ Your Awesome Testing Career Awaits - Just One Click Away!",
  "🎯 Unlock Your Playwright Potential - Verify Your Email Now",
  "✨ Almost There! Complete Your Playwright Mastery Registration",
  "🔥 Your Future as a Testing Pro Starts Here - Confirm Now!",
  "💡 Don't Let This Opportunity Slip Away - Verify Your Email",
  "🌟 Join Thousands of Awesome Testers - Confirm Your Subscription",
  "⏰ Last Chance Reminder: Confirm Your Playwright Course Access",
  "🎓 Your Path to Testing Excellence - One Click to Confirm",
  "💪 Become the Playwright Expert You're Meant to Be - Verify Now"
];

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get all unconfirmed subscriptions older than 1 day
    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);

    const { data: unconfirmedSubs, error: fetchError } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('is_confirmed', false)
      .not('confirmation_token', 'is', null)
      .lt('created_at', oneDayAgo.toISOString());

    if (fetchError) {
      console.error('Error fetching unconfirmed subscriptions:', fetchError);
      throw fetchError;
    }

    if (!unconfirmedSubs || unconfirmedSubs.length === 0) {
      console.log('No unconfirmed subscriptions to process');
      return new Response(
        JSON.stringify({ message: 'No unconfirmed subscriptions found' }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Found ${unconfirmedSubs.length} unconfirmed subscriptions`);

    const emailPromises = unconfirmedSubs.map(async (sub, index) => {
      const confirmationUrl = `${Deno.env.get('SUPABASE_URL')}/functions/v1/confirm-subscription?token=${sub.confirmation_token}&email=${encodeURIComponent(sub.email)}&framework=${sub.framework_id}`;
      
      // Select a catchy subject based on index
      const subject = catchySubjects[index % catchySubjects.length];

      try {
        await resend.emails.send({
          from: "Playwright Academy <onboarding@resend.dev>",
          to: [sub.email],
          subject: subject,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1 style="color: #4F46E5;">🎯 Don't Miss Your Chance!</h1>
              <p style="font-size: 16px; color: #333;">
                We noticed you haven't confirmed your subscription yet. You're just one click away from starting your journey to becoming an awesome Playwright tester!
              </p>
              
              <div style="background-color: #FEF3C7; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <h2 style="color: #D97706; margin-top: 0;">What You're Missing:</h2>
                <ul style="color: #333;">
                  <li>30 days of expert Playwright training</li>
                  <li>Daily practical examples and exercises</li>
                  <li>Enterprise-ready testing patterns</li>
                  <li>Join a community of awesome testers</li>
                </ul>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${confirmationUrl}" 
                   style="background-color: #4F46E5; color: white; padding: 15px 40px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold; font-size: 16px;">
                  Confirm My Subscription Now
                </a>
              </div>
              
              <p style="color: #666; font-size: 14px; text-align: center;">
                This is a friendly reminder. If you're not interested, you can safely ignore this email.
              </p>
            </div>
          `,
        });
        
        console.log(`Reminder sent to: ${sub.email}`);
        return { success: true, email: sub.email };
      } catch (error) {
        console.error(`Failed to send reminder to ${sub.email}:`, error);
        return { success: false, email: sub.email, error };
      }
    });

    const results = await Promise.all(emailPromises);
    const successCount = results.filter(r => r.success).length;

    console.log(`Sent ${successCount} out of ${unconfirmedSubs.length} reminder emails`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        processed: unconfirmedSubs.length,
        sent: successCount,
        results 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error in send-reminder-emails:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
