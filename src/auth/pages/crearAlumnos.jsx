import customImputCrearAlumnos from "../../components/customImputCrearAlumnos";
import fondoRegistro from "../../img/fondoRegistro.png";
import "../css/register.css";

function crearAlumnos() {
  return (
    <>
      <section className="register">
        <div className="wrapper">
          <div className="top">
            <h2>REGISTRO DE ALUMNOS</h2>
            <img
              src={fondoRegistro}
              alt="Formulario de registro de alumnos"
            />
          </div>
          <customImputCrearAlumnos />
        </div>
      </section>
    </>
  );
}

export default crearAlumnos;
