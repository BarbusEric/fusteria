import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Container from "react-bootstrap/Container";
import logo from "../../assets/logoocta.jpg";

function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function handleMenuClick() {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  }

  let dropdownMenuClasses = styles.dropdownMenu;
  if (isDisplayed) {
    dropdownMenuClasses += ` ${styles.displayMobileMenu}`;
  }

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav}  w-100`}>
        <Container className="d-flex justify-content-between align-items-center">
          <Link to="/" className="p-3">
            <img src={logo} alt="logo" />
          </Link>
          <div className={styles.menuIconContainer}>
            <span
              onClick={handleMenuClick}
              className={`material-icons ${styles.menuIcon} `}
            >
              {" "}
              menu{" "}
            </span>
            <ul className={dropdownMenuClasses}>
              <li className={isDisplayed ? "container" : null}>
                <Link to="/" className="p-3 text-uppercase ">
                  Inicio
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link to="/gallery" className="p-3 text-uppercase ">
                  Galería
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link to="/lastprojects" className="p-3 text-uppercase ">
                  Últimos proyectos
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <a href="/contact" className="p-3 text-uppercase ">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default Header;
