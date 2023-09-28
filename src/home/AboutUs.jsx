import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import "../style/aboutUs.css"; // Agrega un archivo de estilo si es necesario

function AboutUs() {
  return (
    <div>
      <NavBar />
      {/* Aquí puedes colocar el contenido específico de "About Us" */}
      <h1>Acerca de Nosotros</h1>
      <p>Breve descripción de tu escuela.</p>
      {/* Fin del contenido específico de "About Us" */}
      <Footer />
    </div>
  );
}

export default AboutUs;
