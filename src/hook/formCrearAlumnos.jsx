import EscuelaApi from "../api/EscuelaApi";
import { useState } from "react";

function useCrearAlumnosForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      yearOfStudy.trim() === "" ||
      phone.trim() === "" ||
      email.trim() === ""    //aquí no hay ||
    ) {
      setErrorMessage("Todos los campos son obligatorios.");
      return;
    }
    if (/\d/.test(firstName) || firstName.length < 3) {
      setErrorMessage("Nombre invalido.");
      return;
    }
    if (/\d/.test(lastName) || lastName.length < 2) {
      setErrorMessage("Apellido invalido.");
      return;
    }
    if (!YearOfStudy || isNaN(YearOfStudy) || YearOfStudy < 1 || YearOfStudy > 6) {
      setErrorMessage("Seleccione un año válido.");
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

    startRegister();
  };

  const startRegister = async () => {
    try {
      const res = await EscuelaApi.post("/auth/crearAlumnos", {
        firstName,
        lastName,
        yearOfStudy,
        phone,
        email,
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
    yearOfStudy,
    setYearOfStudy,
    phone,
    setPhone,
    email,
    setEmail,
    errorMessage,
    handleSubmit,
  };
}

export default useCrearAlumnosForm;
