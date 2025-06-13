import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../styles/Header.css";
import logo from "../assets/brasao-ace.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <img src={logo} alt="Brasão da ACE" className="logo" />
        </Link>

        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <Link to="/" className="link" onClick={() => setIsOpen(false)}>
            Início
          </Link>
          <Link to="/progamas" className="link" onClick={() => setIsOpen(false)}>
            Progamas
          </Link>
          <Link to="/periodicos" className="link" onClick={() => setIsOpen(false)}>
            Periódicos
          </Link>
          <Link to="/sobre" className="link" onClick={() => setIsOpen(false)}>
            Sobre
          </Link>
          <Link to="/auth" className="link auth" onClick={() => setIsOpen(false)}>
            Entrar
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
