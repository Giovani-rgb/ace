import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaXTwitter, FaComments, FaBookOpen } from "react-icons/fa6";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="top">
          <div className="socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaXTwitter size={20} />
            </a>
            <a href="https://forum.acelink.com" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaComments size={20} />
            </a>
            <a href="https://gitbook.acelink.com" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaBookOpen size={20} />
            </a>
          </div>
          
          <div className="legal">
            <Link to="/privacity">Política de Privacidade</Link>
            <Link to="/termos-uso">Termos de Uso</Link>
          </div>
        </div>
        
        <div className="bottom">
          <p>
            © {new Date().getFullYear()} V.E.R.U.M. | Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
