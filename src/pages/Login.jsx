import { useState } from "react";
import { login } from "../auth/auth.service";

export default function Login() {
  const [email, setEmail] = useState("");

  async function handleLogin() {
    await login(email);
    window.location.href = "/dashboard";
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow w-96">
        <h1 className="text-2xl font-bold mb-4">Entrar no OmniBot</h1>
        <input
          className="w-full border p-2 rounded mb-4"
          placeholder="Seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
