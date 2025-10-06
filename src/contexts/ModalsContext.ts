"use client";
import { createContext } from "react";

type setModalState = (b: boolean | ((b: boolean) => boolean)) => void;
interface IModalsContext {
  openMenu: boolean;
  setOpenMenu: setModalState;
  openLoginModal: boolean;
  setOpenLoginModal: setModalState;
  openRegModal: boolean;
  setOpenRegModal: setModalState;
  openCart: boolean;
  setOpenCart: setModalState;
}

export const ModalsContext = createContext({} as IModalsContext);
