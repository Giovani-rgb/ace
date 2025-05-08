import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="top">
          <div className="socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="legal">
          
            <Link to="/privacity">
            Política de Privacidade</Link>
            
            <Link to="/termos-uso">
            Termos de Uso</Link>
            
            
          </div>
        </div>
        <div className="bottom">
          <p>
            © {new Date().getFullYear()} Academia de Ciências Extraordinária. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
