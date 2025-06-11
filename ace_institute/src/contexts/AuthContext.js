import React, { createContext, useContext, useState } from "react";

// Cria o contexto
export const AuthContext = createContext();

// Provedor que envolve a aplicação
export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  // ✅ Função para limpar o authData
  const logout = () => {
    setAuthData(null);
  };

  return (
    <AuthContext.Provider value={{ authData, setAuthData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acessar o contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
