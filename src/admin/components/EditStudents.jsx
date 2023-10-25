import { useContext, useState } from "react";
import AppContext from "../../AppContext";
import fondoEdit from "../../img/fondoEditarAlum.jpg";
import ImputEditStudents from "./ImputEditStudents";
import padLockOpen from "../../img/candado-abierto.png";
import padLockBlock from "../../img/candado-cerrado.png";
import "../../style/modal.css";
import UseEdiStudents from "../../hook/UseEdiStudents";

function EditStudents({getStudents}) {
  const [isShowModal, setIsShowModal] = useState(false);
  const { isModalOpenEdit, setIsModalOpenEdit, isEdit, setIsEdit } =
    useContext(AppContext);
    const {
      handleSubmit
    } = UseEdiStudents();

  const closeModal = () => {
    setIsEdit(false);
    setIsModalOpenEdit(false);
  };
  if (!isModalOpenEdit) return null;

  const handleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleConfirmEdit=(e)=>{
    e.preventDefault();
    handleSubmit();
    setTimeout(() => {
      getStudents("");
    }, 1000);
    setTimeout(() => {
      setIsShowModal(false);
      setIsEdit(false);
      setIsModalOpenEdit(false);
    }, 2000);
  }

  return (
    <>
      {isShowModal ? (
        <section className="modaloverlay">
          <div className="modalcontent">
            <button className="close" onClick={() => setIsShowModal(false)}>
              X
            </button>
            <h2>Por favor, confirme <br />la edición del alumno</h2>
            <button onClick={handleConfirmEdit} className="buttonConfirm">Confirmar</button>
          </div>
        </section>
      ) : (
        ""
      )}
      <section className="auth">
        <div className="wrapper">
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
              DETALLES <br />
              DE ALUMNOS
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
          <ImputEditStudents
          getStudents={getStudents}
            setIsShowModal={setIsShowModal}
          />
        </div>
      </section>
    </>
  );
}

export default EditStudents;
