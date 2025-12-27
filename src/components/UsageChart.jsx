export default function UsageCard({ title, value = 0, max = 1 }) {
    const percent = Math.min(
      Math.round((value / max) * 100),
      100
    );
  
    return (
      <div className="bg-white dark:bg-slate-800 p-4 rounded shadow">
        <h4 className="text-sm text-slate-500">{title}</h4>
  
        <p className="text-2xl font-bold mt-1">
          {value.toLocaleString()} / {max.toLocaleString()}
        </p>
  
        <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded mt-2">
          <div
            className="bg-indigo-600 h-2 rounded"
            style={{ width: `${percent}%` }}
          />
        </div>
  
        <p className="text-xs text-slate-500 mt-1">
          {percent}%
        </p>
      </div>
    );
  }
  
  