import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import TaskWallView from "../views/private/TaskWallView";

import { IntrepidProvider } from "../contexts/IntrepidContext";

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
                {/*Rotas protegidas*/}

                <Route
                    path="/dashboard"
                    element={
                        <IntrepidProvider>
                            <IntrepidView />
                        </IntrepidProvider>
                    }
                />

                <Route
                    path="/dashboard/map"
                    element={
                        <IntrepidProvider>
                            <MapView />
                        </IntrepidProvider>
                    }
                />
                <Route
                    path="/dashboard/task-wall"
                    element={
                        <IntrepidProvider>
                            <TaskWallView />
                        </IntrepidProvider>
                    }
                />
                <Route
                    path="/dashboard/inventory"
                    element={
                        <IntrepidProvider>
                            <InventoryView />
                        </IntrepidProvider>
                    }
                />
                <Route
                    path="/dashboard/missions"
                    element={
                        <IntrepidProvider>
                            <MissionsView />
                        </IntrepidProvider>
                    }
                />
                <Route
                    path="/dashboard/perfil"
                    element={
                        <IntrepidProvider>
                            <PerfilView />
                        </IntrepidProvider>
                    }
                />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
