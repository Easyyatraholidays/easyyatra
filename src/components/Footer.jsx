import "../styles/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">

          <h2>Easy Yatra Holidays</h2>

          <p>A unit of Akarsh Enterprises</p>

         

          <p>📧 easyyatraholidays@gmail.com</p>
<a
  href="https://instagram.com/easyyatraholidays"
  target="_blank"
  rel="noreferrer"
  className="social-link"
>
 <FaInstagram className="insta-icon" />

</a>

<a
  href="https://www.facebook.com/share/1E5Xhv1utf/"
  target="_blank"
  rel="noreferrer"
  className="social-link"
>
 <FaFacebook className="fb-icon" />

</a>


        </div>

        {/* Team Section */}
        <div className="footer-section">

          <h2>FOUNDER</h2>

          <h3>Vishwas Pai</h3>

          <p>Udupi, Karnataka</p>

          <p>Ex Data Scientist</p>

          <p>📞 +91 94832 39593</p>

          <p>
            Founder & Tour Expert: Passionate Udupi local with hands-on
            experience in pilgrimage tours and international tours.
          </p>

        </div>

        {/* Contact CTA */}
        <div className="footer-section">

          <h2>Get in Touch</h2>

          <p>
            Ready for your next Yatra?
          </p>

          <p>
            DM us for brochures or custom itineraries.
          </p>


        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Easy Yatra Holidays. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;