import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://omnibot-489r.onrender.com",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("apiKey");
  if (token) {
    config.headers["x-api-key"] = token;
  }
  return config;
});

export default api;
