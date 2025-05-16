import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import HomeView from "../views/public/HomeView";
import About from "../views/public/AboutView";
import ProgamaView from "../views/public/ProgramaView";
import PeriodicoView from "../views/public/PeriodicoView";
import PrivacityView from "../views/public/PrivacityView";
import TermosView from "../views/public/TermosView";
import AuthView from "../views/AuthView";
import IntrepidView from "../views/private/IntrepidView";

import MapView from "../views/private/MapView";
import InventoryView from "../views/private/InventoryView";
import MissionsView from "../views/private/MissionView";
import PerfilView from "../views/private/PerfilView";
import PremiumPage from "../views/private/PremiumView";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/premium" element={<PremiumPage />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/progamas" element={<ProgamaView />} />
                <Route path="/periodicos" element={<PeriodicoView />} />
                <Route path="/privacity" element={<PrivacityView />} />
                <Route path="/termos-uso" element={<TermosView />} />
                <Route path="/auth" element={<AuthView />} />

                <Route path="/dashboard" element={<IntrepidView />} />

                <Route path="/dashboard/map" element={<MapView />} />
                <Route
                    path="/dashboard/inventory"
                    element={<InventoryView />}
                />
                <Route path="/dashboard/missions" element={<MissionsView />} />
                <Route path="/dashboard/perfil" element={<PerfilView />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
