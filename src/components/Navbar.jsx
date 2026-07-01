import { HashLink } from "react-router-hash-link";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="nav">
      <div className="logo-box">
        <img
          src={process.env.PUBLIC_URL + "/images/logo.jpg"}
          alt="Easy Yatra Holidays"
          className="logo-img"
        />
        <h2>Easy Yatra Holidays</h2>
      </div>

      <ul className="menu">
        <li>
          <HashLink smooth to="/#home">Home</HashLink>
        </li>

        <li>
          <HashLink smooth to="/#about">About Us</HashLink>
        </li>

        <li>
          <HashLink smooth to="/#destination">Destination</HashLink>
        </li>

        <li>
          <HashLink smooth to="/#gallery">Gallery</HashLink>
        </li>

        <li>
          <HashLink smooth to="/#contact">Contact</HashLink>
        </li>
      </ul>

      <div className="phone">
        📞 +91 94832 39593
      </div>
    </header>
  );
}

export default Navbar;