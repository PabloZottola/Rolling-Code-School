import { useContext } from "react";
import AppContext from "../../AppContext";
import fondoLogin from "../../img/backLogin.png";
import ImputLogin from "../../components/ImputLogin";
import "../css/auth.css";

function Login() {
  const { isModalOpen, setIsModalOpen } = useContext(AppContext);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) return null;

  return (
    <section className="auth">
      <div className="wrapper">
        <div className="top">
          <button onClick={closeModal}>X</button>
          <h2>LOGIN</h2>
          <img
            src={fondoLogin}
            alt="Formulario de registro para los profesores"
          />
        </div>
        <ImputLogin />
      </div>
    </section>
  );
}

export default Login;