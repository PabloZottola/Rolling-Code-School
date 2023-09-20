import CustomImputCrearAlumnos from "../../components/CustomImputCrearAlumnos";
import fondoRegistro from "../../img/fondoRegistro.png";
import "../css/crearAlumnos.css";

function CrearAlumnos() {
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
          <CustomImputCrearAlumnos />
        </div>
      </section>
    </>
  );
}

export default CrearAlumnos;
