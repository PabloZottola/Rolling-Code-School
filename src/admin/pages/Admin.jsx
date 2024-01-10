import { useState, useEffect } from "react";
import { Students } from "../../admin/components/ListStudents";
import { Teachers } from "../../admin/components/ListTeachers";
import { useStudents } from "../../hook/useStudents";
import NavBar from "../../components/NavBar";
import "../../style/ConfirmModal.css";
import "../css/admin.css";
import EditNoteStudents from "../components/EditNoteStudents";
import EditStudents from "../components/EditStudents";
import { useTeacher } from "../../hook/useTeacher";
import { useDebounce } from "../../hook/useDebounce";
import DeleteStudents from "../components/DeteleStudents";

function Admin() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(true);
  const { students, loading, getStudents } = useStudents();
  const { teachers, loadingTeacher, getTeacher } = useTeacher();
  const debounceValue = useDebounce(search, 1000);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleTeacher = () => {
    setFilter(false);
    getTeacher();
  };

  const handleStudent = () => {
    setFilter(true);
    getStudents("");
  };

  useEffect(() => {
    getStudents(debounceValue);
  }, [debounceValue]);

  useEffect(() => {
    getStudents("");
  }, []);

  return (
    <>
      <DeleteStudents getStudents={getStudents} />
      <EditStudents getStudents={getStudents} />
      <EditNoteStudents getStudents={getStudents} />
      <NavBar getStudents={getStudents} />
      <div className="Filter">
        <div>
          <button
            className="buttonFilter"
            onClick={handleStudent}
            disabled={filter}
          >
            ALUMNOS
          </button>
          <button
            className="buttonFilter"
            onClick={handleTeacher}
            disabled={!filter}
          >
            PROFESORES
          </button>
        </div>
        <form className="search">
          <input
            type="search"
            onChange={handleChange}
            value={search}
            name="query"
            placeholder="Filtro de alumnos"
          />
        </form>
      </div>
      {filter ? (
        <main>
          <section>
            {loading ? <p>Cargando...</p> : <Students alumnos={students} />}
          </section>
        </main>
      ) : (
        <main>
          <section>
            {loadingTeacher ? (
              <p>Cargando...</p>
            ) : (
              <Teachers teachers={teachers} />
            )}
          </section>
        </main>
      )}
    </>
  );
}

export default Admin;
