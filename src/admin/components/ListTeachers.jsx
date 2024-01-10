import "../css/admin.css";

function ListTeachers({ teachers }) {
  return (
    <ul className="cardAlummnos">
      {teachers.map((teacher) => (
        <li key={teacher._id} className={"backBlue"}>
          <span>Nombre: {teacher.firstName}</span>
          <span>Apellido: {teacher.lastName}</span>
          <span>Telefono: {teacher.phone}</span>
          <span>ID: {teacher._id}</span>
        </li>
      ))}
    </ul>
  );
}
function NoListTeachers() {
  return <p>No se encontraron teachers para esta búsqueda</p>;
}

export function Teachers({ teachers }) {
  const hasteachers = teachers?.length > 0;

  return hasteachers ? (
    <ListTeachers teachers={teachers} />
  ) : (
    <NoListTeachers />
  );
}
