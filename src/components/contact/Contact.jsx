import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
import { AiOutlinePhone, AiOutlineInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="service">
      <article>
        <div className="overlay"></div>
        <div className="service__list">
          <a href="tel:+642 904 049">
            <AiOutlinePhone className="service__list-icon" />
            642 90 40 49
          </a>
          <a href="mailto:admin@fusteriapromob.com">
            <MdOutlineEmail className="service__list-icon" />
            admin@fusteriapromob.com
          </a>
          <a
            href="https://www.instagram.com/promob.es/"
            target="_blank"
            rel="noopener"
          >
            <AiOutlineInstagram className="service__list-icon" /> promob.es
          </a>
          <a href="/contact">
            <VscLocation className="service__list-icon" />
            Calle Sant Antoni numero 15, Sant Joan Despi
          </a>
        </div>
      </article>
    </section>
  );
};

export default Contact;
