import React, { useState, useEffect } from "react";
import { FaUserCircle, FaPowerOff } from "react-icons/fa";
import "../styles/GameHeader.css";
import { useAuth } from "../contexts/AuthContext";
import { useIntrepid } from "../contexts/IntrepidContext"; // Correto: usa o contexto compartilhado

function GameHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("Pi");

  const { authData } = useAuth();
  const { balance } = useIntrepid(); // Aqui é onde corrigimos

  useEffect(() => {
    if (!authData?.user?.uid) return;

    // Dispara evento para buscar saldo via IntrepidController
    window.dispatchEvent(
      new CustomEvent("getBalance", {
        detail: { uid: authData.user.uid },
      })
    );
  }, [authData?.user?.uid]);

  if (!authData) return null;

  const { user, secao } = authData;

  const handleLogout = () => {
    if (user?.uid && secao?.idSecao) {
      window.dispatchEvent(
        new CustomEvent("closeSession", {
          detail: { uid: user.uid, idSecao: secao.idSecao },
        })
      );
    }
  };

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setCurrencyDropdown(false);
  };

  const getCurrencyIcon = (currency) => {
    switch (currency) {
      case "Pi":
        return "🪙";
      case "CICLOS":
        return "🔁";
      default:
        return "💲";
    }
  };

  return (
    <header className="game-header">
      <div
        className="currency-selector"
        onClick={() => setCurrencyDropdown(!currencyDropdown)}
      >
        <span className="currency-icon">{getCurrencyIcon(selectedCurrency)}</span>
        <span className="currency-name">{selectedCurrency}</span>
        <span className="currency-balance">{balance[selectedCurrency]}</span>
        <span className="currency-arrow">{currencyDropdown ? "▲" : "▼"}</span>

        {currencyDropdown && (
          <div className="currency-dropdown">
            <div
              className="currency-option"
              onClick={() => handleCurrencySelect("Pi")}
            >
              <span>{getCurrencyIcon("Pi")}</span> $Pi ({balance.Pi})
            </div>
            <div
              className="currency-option"
              onClick={() => handleCurrencySelect("CICLOS")}
            >
              <span>{getCurrencyIcon("CICLOS")}</span> $CICLOS ({balance.CICLOS})
            </div>
          </div>
        )}
      </div>

      <div className="user-dropdown">
        <FaUserCircle
          className="user-icon"
          onClick={() => setShowDropdown(!showDropdown)}
        />
        {showDropdown && (
          <div className="user-info-card">
            <p>
              <strong>Usuário:</strong> {user?.username}
            </p>
            <p>
              <strong>UID:</strong> {user?.uid}
            </p>
            <br />
            <p>
              <strong>ID Seção:</strong> {secao?.idSecao}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span className={secao?.ativa ? "ativa" : "inativa"}>
                {secao?.ativa ? "Ativa" : "Inativa"}
              </span>
            </p>
          </div>
        )}
      </div>

      <button className="logout-button" onClick={handleLogout}>
        <FaPowerOff className="logout-icon" />
      </button>
    </header>
  );
}

export default GameHeader;
