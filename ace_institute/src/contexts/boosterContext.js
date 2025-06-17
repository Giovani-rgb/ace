// src/contexts/BoosterContext.jsx
import React, { createContext, useContext, useState } from "react";

const BoosterContext = createContext();

export const BoosterProvider = ({ children }) => {
    const [cotacao, setCotacao] = useState(null);
    const [planoSelecionado, setPlanoSelecionado] = useState(null);

    return (
        <BoosterContext.Provider
            value={{
                cotacao,
                setCotacao,
                planoSelecionado,
                setPlanoSelecionado
            }}
        >
            {children}
        </BoosterContext.Provider>
    );
};

export const useBooster = () => useContext(BoosterContext);
