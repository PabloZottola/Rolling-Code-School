import { useContext } from "react";
import escuela1 from "../img/escuela1.jpg";
import escuela2 from "../img/escuela2.jpg";
import escuela3 from "../img/escuela3.jpg";
import escuela4 from "../img/escuela4.jpg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AppContext from "../AppContext";
import "../home/css/home.css";
import Login from "../auth/pages/Login";

function Index() {
  const { isModalOpen } = useContext(AppContext);
  return (
    <>
      {isModalOpen ? <Login /> : ""}
      <div className="layout">
        <div>
          <div>
            <h2>Bienvenidos a High School Rolling</h2>
            <img src={escuela1} alt="" />
          </div>
          <div>
            <h2>Innovación en Aprendizaje, Éxito Seguro</h2>
            <img src={escuela2} alt="" />
          </div>
          <div>
            <h2>Forjando Futuros Tecnológicos Juntos</h2>
            <img src={escuela3} alt="" />
          </div>
          <div>
            <h2>Donde la Ciencia Inspira Brillantes Mentes</h2>
            <img src={escuela4} alt="" />
          </div>
        </div>
      </div>

      <NavBar />
      <Footer />
    </>
  );
}

export default Index;
