import axios from "axios";

const EscuelaApi = axios.create({
  baseURL: "http://localhost:4040/",
});

EscuelaApi.interceptors.request.use((config) => {
  config.headers = {
    "x-token": localStorage.getItem("token"),
  };
  return config;
});

export default EscuelaApi;
