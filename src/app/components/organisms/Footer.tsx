import styles from "./Footer.module.css";
import NavLinkFooter from "../atoms/NavLinkFooter";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.content}>
          © 2024 RL Clearance Services | Contact: 07123456789 | Bristol & Surrounding Areas | Fully Licensed & Insured |
          Environmental Waste Disposal
        </p>
        <NavLinkFooter href="/privacyPolicy">Privacy Policy</NavLinkFooter>
      </div>
    </footer>
  );
}
