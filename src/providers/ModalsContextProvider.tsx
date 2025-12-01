"use client";
import { ModalsContext } from "@/contexts/ModalsContext";
import { useState } from "react";

function ModalsContextProvider({ children }: { children: React.ReactNode }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegModal, setOpenRegModal] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openAddedModal, setOpenAddedModal] = useState(false);
  const [openCallModal, setOpenCallModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  return (
    <ModalsContext.Provider
      value={{
        openMenu,
        setOpenMenu,
        openLoginModal,
        setOpenLoginModal,
        openRegModal,
        setOpenRegModal,
        openCart,
        setOpenCart,
        openAddedModal,
        setOpenAddedModal,
        openCallModal,
        setOpenCallModal,
        openDeleteModal,
        setOpenDeleteModal,
        openUpdateModal,
        setOpenUpdateModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
}

export default ModalsContextProvider;
