import axios from "axios";

const EscuelaApi = axios.create({
  baseURL: "http://localhost:4040/",
});

export default EscuelaApi;
