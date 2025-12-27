export async function getStats() {
    return {
      plan: "Pro",
      aiProvider: "OpenAI",
      summary: {
        messages: 1234,
        bots: 3,
        users: 12,
      },
      chart: [
        { day: "Seg", value: 120 },
        { day: "Ter", value: 200 },
        { day: "Qua", value: 150 },
      ],
    };
  }
  

  
  
