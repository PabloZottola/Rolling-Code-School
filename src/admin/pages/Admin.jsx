import { useState, useEffect } from "react";
import EscuelaApi from "../../api/EscuelaApi";
import ListStudents from "../../components/ListStudents";
import NavBar from "../../components/NavBar";
import "../css/admin.css";

function Admin() {
  const [isCargarAlumno, setCargarAlumno] = useState([]);
  const [isCargarProfesor, setCargarProfesor] = useState([]);
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
      console.log(isCargarProfesor);
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
      <NavBar />
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
