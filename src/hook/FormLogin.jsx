import { useContext, useState } from "react";
import EscuelaApi from "../api/EscuelaApi";
import { useNavigate } from "react-router";
import AppContext from "../AppContext";

function useLoginForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setIsUserLogged, setIsModalOpen } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(!loading);
    setErrorMessage("");
    if (email.trim() === "" || password.trim() === "") {
      setErrorMessage("Todos los campos son obligatorios.");
      return;
    }
    if (!validateEmail(email) || email.length > 35) {
      setErrorMessage("E-mail no valido.");
      return;
    }
    if (password.length > 20 || password.length <= 5) {
      setErrorMessage("Contraseña no valida.");
      return;
    }
    startLogin();
  };

  const startLogin = async () => {
    try {
      const res = await EscuelaApi.post("/auth/login", {
        email,
        password,
      });
      setErrorMessage(res.data.msg);
      localStorage.setItem("token", res.data.token);
      setIsUserLogged(true);
      setIsModalOpen(false);
      navigate("/admin");
    } catch (error) {
      setErrorMessage(error.response.data.msg);
    }
    setLoading(false);
  };

  const validateEmail = () => {
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validateEmail = regEx.test(email);
    return validateEmail;
  };

  return {
    loading,
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    handleSubmit,
  };
}

export default useLoginForm;
