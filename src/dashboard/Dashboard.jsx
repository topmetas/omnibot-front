import Onboarding from "../components/Onboarding";
import StatsCards from "../components/StatsCards";
import UsageChart from "../components/UsageChart";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Onboarding */}
      <Onboarding />

      {/* Título */}
      <h1 className="text-3xl font-bold dashboard-title">
        Dashboard
      </h1>

      {/* Cards */}
      <div className="usage-cards">
        <StatsCards />
      </div>

      {/* Gráfico */}
      <UsageChart />
    </div>
  );
}

