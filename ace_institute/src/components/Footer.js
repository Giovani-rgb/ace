import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaXTwitter,
  FaComments,
  FaBookOpen,
} from "react-icons/fa6";
import "../styles/Footer.css";
import verumLogo from "../assets/pi-logo.png"; // ajuste conforme o nome do logo

const Footer = () => {
  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="top">
          {/* Logo + Título */}
          <div className="logo-section">
            <span className="powered-text">Incubado por</span>
            <div className="logo-pi">
              <img
                src={verumLogo}
                alt="VERUM Logo"
                className="pi-logo"
              />
              <span className="logo-text">Pi Network</span>
            </div>
          </div>

          {/* Botões sociais */}
          <div className="socials">
            <button
              className="social-btn"
              onClick={() => handleSocialClick("https://instagram.com/verum.hub")}
            >
              <FaInstagram />
            </button>
            <button
              className="social-btn"
              onClick={() => handleSocialClick("https://twitter.com/verum_hub")}
            >
              <FaXTwitter />
            </button>
            <button
              className="social-btn"
              onClick={() => handleSocialClick("https://forum.verumhub.org")}
            >
              <FaComments />
            </button>
            <button
              className="social-btn"
              onClick={() => handleSocialClick("https://docs.verumhub.org")}
            >
              <FaBookOpen />
            </button>
          </div>

          {/* Links legais */}
          <div className="legal">
            <Link to="/privacity">○ Política de Privacidade</Link>
            <Link to="/termos-uso">○ Termos de Uso</Link>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="bottom">
          <p>© {new Date().getFullYear()} V.E.R.U.M. | Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
