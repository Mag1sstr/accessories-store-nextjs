"use client";
import styles from "./MobileNav.module.css";
import { useModals } from "@/hooks/useModals";
import { useRef } from "react";
import CategoryList from "@/components/ui/CategoryList/CategoryList";
function MobileNav() {
  const { openMobileNav, setOpenMobileNav } = useModals();

  return (
    <div className={`${styles.wrapper} ${openMobileNav && styles.open}`}>
      <CategoryList mobile />
    </div>
  );
}

export default MobileNav;
