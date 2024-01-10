import { useContext, useState } from "react";
import ImputCreateStudents from "../components/ImputCreateStudents";
import fondoRegistro from "../../img/fondoCrearAlumnos.jpg";
import AppContext from "../../AppContext";
import "../../style/modal.css";

function CreateStudents({ getStudents }) {
  const [isShowModal, setIsShowModal] = useState(false);
  const { isModalOpenStudents, setIsModalOpenStudents } =
    useContext(AppContext);

  const closeModal = () => {
    setIsModalOpenStudents(false);
  };

  if (!isModalOpenStudents) return null;

  return (
    <>
      {isShowModal ? (
        <section className="modaloverlay">
          <div className="modalcontent">
            <h2>Alumno registrado</h2>
          </div>
        </section>
      ) : (
        ""
      )}
      <section className="auth">
        <div className="wrapper">
          <div className="top-nav">
            <h2>
              REGISTRO <br />
              DE ALUMNOS
            </h2>
            <button className="closeModal" onClick={closeModal}>
              X
            </button>
            <img
              className="fondo"
              src={fondoRegistro}
              alt="Formulario de registro de alumnos"
            />
          </div>
          <ImputCreateStudents
            getStudents={getStudents}
            setIsShowModal={setIsShowModal}
          />
        </div>
      </section>
    </>
  );
}

export default CreateStudents;
