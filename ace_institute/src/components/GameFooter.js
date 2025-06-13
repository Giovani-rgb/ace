// components/GameFooter.tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaXTwitter,
  FaRedditAlien,
  FaDiscord,
  FaInstagram
} from "react-icons/fa6";
import { PiFlame } from "react-icons/pi";
import "../styles/GameFooter.css";

const GameFooter = () => {
  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="game-footer">
      <div className="footer-logo">
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </div>

      <div className="footer-social">
        <button className="social-btn" onClick={() => handleSocialClick("https://twitter.com/seuPerfil")}>
          <FaXTwitter />
        </button>
        <button className="social-btn" onClick={() => handleSocialClick("https://www.reddit.com/user/seuPerfil")}>
          <FaRedditAlien />
        </button>
        <button className="social-btn" onClick={() => handleSocialClick("https://discord.gg/seuConvite")}>
          <FaDiscord />
        </button>
        <button className="social-btn" onClick={() => handleSocialClick("https://fireside.xyz/seuPerfil")}>
          <PiFlame />
        </button>
        <button className="social-btn" onClick={() => handleSocialClick("https://instagram.com/seuPerfil")}>
          <FaInstagram />
        </button>
      </div>

      <div className="footer-links">
        <Link to="/termos-uso">Termos de Uso</Link>
        <span>·</span>
        <Link to="/privacity">Política de Privacidade</Link>
        <span>·</span>
        <span>&copy; {new Date().getFullYear()} V.E.R.U.M. | Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};

export default GameFooter;
