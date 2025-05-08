import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/PrivacityView.css"; // se quiser estilizar depois

const PrivacityView = () => {
  return (
    <div>
      <Header />
      <main className="main_privacidade">
        <h1 className="privacidade_titulo">Política de Privacidade da ACE</h1>
        <section className="privacidade_conteudo">
          <p>
            Esta política descreve como a Academia de Ciências Extraordinária (ACE)
            coleta, armazena e utiliza informações sobre seus usuários — humanos ou
            não — durante a navegação por nossos sistemas.
          </p>

          <h2>1. Coleta de Dados</h2>
          <p>
            Coletamos dados técnicos e comportamentais em tempo real, incluindo, mas
            não se limitando a: localização dimensional, assinatura neural e padrões
            de digitação. Esses dados são usados para prevenir brechas multiversais.
          </p>

          <h2>2. Armazenamento e Segurança</h2>
          <p>
            As informações são armazenadas em servidores protegidos por criptografia
            quântica e campos de exclusão temporal. Qualquer tentativa de acesso
            externo será automaticamente registrada e neutralizada.
          </p>

          <h2>3. Compartilhamento de Dados</h2>
          <p>
            A ACE não compartilha dados com entidades externas, com exceção de
            agências colaboradoras autorizadas (ex.: Observatório Paracósmico,
            Conselho de Emergência Temporal).
          </p>

          <h2>4. Consentimento e Anulação</h2>
          <p>
            Ao acessar qualquer área deste domínio, o usuário concede permissão total
            e contínua para análise de suas interações. Cancelar o consentimento exige
            um pedido formal escrito em sangue cósmico, aprovado por dois Diretores.
          </p>

          <p className="privacidade_obs">
            Nota: Algumas informações podem ser coletadas sem conhecimento consciente
            do usuário, por razões de segurança ontológica.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacityView;
