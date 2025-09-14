"use client";
import { createContext } from "react";

type setModalState = (b: boolean | ((b: boolean) => boolean)) => void;
interface IModalsContext {
  openMenu: boolean;
  setOpenMenu: setModalState;
}

export const ModalsContext = createContext({} as IModalsContext);
