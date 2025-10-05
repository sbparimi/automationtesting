-- Enable pg_cron and pg_net extensions for scheduled tasks
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Schedule the send-reminder-emails function to run daily at 9:00 AM UTC
SELECT cron.schedule(
  'send-daily-reminder-emails',
  '0 9 * * *', -- Run at 9:00 AM every day
  $$
  SELECT
    net.http_post(
        url:='https://ejovqyyuaetqosodaxau.supabase.co/functions/v1/send-reminder-emails',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqb3ZxeXl1YWV0cW9zb2RheGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyNDE4NDksImV4cCI6MjA3NDgxNzg0OX0.8EOy3LPw93p6oIx0xFaRl9pOB9jjxT55QgkjoS_-b1k"}'::jsonb,
        body:='{"scheduled": true}'::jsonb
    ) as request_id;
  $$
);