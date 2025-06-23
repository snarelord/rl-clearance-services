import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About</h2>
        <div className={styles.content}>
          <p className={styles.paragraph}>
            RL Clearance Services provides professional rubbish removal and clearance services throughout Bristol and
            the surrounding areas. We specialise in house clearances, garden waste removal, and commercial clearances
            with a commitment to environmental responsibility.
          </p>
          <p className={styles.paragraph}>
            Our experienced team handles everything from single item collections to full property clearances, ensuring
            all waste is disposed of legally and ethically.
          </p>
          <p className={styles.paragraph}>
            We pride ourselves on our reliable, efficient service and competitive pricing. All our work is fully insured
            and we provide same-day quotes.
          </p>
          <p className={styles.paragraph}>
            Whether you're moving house, renovating, or need regular commercial waste collection, we're here to help
            with a professional and friendly service.
          </p>
          <p className={styles.paragraph}>
            Contact us today for your free, no-obligation quote and see why we're Bristol's trusted clearance
            specialists.
          </p>
        </div>
      </div>
    </section>
  );
}
