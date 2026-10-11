
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav">
      <HashLink
        smooth
        to="/#home"
        className="logo-box"
        onClick={closeMenu}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/logo.jpg"}
          alt="Easy Yatra Holidays"
          className="logo-img"
        />
        <h2>Easy Yatra Holidays</h2>
      </HashLink>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul
        id="main-menu"
        className={`menu ${menuOpen ? "menu-open" : ""}`}
      >
        <li><HashLink smooth to="/#home" onClick={closeMenu}>Home</HashLink></li>
        <li><HashLink smooth to="/#about" onClick={closeMenu}>About Us</HashLink></li>
        <li><HashLink smooth to="/#destination" onClick={closeMenu}>Destination</HashLink></li>
        <li><HashLink smooth to="/#gallery" onClick={closeMenu}>Gallery</HashLink></li>
        <li><HashLink smooth to="/#contact" onClick={closeMenu}>Contact</HashLink></li>
      </ul>

      <a className="phone" href="tel:+919483239593">
        <FaPhoneAlt />
        <span>+91 94832 39593</span>
      </a>
    </header>
  );
}

export default Navbar;