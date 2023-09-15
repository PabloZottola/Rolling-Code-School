import "../style/register.css";
import CustomInput from "../components/CustomImput";

function Register() {
  return (
    <>
      <section className="register">
        <img src="" alt="" />
        <form>
          <CustomInput />
          <label htmlFor="">E-Mail</label>
          <div>
            <div>
              <CustomInput />
              <label htmlFor="">Nombre</label>
              <CustomInput />
              <label htmlFor="">Telefono</label>
              <CustomInput />
              <label htmlFor="">Confirmar contraseña</label>
            </div>
            <div>
              <CustomInput />
              <label htmlFor="">Apellido</label>
              <CustomInput />
              <label htmlFor="">Fecha de nacimiento</label>
              <CustomInput />
              <label htmlFor="">Contraseña</label>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
