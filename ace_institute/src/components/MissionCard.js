import React from 'react';

export default function MissionCard({ mission }) {
  return (
    <div className="mission-card">
      <h3>{mission.title}</h3>
      <p>{mission.description}</p>
      <p><strong>Status:</strong> {mission.status}</p>
      <p><strong>Recompensa:</strong> {mission.reward}</p>
      {(mission.status === 'Disponível' || mission.status === 'Em Progresso') && (
        <button className="action-button">
          {mission.status === 'Disponível' ? 'Iniciar' : 'Continuar'}
        </button>
      )}
    </div>
  );
}
