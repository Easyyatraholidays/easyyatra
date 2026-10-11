
import './App.css';
import { Routes, Route } from "react-router-dom";

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import About from './components/About';
import Gallery from './components/Gallery';
import GalleryPage from './components/GalleryPage';
import Backtotop from "./components/Backtotop";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Destinations />
      <Gallery />
      <Footer />
      <Backtotop />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/easy-yatra" element={<Home />} />
      <Route path="/gallery-page" element={<GalleryPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;