import React, { useState } from 'react';
import '../styles/DailyMissions.css';

const defaultMissions = [
  { id: 1, text: 'Realizar varredura no Setor Beta', done: false },
  { id: 2, text: 'Enviar relatório de inteligência', done: false },
  { id: 3, text: 'Testar equipamento de dobra', done: false },
  { id: 4, text: 'Limpar filtro de plasma quantico', done: false}
];

const DailyMissions = () => {
  const [missions, setMissions] = useState(defaultMissions);

  const toggleMission = (id) => {
    const updated = missions.map(m =>
      m.id === id ? { ...m, done: !m.done } : m
    );
    setMissions(updated);
  };

  return (
    <div className="daily-missions">
      <h2>🗓 Questboard</h2>
      <p className="briefing">
        Complete suas tarefas operacionais para manter o status da instituição e ganhar acesso a dados classificados.
      </p>
      <ul>
        {missions.map(mission => (
          <li key={mission.id} className={mission.done ? 'completed' : ''}>
            <label>
              <input
                type="checkbox"
                checked={mission.done}
                onChange={() => toggleMission(mission.id)}
              />
              {mission.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyMissions;
