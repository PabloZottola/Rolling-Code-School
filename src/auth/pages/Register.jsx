import ImputRegister from "../../components/ImputRegister";
import fondoRegistro from "../../img/fondoRegistro.png";
import "../css/auth.css";

function Register() {
  return (
    <>
      <section className="auth">
        <div className="wrapper">
          <div className="top">
            <h2>REGISTRO</h2>
            <img
              src={fondoRegistro}
              alt="Formulario de registro para los profesores"
            />
          </div>
          <ImputRegister />
        </div>
      </section>
    </>
  );
}

export default Register;
