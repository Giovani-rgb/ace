import React, { useState } from "react";
import { FaUserCircle, FaPowerOff } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import "../styles/GameHeader.css";

function GameHeader({ username, xp, energy, mission, onLogout, agent }) {
    const [showDropdown, setShowDropdown] = useState(false);

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
                        <p><strong>Usuário:</strong> {username}</p>
                        <p><strong>Wallet:</strong> {xp}</p>
                        <p><strong>Energia:</strong> {energy}</p>
                        <p><strong>Missão:</strong> {mission}</p>

                        <div className="badge-card">
                            <img className="avatar" src={agent.avatar} alt="Avatar" />
                            <div className="badge-info">
                                <h2>{agent.name}</h2>
                                <p><strong>Código:</strong> {agent.codename}</p>
                                <p><strong>Função:</strong> {agent.role}</p>
                                <p><strong>Divisão:</strong> {agent.division}</p>
                                <p><strong>ID Crachá:</strong> {agent.badgeId}</p>
                                <p><strong>Status:</strong> {agent.status}</p>
                                <p><strong>Acesso:</strong> {agent.clearanceLevel}</p>
                                <p><strong>Pontos:</strong> {agent.accessPoints}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <button className="logout-button" onClick={onLogout}>
                <FaPowerOff className="logout-icon" />
            </button>
        </header>
    );
}

export default GameHeader;
