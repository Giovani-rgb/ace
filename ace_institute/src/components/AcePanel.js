import React from 'react';
import '../styles/StatusPanel.css';

const StatusPanel: React.FC = () => {
  return (
    <div className="status-panel">
      <div className="sidebar left">
        <div className="logo">ACE</div>
        <div className="vertical-text">STATUS</div>
      </div>

      <div className="main-content">
        <h2>Status da Instituição</h2>

        <div className="status-section">
          <div className="status-label">Energia Principal</div>
          <div className="status-bar">
            <div className="status-fill green" style={{ width: '90%' }} />
          </div>
        </div>

        <div className="status-section">
          <div className="status-label">Estabilidade Temporal</div>
          <div className="status-bar">
            <div className="status-fill yellow" style={{ width: '60%' }} />
          </div>
        </div>

        <div className="status-section">
          <div className="status-label">Integridade dos Protocolos</div>
          <div className="status-bar">
            <div className="status-fill red" style={{ width: '40%' }} />
          </div>
        </div>

        <div className="alert-box">
          <p>⚠️ Anomalia detectada no Setor 3B - Revisão em andamento.</p>
        </div>
      </div>

      <div className="sidebar right">
        <div className="vertical-text">ACE OPS</div>
      </div>
    </div>
  );
};

export default StatusPanel;
