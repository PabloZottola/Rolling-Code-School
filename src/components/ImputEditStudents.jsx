import { useContext } from "react";
import AppContext from "../AppContext";
import EscuelaApi from "../api/EscuelaApi";
import { useStudents } from "../hook/useStudents";

function ImputEditStudents() {
  const { selectedStudent, setSelectedStudent, isEdit, setReFresh, isReFresh } =
    useContext(AppContext);
  const { firstName, lastName, phone, email, yearOfStudy, _id } =
    selectedStudent;
  const { getStudents } = useStudents();
  const handleSubmit = (event) => {
    event.preventDefault();
    editStudents();
    getStudents("");
  };
  const editStudents = async () => {
    try {
      const resp = await EscuelaApi.put("/admin/editstudents", {
        firstName,
        lastName,
        yearOfStudy,
        phone,
        email,
        _id,
      });
    } catch (error) {
      console.log(error);
    }
  };
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
              onChange={(e) => handleChangeEditar("firstName", e.target.value)}
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
              onChange={(e) => handleChangeEditar("lastName", e.target.value)}
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
              className={yearOfStudy ? "custom-input active" : "custom-input"}
            >
              <option value=""></option>
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
        </div>
        <button type="submit">Editar alumno</button>
      </form>
    </>
  );
}

export default ImputEditStudents;
