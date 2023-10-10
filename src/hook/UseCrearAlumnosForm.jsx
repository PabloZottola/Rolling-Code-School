import AppContext from "../AppContext";
import EscuelaApi from "../api/EscuelaApi";
import { useContext, useState } from "react";

function UseCrearAlumnosForm({ getStudents, setIsShowModal }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setIsModalOpenStudents } = useContext(AppContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      yearOfStudy.trim() === "" ||
      phone.trim() === "" ||
      email.trim() === ""
    ) {
      setErrorMessage("Todos los campos son obligatorios.");
      return;
    }
    if (/\d/.test(firstName) || firstName.length < 2 || firstName.length > 24) {
      setErrorMessage("Nombre inválido.");
      return;
    }
    if (/\d/.test(lastName) || lastName.length < 2 || lastName.length > 24) {
      setErrorMessage("Apellido inválido.");
      return;
    }
    if (
      !yearOfStudy ||
      isNaN(yearOfStudy) ||
      yearOfStudy < 1 ||
      yearOfStudy > 6
    ) {
      setErrorMessage("Seleccione un año válido.");
      return;
    }
    if (/[a-zA-Z]/.test(phone) || phone.length < 9 || phone.length > 10) {
      setErrorMessage("Número de telefono invalido.");
      return;
    }
    if (!validateEmail(email) || email.length > 35) {
      setErrorMessage("E-mail no válido.");
      return;
    }
    startRegister();
    setIsShowModal(true);

    setTimeout(() => {
      setIsShowModal(false);
      setIsModalOpenStudents(false);
    }, 3000);
  };

  const startRegister = async () => {
    try {
      const res = await EscuelaApi.post("/createstudents", {
        firstName,
        lastName,
        yearOfStudy,
        phone,
        email,
      });
      getStudents("");
    } catch (error) {
      setErrorMessage(error.response.data.msg);
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

export default UseCrearAlumnosForm;
