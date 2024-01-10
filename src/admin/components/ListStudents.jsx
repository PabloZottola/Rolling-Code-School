import { useContext } from "react";
import "../css/admin.css";
import AppContext from "../../AppContext";
import trash from "../../img/eliminar.png";

function ListStudents({ alumnos }) {
  const {
    setIsModalOpenEdit,
    setSelectedStudent,
    setIsModalOpenEditNote,
    setIsModalOpenDelete,
  } = useContext(AppContext);

  const handleEditStudents = (alumnos) => {
    setSelectedStudent(alumnos);
    setIsModalOpenEdit(true);
  };
  const handleEditNoteStudents = (alumnos) => {
    setSelectedStudent(alumnos);
    setIsModalOpenEditNote(true);
  };
  const handleDeleteStudents = (id) => {
    setSelectedStudent(id);
    setIsModalOpenDelete(true);
  };
  const fecha = new Date().toISOString().slice(5, -14).replace("-", "");
  return (
    <ul className="cardAlummnos">
      {alumnos.map((alumno) => (
        <li
          key={alumno._id}
          className={
            alumno.BlockedStudent === true
              ? "backRed"
              : fecha > alumno.monthlyFees.replace(/-/g, "")
              ? "backOrange"
              : "backBlue"
          }
        >
          <button
            onClick={() => handleDeleteStudents(alumno._id)}
            className="Delete"
          >
            <img src={trash} alt="borrar alumno" />
          </button>
          <span>Nombre: {alumno.firstName}</span>
          <span>Apellido: {alumno.lastName}</span>
          <span>Telefono: {alumno.phone}</span>
          <span>Años: {alumno.yearOfStudy}</span>
          <span>Expediente: {alumno._id}</span>
          <button
            onClick={() => handleEditStudents(alumno)}
            className="buttonEdit"
          >
            Detalle del Alumno
          </button>
          <button
            onClick={() => handleEditNoteStudents(alumno)}
            className="buttonEdit"
          >
            Notas del Alumno
          </button>
        </li>
      ))}
    </ul>
  );
}
function NoListStudents() {
  return <p>No se encontraron alumnos para esta búsqueda</p>;
}

export function Students({ alumnos }) {
  const hasStudents = alumnos?.length > 0;

  return hasStudents ? <ListStudents alumnos={alumnos} /> : <NoListStudents />;
}
