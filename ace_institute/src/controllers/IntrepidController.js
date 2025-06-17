import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useIntrepid } from "../contexts/IntrepidContext";
import { useAuth } from "../contexts/AuthContext";

import { showPiAd } from "../utils/piads"; // ajuste o path conforme necessário

export default function IntrepidController() {
    const { setBalance, setBannerEvents, bannerEvents, balance } =
        useIntrepid();

    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleLoadBannerEvents = async () => {
            if (bannerEvents && bannerEvents.length > 0) {
                console.log("Eventos de banner já carregados.");
                return;
            }

            try {
                const res = await fetch("http://localhost:3001/api/banners");
                const data = await res.json();
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

            // ✅ Verifica se já tem balance carregado
            if (balance && (balance.Pi > 0 || balance.CICLOS > 0)) {
                console.log("Balance já carregado no contexto.");
                return;
            }

            try {
                const res = await fetch(
                    `http://localhost:3001/api/saldo/${uid}`
                );
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

        const handleAdsOn = () => {
            console.log("Evento 'adsOn' capturado: pode exibir anúncio aqui");

            showPiAd("rewarded");
            // pode usar "interstitial" ou "banner" se quiser
            // Aqui você pode chamar um ad provider, ex: AdMob, AdSense, Pi Ads, etc.
            // Exemplo: showRewardedVideoAd();
        };

        window.addEventListener("getBalance", handleGetBalance);
        window.addEventListener("closeSession", handleCloseSession);
        window.addEventListener(
            "intrepid:load-banner-events",
            handleLoadBannerEvents
        );
        window.addEventListener("adsOn", handleAdsOn);

        return () => {
            window.removeEventListener("getBalance", handleGetBalance);
            window.removeEventListener("closeSession", handleCloseSession);
            window.removeEventListener(
                "intrepid:load-banner-events",
                handleLoadBannerEvents
            );
            window.removeEventListener("adsOn", handleAdsOn);
        };
    }, [
        setBalance,
        logout,
        navigate,
        setBannerEvents,
        bannerEvents,
        balance // ✅ dependência adicionada
    ]);

    return null;
}
