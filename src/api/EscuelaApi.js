import axios from "axios";

const EscuelaApi = axios.create({
  baseURL: "https://proyectofinalrollingcodeschoolbackend.onrender.com",
});

EscuelaApi.interceptors.request.use((config) => {
  config.headers = {
    "x-token": localStorage.getItem("token"),
  };
  return config;
});

export default EscuelaApi;
