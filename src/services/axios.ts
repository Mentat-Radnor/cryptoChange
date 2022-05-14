import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api",

  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    crossDomain: true,
  },
});

export default apiClient;
