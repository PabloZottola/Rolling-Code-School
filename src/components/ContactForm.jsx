import React, { useState } from "react";
import { Form, Button } from "react-bootstrap"; // Importa los componentes de React Bootstrap
import "../style/contactForm.css";

const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5173/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <Form onSubmit={handleSubmit}> 
        <h2 className="text-light">Dejanos tu contacto</h2>
            <Form.Group>
            <Form.Label></Form.Label>
                <Form.Control type="text" id="name" minLength="3" maxLength="20" pattern="^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$" placeholder="Escribe tu nombre" required />
            </Form.Group>
            <Form.Group>
            <Form.Label></Form.Label>
                <Form.Control type="email" id="email"  minLength="11" maxLength="35" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email"required />
            </Form.Group>
            <Form.Group>
            <Form.Label></Form.Label>
                <Form.Control as="textarea" id="message" minLength="15" maxLength="300" placeholder="Escribe hasta 300 caracteres" required />
            </Form.Group>
            <Button type="submit" variant="success">{status}</Button> 
        </Form>
    );
};

export default ContactForm;
