import React from "react";
import Layout from "../components/layout/Layout";
import styles from "./Contact.module.css";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineInstagram,
} from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";

const Contact = () => {
  return (
    <Layout>
      <section className={styles.contact}>
        <h1>
          &copy;PRO
          <span className="red">MOB</span>{" "}
        </h1>
        <h3>Contacto</h3>
        <div className={styles.container}>
          <article>
            <iframe
              title="map"
              className={styles.map}
              width="650"
              height="450"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Calle%20Sant%20Antoni%20numero%2015,%20Sant%20Joan%20Despi.%20Barcelona&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            />
          </article>
          <article>
            <div className={styles.service__list}>
              <a href="tel:+642 904 049">
                <AiOutlinePhone className={styles.service__list_icon} />
                642 90 40 49
              </a>
              <a href="mailto:admin@fusteriapromob.com">
                <AiOutlineMail className={styles.service__list_icon} />
                admin@fusteriapromob.com
              </a>

              <a
                href="https://www.instagram.com/promob.es/"
                target="_blank"
                rel="noopener"
              >
                <AiOutlineInstagram className={styles.service__list_icon} />
                promob.es
              </a>
              <a href="/contact">
                <SlLocationPin className={styles.service__list_icon} />
                Calle Sant Antoni numero 15, Sant Joan Despi
              </a>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
