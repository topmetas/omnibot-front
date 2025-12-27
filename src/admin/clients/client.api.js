import api from "../../services/api";

export const getClients = () => api.get("/api/admin/clients");
export const createClient = (data) => api.post("/api/admin/clients", data);
export const updateClient = (id, data) =>
  api.put(`/api/admin/clients/${id}`, data);
export const deleteClient = (id) =>
  api.delete(`/api/admin/clients/${id}`);
