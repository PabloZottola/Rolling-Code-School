import CustomInput from "../../components/CustomImput";
import fondoRegistro from "../../img/fondoRegistro.png";
import "../css/register.css";

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
