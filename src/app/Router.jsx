import { Routes, Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import AdminLayout from "../admin/AdminLayout";
import RequireAdmin from "../auth/RequireAdmin";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route
        path="/admin/*"
        element={
          <RequireAdmin>
            <AdminLayout />
          </RequireAdmin>
        }
      />
    </Routes>
  );
}
