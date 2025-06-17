import React from "react";
import { useNavigate } from "react-router-dom";
import { RocketIcon } from "lucide-react";
import "../css/BoosterAccessCard.css";

export default function BoosterAccessCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard/booster");
  };

  return (
    <div className="booster-access-card" onClick={handleClick}>
      <div className="booster-access-icon">
        <RocketIcon size={36} />
      </div>
      <div className="booster-access-content">
        <h3 className="booster-access-title">Booster Packs</h3>
        <p className="booster-access-description">
          Multiplique sua EXP, renda e poder de decisão.
        </p>
        <button className="booster-access-button">Ver Planos</button>
      </div>
    </div>
  );
}
