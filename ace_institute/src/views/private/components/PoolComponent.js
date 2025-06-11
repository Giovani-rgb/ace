import React, { useState, useEffect } from "react";
import "../css/ClanPool.css";

import compostagemImg from "../../../assets/insigniaComposteiro.png";
import vampirosImg from "../../../assets/insigniaVampiros.png";
import druidasImg from "../../../assets/insigniaDruidas.png";
import fundadoresImg from "../../../assets/insigniaFundadores.png";
import cacadoresImg from "../../../assets/insigniaCacadores.png";


function ClanPool() {
    const [user, setUser] = useState({
        clanId: null,
        lastCheckIn: null,
        isInvestor: false
    });
    const [checkInDone, setCheckInDone] = useState(false);
    const [timer, setTimer] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const clans = [
        {
            id: "compostagem",
            name: "Clã da Compostagem",
            reward: "Bônus em agricultura e sustentabilidade"
        },
        {
            id: "vampiros",
            name: "Clã dos Vampiros",
            reward: "Poderes noturnos"
        },
        {
            id: "druidas",
            name: "Clã dos Druidas",
            reward: "Afinidade com magias naturais"
        },
        {
            id: "fundadores",
            name: "Clã dos Fundadores",
            reward: "Bônus em liderança e estratégia"
        },
        {
            id: "cacadores",
            name: "Clã dos Caçadores",
            reward: "Exp em Runner, Explorador, Colecionador"
        }
    ];

    const clanImages = {
        compostagem: compostagemImg,
        vampiros: vampirosImg,
        druidas: druidasImg,
        fundadores: fundadoresImg,
        cacadores: cacadoresImg
    };

    const pool = {
        totalReward: 1000, // Valor total em Pi
        totalAudience: 50,
        clanPoints: {
            compostagem: { checkIns: 12, cpm: 150 },
            vampiros: { checkIns: 9, cpm: 120 },
            druidas: { checkIns: 7, cpm: 90 },
            fundadores: { checkIns: 5, cpm: 60 },
            cacadores: { checkIns: 3, cpm: 30 }
        }
    };

    useEffect(() => {
        const today = new Date().toISOString().slice(0, 10);
        setCheckInDone(user.lastCheckIn === today);
    }, [user]);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const weekEnd = new Date();
            weekEnd.setDate(weekEnd.getDate() + (7 - weekEnd.getDay()));
            weekEnd.setHours(23, 59, 59, 999);
            const diff = weekEnd - now;
            const h = String(Math.floor(diff / 1000 / 60 / 60)).padStart(
                2,
                "0"
            );
            const m = String(Math.floor((diff / 1000 / 60) % 60)).padStart(
                2,
                "0"
            );
            const s = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
            setTimer(`${h}:${m}:${s}`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleSelectClan = clanId => {
        setUser(prev => ({ ...prev, clanId }));
        setDropdownOpen(false);
        alert(`Clã ${clanId} escolhido!`);
    };

    const handleCheckIn = () => {
        if (!user.clanId) {
            alert("Escolha um clã primeiro!");
            return;
        }
        const today = new Date().toISOString().slice(0, 10);
        setUser(prev => ({ ...prev, lastCheckIn: today }));
        setCheckInDone(true);

        // Ao Efetuar o Check-in o usuario ganhara exp e se for investidor uma fração de moeda Pi
        let rewardMsg = "Você ganhou 50 de EXP!";
        if (user.isInvestor) {
            rewardMsg += " + 0.01 Pi como investidor!";
        }
        alert(`Check-in realizado! ${rewardMsg}`);
    };

    const toggleInvestor = () => {
        setUser(prev => ({ ...prev, isInvestor: !prev.isInvestor }));
    };

    return (
        <div className="clanpool-container">
            <h2 className="clanpool-title">Pool de Recompensas</h2>
            <hr />
            <div className="content-cla">
                <div className="clanpool-timer">
                    <strong>Tempo restante:</strong> {timer}
                </div>

                {/* Valor total da recompensa em disputa em Pi */}
                <div className="clanpool-total-reward">
                    <strong>Total em disputa:</strong> {pool.totalReward} Pi
                </div>

                <div className="clanpool-total-AUDIENCIA">
                    <strong>Total em Audiencia:</strong>
                    {pool.totalAudience} pts
                </div>

                <div className="clanpool-dropdown">
                    <button
                        className="clanpool-dropdown-button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        {user.clanId
                            ? `Clã escolhido: ${
                                  clans.find(c => c.id === user.clanId).name
                              }`
                            : "Selecione um clã"}
                    </button>
                    {dropdownOpen && (
                        <ul className="clanpool-dropdown-list">
                            {clans.map(clan => (
                                <li
                                    key={clan.id}
                                    onClick={() => handleSelectClan(clan.id)}
                                    className="clanpool-dropdown-item"
                                >
                                    {clan.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <button
                    onClick={toggleInvestor}
                    className="clanpool-investor-toggle"
                >
                    {user.isInvestor
                        ? "Você é um investidor"
                        : "Ativar modo Investidor"}
                </button>

                {user.clanId && (
                    <div className="clanpool-claninfo">
                        <h3>Informações do Clã</h3>
                        <img
                            src={clanImages[user.clanId]}
                            alt={`Insígnia do ${user.clanId}`}
                            className="clanpool-insignia"
                        />
                        <p>
                            Participação:{" "}
                            {pool.clanPoints[user.clanId].checkIns} check-ins
                        </p>

                        <p>
                            Recompensas:{" "}
                            {clans.find(c => c.id === user.clanId).reward}
                        </p>

                        {/* Ao Efetuar o Check-in o usuario ganhara exp e se for investidor
              atraves do pack ganhara uma fracao de moeda Pi. */}
                        <button
                            disabled={checkInDone}
                            onClick={handleCheckIn}
                            className={`clanpool-button ${
                                checkInDone
                                    ? "clanpool-disabled"
                                    : "clanpool-active"
                            }`}
                        >
                            {checkInDone
                                ? "Check-in já feito"
                                : "Fazer Check-in Diário"}
                        </button>
                    </div>
                )}

                <h3>Ranking dos Clãs</h3>

                <ul className="clanpool-ranking">
                    {Object.entries(pool.clanPoints).map(([id, data]) => (
                        <li key={id}>
                            <strong>
                                {clans.find(c => c.id === id)?.name || id}
                            </strong>
                            :
                            {` ${data.checkIns} check-ins | ${data.cpm} CPM apostado`}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ClanPool;
