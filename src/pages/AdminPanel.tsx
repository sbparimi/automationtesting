import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { 
  Loader2, Crown, Search, ArrowLeft, Check, X, Shield, 
  Trash2, UserCog, Users, AlertCircle 
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface UserProfile {
  id: string;
  user_id: string;
  email: string;
  full_name: string | null;
  is_premium: boolean;
  created_at: string;
  premium_enabled_at: string | null;
}

const AdminPanel = () => {
  const navigate = useNavigate();
  const { user, isAdmin, loading } = useAuth();
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserProfile[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [updatingUser, setUpdatingUser] = useState<string | null>(null);
  const [deletingUser, setDeletingUser] = useState<string | null>(null);
  const [editingUser, setEditingUser] = useState<string | null>(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    } else if (!loading && user && !isAdmin) {
      toast.error("Access denied. Admin privileges required.");
      navigate("/");
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchUsers();
    }
  }, [isAdmin]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = users.filter(
        (u) =>
          u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (u.full_name && u.full_name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [searchQuery, users]);

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setUsers((data as unknown as UserProfile[]) || []);
      setFilteredUsers((data as unknown as UserProfile[]) || []);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to load users");
    } finally {
      setLoadingUsers(false);
    }
  };

  const togglePremium = async (userId: string, currentStatus: boolean) => {
    setUpdatingUser(userId);
    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          is_premium: !currentStatus,
          premium_enabled_at: !currentStatus ? new Date().toISOString() : null,
          premium_enabled_by: !currentStatus ? user?.id : null,
        })
        .eq("user_id", userId);

      if (error) throw error;

      setUsers((prev) =>
        prev.map((u) =>
          u.user_id === userId
            ? {
                ...u,
                is_premium: !currentStatus,
                premium_enabled_at: !currentStatus ? new Date().toISOString() : null,
              }
            : u
        )
      );

      toast.success(
        !currentStatus
          ? "Premium access enabled for user"
          : "Premium access revoked"
      );
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Failed to update user status");
    } finally {
      setUpdatingUser(null);
    }
  };

  const updateUserName = async (userId: string) => {
    if (!editName.trim()) {
      toast.error("Name cannot be empty");
      return;
    }
    
    setUpdatingUser(userId);
    try {
      const { error } = await supabase
        .from("profiles")
        .update({ full_name: editName.trim() })
        .eq("user_id", userId);

      if (error) throw error;

      setUsers((prev) =>
        prev.map((u) =>
          u.user_id === userId
            ? { ...u, full_name: editName.trim() }
            : u
        )
      );

      toast.success("User name updated successfully");
      setEditingUser(null);
      setEditName("");
    } catch (error) {
      console.error("Error updating user name:", error);
      toast.error("Failed to update user name");
    } finally {
      setUpdatingUser(null);
    }
  };

  const deleteUser = async (profile: UserProfile) => {
    setDeletingUser(profile.user_id);
    try {
      // Delete from profiles table (this should cascade due to RLS)
      const { error } = await supabase
        .from("profiles")
        .delete()
        .eq("user_id", profile.user_id);

      if (error) throw error;

      setUsers((prev) => prev.filter((u) => u.user_id !== profile.user_id));
      toast.success("User profile deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user. Note: Full user deletion requires backend admin access.");
    } finally {
      setDeletingUser(null);
    }
  };

  if (loading || loadingUsers) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  const premiumUsers = users.filter((u) => u.is_premium);
  const freeUsers = users.filter((u) => !u.is_premium);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <Card className="border-2 border-primary/20 shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold">Admin Panel</CardTitle>
                <CardDescription>
                  Manage user subscriptions - Enable/Revoke Premium, Update, Delete users
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-primary" />
                    <div>
                      <div className="text-3xl font-bold text-primary">
                        {users.length}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Users</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-green-500/10 border-green-500/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Crown className="w-8 h-8 text-green-600" />
                    <div>
                      <div className="text-3xl font-bold text-green-600">
                        {premiumUsers.length}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Paid Users
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-yellow-500/10 border-yellow-500/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-8 h-8 text-yellow-600" />
                    <div>
                      <div className="text-3xl font-bold text-yellow-600">
                        {freeUsers.length}
                      </div>
                      <div className="text-sm text-muted-foreground">Unpaid Users</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by email or name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Users Table */}
            <div className="border rounded-lg overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">User</TableHead>
                    <TableHead className="font-semibold">Email</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold">Joined</TableHead>
                    <TableHead className="font-semibold">Premium Since</TableHead>
                    <TableHead className="text-right font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        No users found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredUsers.map((profile) => (
                      <TableRow key={profile.id} className="hover:bg-muted/30">
                        <TableCell>
                          {editingUser === profile.user_id ? (
                            <div className="flex items-center gap-2">
                              <Input
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                                className="w-40 h-8"
                                placeholder="Enter name"
                              />
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => updateUserName(profile.user_id)}
                                disabled={updatingUser === profile.user_id}
                              >
                                {updatingUser === profile.user_id ? (
                                  <Loader2 className="w-3 h-3 animate-spin" />
                                ) : (
                                  <Check className="w-3 h-3 text-green-600" />
                                )}
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => {
                                  setEditingUser(null);
                                  setEditName("");
                                }}
                              >
                                <X className="w-3 h-3 text-red-500" />
                              </Button>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <span className="font-medium">
                                {profile.full_name || "No name"}
                              </span>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-6 w-6 p-0"
                                onClick={() => {
                                  setEditingUser(profile.user_id);
                                  setEditName(profile.full_name || "");
                                }}
                              >
                                <UserCog className="w-3 h-3 text-muted-foreground" />
                              </Button>
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {profile.email}
                        </TableCell>
                        <TableCell>
                          {profile.is_premium ? (
                            <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                              <Crown className="w-3 h-3 mr-1" />
                              Paid
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-700 border-yellow-500/20">
                              Unpaid
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {new Date(profile.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {profile.premium_enabled_at
                            ? new Date(profile.premium_enabled_at).toLocaleDateString()
                            : "-"}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              size="sm"
                              variant={profile.is_premium ? "outline" : "default"}
                              onClick={() =>
                                togglePremium(profile.user_id, profile.is_premium)
                              }
                              disabled={updatingUser === profile.user_id}
                              className={profile.is_premium ? "border-red-300 text-red-600 hover:bg-red-50" : ""}
                            >
                              {updatingUser === profile.user_id ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : profile.is_premium ? (
                                <>
                                  <X className="w-4 h-4 mr-1" />
                                  Revoke
                                </>
                              ) : (
                                <>
                                  <Check className="w-4 h-4 mr-1" />
                                  Enable
                                </>
                              )}
                            </Button>

                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                  disabled={deletingUser === profile.user_id}
                                >
                                  {deletingUser === profile.user_id ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                  ) : (
                                    <Trash2 className="w-4 h-4" />
                                  )}
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Delete User Profile</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete the profile for{" "}
                                    <strong>{profile.email}</strong>? This action will remove their profile data but not their authentication account.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => deleteUser(profile)}
                                    className="bg-red-500 hover:bg-red-600"
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                  <Crown className="w-3 h-3 mr-1" />
                  Paid
                </Badge>
                <span>= User has paid via WhatsApp and admin enabled access</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-700 border-yellow-500/20">
                  Unpaid
                </Badge>
                <span>= User can only access free lessons (5 per course)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;
