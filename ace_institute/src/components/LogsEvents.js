import React from 'react';
import '../styles/EventLogs.css';

const logs = [
  { time: '08:41', message: '🔍 Investigador H-42 acessou arquivos classificados [Nível C].' },
  { time: '09:12', message: '⚡ Pico de energia detectado no Laboratório de Física Moderna.' },
  { time: '10:07', message: '🧬 Mutação incomum registrada na Casa da Evolução.' },
  { time: '10:44', message: '🩸 Vampiro colaborador relatou anomalia genética. (Posto Vampírico)' },
];

export default function EventLogs() {
  return (
    <div className="event-logs">
      <h2 className="logs-title">📡 LOG DE EVENTOS</h2>
      <div className="logs-container">
        {logs.map((log, index) => (
          <div key={index} className="log-entry glitch">
            <span className="log-time">[{log.time}]</span> {log.message}
          </div>
        ))}
      </div>
    </div>
  );
}
