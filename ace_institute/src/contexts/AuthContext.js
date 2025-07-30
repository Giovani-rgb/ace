import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AUTH_COOKIE_KEY = "authData";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authData, setAuthDataState] = useState(null);

    // 🔁 Recupera dados do cookie ao iniciar
    useEffect(() => {
        const cookie = Cookies.get(AUTH_COOKIE_KEY);
        if (cookie) {
            try {
                const parsed = JSON.parse(cookie);
                setAuthDataState(parsed);
            } catch (err) {
                console.error("Erro ao recuperar authData do cookie:", err);
                Cookies.remove(AUTH_COOKIE_KEY);
            }
        }
    }, []);

    // 🔄 Atualiza o cookie quando authData muda
    const setAuthData = data => {
        setAuthDataState(data);
        if (data) {
            Cookies.set(AUTH_COOKIE_KEY, JSON.stringify(data), {
                expires: 7, // dias
                secure: true,
                sameSite: "strict"
            });
        } else {
            Cookies.remove(AUTH_COOKIE_KEY);
        }
    };

    const logout = () => {
        setAuthData(null);
        Cookies.remove(AUTH_COOKIE_KEY);
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
