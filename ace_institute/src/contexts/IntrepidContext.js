// contexts/IntrepidContext.js
import React, { createContext, useContext, useState } from "react";

export const IntrepidContext = createContext();

export const IntrepidProvider = ({ children }) => {
  const [balance, setBalance] = useState({ Pi: 0, CICLOS: 0 });
  const [status, setStatus] = useState("waiting"); // ou "active"
  const [bannerEvents, setBannerEvents] = useState([]); // <-- adicionado

  return (
    <IntrepidContext.Provider
      value={{
        balance,
        setBalance,
        status,
        setStatus,
        bannerEvents,       // <-- adicionado
        setBannerEvents,    // <-- adicionado
      }}
    >
      {children}
    </IntrepidContext.Provider>
  );
};

export const useIntrepid = () => {
  const context = useContext(IntrepidContext);
  if (!context) {
    throw new Error("useIntrepid deve ser usado dentro de um IntrepidProvider");
  }
  return context;
};
