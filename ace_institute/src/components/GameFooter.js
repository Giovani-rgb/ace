// components/GameFooter.tsx
import React from 'react'
import '../styles/GameFooter.css'

const GameFooter: React.FC = () => {
  return (
    <footer className="game-footer">
      <div className="footer-left">
        <div className="coord">🛰 Coordenadas: <span>Lat 32.715, Long -117.161</span></div>
        <div className="status">Status do Sistema: <span className="ok">Operacional</span></div>
      </div>
      <div className="footer-center">
        <div className="transmission">📡 Transmissão segura via ACE.Link</div>
      </div>
      <div className="footer-right">
        <div className="version">Versão do Sistema: <span>v2.3.5-b</span></div>
        <div className="timestamp">🕒 {new Date().toLocaleTimeString()}</div>
      </div>
    </footer>
  )
}

export default GameFooter
