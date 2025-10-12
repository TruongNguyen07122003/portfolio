import React from "react";
import avt1 from "../assets/avt1.jpg";
import avt2 from "../assets/avt2.jpg";
import avt3 from "../assets/avt3.jpg";
import avt4 from "../assets/avt4.jpg";
import avt5 from "../assets/avt5.jpg";
import avt6 from "../assets/avt6.jpg";
export default function PortfolioGallery() {
  const images = [
    { src: avt1, effect: "circle" },
    { src: avt2, effect: "square" },
    { src: avt3, effect: "heart" },
    { src: avt4, effect: "wave" },
    { src: avt5, effect: "gradient" },
    { src: avt6, effect: "shine" },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center p-10 transition-colors duration-500">
      <div className="gallery-grid w-[90%] max-w-6xl">
        {images.map((item, i) => (
          <div
            key={i}
            className="gallery-item relative overflow-hidden rounded-2xl shadow-lg transition-all duration-700 ease-out"
          >
            {/* Ảnh chính */}
            <img
              src={item.src}
              alt={`Portfolio ${i}`}
              className="gallery-img w-full h-64 object-cover"
            />

            {/* Hiệu ứng overlay (gentle radial glow) */}
            <div
              className={`overlay absolute inset-0 pointer-events-none opacity-0 transition-all duration-700 ease-out radial-glow`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* simplified overlay effect (gentle radial glow) */
const effectClasses = {};
