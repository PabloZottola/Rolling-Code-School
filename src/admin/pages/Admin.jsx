import { useState, useEffect } from "react";
import EscuelaApi from "../../api/EscuelaApi";
import ListStudents from "../../components/ListStudents";
import NavBar from "../../components/NavBar";
import "../css/admin.css";
import EditStudents from "../../auth/components/EditStudents";

function Admin() {
  const [isCargarAlumno, setCargarAlumno] = useState([]);

  const cargarAlumno = async () => {
    try {
      const res = await EscuelaApi.get("/admin/students");
      setCargarAlumno(res.data.students);
    } catch (error) {
      if (error) {
      }
    }
  };
  useEffect(() => {
    cargarAlumno();
  }, []);
  return (
    <>
      <NavBar />
      <EditStudents />
      <main>
        <section>
          <ul className="cardAlummnos">
            {isCargarAlumno.map((user) => (
              <ListStudents user={user} key={user._id} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Admin;
