import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/About.css";

const About = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <section className="intro">
          <h1 className="title">Quem Somos</h1>
          <p className="text">
            Fundada em 1927 sob a égide de um tratado internacional não reconhecido, a <strong>Academia de Ciências Extraordinária (ACE)</strong> é uma organização independente e autônoma dedicada à descoberta, preservação e aplicação do conhecimento que desafia os limites da ciência convencional.
          </p>
        </section>

        <section className="section">
          <h2 className="subtitle">Nossa Missão</h2>
          <p className="text">
            A missão da ACE é clara: <em>detectar talentos excepcionais ainda em formação</em>, conectar prodígios de diferentes partes do mundo e treiná-los para resolver desafios que transcendem nossa realidade — da física quântica à engenharia de realidades alternativas.
          </p>
        </section>

        <section className="section">
          <h2 className="subtitle">Departamentos</h2>
          <ul className="list">
            <li><strong>Departamento de Fenômenos Inexplicáveis (DFI):</strong> Investiga eventos classificados como "além da compreensão atual".</li>
            <li><strong>Laboratório de Dobra Dimensional:</strong> Testes e simulações de viagens interdimensionais em ambientes controlados.</li>
            <li><strong>Departamento de Recrutas Prodigioso:</strong> Rastreia jovens com QI acima de 160 e habilidades cognitivas fora da curva.</li>
            <li><strong>Extensão Casa da Evolução:</strong>Para mais informações
            sobre a Extensão Casa da Evolução, requer nivel de acesso Classe
            III.</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="subtitle">O que não Contamos a Todos</h2>
          <p className="text">
            Algumas pesquisas da ACE envolvem linguagens esquecidas, artefatos
            não catalogados e até contatos não-humanos. Essas informações só são
            reveladas a membros do nível "Classe III".
          </p>
         
        </section>

        <section className="section">
          <h2 className="subtitle">Junte-se a Nós</h2>
          <p className="text">
            Se você acredita que há algo errado com o mundo como o conhecemos,
            se você sempre soube que havia mais... talvez você esteja pronto. A
            ACE não procura membros — ela os dá por merito.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
