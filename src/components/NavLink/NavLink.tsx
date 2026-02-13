import styles from "./NavLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function NavLink({ href, children, className }: IProps) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${className} ${href === pathname && styles.active}`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
