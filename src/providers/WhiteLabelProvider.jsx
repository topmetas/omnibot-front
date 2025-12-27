import { createContext, useContext } from "react";
import { whiteLabelConfig } from "../config/whiteLabel.config";

const WhiteLabelContext = createContext();

export function WhiteLabelProvider({ children }) {
  const tenant = localStorage.getItem("tenant") || "default";
  const config = whiteLabelConfig[tenant];

  return (
    <WhiteLabelContext.Provider value={config}>
      <div className={`theme-${config.primaryColor}`}>
        {children}
      </div>
    </WhiteLabelContext.Provider>
  );
}

export function useWhiteLabel() {
  return useContext(WhiteLabelContext);
}