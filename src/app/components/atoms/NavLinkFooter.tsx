import Link from "next/link";
import styles from "./NavLinkFooter.module.css";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <u className={styles.navLink}>
      <Link href={href}>{children}</Link>
    </u>
  );
}
