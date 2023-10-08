import { useContext } from "react";
import ImputRegister from "../components/ImputRegister";
import fondoRegistro from "../../img/fondoRegistro.png";
import AppContext from "../../AppContext";
import "../../style/modal.css";

function Register() {
  const { isModalOpenProfesor, setIsModalOpenProfesor } =
    useContext(AppContext);
  const closeModal = () => {
    setIsModalOpenProfesor(false);
  };

  if (!isModalOpenProfesor) return null;

  return (
    <section className="auth">
      <div className="wrapper">
        <div className="top">
          <button className="closeModal" onClick={closeModal}>
            X
          </button>
          <h2>
            REGISTRO <br /> DE PROFESORES
          </h2>
          <img
            className="fondo"
            src={fondoRegistro}
            alt="Formulario de registro para los profesores"
          />
        </div>
        <ImputRegister />
      </div>
    </section>
  );
}

export default Register;
