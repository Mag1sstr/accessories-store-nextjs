import { useAuth } from "@/hooks/useAuth";

export const isAdmin = () => {
  if (typeof window === "undefined") return null;

  const { user } = useAuth();

  return user?.role === "admin";
};
