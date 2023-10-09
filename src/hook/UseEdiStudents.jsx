import { useContext, useState } from "react";
import EscuelaApi from "../api/EscuelaApi";
import AppContext from "../AppContext";

function UseEdiStudents({ getStudents }) {
  const [errorMessage, setErrorMessage] = useState("");
  const { selectedStudent } = useContext(AppContext);
  const {
    firstName,
    lastName,
    yearOfStudy,
    phone,
    email,
    _id,
    monthlyFees,
    BlockedStudent,
  } = selectedStudent;

  const validateEmail = () => {
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validateEmail = regEx.test(email);
    return validateEmail;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    console.log(phone);
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      yearOfStudy.trim() === "" ||
      phone === "" ||
      email.trim() === "" ||
      monthlyFees.trim() === ""
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
    setErrorMessage("");
    // await editStudents();
    getStudents("");
  };

  const editStudents = async () => {
    try {
      const resp = await EscuelaApi.put("/admin/editstudents", {
        firstName,
        lastName,
        yearOfStudy,
        phone,
        email,
        monthlyFees,
        BlockedStudent,
        _id,
      });
      getStudents("");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    firstName,
    lastName,
    phone,
    email,
    yearOfStudy,
    _id,
    monthlyFees,
    BlockedStudent,
    errorMessage,
    handleSubmit,
  };
}

export default UseEdiStudents;
