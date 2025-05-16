import React from 'react';
import '../styles/BannerLog.css';

const logs = [
  { time: '08:41', message: '🔍 Investigador H-42 acessou arquivos [Nível C]' },
  { time: '09:12', message: '⚡ Pico de energia detectado no Lab. de Física Moderna' },
  { time: '10:07', message: '🧬 Nova mutação observada na Casa da Evolução' },
  { time: '10:44', message: '🩸 Alerta do Posto Vampírico: Anomalia Genética' },
];

export default function BannerLog() {
  return (
    <div className="banner-log">
      <div className="banner-title">📡 TRANSMISSÃO AO VIVO</div><br/>
      <div className="log-marquee">
        <div className="log-track">
          {logs.map((log, index) => (
            <span key={index} className="log-item">
              <span className="log-time">[{log.time}]</span> {log.message} &nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
