import EscuelaApi from "../../api/EscuelaApi";
import ListAlumnos from "../../components/ListAlumnos";
import Logo from "../../img/Logo.png";
import login from "../../img/usuario.png";
import { useState } from "react";
import { useEffect } from "react";
import "../css/admin.css";

function Admin() {
  const [cargarAlumno, setCargarAlumno] = useState([]);
  const cargarAlumnos = async () => {
    try {
      const res = await EscuelaApi.get("/admin");
      setCargarAlumno(res.data.user);
      console.log(cargarAlumno);
    } catch (error) {
      if (error) {
      }
    }
  };
  useEffect(() => {
    cargarAlumnos();
  }, []);
  return (
    <>
      <header>
        <div className="left">
          <a href="">
            <img src={Logo} alt="Logo de la escuela sin fondo" />
          </a>
        </div>
        <ul>
          <li>Alumnos</li>
          <li>Materias</li>
        </ul>
        <div className="right">
          <img src={login} alt="Boton ingresar a su cuenta de usuario" />
        </div>
      </header>
      <main>
        <section>
          <ul className="cardAlummnos">
            {cargarAlumno.map((user) => {
              return (
                <ListAlumnos
                  firstName={user.firstName}
                  lastName={user.lastName}
                  phone={user.phone}
                  id={user._id}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Admin;
