import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../AppContext";
import Logo from "../img/Logo.png";
import createuser from "../img/createuser.png";
import deleteuser from "../img/delete.png";
import edit from "../img/edit.png";
import user from "../img/user.png";
import login from "../img/login.png";
import students from "../img/students.png";
import "../style/navbar.css";
import CreateStudents from "../auth/pages/CreateStudents";
import Register from "../auth/pages/Register";
import Popover from "../components/Popover";

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
          <Link to="/home">
            <img src={Logo} alt="Logo de la escuela sin fondo" />
          </Link>
        </div>
        <ul>
          {window.location.href === "http://localhost:5173/admin" ? (
            ""
          ) : ( 
            <>
              <li>Nosotros</li>
              <li>Contacto</li>
            </>
          )}
        </ul>
        <div className="right">
          {!isUserLogged ? (
            <>
              <button onClick={handleOpenModal}>
                <img
                  src={login}
                  alt="Boton para ingresar a su cuenta de usuario"
                />
              </button>
            </>
          ) : decoded.role === "Profesor" ? (
            <>
              {window.location.href === "http://localhost:5173/admin" ? (
                <>
                  <Popover />{" "}
                </>
              ) : (
                <button onClick={handleNavigate}>
                  <img src={user} alt="Boton para salir de su cuenta" />
                </button>
              )}
              <button onClick={handleOpenModalStudents}>
                <img src={students} alt="Boton para salir de su cuenta" />
              </button>
            </>
          ) : (
            <>
              {window.location.href === "http://localhost:5173/admin" ? (
                <>
                  <Popover />{" "}
                </>
              ) : (
                <button onClick={handleNavigate}>
                  <img src={user} alt="Boton para salir de su cuenta" />
                </button>
              )}
              <button onClick={handleOpenModalProfesor}>
                <img src={createuser} alt="Boton para salir de su cuenta" />
              </button>
              <button onClick={handleOpenModalStudents}>
                <img src={students} alt="Boton para salir de su cuenta" />
              </button>
            </>
          )}
        </div>
      </header>
    </>
  );
}

export default NavBar;
