import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/brasao-ace.png"; // Importação correta da imagem

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Brasão da ACE" className="logo" />
        </Link>
        <nav className="nav">
          <Link to="/" className="link">Início</Link>
          <Link to="/progamas" className="link">Progamas</Link>
          <Link to="/periodicos" className="link">Períodicos</Link>
          <Link to="/sobre" className="link">Sobre</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
