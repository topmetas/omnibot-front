import UsageCard from "./UsageCard";

export default function StatsCards({ summary, plan, aiProvider }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <UsageCard
          title="Mensagens enviadas"
          value={summary.messages}
          max={plan.messageLimit}
        />

        <UsageCard
          title="Tokens consumidos"
          value={summary.tokens}
          max={plan.tokenLimit}
        />

        <UsageCard
          title="Uso do plano"
          value={summary.tokens}
          max={plan.tokenLimit}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-white p-4 rounded shadow">
          <strong>Plano:</strong> {plan.name}
        </div>

        <div className="bg-white p-4 rounded shadow">
          <strong>Provedor IA:</strong> {aiProvider}
        </div>

        <div className="bg-white p-4 rounded shadow">
          <strong>Status:</strong>{" "}
          <span className="text-green-600">Ativo</span>
        </div>
      </div>
    </>
  );
}
