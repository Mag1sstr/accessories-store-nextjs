import { NAV_ITEMS } from "@/components/HeaderNav/HeaderNav";
import styles from "./MobileNav.module.css";
import Link from "next/link";
import { useModals } from "@/hooks/useModals";
import CloseBtn from "@/components/CloseBtn/CloseBtn";
function MobileNav() {
  const { openMobileNav, setOpenMobileNav } = useModals();
  return (
    <div className={`${styles.wrapper} ${openMobileNav && styles.open}`}>
      <CloseBtn onClick={() => setOpenMobileNav(false)} />
      <ul className={styles.col}>
        {NAV_ITEMS.map(({ title, href }) => (
          <Link key={title} href={href}>
            <li className={styles.colItem}>{title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default MobileNav;
