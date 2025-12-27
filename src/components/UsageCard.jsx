import React from "react";

export default function UsageCard({ title, value, max }) {
  const percent = Math.min((value / max) * 100, 100);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold text-gray-700">{title}</h3>

      <p className="text-2xl font-semibold mt-1">
        {value} / {max}
      </p>

      <div className="w-full h-2 bg-gray-200 rounded mt-3">
        <div
          className="h-2 bg-blue-500 rounded"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="text-sm text-gray-500 mt-1">
        {percent.toFixed(1)}%
      </p>
    </div>
  );
}
