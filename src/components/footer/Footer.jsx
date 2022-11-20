import React from "react";
import { Container } from "react-bootstrap";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <Container>
        <p className=" text-center m-0 py-3">
          © Copyright 2022. Reservados todos los derechos.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
