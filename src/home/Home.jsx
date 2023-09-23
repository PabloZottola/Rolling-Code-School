import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import escuela1 from "../img/escuela1.jpg";
import escuela2 from "../img/escuela2.jpg";
import escuela3 from "../img/escuela3.jpg";
import escuela4 from "../img/escuela4.jpg";
import "../style/home.css";

function Index() {
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
      <NavBar />
      <Footer />
    </>
  );
}

export default Index;
