"use client";
import { NAV_ITEMS } from "@/components/HeaderNav/HeaderNav";
import styles from "./MobileNav.module.css";
import Link from "next/link";
import { useModals } from "@/hooks/useModals";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import { useEffect, useRef } from "react";
import CategoryList from "@/components/ui/CategoryList/CategoryList";
function MobileNav() {
  const { openMobileNav, setOpenMobileNav } = useModals();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (openMobileNav) {
      el.style.height = el.scrollHeight + "px";
    } else {
      el.style.height = "0px";
    }
  }, [openMobileNav]);
  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${openMobileNav && styles.open}`}
    >
      {/* <ul className={styles.col}>
        {NAV_ITEMS.map(({ title, href }) => (
          <Link
            onClick={() => setOpenMobileNav(false)}
            className={styles.link}
            key={title}
            href={href}
          >
            <li className={styles.colItem}>{title}</li>
          </Link>
        ))}
        <SocialLinks />
      </ul> */}
      <CategoryList mobile />
    </div>
  );
}

export default MobileNav;
