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
      <main>
        <section>
          <div>
            <div></div>
            <span>Nombre: </span>
            <span>Apellido: </span>
            <span>Año: </span>
            <span>Expediente: </span>
            <button>
              <img src="" alt="Boton para ver los detalles del alumnos" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Admin;
