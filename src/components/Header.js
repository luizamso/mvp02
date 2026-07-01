import React from 'react';
import '../header.css';
import { Link } from 'react-router-dom';
import phosgraphein_logo from '../assets/phosgraphein_logo.png'
import { FaBars, FaTimes } from "react-icons/fa"; 
import { useState } from "react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const alternarMenu = () => {
      setMenuAberto(!menuAberto);
  };
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/"><img src={phosgraphein_logo} alt="Phosgraphein Logo" className="logo-img" /></Link>
        </div>
        <button className="menu-sanduiche-btn" onClick={alternarMenu}>
            {menuAberto ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`header-nav ${menuAberto ? "aberto" : ""}`}>
            <ul>
                <li><Link to="/" onClick={() => setMenuAberto(false)}>Início</Link></li>
                <li><Link to="/cursos" onClick={() => setMenuAberto(false)}>Cursos</Link></li>
                <li><Link to="/agenda" onClick={() => setMenuAberto(false)}>Agenda</Link></li>
            </ul>
        </nav>

      </div>
      
    </header>
  );
};

export default Header;