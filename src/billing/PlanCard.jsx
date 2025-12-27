import api from "../services/api";

export default function PlanCard({ plan }) {
  async function checkout() {
    const { data } = await api.post("/api/billing/checkout", {
      plan: plan.name,
    });
    window.location.href = data.checkoutUrl;
  }

  return (
    <div className="border rounded-xl p-6">
      <h2 className="text-xl font-bold capitalize">{plan.name}</h2>
      <p className="text-3xl my-4">R$ {plan.price}</p>
      <button
        onClick={checkout}
        className="bg-indigo-600 text-white w-full py-2 rounded"
      >
        Assinar
      </button>
    </div>
  );
}
