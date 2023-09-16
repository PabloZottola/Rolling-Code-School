import EscuelaApi from "../api/EscuelaApi";
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

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      phone.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      repeatPassword.trim() === ""
    ) {
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

    startLogin();
  };

  const startLogin = async () => {
    try {
      const res = await EscuelaApi.post("/auth/register", {
        firstName,
        lastName,
        phone,
        email,
        password,
        repeatPassword,
      });
      console.log(res);
      setErrorMessage(res.data.msg);
    } catch (error) {
      console.log(error);
    }
  };
  const validateEmail = () => {
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validateEmail = regEx.test(email);
    return validateEmail;
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
