import Link from "next/link";
import styles from "./NavLink.module.css";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className={styles.navLink}>
      {children}
    </Link>
  );
}
