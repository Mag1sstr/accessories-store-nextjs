"use client";
import { ModalsContext } from "@/contexts/ModalsContext";
import { useState } from "react";

function ModalsContextProvider({ children }: { children: React.ReactNode }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  return (
    <ModalsContext.Provider
      value={{ openMenu, setOpenMenu, openLoginModal, setOpenLoginModal }}
    >
      {children}
    </ModalsContext.Provider>
  );
}

export default ModalsContextProvider;
