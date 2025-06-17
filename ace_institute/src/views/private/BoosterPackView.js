import React, { useEffect } from "react";
import Slider from "react-slick";
import { BadgeDollarSign, Star, ShieldCheck } from "lucide-react";
import "../../styles/boosterPlans.css";

import GameHeader from "../../components/GameHeader";
import GameFooter from "../../components/GameFooter";
import GameBottomNav from "../../components/GameBottomNav";
import BoosterPlansController from "../../controllers/boosterController";
import { useBooster } from "../../contexts/boosterContext";

const plans = [
  {
    title: "Booster Pack Iniciante",
    multiplier: "1.2x EXP e CICLOS",
    frame: "Moldura exclusiva",
    apy: "120% APY (1 ano)",
    governance: true,
    whitelist: false,
    priceUSD: 20,
    badge: null
  },
  {
    title: "Booster Pack Intermediário",
    multiplier: "1.5x EXP e CICLOS",
    frame: "Moldura exclusiva",
    apy: "140% APY (1 ano)",
    governance: true,
    whitelist: true,
    priceUSD: 50,
    badge: "Recomendado"
  },
  {
    title: "Booster Pack Pesado",
    multiplier: "2x EXP e CICLOS",
    frame: "Moldura exclusiva",
    apy: "180% APY (1 ano)",
    governance: true,
    whitelist: true,
    priceUSD: 120,
    badge: "Mais vendido"
  }
];


export default function BoosterPlans() {
  const { cotacao } = useBooster();

  useEffect(() => {
   /*aqui em cotacao deve disparar o evento Se o valor for null ou 0*/
   
    if (!cotacao || cotacao <= 0) {
      const eventoCotacao = new CustomEvent("get-cotacao-pi-usd");
      window.dispatchEvent(eventoCotacao);
    }
  }, [cotacao]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "30px",
    autoplay: true,
    autoplaySpeed: 7000
  };

  return (
    <div className="booster-wrapper">
      <BoosterPlansController />
      <div className="booster-container">
        <GameHeader />
        <main className="booster-main">
          <h2 className="booster-title">Atualize o seu Pass...</h2>
          {cotacao && (
            <p className="booster-cotacao">💱 1 Pi ≈ ${cotacao.toFixed(2)} USD</p>
          )}

          <Slider {...settings}>
            {plans.map((plan, idx) => {
              const pricePi = cotacao ? (plan.priceUSD / cotacao).toFixed(2) : null;
              return (
                <div key={idx} className="booster-card">
                  {plan.badge && <div className="booster-badge">{plan.badge}</div>}
                  <h3 className="booster-plan-title">{plan.title}</h3>
                  <ul className="booster-benefits">
                    <li className="booster-benefit"><Star size={16} />{plan.multiplier}</li>
                    <li className="booster-benefit"><ShieldCheck size={16} />{plan.frame}</li>
                    <li className="booster-benefit"><BadgeDollarSign size={16} />{plan.apy}</li>
                    <li className="booster-benefit">🗳️ {plan.governance ? "Voto de Governança" : "Sem voto de governança"}</li>
                    {plan.whitelist && <li className="booster-benefit">🎁 Whitelist para promoções</li>}
                    <li className="booster-benefit">💰 Custo: {pricePi ? `${pricePi} Pi (${plan.priceUSD} USD)` : `${plan.priceUSD} USD`}</li>
                  </ul>
                  <button
                    className="booster-btn"
                    onClick={() => {
                      const eventoSelecionado = new CustomEvent("booster-selecionado", {
                        detail: { ...plan, pricePi: parseFloat(pricePi) }
                      });
                      window.dispatchEvent(eventoSelecionado);
                      alert(`✅ Você selecionou o ${plan.title} por ${pricePi} Pi`);
                    }}
                  >
                    Selecionar
                  </button>
                </div>
              );
            })}
          </Slider>
        </main>
        <GameFooter />
      </div>
      <GameBottomNav />
    </div>
  );
}



