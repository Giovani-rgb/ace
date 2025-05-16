import React from "react";
import { useNavigate } from "react-router-dom";
import GameHeader from "../../components/GameHeader";
import GameBottomNav from "../../components/GameBottomNav";
import GameFooter from "../../components/GameFooter";
import "../../styles/panels/MapView.css";

export default function MapView() {
    const navigate = useNavigate();

    return (
        <div className="map-view">
            <GameHeader />
            <div className="map-terreo">
                <svg viewBox="0 0 800 600" width="360" height="540" fill="#f0f">
                    {/*Função para hexágono: desenhado manualmente abaixo*/}

                    {/*Recepção (hexágono central)*/}
                    <polygon
                        points="180,30 210,50 210,90 180,110 150,90 150,50"
                        class="wall"
                    />
                    <text x="180" y="70" class="label">
                        Recepção
                    </text>

                    {/*Sala de Conferência (hexágono acima da estufa) */}
                    <polygon
                        points="180,120 210,140 210,180 180,200 150,180 150,140"
                        class="wall"
                    />
                    <text x="180" y="160" class="label">
                        Conferência
                    </text>

                    {/*Estufa (hexágono abaixo da conferência)*/}
                    <polygon
                        points="180,210 210,230 210,270 180,290 150,270 150,230"
                        class="wall"
                    />
                    <text x="180" y="250" class="label">
                        Estufa
                    </text>

                    {/*Sala de Reunião (esquerda)*/}
                    <polygon
                        points="60,120 90,140 90,180 60,200 30,180 30,140"
                        class="wall"
                    />
                    <text x="60" y="160" class="label">
                        Reunião
                    </text>

                    {/*Investigação (direita)*/}
                    <polygon
                        points="300,120 330,140 330,180 300,200 270,180 270,140"
                        class="wall"
                    />
                    <text x="300" y="160" class="label">
                        Investigação
                    </text>

                    {/*Treinamento (esquerda inferior)*/}
                    <polygon
                        points="60,230 90,250 90,290 60,310 30,290 30,250"
                        class="wall"
                    />
                    <text x="60" y="270" class="label">
                        Treinamento
                    </text>

                    {/*Refeitório (direita inferior)*/}
                    <polygon
                        points="300,230 330,250 330,290 300,310 270,290 270,250"
                        class="wall"
                    />
                    <text x="300" y="270" class="label">
                        Refeitório
                    </text>

                    {/*Centro de Operações (hexágono largo central inferior)*/}
                    <polygon
                        points="180,320 210,340 210,380 180,400 150,380 150,340"
                        class="wall"
                    />
                    <text x="180" y="360" class="label">
                        Operações
                    </text>

                    {/* Escadas (base central)*/}
                    <polygon
                        points="180,430 190,440 190,460 180,470 170,460 170,440"
                        class="wall"
                    />
                    <text x="180" y="455" class="label">
                        Escada
                    </text>

                    {/* Tecnologias Emergentes */}
                    <rect
                        x="0"
                        y="0"
                        width="200"
                        height="100"
                        fill="#f39c12"
                        onClick={() => navigate("/departments/emerging-tech")}
                    />
                    <text x="0" y="0" fill="#000" fontSize="16">
                        Tecnologias Emergentes
                    </text>
                </svg>
            </div>

            <GameBottomNav onNavigate={navigate} />
            <GameFooter />
        </div>
    );
}
