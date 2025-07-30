import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/TermosView.css"; // estilize depois se quiser

const TermosView = () => {
  return (
    <div>
      <Header />

      <main className="main_termos">
        <h1 className="termos_titulo">Termos de Uso da VERUM</h1>

        <section className="termos_conteudo">
          <p>
            Este portal faz parte da infraestrutura narrativa da VERUM — incubadora
            experimental de horror analógico e ficção especulativa. Ao acessar qualquer
            seção deste domínio, você declara estar em estado consciente (ou equivalente)
            e concorda com as condições a seguir.
          </p>

          <h2>1. Sigilo e Compartilhamento</h2>
          <p>
            Todo conteúdo presente aqui é de natureza simbólica, sensível ou ritual.
            Nenhuma informação pode ser reproduzida fora dos limites da VERUM sem
            autorização escrita de pelo menos dois Curadores.
          </p>

          <h2>2. Uso de Material Interativo</h2>
          <p>
            As experiências, documentos e estruturas presentes neste sistema são
            projetadas para uso interno e imersivo. Qualquer interpretação literal,
            indevida ou fora de contexto pode gerar efeitos colaterais narrativos e/ou
            ontológicos.
          </p>

          <h2>3. Monitoramento de Presença</h2>
          <p>
            Ao navegar por este domínio, sua atividade será registrada por sistemas de
            escuta simbólica. Essas informações são utilizadas para preservar a coesão
            dos experimentos em andamento e prevenir rupturas no véu da interface.
          </p>

          <h2>4. Limites de Responsabilidade</h2>
          <p>
            A VERUM não se responsabiliza por desconforto, dissonância cognitiva,
            ativação simbólica ou experiências anômalas desencadeadas durante a
            navegação. Ao permanecer, você declara estar preparado para cruzar as
            fronteiras do ordinário.
          </p>

          <p className="termos_obs">
            ⚠️ <strong>Nota:</strong> A simples leitura desta página implica aceitação
            irrevogável e retroativa dos termos, mesmo que sua consciência negue ou
            não compreenda integralmente o conteúdo.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermosView;
