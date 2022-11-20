import React from "react";
import Layout from "../components/layout/Layout";
import CarouselKitchen from "../components/carousel/carouselkitchen/CarouselKitchen";
import CarouselBathroom from "../components/carousel/carouselbathroom/CarouselBathroom";
import CarouselDoors from "../components/carousel/carouseldoors/CarouselDoors";
import CarouselClosets from "../components/carousel/dulapuri/CarouselClosets";
import CarouselParquet from "../components/carousel/carouselparquet/CarouselParquet";
import CarouselMiscellaneous from "../components/carousel/carouselall/CarouselMiscellaneous";
import Contact from "../components/contact/Contact";
import styles from "./Gallery.module.css";
import ScrollButton from "../utils/ScrollButton";

const Gallery = () => {
  return (
    <Layout>
      <div className={styles.title}>
        <h1>
          &copy;PRO
          <span className="red">MOB</span>{" "}
        </h1>
      </div>
      <article className={styles.gallery}>
        <h3>Muebles de Cocinas</h3>
        <CarouselKitchen />
      </article>
      <article className={styles.gallery}>
        <h3>Muebles de Baños</h3>
        <CarouselBathroom />
      </article>
      <article className={styles.gallery}>
        <h3>Tarima/Parquet</h3>
        <CarouselParquet />
      </article>
      <article className={styles.gallery}>
        <h3>Armarios/Vestuarios</h3>
        <CarouselClosets />
      </article>
      <article className={styles.gallery}>
        <h3>Puertas</h3>
        <CarouselDoors />
      </article>
      <article className={styles.gallery}>
        <h3>Varios Trabajos</h3>
        <CarouselMiscellaneous />
      </article>
      <ScrollButton />
      <Contact />
    </Layout>
  );
};

export default Gallery;
