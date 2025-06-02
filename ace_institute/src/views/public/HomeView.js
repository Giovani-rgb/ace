import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeController from "../../controllers/HomeController";
import { ProjectCard } from "../../components/ProjectCard";

import "../../styles/HomeView.css";

const rotatingWords = [
  "Arte",
  "Incubadora",
  "Analog Horror",
  "Colaboração",
  "Ciência",
  "Extraordinário"
];

const HomeView = () => {
  const [projects, setProjects] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000); // troca a cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <Header />

      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-content">
          <h1 className="hero-title">
            ACE é{" "}
            <span className="rotating-word">
              {rotatingWords[currentWordIndex]}
            </span>
          </h1>
          <p className="hero-subtitle">
            Incubadora colaborativa de projetos experimentais e narrativas de horror analógico.
          </p>
        </div>
      </section>

      {/* SOBRE A ACE */}
      <section className="about-section">
        <h2>O que é a ACE?</h2>
        <p>
          A Academia de Ciências Extraordinária é uma plataforma colaborativa para incubar projetos criativos
          no campo do Analog Horror, ARGs, ficção científica e arte experimental.
        </p>
        <p>
          Reunimos criadores de diversas áreas para desenvolver narrativas que exploram o estranho, o misterioso e o desconhecido.
        </p>
      </section>

      {/* COMO FUNCIONA */}
      <section className="how-it-works">
        <h2>Como Funciona?</h2>
        <ol>
          <li><strong>Proponha um Projeto:</strong> qualquer pessoa pode sugerir uma ideia.</li>
          <li><strong>Colabore:</strong> artistas, programadores e escritores se unem.</li>
          <li><strong>Incube:</strong> desenvolvemos e lançamos narrativas e experiências juntos.</li>
        </ol>
      </section>

      {/* PROJETOS */}
      <main className="projects-section">
        <h2 className="projects-title">Projetos Recentes</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      {/* ARQUIVOS CLASSIFICADOS */}
      <section className="classified-gallery">
        <h2>Arquivos Classificados</h2>
        <div className="gallery-grid">
          <div className="doc-card">Projeto VIGIA — Sistema de vigilância anômala</div>
          <div className="doc-card">Ritual de Contenção E-7 — Pesquisa sobre rituais de selamento</div>
          <div className="doc-card">Relatório da Fuga — Incidente de brecha dimensional</div>
        </div>
      </section>

      {/* HISTÓRIA DA ACE */}
      <section className="timeline-section">
        <h2>História da ACE</h2>
        <ul className="timeline">
          <li>
            <strong>1919 - 1945:</strong> Pesquisa de Vanguarda — A ciência como saída contra a ignorância pós-guerra.
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

      {/* COMUNIDADE */}
      <section className="community-section">
        <h2>Criação Colaborativa</h2>
        <p>
          Transformamos a criação de Analog Horrors em uma experiência coletiva, com uma comunidade ativa e diversas ferramentas para artistas, escritores e desenvolvedores.
        </p>
        <button className="cta-button">Propor um Projeto</button>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <h2>Quer fazer parte?</h2>
        <p>Explore os arquivos, participe das colaborações e descubra o extraordinário.</p>
        <button className="cta-button">Junte-se à Incubadora</button>
      </section>

      <Footer />
    </div>
  );
};

export default HomeView;
