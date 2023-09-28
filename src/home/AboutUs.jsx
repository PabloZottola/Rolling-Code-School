import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../style/aboutUs.css";
import escuela4 from "../img/escuela4.jpg";

function AboutUs() {
    return (
        <body>
            <div className="layout">
                <NavBar />
                <Container className="text-center">
                    <Row>
                        <Col className="position-relative">
                            <div className="overlay">
                                <h1>Acerca de Nosotros</h1>
                                <p className="text-justify custom-p">Descubre un mundo de posibilidades en Rolling School
                                    En el corazón de Tucumán, emerge una escuela única que está transformando el futuro de la educación. Bienvenidos a "Rolling School," donde los sueños se hacen realidad y las fronteras de la imaginación se desdibujan.
                                    En Rolling School, no somos una escuela común. Somos un faro de innovación, una puerta de entrada a un mundo de tecnología y habilidades blandas. Nuestro compromiso es guiar a nuestros estudiantes en un viaje de descubrimiento, donde aprenden a dominar las herramientas del mañana y a cultivar las habilidades humanas que los destacarán en cualquier campo.</p>
                                <Button variant="success">Contactanos</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </body>

    );
}

export default AboutUs;
