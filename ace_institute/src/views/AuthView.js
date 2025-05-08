import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/AuthView.css";
import "../controllers/AuthController"; // Só precisa importar, ele se autoexecuta

const AuthView = () => {
  const [authResult, setAuthResult] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate(); // Hook do React Router

  useEffect(() => {
    const button = document.getElementById("pi-auth-btn");

    const handleClick = () => {
      
      window.dispatchEvent(new CustomEvent("pi-auth-click"));
    };

    const handleAuthSuccess = async (event) => {
      
      const fullData = event.detail;

      // Extraindo apenas os dados relevantes
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

        if (response.ok) {
          
          navigate("/dashboard"); // Redireciona usando React Router
        } else {
          console.log("Erro ao enviar dados ao servidor.");
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
  }, [navigate]);

  return (
    <div className="auth-container">
      <Header />

      <main className="main-Auth">
        <button id="pi-auth-btn" className="auth-btn">
          Autenticar com Pi
        </button>

        {authResult && (
          <div className="auth-result">
            <h2>Bem-vindo, {authResult.user.username}!</h2>
            <p>Aguarde um Momento...</p>
            {isSending && <p className="loading">Enviando...</p>}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AuthView;
