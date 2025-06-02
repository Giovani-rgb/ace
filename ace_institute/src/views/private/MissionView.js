import React from "react";
import GameHeader from "../../components/GameHeader";
import MissionCategory from "../../components/MissionCategory";
import GameFooter from "../../components/GameFooter";
import "../../styles/panels/MissionsView.css";

export default function MissionsView() {
  const recognitionMissions = [
    {
      title: 'Inspeção no Setor Alfa',
      description: 'Verifique atividades anômalas nas fronteiras do Setor Alfa.',
      status: 'Disponível',
      reward: '100 pontos'
    }
  ];

  const collaborativeMissions = [
    {
      title: 'Análise Quântica Coletiva',
      description: 'Trabalhe com 3 agentes para calibrar sensores multidimensionais.',
      status: 'Em Progresso',
      reward: '300 pontos'
    }
  ];

  const campaignMissions = [
    {
      title: 'A Crise do Núcleo - Parte I',
      description: 'Descubra a origem do vazamento energético.',
      status: 'Concluída',
      reward: '200 pontos'
    }
  ];

  return (
    <div className="missions-container">
    <GameHeader/>
      <h1 className="missions-title">🛰️ Missões da ACE</h1>
      <MissionCategory title="Reconhecimento" missions={recognitionMissions} />
      <MissionCategory title="Colaborativas" missions={collaborativeMissions} />
      <MissionCategory title="Campanha" missions={campaignMissions} />
      <GameFooter />
    </div>
  );
}


