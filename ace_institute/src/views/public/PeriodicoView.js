import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/PeriodicoView.css";

const PeriodicoView = () => {
    return (
        <div>
            <Header />

            <main className="main_periodico">
                <section className="section_central_periodicos">
                    <h1 className="central_title">
                        Central de Periódicos da ACE
                    </h1>
                    <p className="central_description">
                        Acesso restrito a documentos classificados da Academia
                        de Ciências Extraordinária. Explore artigos, relatórios
                        e dossiês com base em critérios como:
                    </p>
                    <ul className="central_filters">
                        <li>Nível de Acesso</li>
                        <li>Tipo de Documento: Relatório, Dossiê, Periódico</li>
                        <li>Vínculo com Projetos Oficiais</li>
                        <li>Classificação de Perigo</li>
                    </ul>
                    <input
                        type="text"
                        className="filtro_input"
                        placeholder="Buscar por título, projeto, autor..."
                    />
                </section>

                <section className="section_filtro_busca">
                    <h2 className="filtro_title">Filtrar Documentos</h2>
                    <div className="filtros">
                        <select className="filtro_select">
                            <option value="nivel_acesso">
                                Nível de Acesso
                            </option>
                            <option value="tipo_documento">
                                Tipo de Documento
                            </option>
                            <option value="vinculo_projeto">
                                Vínculo com Projetos
                            </option>
                            <option value="classificacao_perigo">
                                Classificação de Perigo
                            </option>
                        </select>
                        <button className="search_button">Pesquisar</button>
                    </div>
                </section>

                <section className="section_artigos_recentes">
                    <h2 className="recentes_title">Documentos Recentes</h2>

                    <article className="documento_item">
                        <div className="documento_cabecalho">
                            <span>tipo documento: Dossie</span>
                            <span className="insignia_projeto">
                                Projeto: VIGIA
                            </span>
                        </div>
                        <h3>Um Sinal de Outra Dimensão?</h3>
                        <span className="data_publicacao">
                            Publicado em: 12/04/2025
                        </span>
                        <br />
                        <span className="autor">Autor: Dr. Elías S.</span>
                        <p>
                            Durante um experimento com campos gravitacionais,
                            sensores detectaram padrões repetitivos anômalos.
                            Teorias variam entre interferência e... outra coisa.
                        </p>
                        <p className="puzzle_hint">
                            <strong>Pista:</strong> Verifique os comentários do
                            HTML desta página.
                        </p>
                    </article>

                    <article className="documento_item">
                        <div className="documento_cabecalho">
                            <span className="insignia_projeto">
                                Projeto: O.R.I.O.N.
                            </span>
                            <span className="data_publicacao">
                                Publicado em: 28/03/2025
                            </span>
                            <span className="autor">
                                Autor: Equipe de Cronodinâmica
                            </span>
                        </div>
                        <h3>Projeto O.R.I.O.N.</h3>
                        <p>
                            Projeto ultra-secreto sobre comunicação através do
                            tempo. Resultados vazaram acidentalmente por
                            gráficos publicados.
                        </p>
                        <p className="puzzle_hint">
                            <strong>Dica:</strong> Verifique os metadados da
                            imagem do rodapé.
                        </p>
                    </article>

                    <article className="documento_item">
                        <div className="documento_cabecalho">
                            <span className="insignia_projeto">
                                Projeto: ALFA-MENTA
                            </span>
                            <span className="data_publicacao">
                                Publicado em: 05/02/2025
                            </span>
                            <span className="autor">Autor: A.R.</span>
                        </div>
                        <h3>Por Que Apenas os Mais Atentos Percebem?</h3>
                        <p>
                            O conhecimento está nas entrelinhas, nos símbolos
                            ocultos e nas estruturas visuais. Continue curioso.
                        </p>
                    </article>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default PeriodicoView;
