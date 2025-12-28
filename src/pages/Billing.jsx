import api from "../api/api";

export default function Billing() {
  async function upgrade(plan) {
    try {
      const res = await api.post("/billing/subscribe", {
        plan,
      });

      // 🔁 Redireciona para o checkout Mercado Pago
      window.location.href = res.data.init_point;
    } catch (error) {
      console.error("Erro ao iniciar assinatura:", error);
      alert("Erro ao iniciar pagamento. Tente novamente.");
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Plano & Cobrança
      </h1>

      <div className="space-y-4">
        <button
          onClick={() => upgrade("eco")}
          className="btn w-full"
        >
          Eco — R$49/mês
        </button>

        <button
          onClick={() => upgrade("pro")}
          className="btn w-full"
        >
          Pro — R$149/mês
        </button>
      </div>
    </div>
  );
}