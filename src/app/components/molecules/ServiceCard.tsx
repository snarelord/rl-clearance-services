import Button from "../atoms/Button";
import styles from "./ServiceCard.module.css";

// update to handle images
interface ServiceCardProps {
  title: string;
  services: string[];
}

export default function ServiceCard({ title, services }: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.priceContainer}>
        {/* <span className={styles.price}>£{price}</span> */}
        {/* <span className={styles.priceUnit}>/job</span> */}
      </div>
      <ul className={styles.servicesList}>
        {services.map((service, index) => (
          <li key={index} className={styles.serviceItem}>
            <span className={styles.bullet}></span>
            {service}
          </li>
        ))}
      </ul>
      <div className={styles.buttonContainer}>
        <Button>View Service</Button>
      </div>
    </div>
  );
}
