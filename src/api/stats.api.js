import api from "./api";

export async function getStats() {
  try {
    const res = await api.get("/api/stats");

    const data = res.data || {};

    return {
      summary: {
        messages: data.summary?.messages ?? 0,
        tokens: data.summary?.tokens ?? 0,
      },
      plan: {
        name: data.plan?.name ?? "Free",
        messageLimit: data.plan?.messageLimit ?? 1000,
        tokenLimit: data.plan?.tokenLimit ?? 50000,
      },
      aiProvider: data.aiProvider ?? "OpenAI",
      chart: Array.isArray(data.chart)
        ? data.chart
        : [],
    };
  } catch (err) {
    console.error("Erro ao buscar stats:", err);

    // fallback seguro
    return {
      summary: { messages: 0, tokens: 0 },
      plan: { name: "Free", messageLimit: 1000, tokenLimit: 50000 },
      aiProvider: "OpenAI",
      chart: [],
    };
  }
}

  

  
  
