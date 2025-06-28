"use client";

import { usePathname } from "next/navigation";
import NavLink from "../atoms/NavLink";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const currentPage = usePathname();
  return (
    <nav className={styles.nav}>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#gallery">Gallery</NavLink>
      <NavLink href="/contact">Contact</NavLink>
      <NavLink href="/pricing">Pricing</NavLink>
      {
        currentPage === "/privacyPolicy" ? <NavLink href="/">Home</NavLink> : <NavLink href="#faq">FAQ</NavLink>
        // show a nav link in the Navigation bar to redirect back to home page (/page) in place for the FAQ link
      }
    </nav>
  );
}
