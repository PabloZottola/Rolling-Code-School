import { useContext } from "react";
import AppContext from "../AppContext";
import "../admin/css/admin.css";

function ListStudents({ alumnos }) {
  const { setIsModalOpenEdit, setSelectedStudent } = useContext(AppContext);

  const handleEditStudents = (alumnos) => {
    setSelectedStudent(alumnos);
    setIsModalOpenEdit(true);
  };
  return (
    <ul className="cardAlummnos">
      {alumnos.map((alumno) => (
        <li key={alumno._id}>
          <span>Nombre: {alumno.firstName}</span>
          <span>Apellido: {alumno.lastName}</span>
          <span>Telefono: {alumno.phone}</span>
          <span>Años: {alumno.yearOfStudy}</span>
          <span>Expediente: {alumno._id}</span>
          <button onClick={() => handleEditStudents(alumno)}>
            Detalle del Alumno
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
