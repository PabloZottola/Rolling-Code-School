import { useContext } from "react";
import AppContext from "../../AppContext";
import fondoEdit from "../../img/fondoEditarAlum.jpg";
import padLockOpen from "../../img/candado-abierto.png";
import padLockBlock from "../../img/candado-cerrado.png";
import ImputEditNoteStudents from "./ImputEditNoteStudents";
import "../../style/modal.css";

function EditNoteStudents({ getStudents }) {
  const { isModalOpenEditNote, setIsModalOpenEditNote, isEdit, setIsEdit } =
    useContext(AppContext);

  const closeModal = () => {
    setIsEdit(false);
    setIsModalOpenEditNote(false);
  };

  if (!isModalOpenEditNote) return null;

  const handleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <section className="auth">
      <div className="wrapper-note">
        <div className="top">
          {isEdit ? (
            <button className="padLock" onClick={handleIsEdit} type="submit">
              <img src={padLockOpen} alt="" />
            </button>
          ) : (
            <button className="padLock" onClick={handleIsEdit} type="submit">
              <img src={padLockBlock} alt="" />
            </button>
          )}

          <h2>
            NOTAS DEL
            <br />
            ALUMNOS
          </h2>
          <button className="closeModal" onClick={closeModal}>
            X
          </button>
          <img
            className="fondo"
            src={fondoEdit}
            alt="Formulario de registro de alumnos"
          />
        </div>
        <ImputEditNoteStudents
          getStudents={getStudents}
          closeModal={closeModal}
        />
      </div>
    </section>
  );
}

export default EditNoteStudents;
