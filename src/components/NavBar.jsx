import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import createuser from "../img/createuser.png";
import Popover from "../admin/components/Popover";
import students from "../img/students.png";
import AppContext from "../AppContext";
import login from "../img/login.png";
import Logo from "../img/Logo.png";
import user from "../img/user.png";
import "../style/navbar.css";
import CreateStudents from "../admin/pages/CreateStudents";
import Register from "../admin/pages/Register";

function NavBar({ getStudents }) {
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
      {isModalOpenStudents ? <CreateStudents getStudents={getStudents} /> : ""}
      {isModalOpenProfesor ? <Register /> : ""}
      <header className="header">
        <div className="left">
          <Link to="/home">
            <img src={Logo} alt="Logo de la escuela sin fondo" />
          </Link>
        </div>
        <ul className="NavUl">
          {window.location.href ===
          "https://highschoolrolling.netlify.app/admin" ? (
            <li className="liAlumnos">LISTA DE ALUMNOS</li>
          ) : (
            <>
              <li>
                <Link to="../auth/pages/AboutUs">Nosotros</Link>
              </li>
              <li>
                <Link to="../auth/pages/Contact">Contacto</Link>
              </li>

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
              {window.location.href ===
              "https://highschoolrolling.netlify.app/admin" ? (
                <>
                  <Popover />{" "}
                </>
              ) : (
                <button onClick={handleNavigate}>
                  <img src={user} alt="Boton para salir de su cuenta" />
                </button>
              )}
              <button onClick={handleOpenModalStudents}>
                <img src={students} alt="Boton para crear un alumnos" />
              </button>
            </>
          ) : (
            <>
              {window.location.href ===
              "https://highschoolrolling.netlify.app/admin" ? (
                <>
                  <Popover />{" "}
                </>
              ) : (
                <button onClick={handleNavigate}>
                  <img src={user} alt="Boton para salir de su cuenta" />
                </button>
              )}
              <button onClick={handleOpenModalProfesor}>
                <img src={createuser} alt="Boton para crear un profesor" />
              </button>
              <button onClick={handleOpenModalStudents}>
                <img src={students} alt="Boton para crear un alumnos" />
              </button>
            </>
          )}
        </div>
      </header>
    </>
  );
}

export default NavBar;
