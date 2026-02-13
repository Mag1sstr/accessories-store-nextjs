import Link from "next/link";

interface IProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href }: IProps) {
  return <Link href={href}></Link>;
}

export default NavLink;
