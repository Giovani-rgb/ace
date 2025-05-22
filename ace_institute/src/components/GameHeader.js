import React, { useState } from "react";
import { FaUserCircle, FaPowerOff } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import "../styles/GameHeader.css";
import { useAuth } from "../contexts/AuthContext";

function GameHeader({ onLogout }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const { authData } = useAuth();

  const handleLogout = async () => {
    try {
      const { user, secao } = authData;

      const response = await fetch(`http://localhost:3001/api/secoes/${user.uid}/${secao.idSecao}/close`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      console.log('Seção encerrada com sucesso');
    } catch (error) {
      console.error('Erro ao encerrar seção:', error);
    } finally {
      onLogout();
    }
  };

  if (!authData) return null;

  const { user, secao } = authData;

  return (
    <header className="game-header">
      <div className="logo">
        <GiTechnoHeart className="logo-icon" />
        <span className="logo-text">ACE-Intrepid</span>
      </div>

      <div className="user-dropdown">
        <FaUserCircle
          className="user-icon"
          onClick={() => setShowDropdown(!showDropdown)}
        />
        {showDropdown && (
          <div className="user-info-card">
            <p><strong>Usuário:</strong> {user?.username}</p>
            <p><strong>UID:</strong> {user?.uid}</p><br/>
            <p><strong>ID Seção:</strong> {secao?.idSecao}</p>
            <p><strong>Agente:</strong> {secao?.agente}</p>
            <p><strong>IP:</strong> {secao?.ip}</p>
            <p>
              <strong>Status:</strong>{" "}
              <span className={secao?.ativa ? "ativa" : "inativa"}>
                {secao?.ativa ? "Ativa" : "Inativa"}
              </span>
            </p>
            <p>
              <strong>Criada em:</strong>{" "}
              {secao?.criadaEm
                ? new Date(secao.criadaEm).toLocaleString()
                : "Desconhecido"}
            </p>
            <p>
              <strong>Deslogado em:</strong>{" "}
              {secao?.deslogadoEm
                ? new Date(secao.deslogadoEm).toLocaleString()
                : "Ainda ativo"}
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
