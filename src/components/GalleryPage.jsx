import { useState } from "react";
import ClientGroupPhotos from "./ClientGroupPhotos";
import TouristPlacesPhotos from "./TouristPlacesPhotos";
import CustomerReviews from "./CustomerReviews";
import "../styles/GalleryPage.css";

function GalleryPage() {

  const [activeTab, setActiveTab] = useState("clients");

  return (
    <div className="gallery-page">

      <div className="gallery-header">
        <p>EXPLORE OUR MEMORIES</p>
        <h1>Gallery</h1>
      </div>

      <div className="gallery-options">

        <div
          className={`option-card ${activeTab === "clients" ? "active" : ""}`}
          onClick={() => setActiveTab("clients")}
        >
          <span>📸</span>
          <h3>Client Group Photos</h3>
          <p>Beautiful memories with our happy travellers.</p>
        </div>

        <div
          className={`option-card ${activeTab === "places" ? "active" : ""}`}
          onClick={() => setActiveTab("places")}
        >
          <span>🏞️</span>
          <h3>Tourist Places</h3>
          <p>Explore stunning destinations we take you to.</p>
        </div>

        <div
          className={`option-card ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          <span>⭐</span>
          <h3>Customer Reviews</h3>
          <p>Hear what our happy customers say about us.</p>
        </div>

      </div>

      <div className="gallery-content">

        {activeTab === "clients" && <ClientGroupPhotos />}

        {activeTab === "places" && <TouristPlacesPhotos />}

        {activeTab === "reviews" && <CustomerReviews />}

      </div>

    </div>
  );
}

export default GalleryPage;