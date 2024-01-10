import { useContext, useState } from "react";
import AppContext from "../../AppContext";
import EscuelaApi from "../../api/EscuelaApi";
import { useStudents } from "../../hook/useStudents";

function DeleteStudents({getStudents}) {
  const [loading, setLoading] = useState(false);
  const { selectedStudent, setIsModalOpenDelete, isModalOpenDelete } =
    useContext(AppContext);
  const callDeleteStudents = async () => {
    setLoading(true);
    try {
      const resp = await EscuelaApi.delete(
        `/admin/deletestudents/${selectedStudent}`
      );
      getStudents("")
    } catch (error) {
      console.log(error);
    }
    console.log("hola")
    setLoading(false);
  };

  const handleConfirmDelete = () => {
    callDeleteStudents();
    setIsModalOpenDelete(false);
  };

  return (
    <>
      {isModalOpenDelete ? (
        <section className="modaloverlay">
          <div className="modalcontent">
            <button
              className="close"
              onClick={() => setIsModalOpenDelete(false)}
            >
              X
            </button>
            <h2>
              Por favor, confirme <br />
              la edición del alumno
            </h2>
            <button
              onClick={handleConfirmDelete}
              className="buttonConfirm"
              disabled={loading}
            >
              Confirmar
            </button>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default DeleteStudents;
