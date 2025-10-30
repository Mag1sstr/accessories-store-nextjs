"use client";
import { useGetUserMutation } from "@/api/api";
import { useAuth } from "@/hooks/useAuth";
import { setUser } from "@/store/slices/authSlice";
import { useAppDispatch } from "@/store/store";
import { useEffect } from "react";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const [getUser] = useGetUserMutation();
  const { token } = useAuth();
  useEffect(() => {
    if (token) {
      getUser(null).then((res) => dispatch(setUser(res.data)));
    }
  }, [token]);
  return <> {children}</>;
}

export default AuthProvider;
