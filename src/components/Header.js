import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      {/* Logo */}
      <Link to="/" className="logo">
        <span>Port</span>folio
      </Link>

      {/* Hamburger icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuActive ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {/* Navbar links */}
      <nav className={`navbar ${menuActive ? "active" : ""}`}>
        <Link to="/" onClick={toggleMenu}>Portfolio</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/education" onClick={toggleMenu}>Education</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        <Link to="/projects" onClick={toggleMenu}>Projects</Link>
        <Link to="/certificates" onClick={toggleMenu}>Certificates</Link>
      </nav>
    </header>
  );
};

export default Header;
