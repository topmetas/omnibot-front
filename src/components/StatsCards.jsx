import StatCard from "./StatCard";

export default function StatsCards({ summary, plan, aiProvider }) {
  if (!summary || !plan) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Mensagens enviadas"
          value={summary.messages}
          max={plan.messageLimit}
        />

        <StatCard
          title="Tokens consumidos"
          value={summary.tokens}
          max={plan.tokenLimit}
        />

        <StatCard
          title="Uso do plano"
          value={summary.tokens}
          max={plan.tokenLimit}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow">
          <strong>Plano:</strong> {plan.name}
        </div>

        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow">
          <strong>Provedor IA:</strong> {aiProvider}
        </div>

        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow">
          <strong>Status:</strong>{" "}
          <span className="text-green-500">Ativo</span>
        </div>
      </div>
    </div>
  );
}



  
