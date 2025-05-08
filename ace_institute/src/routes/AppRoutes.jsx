import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "../views/public/HomeView";
import About from "../views/public/AboutView";
import ProgamaView from "../views/public/ProgramaView";
import PeriodicoView from "../views/public/PeriodicoView";
import PrivacityView from "../views/public/PrivacityView";
import TermosView from "../views/public/TermosView";
import IntrepidView from "../views/private/IntrepidView";
import AuthView from "../views/AuthView";



const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/sobre" element={<About/>}/>
        <Route path="/progamas" element={<ProgamaView />}/>
        <Route path="/periodicos" element={<PeriodicoView />}/>
        <Route path="/privacity" element={<PrivacityView />}/>
        <Route path="/termos-uso" element={<TermosView />}/>
        <Route path="/auth" element={<AuthView />}/>
        <Route path="/dashboard" element={<IntrepidView />}/>
        
        {/* Outras rotas públicas ou privadas podem ser adicionadas aqui */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
