export async function getClients(apiKey) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/clients`, {
      headers: { "x-api-key": apiKey }
    });
    return res.json();
  }
  