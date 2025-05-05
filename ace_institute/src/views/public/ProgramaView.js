import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/ProgamaView.css";

const ProgamaView = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <section className="hero">
          <h1 className="title">Programas Filantrópicos e de Recrutamento</h1>
          <p className="subtitle">
            Transformando jovens talentos em protagonistas da ciência do amanhã.
          </p>
        </section>

        <section className="content">
          <h2>Nosso Compromisso com o Futuro</h2>
          <p>
            A <strong>Academia de Ciências Extraordinária (ACE)</strong> desenvolve iniciativas filantrópicas que
            visam recrutar e apoiar jovens estudantes, universitários e verdadeiros prodígios — talentos com potencial
            para liderar a próxima geração de descobertas científicas.
          </p>

          <h3>Programas Disponíveis</h3>
          <ul>
            <li><strong>ACE Júnior:</strong> Voltado para jovens entre 12 e 17 anos, com interesse em ciência e tecnologia.</li>
            <li><strong>ACE Universitário:</strong> Bolsas e estágios para estudantes de graduação que desejam integrar equipes de pesquisa.</li>
            <li><strong>ACE Prodigy:</strong> Programa especial para crianças superdotadas com habilidades cognitivas fora da curva.</li>
          </ul>

          <h3>Por que participar?</h3>
          <p>
            Participar dos projetos da ACE significa estar cercado de mentes brilhantes, equipamentos de ponta e desafios reais. Os jovens pesquisadores
            aprendem na prática, desenvolvem projetos científicos e constroem uma base sólida para uma carreira promissora.
          </p>

          <h3>Vantagens</h3>
          <ul>
            <li>Mentoria com cientistas experientes</li>
            <li>Ambiente de pesquisa estimulante e colaborativo</li>
            <li>Possibilidade de bolsas e reconhecimento internacional</li>
          </ul>

          <h3>Desafios</h3>
          <ul>
            <li>Alto nível de exigência e comprometimento</li>
            <li>Trabalho em equipe com diferentes perfis de personalidade</li>
            <li>Necessidade de conciliar estudos e pesquisa</li>
          </ul>

          <p>
            Mesmo com desafios, a jornada científica dentro da ACE é uma experiência transformadora. Formamos líderes, não apenas profissionais.
          </p>
        </section>

        <section className="media">
          <h2>Assista</h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/4hA7G-0Gi2E"
            title="Vídeo inspirador sobre jovens cientistas"
            frameBorder="0"
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
