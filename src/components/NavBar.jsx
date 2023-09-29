import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../AppContext";
import Logo from "../img/Logo.png";
import login from "../img/usuario.png";
import "../style/navbar.css";
import CreateStudents from "../auth/pages/CreateStudents";
import Register from "../auth/pages/Register";

function NavBar() {
  const {
    setIsModalOpen,
    setIsModalOpenStudents,
    setIsModalOpenProfesor,
    isUserLogged,
    decoded,
    isModalOpenStudents,
    isModalOpenProfesor,
  } = useContext(AppContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/admin");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleOpenModalStudents = () => {
    setIsModalOpenStudents(true);
  };
  const handleOpenModalProfesor = () => {
    setIsModalOpenProfesor(true);
  };

  return (
    <>
      {isModalOpenStudents ? <CreateStudents /> : ""}
      {isModalOpenProfesor ? <Register /> : ""}
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
          {!isUserLogged ? (
            <button onClick={handleOpenModal}>
              <img
                src={login}
                alt="Boton para ingresar a su cuenta de usuario"
              />
            </button>
          ) : decoded.role === "Profesor" ? (
            <>
              <button onClick={handleNavigate}>
                <img src={login} alt="Boton para salir de su cuenta" />
              </button>
              <button onClick={handleOpenModalStudents}>
                <img src={login} alt="Boton para salir de su cuenta" />
              </button>
            </>
          ) : (
            <>
              <button onClick={handleNavigate}>
                <img src={login} alt="Boton para salir de su cuenta" />
              </button>
              <button onClick={handleOpenModalStudents}>
                <img src={login} alt="Boton para salir de su cuenta" />
              </button>
              <button onClick={handleOpenModalProfesor}>
                <img src={login} alt="Boton para salir de su cuenta" />
              </button>
            </>
          )}
        </div>
      </header>
    </>
  );
}

export default NavBar;
