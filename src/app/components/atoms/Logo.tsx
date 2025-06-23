import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <div className={styles.logoText}>RL</div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.line}>CLEARANCE</div>
        <div className={styles.line}>SERVICES</div>
      </div>
    </div>
  );
}
