import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import "../../style/contact.css";

function Contact() {
  return (
    <>
      <div className="layout-contact-1 text-center mx-auto">
        <NavBar />
        <div className="layout-contact-2 text-center mx-auto p-3">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
