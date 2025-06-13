import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/AuthView.css";
import "../controllers/AuthController.js";

const AuthView = () => {
  const [authResult, setAuthResult] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();
  const { setAuthData } = useContext(AuthContext);

  useEffect(() => {
    const button = document.getElementById("pi-auth-btn");

    const handleClick = () => {
      if (termsAccepted) {
        window.dispatchEvent(new CustomEvent("pi-auth-click"));
      } else {
        alert("Você deve aceitar os termos de uso para continuar.");
      }
    };

    const handleAuthSuccess = async (event) => {
      const fullData = event.detail;
      const data = {
        accessToken: fullData.accessToken,
        user: {
          uid: fullData.user.uid,
          username: fullData.user.username,
          wallet_address: fullData.user.wallet_address,
        },
      };

      setAuthResult(data);
      setIsSending(true);

      try {
        const response = await fetch("http://localhost:3001/api/auth/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
          setAuthData({ user: result.user, secao: result.secao });
          navigate("/dashboard");
        } else {
          console.log("Erro ao autenticar:", result.error);
        }
      } catch (error) {
        console.log("Erro de conexão com o servidor.");
        console.error(error);
      } finally {
        setIsSending(false);
      }
    };

    if (button) button.addEventListener("click", handleClick);
    window.addEventListener("pi-auth-success", handleAuthSuccess);

    return () => {
      if (button) button.removeEventListener("click", handleClick);
      window.removeEventListener("pi-auth-success", handleAuthSuccess);
    };
  }, [navigate, setAuthData, termsAccepted]);

  return (
    <div className="auth-container">
      <Header />
      <main className="main-auth">
        <div className="auth-card">
          <h2>Entrar na ACE</h2>
          <p>Autentique-se com sua conta Pi Network.</p>
          
          {authResult && (
            <div className="auth-result">
              <h3>Bem-vindo, {authResult.user.username}!</h3>
              <p>Aguarde um momento...</p>
              {isSending && <p className="loading">Enviando...</p>}
            </div>
          )}

          <button id="pi-auth-btn" className="auth-btn">
            Autenticar com Pi
          </button>

          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor="terms">
              Eu li e aceito os{" "}
              <a href="/termos-uso" target="_blank" rel="noopener noreferrer">
                Termos de Uso
              </a>.
            </label>
          </div>

          
        </div>

        <p className="pi-browser-note">
          Acesse este site através do navegador Pi Network para autenticar.
        </p>

        <a
          href="https://play.google.com/store/apps/details?id=pi.browser"
          target="_blank"
          rel="noopener noreferrer"
          className="google-play-btn"
        >
          Baixar Pi Browser na Google Play
        </a>

        <Link to="/dashboard" className="link-debug">
          Ignorar e ir para o Dashboard
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default AuthView;
