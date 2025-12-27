import { createContext, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ config, children }) {
  const style = {
    "--primary-color": config.primaryColor || "#4f46e5",
  };

  return (
    <ThemeContext.Provider value={config}>
      <div style={style}>{children}</div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

