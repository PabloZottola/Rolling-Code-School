import ImputCreateStudents from "../../components/ImputCreateStudents";
import fondoRegistro from "../../img/fondoCrearAlumnos.jpg";
import "../css/auth.css";

function CreateStudents() {
  return (
    <>
      <section className="auth">
        <div className="wrapper">
          <div className="top">
            <h2>
              REGISTRO <br />
              DE ALUMNOS
            </h2>
            <img src={fondoRegistro} alt="Formulario de registro de alumnos" />
          </div>
          <ImputCreateStudents />
        </div>
      </section>
    </>
  );
}

export default CreateStudents;
