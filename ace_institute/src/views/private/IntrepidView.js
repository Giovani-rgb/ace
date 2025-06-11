import React from "react";
import { useNavigate } from "react-router-dom";
import GameBottomNav from "../../components/GameBottomNav";
import GameFooter from "../../components/GameFooter";
import GameHeader from "../../components/GameHeader";
import StatusPanel from "../../components/AcePanel";
import BannerLog from "../../components/BannerLog";

import "../../styles/IntrepidView.css";
import ClanPool from "./components/PoolComponent";
import TaskWallPromo from "./components/TaskWallComponent";

import { IntrepidProvider } from "../../contexts/IntrepidContext";
import IntrepidController from "../../controllers/IntrepidController";

function IntrepidView() {
    const navigate = useNavigate();

    return (
        
            <IntrepidController />
                <div className="intrepid-container">
                    <GameHeader />

                    <main className="intrepid-main">
                        <BannerLog />
                        <ClanPool />
                        <TaskWallPromo />

                        <StatusPanel />
                    </main>
                    <GameFooter />
                </div>
                <GameBottomNav onNavigate={navigate} />
            
     
    );
}

export default IntrepidView;
