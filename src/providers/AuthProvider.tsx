"use client";
import { useGetUserQuery } from "@/api/api";
import { useAuth } from "@/hooks/useAuth";
import { logoutUser, setUser } from "@/store/slices/authSlice";
import { useAppDispatch } from "@/store/store";
import { useEffect } from "react";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const { token } = useAuth();

  const { data, isSuccess, isError } = useGetUserQuery(null, {
    skip: !token,
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUser(data));
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) {
      dispatch(logoutUser());
    }
  }, [isError]);

  return <> {children}</>;
}

export default AuthProvider;
