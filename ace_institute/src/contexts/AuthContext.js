import React, { createContext, useContext, useState, useEffect } from "react";

// Chave do cache no localStorage
const AUTH_CACHE_KEY = "authData";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthDataState] = useState(null);

  // 🔁 Recupera dados do cache ao iniciar
  useEffect(() => {
    const cached = localStorage.getItem(AUTH_CACHE_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        setAuthDataState(parsed);
      } catch (err) {
        console.error("Erro ao recuperar authData do cache:", err);
        localStorage.removeItem(AUTH_CACHE_KEY);
      }
    }
  }, []);

  // 🔄 Sempre que authData mudar, salva no cache
  const setAuthData = (data) => {
    setAuthDataState(data);
    if (data) {
      localStorage.setItem(AUTH_CACHE_KEY, JSON.stringify(data));
    } else {
      localStorage.removeItem(AUTH_CACHE_KEY);
    }
  };

  // 🚪 Limpa tudo ao fazer logout
  const logout = () => {
    setAuthData(null);
  };

  return (
    <AuthContext.Provider value={{ authData, setAuthData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
