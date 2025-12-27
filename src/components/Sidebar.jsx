export default function Sidebar() {
    return (
      <aside className="w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 p-6">
        <h2 className="text-xl font-bold mb-6">
          OmniBot SaaS
        </h2>
  
        <nav className="space-y-3">
          <a className="block hover:text-blue-500">Dashboard</a>
          <a className="block hover:text-blue-500">Bots</a>
          <a className="block hover:text-blue-500">Training</a>
          <a className="block hover:text-blue-500">Billing</a>
          <a className="block hover:text-blue-500">Stats</a>
        </nav>
      </aside>
    );
  }