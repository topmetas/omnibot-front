export default function ClientTable({ clients }) {
    return (
      <table className="w-full bg-white dark:bg-gray-900 rounded">
        <thead>
          <tr className="border-b">
            <th>Nome</th>
            <th>Plano</th>
            <th>Mensagens</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c) => (
            <tr key={c._id} className="border-b">
              <td>{c.name}</td>
              <td>{c.plan}</td>
              <td>{c.usage?.messages || 0}</td>
              <td>{c.status || "active"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  