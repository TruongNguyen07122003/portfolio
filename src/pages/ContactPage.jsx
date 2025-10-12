import React from "react";

export default function PortfolioGallery() {
  const images = [
    { src: "/images/img1.jpg", effect: "circle" },
    { src: "/images/img2.jpg", effect: "square" },
    { src: "/images/img3.jpg", effect: "heart" },
    { src: "/images/img4.jpg", effect: "wave" },
    { src: "/images/img5.jpg", effect: "gradient" },
    { src: "/images/img6.jpg", effect: "shine" },
  ];

  return (
    <div className="bg-slate-900 min-h-screen flex justify-center items-center p-10">
      <div className="grid grid-cols-3 gap-6 group w-[80%]">
        {images.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl transition-all duration-700 ease-out"
          >
            {/* Ảnh */}
            <img
              src={item.src}
              alt={`Portfolio ${i}`}
              className="w-full h-full object-cover transition-all duration-700 ease-out 
                group-hover:grayscale brightness-75
                hover:grayscale-0 hover:brightness-110 hover:scale-105"
            />

            {/* Overlay hiệu ứng đặc biệt */}
            <div
              className={`absolute inset-0 opacity-0 hover:opacity-100 transition-all duration-700 ${
                effectClasses[item.effect]
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

const effectClasses = {
  circle:
    "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_70%)] animate-fade-glow",
  square:
    "bg-[conic-gradient(from_0deg,rgba(255,255,255,0.2),transparent_80%)] animate-spin-slow",
  heart:
    "before:content-[''] before:absolute before:w-10 before:h-10 before:bg-red-400 before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:animate-heart-pulse",
  wave: "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),transparent_80%)] animate-wave-expand",
  gradient:
    "bg-gradient-to-br from-pink-400/40 via-purple-400/30 to-blue-400/40 animate-gradient-move",
  shine:
    "bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.6),transparent)] bg-[length:200%_100%] animate-shine",
};
