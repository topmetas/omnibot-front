import api from "../services/api";

export const getTemplates = () => api.get("/api/templates");
export const applyTemplate = (id) =>
  api.post(`/api/templates/${id}/apply`);

