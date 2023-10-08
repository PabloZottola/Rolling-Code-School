import { useContext, useEffect, useState } from "react";
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

  useEffect(() => {
    getStudents("");
  }, []);

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
              maxLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Biologia}
              onChange={(e) =>
                handleChangeEditar(
                  "Biologia",
                  e.target.value.replace(/[^0-9]/g, "")
                )
              }
            />
            <label>Biología</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              name="Economia"
              maxLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Economia}
              onChange={(e) =>
                handleChangeEditar(
                  "Economia",
                  e.target.value.replace(/[^0-9]/g, "")
                )
              }
            />
            <label>Economía</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              name="EducacionFisica"
              maxLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.EducacionFisica}
              onChange={(e) =>
                handleChangeEditar(
                  "EducacionFisica",
                  e.target.value.replace(/[^0-9]/g, "")
                )
              }
            />
            <label>Educación Física</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              name="Fisica"
              maxLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Fisica}
              onChange={(e) =>
                handleChangeEditar(
                  "Fisica",
                  e.target.value.replace(/[^0-9]/g, "")
                )
              }
            />
            <label>Física</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              name="Geografia"
              maxLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Geografia}
              onChange={(e) =>
                handleChangeEditar(
                  "Geografia",
                  e.target.value.replace(/[^0-9]/g, "")
                )
              }
            />
            <label>Geografía</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              name="Historia"
              maxLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Historia}
              onChange={(e) =>
                handleChangeEditar(
                  "Historia",
                  e.target.value.replace(/[^0-9]/g, "")
                )
              }
            />
            <label>Historia</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              name="LenguayLiteratura"
              maxLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.LenguayLiteratura}
              onChange={(e) =>
                handleChangeEditar(
                  "LenguayLiteratura",
                  e.target.value.replace(/[^0-9]/g, "")
                )
              }
            />
            <label>Lengua y Literatura</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              name="Matematicas"
              maxLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Matematicas}
              onChange={(e) =>
                handleChangeEditar(
                  "Matematicas",
                  e.target.value.replace(/[^0-9]/g, "")
                )
              }
            />
            <label>Matemáticas</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              name="Quimica"
              maxLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Quimica}
              onChange={(e) =>
                handleChangeEditar(
                  "Quimica",
                  e.target.value.replace(/[^0-9]/g, "")
                )
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
