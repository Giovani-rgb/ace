import React from "react";

import "../../styles/IntrepidView.css";

const IntrepidView = () => {
  // Exemplo de dados fictícios do usuário/personagem
  const agent = {
    name: "Cassandra Vellum",
    codename: "INTREPID-07",
    role: "Pesquisadora Arcano-Científica",
    clearanceLevel: "Nível 4 - Alfa",
    status: "Ativa",
    accessPoints: 1530,
    avatar: "/assets/avatar-agent.png",
    badgeId: "ACE-INT-07-Δ",
    division: "Vanguarda Temporal"
  };

  return (
    <div className="intrepid-container">
      

      <main className="intrepid-main">
        <section className="badge-section">
          <div className="badge-card">
            <img className="avatar" src={agent.avatar} alt="Agente Avatar" />
            <div className="badge-info">
              <h2>{agent.name}</h2>
              <p><strong>Código:</strong> {agent.codename}</p>
              <p><strong>Função:</strong> {agent.role}</p>
              <p><strong>Divisão:</strong> {agent.division}</p>
              <p><strong>ID Crachá:</strong> {agent.badgeId}</p>
              <p><strong>Status:</strong> {agent.status}</p>
              <p><strong>Nível de Acesso:</strong> {agent.clearanceLevel}</p>
              <p><strong>Pontos de Acesso:</strong> {agent.accessPoints}</p>
            </div>
          </div>
        </section>

        <section className="intrepid-actions">
          <h3>Ações Rápidas</h3>
          <button className="btn-dashboard">Ver Arquivos Classificados</button>
          <button className="btn-dashboard">Atualizar Perfil</button>
          <button className="btn-dashboard danger">Desconectar</button>
        </section>
      </main>

      
    </div>
  );
};

export default IntrepidView;
