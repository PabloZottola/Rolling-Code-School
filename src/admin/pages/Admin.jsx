import { useState, useEffect, useContext } from "react";
import EscuelaApi from "../../api/EscuelaApi";
import ListStudents from "../../components/ListStudents";
import NavBar from "../../components/NavBar";
import "../css/admin.css";
import AppContext from "../../AppContext";

function Admin() {
  const [isCargarAlumno, setCargarAlumno] = useState([]);
  const [isCargarProfesor, setCargarProfesor] = useState([]);
  const { decoded } = useContext(AppContext);
  console.log(decoded);
  const cargarAlumno = async () => {
    try {
      const res = await EscuelaApi.get("/admin");
      setCargarAlumno(res.data.user);
    } catch (error) {
      if (error) {
      }
    }
  };
  const cargarProfesor = async () => {
    try {
      const res = await EscuelaApi.get("/admin");
      setCargarAlumno(res.data.user);
      const profesor = isCargarProfesor.filter((user) => user.email != decoded.email);
      console.log(profesor);
    } catch (error) {
      if (error) {
      }
    }
  };
  useEffect(() => {
    cargarAlumnos();
  }, []);
  return (
    <>
      <NavBar profesor={profesor}/>
      <main>
        <section>
          <ul className="cardAlummnos">
            {cargarAlumno.map((user) => (
              <ListStudents user={user} key={user._id} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Admin;
