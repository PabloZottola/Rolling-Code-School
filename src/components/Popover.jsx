import "../style/popover.css";
import React from "react";
import createuser from "../img/createuser.png";
import EscuelaApi from "../api/EscuelaApi";
import jwt_decode from "jwt-decode";

class Popover extends React.Component {
  constructor() {
    super();

    this.cargarProfesor = this.cargarProfesor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
      popupVisible: false,
      profesor: [],
    };
  }

  componentDidMount() {
    this.cargarProfesor();
  }

  async cargarProfesor() {
    try {
      const res = await EscuelaApi.get("/admin/teacher");
      const token = localStorage.getItem("token");
      const data = res.data;
      let decoded = jwt_decode(token);
      if (data.teacher.length > 0) {
        this.setState({
          ...this.state.popupVisible,
          profesor: data.teacher.filter(
            (element) => element.email === decoded.email
          ),
        });
      }
    } catch (error) {
      console.log(error.res.data.msg);
    }
  }

  handleClick() {
    if (!this.state.popupVisible) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState((prevState) => ({
      popupVisible: !prevState.popupVisible,
    }));
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClick();
  }
  handleLoggout() {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:5173/home";
  }

  render() {
    const { profesor } = this.state;
    return (
      <span
        className="popover-container"
        ref={(node) => {
          this.node = node;
        }}
      >
        <button onClick={this.handleClick}>
          <img src={createuser} alt="Boton para salir de su cuenta" />
        </button>
        {this.state.popupVisible && (
          <ul className="popover">
            <li>Nombre: {profesor[0].firstName}</li>
            <li>Apellido: {profesor[0].lastName}</li>
            <li>Telefono: {profesor[0].phone}</li>
            <li>Email: {profesor[0].email}</li>
            <button onClick={this.handleLoggout}>Cerrar sesion</button>
          </ul>
        )}
      </span>
    );
  }
}

export default Popover;
