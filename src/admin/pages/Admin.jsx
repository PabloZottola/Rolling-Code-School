import Logo from "../../img/Logo.png";
import login from "../../img/usuario.png";
import "../css/admin.css";

function Admin() {
  return (
    <>
      <header>
        <div className="left">
          <a href="">
            <img src={Logo} alt="Logo de la escuela sin fondo" />
          </a>
        </div>
        <ul>
          <li>Alumnos</li>
          <li>Materias</li>
        </ul>
        <div className="right">
          <img src={login} alt="Boton ingresar a su cuenta de usuario" />
        </div>
      </header>
      <main></main>
    </>
  );
}

export default Admin;
