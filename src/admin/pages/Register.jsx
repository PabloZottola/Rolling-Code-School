import { useContext, useState } from "react";
import ImputRegister from "../components/ImputRegister";
import fondoRegistro from "../../img/fondoRegistro.png";
import AppContext from "../../AppContext";
import "../../style/modal.css";

function Register() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalLoading, setIsShowModalLoading] = useState(false);
  const { isModalOpenProfesor, setIsModalOpenProfesor } =
    useContext(AppContext);
  const closeModal = () => {
    setIsModalOpenProfesor(false);
  };

  if (!isModalOpenProfesor) return null;

  return (
    <>
      {isShowModal ? (
        <section className="modaloverlay">
          <div className="modalcontent">
            <h2>Profesor registrado</h2>
          </div>
        </section>
      ) : (
        ""
      )}
      {isShowModalLoading ? (
        <section className="modaloverlay">
          <div className="modalcontent">
            <h2>Espere, por favor</h2>
          </div>
        </section>
      ) : (
        ""
      )}
      <section className="auth">
        <div className="wrapper">
          <div className="top-nav">
            <h2>
              REGISTRO <br /> DE PROFESORES
            </h2>
            <button className="closeModal" onClick={closeModal}>
              X
            </button>
            <img
              className="fondo"
              src={fondoRegistro}
              alt="Formulario de registro para los profesores"
            />
          </div>
          <ImputRegister setIsShowModal={setIsShowModal} setIsShowModalLoading={setIsShowModalLoading}/>
        </div>
      </section>
    </>
  );
}

export default Register;
