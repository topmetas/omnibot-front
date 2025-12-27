export function logEvent(type, payload) {
    console.log(`[${type}]`, payload);
  
    // opcional: enviar para backend
    fetch("/api/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, payload }),
    });
  }
  