import ToggleTheme from "./ToggleTheme.jsx";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">OmniBot SaaS</h1>
      <ToggleTheme />
    </nav>
  );
}
