import "../style/register.css";
import fondeRegistro from "../img/fondoRegistro.png";
import CustomInput from "../components/CustomImput";

function Register() {
  return (
    <>
      <section className="register">
        <div className="wrapper">
          <div className="top">
            <h2>REGISTRO</h2>
            <img src={fondeRegistro} alt="" />
          </div>
          <form>
            <div>
              <div>
                <CustomInput name="Nombre" />
                <CustomInput name="Numero de telefono" />
                <CustomInput name="Contraseña" />
              </div>
              <div>
                <CustomInput name="Apellido" />
                <CustomInput name="Email" />
                <CustomInput name="Repetir contraseña" />
              </div>
            </div>
            <button>Registrarse</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
