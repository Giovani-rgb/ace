import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/HomeView.css";






const rotatingWords = [
    "Anomalias",
    "Incubadora",
    "Experimentos",
    "Colaboração",
    "Criptociência",
    "Realidades Paralelas"
];

const HomeView = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex(
                prevIndex => (prevIndex + 1) % rotatingWords.length
            );
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    
    useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    },
    { threshold: 0.3 }
  );

  const items = document.querySelectorAll(".timeline li");
  items.forEach(item => observer.observe(item));

  return () => {
    items.forEach(item => observer.unobserve(item));
  };
}, []);

    return (
        <div className="home-container">
            <Header />

            {/* HERO SCI-FI / TERMINAL */}
            <section className="home-hero">
                <motion.div
                    className="home-hero-background"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                />
                <div className="home-hero-content">
                    <motion.h1
                        className="hero-title glitch"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        V.E.R.U.M. é{" "}
                        <motion.span
                            className="rotating-word"
                            key={rotatingWords[currentWordIndex]}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {rotatingWords[currentWordIndex]}
                        </motion.span>
                    </motion.h1>
                    <p className="hero-subtitle">
                        Incubadora de narrativas sci-fi, horror analógico e
                        projetos experimentais.
                    </p>
                </div>
            </section>

            {/* SOBRE O PROJETO */}
            <section className="about-section">
                <h2>O que é V.E.R.U.M.?</h2>
                <p>
                    V.E.R.U.M. é uma plataforma colaborativa onde agentes e
                    jogadores cocriam experiências de horror cósmico, ficção
                    científica e especulações narrativas.
                </p>
                <p>
                    Aqui, tokens não são apenas valor — são fragmentos de
                    realidade. Arquivos ocultos, entidades, missões e agentes
                    são moldados pela sua interação com a simulação.
                </p>
            </section>

            {/* COMO FUNCIONA */}
            <section className="how-it-works">
                <h2>Como Funciona?</h2>
                <ol>
                    <li>
                        <strong>Conecte-se:</strong> entre com sua carteira
                        Web3.
                    </li>
                    <li>
                        <strong>Mint seu Agente:</strong> cada NFT representa
                        uma entidade única.
                    </li>
                    <li>
                        <strong>Interaja:</strong> proponha eventos, interaja
                        com arquivos e participe de staking criativo.
                    </li>
                </ol>
            </section>

            {/* ARQUIVOS CLASSIFICADOS */}
            <section
                className="classified-gallery parallax"
                style={{
                    backgroundImage:
                        "url(/assets/parallax/files-background.jpg)"
                }}
            >
                <h2>Arquivos Classificados</h2>
                <div className="gallery-grid">
                    <div className="doc-card">
                        Anomalia 001 — Dispositivo de distorção mental contínua
                    </div>
                    <div className="doc-card">
                        Entidade E7 — Forma simbiótica codificada em tokens
                    </div>
                    <div className="doc-card">
                        Incidente H31 — Ruptura interplanar durante ritual
                        colaborativo
                    </div>
                </div>
            </section>

            {/* HISTÓRICO OCULTO */}
            <section className="timeline-section">
                <h2>Histórico Oculto</h2>
                <ul className="timeline">
                    <li>
                        <strong>1947:</strong> A Fundação V.E.R.U.M. ocorre após
                        o Evento do Eixo Anômalo.
                    </li>
                    <li>
                        <strong>1998:</strong> Abertura dos primeiros portais
                        não-autorizados por agentes livres.
                    </li>
                    <li>
                        <strong>2025:</strong> Incorporação de tecnologias Web3
                        para contenção e simulação.
                    </li>
                    <li>
                        <strong className="glitch" data-text="Agora:">
                            Agora:
                        </strong>{" "}
                        Você é o próximo agente a acessar o inexplicável.
                    </li>
                </ul>
            </section>

            {/* COMUNIDADE COLABORATIVA */}
            <section className="community-section">
                <h2>Colabore com o Desconhecido</h2>
                <p>
                    Construa agentes. Proponha eventos. Analise dados
                    não-lineares. Contribua com arte, código e ideias para
                    narrativas do futuro.
                </p>
                <button className="cta-button">Entrar na Simulação</button>
            </section>

            <Footer />
        </div>
    );
};

export default HomeView;
