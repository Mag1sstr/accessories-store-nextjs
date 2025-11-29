import { useAuth } from "@/hooks/useAuth";

export const isAdmin = () => {
  const { user } = useAuth();

  return user?.email === process.env.ADMIN_EMAIL;
};
