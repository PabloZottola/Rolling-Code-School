import React, { useState } from "react";

function Modal(props) {
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Abrir Modal</button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <p>{props.texto}</p>
            <button onClick={handleSubmit}>Verificar Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
