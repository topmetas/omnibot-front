export async function sendMessage(apiKey, message) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey
      },
      body: JSON.stringify({ message }),
    });
    return res.json();
  }
  
  