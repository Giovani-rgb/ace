import React, { useState, useEffect } from 'react';
import '../css/ClanPool.css';

function ClanPool() {
  const [user, setUser] = useState({ clanId: null, lastCheckIn: null });
  const [checkInDone, setCheckInDone] = useState(false);
  const [timer, setTimer] = useState('');

  const clans = [
    { id: 'compostagem', name: 'Clã da Compostagem' },
    { id: 'vampiros', name: 'Clã dos Vampiros' },
    { id: 'druidas', name: 'Clã dos Druidas' },
    { id: 'fundadores', name: 'Clã dos Fundadores' },
    { id: 'cacadores', name: 'Clã dos Caçadores' }
  ];

  const pool = {
    clanPoints: {
      compostagem: 12,
      vampiros: 9,
      druidas: 7,
      fundadores: 5,
      cacadores: 3
    }
  };

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    setCheckInDone(user.lastCheckIn === today);
  }, [user]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const weekEnd = new Date();
      weekEnd.setDate(weekEnd.getDate() + (7 - weekEnd.getDay())); // Próximo domingo
      weekEnd.setHours(23, 59, 59, 999);

      const diff = weekEnd - now;
      const h = String(Math.floor(diff / 1000 / 60 / 60)).padStart(2, '0');
      const m = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, '0');
      const s = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

      setTimer(`${h}:${m}:${s}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSelectClan = (clanId) => {
    setUser(prev => ({ ...prev, clanId }));
    alert(`Clã ${clanId} escolhido!`);
  };

  const handleCheckIn = () => {
    if (!user.clanId) {
      alert('Escolha um clã primeiro!');
      return;
    }
    const today = new Date().toISOString().slice(0, 10);
    setUser(prev => ({ ...prev, lastCheckIn: today }));
    setCheckInDone(true);
    alert('Check-in realizado!');
  };

  return (
    <div className="clanpool-container">
      <h2 className="clanpool-title">Pool de Recompensas</h2>

      <div className="clanpool-timer">
        <strong>Tempo restante da pool:</strong> {timer}
      </div>

      {!user.clanId ? (
        <div>
          <h3>Escolha um clã:</h3>
          {clans.map(clan => (
            <button key={clan.id}
                    className="clanpool-button"
                    onClick={() => handleSelectClan(clan.id)}>
              {clan.name}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <p>Seu clã: <strong>{user.clanId}</strong></p>
          <button disabled={checkInDone}
                  onClick={handleCheckIn}
                  className={`clanpool-button ${checkInDone ? 'clanpool-disabled' : 'clanpool-active'}`}>
            {checkInDone ? 'Check-in já feito' : 'Fazer Check-in Diário'}
          </button>
        </div>
      )}

      <h3>Ranking dos Clãs</h3>
      {Object.entries(pool.clanPoints).map(([id, pts]) => (
        <p key={id}>{id}: {pts} check-ins</p>
      ))}
    </div>
  );
}

export default ClanPool;
