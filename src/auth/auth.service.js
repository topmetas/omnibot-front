import api from "../api/api";

export async function login(email) {
  const res = await api.post("/clients/login", { email });
  localStorage.setItem("apiKey", res.data.apiKey);
  return res.data;
}

export function logout() {
  localStorage.removeItem("apiKey");
}
