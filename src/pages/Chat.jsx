import { useState } from "react";
import { sendMessage } from "../api/chat.api";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (!message.trim() || loading) return;

    setLoading(true);

    try {
      const answer = await sendMessage(message);

      setMessages((prev) => [
        ...prev,
        { user: message, bot: answer },
      ]);

      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar mensagem");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold">Chat IA</h1>

      <div className="space-y-3 mt-4 bg-white p-4 rounded shadow">
        {messages.map((m, i) => (
          <div key={i}>
            <p className="font-semibold">Você</p>
            <p className="mb-2">{m.user}</p>

            <p className="font-semibold text-blue-600">Bot</p>
            <p>{m.bot}</p>
          </div>
        ))}
      </div>

      <input
        className="border p-2 w-full mt-4 rounded"
        value={message}
        placeholder="Digite sua mensagem..."
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        disabled={loading}
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="mt-2 bg-black text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </div>
  );
}