import React from "react";
import ContactForm from "./ContactForm";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../style/contact.css";

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
