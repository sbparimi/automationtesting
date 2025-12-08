-- Create admin user profile if not exists (will be created on signup, this ensures admin role)
-- First, let's create a function to auto-grant admin role for specific email
CREATE OR REPLACE FUNCTION public.auto_grant_admin_role()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    -- Auto-grant admin role for the admin email
    IF NEW.email = 'suresh.parimi2@gmail.com' THEN
        INSERT INTO public.user_roles (user_id, role)
        VALUES (NEW.id, 'admin')
        ON CONFLICT (user_id, role) DO NOTHING;
    END IF;
    RETURN NEW;
END;
$$;

-- Create trigger to auto-grant admin on profile creation
DROP TRIGGER IF EXISTS auto_grant_admin_on_profile_create ON public.profiles;
CREATE TRIGGER auto_grant_admin_on_profile_create
    AFTER INSERT ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.auto_grant_admin_role();