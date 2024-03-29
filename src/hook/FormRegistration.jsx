import { useContext, useState } from "react";
import EscuelaApi from "../api/EscuelaApi";
import AppContext from "../AppContext";

function useRegistrationForm({ setIsShowModal, setIsShowModalLoading,}) {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setIsModalOpenProfesor } = useContext(AppContext);

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
    if (/\d/.test(firstName) || firstName.length < 2 || firstName.length > 24) {
      setErrorMessage("Nombre invalido.");
      return;
    }
    if (/\d/.test(lastName) || lastName.length < 2 || lastName.length > 24) {
      setErrorMessage("Apellido invalido.");
      return;
    }
    if (/[a-zA-Z]/.test(phone) || phone.length < 9 || phone.length > 10) {
      setErrorMessage("Numero de telefono invalido.");
      return;
    }
    if (!validateEmail(email) || email.length > 35) {
      setErrorMessage("E-mail no valisdo.");
      return;
    }
    if (
      password.length <= 5 ||
      password.length > 20 ||
      repeatPassword.length <= 5 ||
      repeatPassword.length > 20 ||
      password !== repeatPassword
    ) {
      setErrorMessage("Contraseña invalida o las contraseñas no coinciden.");
      return;
    }
    setLoading(!loading);
    startRegister();
  };
  
  const startRegister = async () => {
    try {
      setIsShowModalLoading(true);
      const res = await EscuelaApi.post("/auth/register", {
        firstName,
        lastName,
        phone,
        email,
        password,
        repeatPassword,
      });
      setIsShowModalLoading(false);
      setIsShowModal(true);
      setTimeout(() => {
        setIsShowModal(false);
        setIsModalOpenProfesor(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
      setIsShowModalLoading(false);
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
    loading,
  };
}

export default useRegistrationForm;
