import "../style/navbar.css";
import Logo from "../img/Logo.png";
import login from "../img/usuario.png";

function NavBar() {
  return (
    <header>
      <div className="left">
        <a href="">
          <img src={Logo} alt="Logo de la escuela sin fondo" />
        </a>
      </div>
      <ul>
        <li>Nosotros</li>
        <li>Contacto</li>
        <li>Tienda</li>
      </ul>
      <div className="right">
        <a href="">
          <img src={login} alt="Boton ingresar a su cuenta de usuario" />
        </a>
      </div>
    </header>
  );
}

export default NavBar;
