import "../admin/css/admin.css";

function ListStudents({ user }) {
  return (
    <li>
      <span>Nombre: {user.firstName}</span>
      <span>Apellido: {user.lastName}</span>
      <span>Año: {user.phone}</span>
      <span>Expediente: {user._id}</span>
      <button>Detalle del Alumno</button>
    </li>
  );
}

export default ListStudents;
