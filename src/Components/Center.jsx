import React, { useState } from "react";
import online2 from "../assets/online2.jpg";
import online1 from "../assets/online1.jpg";

const images = [online2, online1];

const Center = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full h-screen relative overflow-hidden pt-10">

      <div
        className="w-full h-full transition-all duration-700"
        style={{
          backgroundImage: `url(${images[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded"
      >
        ‹
      </button>


      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded"
      >
        ›
      </button>
    </div>
  );
};

export default Center;
