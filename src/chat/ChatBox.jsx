import { useState } from "react";
import api from "../api/api";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  async function sendMessage() {
    const res = await api.post("/chat", { message: text });
    setMessages([...messages, { user: text }, { bot: res.data.reply }]);
    setText("");
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((m, i) => (
          <div key={i} className="mb-2">
            <b>{m.user ? "Você" : "Bot"}:</b> {m.user || m.bot}
          </div>
        ))}
      </div>

      <input
        className="border p-2 w-full"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
    </div>
  );
}
