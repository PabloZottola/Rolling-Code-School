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
      checkEmptySpacesRegister(
        firstName,
        lastName,
        phone,
        email,
        password,
        repeatPassword
      )
    )
      // PASAR A MINUSCULA EL NOMRE Y APELLIDO
      // VALIDAR LOS .. CARACTERES ESPECIALES EN NOMBRE, APELLIDO Y TELEFONO
      return console.log("Todos los campos son obligatorios.");
    if (/\d/.test(firstName)) return console.log("Nombre invalido.");
    if (firstName.length < 2) return console.log("Nombre invalido.");
    if (/\d/.test(lastName)) return console.log("Apellido invalido.");
    if (lastName.length < 2) return console.log("Apellido invalido.");
    if (/[a-zA-Z]/.test(phone))
      return console.log("Numero de telefono invalido.");
    if (phone.length < 9 || phone.length > 10)
      return console.log("Numero de telefono invalido.");
    // if (phoneExist) return console.log("Numero de telefono invalido.");
    // PASAR A MINUSCULA EL EMAIL
    if (!validateEmail(email)) return console.log("E-mail no valido.");
    // if (emailExist) return console.log("E-mail no valido.");
    if (password.length <= 5) return console.log("Contraseña invalida.");
    if (password !== repeatPassword)
      return console.log("Las contraseña no coinciden");
    const datos = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      password: password,
      repeatPassword: repeatPassword,
    };
    console.log(datos);

    function checkEmptySpacesRegister(
      firstName,
      lastName,
      phone,
      email,
      password,
      repeatPassword
    ) {
      if (
        firstName.trim() === "" ||
        lastName.trim() === "" ||
        phone.trim() === "" ||
        email.trim() === "" ||
        password.trim() === "" ||
        repeatPassword.trim() === ""
      ) {
        return true;
      } else {
        return false;
      }
    }
    function validateEmail(email) {
      const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const validateEmail = regEx.test(email);
      return validateEmail;
    }
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
              onChange={(e) => setPhone(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Registrarse</button>
      </form>
    </>
  );
}

export default CustomInput;
