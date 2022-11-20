import React from "react";
import Layout from "../components/layout/Layout";
import Carousel from "../components/carousel/CarouselComponent";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";

const Home = () => {
  return (
    <Layout>
      <Carousel />
      <About />
      <Contact />
    </Layout>
  );
};

export default Home;
