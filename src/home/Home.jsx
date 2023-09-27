
import escuela1 from "../img/escuela1.jpg";
import escuela2 from "../img/escuela2.jpg";
import escuela3 from "../img/escuela3.jpg";
import escuela4 from "../img/escuela4.jpg";
import Login from "../auth/pages/Login";
import "../style/home.css";
import "../style/footer.css";
import NavBar from "../components/NavBar";
import { useContext, useState } from "react";
import AppContext from "../AppContext";

function Index() {
  const {isModalOpen} = useContext(AppContext);
  
  return (
    <>
      <div className="layout">
        <div>
          <img src={escuela1} alt="" />
          <img src={escuela2} alt="" />
          <img src={escuela3} alt="" />
          <img src={escuela4} alt="" />
        </div>
      </div>
        {isModalOpen ? <Login /> : ""}
      <NavBar />
      <footer>
        <ul>
          <li>Rolling © 2023</li>
          <li>Política de Privacidad</li>
          <li>Contactanos</li>
        </ul>
      </footer>
    </>
  );
}

export default Index;
