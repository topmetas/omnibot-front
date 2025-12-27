import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  export default function UsageChart({ data }) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold text-gray-700 mb-4">
          Uso por origem
        </h3>
  
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="messages" fill="#4f46e5" />
            <Bar dataKey="tokens" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  