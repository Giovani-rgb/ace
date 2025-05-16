import React from "react";
import { useNavigate } from "react-router-dom";
import GameBottomNav from "../../components/GameBottomNav";
import GameFooter from "../../components/GameFooter";
import GameHeader from "../../components/GameHeader";
import StatusPanel from "../../components/AcePanel";
import BannerLog from "../../components/BannerLog";
import DailyMissions from "../../components/DailyMission";
import "../../styles/IntrepidView.css";

function IntrepidView() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Deslogando...");
  };

  return (
    <div className="intrepid-container">
      <GameHeader
        username="Giovani2021"
        xp="25 Pi"
        energy="75%"
        mission="Reconhecimento Alpha"
        onLogout={handleLogout}
        agent={{
          avatar: "https://example.com/avatar.png",
          name: "Agente X",
          codename: "Shadow",
          role: "Explorador Dimensional",
          division: "Núcleo de Dobra",
          badgeId: "ACE-3041",
          status: "Ativo",
          clearanceLevel: "3",
          accessPoints: 1800
        }}
      />

      <main className="intrepid-main">
        <BannerLog />
        <DailyMissions />
        <StatusPanel />
        
        
      </main>

      <GameBottomNav onNavigate={navigate} />
      <GameFooter />
    </div>
  );
}

export default IntrepidView;
