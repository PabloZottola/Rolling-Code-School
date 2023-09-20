import useCrearAlumnosForm from "../hook/FormCrearAlumnos";

function CustomImputCrearAlumnos() {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
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
