export default function StatCard({ title, value = 0, max = 1 }) {
    const safeValue = Number(value) || 0;
    const safeMax = Number(max) || 1;
  
    const percent = Math.min((safeValue / safeMax) * 100, 100);
  
    return (
      <div className="rounded-xl bg-white dark:bg-slate-800 p-5 shadow">
        <p className="text-sm text-slate-500">{title}</p>
  
        <p className="text-2xl font-bold mt-1">
          {safeValue} / {safeMax}
        </p>
  
        <div className="mt-3 h-2 bg-slate-200 dark:bg-slate-700 rounded">
          <div
            className="h-2 bg-indigo-500 rounded transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
  
        <p className="text-xs text-slate-400 mt-1">
          {Math.round(percent)}% do plano
        </p>
      </div>
    );
  }
  
  