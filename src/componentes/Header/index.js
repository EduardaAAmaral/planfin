import React from "react";
import { Link } from "react-router-dom";
import './styles.modeloH.css'; 
import Img from "./favicon.ico"

const Header = () => (
  <header className="header-container">
    <nav className="nav-links">
      <div className="do_lado">
        <img src={Img} alt=" Logo"/>
        <h2 className="h2">Planfin+</h2>
      </div>
      <div className="baixo">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/cadastro" className="nav-link">Cadastro</Link>
      </div>
      
    </nav>
  </header>
);

export default Header;
