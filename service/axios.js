import axios from "axios";

const api = axios.create({
  baseURL: "https://mapi.looknote.co.kr",
});

api.defaults.timeout = 3000;

export default api;
