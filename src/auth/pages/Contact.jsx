import React from 'react';
import "../../style/contact.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ContactForm from '../../components/ContactForm';

function Contact() {

    return (
        <>

            <div className='layout'>
            <ContactForm />
            </div>
            <NavBar />
            <Footer />
        </>
    );
}

export default Contact;







