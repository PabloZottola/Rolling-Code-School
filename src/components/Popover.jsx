import "../style/popover.css";
import React from 'react';
import createuser from "../img/createuser.png";
import { redirect } from "react-router-dom";

class Popover extends React.Component {
    constructor() {
      super();
  
      this.handleClick = this.handleClick.bind(this);
      this.handleOutsideClick = this.handleOutsideClick.bind(this);
  
      this.state = {
        popupVisible: false
      };
    }
  
    handleClick() {
      if (!this.state.popupVisible) {
        document.addEventListener('click', this.handleOutsideClick, false);
      } else {
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
  
      this.setState(prevState => ({
         popupVisible: !prevState.popupVisible,
      }));
    }
    
    handleOutsideClick(e) {
      if (this.node.contains(e.target)) {
        return;
      }
      this.handleClick();
    }
  
    handleLoggout(){
      localStorage.removeItem("token");
      redirect("/home");
    }

    render(profesor) {
      return (
        <span className="popover-container" ref={node => { this.node = node; }}>
          <button
            onClick={this.handleClick}
          >
            <img src={createuser} alt="Boton para salir de su cuenta" />
          </button>
          {this.state.popupVisible && (
            <ul className="popover">
              <li>Nombre: {profesor.firstname}</li>
              <li>Apellido: {profesor.lastname}</li>
              <li>Telefono: {profesor.phone}</li>
              <li>Email:{profesor.email} </li>
              <button onClick={this.handleLoggout}>Cerrar sesion</button>
            </ul>
           )}
        </span>
      );
    }
  }

export default Popover;