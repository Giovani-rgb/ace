import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useIntrepid } from "../contexts/IntrepidContext";
import { useAuth } from "../contexts/AuthContext";

export default function IntrepidController() {
    const { setBalance, setBannerEvents } = useIntrepid();
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleLoadBannerEvents = async () => {
            try {
                const res = await fetch("http://localhost:3001/api/banners");
                const data = await res.json(); // ✅ Adicionado
                if (Array.isArray(data)) {
                    setBannerEvents(data);
                } else {
                    console.warn("Formato inesperado para banners:", data);
                }
            } catch (err) {
                console.error("Erro ao carregar eventos do banner:", err);
            }
        };

        const handleGetBalance = async event => {
            const { uid } = event.detail;
            if (!uid) return;

            try {
                const res = await fetch(`http://localhost:3001/api/saldo/${uid}`);
                const data = await res.json();
                const Pi = data?.pi || 0;
                const CICLOS = data?.ciclos || 0;

                setBalance({ Pi, CICLOS });
            } catch (err) {
                console.error("Erro ao buscar saldo:", err);
            }
        };

        const handleCloseSession = async event => {
            const { uid, idSecao } = event.detail;
            if (!uid || !idSecao) return;

            try {
                const res = await fetch(
                    `http://localhost:3001/api/secoes/${uid}/${idSecao}/close`,
                    {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ uid, idSecao })
                    }
                );

                if (res.ok) {
                    logout();
                    navigate("/");
                } else {
                    console.warn("Falha ao encerrar sessão no servidor.");
                }
            } catch (err) {
                console.error("Erro ao encerrar sessão:", err);
            }
        };

        window.addEventListener("getBalance", handleGetBalance);
        window.addEventListener("closeSession", handleCloseSession);
        window.addEventListener("intrepid:load-banner-events", handleLoadBannerEvents);

        return () => {
            window.removeEventListener("getBalance", handleGetBalance);
            window.removeEventListener("closeSession", handleCloseSession);
            window.removeEventListener("intrepid:load-banner-events", handleLoadBannerEvents);
        };
    }, [setBalance, logout, navigate, setBannerEvents]);

    return null;
}
