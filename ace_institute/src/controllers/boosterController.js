import { useEffect } from "react";
import { useBooster } from "../contexts/boosterContext";
import { useAuth } from "../contexts/AuthContext";

export default function BoosterPlansController() {
  const { setCotacao, cotacao, setPlanoSelecionado } = useBooster();
  const { authData } = useAuth();

  useEffect(() => {
   
    
    const handleCotacaoRequest = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/cotacao/piusd");
        const data = await res.json();
        const piUsd = data?.piusd || 0;
        if (piUsd) {
          setCotacao(piUsd);
          alert(`💱 Cotação atualizada: 1 Pi ≈ $${piUsd.toFixed(2)} USD`);
        } else {
         /*o servidor ta me passando este else*/
          alert("⚠️ Cotação inválida recebida do servidor.");
        }
      } catch (err) {
        console.error("Erro ao obter cotação do Pi:", err);
        alert("❌ Erro ao obter cotação do Pi. Tente novamente mais tarde.");
      }
    };

    const handleBoosterSelecionado = async (event) => {
     
      const plano = event.detail;
      if (!plano || !authData?.user?.uid) return;

      setPlanoSelecionado(plano);
      //este valor drve ser em Pi
      const amount = plano.pricePi;
      const memo = `Compra do plano: ${plano.title}`;
      const metadata = {
        duration: plano.apy,
        planoMutiplier: plano.multiplier || plano.title,
      };
      const uid = authData.user.uid;

      try {
        const payment = await window.Pi.createPayment(
          { amount, memo, metadata },
          {
            onReadyForServerApproval: async (paymentId) => {
              console.log("✅ Pagamento pronto para aprovação no servidor:", paymentId);
              try {
                const res = await fetch("http://localhost:3001/api/premium/approve", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ paymentId, uid }),
                });

                if (!res.ok) {
                  const errText = await res.text();
                  console.warn("❌ Erro na aprovação:", res.status, errText);
                  alert("❌ Erro ao aprovar pagamento no servidor.");
                } else {
                  alert("🛡️ Pagamento aprovado. Aguardando confirmação.");
                }
              } catch (err) {
                console.error("❌ Falha ao comunicar aprovação:", err.message);
                alert("❌ Erro de comunicação com servidor de aprovação.");
              }
            },

            onReadyForServerCompletion: async (paymentId, txid) => {
              console.log("🎉 Pronto para completar pagamento:", paymentId, txid);
              try {
                const res = await fetch("http://localhost:3001/api/premium/complete", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ paymentId, txid, uid }),
                });

                if (!res.ok) {
                  console.warn("❌ Falha ao completar o pagamento no servidor.");
                  alert("❌ Pagamento não foi completado corretamente.");
                } else {
                  alert("🎉 Pagamento concluído com sucesso! Booster ativo.");
                }
              } catch (err) {
                console.error("❌ Erro na finalização:", err.message);
                alert("❌ Erro ao finalizar o pagamento.");
              }
            },

            onCancel: async (paymentId) => {
              console.log("⚠️ Pagamento cancelado:", paymentId);
              try {
                await fetch("http://localhost:3001/api/premium/cancel", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ paymentId, uid }),
                });
                alert("⚠️ Pagamento cancelado pelo usuário.");
              } catch (err) {
                console.error("❌ Erro ao registrar cancelamento:", err.message);
              }
            },

            onError: async (error, payment) => {
              console.error("❌ Erro no pagamento:", error.message);
              alert("❌ Erro durante o pagamento: " + error.message);
              try {
                await fetch("http://localhost:3001/api/premium/error", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    paymentId: payment.identifier,
                    uid,
                    errorMessage: error.message,
                  }),
                });
              } catch (err) {
                console.error("❌ Erro ao registrar falha de pagamento:", err.message);
              }
            },
          }
        );

        console.log("💰 Pagamento retornado:", payment);
      } catch (error) {
        console.error("❌ Erro ao iniciar pagamento:", error.message);
        alert("❌ Erro ao iniciar o pagamento.");
      }
    };

    // Auto-busca de cotação se necessário
    if (!cotacao || cotacao <= 0) {
      handleCotacaoRequest();
    }

    // Listeners
    window.addEventListener("get-cotacao-pi-usd", handleCotacaoRequest);
    window.addEventListener("booster-selecionado", handleBoosterSelecionado);

    return () => {
      window.removeEventListener("get-cotacao-pi-usd", handleCotacaoRequest);
      window.removeEventListener("booster-selecionado", handleBoosterSelecionado);
    };
  }, [setCotacao, cotacao, setPlanoSelecionado, authData]);

  return null;
}
