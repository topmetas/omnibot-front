import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider.jsx";

export default function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
