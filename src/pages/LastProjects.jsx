import React from "react";
import Layout from "../components/layout/Layout";
import CarouselLastProjects from "../components/carousel/carousellastprojects/CarouselLastProjects";
import Contact from "../components/contact/Contact";

const Kitchens = () => {
  return (
    <Layout>
      <CarouselLastProjects />
      <Contact />
    </Layout>
  );
};

export default Kitchens;
