import { useState } from "react";
import galleryData from "../galleryData";
import "../styles/GitHubGallery.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaTimes
} from "react-icons/fa";

function GitHubGallery({ folder, title }) {

  const images = galleryData[folder] || [];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const IMAGES_PER_PAGE = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);

  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;

  const currentImages = images.slice(
    startIndex,
    startIndex + IMAGES_PER_PAGE
  );

  const open = (index) => setSelectedIndex(index);

  const close = () => setSelectedIndex(null);

  const prev = () =>
    setSelectedIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () =>
    setSelectedIndex((i) =>
      i === images.length - 1 ? 0 : i + 1
    );

  return (
    <div>

      <h2 className="gallery-title">{title}</h2>

      <div className="github-gallery">

        {currentImages.map((image, index) => (

          <div
            key={startIndex + index}
            className={`github-gallery-item ${
              folder === "customer-reviews"
                ? "review-item"
                : ""
            }`}
          >

            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + image}
              alt=""
              onClick={() => open(startIndex + index)}
            />

          </div>

        ))}

      </div>

      {/* Pagination */}

      <div className="pagination">

        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (

          <button
            key={i}
            className={
              currentPage === i + 1
                ? "active-page"
                : ""
            }
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>

        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>

      </div>

      {/* Lightbox */}

      {selectedIndex !== null && (

        <div
          className="lightbox"
          onClick={close}
        >
<button className="lightbox-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <FaChevronLeft />
          </button>

          <img
            className="lightbox-image"
            src={process.env.PUBLIC_URL + images[selectedIndex]}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />

         <button className="lightbox-nav next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <FaChevronRight />
          </button>

          <button
            className="close-btn"
            onClick={close}
          >
            <FaTimes />
          </button>

          <a
            className="download-btn"
            href={process.env.PUBLIC_URL + images[selectedIndex]}
            download
            onClick={(e) => e.stopPropagation()}
          >
            <FaDownload />
          </a>

          <div className="counter">
            {selectedIndex + 1} / {images.length}
          </div>

        </div>

      )}

    </div>
  );
}

export default GitHubGallery;