import { AuthModel } from "../models/AuthModel";

window.addEventListener("pi-auth-click", async () => {

  const onIncompletePaymentFound = async (payment) => {
    console.log("Pagamento incompleto encontrado:", payment);

    const paymentId = payment?.identifier;
    const txid = payment?.transaction?.txid;
    const uid = payment?.user_uid || payment?.uid; // fallback

    if (!paymentId || !txid || !uid) {
      console.warn("❌ Dados insuficientes para completar o pagamento automaticamente.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/premium/complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ paymentId, txid, uid })
      });

      const data = await res.json();

      if (!res.ok) {
        console.warn("❌ Erro ao completar pagamento automático:", data);
      } else {
        console.log("✅ Pagamento incompleto resolvido automaticamente:", data);
      }
    } catch (err) {
      console.error("❌ Erro na requisição de pagamento automático:", err.message);
    }
  };

  try {
    const scopes = ['username', 'payments', 'wallet_address'];
    const authResult = await window.Pi.authenticate(scopes, onIncompletePaymentFound);

    const modeledResult = new AuthModel(authResult);

    // 🔄 Preenchendo o UID no payment, se houver pagamento incompleto
    if (authResult?.incomplete_payment && modeledResult.user?.uid) {
      authResult.incomplete_payment.uid = modeledResult.user.uid;
    }

    window.dispatchEvent(new CustomEvent("pi-auth-success", { detail: modeledResult }));

  } catch (err) {
    console.error("Erro na autenticação:", err.message);
  }
});
