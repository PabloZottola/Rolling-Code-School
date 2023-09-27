import { useContext, useState } from "react";
import Logo from "../img/Logo.png";
import login from "../img/usuario.png";
import "../style/navbar.css";
import AppContext from "../AppContext";

function NavBar() {
    const {setIsModalOpen, isUserLogged} = useContext(AppContext);   

    const openModal = () => {
        setIsModalOpen(true);
      };

  return (
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
            {isUserLogged ? (
              <button onClick={openModal}>
                <img src={login} alt="Boton para ingresar a su cuenta de usuario" />
              </button>
            ) : (
              <button onClick={openModal}>
                <img src={login} alt="Boton para salir de su cuenta" />
              </button>
            )} 
        </div>
      </header>
  );
}

export default NavBar;