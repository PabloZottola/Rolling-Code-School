import { useContext, useState } from "react";
import EscuelaApi from "../api/EscuelaApi";
import AppContext from "../AppContext";

function UseEdiNoteStudents({ getStudents }) {
  const [errorMessage, setErrorMessage] = useState("");
  const { selectedStudent } = useContext(AppContext);
  const {
    firstName,
    lastName,
    yearOfStudy,
    phone,
    email,
    _id,
    monthlyFees,
    BlockedStudent,
  } = selectedStudent;

  const handleSubmit = (event) => {
    event.preventDefault();
    editStudents();
  };

  const editStudents = async () => {
    try {
      const resp = await EscuelaApi.put("/admin/editstudentsnote", {
        _id,
        editedNotes,
      });
      getStudents("");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    firstName,
    lastName,
    phone,
    email,
    yearOfStudy,
    _id,
    monthlyFees,
    BlockedStudent,
    errorMessage,
    handleSubmit,
  };
}

export default UseEdiNoteStudents;
