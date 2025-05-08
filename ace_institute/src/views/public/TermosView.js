import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/TermosView.css"; // caso queira adicionar estilo depois

const TermosView = () => {
  return (
    <div>
      <Header />
      <main className="main_termos">
        <h1 className="termos_titulo">Termos de Uso da ACE</h1>
        <section className="termos_conteudo">
          <p>
            Este portal é de acesso restrito e pertence à Academia de Ciências
            Extraordinária (ACE). Ao utilizar este sistema, o usuário declara estar
            ciente e de acordo com os seguintes termos:
          </p>

          <h2>1. Confidencialidade</h2>
          <p>
            Todo o conteúdo acessado neste domínio é classificado e não deve ser
            compartilhado fora dos canais autorizados pela Direção da ACE. Vazamentos
            podem resultar em sanções disciplinares e procedimentos dimensionais.
          </p>

          <h2>2. Uso de Informações</h2>
          <p>
            As informações disponíveis neste sistema são destinadas exclusivamente a
            membros autorizados com Nível de Acesso adequado. O uso impróprio pode
            comprometer a integridade das operações científicas em andamento.
          </p>

          <h2>3. Monitoramento</h2>
          <p>
            Toda atividade neste ambiente digital é registrada e analisada por
            sistemas de vigilância automática. Tentativas de manipulação dos dados ou
            acesso não autorizado serão contidas imediatamente.
          </p>

          <h2>4. Responsabilidade</h2>
          <p>
            A ACE não se responsabiliza por efeitos colaterais decorrentes da
            exposição a conteúdos anômalos, meméticos ou cognitopeligrosos. Use o
            sistema com cautela.
          </p>

          <p className="termos_obs">
            Observação: A simples leitura deste documento implica aceitação irrevogável
            dos termos, mesmo que não conscientemente compreendidos.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermosView;
