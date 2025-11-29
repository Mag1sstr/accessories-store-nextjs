import { useAuth } from "@/hooks/useAuth";

export const isAdmin = () => {
  if (typeof window === "undefined") return null;
  const { user } = useAuth();

  console.log(process.env.NEXT_PUBLIC_ADMIN_EMAIL);

  return user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;
};
