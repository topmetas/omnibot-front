import Sidebar from "../components/Sidebar";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
