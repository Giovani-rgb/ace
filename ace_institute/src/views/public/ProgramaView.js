import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/ProgamaView.css";

const ProgamaView = () => {
  const navigate = useNavigate();

  const handleAuthClick = () => {
    navigate("/auth");
  };

  return (
    <div>
      <Header />
      <main className="main">
        <section className="hero">
          <h1 className="title">Recrutando Mentes Fora da Curva</h1>
          <p className="subtitle">
            Os programas da ACE não são para todos — são para aqueles prontos para transformar o mundo com ciência.
          </p>
          <button className="auth-button" onClick={handleAuthClick}>
            Candidate-se Agora
          </button>
        </section>

        <section className="content">
          <h2>Programas Filantrópicos e Científicos</h2>
          <p>
            A <strong>Academia de Ciências Extraordinária</strong> desenvolve programas voltados para jovens talentos com habilidades únicas,
            visão crítica e espírito de descoberta. Da infância à universidade, buscamos aqueles que podem mudar paradigmas.
          </p>

          <h3>Iniciativas Ativas</h3>
          <ul>
            <li><strong>ACE Júnior:</strong> Jovens entre 12 e 17 anos com interesse em engenharia, IA, biohacking e energia alternativa.</li>
            <li><strong>ACE Universitário:</strong> Estudantes de graduação com potencial para liderar laboratórios de pesquisa.</li>
            <li><strong>ACE Prodigy:</strong> Crianças superdotadas que apresentam indícios de genialidade precoce.</li>
          </ul>

          <h3>O Que Esperar</h3>
          <ul>
            <li>Ambientes imersivos de aprendizado prático</li>
            <li>Mentoria com especialistas e acesso a tecnologia experimental</li>
            <li>Desafios reais que moldam o futuro</li>
          </ul>

          <p>
            Se você sente que não pertence ao comum, talvez seu lugar seja conosco.
          </p>
        </section>

        <section className="media">
          <h2>Vislumbre a Jornada</h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/4hA7G-0Gi2E"
            title="Vídeo inspirador sobre jovens cientistas"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProgamaView;
