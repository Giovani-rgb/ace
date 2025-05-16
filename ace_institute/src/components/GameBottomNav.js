import { useLocation } from "react-router-dom";
import '../styles/GameBottomNav.css';

function GameBottomNav({ onNavigate }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="game-bottom-nav">
      <button
        className={isActive("/dashboard/map") ? "active" : ""}
        onClick={() => onNavigate("/dashboard/map")}
      >
        🗺️
        <span>Mapa</span>
      </button>
      <button
        className={isActive("/dashboard/inventory") ? "active" : ""}
        onClick={() => onNavigate("/dashboard/inventory")}
      >
        🎒
        <span>Inventory</span>
      </button>
      <button
        className={isActive("/dashboard/missions") ? "active" : ""}
        onClick={() => onNavigate("/dashboard/missions")}
      >
        🧠
        <span>Mission</span>
      </button>
      <button
        className={isActive("/dashboard/perfil") ? "active" : ""}
        onClick={() => onNavigate("/dashboard/perfil")}
      >
        ⚙️
        <span>Perfil</span>
      </button>
    </nav>
  );
}

export default GameBottomNav;
