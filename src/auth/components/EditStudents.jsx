import { useContext, useState } from "react";
import AppContext from "../../AppContext";
import fondoRegistro from "../../img/fondoCrearAlumnos.jpg";
import ImputEditStudents from "../../components/ImputEditStudents";
import padLockOpen from "../../img/candado-abierto.png";
import padLockBlock from "../../img/candado-cerrado.png";
import "../css/auth.css";

function EditStudents() {
  const { isModalOpenEdit, setIsModalOpenEdit, isEdit, setIsEdit } =
    useContext(AppContext);

  const closeModal = () => {
    setIsModalOpenEdit(false);
  };

  if (!isModalOpenEdit) return null;

  const handleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
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
          <button className="closeModal" onClick={closeModal}>
            X
          </button>
          <h2>
            DETALLES <br />
            DE ALUMNOS
          </h2>
          <img
            className="fondo"
            src={fondoRegistro}
            alt="Formulario de registro de alumnos"
          />
        </div>
        <ImputEditStudents />
      </div>
    </section>
  );
}

export default EditStudents;
