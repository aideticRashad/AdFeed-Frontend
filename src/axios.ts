import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:8000",
});

export const AUTH_API = axios.create({
  baseURL: "http://localhost:8000/login",
});

// API.interceptors.request.use((config) => {
//   config.headers["Authorization"] = `Bearer ${localStorage.getItem(
//     "accessToken"
//   )}`;
//   return config;
// });
