import { useContext, useState } from "react";
import AppContext from "../AppContext";
import EscuelaApi from "../api/EscuelaApi";

function useEditNoteInput({ getStudents, closeModal }) {
  const [isValidInput, setIsValidInput] = useState(false);
  const [noteIndex, setNoteIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const { selectedStudent, isEdit } = useContext(AppContext);
  const { Notes, _id } = selectedStudent;
  const [editedNotes, setEditedNotes] = useState(Notes);

  const handleChangeEditar = (id, value) => {
    let intValue = Math.min(10, value);
    if (intValue === "") {
      setErrorMessage("Por favor ingrese una nota");
      setIsValidInput(false);
    }
    if (intValue >= 1 && intValue <= 10) {
      setErrorMessage("");
      setIsValidInput(true);
    } else {
      setErrorMessage("La nota ingresada debe estar entre 0 y 10");
      setIsValidInput(false);
    }
    const newNotes = [...editedNotes];
    newNotes[noteIndex][id] = intValue;
    setEditedNotes(newNotes);
  };

  const handleChangeNote = (selectedValue) => {
    setNoteIndex(selectedValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editStudents();
    closeModal();
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
    noteIndex,
    errorMessage,
    editedNotes,
    handleChangeEditar,
    handleChangeNote,
    handleSubmit,
    isEdit,
    setErrorMessage,
    isValidInput,
  };
}

export default useEditNoteInput;
