import { useState } from "react";
import "../admin/css/admin.css";

function ListStudents({ user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({});

  const handleEditStudents = (user) => {
    setIsModalOpen(true);
    setSelectedStudent(user);
    console.log(selectedStudent);
  };
  return (
    <li>
      <span>Nombre: {user.firstName}</span>
      <span>Apellido: {user.lastName}</span>
      <span>Año: {user.phone}</span>
      <span>Expediente: {user._id}</span>
      <button onClick={() => handleEditStudents(user)}>
        Detalle del Alumno
      </button>
    </li>
  );
}

export default ListStudents;
