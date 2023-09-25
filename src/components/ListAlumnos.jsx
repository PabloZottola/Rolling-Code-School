import "../admin/css/admin.css";

function ListAlumnos({ firstName, lastName, phone, id }) {
  return (
    <>
      <li key={id}>
        <div></div>
        <span>Nombre: {firstName}</span>
        <span>Apellido: {lastName}</span>
        <span>Año: {phone}</span>
        <span>Expediente: {id}</span>
        <button>Detalle del Alumno</button>
      </li>
    </>
  );
}

export default ListAlumnos;
