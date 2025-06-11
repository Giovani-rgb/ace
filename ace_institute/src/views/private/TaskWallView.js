import React from "react";
import GameHeader from "../../components/GameHeader";
import GameFooter from "../../components/GameFooter";
import "../../styles/panels/TaskWallView.css";

export default function TaskWallView() {
  
   return (
    <div className="Task-container">
    <GameHeader />
    <h2>Task Wall</h2>
    <p><strong>Realize tarefas </strong>pra ganhar mais recompensas</p>
     <main className="Main-content-task">
     
     </main>
    <GameFooter />
    </div>
  );
}

