import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "01", messages: 10 },
  { day: "02", messages: 40 },
  { day: "03", messages: 25 },
];

export default function UsageChart() {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl">
      <h3 className="mb-4">Mensagens por dia</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="messages" stroke="#6366f1" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
