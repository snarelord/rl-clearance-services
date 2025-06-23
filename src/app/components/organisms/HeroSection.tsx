import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="ryans image"
          width={1200}
          height={600}
          className={styles.heroImage}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.heading}>Professional Rubbish Removal & Clearances in and around Bristol.</h1>
      </div>
    </section>
  );
}
