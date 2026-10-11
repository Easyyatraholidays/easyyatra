
import "../styles/Footer.css";
import { FaInstagram, FaFacebook, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section company-section">
          <h2>Easy Yatra Holidays</h2>
          <p className="footer-subtitle">A unit of Akarsh Enterprises</p>

          <p className="footer-contact">
            <FaEnvelope />
            <a href="mailto:easyyatraholidays@gmail.com">
              easyyatraholidays@gmail.com
            </a>
          </p>

          <div className="social-icons">
            <a
              href="https://instagram.com/easyyatraholidays"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/share/1E5Xhv1utf/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Founder Section */}
        <div className="footer-section">
          <h2>FOUNDER</h2>
          <h3>Vishwas Pai</h3>

          <p className="footer-contact">
            <FaMapMarkerAlt />
            Udupi, Karnataka
          </p>

          <p>Ex Data Scientist</p>

          <p className="footer-contact">
            <FaPhoneAlt />
            <a href="tel:+919483239593">+91 94832 39593</a>
          </p>

          <p>
            Founder &amp; Tour Expert: Passionate Udupi local with hands-on
            experience in pilgrimage tours and international tours.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="footer-section">
          <h2>Get in Touch</h2>

          <p>Ready for your next Yatra?</p>
          <p>DM us for brochures or custom itineraries.</p>

          <a
            href="mailto:easyyatraholidays@gmail.com"
            className="footer-cta"
          >
            Plan Your Yatra <span>→</span>
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Easy Yatra Holidays. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;