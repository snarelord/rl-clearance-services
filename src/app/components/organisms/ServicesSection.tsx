import ServiceCard from "../molecules/ServiceCard";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  const services = [
    {
      title: "House Clearance",
      image: "",
      services: ["Full house clearance", "Furniture removal", "Appliance disposal", "Carpet removal", "Loft clearance"],
    },
    {
      title: "Garden Clearance",
      services: ["Garden waste removal", "Shed clearance", "Fence removal", "Tree cutting", "Soil disposal"],
    },
    {
      title: "Office Clearance",
      services: [
        "Office furniture",
        "IT equipment disposal",
        "Filing cabinet removal",
        "Carpet tiles",
        "Partition walls",
      ],
    },
    {
      title: "Garage Clearance",
      services: ["Garage clearance", "Workshop clearance", "Tool removal", "Scrap metal", "Old tyres"],
    },
    {
      title: "Construction Waste",
      services: ["Rubble removal", "Plasterboard disposal", "Timber waste", "Bathroom suites", "Kitchen units"],
    },
    {
      title: "Commercial Waste",
      services: [
        "Shop clearance",
        "Restaurant equipment",
        "Warehouse clearance",
        "Factory clearance",
        "Retail fixtures",
      ],
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Our Services</h1>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} services={service.services} />
          ))}
        </div>
      </div>
    </section>
  );
}
