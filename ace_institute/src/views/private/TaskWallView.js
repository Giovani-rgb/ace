import React, { useState } from "react";
import GameHeader from "../../components/GameHeader";
import IntrepidController from "../../controllers/IntrepidController";
import GameFooter from "../../components/GameFooter";
import "../../styles/panels/TaskWallView.css";

export default function TaskWallView() {
  const [selectedTab, setSelectedTab] = useState("surveys"); // ✅ CORRIGIDO

  const userId = "user123"; // depois integre com Pi Network
  const bitlabsUrl = `https://web.bitlabs.ai/?uid=${userId}&token=71257e29-a9c8-49ca-a7c3-6c5bdc4e7e1f&survey_wall=true`;

  return (
    <div className="Task-container">
    <IntrepidController/>
      <GameHeader />
      <h2>Task Wall</h2>
      <p><strong>Realize tarefas</strong> pra ganhar mais recompensas</p>

      {/* Abas */}
      <div className="Tabs-container">
        <button
          className={selectedTab === "surveys" ? "Tab active" : "Tab"}
          onClick={() => setSelectedTab("surveys")}
        >
          🧠 Pesquisas
        </button>
        <button
          className={selectedTab === "apps" ? "Tab active" : "Tab"}
          onClick={() => setSelectedTab("apps")}
        >
          📲 Apps
        </button>
      </div>

      {/* Conteúdo da aba selecionada */}
      <main className="Main-content-task">
        {selectedTab === "surveys" ? (
          <iframe
            title="BitLabs Survey Wall"
            src={bitlabsUrl}
            style={{ width: "100%", height: "80vh", border: "none" }}
          />
          
        ) : (
          <div>
            <h3>Ofertas de Apps</h3>
            <p>Em breve, você verá aqui outros aplicativos e formas de ganhar recompensas.</p>
          </div>
        )}
      </main>

      <GameFooter />
    </div>
  );
}
