import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [apiKey, setApiKey] = useState(
    localStorage.getItem("API_KEY")
  );

  function login(key) {
    localStorage.setItem("API_KEY", key);
    setApiKey(key);
  }

  function logout() {
    localStorage.removeItem("API_KEY");
    setApiKey(null);
  }

  return (
    <AuthContext.Provider value={{ apiKey, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

