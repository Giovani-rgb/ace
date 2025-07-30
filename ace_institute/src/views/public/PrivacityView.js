import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/PrivacityView.css";

const PrivacityView = () => {
  return (
    <div>
      <Header />

      <main className="main_privacidade">
        <h1 className="privacidade_titulo">Política de Privacidade da VERUM</h1>

        <section className="privacidade_conteudo">
          <p>
            Esta Política de Privacidade estabelece as diretrizes para coleta, uso e
            proteção de informações no ecossistema VERUM — incluindo este domínio,
            plataformas associadas, interfaces físicas e meios não-digitais vinculados
            à incubadora.
          </p>

          <p>
            Ao interagir com qualquer instância da VERUM, você consente, consciente ou
            não, com os termos a seguir.
          </p>

          <h2>1. Coleta de Dados</h2>
          <p>
            A VERUM coleta sinais emitidos por seus usuários, incluindo mas não se
            limitando a:
          </p>
          <ul>
            <li>Padrões de navegação sensorial</li>
            <li>Ressonância emocional involuntária</li>
            <li>Resíduos semânticos de interações anteriores</li>
            <li>Marcas de exposição a narrativas anômalas</li>
          </ul>
          <p>
            Alguns dados são colhidos diretamente por sensores de interface. Outros,
            por camadas simbólicas embutidas no conteúdo.
          </p>

          <h2>2. Armazenamento e Contenção</h2>
          <p>
            Os dados são armazenados em nós criptográficos espalhados por camadas
            paralelas de rede, protegidos por:
          </p>
          <ul>
            <li>Algoritmos de obfuscação cognitiva</li>
            <li>Campos de distorção perceptiva</li>
            <li>Guardiões simbólicos automatizados</li>
          </ul>
          <p>
            Tentativas de acesso não-autorizado serão registradas e tratadas conforme
            o <strong>Protocolo Lacuna</strong>.
          </p>

          <h2>3. Uso e Compartilhamento</h2>
          <p>
            As informações coletadas são utilizadas exclusivamente para:
          </p>
          <ul>
            <li>Calibrar experiências imersivas dentro da VERUM</li>
            <li>Diagnosticar desvios de realidade interpretativa</li>
            <li>Estimular conexões narrativas entre usuários</li>
          </ul>
          <p>
            Nenhum dado é vendido ou compartilhado com terceiros fora da constelação
            VERUM, exceto em casos de integração com parceiros operando sob a Regra do
            Vórtice Silencioso.
          </p>

          <h2>4. Consentimento e Revogação</h2>
          <p>
            Ao acessar qualquer conteúdo da VERUM, o usuário concede autorização plena,
            contínua e retroativa para análise de sua jornada interativa.
          </p>
          <p>
            A revogação do consentimento exige:
          </p>
          <ul>
            <li>Pedido manuscrito em papel verídico</li>
            <li>Testemunho de um agente Substancial</li>
            <li>Aprovação por unanimidade da Cúpula Dormiente</li>
          </ul>
          <p>
            Mesmo assim, nem todos os vestígios podem ser desfeitos.
          </p>

          <p className="privacidade_obs">
            ⚠️ <strong>Nota:</strong> Determinadas informações podem ser coletadas
            antes, durante ou depois de sua navegação — inclusive fora do ambiente
            digital — para fins de proteção ontológica.
          </p>

          <p className="privacidade_obs">
            Caso tenha dúvidas sobre o funcionamento desta política, recomendamos não
            continuar. O silêncio também é uma forma de aceitação.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacityView;
