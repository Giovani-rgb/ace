export async function showPiAd(adUnit = "rewarded") {
  if (!window.Pi || !window.Pi.ads) {
    alert("O sistema de anúncios ainda não está disponível. Tente novamente mais tarde.");
    return;
  }

  try {
    const nativeFeatures = await window.Pi.nativeFeaturesList?.();
    const adNetworkSupported = nativeFeatures?.includes("ad_network");

    if (!adNetworkSupported) {
      alert("Seu Pi Browser está desatualizado. Atualize para poder assistir anúncios e ganhar recompensas.");
      return;
    }

    const isAdReady = await window.Pi.ads.isAdReady(adUnit);

    if (!isAdReady.ready) {
      const requestAd = await window.Pi.ads.requestAd(adUnit);

      if (requestAd.result === "ADS_NOT_SUPPORTED") {
        alert("Seu Pi Browser não suporta anúncios. Atualize para a versão mais recente.");
        return;
      }

      if (requestAd.result !== "AD_LOADED") {
        alert("Os anúncios estão temporariamente indisponíveis. Tente novamente mais tarde.");
        return;
      }
    }

    const showAd = await window.Pi.ads.showAd({
      adUnit,
      onOpen: () => console.log("Anúncio iniciado."),
      onClose: (result) => console.log("Anúncio encerrado:", result),
    });

    if (showAd?.result === "AD_REWARDED") {
      alert("Você ganhou uma recompensa! 🎉");
      // Aqui você pode verificar o adId contra o backend, se necessário.
    } else {
      alert("Anúncio finalizado sem recompensa.");
    }
  } catch (error) {
    console.error("Erro ao exibir anúncio:", error);
    alert("Erro ao tentar exibir o anúncio. Tente novamente mais tarde.");
  }
}
