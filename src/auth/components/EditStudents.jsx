import { useContext } from "react";
import fondoRegistro from "../../img/fondoCrearAlumnos.jpg";
import "../css/auth.css";
import AppContext from "../../AppContext";
import ImputEditStudents from "../../components/ImputEditStudents";

function EditStudents() {
  const { isModalOpenEdit, setIsModalOpenEdit } =
    useContext(AppContext);

  const closeModal = () => {
    setIsModalOpenEdit(false);
  };

  if (!isModalOpenEdit) return null;

  return (
    <section className="auth">
      <div className="wrapper">
        <div className="top">
          <button onClick={closeModal}>X</button>
          <h2>
            DETALLES <br />
            DE ALUMNOS
          </h2>
          <img src={fondoRegistro} alt="Formulario de registro de alumnos" />
        </div>
        <ImputEditStudents />
      </div>
    </section>
  );
}

export default EditStudents;
