import { useState } from "react";
import "../Component/Navbar.css"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap">
        <div className="brand">
          <div className="logo">PTT</div>
          <div className="brand-text">Pro <span>Tech</span> Touch</div>
        </div>

        <div 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </div>

        <nav className={`links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#why" onClick={() => setMenuOpen(false)}>Why Us</a>
          <a href="#contact" className="btn btn-accent" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
