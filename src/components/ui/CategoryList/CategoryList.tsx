"use client";
import { usePathname, useRouter } from "next/navigation";
import styles from "./CategoryList.module.css";
import { NAV_ITEMS } from "@/components/HeaderNav/HeaderNav";
interface IProps {
  mobile?: boolean;
}
function CategoryList({ mobile }: IProps) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <ul className={`${styles.links} ${mobile && styles.mobile}`}>
      {NAV_ITEMS.map((item, i) => (
        <li
          className={`${styles.link} ${
            pathname === item.href.replace("/", "") && styles.linkActive
          }`}
          key={item.title}
          onClick={() => router.push(item.href)}
        >
          {i === 0 && <img src="/assets/icons/fire.png/" alt="icon" />}
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
