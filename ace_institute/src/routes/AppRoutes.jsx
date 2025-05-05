import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "../views/public/HomeView";
import About from "../views/public/AboutView";
import ProgamaView from "../views/public/ProgramaView";
import PeriodicoView from "../views/public/PeriodicoView";


const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/sobre" element={<About/>}/>
        <Route path="/progamas" element={<ProgamaView />}/>
        <Route path="/periodicos" element={<PeriodicoView />}/>
        
        {/* Outras rotas públicas ou privadas podem ser adicionadas aqui */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
