import useRegistrationForm from "../../hook/FormRegistration";

function ImputRegister({ setIsShowModal }) {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
    email,
    setEmail,
    password,
    setPassword,
    repeatPassword,
    setRepeatPassword,
    errorMessage,
    handleSubmit,
  } = useRegistrationForm({ setIsShowModal });
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
              onChange={(e) =>
                setFirstName(e.target.value.replace(/[^A-Za-z\s']+/g, ""))
              }
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
              onChange={(e) =>
                setLastName(e.target.value.replace(/[^A-Za-z\s']+/g, ""))
              }
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
            <label>Numero de telefono</label>
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
          <div>
            <input
              type="password"
              name="password"
              maxLength="20"
              className={password ? "custom-input active" : "custom-input"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Contraseña</label>
          </div>
          <div>
            <input
              type="password"
              name="password"
              maxLength="20"
              className={
                repeatPassword ? "custom-input active" : "custom-input"
              }
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <label>Repetir Contraseña</label>
          </div>
        </div>
        <span>{errorMessage}</span>
        <button type="submit">Registrarse</button>
      </form>
    </>
  );
}

export default ImputRegister;
