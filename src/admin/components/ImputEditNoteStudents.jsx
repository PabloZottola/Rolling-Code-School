import useEditNoteInput from "../../hook/UseEditNoteStudents";

function ImputEditNoteStudents({ getStudents, closeModal, setIsShowModal }) {
  const {
    noteIndex,
    errorMessage,
    editedNotes,
    handleChangeEditar,
    handleChangeNote,
    handleSubmit,
    isEdit,
    isValidInput,
  } = useEditNoteInput({ getStudents, closeModal, setIsShowModal });

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
              type="number"
              id="Biologia"
              maxLength={2}
              minLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Biologia}
              onChange={(e) => {
                handleChangeEditar(e.target.id, e.target.value);
              }}
            />
            <label>Biología</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              id="Economia"
              maxLength={2}
              minLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Economia}
              onChange={(e) => {
                handleChangeEditar(e.target.id, e.target.value);
              }}
            />
            <label>Economía</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              id="EducacionFisica"
              maxLength={2}
              minLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.EducacionFisica}
              onChange={(e) => {
                handleChangeEditar(e.target.id, e.target.value);
              }}
            />
            <label>Educación Física</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              id="Fisica"
              maxLength={2}
              minLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Fisica}
              onChange={(e) => {
                handleChangeEditar(e.target.id, e.target.value);
              }}
            />
            <label>Física</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              id="Geografia"
              maxLength={2}
              minLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Geografia}
              onChange={(e) => {
                handleChangeEditar(e.target.id, e.target.value);
              }}
            />
            <label>Geografía</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              id="Historia"
              maxLength={2}
              minLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Historia}
              onChange={(e) => {
                handleChangeEditar(e.target.id, e.target.value);
              }}
            />
            <label>Historia</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              id="LenguayLiteratura"
              maxLength={2}
              minLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.LenguayLiteratura}
              onChange={(e) => {
                handleChangeEditar(e.target.id, e.target.value);
              }}
            />
            <label>Lengua y Literatura</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              id="Matematicas"
              maxLength={2}
              minLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Matematicas}
              onChange={(e) => {
                handleChangeEditar(e.target.id, e.target.value);
              }}
            />
            <label>Matemáticas</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              id="Quimica"
              maxLength={2}
              minLength={1}
              className={"custom-input active"}
              value={editedNotes[noteIndex]?.Quimica}
              onChange={(e) => {
                handleChangeEditar(e.target.id, e.target.value);
              }}
            />
            <label>Química</label>
          </div>
        </div>
        {isEdit ? (
          <>
            <span>{errorMessage}</span>
            <button type="submit" disabled={!isValidInput}>
              Editar notas del alumno
            </button>
          </>
        ) : (
          ""
        )}
      </form>
    </>
  );
}

export default ImputEditNoteStudents;
