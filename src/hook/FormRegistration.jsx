import { useState } from "react";

function useRegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (checkEmptySpacesRegister()) {
      setErrorMessage("Todos los campos son obligatorios.");
      return;
    }
    if (/\d/.test(firstName) || firstName.length < 2) {
      setErrorMessage("Nombre invalido.");
      return;
    }
    if (/\d/.test(lastName) || lastName.length < 2) {
      setErrorMessage("Apellido invalido.");
      return;
    }
    if (/[a-zA-Z]/.test(phone) || phone.length < 9 || phone.length > 10) {
      setErrorMessage("Numero de telefono invalido.");
      return;
    }
    // if (phoneExist)
    if (!validateEmail(email)) {
      setErrorMessage("E-mail no valido.");
      return;
    }
    // if (emailExist)
    if (password.length <= 5 || password !== repeatPassword) {
      setErrorMessage("Contraseña invalida o las contraseñas no coinciden.");
      return;
    }

    const datos = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      password: password,
      repeatPassword: repeatPassword,
    };
    clearState();
  };

  const checkEmptySpacesRegister = () => {
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
  };

  const validateEmail = () => {
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validateEmail = regEx.test(email);
    return validateEmail;
  };

  const clearState = () => {
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };

  return {
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
  };
}

export default useRegistrationForm;
