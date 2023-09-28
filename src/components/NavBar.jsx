import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../AppContext";
import Logo from "../img/Logo.png";
import login from "../img/usuario.png";
import "../style/navbar.css";

function NavBar() {
  const { setIsModalOpen, isUserLogged } = useContext(AppContext);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/admin");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <header className="header">
      <div className="left">
        <a href="http://localhost:5173/home">
          <img src={Logo} alt="Logo de la escuela sin fondo" />
        </a>
      </div>
      <ul>
        {window.location.href === "http://localhost:5173/admin" ? (
          <>
            <li>Contacto</li>
            <li>Tienda</li>
          </>
        ) : (
          <>
            <li>Nosotros</li>
            <li>Contacto</li>
            <li>Tienda</li>
          </>
        )}
      </ul>
      <div className="right">
        {isUserLogged ? (
          <button onClick={handleNavigate}>
            <img src={login} alt="Boton para ingresar a su cuenta de usuario" />
          </button>
        ) : (
          <button onClick={handleOpenModal}>
            <img src={login} alt="Boton para salir de su cuenta" />
          </button>
        )}
      </div>
    </header>
  );
}

export default NavBar;
