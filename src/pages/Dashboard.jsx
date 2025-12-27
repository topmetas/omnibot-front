import { useEffect, useState } from "react";
import Onboarding from "../components/Onboarding";
import StatsCards from "../components/StatsCards";
import UsageChart from "../components/UsageChart";
import { getStats } from "../api/stats.api";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getStats().then(setStats);
  }, []);

  if (!stats) {
    return (
      <div className="p-6 text-slate-500">
        Carregando dashboard...
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Onboarding */}
      <Onboarding />

      {/* Título */}
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      {/* Cards */}
      <StatsCards
        summary={stats.summary}
        plan={stats.plan}
        aiProvider={stats.aiProvider}
      />

      {/* Gráfico */}
      <UsageChart data={stats.chart} />
    </div>
  );
}





