import { useState, useEffect } from "react";
import EscuelaApi from "../../api/EscuelaApi";
import Logo from "../../img/Logo.png";
import login from "../../img/usuario.png";
import "../css/admin.css";
import ListStudents from "../../components/ListStudents";

function Admin() {
  const [cargarAlumno, setCargarAlumno] = useState([]);
  const cargarAlumnos = async () => {
    try {
      const res = await EscuelaApi.get("/admin");
      setCargarAlumno(res.data.user);
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
            {cargarAlumno.map((user) => (
              <ListStudents user={user} key={user._id} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Admin;
