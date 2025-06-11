import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useIntrepid } from "../contexts/IntrepidContext";
import { useAuth } from "../contexts/AuthContext";



export default function IntrepidController() {
  const { setBalance } = useIntrepid();
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Handler para obter saldo
    const handleGetBalance = async (event) => {
      const { uid } = event.detail;
      if (!uid) return;

      try {
        // Substitua por POST se sua API usar POST
        const res = await fetch(`http://localhost:3001/api/saldo/${uid}`);
        const data = await res.json();

        const Pi = data?.pi || 0;
        const CICLOS = data?.ciclos || 0;

        setBalance({ Pi, CICLOS });
      } catch (err) {
        console.error("Erro ao buscar saldo:", err);
      }
    };

    // Handler para encerrar sessão
    const handleCloseSession = async (event) => {
      const { uid, idSecao } = event.detail;
      if (!uid || !idSecao) return;

      try {
        const res = await fetch(`http://localhost:3001/api/secoes/${uid}/${idSecao}/close`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ uid, idSecao }),
        });

        if (res.ok) {
          logout();        // encerra sessão do usuário
          navigate("/");   // redireciona para página inicial
        } else {
          console.warn("Falha ao encerrar sessão no servidor.");
        }
      } catch (err) {
        console.error("Erro ao encerrar sessão:", err);
      }
    };

    // Adiciona listeners
    window.addEventListener("getBalance", handleGetBalance);
    window.addEventListener("closeSession", handleCloseSession);

    // Remove listeners ao desmontar
    return () => {
      window.removeEventListener("getBalance", handleGetBalance);
      window.removeEventListener("closeSession", handleCloseSession);
    };
  }, [setBalance, logout, navigate]);

  // Componente invisível
  return null;
}


