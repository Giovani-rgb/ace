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
          <h1 className="title">Ganhar Pensando — Crescer Construindo</h1>
          <p className="subtitle">
            A VERUM recompensa mentes criativas e curiosas. Aqui, você colhe o que compartilha: conhecimento, tempo, impacto.
          </p>
          <button className="auth-button" onClick={handleAuthClick}>
            Junte-se à Iniciativa
          </button>
        </section>

        <section className="content">
          <h2>Como Funciona a Economia da VERUM</h2>
          <p>
            A plataforma opera por meio de um sistema de <strong>assinatura cooperativa</strong>, onde os membros recebem retorno em <strong>APY (Annual Percentage Yield)</strong> baseado no engajamento, tempo de navegação e criação de conteúdo relevante.
          </p>
          <p>
            A assinatura não é apenas um acesso — é um <em>voto de confiança</em>. Cada interação gera valor. E esse valor é redistribuído.
          </p>

          <h3>Recompensas Inteligentes</h3>
          <ul>
            <li><strong>APY Dinâmico:</strong> Quanto mais você participa, mais você recebe.</li>
            <li><strong>Proof of Thought:</strong> Publicações, projetos, artigos e vídeos geram tokens de influência e reputação.</li>
            <li><strong>Tempo de Consciência:</strong> Permanência ativa no site desbloqueia recompensas em ciclos mensais.</li>
          </ul>

          <h2>Café Pallace — O Centro da Governança</h2>
          <p>
            Toda decisão estratégica da VERUM nasce no <strong>Café Pallace</strong>, um fórum vivo onde usuários com participação ativa votam, sugerem e constroem juntos o futuro da plataforma.
          </p>

          <ul>
            <li><strong>Votos com lastro:</strong> O peso do seu voto é proporcional à sua reputação e contribuição.</li>
            <li><strong>Salas Temáticas:</strong> Ciência, ficção, arte, ética e desenvolvimento colaborativo.</li>
            <li><strong>Missões de Incubação:</strong> Ideias votadas podem virar projetos reais financiados pela comunidade.</li>
          </ul>

          <h2>Ganhe Criando</h2>
          <p>
            Ao criar conteúdos — textos, músicas, códigos, narrativas ou experiências — você pode integrá-los ao <strong>Catálogo VERUM</strong>, onde o reconhecimento é simbólico e financeiro.
          </p>

          <p>
            Aqui, cada minuto é um investimento. Cada ideia, uma semente. E cada voto, uma escolha real.
          </p>
        </section>

        
      </main>
      <Footer />
    </div>
  );
};

export default ProgamaView;
