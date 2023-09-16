import React, { useState } from "react";

function CustomInput() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      phone === "" ||
      email === "" ||
      password === "" ||
      repeatPassword === ""
    ) {
      return console.log("todos los campos son obligatorios");
    }
    const datos = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      password: password,
      repeatPassword: repeatPassword,
    };
    console.log(datos);
    clearState();
  };
  const clearState = () => {
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              type="text"
              className={firstName ? "custom-input active" : "custom-input"}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label>Nombre</label>
            <input
              type="text"
              className={phone ? "custom-input active" : "custom-input"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label>Numero de telefono</label>
            <input
              type="text"
              className={password ? "custom-input active" : "custom-input"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Contraseña</label>
          </div>
          <div>
            <input
              type="text"
              className={lastName ? "custom-input active" : "custom-input"}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label>Apellido</label>
            <input
              type="text"
              className={email ? "custom-input active" : "custom-input"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              className={
                repeatPassword ? "custom-input active" : "custom-input"
              }
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <label>Repetir Contraseña</label>
          </div>
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </>
  );
}

export default CustomInput;
