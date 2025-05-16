import React from 'react';
import '../../styles/panels/premiumView.css';

export default function PremiumPage() {
  const handleConfirm = async () => {
    try {
      const payment = await window.Pi.createPayment({
        amount: 5,
        memo: 'Assinatura Premium (1 mês)',
        metadata: { plan: 'premium', duration: '30d' }
      });
      console.log('Pagamento iniciado:', payment);
    } catch (err) {
      console.error('Erro ao iniciar pagamento:', err);
    }
  };

  return (
    <div className="premium-container">
      <h1>🌌 Seja um Membro Premium da ACE</h1>
      <p className="intro">Desbloqueie todos os recursos por 30 dias!</p>
      <ul className="benefits">
        <li>🔥 2x Pontuação nas Missões</li>
        <li>🎒 Inventário Expandido</li>
        <li>🎖️ Acesso a Missões de Campanha</li>
        <li>🚫 Sem Anúncios</li>
        <li>📡 Contato com Pesquisadores</li>
      </ul>
      <div className="price-box">
        <p>Plano Mensal</p>
        <h2>5 π</h2>
      </div>
      <button className="confirm-button" onClick={handleConfirm}>
        Confirmar Assinatura 🔐
      </button>
    </div>
  );
}
