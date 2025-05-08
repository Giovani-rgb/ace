import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeController from "../../controllers/HomeController";
import { ProjectCard } from "../../components/ProjectCard";

import "../../styles/HomeView.css";

const HomeView = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await HomeController.getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <Header />

      <section className="home-hero">
        <div className="home-hero-content">
          <h1 className="hero-title">Academia de Ciências Extraordinária</h1>
          <p className="hero-subtitle">
            Explorando o espaço, a ciência e o desconhecido com mentes brilhantes.
          </p>
        </div>
      </section>

      <main className="projects-section">
        <h2 className="projects-title">Projetos Recentes</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      <section className="timeline-section">
        <h2>ACE na Historia</h2>
        <ul className="timeline">
          <li>
            <strong>1919 - 1945:</strong> Pesquisa de Vanguarda — A ciência como
            saida contra a ignorância pós-guerra.
          </li>
          <li>
            <strong>1950:</strong> Fuga dos Druidas — Quando os antigos guardiões da natureza desapareceram nas sombras.
          </li>
          <li>
            <strong>1970 - 2000:</strong> Renascer das Velhas Ciências — O retorno das artes esquecidas por trás da tecnologia moderna.
          </li>
          <li>
            <strong>Presente:</strong> Vingança dos Druidas — O equilíbrio natural exige reparação.
          </li>
        </ul>
      </section>

      <section className="quotes-section">
        <blockquote>
          “A verdade não está nas armas, mas nas raízes.”
          <footer>— Armand HueHuel, Composteiro fundador</footer>
        </blockquote>
      </section>

      <section className="classified-gallery">
        <h2>Arquivos Classificados</h2>
        <div className="gallery-grid">
          <div className="doc-card">Documento 001 - Projeto VIGIA</div>
          <div className="doc-card">Documento 014 - Ritual de Contenção E-7</div>
          <div className="doc-card">Documento 023 - Relatório da Fuga</div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Quer fazer parte?</h2>
        <p>Explore os documentos, participe dos testes e descubra a verdade.</p>
        <button className="cta-button">Acessar Periódicos</button>
      </section>

      <Footer />
    </div>
  );
};

export default HomeView;

