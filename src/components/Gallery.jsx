import { Link } from "react-router-dom";
import "../styles/Gallery.css";

const images = [
  process.env.PUBLIC_URL + "/images/img1.jpg",
  process.env.PUBLIC_URL + "/images/img2.jpg",
  process.env.PUBLIC_URL + "/images/img3.jpg",
  process.env.PUBLIC_URL + "/images/img4.jpg",
  process.env.PUBLIC_URL + "/images/img5.jpg",
  process.env.PUBLIC_URL + "/images/img6.jpg",
  process.env.PUBLIC_URL + "/images/img7.jpg",
  process.env.PUBLIC_URL + "/images/img8.jpg",
  process.env.PUBLIC_URL + "/images/img9.jpg",
  process.env.PUBLIC_URL + "/images/img10.jpg",
  process.env.PUBLIC_URL + "/images/img11.jpg",
  process.env.PUBLIC_URL + "/images/img12.jpg"
];

function Gallery() {
  return (
    <section className="gallery" id="gallery">

      <p className="sub">TRAVEL GALLERY</p>
      <h2>Beautiful Moments</h2>

      <div className="gallery-grid">
        {images.slice(0, 6).map((img, i) => (
          <div className="gallery-item" key={i}>
            <img src={img} alt="travel" />
          </div>
        ))}
      </div>

      <div className="gallery-btn">
        <Link to="/gallery-page">
          <button>Explore Gallery</button>
        </Link>
      </div>

    </section>
  );
}

export default Gallery;