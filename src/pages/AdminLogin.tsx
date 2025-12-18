import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { Shield, Loader2, ArrowLeft, Lock } from "lucide-react";
import { Link } from "react-router-dom";

// Admin email - stored securely, only this email can access admin panel
const ADMIN_EMAIL = "suresh.parimi2@gmail.com";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { user, isAdmin, signIn, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // If already logged in as admin, redirect to admin panel
    if (!loading && user && isAdmin) {
      navigate("/admin");
    }
  }, [user, isAdmin, loading, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate admin email before even attempting login
    if (email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      setError("Access denied. This login is restricted to authorized administrators only.");
      toast.error("Access denied. Admin credentials required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error: signInError } = await signIn(email, password);
      
      if (signInError) {
        if (signInError.message.includes("Invalid login credentials")) {
          setError("Invalid password. Please try again.");
        } else {
          setError(signInError.message);
        }
        toast.error("Login failed");
      } else {
        toast.success("Admin login successful");
        navigate("/admin");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      toast.error("Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-destructive/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <Card className="border-2 border-destructive/20 shadow-xl">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-destructive to-destructive/80 flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-destructive-foreground" />
            </div>
            <CardTitle className="text-2xl font-bold">Admin Access</CardTitle>
            <CardDescription className="flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              Restricted Area - Authorized Personnel Only
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Admin Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter admin email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-border focus:border-destructive"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-border focus:border-destructive"
                />
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-destructive hover:bg-destructive/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4 mr-2" />
                    Admin Login
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-xs text-center text-muted-foreground">
                This portal is exclusively for QAForge administrators.
                <br />
                Unauthorized access attempts are logged and monitored.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
