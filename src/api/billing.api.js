import api from "./api";

export async function checkout(clientId) {
  const res = await api.post("/billing/checkout", { clientId });
  window.location.href = res.data.checkoutUrl;
}
