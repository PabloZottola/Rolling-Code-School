import "../style/register.css";
import fondoRegistro from "../img/fondoRegistro.png";
import CustomInput from "../components/CustomImput";

function Register() {
  return (
    <>
      <section className="register">
        <div className="wrapper">
          <div className="top">
            <h2>REGISTRO</h2>
            <img src={fondoRegistro} alt="" />
          </div>
          <CustomInput />
        </div>
      </section>
    </>
  );
}

export default Register;
