import ImputLogin from "../../components/ImputLogin";
import fondoRegistro from "../../img/fondoRegistro.png";
import "../css/auth.css";

function Login() {
  return (
    <>
      <section className="auth">
        <div className="wrapper">
          <div className="top">
            <h2>LOGIN</h2>
            <img
              src={fondoRegistro}
              alt="Formulario de registro para los profesores"
            />
          </div>
          <ImputLogin />
        </div>
      </section>
    </>
  );
}

export default Login;
