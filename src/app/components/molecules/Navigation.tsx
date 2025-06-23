import NavLink from "../atoms/NavLink";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#gallery">Gallery</NavLink>
      <NavLink href="/contact">Contact</NavLink>
      <NavLink href="/pricing">Pricing</NavLink>
      <NavLink href="#faq">FAQ</NavLink>
    </nav>
  );
}
