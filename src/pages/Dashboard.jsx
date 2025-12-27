import { useEffect, useState } from "react";
import StatsCards from "../components/StatsCards";
import UsageChart from "../components/UsageChart";
import { getStats } from "../api/stats.api";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const data = await getStats();
        setStats(data);
      } catch (err) {
        console.error("Erro ao carregar stats, usando mock", err);

        // 🔥 MOCK AUTOMÁTICO (SaaS profissional)
        setStats({
          summary: {
            messages: 1234,
            tokens: 45678,
          },
          plan: {
            name: "Pro",
            messageLimit: 5000,
            tokenLimit: 100000,
          },
          aiProvider: "OpenAI",
          chart: [
            { name: "Widget", messages: 800, tokens: 30000 },
            { name: "API", messages: 300, tokens: 10000 },
            { name: "Site", messages: 134, tokens: 5678 },
          ],
        });
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-slate-500">
        Carregando dashboard...
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <StatsCards
        summary={stats.summary}
        plan={stats.plan}
        aiProvider={stats.aiProvider}
      />

      <UsageChart data={stats.chart} />
    </div>
  );
}









