import styles from "./ContactInfo.module.css"

export default function ContactInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.phone}>
        <span className={styles.phoneIcon}>📞</span>
        07123456789
      </div>
      <div className={styles.quote}>Get a free quote</div>
    </div>
  )
}
