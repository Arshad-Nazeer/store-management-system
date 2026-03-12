import axios from "axios";

const api = axios.create({
//   baseURL: "http://localhost:3600/api"
    // baseURL: "/api"
    baseURL: "https://store-management-system-pmpu.onrender.com/api"
});

export default api;