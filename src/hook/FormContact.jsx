import EscuelaApi from "../api/EscuelaApi";
import { useState } from "react";

function useContactFormHook() {
  const [nameForm, setNameForm] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (
      nameForm.trim() === "" ||
      email.trim() === "" ||
      message.trim() === ""
    ) {
      setErrorMessage("Todos los campos son obligatorios.");
      return;
    }
    if (/\d/.test(nameForm) || nameForm.length < 2 || nameForm.length > 24) {
      setErrorMessage("Nombre inválido.");
      return;
    }

    if (!validateEmail(email) || email.length > 35) {
      setErrorMessage("E-mail no válido.");
      return;
    }
    if (/\d/.test(message) || message.length < 3 || message.length > 300) {
      setErrorMessage("Nombre inválido.");
      return;
    }

    startForm();
  };

  const startForm = async () => {
    try {
      const res = await EscuelaApi.post("/contact", {
        nameForm,
        email,
        message,
      });
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
    nameForm,
    setNameForm,
    email,
    setEmail,
    message,
    setMessage,
    errorMessage,
    handleSubmit,
  };
}

export default useContactFormHook;
