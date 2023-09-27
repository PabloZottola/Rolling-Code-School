import { useState, useEffect } from "react";
import EscuelaApi from "../../api/EscuelaApi";
import "../css/admin.css";
import ListStudents from "../../components/ListStudents";
import NavBar from "../../components/NavBar";

function Admin() {
  const [cargarAlumno, setCargarAlumno] = useState([]);
  const cargarAlumnos = async () => {
    try {
      const res = await EscuelaApi.get("/admin");
      setCargarAlumno(res.data.user);
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
