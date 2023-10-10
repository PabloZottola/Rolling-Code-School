import { useContext } from "react";
import AppContext from "../../AppContext";
import UseEdiStudents from "../../hook/UseEdiStudents";

function ImputEditStudents({ getStudents, closeModal, setIsShowModal }) {
  const { selectedStudent, setSelectedStudent, isEdit } =
    useContext(AppContext);
  const {
    firstName,
    lastName,
    phone,
    email,
    yearOfStudy,
    monthlyFees,
    BlockedStudent,
    errorMessage,
    handleSubmit,
  } = UseEdiStudents({ getStudents, closeModal });

  const handleChangeEditar = (propiedad, valor) => {
    setSelectedStudent({
      ...selectedStudent,
      [propiedad]: valor,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              disabled={!isEdit}
              type="name"
              name="name"
              maxLength="24"
              className={firstName ? "custom-input active" : "custom-input"}
              value={firstName}
              onChange={(e) =>
                handleChangeEditar(
                  "firstName",
                  e.target.value.replace(/[^A-Za-z\s']+/g, "")
                )
              }
            />
            <label>Nombre</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="lastname"
              name="lastname"
              maxLength="24"
              className={lastName ? "custom-input active" : "custom-input"}
              value={lastName}
              onChange={(e) =>
                handleChangeEditar(
                  "lastName",
                  e.target.value.replace(/[^A-Za-z\s']+/g, "")
                )
              }
            />
            <label>Apellido</label>
          </div>
          <div>
            <select
              disabled={!isEdit}
              name="YearOfStudy"
              value={yearOfStudy}
              onChange={(e) =>
                handleChangeEditar("yearOfStudy", e.target.value)
              }
              className={"custom-input active"}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <label>Año de cursado</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="phone"
              name="phone"
              maxLength="10"
              className={phone ? "custom-input active" : "custom-input"}
              value={phone}
              onChange={(e) =>
                handleChangeEditar(
                  "phone",
                  e.target.value.replace(/[^0-9]/g, "")
                )
              }
            />
            <label>Número de teléfono</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="email"
              name="email"
              maxLength="35"
              className={email ? "custom-input active" : "custom-input"}
              value={email}
              onChange={(e) =>
                handleChangeEditar("email", e.target.value.toLowerCase())
              }
            />
            <label>Email</label>
          </div>
          <div>
            <input
              disabled={!isEdit}
              type="text"
              name="monthlyFees"
              maxLength="5"
              minLength="5"
              className={monthlyFees ? "custom-input active" : "custom-input"}
              value={monthlyFees}
              onChange={(e) =>
                handleChangeEditar(
                  "monthlyFees",
                  e.target.value.replace(/[^0-9-]/g, "")
                )
              }
            />
            <label>Matrícula (MM-DD)</label>
          </div>
          <div>
            <select
              disabled={!isEdit}
              name="BlockedStudent"
              value={BlockedStudent}
              onChange={(e) =>
                handleChangeEditar("BlockedStudent", e.target.value)
              }
              className={"custom-input active"}
            >
              <option value="true">Suspendido</option>
              <option value="false">No suspendido</option>
            </select>
            <label>Estado de alumno</label>
          </div>
        </div>
        {isEdit ? (
          <>
            <span>{errorMessage}</span>
            <button type="submit">Editar alumno</button>
          </>
        ) : (
          ""
        )}
      </form>
    </>
  );
}

export default ImputEditStudents;
