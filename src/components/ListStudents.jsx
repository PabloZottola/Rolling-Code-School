import { useContext, useState } from "react";
import "../admin/css/admin.css";
import AppContext from "../AppContext";

function ListStudents({ user }) {
  const { isModalOpenEdit, setIsModalOpenEdit } =
    useContext(AppContext);
  const [selectedStudent, setSelectedStudent] = useState({});

  const handleEditStudents = (user) => {
    setSelectedStudent(user);
    setIsModalOpenEdit(true);
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
