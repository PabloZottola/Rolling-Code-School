import { useContext, useState } from "react";
import AppContext from "../../AppContext";
import EscuelaApi from "../../api/EscuelaApi";

function ImputEditNoteStudents({ getStudents }) {
  const [noteIndex, setNoteIndex] = useState(0);
  const { selectedStudent, isEdit } = useContext(AppContext);
  const { Notes, _id } = selectedStudent;
  const [editedNotes, setEditedNotes] = useState(Notes);

  const handleChangeEditar = (propiedad, valor) => {
    const newNotes = [...editedNotes];
    newNotes[noteIndex][propiedad] = valor;
    setEditedNotes(newNotes);
  };

  const handleChangeNote = (selectedValue) => {
    setNoteIndex(selectedValue);
  };

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <select
              name="text"
              onChange={(e) => handleChangeNote(e.target.value)}
              className={"custom-input active"}
            >
              <option value="0">Primer Año</option>
              <option value="1">Segundo Año</option>
              <option value="2">Tercer Año</option>
              <option value="3">Cuarto Año</option>
            </select>
            <label>Año de cursado</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              name="Biologia"
              maxLength={2}
              minLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Biologia}
              onChange={(e) => {
                let inputVal = e.target.value;
                let intValue = parseInt(inputVal, 10);
                if (!isNaN(intValue)) {
                  intValue = Math.min(10, intValue);
                  inputVal = intValue.toString();
                }
                handleChangeEditar("Biologia", inputVal);
              }
              }
            />
            <label>Biología</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              name="Economia"
              maxLength={2}
              minLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Economia}
              onChange={(e) => {
                let inputVal = e.target.value;
                let intValue = parseInt(inputVal, 10);
                if (!isNaN(intValue)) {
                  intValue = Math.min(10, intValue);
                  inputVal = intValue.toString();
                }
                handleChangeEditar("Economia", inputVal);
              }}
            />
            <label>Economía</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              name="EducacionFisica"
              maxLength={2}
              minLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.EducacionFisica}
              onChange={(e) => {
                let inputVal = e.target.value;
                let intValue = parseInt(inputVal, 10);
                if (!isNaN(intValue)) {
                  intValue = Math.min(10, intValue);
                  inputVal = intValue.toString();
                }
                handleChangeEditar("EducacionFisica", inputVal);
              }
              }
            />
            <label>Educación Física</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              name="Fisica"
              maxLength={2}
              minLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Fisica}
              onChange={(e) => {
                let inputVal = e.target.value;
                let intValue = parseInt(inputVal, 10);
                if (!isNaN(intValue)) {
                  intValue = Math.min(10, intValue);
                  inputVal = intValue.toString();
                }
                handleChangeEditar("Fisica", inputVal);
              }
              }
            />
            <label>Física</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              name="Geografia"
              maxLength={2}
              minLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Geografia}
              onChange={(e) => {
                let inputVal = e.target.value;
                let intValue = parseInt(inputVal, 10);
                if (!isNaN(intValue)) {
                  intValue = Math.min(10, intValue);
                  inputVal = intValue.toString();
                }
                handleChangeEditar("Geografia", inputVal);
              }
              }
            />
            <label>Geografía</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              name="Historia"
              maxLength={2}
              minLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Historia}
              onChange={(e) => {
                let inputVal = e.target.value;
                let intValue = parseInt(inputVal, 10);
                if (!isNaN(intValue)) {
                  intValue = Math.min(10, intValue);
                  inputVal = intValue.toString();
                }
                handleChangeEditar("Historia", inputVal);
              }
              }
            />
            <label>Historia</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              name="LenguayLiteratura"
              maxLength={2}
              minLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.LenguayLiteratura}
              onChange={(e) => {
                let inputVal = e.target.value;
                let intValue = parseInt(inputVal, 10);
                if (!isNaN(intValue)) {
                  intValue = Math.min(10, intValue);
                  inputVal = intValue.toString();
                }
                handleChangeEditar("LenguayLiteratura", inputVal);
              }
              }
            />
            <label>Lengua y Literatura</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              name="Matematicas"
              maxLength={2}
              minLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Matematicas}
              onChange={(e) => {
                let inputVal = e.target.value;
                let intValue = parseInt(inputVal, 10);
                if (!isNaN(intValue)) {
                  intValue = Math.min(10, intValue);
                  inputVal = intValue.toString();
                }
                handleChangeEditar("Matematicas", inputVal);
              }
              }
            />
            <label>Matemáticas</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              name="Quimica"
              maxLength={2}
              minLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Quimica}
              onChange={(e) => {
                let inputVal = e.target.value;
                let intValue = parseInt(inputVal, 10);
                if (!isNaN(intValue)) {
                  intValue = Math.min(10, intValue);
                  inputVal = intValue.toString();
                }
                handleChangeEditar("Quimica", inputVal);
              }
              }
            />
            <label>Química</label>
          </div>
        </div>
        {isEdit ? <button type="submit">Editar notas del alumno</button> : ""}
      </form>
    </>
  );
}

export default ImputEditNoteStudents;
