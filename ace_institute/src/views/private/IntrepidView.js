import React from "react";
import { useNavigate } from "react-router-dom";
import GameBottomNav from "../../components/GameBottomNav";
import GameFooter from "../../components/GameFooter";
import GameHeader from "../../components/GameHeader";
import StatusPanel from "../../components/AcePanel";
import BannerLog from "../../components/BannerLog";
import DailyMissions from "../../components/DailyMission";
import "../../styles/IntrepidView.css";
import ClanPool from "./components/PoolComponent";



function IntrepidView() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Deslogando...");
  };

  return (
    <div className="intrepid-container">
      <GameHeader />

      <main className="intrepid-main">
        <BannerLog />
        <ClanPool />
        <DailyMissions />
        <StatusPanel />
        
        
      </main>

      <GameBottomNav onNavigate={navigate} />
      <GameFooter />
    </div>
  );
}

export default IntrepidView;
