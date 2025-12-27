import { useEffect, useState } from "react";
import { getClients } from "./client.api";
import ClientTable from "./ClientTable";
import ClientForm from "./ClientForm";

export default function ClientsPage() {
  const [clients, setClients] = useState([]);
  const [open, setOpen] = useState(false);

  async function load() {
    const { data } = await getClients();
    setClients(data);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Clientes</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Novo Cliente
        </button>
      </div>

      <ClientTable clients={clients} />
      {open && <ClientForm onClose={() => setOpen(false)} onSaved={load} />}
    </div>
  );
}
