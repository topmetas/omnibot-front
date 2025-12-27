import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-slate-800 border-r p-6">
      <h2 className="text-xl font-bold mb-6">
        OmniBot SaaS
      </h2>

      <nav className="space-y-3">
        <NavLink to="/" className="block">Dashboard</NavLink>
        <NavLink to="/bots" className="block">Bots</NavLink>
        <NavLink to="/training" className="block">Training</NavLink>
        <NavLink to="/billing" className="block">Billing</NavLink>
        <NavLink to="/stats" className="block">Stats</NavLink>
      </nav>
    </aside>
  );
}
