import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeProvider";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Bots from "./pages/Bots";
import Training from "./pages/Training";
import Billing from "./pages/Billing";
import Stats from "./pages/Stats";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/bots" element={<Bots />} />
            <Route path="/training" element={<Training />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/stats" element={<Stats />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

