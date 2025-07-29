import React from "react";
import { useNavigate } from 'react-router-dom';
import GameHeader from "../../components/GameHeader";
import GameFooter from "../../components/GameFooter";

import IntrepidController from "../../controllers/IntrepidController";
import "../../styles/panels/PerfilView.css";

export default function PerfilView() {
  const navigate = useNavigate();

  
  const user = {
    name: 'Dra. Nyla Voss',
    role: 'Exploradora Dimensional',
    avatar: '/images/avatar-nyla.png',
    publications: [
      { id: 1, title: 'Estabilidade de Fendas Temporais', date: '2025-02-18', tags: ['temporal', 'física'] },
      { id: 2, title: 'Vida Microdimensional em Ambientes Hostis', date: '2024-11-12', tags: ['biologia', 'exploração'] },
    ],
    projects: [
      { id: 1, name: 'Portal Quântico Alfa', role: 'Pesquisadora Principal', status: 'Concluído' },
      { id: 2, name: 'Estudo de Matéria Escura Inteligente', role: 'Colaboradora', status: 'Em andamento' },
    ]
  };

  const handlePremiumClick = () => {
    // Futuro: integração com Pi Network
    navigate('/premium');
  };
   return (
    <div className="profile-container">
    <IntrepidController/>
    <GameHeader />
      <div className="profile-header">
        <img src={user.avatar} alt="Avatar" className="avatar" />
        <div className="info">
          <h1>{user.name}</h1>
          <p className="role">{user.role}</p>
        </div>
        <button className="premium-button" onClick={handlePremiumClick}>
          ⭐ Assinar Premium
        </button>
      </div>

      <section className="section">
        <h2>🧾 Periódicos Publicados</h2>
        <ul>
          {user.publications.map(pub => (
            <li key={pub.id}>
              <strong>{pub.title}</strong> <span className="date">({pub.date})</span>
              <span className="tags">[{pub.tags.join(', ')}]</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>🔬 Projetos</h2>
        <ul>
          {user.projects.map(project => (
            <li key={project.id}>
              <strong>{project.name}</strong> — {project.role} <span className="status">[{project.status}]</span>
            </li>
          ))}
        </ul>
      </section>
      <GameFooter />
    </div>
  );
}

