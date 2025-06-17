import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GameBottomNav from "../../components/GameBottomNav";
import GameFooter from "../../components/GameFooter";
import GameHeader from "../../components/GameHeader";
import BannerLog from "../../components/BannerLog";
import "../../styles/IntrepidView.css";
import ClanPool from "./components/PoolComponent";
import TaskWallPromo from "./components/TaskWallComponent";
import BoosterAccessCard from "./components/boosterAcessCard";
import IntrepidController from "../../controllers/IntrepidController";

function IntrepidView() {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(120); // 120 segundos = 2 minutos

    useEffect(() => {
        const tick = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    // Disparar evento quando chegar a 0
                    const evento = new CustomEvent("adsOn");
                    window.dispatchEvent(evento);
                    console.log("Evento 'adsOn' disparado!");
                    return 120; // reinicia o cronômetro
                }
                return prev - 1;
            });
        }, 1000); // a cada segundo

        return () => clearInterval(tick);
    }, []);

    const formatTime = seconds => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min.toString().padStart(2, "0")}:${sec
            .toString()
            .padStart(2, "0")}`;
    };

    return (
        <div className="Intrepid-page">
                  <IntrepidController />
            <div className="intrepid-container">
                        <GameHeader />
                {/* Cronômetro visível abaixo do header */}
                <main className="intrepid-main">
                    <div className="ad-timer">
                                  Próximo anúncio em:{" "}
                        <strong>{formatTime(timeLeft)}</strong>
                    </div>
                                    <BannerLog />
                              <ClanPool />
                              <BoosterAccessCard />
                                        <TaskWallPromo />
                </main>
                        <GameFooter />
            </div>
                  <GameBottomNav onNavigate={navigate} />
        </div>
    );
}

export default IntrepidView;
