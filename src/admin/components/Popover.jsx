import React, { useEffect, useRef, useState } from "react";
import fondoLogin from "../../img/backLogin.png";
import EscuelaApi from "../../api/EscuelaApi";
import jwt_decode from "jwt-decode";
import user from "../../img/user.png";
import "../css/popover.css";

function Popover() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [profesor, setProfesor] = useState([]);
  const node = useRef(null);

  const cargarProfesor = async () => {
    try {
      const res = await EscuelaApi.get("/admin/teacher");
      const token = localStorage.getItem("token");
      const data = res.data;
      let decoded = jwt_decode(token);
      if (data.teacher.length > 0) {
        setProfesor(
          data.teacher.filter((element) => element.email === decoded.email)
        );
      }
    } catch (error) {
      console.log(error.res.data.msg);
    }
  };
  const handleClick = () => {
    if (popupVisible) {
      document.addEventListener("click", handleOutsideClick, false);
    } else {
      document.removeEventListener("click", handleOutsideClick, false);
    }
    setPopupVisible(!popupVisible);
  };

  const handleOutsideClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    handleClick();
  };

  const handleLoggout = () => {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:5173/home";
  };
  useEffect(() => {
    cargarProfesor();
  }, []);
  return (
    <span className="popover-container" ref={node}>
      <button onClick={handleClick}>
        <img src={user} alt="Boton para salir de su cuenta" />
      </button>
      {profesor.length === 0
        ? ""
        : popupVisible && (
            <ul className="popover">
              <img
                src={fondoLogin}
                alt="Formulario de registro para los profesores"
              />
              <li>Nombre: {profesor[0].firstName}</li>
              <li>Apellido: {profesor[0].lastName}</li>
              <li>Telefono: {profesor[0].phone}</li>
              <li>Email: {profesor[0].email}</li>
              <button onClick={handleLoggout}>Cerrar sesion</button>
            </ul>
          )}
    </span>
  );
}

export default Popover;
