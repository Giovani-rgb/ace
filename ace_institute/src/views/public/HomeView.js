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

      <Footer />
    </div>
  );
};

export default HomeView;
