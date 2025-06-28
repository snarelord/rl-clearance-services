import styles from "./GalleryImage.module.css";

interface GalleryImageProps {
  image: string;
}

export default function GalleryImage({ image }: GalleryImageProps) {
  return <img className={styles.galleryImage} src={image} alt="Gallery" />;
}
