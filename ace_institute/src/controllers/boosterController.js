import { useEffect } from "react";
import { useBooster } from "../contexts/boosterContext";
import { useAuth } from "../contexts/AuthContext";

export default function BoosterPlansController() {
    const { setCotacao, cotacao, setPlanoSelecionado } = useBooster();
    const { authData } = useAuth();

    useEffect(() => {
        const handleCotacaoRequest = async () => {
            try {
                const res = await fetch(
                    "http://localhost:3001/api/cotacao/piusd"
                );
                const data = await res.json();
                const piUsd = data?.piusd || 0;
                if (piUsd) {
                    setCotacao(piUsd);
                    console.log(
                        `💱 Cotação atualizada: 1 Pi ≈ $${piUsd.toFixed(2)} USD`
                    );
                } else {
                    console.log("⚠️ Cotação inválida recebida do servidor.");
                }
            } catch (err) {
                console.error("Erro ao obter cotação do Pi:", err);
            }
        };

        const handleBoosterSelecionado = async event => {
            const plano = event.detail;
            if (!plano || !authData?.user?.uid) return;

            setPlanoSelecionado(plano);
            const amount = plano.pricePi;
            const memo = ` ${plano.title}`;
            const metadata = {
                duration: plano.apy,
                planoMutiplier: plano.multiplier || plano.title
            };
            const uid = authData.user.uid;

            try {
                const payment = await window.Pi.createPayment(
                    { amount, memo, metadata },
                    {
                        onReadyForServerApproval: async paymentId => {
                            try {
                                const res = await fetch(
                                    "http://localhost:3001/api/premium/approve",
                                    {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            paymentId,
                                            uid,
                                            plano: {
                                                title: plano.title,
                                                pricePi: plano.pricePi,
                                                multiplier: plano.multiplier,
                                                apy: plano.apy
                                            }
                                        })
                                    }
                                );

                                if (!res.ok) {
                                    const errText = await res.text();
                                    console.warn(
                                        "❌ Erro na aprovação:",
                                        res.status,
                                        errText
                                    );
                                } else {
                                    console.log(
                                        "🛡️ Pagamento aprovado. Aguardando confirmação."
                                    );
                                }
                            } catch (err) {
                                console.error(
                                    "❌ Falha ao comunicar aprovação:",
                                    err.message
                                );
                            }
                        },

                        onReadyForServerCompletion: async (paymentId, txid) => {
                            console.log(
                                "🎉 Pronto para completar pagamento:",
                                paymentId,
                                txid
                            );
                            try {
                                const res = await fetch(
                                    "http://localhost:3001/api/premium/complete",
                                    {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            paymentId,
                                            txid,
                                            uid
                                        })
                                    }
                                );

                                if (!res.ok) {
                                    console.warn(
                                        "❌ Falha ao completar o pagamento no servidor."
                                    );
                                } else {
                                    console.log(
                                        "🎉 Pagamento concluído com sucesso! Booster ativo."
                                    );
                                }
                            } catch (err) {
                                console.error(
                                    "❌ Erro na finalização:",
                                    err.message
                                );
                            }
                        },

                        onCancel: async paymentId => {
                            console.log("⚠️ Pagamento cancelado:", paymentId);
                            try {
                                await fetch(
                                    "http://localhost:3001/api/premium/cancel",
                                    {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({ paymentId, uid })
                                    }
                                );
                            } catch (err) {
                                console.error(
                                    "❌ Erro ao registrar cancelamento:",
                                    err.message
                                );
                            }
                        },

                        onError: async (error, payment) => {
                            console.error(
                                "❌ Erro no pagamento:",
                                error.message
                            );
                            try {
                                await fetch(
                                    "http://localhost:3001/api/premium/error",
                                    {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            paymentId: payment.identifier,
                                            uid,
                                            errorMessage: error.message
                                        })
                                    }
                                );
                            } catch (err) {
                                console.error(
                                    "❌ Erro ao registrar falha de pagamento:",
                                    err.message
                                );
                            }
                        }
                    }
                );

                console.log("💰 Pagamento retornado:", payment);
            } catch (error) {
                console.error("❌ Erro ao iniciar pagamento:", error.message);
            }
        };

        if (!cotacao || cotacao <= 0) {
            handleCotacaoRequest();
        }

        window.addEventListener("get-cotacao-pi-usd", handleCotacaoRequest);
        window.addEventListener(
            "booster-selecionado",
            handleBoosterSelecionado
        );

        return () => {
            window.removeEventListener(
                "get-cotacao-pi-usd",
                handleCotacaoRequest
            );
            window.removeEventListener(
                "booster-selecionado",
                handleBoosterSelecionado
            );
        };
    }, [setCotacao, cotacao, setPlanoSelecionado, authData]);

    return null;
}
