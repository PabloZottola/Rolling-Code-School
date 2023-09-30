import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import "../../style/AboutUs.css";

function Contact() {
  return (
    <>
      <div className="backAboutUs d-flex justify-content-center align-items-center">
        <ContactForm />
      </div>
      <NavBar />
      <Footer />
    </>
  );
}

export default Contact;
