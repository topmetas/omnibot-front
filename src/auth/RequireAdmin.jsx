import { Navigate } from "react-router-dom";
import { useAuth } from "./auth.store";

export default function RequireAdmin({ children }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (user.role !== "admin") return <Navigate to="/" />;

  return children;
}
