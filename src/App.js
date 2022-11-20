import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LastProjects from "./pages/LastProjects";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lastprojects" element={<LastProjects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
