import "../style/register.css";
import fondeRegistro from "../img/fondoRegistro.png";
import CustomInput from "../components/CustomImput";

function Register() {
  return (
    <>
      <section className="register">
        <div className="wrapper">
          <img src={fondeRegistro} alt="" />
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
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
