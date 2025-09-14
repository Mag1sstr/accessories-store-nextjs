"use client";
import { ModalsContext } from "@/contexts/ModalsContext";
import { useState } from "react";

function ModalsContextProvider({ children }: { children: React.ReactNode }) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <ModalsContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </ModalsContext.Provider>
  );
}

export default ModalsContextProvider;
