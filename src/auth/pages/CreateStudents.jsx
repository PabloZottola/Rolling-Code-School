import { useContext } from "react";
import ImputCreateStudents from "../../components/ImputCreateStudents";
import fondoRegistro from "../../img/fondoCrearAlumnos.jpg";
import "../css/auth.css";
import AppContext from "../../AppContext";

function CreateStudents() {
  const { isModalOpenStudents, setIsModalOpenStudents } =
    useContext(AppContext);

  const closeModal = () => {
    setIsModalOpenStudents(false);
  };

  if (!isModalOpenStudents) return null;

  return (
    <section className="auth">
      <div className="wrapper">
        <div className="top">
          <button onClick={closeModal}>X</button>
          <h2>
            REGISTRO <br />
            DE ALUMNOS
          </h2>
          <img src={fondoRegistro} alt="Formulario de registro de alumnos" />
        </div>
        <ImputCreateStudents />
      </div>
    </section>
  );
}

export default CreateStudents;
