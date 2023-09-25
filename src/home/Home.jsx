import escuela1 from "../img/escuela1.jpg";
import escuela2 from "../img/escuela2.jpg";
import escuela3 from "../img/escuela3.jpg";
import escuela4 from "../img/escuela4.jpg";
import Logo from "../img/Logo.png";
import login from "../img/usuario.png";
import "../style/home.css";
import "../style/navbar.css";
import "../style/footer.css";
import Login from "../auth/pages/Login";
import { useState } from "react";

function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="layout">
        <div>
          <img src={escuela1} alt="" />
          <img src={escuela2} alt="" />
          <img src={escuela3} alt="" />
          <img src={escuela4} alt="" />
        </div>
      </div>
      {isModalOpen ? <Login isOpen={isModalOpen} onClose={closeModal} /> : ""}
      <header className="header">
        <div className="left">
          <a href="">
            <img src={Logo} alt="Logo de la escuela sin fondo" />
          </a>
        </div>
        <ul>
          <li>Nosotros</li>
          <li>Contacto</li>
          <li>Tienda</li>
        </ul>
        <div className="right">
          <button onClick={openModal}>
            <img src={login} alt="Boton ingresar a su cuenta de usuario" />
          </button>
        </div>
      </header>
      <footer>
        <ul>
          <li>Rolling © 2023</li>
          <li>Política de Privacidad</li>
          <li>Contactanos</li>
        </ul>
      </footer>
    </>
  );
}

export default Index;
