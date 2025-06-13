import React from "react";
import { useNavigate } from "react-router-dom";
import GameBottomNav from "../../components/GameBottomNav";
import GameFooter from "../../components/GameFooter";
import GameHeader from "../../components/GameHeader";

import BannerLog from "../../components/BannerLog";

import "../../styles/IntrepidView.css";
import ClanPool from "./components/PoolComponent";
import TaskWallPromo from "./components/TaskWallComponent";


import IntrepidController from "../../controllers/IntrepidController";

function IntrepidView() {
    const navigate = useNavigate();

    return (
        <div className="Intrepid-page">
            <IntrepidController />
            <div className="intrepid-container">
                <GameHeader />

                <main className="intrepid-main">
                    <BannerLog />
                    <ClanPool />
                    <TaskWallPromo />

                    
                </main>
                <GameFooter />
            </div>
            <GameBottomNav onNavigate={navigate} />
        </div>
    );
}

export default IntrepidView;


