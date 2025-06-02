export async function handlePremiumPayment(event) {
    const { amount, memo, metadata, uid } = event.detail;

    try {
        const payment = await window.Pi.createPayment(
            {
                amount,
                memo,
                metadata
            },
            {
                onReadyForServerApproval: async function (paymentId) {
                    alert(
                        "✅ Pagamento pronto para aprovação no servidor!\nID: " +
                            paymentId
                    );
                    try {
                        const response = await fetch(
                            "http://localhost:3001/api/premium/approve",
                            {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ paymentId, uid })
                            }
                        );
                        if (response.ok) {
                            alert(
                                "✅ Servidor recebeu o pagamento para aprovação!"
                            );
                        } else {
                            const errorText = await response.text();
                            alert(
                                "❌ Erro ao enviar pagamento: " +
                                    response.status +
                                    " - " +
                                    errorText
                            );
                        }
                    } catch (err) {
                        alert(
                            "❌ Falha ao comunicar com o servidor: " +
                                err.message
                        );
                    }
                },

                onReadyForServerCompletion: async function (paymentId, txid) {
                    alert(
                        "🎉 Pagamento pronto para ser completado!\nID: " +
                            paymentId +
                            "\nTransação: " +
                            txid
                    );
                    try {
                        const response = await fetch(
                            "http://localhost:3001/api/premium/complete",
                            {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ paymentId, txid, uid })
                            }
                        );
                        if (response.ok) {
                            alert(
                                "✅ Servidor completou o pagamento com sucesso!"
                            );
                        } else {
                            alert(
                                "❌ Erro ao completar o pagamento no servidor!"
                            );
                        }
                    } catch (err) {
                        alert(
                            "❌ Falha ao completar pagamento: " + err.message
                        );
                    }
                },

                onCancel: async function (paymentId) {
                    alert(
                        "⚠️ Pagamento cancelado pelo usuário.\nID: " + paymentId
                    );
                    try {
                        await fetch(
                            "http://localhost:3001/api/premium/cancel",
                            {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ paymentId, uid })
                            }
                        );
                        console.log("✅ Cancelamento registrado no servidor");
                    } catch (err) {
                        console.error(
                            "❌ Falha ao registrar cancelamento:",
                            err.message
                        );
                    }
                },

                onError: async function (error, payment) {
                    alert("❌ Erro no pagamento: " + error.message);
                    try {
                        await fetch("http://localhost:3001/api/premium/error", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                paymentId: payment.identifier,
                                uid,
                                errorMessage: error.message
                            })
                        });
                        console.log("✅ Erro registrado no servidor");
                    } catch (err) {
                        console.error(
                            "❌ Falha ao registrar erro:",
                            err.message
                        );
                    }
                }
            }
        );

        console.log("💰 Pagamento retornado:", payment);
        alert("💰 Pagamento concluído com sucesso!");
    } catch (error) {
        alert("❌ Erro ao iniciar o pagamento: " + error.message);
    }
}
