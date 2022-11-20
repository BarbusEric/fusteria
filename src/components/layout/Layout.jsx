import React from "react";
import "./layout.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Layout(props) {
  return (
    <div className="layout">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
