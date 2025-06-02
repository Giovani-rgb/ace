import React, { useEffect } from 'react';
import '../../styles/panels/premiumView.css';
import { handlePremiumPayment } from '../../controllers/premiumController';
import { useAuth } from '../../contexts/AuthContext';

export default function PremiumPage() {
  const { authData } = useAuth();
  
  useEffect(() => {
    // Adiciona o listener quando o componente monta
    window.addEventListener('premiumPaymentRequested', handlePremiumPayment);

    // Remove o listener quando o componente desmonta
    return () => {
      window.removeEventListener('premiumPaymentRequested', handlePremiumPayment);
    };
  }, []);

  const handleConfirm = () => {
    const paymentEvent = new CustomEvent('premiumPaymentRequested', {
      detail: {
        amount: 5,
        memo: 'Assinatura Premium (1 mês)',
        metadata: { plan: 'premium', duration: '30d' },
        uid: authData?.user.uid
      }
    });
    window.dispatchEvent(paymentEvent);
    console.log('Evento premiumPaymentRequested disparado');
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


