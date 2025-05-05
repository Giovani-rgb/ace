import React from "react";
import './styles/App.css';
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <AppRoutes />
    </div>
  );
};

export default App;





