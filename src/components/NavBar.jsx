import "../style/navbar.css";
import Logo from "../img/Logo.png";
import login from "../img/login.png";

function NavBar() {
  return (
    <header>
      <div className="left">
        <a href="">
          <img src={Logo} alt="Logo sin fondo" />
        </a>
      </div>
      <ul>
        <li>Nosotros</li>
        <li>Contacto</li>
        <li>Tienda</li>
      </ul>
      <div className="right">
        <a href="">
          <img src={login} alt="" />
        </a>
      </div>
    </header>
  );
}

export default NavBar;
