import Image from "next/image";
import styles from "./HeroSection.module.css";

// add media query for smaller screens, changing the hero image

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <Image src="/vanHeroUpdated.png" alt="ryans image" width={1200} height={600} className={styles.heroImage} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.heading}>Professional Rubbish Removal & Clearances in and around Bristol.</h1>
      </div>
    </section>
  );
}
