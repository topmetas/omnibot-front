export function track(event, data) {
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event,
        data,
        ts: Date.now(),
      }),
    });
  }
  
  