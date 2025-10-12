import React, { Suspense } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import MouseSpotlight from "./components/mouse-spotlight.jsx";
import AnimatedBackground from "./components/animated-background.jsx";

// pages
import Home from "./pages/Home.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PortfolioGallery from "./pages/PortfolioGallery.jsx";
import Education from "./components/education.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <MouseSpotlight />
        <Navbar />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<ProjectsPage />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            <Route path="/about" element={<PortfolioGallery />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Suspense
          fallback={<div className="p-8 text-center">Loading...</div>}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
