import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import { Students } from "../../components/ListStudents";
import EditStudents from "../../auth/components/EditStudents";
import { useStudents } from "../../hook/useStudents";
import "../css/admin.css";

function Admin() {
  const [search, setSearch] = useState("");
  const { students, loading, getStudents } = useStudents();

  const handleChange = (event) => {
    setSearch(event.target.value);
    getStudents(event.target.value);
  };

  useEffect(() => {
    getStudents("");
  }, []);

  return (
    <>
      <EditStudents />
      <NavBar />
      <form>
        <input
          onChange={handleChange}
          value={search}
          name="query"
          placeholder="Filtro"
        />
      </form>
      <main>
        <section>
          {loading ? <p>Cargando...</p> : <Students alumnos={students} />}
        </section>
      </main>
    </>
  );
}

export default Admin;
