import useCrearAlumnosForm from "../hook/FormCrearAlumnos";

function CustomImputCrearAlumnos() {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
    yearOfStudy,
    setYearOfStudy,
    email,
    setEmail,
    errorMessage,
    handleSubmit,
  } = useCrearAlumnosForm();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              type="name"
              name="name"
              maxLength="24"
              className={firstName ? "custom-input active" : "custom-input"}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label>Nombre</label>
          </div>
          <div>
            <input
              type="lastname"
              name="lastname"
              maxLength="24"
              className={lastName ? "custom-input active" : "custom-input"}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label>Apellido</label>
          </div>

          <div>
            <select
              name="YearOfStudy"
              value={yearOfStudy}
              onChange={(e) => setYearOfStudy(e.target.value)}
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
              type="phone"
              name="phone"
              maxLength="10"
              className={phone ? "custom-input active" : "custom-input"}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
            />
            <label>Número de teléfono</label>
          </div>
          <div>
            <input
              type="email"
              name="email"
              maxLength="35"
              className={email ? "custom-input active" : "custom-input"}
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
            />
            <label>Email</label>
          </div>
        </div>
        <span>{errorMessage}</span>
        <button type="submit">Registrar alumno</button>
      </form>
    </>
  );
}

export default CustomImputCrearAlumnos;
