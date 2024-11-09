import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Imagenes/Logo.webp';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img 
          src={Logo} 
          alt="Logo de la Tienda"
          width="70px"
          height="70px"
        /> {/* Logo o nombre de la tienda */}
      </div>

      <nav className="nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/store">Todos los Productos</Link></li>
          <li><Link to="/monitors">Monitores</Link></li>
          <li><Link to="/keyboards">Teclados</Link></li>
          <li><Link to="/mice">Ratones</Link></li>
          <li><Link to="/headsets">Headsets</Link></li>
        </ul>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Buscar productos..." />
        <button>Buscar</button>
      </div>
    </header>
  );
};

export default Header;
