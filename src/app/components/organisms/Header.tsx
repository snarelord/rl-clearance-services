import Logo from "../atoms/Logo";
import Navigation from "../molecules/Navigation";
import ContactInfo from "../molecules/ContactInfo";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <ContactInfo />
        <div className={styles.navSection}>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
