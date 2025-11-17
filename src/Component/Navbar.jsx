import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Component/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const goTo = (sectionId) => {
    handleLinkClick();

    // 1. Home page par jao
    navigate("/", { replace: false });

    // 2. Scroll hone se pehle thoda wait (page render hone ka time)
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <header className="nav">
      <div className="wrap">
        <div className="brand">
          <button className="logo" onClick={() => goTo("home")}>PTT</button>
          <div className="brand-text">Pro <span>Tech</span> Touch</div>
        </div>

        <div 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </div>

        <nav className={`links ${menuOpen ? "open" : ""}`}>
          
          <button onClick={() => goTo("home")}>Home</button>
          <button onClick={() => goTo("services")}>Services</button>
          <button onClick={() => goTo("work")}>Work</button>
          <button onClick={() => goTo("why")}>Why Us</button>

          <button 
            className="btn btn-accent"
            onClick={() => goTo("contact")}
          >
            Contact
          </button>

        </nav>
      </div>
    </header>
  );
}
