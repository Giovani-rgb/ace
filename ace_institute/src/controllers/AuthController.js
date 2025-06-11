import { AuthModel } from "../models/AuthModel";

// Escuta o clique disparado do AuthView
window.addEventListener("pi-auth-click", async () => {
  

  const onIncompletePaymentFound = (payment) => {
    console.log("Pagamento incompleto encontrado:", payment);
  };

  try {
    const scopes = ['username', 'payments', 'wallet_address'];
    const authResult = await window.Pi.authenticate(scopes, onIncompletePaymentFound);

    // Verifica se o objeto está conforme o model
    const modeledResult = new AuthModel(authResult);
    

    // Envia para a view
    window.dispatchEvent(new CustomEvent("pi-auth-success", { detail: modeledResult }));

  } catch (err) {
    console.error("Erro na autenticação:", err.message);
  }
});
