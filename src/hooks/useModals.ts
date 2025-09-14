"use client";

import { ModalsContext } from "@/contexts/ModalsContext";
import { useContext } from "react";

export const useModals = () => useContext(ModalsContext);
