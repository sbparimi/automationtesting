import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

serve(async (req: Request): Promise<Response> => {
  try {
    const url = new URL(req.url);
    const token = url.searchParams.get('token');
    const email = url.searchParams.get('email');
    const frameworkId = url.searchParams.get('framework');

    if (!token || !email || !frameworkId) {
      return new Response('Invalid confirmation link', { status: 400 });
    }

    // Verify token and update subscription
    const { data: subscription, error: fetchError } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('email', email)
      .eq('framework_id', frameworkId)
      .eq('confirmation_token', token)
      .single();

    if (fetchError || !subscription) {
      return new Response('Invalid or expired confirmation link', { status: 400 });
    }

    if (subscription.is_confirmed) {
      return new Response('Email already confirmed. You can close this window.', { 
        status: 200,
        headers: { 'Content-Type': 'text/html' }
      });
    }

    // Update subscription to confirmed
    const { error: updateError } = await supabase
      .from('subscriptions')
      .update({ 
        is_confirmed: true,
        confirmation_token: null 
      })
      .eq('email', email)
      .eq('framework_id', frameworkId);

    if (updateError) {
      console.error('Error confirming subscription:', updateError);
      return new Response('Error confirming subscription', { status: 500 });
    }

    const frameworkNames: Record<string, string> = {
      'bdd-advanced-factory': 'BDD Advanced Factory Pattern',
      'pom': 'Page Object Model',
      'keyword-driven': 'Keyword-Driven Framework',
      'data-driven': 'Data-Driven Framework',
      'hybrid': 'Hybrid Framework',
      'api-testing': 'API Testing Framework'
    };

    const frameworkName = frameworkNames[frameworkId] || frameworkId;

    // Send welcome email
    await resend.emails.send({
      from: "BDD Academy <onboarding@resend.dev>",
      to: [email],
      subject: `Welcome to ${frameworkName} - 30 Day Course`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h1 style="color: #4F46E5; margin-bottom: 20px;">🎉 Welcome to the ${frameworkName} Course!</h1>
            
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              Thank you for confirming your subscription! You're about to embark on an exciting 30-day learning journey.
            </p>

            <div style="background-color: #EEF2FF; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h2 style="color: #4F46E5; font-size: 20px; margin-top: 0;">📚 What You'll Get:</h2>
              <ul style="color: #333; line-height: 1.8;">
                <li><strong>30 Days of Progressive Learning</strong> - From basics to advanced concepts</li>
                <li><strong>Daily Email Lessons</strong> - Delivered straight to your inbox every day</li>
                <li><strong>5+ Practical Examples per Day</strong> - Real-world Playwright implementations</li>
                <li><strong>Hands-on Exercises</strong> - Practice what you learn immediately</li>
                <li><strong>Enterprise-Ready Patterns</strong> - Production-grade code examples</li>
                <li><strong>Complete Implementation Guide</strong> - Step-by-step tutorials</li>
              </ul>
            </div>

            <div style="background-color: #FEF3C7; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h2 style="color: #D97706; font-size: 20px; margin-top: 0;">🎯 How It Works:</h2>
              <ol style="color: #333; line-height: 1.8;">
                <li><strong>Daily Emails:</strong> You'll receive one email each day at 9:00 AM</li>
                <li><strong>Progressive Learning:</strong> Topics build on previous days' lessons
                  <ul>
                    <li>Days 1-10: Beginner concepts and fundamentals</li>
                    <li>Days 11-20: Intermediate patterns and techniques</li>
                    <li>Days 21-30: Advanced implementations and best practices</li>
                  </ul>
                </li>
                <li><strong>Practice Daily:</strong> Spend 30-60 minutes implementing each day's examples</li>
                <li><strong>Build Your Project:</strong> By day 30, you'll have a complete framework implementation</li>
              </ol>
            </div>

            <div style="background-color: #DBEAFE; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h2 style="color: #1E40AF; font-size: 20px; margin-top: 0;">✅ What to Do Daily:</h2>
              <ul style="color: #333; line-height: 1.8;">
                <li>📧 <strong>Read the daily email</strong> - Understand the purpose and context</li>
                <li>💡 <strong>Review the concept</strong> - Study the explanation and diagrams</li>
                <li>💻 <strong>Try the examples</strong> - Implement the 5 Playwright examples in your own project</li>
                <li>🔧 <strong>Practice & Experiment</strong> - Modify the code to fit your use cases</li>
                <li>📝 <strong>Take notes</strong> - Document key learnings and insights</li>
              </ul>
            </div>

            <div style="background-color: #F3F4F6; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #333; margin-top: 0;">⏰ Course Schedule:</h3>
              <p style="color: #666; line-height: 1.6;">
                <strong>Start Date:</strong> Tomorrow<br>
                <strong>Duration:</strong> 30 Days<br>
                <strong>Email Delivery:</strong> Daily at 9:00 AM<br>
                <strong>Time Investment:</strong> 30-60 minutes per day
              </p>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <p style="font-size: 18px; color: #4F46E5; font-weight: bold;">
                🚀 Your first lesson arrives tomorrow!
              </p>
              <p style="color: #666;">
                Get ready to master ${frameworkName} with Playwright
              </p>
            </div>

            <div style="border-top: 2px solid #E5E7EB; padding-top: 20px; margin-top: 30px;">
              <p style="color: #666; font-size: 14px;">
                <strong>Pro Tip:</strong> Create a dedicated folder for this course and commit to practicing every day. Consistency is key to mastering these patterns!
              </p>
            </div>

            <p style="color: #666; margin-top: 30px;">
              Happy learning!<br>
              <strong>The BDD Academy Team</strong>
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #9CA3AF; font-size: 12px;">
            <p>You're receiving this email because you subscribed to the ${frameworkName} course.</p>
          </div>
        </div>
      `,
    });

    console.log('Subscription confirmed and welcome email sent to:', email);

    return new Response(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Subscription Confirmed</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              margin: 0;
              background-color: #f9fafb;
            }
            .container {
              background: white;
              padding: 40px;
              border-radius: 10px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              text-align: center;
              max-width: 500px;
            }
            h1 { color: #4F46E5; }
            p { color: #666; line-height: 1.6; }
            .success-icon { font-size: 64px; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="success-icon">✅</div>
            <h1>Subscription Confirmed!</h1>
            <p>Welcome to the ${frameworkName} course!</p>
            <p>Check your email for your welcome message with all the details about your 30-day learning journey.</p>
            <p style="margin-top: 30px; color: #999; font-size: 14px;">You can close this window now.</p>
          </div>
        </body>
      </html>
      `,
      { 
        status: 200,
        headers: { 'Content-Type': 'text/html' }
      }
    );
  } catch (error: any) {
    console.error("Error:", error);
    return new Response(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Error</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              margin: 0;
              background-color: #f9fafb;
            }
            .container {
              background: white;
              padding: 40px;
              border-radius: 10px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              text-align: center;
              max-width: 500px;
            }
            h1 { color: #DC2626; }
            p { color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>⚠️ Error</h1>
            <p>There was an error confirming your subscription. Please try again or contact support.</p>
          </div>
        </body>
      </html>
      `,
      { status: 500, headers: { 'Content-Type': 'text/html' } }
    );
  }
});
