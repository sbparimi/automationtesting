-- Fix Critical Security Issues: RLS Policies for subscriptions table

-- Step 1: Drop all existing vulnerable policies
DROP POLICY IF EXISTS "Users can view their own subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "Users can update their own subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "Anyone can subscribe" ON public.subscriptions;

-- Step 2: Create secure policies

-- Allow public INSERT with validation
CREATE POLICY "Public can insert subscriptions with validation"
  ON public.subscriptions 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (
    email IS NOT NULL 
    AND length(email) >= 5
    AND length(email) <= 255 
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND framework_id IS NOT NULL
    AND length(framework_id) <= 100
    AND confirmation_token IS NOT NULL
  );

-- Block ALL public SELECT access - only service_role (edge functions) can read
CREATE POLICY "No public read access to subscriptions"
  ON public.subscriptions 
  FOR SELECT 
  TO anon, authenticated
  USING (false);

-- Block ALL public UPDATE access - only service_role can update
CREATE POLICY "No public updates to subscriptions"
  ON public.subscriptions 
  FOR UPDATE 
  TO anon, authenticated
  USING (false);

-- Block ALL public DELETE access
CREATE POLICY "No public deletes on subscriptions"
  ON public.subscriptions 
  FOR DELETE 
  TO anon, authenticated
  USING (false);