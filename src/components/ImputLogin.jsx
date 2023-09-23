import useLoginForm from "../hook/FormLogin";

function ImputLogin() {
  const { email, setEmail, password, setPassword, errorMessage, handleSubmit } =
    useLoginForm();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
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
        </div>
        <span>{errorMessage}</span>
        <button type="submit">Registrarse</button>
      </form>
    </>
  );
}

export default ImputLogin;
