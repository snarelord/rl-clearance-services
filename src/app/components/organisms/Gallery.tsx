// preview images of before and after of clearances (show off some big jobs), having own section keeps the page from looking cluttered
// use a toggle to preview before and after images
// if images are low res use ai upscaler
"use client";

import GalleryImage from "../molecules/GalleryImage";
import styles from "./Gallery.module.css";
import { useState } from "react";

export default function Gallery() {
  const beforeImages = [
    "/galleryimagebefore1.jpg",
    "/galleryimagebefore2.jpg",
    "/galleryimagebefore3.jpg",
    "/galleryimagebefore4.jpg",
    "/galleryimagebefore5.jpg",
    "/galleryimagebefore6.jpg",
    "/galleryimagebefore7.jpg",
    "/galleryimagebefore8.jpg",
  ];

  const afterImages = [
    "/galleryimageafter1.jpg",
    "/galleryimageafter2.jpg",
    "/galleryimageafter3.jpg",
    "/galleryimageafter4.jpg",
    "/galleryimageafter5.jpg",
    "/galleryimageafter6.jpg",
    "/galleryimageafter7.jpg",
    "/galleryimageafter8.jpg",
  ];

  const [toggleImages, setToggleImages] = useState<boolean[]>(Array(beforeImages.length).fill(false));

  return (
    <>
      <h1 className={styles.header}>Gallery</h1>
      <div className={styles.galleryContainer}>
        {beforeImages.map((image, index) => {
          return <GalleryImage key={index} image={image} />;
        })}
      </div>
    </>
  );
}
