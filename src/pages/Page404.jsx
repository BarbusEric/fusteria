import React from "react";
import { Link } from "react-router-dom";
import styles from "./Page404.module.css";
import Container from "react-bootstrap/Container";

function Page404() {
  return (
    <div
      className={`${styles.page404}  d-flex flex-column justify-content-center align-items-center`}
    >
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <p className="h4 text-center">
          Tenemos algunas noticias no tan buenas... la página que intentaste el
          acceso no (ya) existe.
        </p>
        <strong className={`${styles.error404}`}>404 :</strong>
        <p className="h4 text-center">
          <Link to="/" className="btn btn-primary">
            volver al sitio
          </Link>{" "}
        </p>
      </Container>
    </div>
  );
}

export default Page404;
