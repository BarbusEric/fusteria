import React from "react";
import "./about.css";
import Fusteria from "../../assets/firma.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__fusteria">
          <div className="about__fusteria-image">
            <img src={Fusteria} alt="fusteria" />
          </div>
        </div>
        <div className="about__content">
          <h2>Empresa</h2>
          <p>
            Somos una empresa pequeña con muchas ganas de trabajar. Tratamos
            siempre de resolver y ayudar a los clientes con un servicio de
            calidad. Nos dedicamos a la fabricación y instalación todo tipo de
            madera. Ofrecemos una amplia gama de servicios acordes a tu
            presupuesto. Nuestra especialidad son tus ideas.
            <p className="important">ESTAMOS EN LOS DETALLES.</p>
          </p>

          <Link to="/gallery" className="btn btn-primary">
            Galería
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
