import React from "react";
import { Button, Stack } from "react-bootstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <div className="layout-about-1">
        <NavBar />
        <Stack className="layout-about-2" gap={3}>
          <div>
            <h1 className="custom-h1 pt-5 text-center mx-auto">
              ¿Quiénes somos?
            </h1>
          </div>
          <div>
            <p className="custom-p text-center mx-auto">
              Descubre un mundo de posibilidades en Rolling School En el corazón
              de Tucumán, emerge una escuela única que está transformando el
              futuro de la educación. Bienvenidos a "Rolling School," donde los
              sueños se hacen realidad y las fronteras de la imaginación se
              desdibujan. En Rolling School, no somos una escuela común. Somos
              un faro de innovación, una puerta de entrada a un mundo de
              tecnología y habilidades blandas. Nuestro compromiso es guiar a
              nuestros estudiantes en un viaje de descubrimiento, donde aprenden
              a dominar las herramientas del mañana y a cultivar las habilidades
              humanas que los destacarán en cualquier campo.
            </p>
          </div>
          <div className="custom-boton text-center mx-auto">
            <Link to="/contact">
              <Button variant="warning" className="m-2">
                Por favor, déjanos tus datos de contacto
              </Button>
            </Link>
          </div>
          <Footer />
        </Stack>
      </div>
    </>
  );
}

export default AboutUs;
